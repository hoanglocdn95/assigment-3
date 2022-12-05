const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

$(".btn-submit").onclick = function () {
  let pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const valueEmailInput = $("#email").value;
  if (valueEmailInput) {
    if (pattern.test(valueEmailInput)) {
      $(".input-email-form").style.display = "none";
      $(".info-form").style.display = "block";
    } else {
      $(".text-alert").innerHTML = "Email không đúng định dạng. Vui lòng nhập lại.";
      $(".text-alert").style.color = "red";
    }
  } else {
    $(".text-alert").innerHTML = "Vui lòng nhập vào email.";
    $(".text-alert").style.color = "red";
  }
};

$$(".btn-view").forEach((element) => {
  element.onclick = function () {
    const elementStyle = element.nextElementSibling.style;
    const { offsetHeight, scrollHeight } = element.nextElementSibling;
    console.log("🚀 ~ file: script.js:26 ~ $$ ~ offsetHeight", offsetHeight);
    element.children[0].style.transform = offsetHeight
      ? "rotate(0deg)"
      : "rotate(180deg)";
    element.children[1].textContent = offsetHeight ? "VIEW MORE" : "VIEW LESS";
    elementStyle.height = (offsetHeight ? 0 : scrollHeight) + "px";
  };
});

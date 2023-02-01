let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");

let isUsernameValid = () => {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
  return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener("input", () => {
  if (!isUsernameValid()) {
    messageRef.style.visibility = "hidden";
    usernameRef.style.cssText =
      "border-color: #fe2e2e;";
  } else {
    usernameRef.style.cssText =
      "border-color: #34bd34;";
  }
});

passwordRef.addEventListener("input", () => {
  if (!isPasswordValid()) {
    messageRef.style.visibility = "hidden";
    passwordRef.style.cssText =
      "border-color: #fe2e2e;";
  } else {
    passwordRef.style.cssText =
      "border-color: #34bd34;";
  }
});

submitBtn.addEventListener("mouseover", () => {
  if (!isUsernameValid() || !isPasswordValid()) {
    let containerRect = document
      .querySelector(".container")
      .getBoundingClientRect();
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log(offset);
    if (offset <= 100) {
      submitBtn.style.marginLeft = "auto";
    }
    else {
      submitBtn.style.marginLeft = "0";
    }
  }
});
submitBtn.addEventListener("click", () => {
  messageRef.style.visibility = "visible";
});
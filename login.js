let input = document.getElementById("password");
let btn = document.getElementById("eye-icon");

function InputSecretOrvisible() {
  btn.addEventListener("click", function () {
    if (InputCheckType()) {
      ShowPassword();
    } else {
      HidePassword();
    }
  });
}

function ShowPassword() {
  input.type = "text";
  btn.className = "fas fa-eye-slash ";
}

function HidePassword() {
  input.type = "password";
  btn.className = "fas fa-eye";
}

function InputCheckType() {
  if (input.type == "password" && btn.className == "fas fa-eye") {
    return true;
  }
  return false;
}

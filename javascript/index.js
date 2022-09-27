const passwordInput = document.getElementById("form-password");
const passwordStatus = document.getElementById("password-status");
const passwordColor = document.getElementById("password-color");

passwordInput.addEventListener("input", (event) => {
  const inputLength = event.target.value.length;
  const charsLeft = 12 - inputLength;

  // Menos de 12 caracteres = Too short
  if (charsLeft > 0) {
    passwordStatus.innerText = "Too short";
    passwordStatus.style.color = "#bababa";
    passwordColor.style.background = "#d74646";
    return;
  }

  // 12 - 15 == Easily cracked
  if (inputLength >= 12 && inputLength <= 15) {
    passwordStatus.innerText = "Easily cracked";
    passwordStatus.style.color = "#d74646";
    passwordColor.style.background = "#146fd6";
    return;
  }

  // 16 - 18 == Good job
  if (inputLength >= 16 && inputLength <= 18) {
    passwordStatus.innerText = "Good job";
    passwordStatus.style.color = "#146fd6";
    passwordColor.style.background = "#146fd6";
    return;
  }

  // + 19 == Perfect
  if (inputLength >= 19) {
    passwordStatus.innerText = "Perfect";
    passwordStatus.style.color = "#00b45d";
    passwordColor.style.background = "#00b45d";
    return;
  }
});

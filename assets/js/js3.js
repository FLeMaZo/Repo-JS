function validatePassword() {
    let d1 = document.getElementById("digit1").value;
    let d2 = document.getElementById("digit2").value;
    let d3 = document.getElementById("digit3").value;

    let password = d1 + d2 + d3;

    let result = document.getElementById("resultado");

    if (password === "911") {
      result.textContent = "password 1 correcto";
    } else if (password === "714") {
      result.textContent = "password 2 correcto";
    } else {
      result.textContent = "password incorrecto";
    }
  }
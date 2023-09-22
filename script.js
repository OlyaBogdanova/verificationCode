const codes = document.querySelectorAll(".code");
const btn = document.getElementById("btn");

codes[0].focus();

codes.forEach((code, i) => {
  code.addEventListener("keydown", (e) => {

    const promise = new Promise((resolve, reject) => {
      if (e.key >= 0 && e.key <= 9) {
        codes[i].value = "";

        setTimeout(() => {
          if (i + 1 < codes.length) {
            codes[i + 1].focus();
          }
          resolve(true);
        }, 0);
      } else if (e.key === "Backspace") {
        setTimeout(() => {
          if (i > 0) {
            codes[i - 1].focus();
          }

          resolve(true);
        }, 0);
      }
    });
    promise.then(checkedBtn);
  });
});

function checkedBtn() {
  const codesArr = document.querySelectorAll(".code");
  let codeString = [];
  codesArr.forEach((code) => {
    if (code.value) {
      codeString.push(code.value);
    }
  });
  if (codeString.length === 6) {
    btn.disabled = false;
    btn.focus();
  } else {
    btn.disabled = true;
  }
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && !btn.disabled) {
    codes[codes.length - 1].value = "";
    setTimeout(() => {
      codes[codes.length - 2].focus();
    }, 0);
    checkedBtn();
  }
});

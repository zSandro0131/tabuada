let input = document.getElementById("numberValue");
const table = document.querySelector(".tabuada");
const generateBtn = document.getElementById("btnGenerate");
const eraseBtn = document.getElementById("btnErase");

function writeTable() {
  let number = input.value;

    table.innerHTML = ''

  if (number == "") {
    alert("Digite um numero...");
  } else {
    for (let i = 0; i <= 10; i++) {
      table.innerHTML += number + " x " + i + " = " + number * i + "<br>";
    }

    table.style.display = "block";
  }
}

function eraseTable() {
  table.style.display = "none";
  table.innerHTML = "";
}

generateBtn.addEventListener("click", writeTable);
eraseBtn.addEventListener("click", eraseTable);

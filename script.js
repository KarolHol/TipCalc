const billInput = document.getElementById("billCost");
const people = document.getElementById("people");
const buttons = document.querySelectorAll(".left > aside > button");
const customTip = document.getElementById("tip");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");
const toValidation = document.querySelector(".peopleNumber");
const toValidation2 = document.querySelector(".bill");
const p = document.createElement("p");
const reset = document.getElementById("reset");
let bill = 0;
let peopleCount = 0;
let tip = 0;
let isZero1 = false;
let isZero2 = false;
let isReset = false;

customTip.addEventListener("input", () => {
  tip = customTip.value;
  Total();
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    tip = button.value;
    customTip.value = "";
    Total();
  });
});
billInput.addEventListener("input", () => {
  bill = document.getElementById("billCost").value;
  if (bill < 0) {
    p.style.color = "red";
    p.textContent = "Can't be less than zero";
    toValidation2.appendChild(p);
    billInput.setAttribute("style", "border: 2px solid red !important;");
    isZero2 = true;
  } else if (isZero2) {
    isZero2 = false;
    billInput.removeAttribute("style", "border: 2px solid red !important;");
    toValidation2.removeChild(p);
  }
  Total();
});
people.addEventListener("input", () => {
  peopleCount = document.getElementById("people").value;
  if (peopleCount < 0) {
    p.style.color = "red";
    p.textContent = "Can't be less than zero";
    toValidation.appendChild(p);
    people.setAttribute("style", "border: 2px solid red !important;");
    toValidation.appendChild(p);
    isZero1 = true;
  } else if (peopleCount == 0 && peopleCount != "") {
    p.style.color = "red";
    p.textContent = "Can't be a zero";
    toValidation.appendChild(p);
    people.setAttribute("style", "border: 2px solid red !important;");
    isZero1 = true;
  } else if (isZero1) {
    isZero1 = false;
    people.removeAttribute("style", "border: 2px solid red !important;");
    toValidation.removeChild(p);
  }
  Total();
});
function Total() {
  if (bill != 0 && peopleCount != 0 && tip != 0) {
    let tipCost = (bill / peopleCount) * (tip / 100);
    let totalCost = (bill / peopleCount) * (1 + tip / 100);
    tipAmount.textContent = "$" + tipCost.toFixed(2);
    total.textContent = "$" + totalCost.toFixed(2);
  } else if (bill != 0 && peopleCount != 0) {
    totalCost = bill / peopleCount;
    total.textContent = "$" + totalCost.toFixed(2);
  }
}
reset.addEventListener("click", () => {
  bill = 0;
  peopleCount = 0;
  tip = 0;
  isZero1 = false;
  billInput.value = "";
  customTip.value = "";
  people.value = "";
  total.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
});

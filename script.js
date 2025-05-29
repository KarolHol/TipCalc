const billInput = document.getElementById("billCost");
const people = document.getElementById("people");
const buttons = document.querySelectorAll(".left > aside > button");
const customTip = document.getElementById("tip");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");
const toValidation = document.querySelector(".peopleNumber");
const p = document.createElement("p");
const reset = document.getElementById("reset");
let bill = 0;
let peopleCount = 0;
let tip = 0;
let isZero = false;
let isReset = false;
customTip.addEventListener("input", () => {
  tip = customTip.value;
  Total();
  console.log(tip);
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    tip = button.value;
    customTip.value = "";
    Total();
    console.log(tip);
  });
});
billInput.addEventListener("input", () => {
  bill = document.getElementById("billCost").value;
  Total();
  console.log(bill);
});
people.addEventListener("input", () => {
  peopleCount = document.getElementById("people").value;
  if (peopleCount == 0 && peopleCount != "") {
    p.style.color = "red";
    p.textContent = "Can't be a zero";
    toValidation.appendChild(p);
    people.setAttribute("style", "border: 2px solid red !important;");
    console.log(people);
    isZero = true;
  } else if (isZero) {
    isZero = false;
    people.removeAttribute("style", "border: 2px solid red !important;");
    toValidation.removeChild(p);
  }
  Total();
  console.log(peopleCount);
});
function Total() {
  if (bill != 0 && peopleCount != 0 && tip != 0) {
    let tipCost = ((bill / peopleCount) * tip) / 10;
    let totalCost = (bill / peopleCount) * (1 + tip / 10);
    console.log(tipAmount, totalCost);

    tipAmount.textContent = "$" + tipCost.toFixed(2);
    total.textContent = "$" + totalCost.toFixed(2);
    console.log(totalCost);
  } else if (bill != 0 && peopleCount != 0) {
    totalCost = bill / peopleCount;
    total.textContent = "$" + totalCost.toFixed(2);
  }
  reset.addEventListener("click", () => {
    bill = 0;
    peopleCount = 0;
    tip = 0;
    isZero = false;
    billInput.value = "";
    customTip.value = "";
    people.value = "";
    total.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
  });
}

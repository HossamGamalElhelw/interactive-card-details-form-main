const btnConfirm = document.getElementById("btn_confirm"),
  inputs = document.querySelectorAll("input[type='number']"),
  cardNumber = document.querySelector("#card_number"),
  cardFrontNum = document.querySelector(".card-front-num"),
  cardOwner = document.querySelector(".card-owner"),
  cardName = document.querySelector("#card_name"),
  cardMoth = document.querySelector("#card_month"),
  cardYear = document.querySelector("#card_year"),
  cardDate = document.querySelector(".card-data"),
  cardCvc = document.querySelector("#card_cvc"),
  cardPassword = document.querySelector(".card-password"),
  errorMsg = document.querySelectorAll(".error-msg"),
  correctMsg = document.querySelector(".thank"),
  rightSide = document.querySelector(".right_section");

cardName.addEventListener("input", (event) => {
  const inputText = event.target.value;
  cardOwner.textContent = inputText;
});
cardNumber.addEventListener("input", (event) => {
  const inputText = event.target.value;
  cardFrontNum.textContent = inputText.replace(/(\d{4})/g, "$1 ");
});
cardMoth.addEventListener("input", (event) => {
  const inputText = event.target.value;
  cardDate.textContent = inputText;
});
cardYear.addEventListener("input", (event) => {
  const inputText = event.target.value;
  cardDate.textContent = cardMoth.value + "/" + inputText;
});

cardCvc.addEventListener("input", (event) => {
  const inputText = event.target.value;
  cardPassword.textContent = inputText;
});

function checkInputs() {
  let isEmpty = false;
  if (cardName.value === "") {
    isEmpty = true;
    errorMsg[0].style.display = "block";
  }
  if (cardNumber.value === "" || cardNumber.value.length < 14) {
    isEmpty = true;
    errorMsg[1].style.display = "block";
  }
  if (cardYear.value === "") {
    isEmpty = true;
    errorMsg[2].style.display = "block";
  }
  if (cardDate.value === "") {
    isEmpty = true;
    errorMsg[2].style.display = "block";
  }
  if (cardCvc.value === "") {
    isEmpty = true;
    errorMsg[2].style.display = "block";
  }
  return isEmpty;
}

btnConfirm.addEventListener("click", (event) => {
  event.preventDefault();
  if (!checkInputs()) {
    rightSide.style.display = "none";
    correctMsg.style.display = "block";
    correctMsg.style.opacity = 1;
    console.log("correctMsg shown");
  }
});


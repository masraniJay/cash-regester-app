const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const message = document.querySelector("#error-message");

const availableNotes=[2000, 500, 100, 20, 10, 5, 1];

function hideMessage(){
    message.style.display = "none";
 }
 
 function showMessage(msg){
     message.style.display = "block";
     message.innerText = msg;
 }

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount.value > 0){
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculate(amountToBeReturned);
    } else{
        showMessage("Invalid Bill Amount");
    }
});


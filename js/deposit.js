

function getInputFieldById(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;

    const inputFieldAmount = parseFloat(inputFieldString);

    inputField.value = '';

    return inputFieldAmount;
}

function getElementByValueById(elementId) {
    const totalElement = document.getElementById(elementId);

    const elementString = totalElement.innerText;

    const elementAmount = parseFloat(elementString);

    return elementAmount;

}

document.getElementById('btn-deposit').addEventListener('click', function () {



    const newDepositAmount = getInputFieldById('deposit-field');


    const currentTotalDeposit = getElementByValueById('total-deposit') + newDepositAmount;

    console.log(currentTotalDeposit);


})
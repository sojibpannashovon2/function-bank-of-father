
// Set even lisener handeller by btn-withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {

    // set the input deposit amount 

    const newWithdrawAmount = getInputFieldById('withdraw-field');

    // get the previous withdraw amount 

    const previousWitdrawAmount = getElementByValueById('total-withdraw');

    const currentWithdrawAmount = previousWitdrawAmount + newWithdrawAmount;

    setTextElementValueById('total-withdraw', currentWithdrawAmount);

    // get the previous balance amount

    const previoustotalBalance2 = getElementByValueById('total-balance');

    //calculate the current total balance

    const currentToBalance2 = previoustotalBalance2 - newWithdrawAmount;

    setTextElementValueById('total-balance', currentToBalance2);
})
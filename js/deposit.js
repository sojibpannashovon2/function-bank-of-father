


document.getElementById('btn-deposit').addEventListener('click', function () {



    const newDepositAmount = getInputFieldById('deposit-field');

    //get previous deposit by id


    const previousTotalDeposit = getElementByValueById('total-deposit');

    //Calculate the new deposit total

    const currentDepositAmount = previousTotalDeposit + newDepositAmount;

    // console.log(currentDepositAmount);

    setTextElementValueById('total-deposit', currentDepositAmount)

    // get previous balance total

    const previoustotalBalance = getElementByValueById('total-balance');


    // calculate the current balance total 

    const currentTotalBalance = previoustotalBalance + newDepositAmount;

    setTextElementValueById('total-balance', currentTotalBalance);




})
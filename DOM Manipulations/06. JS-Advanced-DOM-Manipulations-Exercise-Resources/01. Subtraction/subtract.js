function subtract() {
    const selectFirstNumber = document.getElementById('firstNumber');
    const selectSecondNumber = document.getElementById('secondNumber');

    let result = selectFirstNumber.value - selectSecondNumber.value;
    
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
}
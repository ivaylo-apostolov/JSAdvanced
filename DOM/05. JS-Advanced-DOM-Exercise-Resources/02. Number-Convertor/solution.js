function solve() {
    let locateTo = document.getElementById('selectMenuTo');

    function addBinary() {
        let binary = document.createElement('option');
        binary.value = 'binary';
        binary.textContent = 'Binary';

        document.querySelector("#selectMenuTo").appendChild(binary);
    }

    function addHexa() {
        let hexa = document.createElement('option');
        hexa.textContent = 'Hexadecimal';
        hexa.value = 'hexadecimal';

        document.querySelector("#selectMenuTo").appendChild(hexa);
    }

    addBinary();
    addHexa();


    document
        .querySelector("#container > button")
        .addEventListener('click', convert);

    function convert() {
        let number = Number(document.getElementById('input').value);
        let result;

        if (locateTo.value === 'binary') {
            result = binaryConvert(number);
        } else if (locateTo.value === 'hexadecimal') {
            result = hexadecimalConvert(number);
        }

        appendNumber(result);
    }

    function appendNumber(result) {
        document.getElementById('result').value = result;
    }

    function binaryConvert(number) {
        return (number >>> 0).toString(2);
    }

    function hexadecimalConvert(number) {
        return number.toString(16).toUpperCase();
    }
}
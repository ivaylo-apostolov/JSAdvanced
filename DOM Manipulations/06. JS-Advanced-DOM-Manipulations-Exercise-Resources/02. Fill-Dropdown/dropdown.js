function addItem() {
    const menu = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const selectValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = selectValue.value;

    menu.appendChild(option);

    text.value = '';
    selectValue.value = '';
}
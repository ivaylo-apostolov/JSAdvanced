function solve() {
    let addNewButton = document.querySelector("body > form > button");
    let bookTitle = document.querySelector("body > form > input[type=text]:nth-child(2)");
    let year = document.querySelector("body > form > input[type=number]:nth-child(4)");
    let price = document.querySelector("body > form > input[type=number]:nth-child(6)");
    let newBooksParentSection = document.querySelector("#outputs > section:nth-child(2) > div");
    let oldBooksParentSection = document.querySelector("#outputs > section:nth-child(1) > div");

    // document.addEventListener("DOMContentLoaded", x => {
    //     addNewButton.addEventListener('click', clickOnAddNewBook);
    addNewButton.addEventListener('click', (event) => {
        event.preventDefault();
        clickOnAddNewBook();
    });

    function clickOnAddNewBook() {
        if (year.value >= 2000) {
            createNewBook(newBooksParentSection, bookTitle.value, price.value);
        }
        else {
            createOldBook(oldBooksParentSection, bookTitle.value, price.value);
        }

        function createNewBook(parentSection, title, price) {
            let divBook = document.createElement('div');
            divBook.className = 'book';
            parentSection.appendChild(divBook);

            let paragraph = document.createElement('p');
            paragraph.textContent = `${title} [${price}]`;
            divBook.appendChild(paragraph);

            let buttonBuy = document.createElement('button');
            buttonBuy.textContent = `"Buy it only for ${price.toFixed(2)} BGN"`;
            divBook.appendChild(buttonBuy);

            let buttonMoveToOld = document.createElement('button');
            buttonMoveToOld.textContent = "Move to old section";
            divBook.appendChild(buttonMoveToOld);
        }

        function createOldBook(parentSection, title, price) {
            let divBook = document.createElement('div');
            divBook.className = 'book';
            parentSection.appendChild(divBook);

            let paragraph = document.createElement('p');
            paragraph.textContent = `${title} [${price}]`;
            divBook.appendChild(paragraph);

            let buttonBuy = document.createElement('button');
            let discountPrice = price - price * 0.15;
            buttonBuy.textContent = `"Buy it only for ${discountPrice.toFixed(2)} BGN"`;
            divBook.appendChild(buttonBuy);
        }
    }

    function moveToOldBooks(title, price) {
        createOldBook(oldBooksParentSection, title, price);
    }

    function buyABook(buttonLocator) {
        let buttonValue = buttonLocator.textContent;
        const regex = /[\d.]+/gm;
        let priceOfTheBook = Number(buttonValue.match(regex));

        let totalPriceValue = document.querySelector("body > h1:nth-child(3)").value;
        let totalCurentValue = Number(totalPriceValue.match(regex));
        let totalFinalValue = totalCurentValue + priceOfTheBook;
        buttonValue = buttonValue.replace(totalCurentValue, totalFinalValue);
        buttonLocator.textContent = buttonValue;

        let parentToDelete = buttonLocator.parentNode;
        parentToDelete.parentNode.removeChild(parentToDelete);
    }

}
function solve() {
  let addNewButton = document.querySelector("body > form > button");
  let bookTitle = document.querySelector(
    "body > form > input[type=text]:nth-child(2)"
  );
  let year = document.querySelector(
    "body > form > input[type=number]:nth-child(4)"
  );
  let price = document.querySelector(
    "body > form > input[type=number]:nth-child(6)"
  );
  let newBooksParentSection = document.querySelector(
    "#outputs > section:nth-child(2) > div"
  );
  let oldBooksParentSection = document.querySelector(
    "#outputs > section:nth-child(1) > div"
  );

  // document.addEventListener("DOMContentLoaded", x => {
  //     addNewButton.addEventListener('click', clickOnAddNewBook);
  addNewButton.addEventListener("click", event => {
    event.preventDefault();
    clickOnAddNewBook();
  });

  let divBookShelf = document.querySelector(
    "#outputs > section:nth-child(2) > div"
  );
  let divv = document.getElementById("outputs");
  divBookShelf.addEventListener("click", function(e) {
    if (e.target.textContent === "Move to old section") {
      let locatedButton = e.target;
      let parent = locatedButton.parentNode;
      let allText = parent.firstElementChild.textContent;
      let textPrice = parent.children[1].textContent;
      const regexTitle = /^[\w ]+/gm;
      const regexPrice = /[\d.]+/gm;
      let title = allText.match(regexTitle);
      let price = Number(textPrice.match(regexPrice));
      moveToOldBooks(title, price, year.value);
      parent.parentNode.removeChild(parent);
    }
  });

  function moveToOldBooks(title, price, year) {
    createOldBook(oldBooksParentSection, title, price, year);
  }

  divv.addEventListener("click", function(e) {
    if (e.target.textContent.includes("Buy")) {
      let buyButton = e.target;
      buyABook(buyButton);
    }
  });

  function buyABook(buttonLocator) {
    let buttonValue = buttonLocator.textContent;
    const regex = /[\d.]+/gm;
    //debugger;
    let priceOfTheBook = Number(buttonValue.match(regex));
    let totalPriceValue = document.querySelector("body > h1:nth-child(3)")
      .textContent;
    let totalCurentValue = Number(totalPriceValue.match(regex));
    let totalFinalValue = (totalCurentValue + priceOfTheBook).toFixed(2);
    document.querySelector(
      "body > h1:nth-child(3)"
    ).textContent = totalPriceValue.replace(totalCurentValue, totalFinalValue);

    let parentToDelete = buttonLocator.parentNode;
    parentToDelete.parentNode.removeChild(parentToDelete);
  }

  function clickOnAddNewBook() {
    if (year.value >= 2000) {
      createNewBook(
        newBooksParentSection,
        bookTitle.value,
        price.value,
        year.value
      );
    } else {
      createOldBook(
        oldBooksParentSection,
        bookTitle.value,
        price.value,
        year.value
      );
    }
  }

  function createNewBook(parentSection, title, price, year) {
    let divBook = document.createElement("div");
    divBook.className = "book";
    parentSection.appendChild(divBook);

    let paragraph = document.createElement("p");
    paragraph.textContent = `${title} [${year}]`;
    divBook.appendChild(paragraph);

    let buttonBuy = document.createElement("button");
    buttonBuy.textContent = `Buy it only for ${Number(price).toFixed(2)} BGN`;
    divBook.appendChild(buttonBuy);

    let buttonMoveToOld = document.createElement("button");
    buttonMoveToOld.textContent = "Move to old section";
    divBook.appendChild(buttonMoveToOld);
    clearInputs();
  }

  function createOldBook(parentSection, title, price, year) {
    let divBook = document.createElement("div");
    divBook.className = "book";
    parentSection.appendChild(divBook);

    let paragraph = document.createElement("p");
    paragraph.textContent = `${title} [${year}]`;
    divBook.appendChild(paragraph);
    let buttonBuy = document.createElement("button");
    let discountPrice = price - price * 0.15;
    buttonBuy.textContent = `"Buy it only for ${discountPrice.toFixed(2)} BGN"`;
    divBook.appendChild(buttonBuy);
    clearInputs();
  } 

  function clearInputs(){
      bookTitle.value = "";
      year.value = "";
      price.value = "";
  }
}

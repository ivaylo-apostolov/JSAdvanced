function acceptance() {
	let company = document.querySelector("#fields > td:nth-child(1) > input[type=text]");
	let product = document.querySelector("#fields > td:nth-child(2) > input[type=text]");
	let quantity = document.querySelector("#fields > td:nth-child(3) > input[type=text]");
	let scrape = document.querySelector("#fields > td:nth-child(4) > input[type=text]");
	let addButton = document.querySelector("#acceptance");
	let divWarehouse = document.getElementById('warehouse');

	addButton.addEventListener('click', addItem);
	divWarehouse.addEventListener('click', function(e) {
		if(e.target.textContent === 'Out of stock') {
			let outOfStockButton = e.target;
			removeFromWarehouse(outOfStockButton);
		}
	})

	function removeFromWarehouse(button) {
		let divToRemove = button.parentNode;
		divWarehouse.removeChild(divToRemove);
	}
	function addItem() {
		if(company.value && product.value &&
			parseInt(quantity.value) && parseInt(scrape.value) &&
			quantity.value - scrape.value > 0) {
				let divContainer = document.createElement('div');

				let p = document.createElement('p');
				p.textContent = `[${company.value}] ${product.value} - ${quantity.value - scrape.value} pieces`;
				divContainer.appendChild(p);

				let button = document.createElement('button');
				button.textContent = 'Out of stock';
				divContainer.appendChild(button);

				divWarehouse.appendChild(divContainer);
		}

		company.value = '';
		product.value = '';
		quantity.value = '';
		scrape.value = '';
	}
}
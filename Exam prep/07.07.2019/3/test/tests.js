const PizzUni = require('../index.js');

assert = require('chai').assert;
expect = require('chai').expect;

describe("PizzUni", function () {
    it('constructor', function () { 
        let pizza = new PizzUni()
        assert.equal(pizza.registeredUsers.length, 0);
        expect(pizza.availableProducts).to.be.a('object');
        assert.equal(pizza.availableProducts.pizzas.length, 3);
        expect(pizza.availableProducts.pizzas[0]).to.be.a('string');
        expect(pizza.availableProducts.pizzas[1]).to.be.a('string');
        expect(pizza.availableProducts.pizzas[2]).to.be.a('string');
        assert.equal(pizza.availableProducts.drinks.length, 3);
        expect(pizza.availableProducts.drinks[0]).to.be.a('string');
        expect(pizza.availableProducts.drinks[1]).to.be.a('string');
        expect(pizza.availableProducts.drinks[2]).to.be.a('string');
        assert.equal(pizza.orders.length, 0);
    });
    it('registerUser', function () { 
        let pizza = new PizzUni();
        pizza.registerUser("ivocom");
        assert.equal(pizza.registeredUsers.length, 1);
        expect(pizza.registeredUsers[0]).to.be.a('object');
        assert.equal(pizza.registeredUsers[0].orderHistory.length, 0);
        expect(() => pizza.registerUser('ivocom')).to.Throw(`This email address (ivocom) is already being used!`);
        expect(pizza.registerUser('newmail')).to.be.a('object');
    });
    it('makeAnOrder1', function () { 
        let pizza = new PizzUni();
        expect(() => pizza.makeAnOrder('ivocom', 'margarita', 'cola')).to.Throw("You must be registered to make orders!");
    });
    it('makeAnOrder2', function () { 
        let pizza = new PizzUni();        
        pizza.registerUser("ivocom");
        expect(() => pizza.makeAnOrder('ivocom', 'margarita', 'Coca-Cola')).to.Throw("You must order at least 1 Pizza to finish the order.");
    });
    it('makeAnOrder3', function () { 
        let pizza = new PizzUni();        
        pizza.registerUser("ivocom");
        pizza.makeAnOrder('ivocom', 'Italian Style', 'Coca-Cola');
        assert.equal(pizza.orders.length, 1)
        expect(pizza.orders[0]).to.be.a('object')

    });
    it('completeOrder', function () { 
        let pizza = new PizzUni();        
        pizza.registerUser("ivocom");
        pizza.makeAnOrder('ivocom', 'Italian Style', 'Coca-Cola');
        pizza.completeOrder();
        assert.equal(pizza.orders[0].status, 'completed');
    });
    it('detailsAboutMyOrder', function () { 
        let pizza = new PizzUni();        
        pizza.registerUser("ivocom");
        pizza.makeAnOrder('ivocom', 'Italian Style', 'Coca-Cola');
        assert.equal(pizza.detailsAboutMyOrder(0), 'Status of your order: pending')
    });
    it('doesTheUserExist', function () { 
        let pizza = new PizzUni();        
        pizza.registerUser("ivocom");
        expect(pizza.doesTheUserExist('ivocom')).to.be.a('object');
    });    
});
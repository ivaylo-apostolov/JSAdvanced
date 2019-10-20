const PizzaUni = require('../PizzaUni.js');

let { expect, assert } = require('chai');

describe("PizzUni", function () {
    it('registeredUsers - by default is an empty array', function () {
        let pizza = new PizzaUni();
        let expected = pizza.registeredUsers.length;
        assert.equal(expected, 0);
    });
    it('availableProducts - by default is an object that must have only 2 properties:', function () {
        let pizza = new PizzaUni();
        let expected = Object.keys(pizza.availableProducts);
        assert.equal(expected.length, 2);
    });
    it('pizzas - array with 3 strings:("Italian Style", "Barbeque Classic" and "Classic Margherita")', function () {
        let pizza = new PizzaUni();
        let expected = Object.values(pizza.availableProducts.pizzas);
        expect(expected).to.have.members(['Italian Style', 'Barbeque Classic', 'Classic Margherita']);
    });
    it('drinks - array with 3 strings ("Coca-Cola", "Fanta" and "Water")', function () {
        let pizza = new PizzaUni();
        let expected = Object.values(pizza.availableProducts.drinks);
        expect(expected).to.have.members(['Coca-Cola', 'Fanta', 'Water']);
    });
    it('orders - by default is an empty array', function () {
        let pizza = new PizzaUni();
        let expected = pizza.orders.length;
        assert.equal(expected, 0);
    });
    it('If the email is already used for registration before that', function () {
        let pizza = new PizzaUni();
        let email = "Ivo"
        pizza.registerUser(email);
        expect(() => pizza.registerUser(email)).to.Throw(`This email address (${email}) is already being used!`)
    });
    it('Otherwise, the given email is successfully registered to the registeredUsers property as an object.', function () {
        let pizza = new PizzaUni();
        let email = "Ivo"
        pizza.registerUser(email);
        expected = pizza.registeredUsers.length;
        assert.equal(expected, 1);
    });
    it('At the end, the current object should be returned.', function () {
        let pizza = new PizzaUni();
        let email = "Ivo"
        let expected = pizza.registerUser(email); 
        expect(expected).to.be.a('object');
    });
    it('validate first prop', function () {
        let pizza = new PizzaUni();
        let email = "Ivo"
        let expected = pizza.registerUser(email);
        assert.equal(expected['email'], email);
    });
    it('validate sec prop', function () {
        let pizza = new PizzaUni();
        let email = "Ivo"
        let expected = pizza.registerUser(email);
        assert.equal(expected['orderHistory'].length, 0);
    });

})
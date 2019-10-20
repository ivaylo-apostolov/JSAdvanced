const BookStore = require('../index.js')

let assert = require('chai').assert;
let expect = require('chai').expect;

describe("BookStore", function () {
    it('Instantiation with one parameter - a string representing the bookstore name, and an additional properties called "books" and "workers" - an empty arrays by default.', function () {        
        let book = new BookStore('Book');
        assert.equal(book.name, "Book");
        assert.equal(book.books.length, 0);
        assert.equal(book.workers.length, 0);
    });
    it('Function stockBooks()', function () {        
        let book = new BookStore('Book');
        let arr = ['ivo-gosho', 'pesho-tosho'];
        let count = book.stockBooks(arr).length;
        assert.equal(count, 2);
        expect(book.stockBooks(arr)).to.be.a('array');
    });
    it('Function hire()', function () {        
        let book = new BookStore('Book');
        assert.equal(book.hire("Ivaylo", "FrontEndDev"), 
        "Ivaylo started work at Book as FrontEndDev");
        assert.equal(book.workers.length, 1);
        expect(() => book.hire("Ivaylo", "FrontEndDev")).to.Throw('This person is our employee');
    });
    it('Function fire() ', function () {        
        let book = new BookStore('Book');
        book.hire(book.hire("Ivaylo", "FrontEndDev"));
        assert.equal(book.fire("Ivaylo"), 'Ivaylo is fired')
        assert.equal(book.workers.length, 1);
        expect(() => book.fire("Ivaylo")).to.Throw('Ivaylo doesn\'t work here')
    });
    it('Function sellBook()', function () {        
        let book = new BookStore('Book');
        //expect(() => book.sellBook("Rai", "Ivaylo")).to.Throw('This book is out of stock');
        book.books.push("Rai");
        expect(() => book.sellBook("Rai", "Ivaylo")).to.Throw('Ivaylo is not working here');
    });
});
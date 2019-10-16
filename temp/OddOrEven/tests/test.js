const isOddOrEven = require('../index.js');


let { expect, assert } = require('chai');

describe('isOddOrEven function', function(){
    it('Pass number to return undefined', function(){
        let actual = isOddOrEven(2);
        assert.equal(actual, undefined)
    })
    it('Pass to return odd', function(){
        let actual = isOddOrEven('odd');
        assert.equal(actual, 'odd');
    })
    it('Test number to return even', function(){
        let actual = isOddOrEven('even');
        assert.equal(actual, 'even');
    })
})

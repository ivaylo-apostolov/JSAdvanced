const AutoService = require('../index.js');

let assert = require('chai').assert;
let expect = require('chai').expect;

describe("AutoService", function () {
    it('Instantiation with one parameter ', function () {
        let auto = new AutoService(12);
        assert.equal(auto.garageCapacity, 12);
        assert.equal(auto.workInProgress.length, 0);
        assert.equal(auto.backlogWork.length, 0);
    });
    it('Accessor availableSpace', function () {
        let auto = new AutoService(12);
        assert.equal(auto.availableSpace, 12);
    });
    it('Function signupForReview 2', function () {
        let auto = new AutoService(1);
        auto.signUpForReview("Ivaylo", 'CB1427MK', 'subaru');
        assert.equal(auto.workInProgress.length, 1);
        auto.signUpForReview("Ivaylo2", 'CB1427MK', 'subaru');
        assert.equal(auto.backlogWork.length, 1);
        //check props for the added car?
    });
    it('Function carInfo', function () {
        let auto = new AutoService(1);
        auto.signUpForReview("Ivaylo", 'CB1427MK', 'subaru');
        auto.signUpForReview("Ivaylo2", 'CB1427MK', 'subaru');
        expect(auto.carInfo('CB1427MK', "Ivaylo")).to.be.a('object');
        assert.equal(auto.carInfo('CB1427MK3', "Ivaylo3"), 'There is no car with platenumber CB1427MK3 and owner Ivaylo3.');
    });
    it('Function repairCar()', function () {
        let auto = new AutoService(1);
        assert.equal(auto.repairCar(), 'No clients, we are just chilling...');
        auto.signUpForReview("Ivaylo", 'CB1427MK', 'subaru');
        assert.equal(auto.repairCar(), 'Your car was fine, nothing was repaired.');
        auto.signUpForReview("Ivaylo2", 'CB1427MK', 'subaru');
        auto.signUpForReview("Ivaylo", 'CB1427MK', 'broken');
        let car = auto.carInfo('CB1427MK', "Ivaylo");
    });
});
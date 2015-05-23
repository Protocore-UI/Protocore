'use strict';

describe('Home View Test', function() {

    // var chai = require('chai');
    var expect = chai.expect;

    /**
     * Runs before all tests in this block.
     */
    before(function() {
        console.log("Runs before all tests in this block");
    });

    /**
     * Runs before all tests in this block.
     */
    after(function() {
        // runs after all tests in this block
        console.log("Runs after all tests in this block");
    });

    /**
     * Runs before each test in this block.
     */
    beforeEach(function() {
        console.log("Runs before each test in this block");
    });

    /**
     * Runs before each tests in this block.
     */
    afterEach(function() {
        console.log("Runs after each test in this block");
    });


    describe("Equal 1", function() {
        it("Should be equal 1", function() {
            expect("string").to.be.a('string');
        });

        it("Should be equal 2", function() {
            expect("string").to.be.a('string');
        });

        it("Should be equal 3", function() {
            expect("string").to.be.a('string');
        });
    });

    describe("Equal 2", function() {
        it("Should be equal 1", function() {
            expect("string").to.be.a('string');
        });
    });
})
define(function(require) {

    'use strict';

    describe('About View Test', function() {

        // var chai = require('chai');
        var expect = chai.expect;
        var AboutView = require('../../../src/apps/views/aboutView');

        /**
         * Runs before all tests in this block.
         */
        before(function() {
            this.aboutView = new AboutView();
        });

        /**
         * Runs before all tests in this block.
         */
        after(function() {
        });

        /**
         * Runs before each test in this block.
         */
        beforeEach(function() {
        });

        /**
         * Runs before each tests in this block.
         */
        afterEach(function() {
        });


        describe("Check instances and functions", function() {
            it("An instance of home view", function() {
                expect(this.aboutView).to.be.a.instanceof(AboutView);
            });
        });
    })
});
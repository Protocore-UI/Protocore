define(function(require) {

    'use strict';

    describe('Home View Test', function() {

        // var chai = require('chai');
        var expect = chai.expect;
        var HomeView = require('../../../src/apps/views/homeView');

        /**
         * Runs before all tests in this block.
         */
        before(function() {
            this.homeView = new HomeView();
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
                expect(this.homeView).to.be.a.instanceof(HomeView);
            });

            it("Is before render method exist", function() {
                expect(this.homeView.beforeRender).to.exist;
            });

            it("Is after render method exist", function() {
                expect(this.homeView.afterRender).to.exist;
            });

            it("Is eventHash method exist", function() {
                expect(this.homeView.eventsHash).to.exist;
            });
        });
    })
});
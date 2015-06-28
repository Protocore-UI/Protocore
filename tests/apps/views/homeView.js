define(['src/views/homeView'], function(homeView) {

    'use strict';

    var expect = {};
    var homeview = {};

    describe('Homeview Test', function() {
        
        before(function() {
            expect = chai.expect;
            homeview = new homeView();
        });

        describe("Object existence", function() {
                
            it("Is homeview instance exist", function() {
                expect(homeview).exist;
            });

            it("Is instance of", function() {
                expect(homeview).to.be.instanceOf(homeView);
            });

            it("Is beforeRender exist", function() {
                expect(homeview.beforeRender).exist;
            });

            it("Is afterRender exist", function() {
                expect(homeview.afterRender).exist;
            });

            it("Is eventsHash exist", function() {
                expect(homeview.eventsHash).exist;
            });

        });

        after(function() {
            expect = homeview = {};
        });
    });

});
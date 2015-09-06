define(['src/views/aboutView'], function(aboutView) {

    'use strict';

    var expect = {};
    var aboutview = {};

    describe('Aboutview Test', function() {
        
        before(function() {
            expect = chai.expect;
            aboutview = new aboutView();
        });

        describe("Object existence", function() {
                
            it("Is aboutview instance exist", function() {
                expect(aboutview).exist;
            });

            it("Is instance of", function() {
                expect(aboutview).to.be.instanceOf(aboutView);
            });

            it("Is beforeRender exist", function() {
                expect(aboutview.beforeRender).exist;
            });

            it("Is afterRender exist", function() {
                expect(aboutview.afterRender).exist;
            });

            it("Is eventsHash exist", function() {
                expect(aboutview.eventsHash).exist;
            });

        });

        after(function() {
            expect = aboutview = {};
        });
    });

});
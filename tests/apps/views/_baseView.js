define(['src/views/_baseView'], function(_baseView) {

    'use strict';

    var expect = {};
    var _baseview = {};

    describe('Baseview Test', function() {
        
        before(function() {
            expect = chai.expect;
            _baseview = new _baseView();
        });

        describe("Object existence", function() {
                
            it("Is _baseview instance exist", function() {
                expect(_baseview).exist;
            });

            it("Is instance of", function() {
                expect(_baseview).to.be.instanceOf(_baseView);
            });

            it("Is initialize exist", function() {
                expect(_baseview.initialize).exist;
            });

            it("Is render exist", function() {
                expect(_baseview.render).exist;
            });

        });

        after(function() {
            expect = _baseview = {};
        });
    });

});
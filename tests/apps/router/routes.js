define(function() {

    'use strict';

    var expect = {};

    describe('Routes Test', function() {
        
        before(function() {
            expect = chai.expect;
        });

        describe("Equal", function() {
            it("Should be equal", function() {
                expect("string").to.be.a('string');
            });
        });

        after(function() {
            expect = {};
        });
    });

});
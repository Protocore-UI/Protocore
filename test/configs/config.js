define(['mocha', 'chai'], function(mocha, chai) {

	"use strict";

	return function() {

		this.initialize = function() {
			console.log("Log: initialize Mocha setup");
			mocha.setup('bdd');

			/**
			 * Chai need to be expose global
			 * https://github.com/chaijs/chai/issues/448
			 */
			window.chai = chai;
		},

		this.runMocha = function() {
			console.log("Log: Run Mocha");
			mocha.run();
		},

		this.initialize();
	};
    
});
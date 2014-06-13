define(function(require) {
	'use strict';

	var $ = require('jquery'),
		aboutTemplate = require('text!templates/aboutTpl.html');

	return function() {

		this.initialize = function() {
			this.render();
		},

		this.render = function() {
			$('body').html(aboutTemplate);
		},

		this.initialize();

	};
});
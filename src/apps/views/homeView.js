define(function(require) {
	'use strict';

	var $ = require('jquery'),
		homeTemplate = require('text!templates/homeTpl.html');

	return function() {

		this.initialize = function() {
			this.render();
		},

		this.render = function() {
			$('body').html(homeTemplate);
		};
	};
});
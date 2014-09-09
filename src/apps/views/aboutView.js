define(function(require) {
	'use strict';

	var AboutTemplate = require('text!templates/aboutTpl.html'),
		BaseView = require('views/_baseView');

	var AboutView = function() {

		// @params: el (DOM Reference), template
		BaseView.call(this, 'body', AboutTemplate);
	};

	AboutView.prototype = new BaseView();

	return AboutView;
});
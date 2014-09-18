define(function(require) {
	'use strict';

	var AboutTemplate = require('template!templates/aboutTpl'),
		BaseView = require('views/_baseView');

	var AboutView = function() {

		// @params: el (DOM Reference), template
		BaseView.call(this, 'body', AboutTemplate);
	};

	AboutView.prototype = new BaseView();

	return AboutView;
});
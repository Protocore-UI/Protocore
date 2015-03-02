define(function(require) {
	'use strict';

	var HomeTemplate = require('template!templates/homeTpl'),
		BaseView = require('apps/views/_baseView');

	var HomeView = function() {

		// @params: el (DOM Reference), template
		BaseView.call(this, 'body', HomeTemplate);
	};

	HomeView.prototype = new BaseView();

	return HomeView;
});
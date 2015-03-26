define(function(require) {
	'use strict';

	var HomeTemplate = require('template!templates/homeTpl'),
		BaseView = require('apps/views/_baseView');

	var HomeView = function() {

		// @params: el (DOM Reference), template
		BaseView.call(this, 'body', HomeTemplate);
	};

	HomeView.prototype = new BaseView();

	HomeView.prototype.beforeRender = function() {
		console.log("LOG: HomeView Before Render");
	};

	HomeView.prototype.afterRender = function() {
		console.log("LOG: HomeView After Render");
	};

	HomeView.prototype.eventsHash = function() {
		console.log("LOG: HomeView Events Hash");
	};

	return HomeView;
});
define(function(require) {
	'use strict';

	var $ = require('jquery');

	var BaseView = function(el, template) {
		this.el = el;

		this.template = template;
	};

	BaseView.prototype.initialize = function() {
		console.log("LOG: Initialize Baseview");

		this.render();
	};

	BaseView.prototype.render = function() {
		console.log("LOG: Executed Baseview Render");

		$(this.el).html(this.template);
	};

	return BaseView;
});
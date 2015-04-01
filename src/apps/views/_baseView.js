define(function(require) {
	'use strict';

	var $ = require('jquery');

	var BaseView = function(el, template) {
		this.el = el || 'body';
		this.template = template;
	};

	BaseView.prototype.initialize = function() {
		console.log("LOG: Initialize Baseview");

		this.render();
	};

	BaseView.prototype.render = function() {
		console.log("LOG: Executed Baseview Render");

		if (this.beforeRender) {
			this.beforeRender();
		}

		if (this.template && this.el) {
			$(this.el).html(this.template);

			if (this.afterRender) {
				this.afterRender();
			}

			if (this.eventsHash) {
				this.eventsHash();
			}
		}
	};

	return BaseView;
});
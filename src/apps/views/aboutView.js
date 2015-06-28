define(function(require) {
    'use strict';

    var AboutTemplate = require('text!../templates/aboutTpl.html'),
        BaseView = require('apps/views/_baseView');

    var AboutView = function() {

        // @params: el (DOM Reference), template
        BaseView.call(this, 'body', AboutTemplate);
    };

    AboutView.prototype = new BaseView();

    AboutView.prototype.beforeRender = function() {
        console.log("LOG: AboutView Before Render");
    };

    AboutView.prototype.afterRender = function() {
        console.log("LOG: AboutView After Render");
    };

    AboutView.prototype.eventsHash = function() {
        console.log("LOG: AboutView Events Hash");
    };
    
    return AboutView;
});
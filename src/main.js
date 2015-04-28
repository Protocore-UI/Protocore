/***
 * The goal of this file is mainly to intialize require.js AMD module loader configuration.
 */
requirejs.config({
    /***
     * The path where your JavaScripts files are located.
     */
    baseUrl: '.',

    /***
     * Path config is also part of Require and allows to define paths for vendors
     * not found directly under baseUrl.
     * See http://requirejs.org/docs/api.html#config-paths for details.
     */
    paths: {
        /*** List of frameworks/libraries to be included in the codebase. ***/
        'jquery': 'bower_components/jquery/jquery.min',
        'signals': 'bower_components/js-signals/dist/signals.min',
        'hasher': 'bower_components/hasher/dist/js/hasher.min',
        'crossroads': 'bower_components/crossroads/dist/crossroads.min',
        'text': 'bower_components/requirejs-text/text',
        'handlebars': 'bower_components/handlebars/handlebars.min',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
        'template': 'systems/utilities/hb-template-mapper',
        'templates': '../../templates'
    },

    /***
     * shim config is part of `Require 2.0`_ and allows to Configure the dependencies
     * and exports for older, traditional “browser globals” scripts that do not use
     * define() to declare the dependencies and set a module value.
     * See http://requirejs.org/docs/api.html#config-shim for more details.
     */
    shim: {
        text: {
            exports: 'text'
        },
        signals: {
            exports: 'signals'
        },
        hasher: {
            deps: ['signals'],
            exports: 'hasher'
        },
        crossroads: {
            deps: ['signals', 'hasher'],
            exports: 'crossroads'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});

require(['apps/router/routes']);
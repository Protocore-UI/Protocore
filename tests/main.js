requirejs.config({
    baseUrl: "../src",

    paths: {
        "mocha": "../node_modules/mocha/mocha",
        "chai": "../node_modules/chai/chai",
        "configDir": "../tests/configs",
        "configFile": "../tests/configs/config",
        "testsDir": "../tests/apps",
        "src": "../src/apps",
        'jquery': '../src/bower_components/jquery/jquery.min',
        'handlebars': '../src/bower_components/handlebars/handlebars.min',
        'signals': 'bower_components/js-signals/dist/signals.min',
        'hasher': 'bower_components/hasher/dist/js/hasher.min',
        'crossroads': 'bower_components/crossroads/dist/crossroads.min',
        'text': 'bower_components/requirejs-text/text'
    },

    shim: {
        "mocha": {
            exports: "mocha"
        },
        "chai": {
            exports: "chai"
        },
        "signals": {
            exports: 'signals'
        },
        "hasher": {
            deps: ['signals'],
            exports: 'hasher'
        },
        "crossroads": {
            deps: ['signals', 'hasher'],
            exports: 'crossroads'
        }
    }
});

require(['configFile'], function(config) {
    var config = new config();

    require(['configDir/serve-test-files'], function() {
        config.runMocha();
    });
});
requirejs.config({
    baseUrl: "../src",

    paths: {
        "mocha": "../node_modules/mocha/mocha",
        "chai": "../node_modules/chai/chai",
        "configDir": "../tests/configs",
        "configFile": "../tests/configs/config",
        "testsDir": "../tests/apps",
        "src": "../src/apps"
    },

    shim: {
        "mocha": {
            exports: "mocha"
        },
        "chai": {
            exports: "chai"
        }
    }
});

require(['configFile'], function(config) {
    var config = new config();

    require(['configDir/serve-test-files'], function() {
        config.runMocha();
    });
});
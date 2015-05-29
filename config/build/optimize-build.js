({
    name: "main",
    baseUrl: "../../src/",
    mainConfigFile: "../../src/main.js",
    out: "../../src/main-optimize.js",
    optimize: "uglify2",
    include: [
        'apps/views/homeView',
        'apps/views/aboutView'
    ]
})
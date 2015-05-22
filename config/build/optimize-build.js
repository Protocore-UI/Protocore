({
    name: "main",
    baseUrl: "../../src/",
    mainConfigFile: "../../src/main.js",
    out: "../../src/main-optimize.js",
    optimize: "none",
    include: [
        'apps/views/homeView',
        'apps/views/aboutView'
    ]
})
module.exports = function(grunt) {
    'use strict';

    /**
     * Setup configuration
     */
    grunt.initConfig({
        SERVE: grunt.file.readJSON('config/servefiles.json'),

        PRODUCT: grunt.file.readJSON('config/banner.json'),

        buildTags: "/* Project Name : <%= PRODUCT.application.name %> Release version : <%= PRODUCT.application.version %> */",

        clean: {
            build: ['<%= SERVE.build.clean.files %>']
        },

        shell: {
            uglify: {
                command: [
                    "node src/bower_components/rjs/dist/r.js -o config/build/optimize-build.js",
                    "node src/bower_components/rjs/dist/r.js -o config/build/copy-build.js",
                    "rm src/main-optimize.js",
                    "rm prod/main.js",
                    "mv prod/main-optimize.js prod/main.js"
                ].join('&&')
            }
        },

        usebanner: {
            buildTags: {
                options: '<%= SERVE.build.banner.options %>',
                files: {
                    src: '<%= SERVE.build.banner.files %>'
                }
            }
        },

        jshint: {
            options: '<%= SERVE.lint.js.options %>',
            all: '<%= SERVE.lint.js.files %>'
        },

        jscs: {
            options: '<%= SERVE.lint.jscs.options %>',
            src: '<%= SERVE.lint.jscs.files %>',
        },

        jsonlint: {
            files: '<%= SERVE.lint.json.files %>'
        },

        csslint: {
            strict: {
                options: '<%= SERVE.lint.css.options %>',
                src: '<%= SERVE.lint.css.files %>'
            }
        },

        htmlhint: {
            Root_HTML_Files: {
                options: '<%= SERVE.lint.html.root.options %>',
                src: '<%= SERVE.lint.html.root.files %>'
            },
            Templates: {
                options: '<%= SERVE.lint.html.template.options %>',
                src: '<%= SERVE.lint.html.template.files %>'
            }
        },

        less: {
            dev: {
                options: '<%= SERVE.compile.less.options %>',
                files: '<%= SERVE.compile.less.files %>'
            }
        },

        watch: {
            less: {
                options: '<%= SERVE.watch.less.options %>',
                files: '<%= SERVE.watch.less.files %>',
                tasks: ['less:dev']
            }
        },

        strip: {
            main: {
                src: '<%= SERVE.build.strip.files %>',
                options: '<%= SERVE.build.strip.options %>'
            }
        },

        htmlmin: {
            dist: {
                options: '<%= SERVE.build.minify.html.options %>',
                files: '<%= SERVE.build.minify.html.files %>'
            }
        },

        plato: {
            report: {
                files: {
                    'reports': '<%= SERVE.lint.reports.files %>'
                }
            }
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-strip');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-plato');

    /**
     * Define tasks : Tasks for development eco - system.
     */
    grunt.registerTask('default', [
        'htmlhint',
        'jsonlint',
        'jscs',
        'jshint',
        'compileLessDev',
        'csslint',
        'plato'
    ]);

    /**
     * Define tasks : Tasks for build eco - system.
     */
    grunt.registerTask('build', [
        'htmlhint',
        'jsonlint',
        'jscs',
        'jshint',
        'compileLessDev',
        'csslint',
        'plato',
        'clean',
        'strip',
        'shell',
        'htmlmin',
        'usebanner'
    ]);

    /**
     * Define tasks : Tasks for less:compilation watch, Also alias for `watch`
     */
    grunt.registerTask('watchless', ['watch:less']);

    /**
     * Define sub-tasks : Tasks for Less compilation for development.
     */
    grunt.registerTask('compileLessDev', ['less:dev']);

    /**
     * Define sub-tasks : Alias for `plato`
     */
    grunt.registerTask('analysis', ['plato']);
};
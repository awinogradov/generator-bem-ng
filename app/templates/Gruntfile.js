'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    var tasks = {

        project: grunt.file.readJSON('project.json') || grunt.fatal('project.json not found'),

        pages: [ "index", "404" ],

        bem: {
            options: {
                require: "./node_modules/bem"
            },
            // Build bundles for pages with BEM methodology (bem-tools)
            bundles: {
                method: "make",
                targets: "<%= project.bundles %>"
            }
        },

        exec: {
            mkdirs: {
                command: "mkdir -p <%= project.styles %> && mkdir -p <%= project.scripts %>"
            },
            concat_css: {
                command: "cat <%= pages.map( function(page) { return project.bundles + '/' + page + '/' + page + '.css' }).join(' ') %> > <%= project.styles %>/pages.css"
            },
            concat_js: {
                command: "cat <%= pages.map( function(page) { return project.bundles + '/' + page + '/' + page + '.js' }).join(' ') %> > <%= project.scripts %>/pages.js"
            },
            borschik_csso: {
                command: "node_modules/.bin/borschik --input <%= project.styles %>/pages.css --output=<%= project.styles %>/pages.min.css --minimize=yes"
            },
            borschik_uglify: {
                command: "node_modules/.bin/borschik --input <%= project.scripts %>/pages.js --output=<%= project.scripts %>/pages.min.js --minimize=yes"
            }
        },

        copy: {
            // Copy html pages to distribution folder
            bundles: {
                files: [{
                    expand: true,
                    flatten: true,
                    filter: 'isFile',
                    dest: "<%= project.dist %>",
                    src: "<%= project.bundles %>/**/*.html"
                }]
            },
            // Copy assets (favicon, robots.txt and etc)
            assets: {
                files: [{
                    expand: true,
                    flatten: true,
                    dot: true,
                    filter: 'isFile',
                    dest: "<%= project.dist %>/",
                    src: "<%= project.assets %>/*"
                }]
            }
        }
    }

    grunt.initConfig(tasks);

    grunt.registerTask('default', [
        'bem:bundles',
        'copy:bundles',
        'copy:assets',
        'exec:mkdirs',
        'exec:concat_css',
        'exec:concat_js',
        'exec:borschik_csso',
        'exec:borschik_uglify'
    ]);
};


"use strict";

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require("load-grunt-tasks")(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require("time-grunt")(grunt);

    // Project configuration object
    var project = grunt.file.readJSON("project.json") || grunt.fatal("project.json not found");

    // Settings for files watcher
    var build_techs = [ "bemhtml", "css", "js" ],
        // Paths for watch
        watch_paths = function() {
            return build_techs.map(function(tech) {
               return "blocks/**/{,*/}*." + tech;
            }).concat("bundles/**/*.bemjson.js");
        };

    // Tasks configuration
    var tasks = {

        project: project,
        bundle: project.mergedBundle,

        watch: {
            blocks: {
                files: watch_paths(),
                tasks: [ "default" ]
            },
            gruntfile: {
                files: [ "Gruntfile.js" ]
            }
        },

        // Build bundles for pages with BEM methodology (bem-tools)
        bem: {
            bundles: {
                command: "make",
                TARGETS: project.bundles
            },
            // Use for clean .bem/cache
            clean: {
                command: "make",
                method: "clean",
                TARGETS: project.bundles
            }
        },

        copy: {
            // Copy html pages to distribution folder
            bundles: {
                files: [{
                    expand: true,
                    flatten: true,
                    filter: "isFile",
                    dest: project.dist,
                    src: "<%%= project.bundles %>/**/*.html"
                }]
            },
            // Copy assets (fonts, images, favicon, robots.txt and etc)
            assets: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: project.assets,
                    src: "**",
                    dest: project.dist
                }]
            },
            // Copy merged javascript
            js: {
                files: [{
                    flatten: true,
                    dest: project.scripts,
                    src: "<%%= project.bundles %>/<%%= bundle %>/_<%%= bundle %>.js"
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            css: {
                src: "<%%= project.bundles %>/<%%= bundle %>/_<%%= bundle %>.css",
                dest: "<%%= project.styles %>"
            }
        },

        csscomb: {
            dist: {
                options: {
                    config: '.csscomb.json'
                },
                files: {
                    "<%%= project.styles %>":
                    "<%%= project.styles %>"
                }
            }
        }
    }

    grunt.initConfig(tasks);

    grunt.registerTask("serve", function(){

        grunt.task.run([
            "watch"
        ]);

    });

    grunt.registerTask("default", [
        "bem:bundles",
        "copy",
        "autoprefixer:css"
    ]);

    grunt.registerTask("dist", [
        "default",
        "csscomb:dist"
    ]);
};


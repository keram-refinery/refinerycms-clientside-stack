/*jslint maxlen: 120 */

'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

var fs = require('fs');
var src_path = __dirname + '/src';
var compiler_path = '/home/keram/tools/web/closure-compiler/compiler.jar';


module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var gruntConfig = {
        watch: {
            coffee_test: {
                files: ['src/*/test/{,*/}*.coffee', 'src/*/test/{,**/}*.coffee'],
                tasks: ['coffee:test']
            },
            livereload: {
                files: [
                    '.tmp/*/test/{,*/}*.js', '.tmp/*/test/{,**/}*.js'
                ],
                tasks: ['livereload']
            }
        },
        concurrent: {
            server: [
                'coffee'
            ],
            test: [
                'coffee'
            ]
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            proxies: [
                {
                    context: '/',
                    host: 'localhost',
                    port: 3000,
                    https: false,
                    changeOrigin: false
                }
            ],
            livereload: {
                options: {
                    keepalive: false,
                    middleware: function (connect, options) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.'),
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'src'),
                            connect.directory(options.base + '/src')
                        ];
                    }
                }
            },
            rails: {
                options: {
                    keepalive: false,
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            proxySnippet,
                            mountFolder(connect, '.'),
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'src')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'src/*/*.js',
                'src/*/scripts/{,*/}*.js',
                'src/*/scripts/{,*/}{,*/}*.js',
                '!src/*/scripts/vendor/*',
                '!src/*/i18n/*'
            ]
        },

        mocha: {
            options: {
                run: true,
                ignoreLeaks: false
            }
        },

        clean: [],
        assetUrl: [],

        concat: {
            options : {
                banner: '' +
                        // '/*! Generated: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */' +
                        '\n(function (window, $) {\n',
                footer: '\n}(window, jQuery));',
                process : function (src, filepath) {
                    src = src.replace(/\/\*jslint.+\*\/\n/, '');
                    src = src.replace(/\/\*jshint.+\*\/\n/, '');
                    src = src.replace(/\/\*global.+\*\/\n/, '');
                    // if (/(^|\n)\(function ?\([^\)]*\) ?\{/.test(src)) {
                    //     src = src.replace(/(^|\n)\(function ?\([^\)]*\) ?\{/, '');
                    //     src = src.replace(/\}\([^\)]*\)\);\s*$/, '');
                    // }
                    src = src.replace(/(^|\s+)'use strict';/, '');
                    src = src.replace(/^\n+/, '');
                    src = src.replace(/\n+$/, '');
                    return '\n// Source: ' + filepath.replace(src_path, '~') + '\n' + src;
                }
            }
        },

        closureCompiler: {
            options: {
                compilerFile: compiler_path,
                checkModified: true,
                compilerOpts: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    warning_level: 'verbose',
                    externs: ['externs/*.js'],
                    summary_detail_level: 3,
                    language_in: 'ECMASCRIPT5_STRICT',
                    // for debug
                    // formatting: 'PRETTY_PRINT',
                    output_wrapper: '"(function(window, $){%output%}(window, jQuery));"'
                }
            }
        },

        coffee: {
            test: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*/test/{,*/}*.coffee', '*/test/{,**/}*.coffee'],
                    dest: '.tmp/',
                    ext: '.js'
                }]
            }
        }
    };

    function absolutizePath (path, module) {
        return src_path + '/' + module + '/' + path;
    }

    function absolutizeConfig (config, module) {
        var key, keys = ['src', 'dest', 'cwd'];

        for (key in config) {
            if (keys.indexOf(key) !== -1) {
                if (config[key] instanceof Array) {
                    for (var i = config[key].length - 1; i >= 0; i--) {
                        if (/^[\.a-z]+/.test(config[key][i])) {
                            config[key][i] = absolutizePath(config[key][i], module);
                        }
                    }
                } else if (typeof config[key] === 'string' && /^[\.a-z]+/.test(config[key])) {
                    config[key] = absolutizePath(config[key], module);
                }
            }
        }

        return config;
    }

    function absolutizeGruntTask (task, task_name, module) {
        var task_key, task_config_key, task_config_key_prefixed;

        gruntConfig[task_name] = gruntConfig[task_name] || {};

        if (task instanceof Array) {
            for (var i = 0; i < task.length; i++) {
                for (task_config_key in task[i]) {
                    absolutizeConfig(task[i][task_config_key], module);
                    task_config_key_prefixed = module + '_' + task_config_key;

                    gruntConfig[task_name][task_config_key_prefixed] = task[i][task_config_key];
                }
            }
        } else if (typeof task === 'object' ) {
            for (task_key in task) {
                gruntConfig[task_name][task_config_key_prefixed] = task[task_key];
            }
        }
    }

    function addDefaultTasks (module_path, module) {
        gruntConfig.clean[module + '_tmp'] = {
            files: [{
                dot: true,
                src: [
                    module_path + '/.tmp'
                ]
            }]
        };

        gruntConfig.assetUrl[module + '_styles'] = {
            'files': [{
                'expand': true,
                'dot': true,
                'cwd': module_path + '/styles',
                'dest': module_path + '/.tmp/assets/stylesheets/refinery/',
                'src': [
                    '*.scss', '*.css', '**/*.scss', '**/*.css'
                ]
            }]
        };

    }

    fs.readdirSync(src_path).forEach(function(module) {
        var module_path = src_path + '/' + module,
            fstats = fs.lstatSync(module_path),
            module_cfg_path = module_path + '/module.js',
            module_cfg,
            module_grunt_cfg,
            task_name;

        if (['vendor', 'components'].indexOf(module) === -1 &&
            fstats.isDirectory(module_path) &&
            grunt.file.isFile(module_cfg_path)) {

            module_cfg = require(module_cfg_path);
            module_grunt_cfg = module_cfg.grunt;

            if (module_grunt_cfg) {
                for (task_name in module_grunt_cfg) {
                    absolutizeGruntTask(module_grunt_cfg[task_name], task_name, module);
                }

                addDefaultTasks(module_path, module);
            }

        }
    });

    grunt.initConfig(gruntConfig);

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', function (target) {
        if (target === 'rails') {
            return grunt.task.run([
                'build',
                'concurrent:server',
                'configureProxies',
                'livereload-start',
                'connect:rails',
                'open:server',
                'watch'
            ]);
        }

        grunt.task.run([
            'build',
            'concurrent:server',
            'livereload-start',
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'jshint',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean',
        'concat',
        'closureCompiler',
        'assetUrl',
        'copy',
        'noop'
    ]);

    grunt.registerTask('default', [
        'test',
        'build'
    ]);

    // for debug build scripts, do nothing
    grunt.registerTask('noop', function () { });

    grunt.task.registerMultiTask('assetUrl', function() {
        var that = this,
            len = this.filesSrc.length,
            obj, file;

        for (var i = 0; i < len; i++) {
            if (grunt.file.isFile(this.filesSrc[i])) {
                obj = that.files[i];
                file = grunt.file.read(obj.src[0]);

                grunt.file.write(obj.dest,
                    file.replace(/ url\('\/images/g, ' asset-url(\'refinery'));
            }
        }
    });
};

# Creating Client Side Extension

Let we start where we end in "[Start with refinerycsms clientside](./start_with_refinerycms-clientside.md)".
```
$ cd ~/work_directory/refinerycms-clientside

$ cp -r src/refinery-sample src/refinery-name-of-your-extension

$ sudo rm -r src/refinery-name-of-your-extension/.git/
```
In your favorite editor (suppose it is Sublime .)) replace everything in folder
``src/refinery-name-of-your-extension`` from ``refinery-sample`` to ``refinery-name-of-your-extension``
```
$ cd src/refinery-name-of-your-extension
$ git init
$ git commit -a -m 'initial commit'
```
Now we have prepared skeleton of our extension.
Note: steps above will be in "near" furure simplified with extension generator via Yeoman.

Next we go deep in our code of our extension.
Suppose we want build new wysiwig editor plugin to refinery and I select [epiceditor](http://epiceditor.com/)

Code of this extension you can download from [github](https://github.com/keram-refinery/refinerycms-epiceditor).

Download third party code to components directory:
```
$ ls src/refinerycms-epiceditor/components/
EpicEditor  refinery
$

```

Update our module.js and add our custom configuration of Closure Compiler
```
  'options': {
      'checkModified': true,
      'compilerOpts': {
          'compilation_level': 'ADVANCED_OPTIMIZATIONS',
          //'formatting': 'PRETTY_PRINT',
          'warning_level': 'verbose',
          'externs': ['externs/jquery-1.9.js',
                      'externs/custom.js',
                      'externs/refinery.js',
                      'externs/refinery-admin.js',
                      dir + '/externs/epiceditor.js'
                      ],
          'language_in': 'ECMASCRIPT5_STRICT',
          'summary_detail_level': 3,
          'output_wrapper': '"(function(window, $){%output%}(window, jQuery));"'
      }
  },
```

where especialy we define _externs_ files for compiler.
Absolute path to ``externs/jquery-1.9.js`` is ``~/work_directory/refinerycms-clientside/externs/jquery-1.9.js``
(Global extern file used also by other extensions).
and for ``dir + '/externs/epiceditor.js'`` is ``~/work_directory/refinerycms-clientside/src/refinerycms-epiceditor/externs/epiceditor.js``
(Local extern file used only compile this extension).


Also we add copy task for including related third party code to compilation

```
  'epiceditor': {
      'files': [{
          'expand': true,
          'dot': true,
          'cwd': dir + '/components/EpicEditor/epiceditor/js/',
          'dest': build_dir + '/javascripts/vendor/epiceditor/',
          'src': [
              '*.js'
          ]
      }]
  }
```

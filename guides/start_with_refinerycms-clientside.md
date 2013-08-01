# Start with refinerycms-clientside

$ cd ~/work_directory

$ git clone https://github.com/keram-refinery/refinerycms-clientside.git

$ cd ./refinerycms-clientside
$ git clone https://github.com/keram-refinery/refinery-sample.git src/refinery-sample

$ npm install

Change in Gruntfile.js path to YOUR Closure Compiler
```
var compiler_path = '/home/keram/tools/web/closure-compiler/compiler.jar';
```

$ grunt


If everythings run ok, you should have in src/refinery-sample/lib/ compiled your first sample refinery clientside extension.
For testing it it in your refinery application just add to your Gemfile:
```
gem 'refinery-sample', :path => '~/work_directory/refinerycms-clientside/src/refinery-sample'

```
Then:

$ bundle install

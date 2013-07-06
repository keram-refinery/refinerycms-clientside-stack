# Creating Client Side Extension

- clone refinerycms-clientside

cd to ./src folder

create default folders and files

```

$ ls -gSDR src/refinery-bootstrap-wysiwyg/
  src/refinery-bootstrap-wysiwyg/:
  drwxrwxr-x 4 keram 4096 Jul  8 20:59 components
  drwxrwxr-x 2 keram 4096 Jul  8 20:16 data
  drwxrwxr-x 2 keram 4096 Jul  8 20:18 images
  drwxrwxr-x 2 keram 4096 Jul  8 21:47 scripts
  drwxrwxr-x 2 keram 4096 Jul  8 20:18 styles
  drwxrwxr-x 3 keram 4096 Jul  8 20:20 test
  -rw-rw-r-- 1 keram 1240 Jul  8 21:07 index.html
  -rw-rw-r-- 1 keram 4883 Jul  8 20:29 module.js
  -rw-rw-r-- 1 keram  712 Jul  8 20:16 module.json
  -rw-rw-r-- 1 keram  113 Jul  8 21:08 application.js
  -rw-rw-r-- 1 keram    0 Jul  8 20:16 README.md

```

Fill meta informations and configure tasks, see:
https://github.com/keram-refinery/refinery-clientside-refinery/tree/master/module.json
https://github.com/keram-refinery/refinery-clientside-refinery/tree/master/module.js

Then in console: grunt server
Visit http://localhost:9000/src/refinery-bootstrap-wysiwyg/



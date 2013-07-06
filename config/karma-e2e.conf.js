// Karma E2E configuration

// list of files / patterns to load in the browser
files = [

  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
//  //{ pattern: MOCHA, included: true, served: true, watched: false },
//  //{ pattern: MOCHA_ADAPTER, included: true, served: true, watched: false },
//  { pattern: 'test/lib/chai.js', included: true, served: true, watched: false },
//  {
//    pattern: 'components/*/*min.js',
//    included: true,
//    served: true,
//    watched: false
//  },
//  {
//    pattern: 'components/jquery-ui-1.10.2/ui/jquery-ui.js',
//    included: true,
//    served: true,
//    watched: false
//  },
//  { pattern: 'components/*.js', included: false, served: false, watched: false },
////  'src/*/test/fixtures/**/*.html',
////  'src/*/test/fixtures/**/*.json',
//  { pattern: 'src/**/scripts/*.js', included: false, served: false, watched: true },
//  { pattern: 'src/**/scripts/**/*.js', included: false, served: false, watched: true },
//  { pattern: 'src/**/html/**/*.html', included: false, served: false, watched: true },
//  { pattern: 'src/**/styles/**/*.css', included: false, served: false, watched: true },
////  { pattern: 'src/**/test/e2e/*.js', included: false, served: false, watched: true },
  { pattern: 'src/**/test/e2e/*.coffee', included: true, served: true, watched: true }
];

// list of files to exclude
exclude = ['components/jquery/jquery-migrate.min.js'];

// test results reporter to use
// possible values: dots || progress || growl
reporters = ['progress']; // 'progress',

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 7000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

preprocessors = {
  'src/**/*js.coffee': 'coffee'
};


// base path, that will be used to resolve files and exclude
basePath = '';

urlRoot = '/karma/';

proxies =  {
  // '/': 'http://localhost:3000/' // rails
  '/': 'http://localhost:9292/' // rackup
};

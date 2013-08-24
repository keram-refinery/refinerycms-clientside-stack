
/** @typedef {Object} */
var console = {

  /**
   * @param  {...*} args
   */
  log: function(args) {

  }
};

var ui;

ui.newPanel = null;

var i18n = {};

/**
 * Translate
 * @param  {string} symbol
 * @param  {Object=} args
 * @return {string}        translated string
 */
function t (symbol, args) {};

var Turbolinks = {
    visit: function () {}
}

jQuery.prototype.accordion = function() {};

jQuery.prototype.fileupload = function() {};


/**
 *
 * @typedef {{id: (string|number|undefined),
 *          url: (string|undefined),
 *          alt: (string|undefined)}}
 */
var images_dialog_object = {
  id: '',
  url: '',
  alt: ''
};

/**
 *
 * @typedef {{id: string,
 *          alt: string,
 *          geometry: (string|undefined),
 *          size: string,
 *          sizes: Object}}
 */
var image_dialog_object = {
  id: '',
  alt: '',
  geometry: '',
  size: '',
  sizes: {}
};

/**
 *
 * @typedef {{id: number, name: string, size: number, url: string, ext: string, mime_type: string}}
 */
var file_dialog_object = {
  id: 0,
  name: '',
  size: '',
  url: '',
  ext: '',
  mime_type: ''
};


/**
 *
 * @typedef {{url: string,
 *          html: (string|undefined),
 *          blank: (boolean|undefined),
 *          type: string,
 *          title: string}}
 */
var pages_dialog_object = {
  url: '',
  blank: false,
  type: '',
  title: ''
};

/**
 *
 * @typedef {{html: Array,
 *          redirect_to: string,
 *          image: Object,
 *          file: Object,
 *          message: (Object|string|null)}}
 */
var json_response = {
  html: [],
  message: '',
  redirect_to: '',
  image: {},
  file: {}
};

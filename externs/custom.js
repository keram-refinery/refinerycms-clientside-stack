
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

/**
 *
 * @typedef {{id: (number|undefined),
 *          url: (string|undefined),
 *          type: string}}
 */
var images_dialog_object = {
  id: 0,
  url: '',
  type: ''
};

/**
 *
 * @typedef {{id: (string|undefined),
 *          geometry: (string|undefined),
 *          grid: (string|undefined),
 *          large: (string|undefined),
 *          medium: (string|undefined),
 *          original: string,
 *          size: string,
 *          type: string}}
 */
var image_dialog_object = {
  id: '',
  geometry: '',
  large: '',
  medium: '',
  original: '',
  size: '',
  type: ''
};

/**
 *
 * @typedef {{id: string, url: string, html: string, type: string}}
 */
var file_dialog_object = {
  id: '',
  url: '',
  html: '',
  type: ''
};

/**
 *
 * @typedef {{url: string,
 *          html: (string|undefined),
 *          blank: (boolean|undefined),
 *          type: string,
 *          title: string}}
 */
var link_dialog_object = {
  url: '',
  html: '',
  blank: false,
  type: '',
  title: '',
};

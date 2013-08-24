/**
 * @fileoverview Externs for refinery
 *
 * @externs
 */

/**
 * @param {...*} var_args
 *
 * @return {Object}
 */
function refinery(var_args) { };

/**
 * Extend Child Object with Parent properties
 *
 * @param {Object} Child
 * @param {Object} Parent
 *
 * @return {Object} Child
 */
refinery.extend = function (Child, Parent) { };

/**
 * Include html flash message into flash container
 *
 * @expose
 *
 * @param {string} type
 * @param {string} message
 */
refinery.flash = function (type, message) { };


/**
 * Validator
 *
 * @expose
 * @typedef {{email: RegExp, url: RegExp, page: RegExp}}
 */
refinery.validator = { };

/**
 * Builds an object structure for the provided namespace path,
 * ensuring that names that already exist are not overwritten. For
 * example:
 * "a.b.c" -> a = {};a.b={};a.b.c={};
 *
 * @see goog.provide and goog.provideSymbol.
 * @expose
 * @param {string} path to the object that opt_object defines.
 * @param {*=} opt_object the object to expose at the end of the path.
 * @param {Object=} opt_objectToprovideTo The object to add the path to; default
 *     is |window|.
 */
refinery.provide = function (path, opt_object, opt_objectToprovideTo) { };

/**
 * see  https://github.com/cowboy/jquery-tiny-pubsub
 *
 * @typedef {{unbind: Function, subscribe: Function, unsubscribe: Function, publish: Function}}
 */
refinery.pubsub = {};

/**
 * Wrapper around xhr calls with some basic response processing
 *
 * @expose
 * @type {Object}
 */
refinery.xhr = {

    /**
     * Create and return jquery ajax object (promise) with default refinery
     * processing of request fail or success
     *
     * @expose
     * @param {string}   url
     * @param {(Object.<string,*>|function (string,string,jQuery.jqXHR))=} data
     * @param {jQuery=} holder
     *
     * @return {jQuery.jqXHR}
     */
    make: function (url, data, holder) { },

    /**
     * todo
     *
     * @expose
     * @param {Object|string} html
     * @param {jQuery=} holder
     * @param {boolean=} replaceHolder
     *
     * @return {undefined}
     */
    processHtml: function (html, holder, replaceHolder) { },

    /**
     * todo
     *
     * @expose
     * @param {Object|string} message
     *
     * @return {undefined}
     */
    processMessage: function (message) { },

    /**
     * Process HTTP Errors on calls
     *
     * @expose
     * @param {jQuery.jqXHR} xhr
     * @param {string=} status
     *
     * @return {undefined}
     */
    error: function (xhr, status) { },

    /**
     *
     * @param {json_response} response
     * @param {string} status
     * @param {jQuery.jqXHR} xhr
     * @param {jQuery=} holder
     * @param {boolean=} replaceHolder
     *
     * @return {undefined}
     */
    success: function (response, status, xhr, holder, replaceHolder) { }
};

/**
 * Indicate running action
 *
 * @expose
 * @type {Object}
 */
refinery.spinner = {

    /**
     * Show spinner
     *
     * @expose
     * @return {undefined}
     */
    on: function () { },

    /**
     * Turn off spinner
     *
     * @expose
     * @return {undefined}
     */
    off: function () { }
};

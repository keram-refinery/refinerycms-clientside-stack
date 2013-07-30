refinery.admin = {
  ui: {}
};

/**
 * @constructor
 * @param {*=} options
 * @extends {refinery.Object}
 */
refinery.admin.Dialog = function (options) {};

refinery.admin.Dialog.prototype = {

    /**
     *
     * @expose
     *
     * @return {Object} self
     */
    close: function () {
    },

    /**
     *
     * @expose
     *
     * @return {Object} self
     */
    open: function () {
    },

    /**
     *
     * @expose
     *
     * @return {Object} self
     */
    submit: function () {
    },

    /**
     * Handle Insert event
     * For specific use should be implemented in subclasses
     *
     * @expose
     *
     * @return {Object} self
     */
    insert: function () {
    },

    after_load: function () {
    },

    /**
     * Load dialog content
     *
     * @expose
     * @todo this is (still) ugly, refactor!
     *
     * @return {Object} self
     */
    load: function () {
    },

   /**
    * Initialization and binding
    *
    * @public
    *
    * @return {refinery.admin.Dialog} self
    */
    init: function () {}
};


/**
 * @constructor
 * @extends {refinery.admin.Dialog}
 * @param {*=} options
 */
refinery.admin.ImagesDialog = function (options) {};

refinery.admin.ImagesDialog.prototype = {
    /**
     * Select first image in library
     * Put focus to first text input element
     *
     * @return {undefined}
     */
    after_load: function () {
    },

    /**
     * Handle image linked from library
     *
     * @return {?{title: string, size: string, geometry: string, type: string}}
     */
    library_tab: function (tab) {
    },

    /**
     * Handle image linked by url
     *
     * @return {?{original: string, type: string}}
     */
    url_tab: function (tab) {
    },

    /**
     * Handle upload
     *
     * @return {undefined}
     */
    upload_tab: function () {
    },

    /**
     * Propagate selected image wth attributes to dialog observers
     *
     * @return {Object} self
     */
    insert: function () {
    }
}

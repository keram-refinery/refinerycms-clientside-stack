/**
 * @fileoverview Externs for refinery
 *
 * @externs
 */

/**
 *
 * @param {string} path
 * @param {*=} options
 * @param {Object=} Parent
 *
 * @return {Object}
 */
//refinery.n = function(path, options, Parent) {};

/** @typedef {Object} */
var refinery = {
    "newInstance": function () {},
    "extend": function () {},
    "flash": function () {},
    "validator": {
        "email": function () {},
        "url": function () {},
        "page": function () {}
    },
    "provide": function () {},
    "pubsub": {
        "unbind": function () {},
        "subscribe": function () {},
        "unsubscribe": function () {},
        "publish": function () {}
    },
    "xhr": {
        "make": function () {},
        "processHtml": function () {},
        "processMessage": function () {},
        "error": function () {},
        "success": function () {}
    },
    "updatePartial": function () {},
    "spinner": {
        "on": function () {},
        "off": function () {}
    }
};

/**
 * @constructor
 * @param {Object=} options
 */
refinery.Object = function (options) {};

refinery.Object.objectMethods = {};
refinery.Object.objectPrototype = {};
refinery.Object.objectConstructor = function (options) {};
refinery.Object.State = function (options) {};

refinery.Object.objectMethods.toUserInterface = function (holder) {};

refinery.Object.prototype = {

    /**
     *
     * @private
     * @type {number}
     */
    id: 0,

    /**
     *
     * @type {string}
     */
    name: 'Object',

    /**
     *
     * @type {string}
     */
    version: '0.1',

    /**
     *
     * @type {string}
     */
    module: 'refinery',

    /**
     *
     * @type {Object|null}
     */
    options: null,

    /**
     *
     * @type {Object|null}
     */
    events: null,

    /**
     *
     * @type {Object|null}
     */
    holder: null,

    /**
     * State class instatiable via Object constructor
     *
     * @expose
     * @constructor
     */
    State: refinery.ObjectState,

    /**
     * State instance
     *
     * @expose
     *
     * @type {?refinery.ObjectState}
     */
    state: null,

    /**
     * Default States
     *
     * @expose
     *
     * @type {?Object}
     */
    states: null,

    /**
     * Check or set object state
     *
     * @expose
     * @param {string} action
     * @param {boolean=} state
     *
     * @return {boolean}
     */
    is: function (action, state) {
    },

    /**
     * Register Callback on event
     * If callback return false none of other callback after that
     * will be executed
     *
     * @public
     * @param {string} eventName
     * @param {Function} callback
     *
     * @return {Object} this
     */
    on: function (eventName, callback) {
    },

    /**
     * Remove Callback from event
     *
     * @public
     * @param {string} eventName
     * @param {Function} callback
     *
     * @return {Object} this
     */
    off: function (eventName, callback) {
    },

    /**
     * Register observer on object event
     *
     * @public
     *
     * @param {string}         eventName
     * @param {Function=}  callback
     *
     * @return {Object}         self
     */
    subscribe: function (eventName, callback) {
    },

    /**
     * Remove observer from object event
     *
     * @public
     *
     * @param {string}         eventName
     * @param {Function=}  callback
     *
     * @return {Object}         self
     */
    unsubscribe: function (eventName, callback) {
    },

    /**
     * Call registered callbacks and publish event for object observers
     *
     * @private
     *
     * @param {string}      eventName
     * @param {Array=}    args
     *
     * @return {Object}
     */
    trigger: function (eventName, args) {
    },

    /**
     * Unique Object id consist from his name and id
     *
     * @expose
     *
     * @type {string}
     */
    uid: '',

    /**
     * Fullname
     *
     * @public
     *
     * @return {string}
     */
    fullname: '',

    /**
     * Deinitialization
     *
     * @public
     */
    destroy: function () { },

    /**
     * Initialization and binding
     *
     * @public
     * @param {(jQuerySelector|jQuery|Element)} holder
     *
     * @return {Object} self
     */
    init: function (holder) {
    }
};

/**
 * Create refinery Object
 *
 * @param {(Object|{objectPrototype: (Object|undefined),
 *                    objectConstructor: (undefined|function((undefined|Object)): ?),
 *                    name: (string|undefined),
 *                    version: (string|undefined),
 *                    module: (string|undefined),
 *                    options: (Object|undefined),
 *                    var_args})=} options
 *
 * @return {Object}
 */
refinery.Object.create = function (options) { }

/**
 * Attach refinery.Object to DOM object (this.holder)
 *
 * @param {string} ouid Object Unique Id
 * @param {!jQuery} holder jQuery wrapper around DOM object
 *
 * @return {undefined}
 */
refinery.Object.attach = function (ouid, holder) {
}

/**
 * Remove refinery.Object Instance from DOM object (this.holder)
 *
 * @param {string} ouid Object Unique Id
 * @param {Object} holder jQuery wrapper around DOM object
 *
 * @return {undefined}
 */
refinery.Object.detach = function (ouid, holder) {
};


/**
 * Remove refinery.Object instance from refinery.Object.instances, DOM element
 * and prospectively clean also other mess to enable GC
 *
 * @param {!jQuery} holder
 *
 * @return {undefined}
 */
refinery.Object.unbind = function (holder) {
};

/**
 * refinery Object Instances
 *
 * @expose
 *
 * @type {Object}
 */
refinery.Object.instances = {
    /**
     * Return all refinery.Object instances
     *
     * @return {Object}
     */
    all: function () {
    },

    /**
     * Add instance
     *
     * @param {Object} instance
     */
    add: function (instance) {
    },

    /**
     * Get Instance by UID
     *
     * @param {string} uid
     * @return {Object|undefined}
     */
    get: function (uid) {
    },

    /**
     * Remove instance by UID
     *
     * @param {string} uid
     */
    remove: function (uid) {
    }
};


/**
 * @constructor
 * @param {Object=} default_states
 * @param {Object=} tests define tests for providing some action
 */
refinery.ObjectState = function (default_states, tests) {};

refinery.ObjectState.prototype = {
    states: {},

    /**
     * set state
     *
     * @param {string} state
     * @param {boolean=} value
     *
     * @return {undefined}
     */
    set: function (state, value) {
    },

    /**
     * get state
     *
     * @expose
     * @param {string} state
     *
     * @return {boolean}
     */
    get: function (state) {},

    /**
     * toggle states
     *
     * @param {...string} var_args
     *
     * @return {undefined}
     */
    toggle: function (var_args) {
    },

    /**
     * Work with object states
     *
     * @param {string} action
     *
     * @return {boolean}
     */
    is: function (action) {
    }
};

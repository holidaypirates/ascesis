'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseController = exports.BaseComponent = exports.walkDOM = exports.fireEvent = exports.hasClass = exports.toggleClass = exports.removeClass = exports.addClass = exports.html = exports.attr = exports.toArray = exports.$ = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _delegate = require('./delegate');

var _dom_utils = require('./dom_utils');

var domUtils = _interopRequireWildcard(_dom_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modulor library
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module modulor
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */

/**
 *  dom utils proxy functions
 *  @deprecated use dom_utils.js directly instead
 * */

/**
 *  Select nodes
 *  @param {String} selector Selector
 *  @param {HTMLElement} [element=window.document] Element
 *  @return {Array} Collection of nodes
 * */
var $ = exports.$ = function $(selector, element) {
  return domUtils.$(element, selector);
};

/**
 *  Converts NodeList to array
 *  @param {NodeList} nodes Elements collection
 *  @return {Array} Collection of nodes
 * */
var toArray = exports.toArray = function toArray(nodes) {
  return domUtils.toArray(nodes);
};

/**
 *  Get/set element attribute
 *  @param {HTMLElement} element Element
 *  @param {String} key Attribute name
 *  @param {String} [value] Attribute value
 *  @return {String} Attribute value
 * */
var attr = exports.attr = function attr(element, key, value) {
  return domUtils.attr(key, value, element);
};

/**
 *  Set the HTML content of element, or generate DocumentFragment
 *  @param {String} htmlString HTML content string
 *  @param {HTMLElement} [target] Element to set content
 *  @return {HTMLElement|DocumentFragment}
 *    Target if target parameter is set or document fragment
 * */
var html = exports.html = function html(htmlString, target) {
  return domUtils.html(target, htmlString)[0];
};

/**
 *  Add a class to the element
 *  @param {HTMLElement} element Element
 *  @param {String} className Class name
 * */
var addClass = exports.addClass = function addClass(element, className) {
  return domUtils.addClass(className, element);
};

/**
 *  Remove a class from the element
 *  @param {HTMLElement} element Element
 *  @param {String} className Class name
 * */
var removeClass = exports.removeClass = function removeClass(element, className) {
  return domUtils.removeClass(className, element);
};

/**
 *  Toggle a class at the element
 *  @param {HTMLElement} element Element
 *  @param {String} className Class name
 * */
var toggleClass = exports.toggleClass = function toggleClass(element, className) {
  return domUtils.toggleClass(className, element);
};

/**
 *  Check if the element has a class
 *  @param {HTMLElement} element Element
 *  @param {String} className Class name
 * */
var hasClass = exports.hasClass = function hasClass(element, className) {
  return domUtils.hasClass(className, element);
};

/**
 *  Fires an event on element
 *  @param {String} eventName Event name
 *  @param {HTMLElement} target Element to trigger event on
 *  @param {*} [eventData] Data to attach to event
 * */
var fireEvent = exports.fireEvent = function fireEvent(eventName, target, eventData) {
  return domUtils.fireEvent(eventName, target, eventData);
};

/**
 *  Traverse DOM node
 *  @param {HTMLElement} node Element
 *  @param {Function} filter Filter child nodes function
 *  @param {Function} skipNode Skip child nodes function
 *  @return {Array} Collection of nodes
 * */
var walkDOM = exports.walkDOM = function walkDOM(node, filter, skipNode) {
  return domUtils.walkDOM(node, filter, skipNode);
};

/**
 * @class BaseComponent
 * */

var BaseComponent = exports.BaseComponent = function (_HTMLElement) {
  _inherits(BaseComponent, _HTMLElement);

  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    return _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).apply(this, arguments));
  }

  _createClass(BaseComponent, [{
    key: 'toggleHighlight',


    /**
     *  Toggle debug class on component
     *  @category debug
     */
    value: function toggleHighlight() {
      this.toggleClass(this.componentType + '-highlighted');
    }

    /**
     *  Toggle debug class on component and child components
     *  @category debug
     */

  }, {
    key: 'toggleHighlightAll',
    value: function toggleHighlightAll() {
      this.toggleHighlight();
      this.childComponents.forEach(function (child) {
        child.toggleHighlightAll();
      });
    }

    //DOM

    /**
     *  Select nodes
     *  @category DOM API
     *  @param {String} selector Selector
     *  @return {Array} Collection of nodes
     */

  }, {
    key: '$',
    value: function $(selector) {
      return domUtils.$(this, selector);
    }

    /**
     *  Get/set element attribute
     *  @category DOM API
     *  @param {String} key Attribute name
     *  @param {String} [value] Attribute value
     *  @return {String} Attribute value
     * */

  }, {
    key: 'attr',
    value: function attr(key, value) {
      return domUtils.attr(key, value, this);
    }

    /**
     *  Add a class to the element
     *  @category DOM API
     *  @param {String} className Class name
     * */

  }, {
    key: 'addClass',
    value: function addClass(className) {
      return domUtils.addClass(className, this);
    }

    /**
     *  Remove a class from the element
     *  @category DOM API
     *  @param {String} className Class name
     * */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      return domUtils.removeClass(className, this);
    }

    /**
     *  Toggle a class at the element
     *  @category DOM API
     *  @param {String} className Class name
     * */

  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      return domUtils.toggleClass(className, this);
    }

    /**
     *  Check if the element has a class
     *  @category DOM API
     *  @param {String} className Class name
     *  @return {Boolean}
     * */

  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return domUtils.hasClass(className, this);
    }

    /**
     * Set the HTML content of element
     * @category DOM API
     * @param {String} htmlString HTML content string
     * @param {HTMLElement} [$el] Target element
     * @return {Object} refs
     *
     * @example
     * // set content
     * this.html(`<div></div>`);
     *
     * @example
     * // set content of another element
     * this.html(`<div></div>`, <HTMLElement>);
     *
     * @example
     * // get refs
     * const refs = this.html(`
     *   <div id="some_id" ref="some_ref">
     *     <span refs="span_elements" id="span_1"></span>
     *     <span refs="span_elements" id="span_2"></span>
     *   </div>
     * `) //=> { some_ref: <HTMLElement#some_id>, span_elements: [<HTMLElement#span_1>, <HTMLElement#span_2>] }
     *
     * @example
     * // await child elements (only when instance of modulor component)
     * const refs = this.html(`
     *   <child-component ref="$childComponent"></child-component>
     *   <div ref="$someDiv"></div>
     * `);
     * refs['$childComponent'].whenComponentConnected.then(($childComponent) => ...);
     * refs['$someDiv'].whenComponentConnected.then(...never resolves...);
     *
     * */

  }, {
    key: 'html',
    value: function html(html_string) {
      var $el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      return domUtils.html($el, html_string)[1];
    }

    //events
    /**
     *  Subscribe an event
     *  @category events
     *  @param {String} eventName Event name
     *  @param {String} [selector] Selector
     *  @param {Function} callback Event name
     * */

  }, {
    key: 'on',
    value: function on(eventName, selector, callback) {
      if (!callback) {
        callback = selector;
        selector = null;
      }
      _delegate.delegate.on(eventName, this, selector, callback);
    }

    /**
     *  Unsubscribe an event
     *  Unsibscribe all events when called without arguments
     *  Unsibscribe all events by selector when called without *selector* argument
     *  @category events
     *  @param {String} [eventName] Event name
     *  @param {String} [selector] Selector
     *  @param {Function} [callback] Event name
     * */

  }, {
    key: 'off',
    value: function off() {
      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var selector = arguments[1];
      var callback = arguments[2];

      if (!callback) {
        callback = selector;
        selector = null;
      }
      _delegate.delegate.off(eventName, this, selector, callback);
    }

    /**
     *  Fires an event on element
     *  @category events
     *  @param {String} eventName Event name
     *  @param {*} [eventData] Data to attach to event
     * */

  }, {
    key: 'trigger',
    value: function trigger(eventName, eventData) {
      domUtils.fireEvent(eventName, this, eventData);
    }

    //lifecycle callbacks

  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (this.__isModulor) {
        // if __isModulor exist, other lifecycle methods also exist
        this.trigger && this.trigger('component-attached');
        this.on('component-attached', function (event) {
          event.stopPropagation();
        });
      }
      this.__whenConnectedResolver && this.__whenConnectedResolver();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.off && this.off();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (this.proxyAttributes[name]) {
        this[name] = this.proxyAttributes[name](newValue, oldValue);
      }
    }
  }, {
    key: '__isModulor',
    get: function get() {
      return true;
    }

    /**
     * @category properties
     * @property {String} componentType="component" - Component type
     */

  }, {
    key: 'componentType',
    get: function get() {
      return 'component';
    }

    /**
     * @category properties
     * @property {Object.<String, Function>} proxyAttributes={} - Proxy attributes to properties
     */

  }, {
    key: 'proxyAttributes',
    get: function get() {
      return {};
    }

    /**
     *  *Getter*.
     *  List of child components.
     *  **Use only for debug purposes due to low efficiency**
     *  @category debug
     *  @return {Array.<BaseComponent>}
     */

  }, {
    key: 'childComponents',
    get: function get() {
      return domUtils.walkDOM(this, function (node) {
        return node.__isModulor;
      }, function (node) {
        return node.__isModulor;
      });
    }

    /**
     *  *Getter*.
     *  Parent component.
     *  **Use only for debug purposes due to low efficiency**
     *  @category debug
     *  @return {BaseComponent}
     */

  }, {
    key: 'parentComponent',
    get: function get() {
      var parent = this;
      while (parent = parent.parentNode) {
        if (parent.__isModulor) {
          break;
        }
      }
      return parent;
    }
  }]);

  return BaseComponent;
}(HTMLElement);

/**
 *  @deprecated
 *  @class BaseController
 *  @extends BaseComponent
 * */


var BaseController = exports.BaseController = function (_BaseComponent) {
  _inherits(BaseController, _BaseComponent);

  function BaseController() {
    _classCallCheck(this, BaseController);

    return _possibleConstructorReturn(this, (BaseController.__proto__ || Object.getPrototypeOf(BaseController)).apply(this, arguments));
  }

  _createClass(BaseController, [{
    key: 'componentType',

    /**
     * @category properties
     * @property {String} componentType="controller" - Component type
     */
    get: function get() {
      return 'controller';
    }
  }]);

  return BaseController;
}(BaseComponent);

(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var injectSwitchSystem = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".zonst-switch-system{background-color:#000;bottom:0;height:100%;left:0;overflow:auto;position:fixed;right:0;top:0;z-index:2099}";
  styleInject(css_248z);

  var dom = "\n  <div class=\"zonst-switch-system\" style=\"z-index: 2099;\">\n    <div role=\"dialog\" aria-modal=\"true\" aria-label=\"Tips\" class=\"el-overlay-dialog\">\n      <div class=\"el-dialog\" tabindex=\"-1\" style=\"--el-dialog-width: 30%;\">\n        <header class=\"el-dialog__header\">\n          <span role=\"heading\" class=\"el-dialog__title\">Tips</span>\n          <button aria-label=\"Close this dialog\" class=\"el-dialog__headerbtn\" type=\"button\">\n            <i class=\"el-icon el-dialog__close\">\n              <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill=\"currentColor\" d=\"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z\">\n                </path>\n              </svg>\n            </i>\n          </button>\n        </header>\n        <div id=\"el-id-9829-89\" class=\"el-dialog__body\">\n          <span data-v-1735ddb7=\"\">This is a message</span>\n        </div>\n        <footer class=\"el-dialog__footer\">\n          <span class=\"dialog-footer\" data-v-1735ddb7=\"\">\n            <button aria-disabled=\"false\" type=\"button\" class=\"el-button\" data-v-1735ddb7=\"\">\n              <span class=\"\">\u53D6\u6D88</span>\n            </button>\n            <button aria-disabled=\"false\" type=\"button\" class=\"el-button el-button--primary\" data-v-1735ddb7=\"\">\n              <span class=\"\"> \u786E\u5B9A </span>\n            </button>\n          </span>\n        </footer>\n      </div>\n    </div>\n  </div>\n";
  var domdialog = document.createElement('div').innerHTML = dom;
  document.body.appendChild(domdialog);

  var injectSwitchSystem = /*#__PURE__*/function () {
    function injectSwitchSystem() {
      _classCallCheck(this, injectSwitchSystem);
    }
    _createClass(injectSwitchSystem, null, [{
      key: "openDialog",
      value:
      // 请求系统接口

      function openDialog() {
        // console.log(2)
        document.body.append(domdialog);
      }
    }, {
      key: "init",
      value: function init(dom) {
        console.log(dom);
        try {
          dom.container.addEventListener('click', this.openDialog, false);
        } catch (err) {
          console.log(err);
        }
      }
    }]);
    return injectSwitchSystem;
  }();
  _defineProperty(injectSwitchSystem, "url", 'https://xxxx.com');

  return injectSwitchSystem;

})();

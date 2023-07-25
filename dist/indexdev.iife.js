
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

  var css_248z = ".zonst-switch-system{--el-color-white:#fff;--el-color-black:#000;--el-color-primary:#409eff;--el-color-primary-light-3:#79bbff;--el-color-primary-light-5:#a0cfff;--el-color-primary-light-7:#c6e2ff;--el-color-primary-light-8:#d9ecff;--el-color-primary-light-9:#ecf5ff;--el-color-primary-dark-2:#337ecc;--el-text-color-regular:#606266;--el-text-color-secondary:#909399;--el-text-color-primary:#303133;--el-text-color-placeholder:#a8abb2;--el-text-color-disabled:#c0c4cc;--el-border-color-light:#e4e7ed;--el-border-color-lighter:#ebeef5;--el-border-color-extra-light:#f2f6fc;--el-border-color-dark:#d4d7de;--el-border-color-darker:#cdd0d6;--el-fill-color:#f0f2f5;--el-fill-color-light:#f5f7fa;--el-fill-color-lighter:#fafafa;--el-fill-color-extra-light:#fafcff;--el-fill-color-dark:#ebedf0;--el-fill-color-darker:#e6e8eb;--el-fill-color-blank:#fff;--el-box-shadow:0px 12px 32px 4px rgba(0,0,0,.04),0px 8px 20px rgba(0,0,0,.08);--el-box-shadow-light:0px 0px 12px rgba(0,0,0,.12);--el-box-shadow-lighter:0px 0px 6px rgba(0,0,0,.12);--el-box-shadow-dark:0px 16px 48px 16px rgba(0,0,0,.08),0px 12px 32px rgba(0,0,0,.12),0px 8px 16px -8px rgba(0,0,0,.16);--el-disabled-bg-color:var(--el-fill-color-light);--el-disabled-text-color:var(--el-text-color-placeholder);--el-disabled-border-color:var(--el-border-color-light);--el-overlay-color:rgba(0,0,0,.8);--el-overlay-color-light:rgba(0,0,0,.7);--el-overlay-color-lighter:rgba(0,0,0,.5);--el-mask-color:hsla(0,0%,100%,.9);--el-mask-color-extra-light:hsla(0,0%,100%,.3);--el-border-color-hover:var(--el-text-color-disabled);--el-svg-monochrome-grey:var(--el-border-color);--el-dialog-padding-primary:20px;--el-dialog-content-font-size:14px;--el-button-text-color:#606266;--el-button-font-weight:500;--el-button-bg-color:#fff;--el-border-width:1px;--el-border-style:solid;--el-border-color:#dcdfe6;--el-border:var(--el-border-width) var(--el-border-style) var(--el-border-color);--el-button-border-color:#dcdfe6;--el-font-size-base:14px;--el-border-radius-base:4px;--el-button-hover-text-color:var(--el-color-primary);--el-button-font-weight:var(--el-font-weight-primary);--el-button-border-color:var(--el-border-color);--el-button-bg-color:var(--el-fill-color-blank);--el-button-text-color:var(--el-text-color-regular);--el-button-disabled-text-color:var(--el-disabled-text-color);--el-button-disabled-bg-color:var(--el-fill-color-blank);--el-button-disabled-border-color:var(--el-border-color-light);--el-button-divide-border-color:hsla(0,0%,100%,.5);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-7);--el-button-active-text-color:var(--el-button-hover-text-color);--el-button-active-border-color:var(--el-color-primary);--el-button-active-bg-color:var(--el-button-hover-bg-color);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-hover-link-text-color:var(--el-color-info);--el-button-active-color:var(--el-text-color-primary);--el-component-size:32px;--el-input-width:100%;--el-transition-duration-fast:.2s;--el-transition-function-ease-in-out-bezier:cubic-bezier(.645,.045,.355,1);--el-transition-box-shadow:box-shadow var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);color-scheme:light}.zonst-switch-system .el-input{--el-input-text-color:var(--el-text-color-regular);--el-input-border:var(--el-border);--el-input-hover-border:var(--el-border-color-hover);--el-input-focus-border:var(--el-color-primary);--el-input-transparent-border:0 0 0 1px transparent inset;--el-input-border-color:var(--el-border-color);--el-input-border-radius:var(--el-border-radius-base);--el-input-bg-color:var(--el-fill-color-blank);--el-input-icon-color:var(--el-text-color-placeholder);--el-input-placeholder-color:var(--el-text-color-placeholder);--el-input-hover-border-color:var(--el-border-color-hover);--el-input-clear-hover-color:var(--el-text-color-secondary);--el-input-focus-border-color:var(--el-color-primary);--el-input-width:100%}.zonst-switch-system{background-color:rgba(0,0,0,.5);bottom:0;height:100%;left:0;overflow:auto;position:fixed;right:0;top:0;z-index:2099}.zonst-switch-system .el-overlay-dialog{bottom:0;display:flex;left:0;overflow:auto;position:fixed;right:0;top:0}.zonst-switch-system .el-overlay-dialog .el-dialog{background:#fff;border-radius:10px;box-shadow:0 12px 32px 4px rgba(0,0,0,.04),0 8px 20px rgba(0,0,0,.08);box-sizing:border-box;margin:auto;position:relative;width:60%}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__header{margin-right:16px;padding:20px 20px 10px}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__header .el-dialog__title{color:#303133;font-size:18px;line-height:24px}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__header .el-dialog__headerbtn{background:transparent;border:none;cursor:pointer;font-size:var(--el-dialog-content-font-size);height:54px;outline:none;overflow:visible;padding:0;position:absolute;right:0;top:6px;width:54px}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close{fill:currentColor;align-items:center;color:#909399;display:inline-flex;font-size:inherit;height:1em;justify-content:center;line-height:1em;position:relative;width:1em}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close svg{height:1em;width:1em}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body{color:var(--el-text-color-regular);font-size:var(--el-dialog-content-font-size);padding:calc(var(--el-dialog-padding-primary) + 10px) var(--el-dialog-padding-primary)}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form{--el-form-label-font-size:var(--el-font-size-base);--el-form-inline-content-width:220px}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item{--font-size:14px;display:block;margin-bottom:18px}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item .el-form-item__label{box-sizing:border-box;color:var(--el-text-color-regular);cursor:default;display:block;font-size:var(--el-form-label-font-size);height:auto;line-height:22px;margin-bottom:8px;padding:0 12px 0 0;text-align:left;touch-action:manipulation}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item .el-form-item__content{align-items:center;display:flex;flex:1;flex-wrap:wrap;font-size:var(--font-size);line-height:32px;min-width:0;position:relative}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item .el-form-item__content .el-input{--el-input-height:var(--el-component-size);box-sizing:border-box;display:inline-flex;font-size:var(--el-font-size-base);line-height:var(--el-input-height);position:relative;vertical-align:middle;width:var(--el-input-width)}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item .el-form-item__content .el-input .el-input__wrapper{align-items:center;background-color:var(--el-input-bg-color,var(--el-fill-color-blank));background-image:none;border-radius:var(--el-input-border-radius,var(--el-border-radius-base));box-shadow:0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;cursor:text;display:inline-flex;flex-grow:1;justify-content:center;padding:1px 11px;transform:translateZ(0);transition:var(--el-transition-box-shadow)}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item .el-form-item__content .el-input .el-input__wrapper .el-input__inner{--el-input-inner-height:calc(var(--el-input-height, 32px) - 2px);background:none;border:none;box-sizing:border-box;color:var(--el-input-text-color,var(--el-text-color-regular));flex-grow:1;font-size:inherit;height:var(--el-input-inner-height);line-height:var(--el-input-inner-height);outline:none;padding:0;width:100%}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item .el-form-item__content .el-input .el-input__wrapper .el-input__inner:focus{outline:none}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item .el-form-item__content .el-input .el-input__wrapper:hover{box-shadow:0 0 0 1px var(--el-input-hover-border-color) inset}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__body .el-form .el-form-item .el-form-item__content .el-input .el-input__wrapper.is-focus{box-shadow:0 0 0 1px var(--el-input-focus-border-color) inset}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer{box-sizing:border-box;padding:var(--el-dialog-padding-primary);padding-top:10px;text-align:right}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer button:first-child{margin-right:10px}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer .el-button+.el-button{margin-left:12px}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer .el-button{align-items:center;-webkit-appearance:none;background-color:var(--el-button-bg-color);border:var(--el-border);border-color:var(--el-button-border-color);border-radius:var(--el-border-radius-base);box-sizing:border-box;color:var(--el-button-text-color);cursor:pointer;display:inline-flex;font-size:var(--el-font-size-base);font-weight:var(--el-button-font-weight);height:32px;justify-content:center;line-height:1;outline:none;padding:8px 15px;text-align:center;transition:.1s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer .el-button--primary{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-primary);--el-button-border-color:var(--el-color-primary);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-active-color:var(--el-color-primary-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-active-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-primary-light-5);--el-button-hover-bg-color:var(--el-color-primary-light-3);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-bg-color:var(--el-color-primary-dark-2);--el-button-active-border-color:var(--el-color-primary-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-primary-light-5);--el-button-disabled-border-color:var(--el-color-primary-light-5)}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer .el-button:focus,.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer .el-button:hover{background-color:var(--el-button-hover-bg-color);border-color:var(--el-button-hover-border-color);color:var(--el-button-hover-text-color);outline:none}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer .el-button:active{background-color:var(--el-button-active-bg-color);border-color:var(--el-button-active-border-color);color:var(--el-button-active-text-color);outline:none}.zonst-switch-system .el-overlay-dialog .el-dialog .el-dialog__footer .el-button>span{align-items:center;display:inline-flex}";
  styleInject(css_248z);

  var dom = "\n    <div role=\"dialog\" aria-modal=\"true\" aria-label=\"\u7CFB\u7EDF\u5207\u6362\" class=\"el-overlay-dialog\">\n      <div class=\"el-dialog\" tabindex=\"-1\">\n        <header class=\"el-dialog__header\">\n          <span role=\"heading\" class=\"el-dialog__title\">\u7CFB\u7EDF\u5207\u6362</span>\n          <button aria-label=\"Close this dialog\" class=\"el-dialog__headerbtn\" type=\"button\">\n            <i class=\"el-icon el-dialog__close\">\n              <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill=\"currentColor\" d=\"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z\">\n                </path>\n              </svg>\n            </i>\n          </button>\n        </header>\n        <div class=\"el-dialog__body\">\n\n          <form class=\"el-form\">\n            <div class=\"el-form-item\">\n              <label id=\"el-id-9829-351\" for=\"el-id-9829-405\" class=\"el-form-item__label\" style=\"\">\u7CFB\u7EDF\u9009\u62E9\uFF1A</label>\n              <div class=\"el-form-item__content\">\n                <div class=\"el-input\">\n                  <div class=\"el-input__wrapper\" role=\"button\" tabindex=\"-1\">\n                    <select class=\"el-input__inner\" autocomplete=\"off\" tabindex=\"0\" id=\"el-id-9829-405\">\n                      <option :value=\"item.value\" class=\"option_list\">\n                        {{ item.label }}\n                      </option>\n                      <option :value=\"item.value\" class=\"option_list\">\n                        {{ item.label }}\n                      </option>\n                      <option :value=\"item.value\" class=\"option_list\">\n                        {{ item.label }}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"el-form-item\">\n              <label id=\"el-id-9829-352\" for=\"el-id-9829-406\" class=\"el-form-item__label\" style=\"\">\u73AF\u5883\u9009\u62E9\uFF1A</label>\n              <div class=\"el-form-item__content\">\n                <div class=\"el-input\">\n                  <div class=\"el-input__wrapper\" role=\"button\" tabindex=\"-1\">\n                    <select class=\"el-input__inner\" autocomplete=\"off\" tabindex=\"0\" id=\"el-id-9829-406\">\n                      <option :value=\"item.value\" class=\"option_list\">\n                        {{ item.label }}\n                      </option>\n                      <option :value=\"item.value\" class=\"option_list\">\n                        {{ item.label }}\n                      </option>\n                      <option :value=\"item.value\" class=\"option_list\">\n                        {{ item.label }}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n\n        </div>\n        <footer class=\"el-dialog__footer\">\n          <span class=\"dialog-footer\">\n            <button aria-disabled=\"false\" type=\"button\" class=\"el-button\">\n              <span class=\"\">\u53D6\u6D88</span>\n            </button>\n            <button aria-disabled=\"false\" type=\"button\" class=\"el-button el-button--primary\">\n              <span class=\"\"> \u786E\u5B9A </span>\n            </button>\n          </span>\n        </footer>\n      </div>\n    </div>\n";
  var domdialog = document.createElement('div');
  domdialog.className = 'zonst-switch-system';
  domdialog.style.zIndex = '2099';
  domdialog.innerHTML = dom;
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


(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var injectSwitchSystem = (function () {
  'use strict';

  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
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

  var css_248z$1 = "@charset \"UTF-8\";:root{--el-color-primary-rgb:64,158,255;--el-color-success-rgb:103,194,58;--el-color-warning-rgb:230,162,60;--el-color-danger-rgb:245,108,108;--el-color-error-rgb:245,108,108;--el-color-info-rgb:144,147,153;--el-font-size-extra-large:20px;--el-font-size-large:18px;--el-font-size-medium:16px;--el-font-size-base:14px;--el-font-size-small:13px;--el-font-size-extra-small:12px;--el-font-family:\"Helvetica Neue\",Helvetica,\"PingFang SC\",\"Hiragino Sans GB\",\"Microsoft YaHei\",\"微软雅黑\",Arial,sans-serif;--el-font-weight-primary:500;--el-font-line-height-primary:24px;--el-index-normal:1;--el-index-top:1000;--el-index-popper:2000;--el-border-radius-base:4px;--el-border-radius-small:2px;--el-border-radius-round:20px;--el-border-radius-circle:100%;--el-transition-duration:.4s;--el-transition-duration-fast:0.2s;--el-transition-function-ease-in-out-bezier:cubic-bezier(0.645,0.045,0.355,1);--el-transition-function-fast-bezier:cubic-bezier(0.23,1,0.32,1);--el-transition-all:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);--el-transition-fade:opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-md-fade:transform var(--el-transition-duration) var(--el-transition-function-fast-bezier),opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-fade-linear:opacity var(--el-transition-duration-fast) linear;--el-transition-border:border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-box-shadow:box-shadow var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-color:color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-component-size-large:40px;--el-component-size:32px;--el-component-size-small:24px;--el-color-white:#fff;--el-color-black:#000;--el-color-primary:#409eff;--el-color-primary-light-3:#79bbff;--el-color-primary-light-5:#a0cfff;--el-color-primary-light-7:#c6e2ff;--el-color-primary-light-8:#d9ecff;--el-color-primary-light-9:#ecf5ff;--el-color-primary-dark-2:#337ecc;--el-color-success:#67c23a;--el-color-success-light-3:#95d475;--el-color-success-light-5:#b3e19d;--el-color-success-light-7:#d1edc4;--el-color-success-light-8:#e1f3d8;--el-color-success-light-9:#f0f9eb;--el-color-success-dark-2:#529b2e;--el-color-warning:#e6a23c;--el-color-warning-light-3:#eebe77;--el-color-warning-light-5:#f3d19e;--el-color-warning-light-7:#f8e3c5;--el-color-warning-light-8:#faecd8;--el-color-warning-light-9:#fdf6ec;--el-color-warning-dark-2:#b88230;--el-color-danger:#f56c6c;--el-color-danger-light-3:#f89898;--el-color-danger-light-5:#fab6b6;--el-color-danger-light-7:#fcd3d3;--el-color-danger-light-8:#fde2e2;--el-color-danger-light-9:#fef0f0;--el-color-danger-dark-2:#c45656;--el-color-error:#f56c6c;--el-color-error-light-3:#f89898;--el-color-error-light-5:#fab6b6;--el-color-error-light-7:#fcd3d3;--el-color-error-light-8:#fde2e2;--el-color-error-light-9:#fef0f0;--el-color-error-dark-2:#c45656;--el-color-info:#909399;--el-color-info-light-3:#b1b3b8;--el-color-info-light-5:#c8c9cc;--el-color-info-light-7:#dedfe0;--el-color-info-light-8:#e9e9eb;--el-color-info-light-9:#f4f4f5;--el-color-info-dark-2:#73767a;--el-bg-color:#fff;--el-bg-color-page:#f2f3f5;--el-bg-color-overlay:#fff;--el-text-color-primary:#303133;--el-text-color-regular:#606266;--el-text-color-secondary:#909399;--el-text-color-placeholder:#a8abb2;--el-text-color-disabled:#c0c4cc;--el-border-color:#dcdfe6;--el-border-color-light:#e4e7ed;--el-border-color-lighter:#ebeef5;--el-border-color-extra-light:#f2f6fc;--el-border-color-dark:#d4d7de;--el-border-color-darker:#cdd0d6;--el-fill-color:#f0f2f5;--el-fill-color-light:#f5f7fa;--el-fill-color-lighter:#fafafa;--el-fill-color-extra-light:#fafcff;--el-fill-color-dark:#ebedf0;--el-fill-color-darker:#e6e8eb;--el-fill-color-blank:#fff;--el-box-shadow:0px 12px 32px 4px rgba(0,0,0,.04),0px 8px 20px rgba(0,0,0,.08);--el-box-shadow-light:0px 0px 12px rgba(0,0,0,.12);--el-box-shadow-lighter:0px 0px 6px rgba(0,0,0,.12);--el-box-shadow-dark:0px 16px 48px 16px rgba(0,0,0,.08),0px 12px 32px rgba(0,0,0,.12),0px 8px 16px -8px rgba(0,0,0,.16);--el-disabled-bg-color:var(--el-fill-color-light);--el-disabled-text-color:var(--el-text-color-placeholder);--el-disabled-border-color:var(--el-border-color-light);--el-overlay-color:rgba(0,0,0,.8);--el-overlay-color-light:rgba(0,0,0,.7);--el-overlay-color-lighter:rgba(0,0,0,.5);--el-mask-color:hsla(0,0%,100%,.9);--el-mask-color-extra-light:hsla(0,0%,100%,.3);--el-border-width:1px;--el-border-style:solid;--el-border-color-hover:var(--el-text-color-disabled);--el-border:var(--el-border-width) var(--el-border-style) var(--el-border-color);--el-svg-monochrome-grey:var(--el-border-color);color-scheme:light}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transform-origin:center top;transition:var(--el-transition-md-fade)}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:center bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transform-origin:center bottom;transition:var(--el-transition-md-fade)}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transform-origin:top left;transition:var(--el-transition-md-fade)}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-enter-active,.el-collapse-transition-leave-active{transition:var(--el-transition-duration) max-height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out,var(--el-transition-duration) padding-left ease-in-out,var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-icon-loading{animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.el-icon{--color:inherit;fill:currentColor;align-items:center;color:var(--color);display:inline-flex;font-size:inherit;height:1em;justify-content:center;line-height:1em;position:relative;width:1em}.el-icon.is-loading{animation:rotating 2s linear infinite}.el-icon svg{height:1em;width:1em}";
  styleInject(css_248z$1);

  var css_248z = ".zonst-switch-system,.zonst-switch-system .el-overlay{transition:all var(--el-transition-duration)}.zonst-switch-system .el-overlay{background-color:var(--el-overlay-color-lighter);bottom:0;height:100%;left:0;overflow:auto;position:fixed;right:0;top:0;z-index:2000}.zonst-switch-system .el-drawer{--el-drawer-bg-color:var(--el-dialog-bg-color,var(--el-bg-color));--el-drawer-padding-primary:var(--el-dialog-padding-primary,20px);background-color:var(--el-drawer-bg-color);box-shadow:var(--el-box-shadow-dark);box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;position:absolute}.zonst-switch-system .el-drawer__sr-focus:focus{outline:0!important}.zonst-switch-system .el-drawer__header{align-items:center;color:#72767b;display:flex;margin-bottom:32px;padding:var(--el-drawer-padding-primary);padding-bottom:0}.zonst-switch-system .el-drawer__header>:first-child{flex:1}.zonst-switch-system .el-drawer__title{flex:1;font-size:1rem;line-height:inherit;margin:0}.zonst-switch-system .el-drawer__footer{padding:var(--el-drawer-padding-primary);padding-top:10px;text-align:right}.zonst-switch-system .el-drawer__close-btn{background-color:transparent;border:none;color:inherit;cursor:pointer;display:inline-flex;font-size:var(--el-font-size-extra-large);outline:0}.zonst-switch-system .el-drawer__close-btn:focus i,.zonst-switch-system .el-drawer__close-btn:hover i{color:var(--el-color-primary)}.zonst-switch-system .el-drawer__body{flex:1;overflow:auto;padding:var(--el-drawer-padding-primary)}.zonst-switch-system .el-drawer__body>*{box-sizing:border-box}.zonst-switch-system .el-drawer.ltr,.zonst-switch-system .el-drawer.rtl{bottom:0;height:100%;top:0}.zonst-switch-system .el-drawer.btt,.zonst-switch-system .el-drawer.ttb{left:0;right:0;width:100%}.zonst-switch-system .el-drawer.ltr{left:0}.zonst-switch-system .el-drawer.rtl{right:0}.zonst-switch-system .el-drawer.ttb{top:0}.zonst-switch-system .el-drawer.btt{bottom:0}.zonst-switch-system .el-drawer-fade-enter-active,.zonst-switch-system .el-drawer-fade-leave-active{transition:all var(--el-transition-duration)}.zonst-switch-system .el-drawer,.zonst-switch-system .el-drawer-fade-enter-active,.zonst-switch-system .el-drawer-fade-enter-from,.zonst-switch-system .el-drawer-fade-enter-to,.zonst-switch-system .el-drawer-fade-leave-active{overflow:hidden!important}.zonst-switch-system .el-drawer{opacity:0;opacity:1;transform:translateX(100%);transition:all var(--el-transition-duration)}.zonst-switch-system .el-drawer.open{transform:translate(0)}";
  styleInject(css_248z);

  /*
   * @Author: lipengcheng
   * @Date: 2023-07-24 10:39:43
   * @LastEditTime: 2023-07-28 09:30:23
   * @Description: http封装
   */

  // import axios from 'axios'

  var Toast = function Toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 9999999999;background: rgba(0, 0, 0,.7);font-size: 12px;";
    document.body.appendChild(m);
    setTimeout(function () {
      var d = 0.5;
      m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
      m.style.opacity = '0';
      setTimeout(function () {
        document.body.removeChild(m);
      }, d * 1000);
    }, duration);
  };
  var $http = function $http(method, url, data) {
    return new Promise(function (resolve, reject) {
      var headers = {};
      var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiLmtYvor5XnrqHnkIblkZhhZG1pbiIsImdyb3VwX2lkIjo3LCJpc19zdXBlcnVzZXIiOmZhbHNlLCJleHAiOjE2OTA2ODMxMzh9.pFAMq5t6sXNgkJcZDBZgAhB17i1P-iP2V6kSBGkI75U'; // localStorage.getItem('ZLINK_TOKEN_NAME')
      headers['X-Xq5-Jwt'] = token ;
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      console.log(headers);
      xhr.setRequestHeader('X-Xq5-Jwt', token);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(xhr.status);
            Toast('请求错误!', 2000);
          }
        }
      };
      /* axios({
        url,
        method,
        timeout: 10000,
        headers,
        ...dataOptions,
      }).then(async (res) => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            resolve(res.data)
          } else {
            reject(res)
            Toast('请求错误!', 2000);
          }
        } else {
          reject(res)
          Toast('请求错误!', 2000);
        }
      }) */
    });
  };

  var operateDom = /*#__PURE__*/function () {
    function operateDom() {
      _classCallCheck(this, operateDom);
    }
    _createClass(operateDom, null, [{
      key: "request",
      value: function () {
        var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(base) {
          var _this = this;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return $http('GET', base + '/api/server/v1/permission/account?platformKey=zlink').then(function (res) {
                  // this.systemData = res.data?.list || []
                  _this.systemData = [{
                    id: 1,
                    name: '系统1',
                    url: 'www.baidu.com',
                    isEnv: true,
                    children: [{
                      id: 11,
                      name: '系统1-1',
                      url: 'www.baidu.com'
                    }, {
                      id: 12,
                      name: '系统1-2',
                      url: 'www.baidu.com'
                    }, {
                      id: 13,
                      name: '系统1-3',
                      url: 'www.baidu.com'
                    }]
                  }, {
                    id: 2,
                    name: '系统2',
                    url: 'www.baidu.com',
                    isEnv: false
                  }, {
                    id: 3,
                    name: '系统3',
                    url: 'www.baidu.com',
                    isEnv: false
                  }, {
                    id: 4,
                    name: '系统4',
                    url: 'www.baidu.com',
                    isEnv: false
                  }, {
                    id: 5,
                    name: '系统5',
                    url: 'www.baidu.com',
                    isEnv: true,
                    children: [{
                      id: 51,
                      name: '系统5-1',
                      url: 'www.baidu.com'
                    }, {
                      id: 52,
                      name: '系统5-2',
                      url: 'www.baidu.com'
                    }, {
                      id: 53,
                      name: '系统5-3',
                      url: 'www.baidu.com'
                    }]
                  }];
                  for (var i = 0; i < _this.systemData.length; i++) {
                    _this.systemHTML += "<option value=\"".concat(_this.systemData[i].id, "\" class=\"option_list\"> ").concat(_this.systemData[i].name, " </option>");
                  }
                  if (_this.systemData[0].isEnv) {
                    // 如果第一个有环境变量
                    _this.envData = _this.systemData[0].children;
                    _this.envData.forEach(function (opt) {
                      _this.envHTML += "<option value=\"".concat(opt.id, "\" class=\"option_list\"> ").concat(opt.name, " </option>");
                    });
                  }
                });
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function request(_x) {
          return _request.apply(this, arguments);
        }
        return request;
      }()
    }, {
      key: "createdDom",
      value: function createdDom() {
        this.domdialog.className = 'zonst-switch-system';
        this.domdialog.style.zIndex = '2099';
        this.domdialog.innerHTML = this.drawerDom; // this.dom
        this.domdialog.style.display = 'none';
        document.body.appendChild(this.domdialog);
        // document.querySelector('.select_system_container').innerHTML = this.systemHTML
        // document.querySelector('.select_env_container').innerHTML = this.envHTML
      }
    }, {
      key: "close",
      value: function close() {
        document.querySelector('.zonst-switch-system .el-drawer').classList.remove('open');
        var a = setTimeout(function () {
          document.querySelector('.zonst-switch-system').style.display = 'none';
          clearTimeout(a);
        }, 500);
      }
    }, {
      key: "closeDialog",
      value: function closeDialog(e) {
        if (e) {
          if (_typeof(e.target.className) !== 'object' && e.target.className.indexOf('el-overlay') !== -1) {
            console.log(this);
            operateDom.close();
          }
          return;
        }
        this.close();
      }
    }, {
      key: "keyDownListener",
      value: function keyDownListener() {
        document.onkeydown = function (event) {
          var e = event || window.event || arguments.callee.caller.arguments[0];
          if (e && e.keyCode == 27) {
            // 按 Esc
            if (document.querySelector('.zonst-switch-system').style.display !== 'block') return;
            operateDom.close();
          }
        };
      }
    }, {
      key: "systemChange",
      value: function systemChange(v) {
        var _this2 = this;
        console.log(v);
        if (!v) return;
        this.systemData.forEach(function (list) {
          if (list.id === +v) {
            if (!list.isEnv) {
              document.querySelector('.env-form-item').style.display = 'none';
            } else {
              _this2.envData = list.children;
              _this2.envHTML = '<option value="" class="option_list"> 请选择环境 </option>';
              _this2.envData.forEach(function (opt) {
                _this2.envHTML += "<option value=\"".concat(opt.id, "\" class=\"option_list\"> ").concat(opt.name, " </option>");
              });
              document.querySelector('.select_env_container').innerHTML = _this2.envHTML;
              document.querySelector('.env-form-item').style.display = 'block';
            }
          }
        });
      }
    }]);
    return operateDom;
  }();
  _defineProperty(operateDom, "systemData", []);
  _defineProperty(operateDom, "systemHTML", '<option value="" class="option_list"> 请选择系统 </option>');
  _defineProperty(operateDom, "envData", []);
  _defineProperty(operateDom, "envHTML", '<option value="" class="option_list"> 请选择环境 </option>');
  _defineProperty(operateDom, "domdialog", document.createElement('div'));
  _defineProperty(operateDom, "drawerDom", "\n    <div class=\"el-overlay\" style=\"z-index: 2039;\">\n      <div aria-modal=\"true\" aria-label=\"I have a nested table inside!\" aria-describedby=\"el-id-2609-193\" class=\"el-drawer rtl\" role=\"dialog\" style=\"width: 80%;\">\n        <span class=\"el-drawer__sr-focus\" tabindex=\"-1\"></span>\n        <header class=\"el-drawer__header\">\n          <span id=\"el-id-2609-194\" role=\"heading\" class=\"el-drawer__title\">I have a nested table inside!</span>\n          <button aria-label=\"Close this dialog\" class=\"el-drawer__close-btn\" type=\"button\" onClick=\"injectSwitchSystem.closeDialog()\">\n            <i class=\"el-icon el-drawer__close\">\n              <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill=\"currentColor\" d=\"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z\"></path>\n              </svg>\n            </i>\n          </button>\n        </header>\n        <div id=\"el-id-2609-193\" class=\"el-drawer__body\"></div>\n      </div>\n    </div>");
  _defineProperty(operateDom, "dom", "\n    <div role=\"dialog\" aria-modal=\"true\" aria-label=\"\u7CFB\u7EDF\u5207\u6362\" class=\"el-overlay-dialog\">\n      <div class=\"el-dialog\" tabindex=\"-1\">\n        <header class=\"el-dialog__header\">\n          <span role=\"heading\" class=\"el-dialog__title\">\u7CFB\u7EDF\u5207\u6362</span>\n          <button aria-label=\"Close this dialog\" class=\"el-dialog__headerbtn\" type=\"button\" onClick=\"".concat(operateDom.closeDialog, "\">\n            <i class=\"el-icon el-dialog__close\">\n              <svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill=\"currentColor\" d=\"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z\">\n                </path>\n              </svg>\n            </i>\n          </button>\n        </header>\n        <div class=\"el-dialog__body\">\n\n          <form class=\"el-form\">\n            <div class=\"el-form-item\">\n              <label id=\"el-id-9829-351\" for=\"el-id-9829-405\" class=\"el-form-item__label\" style=\"\">\u7CFB\u7EDF\u9009\u62E9\uFF1A</label>\n              <div class=\"el-form-item__content\">\n                <div class=\"el-input\">\n                  <div class=\"el-input__wrapper\" role=\"button\" tabindex=\"-1\">\n                    <select class=\"el-input__inner select_system_container\" autocomplete=\"off\" tabindex=\"0\" id=\"el-id-9829-405\" onChange=\"injectSwitchSystem.systemChange(this.options[this.options.selectedIndex].value)\">\n                      ") + operateDom.systemHTML + "\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"el-form-item env-form-item\">\n              <label id=\"el-id-9829-352\" for=\"el-id-9829-406\" class=\"el-form-item__label\" style=\"\">\u73AF\u5883\u9009\u62E9\uFF1A</label>\n              <div class=\"el-form-item__content\">\n                <div class=\"el-input\">\n                  <div class=\"el-input__wrapper\" role=\"button\" tabindex=\"-1\">\n                    <select class=\"el-input__inner select_env_container\" autocomplete=\"off\" tabindex=\"0\" id=\"el-id-9829-406\" onChange=\"injectSwitchSystem.systemChange(this.options[this.options.selectedIndex].value)\">\n                      " + operateDom.envHTML + "\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n\n        </div>\n        <footer class=\"el-dialog__footer\">\n          <span class=\"dialog-footer\">\n            <button aria-disabled=\"false\" type=\"button\" class=\"el-button\" onClick=\"injectSwitchSystem.closeDialog()\">\n              <span class=\"\">\u53D6\u6D88</span>\n            </button>\n            <button aria-disabled=\"false\" type=\"button\" class=\"el-button el-button--primary\">\n              <span class=\"\"> \u786E\u5B9A </span>\n            </button>\n          </span>\n        </footer>\n      </div>\n    </div>\n  ");

  var injectSwitchSystem = /*#__PURE__*/function (_operateDom) {
    _inherits(injectSwitchSystem, _operateDom);
    var _super = _createSuper(injectSwitchSystem);
    function injectSwitchSystem() {
      _classCallCheck(this, injectSwitchSystem);
      return _super.call(this);
    }
    _createClass(injectSwitchSystem, null, [{
      key: "openDialog",
      value: function openDialog() {
        var _this = this;
        _get(_getPrototypeOf(injectSwitchSystem), "domdialog", this).style.display = 'block';
        var a = setTimeout(function () {
          _get(_getPrototypeOf(injectSwitchSystem), "domdialog", _this).querySelector('.el-drawer').classList.add('open');
          clearTimeout(a);
        }, 50);
        _get(_getPrototypeOf(injectSwitchSystem), "domdialog", this).querySelector('.el-overlay').addEventListener('click', _get(_getPrototypeOf(injectSwitchSystem), "closeDialog", this), false); // 监听点击空白处
        _get(_getPrototypeOf(injectSwitchSystem), "keyDownListener", this).call(this); // 监听esc按下
      }
    }, {
      key: "init",
      value: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dom) {
          var baseUrl;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                console.log(dom);
                _context.prev = 1;
                baseUrl = dom.env ? 'http://zlink.test.xq5.com' : 'https://zlink.zonst.com';
                this.url = baseUrl;
                _context.next = 6;
                return _get(_getPrototypeOf(injectSwitchSystem), "request", this).call(this, this.url);
              case 6:
                // 请求数据
                _get(_getPrototypeOf(injectSwitchSystem), "createdDom", this).call(this); // 创建Dom
                dom.container.addEventListener('click', this.openDialog, false);
                _context.next = 13;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[1, 10]]);
        }));
        function init(_x) {
          return _init.apply(this, arguments);
        }
        return init;
      }()
    }]);
    return injectSwitchSystem;
  }(operateDom);
  _defineProperty(injectSwitchSystem, "url", 'https://zlink.zonst.com');

  return injectSwitchSystem;

})();

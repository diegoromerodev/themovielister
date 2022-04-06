"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ \"./pages/layout.tsx\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _lib_hooks_useLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hooks/useLogin */ \"./lib/hooks/useLogin.tsx\");\n\n/* eslint-disable react/jsx-props-no-spreading */ \n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var appDataHooks = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        userData: {}\n    });\n    var _appDataHooks = _slicedToArray(appDataHooks, 2), appData = _appDataHooks[0], setAppData = _appDataHooks[1];\n    var userData = (0,_lib_hooks_useLogin__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImRpZWcwcjBtM3IwIiwiYXZhdGFyVVJMIjoiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9FYlVzWkVzXzFZZy9tYXhyZXNkZWZhdWx0LmpwZyIsImVtYWlsIjoiZGllZ29yb21lcm94ZEBlbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJEaWVnbyIsImxhc3ROYW1lIjoiUm9tZXJvIiwicGFzc3dvcmQiOiIkMmEkMDUkS3AyLjh2clY4dnZsdXYyMWx5TFhCT0Z0Rkl2TmZxaHpqZmI1Rjk1V1htTW5Lbi9zS0hGUkciLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTA0VDE4OjAzOjAzLjY2MVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTA0VDE4OjAzOjAzLjY2MVoifSwiaWF0IjoxNjQ5MDk1Mzg2fQ.hKKc_IMHz-BAz-pl9aYGehZgmFZTk35XygKAjqHpXR8\").userData;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (userData) {\n            setAppData(_objectSpread({}, appData, {\n                userData: userData\n            }));\n        }\n    }, [\n        userData\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n        value: appDataHooks,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\_app.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n}\n_s(App, \"88mxBibLtL82jG6ikF9IUZSqY5Y=\", false, function() {\n    return [\n        _lib_hooks_useLogin__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQWlELGdEQUMzQjtBQUVxQjtBQUNkO0FBQ2E7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQVFuQ0ssR0FBRyxDQUFDLEtBQTBDLEVBQUUsQ0FBQztRQUEzQ0MsU0FBUyxHQUFYLEtBQTBDLENBQXhDQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBMEMsQ0FBN0JBLFNBQVM7O0lBQ2pDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHUCwrQ0FBUSxDQUFDLENBQUM7UUFBQ1EsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUFDLENBQUM7SUFDOUMsR0FBSyxDQUF5QkQsYUFBWSxrQkFBWkEsWUFBWSxNQUFuQ0UsT0FBTyxHQUFnQkYsYUFBWSxLQUExQkcsVUFBVSxHQUFJSCxhQUFZO0lBQzFDLEdBQUssQ0FBR0MsUUFBUSxHQUFLTCwrREFBUSxDQUMzQixDQUFva0IscWtCQUQ5akJLLFFBQVE7SUFJaEJULGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFUyxRQUFRLEVBQUUsQ0FBQztZQUNiRSxVQUFVLG1CQUFNRCxPQUFPO2dCQUFFRCxRQUFRLEVBQVJBLFFBQVE7O1FBQ25DLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0E7UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFFYixNQUFNLDZFQUNITixnRUFBbUI7UUFBQ1UsS0FBSyxFQUFFTCxZQUFZOzhGQUNyQ04sK0NBQU07a0dBQ0pJLFNBQVMsb0JBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0dBcEJRRixHQUFHOztRQUdXRCwyREFBUTs7O0tBSHRCQyxHQUFHO0FBc0JaLCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5pbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2xpYi9BcHBDb250ZXh0XCI7XG5pbXBvcnQgdXNlTG9naW4gZnJvbSBcIi4uL2xpYi9ob29rcy91c2VMb2dpblwiO1xuXG5pbnRlcmZhY2UgRXh0ZW5kZWRBcHBQcm9wcyBleHRlbmRzIEFwcFByb3BzIHtcbiAgdXNlckRhdGE6IHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICB9O1xufVxuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBFeHRlbmRlZEFwcFByb3BzKSB7XG4gIGNvbnN0IGFwcERhdGFIb29rcyA9IHVzZVN0YXRlKHsgdXNlckRhdGE6IHt9IH0pO1xuICBjb25zdCBbYXBwRGF0YSwgc2V0QXBwRGF0YV0gPSBhcHBEYXRhSG9va3M7XG4gIGNvbnN0IHsgdXNlckRhdGEgfSA9IHVzZUxvZ2luKFxuICAgIFwiQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpveExDSjFjMlZ5Ym1GdFpTSTZJbVJwWldjd2NqQnRNM0l3SWl3aVlYWmhkR0Z5VlZKTUlqb2lhSFIwY0hNNkx5OXBMbmwwYVcxbkxtTnZiUzkyYVM5RllsVnpXa1Z6WHpGWlp5OXRZWGh5WlhOa1pXWmhkV3gwTG1wd1p5SXNJbVZ0WVdsc0lqb2laR2xsWjI5eWIyMWxjbTk0WkVCbGJXRnBiQzVqYjIwaUxDSm1hWEp6ZEU1aGJXVWlPaUpFYVdWbmJ5SXNJbXhoYzNST1lXMWxJam9pVW05dFpYSnZJaXdpY0dGemMzZHZjbVFpT2lJa01tRWtNRFVrUzNBeUxqaDJjbFk0ZG5ac2RYWXlNV3g1VEZoQ1QwWjBSa2wyVG1aeGFIcHFabUkxUmprMVYxaHRUVzVMYmk5elMwaEdVa2NpTENKeWIyeGxJam9pWVdSdGFXNGlMQ0pqY21WaGRHVmtRWFFpT2lJeU1ESXlMVEEwTFRBMFZERTRPakF6T2pBekxqWTJNVm9pTENKMWNHUmhkR1ZrUVhRaU9pSXlNREl5TFRBMExUQTBWREU0T2pBek9qQXpMalkyTVZvaWZTd2lhV0YwSWpveE5qUTVNRGsxTXpnMmZRLmhLS2NfSU1Iei1CQXotcGw5YVlHZWhaZ21GWlRrMzVYeWdLQWpxSHBYUjhcIlxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBzZXRBcHBEYXRhKHsgLi4uYXBwRGF0YSwgdXNlckRhdGEgfSk7XG4gICAgfVxuICB9LCBbdXNlckRhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthcHBEYXRhSG9va3N9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJBcHBDb250ZXh0IiwidXNlTG9naW4iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcHBEYXRhSG9va3MiLCJ1c2VyRGF0YSIsImFwcERhdGEiLCJzZXRBcHBEYXRhIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});
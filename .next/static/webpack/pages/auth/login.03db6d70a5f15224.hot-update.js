"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/login",{

/***/ "./pages/auth/login.tsx":
/*!******************************!*\
  !*** ./pages/auth/login.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/forms */ \"./components/forms.tsx\");\n/* harmony import */ var _components_postDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/postDetails */ \"./components/postDetails.tsx\");\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/typography */ \"./components/typography.tsx\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/AppContext */ \"./lib/AppContext.tsx\");\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction LoginPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_8__[\"default\"]), setAppData = ref[1];\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var _currentTarget, username, password, token;\n            return C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _currentTarget = e.currentTarget, username = _currentTarget.username, password = _currentTarget.password;\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(\"http://localhost:3000\", \"/api/auth\"), {\n                            username: username.value,\n                            password: password.value\n                        });\n                    case 4:\n                        token = _ctx.sent;\n                        setAppData(function(prevAppData) {\n                            return _objectSpread({}, prevAppData, {\n                                token: token\n                            });\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_6__.SectionContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_6__.SectionHeader, {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\login.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_forms__WEBPACK_IMPORTED_MODULE_4__.FormContainer, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_7__.PrimaryThinHeader, {\n                        children: \"Welcome Back!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\login.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_forms__WEBPACK_IMPORTED_MODULE_4__.StyledTextInput, {\n                        name: \"username\",\n                        type: \"text\",\n                        placeholder: \"Enter your username\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\login.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_forms__WEBPACK_IMPORTED_MODULE_4__.StyledTextInput, {\n                        name: \"password\",\n                        type: \"password\",\n                        placeholder: \"Enter your password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\login.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_postDetails__WEBPACK_IMPORTED_MODULE_5__.SubmitButton, {\n                        type: \"submit\",\n                        children: \"Access\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\login.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\login.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\login.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this));\n}\n_s(LoginPage, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ29CO0FBQzBCO0FBQ1o7QUFDZ0I7QUFDWjtBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FHcENTLFNBQVMsR0FBRyxDQUFDOztJQUNwQixHQUFLLENBQWtDUixHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ08sdURBQVUsR0FBbkRFLFVBQVUsR0FBb0JULEdBQXNCO0lBQzdELEdBQUssQ0FBQ1UsWUFBWTtrTUFBRyxRQUFRLFNBQURDLENBQTZCLEVBQUssQ0FBQztnQkFFOUJBLGNBQWUsRUFBdENDLFFBQVEsRUFBRUMsUUFBUSxFQUNwQkMsS0FBSzs7Ozt3QkFGWEgsQ0FBQyxDQUFDSSxjQUFjO3dCQUNlSixjQUFlLEdBQWZBLENBQUMsQ0FBQ0ssYUFBYSxFQUF0Q0osUUFBUSxHQUFlRCxjQUFlLENBQXRDQyxRQUFRLEVBQUVDLFFBQVEsR0FBS0YsY0FBZSxDQUE1QkUsUUFBUTs7K0JBQ05kLGlEQUFVLENBQzNCLEdBQWtDLE1BQVMsQ0FBekNtQix1QkFBK0IsRUFBQyxDQUFTLGFBQzVDLENBQUM7NEJBQ0NOLFFBQVEsRUFBRUEsUUFBUSxDQUFDUyxLQUFLOzRCQUN4QlIsUUFBUSxFQUFFQSxRQUFRLENBQUNRLEtBQUs7d0JBQzFCLENBQUM7O3dCQUxHUCxLQUFLO3dCQU9YTCxVQUFVLENBQUMsUUFBUSxDQUFQYSxXQUFXOzRCQUFLLE1BQU1BLG1CQUFBQSxXQUFXO2dDQUFFUixLQUFLLEVBQUxBLEtBQUs7Ozs7Ozs7O1FBQ3RELENBQUM7d0JBWEtKLFlBQVksQ0FBVUMsQ0FBNkI7Ozs7SUFhekQsTUFBTSw2RUFDSFAsa0VBQWdCOzt3RkFDZEMsK0RBQWE7MEJBQUMsQ0FBSzs7Ozs7O3dGQUNuQkosNERBQWE7Z0JBQUNzQixRQUFRLEVBQUViLFlBQVk7O2dHQUNsQ0oscUVBQWlCO2tDQUFDLENBQWE7Ozs7OztnR0FDL0JKLDhEQUFlO3dCQUNkc0IsSUFBSSxFQUFDLENBQVU7d0JBQ2ZDLElBQUksRUFBQyxDQUFNO3dCQUNYQyxXQUFXLEVBQUMsQ0FBcUI7Ozs7OztnR0FFbEN4Qiw4REFBZTt3QkFDZHNCLElBQUksRUFBQyxDQUFVO3dCQUNmQyxJQUFJLEVBQUMsQ0FBVTt3QkFDZkMsV0FBVyxFQUFDLENBQXFCOzs7Ozs7Z0dBRWxDdkIsaUVBQVk7d0JBQUNzQixJQUFJLEVBQUMsQ0FBUTtrQ0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUMsQ0FBQztHQWxDUWpCLFNBQVM7S0FBVEEsU0FBUztBQW9DbEIsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL2xvZ2luLnRzeD84ZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybUNvbnRhaW5lciwgU3R5bGVkVGV4dElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXNcIjtcbmltcG9ydCB7IFN1Ym1pdEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3REZXRhaWxzXCI7XG5pbXBvcnQgeyBTZWN0aW9uQ29udGFpbmVyLCBTZWN0aW9uSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGFibG9pZHNcIjtcbmltcG9ydCB7IFByaW1hcnlUaGluSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHlwb2dyYXBoeVwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uLy4uL2xpYi9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBBcHBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi8uLi9saWIvdHlwZXNcIjtcblxuZnVuY3Rpb24gTG9naW5QYWdlKCkge1xuICBjb25zdCBbLCBzZXRBcHBEYXRhXTogQXBwRGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvYXV0aGAsXG4gICAgICB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlLFxuICAgICAgfVxuICAgICk7XG4gICAgc2V0QXBwRGF0YSgocHJldkFwcERhdGEpID0+ICh7IC4uLnByZXZBcHBEYXRhLCB0b2tlbiB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxTZWN0aW9uSGVhZGVyPkxvZ2luPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgPEZvcm1Db250YWluZXIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxQcmltYXJ5VGhpbkhlYWRlcj5XZWxjb21lIEJhY2shPC9QcmltYXJ5VGhpbkhlYWRlcj5cbiAgICAgICAgPFN0eWxlZFRleHRJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTdHlsZWRUZXh0SW5wdXRcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWNjZXNzPC9TdWJtaXRCdXR0b24+XG4gICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VDb250ZXh0IiwiRm9ybUNvbnRhaW5lciIsIlN0eWxlZFRleHRJbnB1dCIsIlN1Ym1pdEJ1dHRvbiIsIlNlY3Rpb25Db250YWluZXIiLCJTZWN0aW9uSGVhZGVyIiwiUHJpbWFyeVRoaW5IZWFkZXIiLCJBcHBDb250ZXh0IiwiTG9naW5QYWdlIiwic2V0QXBwRGF0YSIsImhhbmRsZVN1Ym1pdCIsImUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidG9rZW4iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJ2YWx1ZSIsInByZXZBcHBEYXRhIiwib25TdWJtaXQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/login.tsx\n");

/***/ })

});
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

/***/ "./lib/hooks/useLogin.tsx":
/*!********************************!*\
  !*** ./lib/hooks/useLogin.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar useLogin = function(token) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), userData = ref[0], setUserData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!token) return;\n        debugger;\n        var verifyRequest = function() {\n            var _ref = _asyncToGenerator(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var verifyRes, dataRes;\n                return C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"\".concat(\"http://localhost:3000\", \"/api/auth/verify\"), {\n                                headers: {\n                                    Authorization: \"Bearer \".concat(token)\n                                },\n                                method: \"POST\"\n                            });\n                        case 2:\n                            verifyRes = _ctx.sent;\n                            _ctx.next = 5;\n                            return verifyRes.json();\n                        case 5:\n                            dataRes = _ctx.sent;\n                            setUserData(dataRes);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function verifyRequest() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        verifyRequest();\n    }, [\n        token\n    ]);\n    return {\n        userData: userData,\n        token: token\n    };\n};\n_s(useLogin, \"bZvTV4UWTy+ePeavylPDvbKzupU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLogin);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9va3MvdXNlTG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxHQUFLLENBQUNFLFFBQVEsR0FBRyxRQUFRLENBQVBDLEtBQWEsRUFBSyxDQUFDOztJQUNuQyxHQUFLLENBQTJCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQXBDRyxRQUFRLEdBQWlCSCxHQUFZLEtBQTNCSSxXQUFXLEdBQUlKLEdBQVk7SUFDNUNELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxHQUFHRyxLQUFLLEVBQUUsTUFBTTtRQUNsQixRQUFTO1FBQ1QsR0FBSyxDQUFDRyxhQUFhO3NNQUFHLFFBQVEsV0FBSSxDQUFDO29CQUMzQkMsU0FBUyxFQVNUQyxPQUFPOzs7OzttQ0FUV0MsS0FBSyxDQUMxQixHQUFrQyxNQUFnQixDQUFoREMsdUJBQStCLEVBQUMsQ0FBZ0Isb0JBQ25ELENBQUM7Z0NBQ0NHLE9BQU8sRUFBRSxDQUFDO29DQUNSQyxhQUFhLEVBQUcsQ0FBTyxTQUFRLE9BQU5YLEtBQUs7Z0NBQ2hDLENBQUM7Z0NBQ0RZLE1BQU0sRUFBRSxDQUFNOzRCQUNoQixDQUFDOzs0QkFQR1IsU0FBUzs7bUNBU09BLFNBQVMsQ0FBQ1MsSUFBSTs7NEJBQTlCUixPQUFPOzRCQUNiSCxXQUFXLENBQUNHLE9BQU87Ozs7OztZQUNyQixDQUFDOzRCQVpLRixhQUFhOzs7O1FBY25CQSxhQUFhO0lBQ2YsQ0FBQyxFQUFFLENBQUNIO1FBQUFBLEtBQUs7SUFBQSxDQUFDO0lBRVYsTUFBTSxDQUFDLENBQUM7UUFBQ0MsUUFBUSxFQUFSQSxRQUFRO1FBQUVELEtBQUssRUFBTEEsS0FBSztJQUFDLENBQUM7QUFDNUIsQ0FBQztHQXZCS0QsUUFBUTtBQXlCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9ob29rcy91c2VMb2dpbi50c3g/ZTViOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZUxvZ2luID0gKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF0b2tlbikgcmV0dXJuO1xuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnN0IHZlcmlmeVJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZnlSZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXBpL2F1dGgvdmVyaWZ5YCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGFSZXMgPSBhd2FpdCB2ZXJpZnlSZXMuanNvbigpO1xuICAgICAgc2V0VXNlckRhdGEoZGF0YVJlcyk7XG4gICAgfTtcblxuICAgIHZlcmlmeVJlcXVlc3QoKTtcbiAgfSwgW3Rva2VuXSk7XG5cbiAgcmV0dXJuIHsgdXNlckRhdGEsIHRva2VuIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2dpbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUxvZ2luIiwidG9rZW4iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidmVyaWZ5UmVxdWVzdCIsInZlcmlmeVJlcyIsImRhdGFSZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJtZXRob2QiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/hooks/useLogin.tsx\n");

/***/ })

});
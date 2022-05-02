"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./pages/auth/signup.tsx":
/*!*******************************!*\
  !*** ./pages/auth/signup.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/forms */ \"./components/forms.tsx\");\n/* harmony import */ var _components_postDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/postDetails */ \"./components/postDetails.tsx\");\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _lib_hooks_useAxiosInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/hooks/useAxiosInterceptor */ \"./lib/hooks/useAxiosInterceptor.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils */ \"./lib/utils.tsx\");\n\n\n/* eslint-disable no-restricted-syntax */ \n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction SignupPage() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), setAppData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        username: {\n            value: \"\",\n            placeholder: \"Choose a username\",\n            error: \"\",\n            name: \"Username\",\n            type: \"text\"\n        },\n        bio: {\n            value: \"\",\n            placeholder: \"Introduce yourself\",\n            error: \"\",\n            name: \"Bio\",\n            type: \"text\"\n        },\n        avatarURL: {\n            value: \"\",\n            placeholder: \"Enter an image url\",\n            error: \"\",\n            name: \"Avatar URL\",\n            type: \"text\"\n        },\n        email: {\n            value: \"\",\n            placeholder: \"Enter your email\",\n            error: \"\",\n            name: \"E-mail\",\n            type: \"email\"\n        },\n        firstName: {\n            value: \"\",\n            placeholder: \"Enter your first name\",\n            error: \"\",\n            name: \"First name\",\n            type: \"text\"\n        },\n        lastName: {\n            value: \"\",\n            placeholder: \"Type your last name\",\n            error: \"\",\n            name: \"Last name\",\n            type: \"text\"\n        },\n        password: {\n            value: \"\",\n            placeholder: \"Choose a password\",\n            error: \"\",\n            name: \"Password\",\n            type: \"password\"\n        },\n        passwordConfirm: {\n            value: \"\",\n            placeholder: \"Confirm your password\",\n            error: \"\",\n            name: \"Password confirmation\",\n            type: \"password\"\n        }\n    }), fieldData = ref1[0], setFieldData = ref1[1];\n    var checkEqualPasswords = function() {\n        var passwordError;\n        if (fieldData.password !== fieldData.passwordConfirm) passwordError = \"Passwords must match.\";\n        setFieldData(function(prevFieldData) {\n            var newFieldData = _objectSpread({}, prevFieldData);\n            newFieldData.passwordConfirm.error = passwordError;\n            return newFieldData;\n        });\n    };\n    var validateRequiredFields = function(fields) {\n        var allGood = true;\n        var badFields = _objectSpread({}, fields);\n        Object.keys(fields).forEach(function(k) {\n            if (!fields[k].value) {\n                badFields[k].error = \"\".concat(fields[k].name, \" is required.\");\n                allGood = false;\n            }\n        });\n        if (!allGood) {\n            setFieldData(function(prevFields) {\n                return _objectSpread({}, prevFields, badFields);\n            });\n        }\n        return allGood;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(checkEqualPasswords, [\n        fieldData.password,\n        fieldData.passwordConfirm, \n    ]);\n    var handleInputChange = function(name, readableName, value) {\n        var error;\n        debugger;\n        if (name in _lib_utils__WEBPACK_IMPORTED_MODULE_9__.UserFormFieldConstraints) {\n            error = _lib_utils__WEBPACK_IMPORTED_MODULE_9__.UserFormFieldConstraints[name](value, readableName);\n        }\n        setFieldData(function(prevData) {\n            return _objectSpread({}, prevData, {\n                name: _objectSpread({}, prevData[name], {\n                    value: value,\n                    error: error\n                })\n            });\n        });\n    };\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var createdUserRes, loginRes, token, userData;\n            return C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (validateRequiredFields(fieldData)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return _lib_hooks_useAxiosInterceptor__WEBPACK_IMPORTED_MODULE_8__.customAxios.post(\"/api/users\", fieldData);\n                    case 5:\n                        createdUserRes = _ctx.sent;\n                        if (!(createdUserRes === null || createdUserRes === void 0 ? void 0 : createdUserRes.data)) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.next = 9;\n                        return _lib_hooks_useAxiosInterceptor__WEBPACK_IMPORTED_MODULE_8__.customAxios.post(\"/api/auth\", {\n                            username: fieldData.username,\n                            password: fieldData.password\n                        });\n                    case 9:\n                        loginRes = _ctx.sent;\n                        token = loginRes.data.toString();\n                        userData = createdUserRes.data;\n                        setAppData(function(prevState) {\n                            return _objectSpread({}, prevState, {\n                                userData: userData,\n                                token: token\n                            });\n                        });\n                        localStorage.setItem(\"loginToken\", token);\n                        router.push(\"/\");\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_6__.SectionContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_6__.SectionHeader, {\n                children: \"Create account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_forms__WEBPACK_IMPORTED_MODULE_4__.FormContainer, {\n                onSubmit: handleSubmit,\n                children: [\n                    Object.keys(fieldData).map(function(field) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_forms__WEBPACK_IMPORTED_MODULE_4__.InputWithErrors, {\n                            serial: field,\n                            name: fieldData[field].name,\n                            type: fieldData[field].type,\n                            changeHandler: handleInputChange,\n                            error: fieldData[field].error,\n                            placeholder: fieldData[field].placeholder\n                        }, fieldData[field].name, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 11\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_postDetails__WEBPACK_IMPORTED_MODULE_5__.SubmitButton, {\n                        type: \"submit\",\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n        lineNumber: 156,\n        columnNumber: 5\n    }, this));\n}\n_s(SignupPage, \"cCwaS02Beb8fozGLoeQ0Xcudf28=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupPage);\nvar _c;\n$RefreshReg$(_c, \"SignupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7d0JBakJLYixZQUFZLENBQVVDLENBQTZCOzs7O0lBbUJ6RCxNQUFNLDZFQUNIeEMsa0VBQWdCOzt3RkFDZEMsK0RBQWE7MEJBQUMsQ0FBYzs7Ozs7O3dGQUM1QkosNERBQWE7Z0JBQUN3RCxRQUFRLEVBQUVkLFlBQVk7O29CQUNsQ1IsTUFBTSxDQUFDQyxJQUFJLENBQUNYLFNBQVMsRUFBRWlDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEtBQUs7c0NBQ2hDLE1BQU0sK0RBQUx6RCw4REFBZTs0QkFFZDBELE1BQU0sRUFBRUQsS0FBSzs0QkFDYjNDLElBQUksRUFBRVMsU0FBUyxDQUFDa0MsS0FBSyxFQUFFM0MsSUFBSTs0QkFDM0JDLElBQUksRUFBRVEsU0FBUyxDQUFDa0MsS0FBSyxFQUFFMUMsSUFBSTs0QkFDM0I0QyxhQUFhLEVBQUVyQixpQkFBaUI7NEJBQ2hDekIsS0FBSyxFQUFFVSxTQUFTLENBQUNrQyxLQUFLLEVBQUU1QyxLQUFLOzRCQUM3QkQsV0FBVyxFQUFFVyxTQUFTLENBQUNrQyxLQUFLLEVBQUU3QyxXQUFXOzJCQU5wQ1csU0FBUyxDQUFDa0MsS0FBSyxFQUFFM0MsSUFBSTs7Ozs7O2dHQVM3QmIsaUVBQVk7d0JBQUNjLElBQUksRUFBQyxDQUFRO2tDQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQyxDQUFDO0dBeEpRUixVQUFVOztRQUNGWixrREFBUzs7O0tBRGpCWSxVQUFVO0FBMEpuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvc2lnbnVwLnRzeD8xOTkxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybUNvbnRhaW5lciwgSW5wdXRXaXRoRXJyb3JzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXNcIjtcbmltcG9ydCB7IFN1Ym1pdEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bvc3REZXRhaWxzXCI7XG5pbXBvcnQgeyBTZWN0aW9uQ29udGFpbmVyLCBTZWN0aW9uSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGFibG9pZHNcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi8uLi9saWIvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgY3VzdG9tQXhpb3MgfSBmcm9tIFwiLi4vLi4vbGliL2hvb2tzL3VzZUF4aW9zSW50ZXJjZXB0b3JcIjtcbmltcG9ydCB7IEFwcERhdGFDb250ZXh0LCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgVXNlckZvcm1GaWVsZENvbnN0cmFpbnRzIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNGaWVsZHNEYXRhIHtcbiAgW2luZGV4OiBzdHJpbmddOiB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gU2lnbnVwUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFssIHNldEFwcERhdGFdOiBBcHBEYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbiAgY29uc3QgW2ZpZWxkRGF0YSwgc2V0RmllbGREYXRhXSA9IHVzZVN0YXRlPER5bmFtaWNGaWVsZHNEYXRhPih7XG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGEgdXNlcm5hbWVcIixcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgbmFtZTogXCJVc2VybmFtZVwiLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgfSxcbiAgICBiaW86IHtcbiAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIHlvdXJzZWxmXCIsXG4gICAgICBlcnJvcjogXCJcIixcbiAgICAgIG5hbWU6IFwiQmlvXCIsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICB9LFxuICAgIGF2YXRhclVSTDoge1xuICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBhbiBpbWFnZSB1cmxcIixcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgbmFtZTogXCJBdmF0YXIgVVJMXCIsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB2YWx1ZTogXCJcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgZW1haWxcIixcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgbmFtZTogXCJFLW1haWxcIixcbiAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICB9LFxuICAgIGZpcnN0TmFtZToge1xuICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciB5b3VyIGZpcnN0IG5hbWVcIixcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgbmFtZTogXCJGaXJzdCBuYW1lXCIsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICB9LFxuICAgIGxhc3ROYW1lOiB7XG4gICAgICB2YWx1ZTogXCJcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlR5cGUgeW91ciBsYXN0IG5hbWVcIixcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgbmFtZTogXCJMYXN0IG5hbWVcIixcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGEgcGFzc3dvcmRcIixcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgbmFtZTogXCJQYXNzd29yZFwiLFxuICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgIH0sXG4gICAgcGFzc3dvcmRDb25maXJtOiB7XG4gICAgICB2YWx1ZTogXCJcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0geW91ciBwYXNzd29yZFwiLFxuICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICBuYW1lOiBcIlBhc3N3b3JkIGNvbmZpcm1hdGlvblwiLFxuICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGNoZWNrRXF1YWxQYXNzd29yZHMgPSAoKSA9PiB7XG4gICAgbGV0IHBhc3N3b3JkRXJyb3I7XG4gICAgaWYgKGZpZWxkRGF0YS5wYXNzd29yZCAhPT0gZmllbGREYXRhLnBhc3N3b3JkQ29uZmlybSlcbiAgICAgIHBhc3N3b3JkRXJyb3IgPSBcIlBhc3N3b3JkcyBtdXN0IG1hdGNoLlwiO1xuXG4gICAgc2V0RmllbGREYXRhKChwcmV2RmllbGREYXRhKSA9PiB7XG4gICAgICBjb25zdCBuZXdGaWVsZERhdGEgPSB7IC4uLnByZXZGaWVsZERhdGEgfTtcbiAgICAgIG5ld0ZpZWxkRGF0YS5wYXNzd29yZENvbmZpcm0uZXJyb3IgPSBwYXNzd29yZEVycm9yO1xuICAgICAgcmV0dXJuIG5ld0ZpZWxkRGF0YTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzID0gKGZpZWxkczogRHluYW1pY0ZpZWxkc0RhdGEpOiBib29sZWFuID0+IHtcbiAgICBsZXQgYWxsR29vZCA9IHRydWU7XG4gICAgY29uc3QgYmFkRmllbGRzOiBEeW5hbWljRmllbGRzRGF0YSA9IHsgLi4uZmllbGRzIH07XG4gICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoIWZpZWxkc1trXS52YWx1ZSkge1xuICAgICAgICBiYWRGaWVsZHNba10uZXJyb3IgPSBgJHtmaWVsZHNba10ubmFtZX0gaXMgcmVxdWlyZWQuYDtcbiAgICAgICAgYWxsR29vZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghYWxsR29vZCkge1xuICAgICAgc2V0RmllbGREYXRhKChwcmV2RmllbGRzKSA9PiAoe1xuICAgICAgICAuLi5wcmV2RmllbGRzLFxuICAgICAgICAuLi5iYWRGaWVsZHMsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxHb29kO1xuICB9O1xuXG4gIHVzZUVmZmVjdChjaGVja0VxdWFsUGFzc3dvcmRzLCBbXG4gICAgZmllbGREYXRhLnBhc3N3b3JkLFxuICAgIGZpZWxkRGF0YS5wYXNzd29yZENvbmZpcm0sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICByZWFkYWJsZU5hbWU6IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nXG4gICk6IHZvaWQgPT4ge1xuICAgIGxldCBlcnJvcjtcbiAgICBkZWJ1Z2dlcjtcbiAgICBpZiAobmFtZSBpbiBVc2VyRm9ybUZpZWxkQ29uc3RyYWludHMpIHtcbiAgICAgIGVycm9yID0gVXNlckZvcm1GaWVsZENvbnN0cmFpbnRzW25hbWVdKHZhbHVlLCByZWFkYWJsZU5hbWUpO1xuICAgIH1cbiAgICBzZXRGaWVsZERhdGEoKHByZXZEYXRhKSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBuYW1lOiB7IC4uLnByZXZEYXRhW25hbWVdLCB2YWx1ZSwgZXJyb3IgfSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhmaWVsZERhdGEpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZWRVc2VyUmVzID0gYXdhaXQgY3VzdG9tQXhpb3MucG9zdChcIi9hcGkvdXNlcnNcIiwgZmllbGREYXRhKTtcbiAgICBpZiAoY3JlYXRlZFVzZXJSZXM/LmRhdGEpIHtcbiAgICAgIGNvbnN0IGxvZ2luUmVzID0gYXdhaXQgY3VzdG9tQXhpb3MucG9zdChcIi9hcGkvYXV0aFwiLCB7XG4gICAgICAgIHVzZXJuYW1lOiBmaWVsZERhdGEudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBmaWVsZERhdGEucGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRva2VuOiBzdHJpbmcgPSBsb2dpblJlcy5kYXRhLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCB1c2VyRGF0YTogVXNlclNjaGVtYSA9IGNyZWF0ZWRVc2VyUmVzLmRhdGE7XG4gICAgICBzZXRBcHBEYXRhKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgdXNlckRhdGEsIHRva2VuIH0pKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9naW5Ub2tlblwiLCB0b2tlbik7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICA8U2VjdGlvbkhlYWRlcj5DcmVhdGUgYWNjb3VudDwvU2VjdGlvbkhlYWRlcj5cbiAgICAgIDxGb3JtQ29udGFpbmVyIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICB7T2JqZWN0LmtleXMoZmllbGREYXRhKS5tYXAoKGZpZWxkKSA9PiAoXG4gICAgICAgICAgPElucHV0V2l0aEVycm9yc1xuICAgICAgICAgICAga2V5PXtmaWVsZERhdGFbZmllbGRdLm5hbWV9XG4gICAgICAgICAgICBzZXJpYWw9e2ZpZWxkfVxuICAgICAgICAgICAgbmFtZT17ZmllbGREYXRhW2ZpZWxkXS5uYW1lfVxuICAgICAgICAgICAgdHlwZT17ZmllbGREYXRhW2ZpZWxkXS50eXBlfVxuICAgICAgICAgICAgY2hhbmdlSGFuZGxlcj17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBlcnJvcj17ZmllbGREYXRhW2ZpZWxkXS5lcnJvcn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWVsZERhdGFbZmllbGRdLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9TdWJtaXRCdXR0b24+XG4gICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvcm1Db250YWluZXIiLCJJbnB1dFdpdGhFcnJvcnMiLCJTdWJtaXRCdXR0b24iLCJTZWN0aW9uQ29udGFpbmVyIiwiU2VjdGlvbkhlYWRlciIsIkFwcENvbnRleHQiLCJjdXN0b21BeGlvcyIsIlVzZXJGb3JtRmllbGRDb25zdHJhaW50cyIsIlNpZ251cFBhZ2UiLCJyb3V0ZXIiLCJzZXRBcHBEYXRhIiwidXNlcm5hbWUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiZXJyb3IiLCJuYW1lIiwidHlwZSIsImJpbyIsImF2YXRhclVSTCIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsImZpZWxkRGF0YSIsInNldEZpZWxkRGF0YSIsImNoZWNrRXF1YWxQYXNzd29yZHMiLCJwYXNzd29yZEVycm9yIiwicHJldkZpZWxkRGF0YSIsIm5ld0ZpZWxkRGF0YSIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJmaWVsZHMiLCJhbGxHb29kIiwiYmFkRmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwicHJldkZpZWxkcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwicmVhZGFibGVOYW1lIiwicHJldkRhdGEiLCJoYW5kbGVTdWJtaXQiLCJlIiwiY3JlYXRlZFVzZXJSZXMiLCJsb2dpblJlcyIsInRva2VuIiwidXNlckRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJkYXRhIiwidG9TdHJpbmciLCJwcmV2U3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsIm9uU3VibWl0IiwibWFwIiwiZmllbGQiLCJzZXJpYWwiLCJjaGFuZ2VIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signup.tsx\n");

/***/ })

});
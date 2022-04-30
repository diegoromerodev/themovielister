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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/forms */ \"./components/forms.tsx\");\n/* harmony import */ var _components_postDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/postDetails */ \"./components/postDetails.tsx\");\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _lib_hooks_useAxiosInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/hooks/useAxiosInterceptor */ \"./lib/hooks/useAxiosInterceptor.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils */ \"./lib/utils.tsx\");\n\n\n/* eslint-disable no-restricted-syntax */ \n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction SignupPage() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), setAppData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        username: {\n            value: \"\",\n            placeholder: \"Choose a username\",\n            error: \"\"\n        },\n        bio: {\n            value: \"\",\n            placeholder: \"Introduce yourself\",\n            error: \"\"\n        },\n        avatarURL: {\n            value: \"\",\n            placeholder: \"Enter an image url\",\n            error: \"\"\n        },\n        email: {\n            value: \"\",\n            placeholder: \"Enter your email\",\n            error: \"\"\n        },\n        firstName: {\n            value: \"\",\n            placeholder: \"Enter your first name\",\n            error: \"\"\n        },\n        lastName: {\n            value: \"\",\n            placeholder: \"Type your last name\",\n            error: \"\"\n        },\n        password: {\n            value: \"\",\n            placeholder: \"Choose a password\",\n            error: \"\"\n        },\n        passwordConfirm: {\n            value: \"\",\n            placeholder: \"Confirm your password\",\n            error: \"\"\n        }\n    }), fieldData = ref1[0], setFieldData = ref1[1];\n    var checkEqualPasswords = function() {\n        var passwordError;\n        if (fieldData.password !== fieldData.passwordConfirm) passwordError = \"Passwords must match.\";\n        setFieldData(function(prevFieldData) {\n            var newFieldData = _objectSpread({}, prevFieldData);\n            newFieldData.passwordConfirm.error = passwordError;\n            return newFieldData;\n        });\n    };\n    var validateRequiredFields = function(fields) {\n        var allGood = true;\n        var badFields = _objectSpread({}, fields);\n        Object.keys(fields).forEach(function(k) {\n            if (!fields[k].value) {\n                badFields[k].error = \"\".concat((0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__.camelCaseToCapitalize)(k), \" is required.\");\n                allGood = false;\n            }\n        });\n        if (!allGood) {\n            setFieldData(function(prevFields) {\n                return _objectSpread({}, prevFields, badFields);\n            });\n        }\n        return allGood;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(checkEqualPasswords, [\n        fieldData.password,\n        fieldData.passwordConfirm, \n    ]);\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var createdUserRes, loginRes, token, userData;\n            return C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (validateRequiredFields(fieldData)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return _lib_hooks_useAxiosInterceptor__WEBPACK_IMPORTED_MODULE_8__.customAxios.post(\"/api/users\", fieldData);\n                    case 5:\n                        createdUserRes = _ctx.sent;\n                        if (!(createdUserRes === null || createdUserRes === void 0 ? void 0 : createdUserRes.data)) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.next = 9;\n                        return _lib_hooks_useAxiosInterceptor__WEBPACK_IMPORTED_MODULE_8__.customAxios.post(\"/api/auth\", {\n                            username: fieldData.username,\n                            password: fieldData.password\n                        });\n                    case 9:\n                        loginRes = _ctx.sent;\n                        token = loginRes.data.toString();\n                        userData = createdUserRes.data;\n                        setAppData(function(prevState) {\n                            return _objectSpread({}, prevState, {\n                                userData: userData,\n                                token: token\n                            });\n                        });\n                        localStorage.setItem(\"loginToken\", token);\n                        router.push(\"/\");\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_6__.SectionContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_6__.SectionHeader, {\n                children: \"Create account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_forms__WEBPACK_IMPORTED_MODULE_4__.FormContainer, {\n                onSubmit: handleSubmit,\n                children: [\n                    Object.keys(fieldData).map(function(field) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_forms__WEBPACK_IMPORTED_MODULE_4__.InputWithErrors, {\n                            name: field,\n                            changeHandler: setFieldData,\n                            error: fieldData[field].error,\n                            placeholder: fieldData[field].placeholder\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_postDetails__WEBPACK_IMPORTED_MODULE_5__.SubmitButton, {\n                        type: \"submit\",\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\signup.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this));\n}\n_s(SignupPage, \"MP5ZkcPvy9ttsZgETQxMOQ3+XTg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupPage);\nvar _c;\n$RefreshReg$(_c, \"SignupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUF5Qyx3Q0FDRjtBQUMyQjtBQUNLO0FBQ1o7QUFDZ0I7QUFDOUI7QUFDb0I7QUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FNOUNZLFVBQVUsR0FBRyxDQUFDOzs7SUFDckIsR0FBSyxDQUFDQyxNQUFNLEdBQUdiLHNEQUFTO0lBQ3hCLEdBQUssQ0FBa0NDLEdBQXNCLEdBQXRCQSxpREFBVSxDQUFDUSx1REFBVSxHQUFuREssVUFBVSxHQUFvQmIsR0FBc0I7SUFFN0QsR0FBSyxDQUE2QkUsSUFhaEMsR0FiZ0NBLCtDQUFRLENBQW9CLENBQUM7UUFDN0RZLFFBQVEsRUFBRSxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUFFO1lBQUVDLFdBQVcsRUFBRSxDQUFtQjtZQUFFQyxLQUFLLEVBQUUsQ0FBRTtRQUFDLENBQUM7UUFDcEVDLEdBQUcsRUFBRSxDQUFDO1lBQUNILEtBQUssRUFBRSxDQUFFO1lBQUVDLFdBQVcsRUFBRSxDQUFvQjtZQUFFQyxLQUFLLEVBQUUsQ0FBRTtRQUFDLENBQUM7UUFDaEVFLFNBQVMsRUFBRSxDQUFDO1lBQUNKLEtBQUssRUFBRSxDQUFFO1lBQUVDLFdBQVcsRUFBRSxDQUFvQjtZQUFFQyxLQUFLLEVBQUUsQ0FBRTtRQUFDLENBQUM7UUFDdEVHLEtBQUssRUFBRSxDQUFDO1lBQUNMLEtBQUssRUFBRSxDQUFFO1lBQUVDLFdBQVcsRUFBRSxDQUFrQjtZQUFFQyxLQUFLLEVBQUUsQ0FBRTtRQUFDLENBQUM7UUFDaEVJLFNBQVMsRUFBRSxDQUFDO1lBQUNOLEtBQUssRUFBRSxDQUFFO1lBQUVDLFdBQVcsRUFBRSxDQUF1QjtZQUFFQyxLQUFLLEVBQUUsQ0FBRTtRQUFDLENBQUM7UUFDekVLLFFBQVEsRUFBRSxDQUFDO1lBQUNQLEtBQUssRUFBRSxDQUFFO1lBQUVDLFdBQVcsRUFBRSxDQUFxQjtZQUFFQyxLQUFLLEVBQUUsQ0FBRTtRQUFDLENBQUM7UUFDdEVNLFFBQVEsRUFBRSxDQUFDO1lBQUNSLEtBQUssRUFBRSxDQUFFO1lBQUVDLFdBQVcsRUFBRSxDQUFtQjtZQUFFQyxLQUFLLEVBQUUsQ0FBRTtRQUFDLENBQUM7UUFDcEVPLGVBQWUsRUFBRSxDQUFDO1lBQ2hCVCxLQUFLLEVBQUUsQ0FBRTtZQUNUQyxXQUFXLEVBQUUsQ0FBdUI7WUFDcENDLEtBQUssRUFBRSxDQUFFO1FBQ1gsQ0FBQztJQUNILENBQUMsR0FiTVEsU0FBUyxHQUFrQnZCLElBYWhDLEtBYmdCd0IsWUFBWSxHQUFJeEIsSUFhaEM7SUFFRixHQUFLLENBQUN5QixtQkFBbUIsR0FBRyxRQUM5QixHQURvQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQ0MsYUFBYTtRQUNqQixFQUFFLEVBQUVILFNBQVMsQ0FBQ0YsUUFBUSxLQUFLRSxTQUFTLENBQUNELGVBQWUsRUFDbERJLGFBQWEsR0FBRyxDQUF1QjtRQUV6Q0YsWUFBWSxDQUFDLFFBQVEsQ0FBUEcsYUFBYSxFQUFLLENBQUM7WUFDL0IsR0FBSyxDQUFDQyxZQUFZLHFCQUFRRCxhQUFhO1lBQ3ZDQyxZQUFZLENBQUNOLGVBQWUsQ0FBQ1AsS0FBSyxHQUFHVyxhQUFhO1lBQ2xELE1BQU0sQ0FBQ0UsWUFBWTtRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ0Msc0JBQXNCLEdBQUcsUUFBUSxDQUFQQyxNQUF5QixFQUFjLENBQUM7UUFDdEUsR0FBRyxDQUFDQyxPQUFPLEdBQUcsSUFBSTtRQUNsQixHQUFLLENBQUNDLFNBQVMscUJBQTJCRixNQUFNO1FBQ2hERyxNQUFNLENBQUNDLElBQUksQ0FBQ0osTUFBTSxFQUFFSyxPQUFPLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztZQUNsQyxFQUFFLEdBQUdOLE1BQU0sQ0FBQ00sQ0FBQyxFQUFFdkIsS0FBSyxFQUFFLENBQUM7Z0JBQ3JCbUIsU0FBUyxDQUFDSSxDQUFDLEVBQUVyQixLQUFLLEdBQUksR0FBMkIsTUFBYSxDQUF0Q1AsaUVBQXFCLENBQUM0QixDQUFDLEdBQUUsQ0FBYTtnQkFDOURMLE9BQU8sR0FBRyxLQUFLO1lBQ2pCLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxHQUFHQSxPQUFPLEVBQUUsQ0FBQztZQUNiUCxZQUFZLENBQUMsUUFBUSxDQUFQYSxVQUFVO2dCQUFLLE1BQ2hDLG1CQUFRQSxVQUFVLEVBQ1ZMLFNBQVM7O1FBRWhCLENBQUM7UUFDRCxNQUFNLENBQUNELE9BQU87SUFDaEIsQ0FBQztJQUVEaEMsZ0RBQVMsQ0FBQzBCLG1CQUFtQixFQUFFLENBQUM7UUFDOUJGLFNBQVMsQ0FBQ0YsUUFBUTtRQUNsQkUsU0FBUyxDQUFDRCxlQUFlO0lBQzNCLENBQUM7SUFFRCxHQUFLLENBQUNnQixZQUFZO2tNQUFHLFFBQVEsU0FBREMsQ0FBNkIsRUFBSyxDQUFDO2dCQUt2REMsY0FBYyxFQUVaQyxRQUFRLEVBSVJDLEtBQUssRUFDTEMsUUFBUTs7Ozt3QkFYaEJKLENBQUMsQ0FBQ0ssY0FBYzs0QkFDWGYsc0JBQXNCLENBQUNOLFNBQVM7Ozs7Ozs7K0JBR1JoQiw0RUFBZ0IsQ0FBQyxDQUFZLGFBQUVnQixTQUFTOzt3QkFBL0RpQixjQUFjOzhCQUNoQkEsY0FBYyxhQUFkQSxjQUFjLEtBQWRBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLGNBQWMsQ0FBRU0sSUFBSTs7Ozs7K0JBQ0N2Qyw0RUFBZ0IsQ0FBQyxDQUFXLFlBQUUsQ0FBQzs0QkFDcERLLFFBQVEsRUFBRVcsU0FBUyxDQUFDWCxRQUFROzRCQUM1QlMsUUFBUSxFQUFFRSxTQUFTLENBQUNGLFFBQVE7d0JBQzlCLENBQUM7O3dCQUhLb0IsUUFBUTt3QkFJUkMsS0FBSyxHQUFXRCxRQUFRLENBQUNLLElBQUksQ0FBQ0MsUUFBUTt3QkFDdENKLFFBQVEsR0FBZUgsY0FBYyxDQUFDTSxJQUFJO3dCQUNoRG5DLFVBQVUsQ0FBQyxRQUFRLENBQVBxQyxTQUFTOzRCQUFLLE1BQU1BLG1CQUFBQSxTQUFTO2dDQUFFTCxRQUFRLEVBQVJBLFFBQVE7Z0NBQUVELEtBQUssRUFBTEEsS0FBSzs7O3dCQUMxRE8sWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBWSxhQUFFUixLQUFLO3dCQUN4Q2hDLE1BQU0sQ0FBQ3lDLElBQUksQ0FBQyxDQUFHOzs7Ozs7UUFFbkIsQ0FBQzt3QkFqQktiLFlBQVksQ0FBVUMsQ0FBNkI7Ozs7SUFtQnpELE1BQU0sNkVBQ0huQyxrRUFBZ0I7O3dGQUNkQywrREFBYTswQkFBQyxDQUFjOzs7Ozs7d0ZBQzVCSiw0REFBYTtnQkFBQ21ELFFBQVEsRUFBRWQsWUFBWTs7b0JBQ2xDTCxNQUFNLENBQUNDLElBQUksQ0FBQ1gsU0FBUyxFQUFFOEIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsS0FBSztzQ0FDaEMsTUFBTSwrREFBTHBELDhEQUFlOzRCQUNkcUQsSUFBSSxFQUFFRCxLQUFLOzRCQUNYRSxhQUFhLEVBQUVoQyxZQUFZOzRCQUMzQlQsS0FBSyxFQUFFUSxTQUFTLENBQUMrQixLQUFLLEVBQUV2QyxLQUFLOzRCQUM3QkQsV0FBVyxFQUFFUyxTQUFTLENBQUMrQixLQUFLLEVBQUV4QyxXQUFXOzs7Ozs7O2dHQUc1Q1gsaUVBQVk7d0JBQUNzRCxJQUFJLEVBQUMsQ0FBUTtrQ0FBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0MsQ0FBQztHQXpGUWhELFVBQVU7O1FBQ0ZaLGtEQUFTOzs7S0FEakJZLFVBQVU7QUEyRm5CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWdudXAudHN4PzE5OTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtQ29udGFpbmVyLCBJbnB1dFdpdGhFcnJvcnMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VibWl0QnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdERldGFpbHNcIjtcbmltcG9ydCB7IFNlY3Rpb25Db250YWluZXIsIFNlY3Rpb25IZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90YWJsb2lkc1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uLy4uL2xpYi9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBjdXN0b21BeGlvcyB9IGZyb20gXCIuLi8uLi9saWIvaG9va3MvdXNlQXhpb3NJbnRlcmNlcHRvclwiO1xuaW1wb3J0IHsgQXBwRGF0YUNvbnRleHQsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vLi4vbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBjYW1lbENhc2VUb0NhcGl0YWxpemUgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0ZpZWxkc0RhdGEge1xuICBbaW5kZXg6IHN0cmluZ106IHsgdmFsdWU6IHN0cmluZzsgcGxhY2Vob2xkZXI6IHN0cmluZzsgZXJyb3I6IHN0cmluZyB9O1xufVxuXG5mdW5jdGlvbiBTaWdudXBQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgWywgc2V0QXBwRGF0YV06IEFwcERhdGFDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBjb25zdCBbZmllbGREYXRhLCBzZXRGaWVsZERhdGFdID0gdXNlU3RhdGU8RHluYW1pY0ZpZWxkc0RhdGE+KHtcbiAgICB1c2VybmFtZTogeyB2YWx1ZTogXCJcIiwgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGEgdXNlcm5hbWVcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBiaW86IHsgdmFsdWU6IFwiXCIsIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSB5b3Vyc2VsZlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGF2YXRhclVSTDogeyB2YWx1ZTogXCJcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgYW4gaW1hZ2UgdXJsXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgZW1haWw6IHsgdmFsdWU6IFwiXCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgZW1haWxcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBmaXJzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgZmlyc3QgbmFtZVwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGxhc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBwbGFjZWhvbGRlcjogXCJUeXBlIHlvdXIgbGFzdCBuYW1lXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgcGFzc3dvcmQ6IHsgdmFsdWU6IFwiXCIsIHBsYWNlaG9sZGVyOiBcIkNob29zZSBhIHBhc3N3b3JkXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgcGFzc3dvcmRDb25maXJtOiB7XG4gICAgICB2YWx1ZTogXCJcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0geW91ciBwYXNzd29yZFwiLFxuICAgICAgZXJyb3I6IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgY2hlY2tFcXVhbFBhc3N3b3JkcyA9ICgpID0+IHtcbiAgICBsZXQgcGFzc3dvcmRFcnJvcjtcbiAgICBpZiAoZmllbGREYXRhLnBhc3N3b3JkICE9PSBmaWVsZERhdGEucGFzc3dvcmRDb25maXJtKVxuICAgICAgcGFzc3dvcmRFcnJvciA9IFwiUGFzc3dvcmRzIG11c3QgbWF0Y2guXCI7XG5cbiAgICBzZXRGaWVsZERhdGEoKHByZXZGaWVsZERhdGEpID0+IHtcbiAgICAgIGNvbnN0IG5ld0ZpZWxkRGF0YSA9IHsgLi4ucHJldkZpZWxkRGF0YSB9O1xuICAgICAgbmV3RmllbGREYXRhLnBhc3N3b3JkQ29uZmlybS5lcnJvciA9IHBhc3N3b3JkRXJyb3I7XG4gICAgICByZXR1cm4gbmV3RmllbGREYXRhO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMgPSAoZmllbGRzOiBEeW5hbWljRmllbGRzRGF0YSk6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBhbGxHb29kID0gdHJ1ZTtcbiAgICBjb25zdCBiYWRGaWVsZHM6IER5bmFtaWNGaWVsZHNEYXRhID0geyAuLi5maWVsZHMgfTtcbiAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmICghZmllbGRzW2tdLnZhbHVlKSB7XG4gICAgICAgIGJhZEZpZWxkc1trXS5lcnJvciA9IGAke2NhbWVsQ2FzZVRvQ2FwaXRhbGl6ZShrKX0gaXMgcmVxdWlyZWQuYDtcbiAgICAgICAgYWxsR29vZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghYWxsR29vZCkge1xuICAgICAgc2V0RmllbGREYXRhKChwcmV2RmllbGRzKSA9PiAoe1xuICAgICAgICAuLi5wcmV2RmllbGRzLFxuICAgICAgICAuLi5iYWRGaWVsZHMsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxHb29kO1xuICB9O1xuXG4gIHVzZUVmZmVjdChjaGVja0VxdWFsUGFzc3dvcmRzLCBbXG4gICAgZmllbGREYXRhLnBhc3N3b3JkLFxuICAgIGZpZWxkRGF0YS5wYXNzd29yZENvbmZpcm0sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXZhbGlkYXRlUmVxdWlyZWRGaWVsZHMoZmllbGREYXRhKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVkVXNlclJlcyA9IGF3YWl0IGN1c3RvbUF4aW9zLnBvc3QoXCIvYXBpL3VzZXJzXCIsIGZpZWxkRGF0YSk7XG4gICAgaWYgKGNyZWF0ZWRVc2VyUmVzPy5kYXRhKSB7XG4gICAgICBjb25zdCBsb2dpblJlcyA9IGF3YWl0IGN1c3RvbUF4aW9zLnBvc3QoXCIvYXBpL2F1dGhcIiwge1xuICAgICAgICB1c2VybmFtZTogZmllbGREYXRhLnVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogZmllbGREYXRhLnBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB0b2tlbjogc3RyaW5nID0gbG9naW5SZXMuZGF0YS50b1N0cmluZygpO1xuICAgICAgY29uc3QgdXNlckRhdGE6IFVzZXJTY2hlbWEgPSBjcmVhdGVkVXNlclJlcy5kYXRhO1xuICAgICAgc2V0QXBwRGF0YSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIHVzZXJEYXRhLCB0b2tlbiB9KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luVG9rZW5cIiwgdG9rZW4pO1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFNlY3Rpb25IZWFkZXI+Q3JlYXRlIGFjY291bnQ8L1NlY3Rpb25IZWFkZXI+XG4gICAgICA8Rm9ybUNvbnRhaW5lciBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAge09iamVjdC5rZXlzKGZpZWxkRGF0YSkubWFwKChmaWVsZCkgPT4gKFxuICAgICAgICAgIDxJbnB1dFdpdGhFcnJvcnNcbiAgICAgICAgICAgIG5hbWU9e2ZpZWxkfVxuICAgICAgICAgICAgY2hhbmdlSGFuZGxlcj17c2V0RmllbGREYXRhfVxuICAgICAgICAgICAgZXJyb3I9e2ZpZWxkRGF0YVtmaWVsZF0uZXJyb3J9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGREYXRhW2ZpZWxkXS5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBVcDwvU3VibWl0QnV0dG9uPlxuICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb3JtQ29udGFpbmVyIiwiSW5wdXRXaXRoRXJyb3JzIiwiU3VibWl0QnV0dG9uIiwiU2VjdGlvbkNvbnRhaW5lciIsIlNlY3Rpb25IZWFkZXIiLCJBcHBDb250ZXh0IiwiY3VzdG9tQXhpb3MiLCJjYW1lbENhc2VUb0NhcGl0YWxpemUiLCJTaWdudXBQYWdlIiwicm91dGVyIiwic2V0QXBwRGF0YSIsInVzZXJuYW1lIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImVycm9yIiwiYmlvIiwiYXZhdGFyVVJMIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtIiwiZmllbGREYXRhIiwic2V0RmllbGREYXRhIiwiY2hlY2tFcXVhbFBhc3N3b3JkcyIsInBhc3N3b3JkRXJyb3IiLCJwcmV2RmllbGREYXRhIiwibmV3RmllbGREYXRhIiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsImZpZWxkcyIsImFsbEdvb2QiLCJiYWRGaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImsiLCJwcmV2RmllbGRzIiwiaGFuZGxlU3VibWl0IiwiZSIsImNyZWF0ZWRVc2VyUmVzIiwibG9naW5SZXMiLCJ0b2tlbiIsInVzZXJEYXRhIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZGF0YSIsInRvU3RyaW5nIiwicHJldlN0YXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJvblN1Ym1pdCIsIm1hcCIsImZpZWxkIiwibmFtZSIsImNoYW5nZUhhbmRsZXIiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signup.tsx\n");

/***/ })

});
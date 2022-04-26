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

/***/ "./components/GlobalErrors.tsx":
/*!*************************************!*\
  !*** ./components/GlobalErrors.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n  border: 3px solid \",\n        \"5a;\\n  background: \",\n        \";\\n  font-weight: 650;\\n  display: flex;\\n  gap: 1rem;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  gap: 1rem;\\n  list-style-type: none;\\n  padding: 1rem;\\n  max-width: 900px;\\n  margin: 0 auto;\\n  p {\\n    flex: 1;\\n  }\\n  .dismiss-btn {\\n    justify-self: flex-end;\\n    font-size: 1.4rem;\\n    cursor: pointer;\\n    :hover {\\n      opacity: 0.7;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ErrorItem = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].li.withConfig({\n    displayName: \"GlobalErrors__ErrorItem\",\n    componentId: \"sc-ab9f360f-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error);\n_c = ErrorItem;\nvar ErrorList = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul.withConfig({\n    displayName: \"GlobalErrors__ErrorList\",\n    componentId: \"sc-ab9f360f-1\"\n})(_templateObject1());\n_c1 = ErrorList;\nfunction GlobalErrors() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), appData = ref[0], setAppData = ref[1];\n    if (!appData.currentErrors) return null;\n    var handleDismiss = function(dismissText) {\n        setAppData(function(_param) {\n            var currentErrors = _param.currentErrors, prevAppData = _objectWithoutProperties(_param, [\n                \"currentErrors\"\n            ]);\n            return _objectSpread({}, prevAppData, {\n                currentErrors: currentErrors.filter(function(e) {\n                    return e !== dismissText;\n                })\n            });\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorList, {\n        children: appData.currentErrors.map(function(err) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorItem, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCircleExclamation,\n                        color: \"\".concat(_styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darker, \"7a\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\GlobalErrors.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: err\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\GlobalErrors.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        className: \"dismiss-btn\",\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCircleXmark,\n                        color: \"\".concat(_styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darker, \"7a\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\GlobalErrors.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, \"\".concat(err, \"-error\"), true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\GlobalErrors.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\GlobalErrors.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this));\n}\n_s(GlobalErrors, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c2 = GlobalErrors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalErrors);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ErrorItem\");\n$RefreshReg$(_c1, \"ErrorList\");\n$RefreshReg$(_c2, \"GlobalErrors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dsb2JhbEVycm9ycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHMEM7QUFDc0I7QUFDOUI7QUFDSTtBQUNJO0FBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXJCLENBRVI7UUFBcUIsQ0FDM0I7UUFBcUIsQ0FLbkM7Ozs7Ozs7OztRQUU0QixDQWtCNUI7Ozs7Ozs7O0FBNUJBLEdBQUssQ0FBQ08sU0FBUyxHQUFHSCx1RUFBUzs7O3NCQUVMRSxrRUFBa0IsRUFDeEJBLGtFQUFrQjtLQUg1QkMsU0FBUztBQVVmLEdBQUssQ0FBQ0ksU0FBUyxHQUFHUCx1RUFBUzs7OztNQUFyQk8sU0FBUztTQW9CTkUsWUFBWSxHQUFHLENBQUM7OztJQUN2QixHQUFLLENBQXlDVixHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ0UsdURBQVUsR0FBNURTLE9BQU8sR0FBZ0NYLEdBQXNCLEtBQXBEWSxVQUFVLEdBQW9CWixHQUFzQjtJQUNwRSxFQUFFLEdBQUdXLE9BQU8sQ0FBQ0UsYUFBYSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBRXZDLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQVEsQ0FBUEMsV0FBVyxFQUFLLENBQUM7UUFDdENILFVBQVUsQ0FBQyxRQUFRLFNBQStCLENBQUM7Z0JBQXJDQyxhQUFhLFVBQWJBLGFBQWEsRUFBS0csV0FBVztnQkFBN0JILENBQWE7O1lBQ3pCLE1BQU0sbUJBQ0RHLFdBQVc7Z0JBQ2RILGFBQWEsRUFBRUEsYUFBYSxDQUFDSSxNQUFNLENBQUMsUUFBUSxDQUFQQyxDQUFDO29CQUFLQSxNQUFNSCxDQUFORyxDQUFDLEtBQUtILFdBQVc7OztRQUVoRSxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hQLFNBQVM7a0JBQ1BHLE9BQU8sQ0FBQ0UsYUFBYSxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHOzBCQUM3QixNQUFNLCtEQUFMaEIsU0FBUzs7Z0dBQ1BMLDJFQUFlO3dCQUNkc0IsSUFBSSxFQUFFeEIsa0ZBQW1CO3dCQUN6QnlCLEtBQUssRUFBRyxHQUFzQixNQUFFLENBQXRCbkIsbUVBQW1CLEVBQUMsQ0FBRTs7Ozs7O2dHQUVqQ3FCLENBQUM7a0NBQUVKLEdBQUc7Ozs7OztnR0FDTnJCLDJFQUFlO3dCQUNkMEIsU0FBUyxFQUFDLENBQWE7d0JBQ3ZCSixJQUFJLEVBQUV2Qiw0RUFBYTt3QkFDbkJ3QixLQUFLLEVBQUcsR0FBc0IsTUFBRSxDQUF0Qm5CLG1FQUFtQixFQUFDLENBQUU7Ozs7Ozs7ZUFUbkIsR0FBTSxNQUFNLENBQVZpQixHQUFHLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7QUFlckMsQ0FBQztHQS9CUVYsWUFBWTtNQUFaQSxZQUFZO0FBaUNyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2xvYmFsRXJyb3JzLnRzeD9hMjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZhQ2lyY2xlRXhjbGFtYXRpb24sXG4gIGZhQ2lyY2xlWG1hcmssXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vbGliL0FwcENvbnRleHRcIjtcbmltcG9ydCB7IEFwcERhdGFDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuXG5jb25zdCBFcnJvckl0ZW0gPSBzdHlsZWQubGlgXG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogM3B4IHNvbGlkICR7Q29sb3JQYWxldHRlLmxpZ2h0fTVhO1xuICBiYWNrZ3JvdW5kOiAke0NvbG9yUGFsZXR0ZS5lcnJvcn07XG4gIGZvbnQtd2VpZ2h0OiA2NTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5kaXNtaXNzLWJ0biB7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIEdsb2JhbEVycm9ycygpIHtcbiAgY29uc3QgW2FwcERhdGEsIHNldEFwcERhdGFdOiBBcHBEYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGlmICghYXBwRGF0YS5jdXJyZW50RXJyb3JzKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBoYW5kbGVEaXNtaXNzID0gKGRpc21pc3NUZXh0KSA9PiB7XG4gICAgc2V0QXBwRGF0YSgoeyBjdXJyZW50RXJyb3JzLCAuLi5wcmV2QXBwRGF0YSB9KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2QXBwRGF0YSxcbiAgICAgICAgY3VycmVudEVycm9yczogY3VycmVudEVycm9ycy5maWx0ZXIoKGUpID0+IGUgIT09IGRpc21pc3NUZXh0KSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JMaXN0PlxuICAgICAge2FwcERhdGEuY3VycmVudEVycm9ycy5tYXAoKGVycikgPT4gKFxuICAgICAgICA8RXJyb3JJdGVtIGtleT17YCR7ZXJyfS1lcnJvcmB9PlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGljb249e2ZhQ2lyY2xlRXhjbGFtYXRpb259XG4gICAgICAgICAgICBjb2xvcj17YCR7Q29sb3JQYWxldHRlLmRhcmtlcn03YWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD57ZXJyfTwvcD5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkaXNtaXNzLWJ0blwiXG4gICAgICAgICAgICBpY29uPXtmYUNpcmNsZVhtYXJrfVxuICAgICAgICAgICAgY29sb3I9e2Ake0NvbG9yUGFsZXR0ZS5kYXJrZXJ9N2FgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRXJyb3JJdGVtPlxuICAgICAgKSl9XG4gICAgPC9FcnJvckxpc3Q+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEVycm9ycztcbiJdLCJuYW1lcyI6WyJmYUNpcmNsZUV4Y2xhbWF0aW9uIiwiZmFDaXJjbGVYbWFyayIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZUNvbnRleHQiLCJzdHlsZWQiLCJBcHBDb250ZXh0IiwiQ29sb3JQYWxldHRlIiwiRXJyb3JJdGVtIiwibGkiLCJsaWdodCIsImVycm9yIiwiRXJyb3JMaXN0IiwidWwiLCJHbG9iYWxFcnJvcnMiLCJhcHBEYXRhIiwic2V0QXBwRGF0YSIsImN1cnJlbnRFcnJvcnMiLCJoYW5kbGVEaXNtaXNzIiwiZGlzbWlzc1RleHQiLCJwcmV2QXBwRGF0YSIsImZpbHRlciIsImUiLCJtYXAiLCJlcnIiLCJpY29uIiwiY29sb3IiLCJkYXJrZXIiLCJwIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GlobalErrors.tsx\n");

/***/ })

});
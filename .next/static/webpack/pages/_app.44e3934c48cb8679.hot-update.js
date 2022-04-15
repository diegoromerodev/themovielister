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

/***/ "./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  padding: 1.1rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: relative;\\n  .grow {\\n    flex: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  border: 5px solid #f8983e;\\n  border-radius: 15px;\\n  gap: 1rem;\\n  div {\\n    border-radius: 10px;\\n    box-shadow: inset 0 0 20px #ffe884;\\n    padding: 1rem 0;\\n    border: 3px solid red;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: \",\n        \";\\n    align-items: center;\\n    transition: all 0.4s ease-in;\\n    &:hover {\\n      background-color: #dddddd;\\n      h3 {\\n        text-shadow: 0 2px 4px \",\n        \"5a,\\n          0 4px 8px \",\n        \"2a;\\n        color: \",\n        \";\\n      }\\n    }\\n  }\\n  h3 {\\n    border-top: 1px solid \",\n        \"aa;\\n    border-bottom: 1px solid \",\n        \"aa;\\n    transition: all 0.4s cubic-bezier(1, -0.2, 0, 0.4);\\n    color: gold;\\n    font-family: \\\"Inter\\\", sans-serif;\\n    font-size: 2rem;\\n    text-align: center;\\n    font-weight: 500;\\n    text-shadow: 0 0 10px #ffb85a7a, 4px 4px 8px #ffb85a3a;\\n    letter-spacing: 1px;\\n    padding: 0 2rem;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  justify-content: flex-end;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].nav.withConfig({\n    displayName: \"NavBar__NavContainer\",\n    componentId: \"sc-3050a27a-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dark);\n_c = NavContainer;\nvar NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"NavBar__NavLogo\",\n    componentId: \"sc-3050a27a-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dark, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dark, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray);\n_c1 = NavLogo;\nvar AbsoluteUserThumb = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_tabloids__WEBPACK_IMPORTED_MODULE_5__.UserThumb).withConfig({\n    displayName: \"NavBar__AbsoluteUserThumb\",\n    componentId: \"sc-3050a27a-2\"\n})(_templateObject2());\n_c2 = AbsoluteUserThumb;\nfunction NavBar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), userData = ref[0].userData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLogo, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"THEMOVIELISTER\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AbsoluteUserThumb, {\n                className: \"grow\",\n                children: userData.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"user-thumb-info\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Logged in as:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/users/\".concat(userData.id),\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_5__.HoverLink, {\n                                        children: userData.username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/users/\".concat(userData.id),\n                            passHref: true,\n                            children: userData.avatarURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_6__.CircularAvatar, {\n                                imageURL: \"userData.avatarURL\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this));\n}\n_s(NavBar, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c3 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NavContainer\");\n$RefreshReg$(_c1, \"NavLogo\");\n$RefreshReg$(_c2, \"AbsoluteUserThumb\");\n$RefreshReg$(_c3, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNNO0FBQ0k7QUFFSTtBQUVPO0FBQ0E7QUFDSDs7Ozs7Ozs7Ozs7OztRQUVkLENBQ1o7UUFBb0IsQ0FTeEM7Ozs7Ozs7OztRQUUyQixDQWNMO1FBQW9CLENBTVg7UUFBb0IsQ0FDL0I7UUFBb0IsQ0FDekI7UUFBc0IsQ0FLWDtRQUFvQixDQUNqQjtRQUFvQixDQVdqRDs7Ozs7Ozs7O1FBRTRDLENBRTVDOzs7Ozs7OztBQXZEQSxHQUFLLENBQUNRLFlBQVksR0FBR04sd0VBQVU7OztzQkFDVEUsaUVBQWlCO0tBRGpDSSxZQUFZO0FBWWxCLEdBQUssQ0FBQ0csT0FBTyxHQUFHVCx3RUFBVTs7O3VCQWNGRSxpRUFBaUIsRUFNUkEsaUVBQWlCLEVBQzVCQSxpRUFBaUIsRUFDdEJBLG1FQUFtQixFQUtSQSxpRUFBaUIsRUFDZEEsaUVBQWlCO01BNUIxQ08sT0FBTztBQXlDYixHQUFLLENBQUNJLGlCQUFpQixHQUFHYiw2REFBTSxDQUFDSSxnREFBUzs7OztNQUFwQ1MsaUJBQWlCO1NBSWRDLE1BQU0sR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQWtDZixHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ0UsdURBQVUsR0FBbkRjLFFBQVEsR0FBc0JoQixHQUFzQixJQUFwRGdCLFFBQVE7SUFDakIsTUFBTSw2RUFDSFQsWUFBWTs7d0ZBQ1ZJLENBQUc7Z0JBQUNNLFNBQVMsRUFBQyxDQUFNOzs7Ozs7d0ZBQ3BCbEIsa0RBQUk7Z0JBQUNtQixJQUFJLEVBQUMsQ0FBRztnQkFBQ0MsUUFBUTtzR0FDcEJULE9BQU87MEdBQ0xDLENBQUc7OEdBQ0RTLENBQUU7c0NBQUMsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl2Qk4saUJBQWlCO2dCQUFDRyxTQUFTLEVBQUMsQ0FBTTswQkFDaENELFFBQVEsQ0FBQ0ssUUFBUTs7b0dBRWJWLENBQUc7NEJBQUNNLFNBQVMsRUFBQyxDQUFpQjs7NEdBQzdCSyxDQUFDOzhDQUFDLENBQWE7Ozs7Ozs0R0FDZnZCLGtEQUFJO29DQUFDbUIsSUFBSSxFQUFHLENBQU8sU0FBYyxPQUFaRixRQUFRLENBQUNPLEVBQUU7b0NBQUlKLFFBQVE7MEhBQzFDZixnREFBUztrREFBRVksUUFBUSxDQUFDSyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztvR0FHaEN0QixrREFBSTs0QkFBQ21CLElBQUksRUFBRyxDQUFPLFNBQWMsT0FBWkYsUUFBUSxDQUFDTyxFQUFFOzRCQUFJSixRQUFRO3NDQUMxQ0gsUUFBUSxDQUFDUSxTQUFTLGdGQUNoQmxCLHdEQUFjO2dDQUFDbUIsUUFBUSxFQUFDLENBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0QsQ0FBQztHQS9CUVYsTUFBTTtNQUFOQSxNQUFNO0FBaUNmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIudHN4PzMwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2xpYi9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBBcHBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9saWIvdHlwZXNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcbmltcG9ydCB7IEhvdmVyTGluaywgVXNlclRodW1iIH0gZnJvbSBcIi4vdGFibG9pZHNcIjtcbmltcG9ydCB7IENpcmN1bGFyQXZhdGFyIH0gZnJvbSBcIi4vdXNlckRldGFpbHNcIjtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZGFya307XG4gIHBhZGRpbmc6IDEuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5ncm93IHtcbiAgICBmbGV4OiAxO1xuICB9XG5gO1xuXG5jb25zdCBOYXZMb2dvID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDVweCBzb2xpZCAjZjg5ODNlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBnYXA6IDFyZW07XG4gIGRpdiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAjZmZlODg0O1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgICBoMyB7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggJHtDb2xvclBhbGV0dGUuZGFya301YSxcbiAgICAgICAgICAwIDRweCA4cHggJHtDb2xvclBhbGV0dGUuZGFya30yYTtcbiAgICAgICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmRhcmtlcn07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGgzIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX1hYTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX1hYTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMSwgLTAuMiwgMCwgMC40KTtcbiAgICBjb2xvcjogZ29sZDtcbiAgICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmYjg1YTdhLCA0cHggNHB4IDhweCAjZmZiODVhM2E7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gIH1cbmA7XG5cbmNvbnN0IEFic29sdXRlVXNlclRodW1iID0gc3R5bGVkKFVzZXJUaHVtYilgXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IFt7IHVzZXJEYXRhIH1dOiBBcHBEYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3Jvd1wiIC8+XG4gICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICA8TmF2TG9nbz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPlRIRU1PVklFTElTVEVSPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9OYXZMb2dvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPEFic29sdXRlVXNlclRodW1iIGNsYXNzTmFtZT1cImdyb3dcIj5cbiAgICAgICAge3VzZXJEYXRhLnVzZXJuYW1lICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRodW1iLWluZm9cIj5cbiAgICAgICAgICAgICAgPHA+TG9nZ2VkIGluIGFzOjwvcD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXJEYXRhLmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgIDxIb3Zlckxpbms+e3VzZXJEYXRhLnVzZXJuYW1lfTwvSG92ZXJMaW5rPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VyRGF0YS5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAge3VzZXJEYXRhLmF2YXRhclVSTCAmJiAoXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyQXZhdGFyIGltYWdlVVJMPVwidXNlckRhdGEuYXZhdGFyVVJMXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQWJzb2x1dGVVc2VyVGh1bWI+XG4gICAgPC9OYXZDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlQ29udGV4dCIsInN0eWxlZCIsIkFwcENvbnRleHQiLCJDb2xvclBhbGV0dGUiLCJIb3ZlckxpbmsiLCJVc2VyVGh1bWIiLCJDaXJjdWxhckF2YXRhciIsIk5hdkNvbnRhaW5lciIsIm5hdiIsImRhcmsiLCJOYXZMb2dvIiwiZGl2IiwiZ3JheSIsImRhcmtlciIsIkFic29sdXRlVXNlclRodW1iIiwiTmF2QmFyIiwidXNlckRhdGEiLCJjbGFzc05hbWUiLCJocmVmIiwicGFzc0hyZWYiLCJoMyIsInVzZXJuYW1lIiwicCIsImlkIiwiYXZhdGFyVVJMIiwiaW1hZ2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n");

/***/ })

});
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

/***/ "./lib/logo.svg":
/*!**********************!*\
  !*** ./lib/logo.svg ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/logo.179dc41b.svg\",\"height\":259,\"width\":971});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbG9nby5zdmcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsdUVBQXVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9sb2dvLnN2Zz9iOTg0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9sb2dvLjE3OWRjNDFiLnN2Z1wiLFwiaGVpZ2h0XCI6MjU5LFwid2lkdGhcIjo5NzF9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/logo.svg\n");

/***/ }),

/***/ "./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n/* harmony import */ var _lib_logo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/logo.svg */ \"./lib/logo.svg\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  padding: 1.1rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: relative;\\n  .grow {\\n    flex: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  border: 5px solid #f8983e;\\n  border-radius: 15px;\\n  gap: 1rem;\\n  div {\\n    border-radius: 10px;\\n    box-shadow: inset 0 0 20px #ffe884;\\n    padding: 1rem 0;\\n    border: 3px solid red;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: \",\n        \";\\n    align-items: center;\\n    transition: all 0.4s ease-in;\\n    &:hover {\\n      background-color: #dddddd;\\n      h3 {\\n        text-shadow: 0 2px 4px \",\n        \"5a,\\n          0 4px 8px \",\n        \"2a;\\n        color: \",\n        \";\\n      }\\n    }\\n  }\\n  h3 {\\n    border-top: 1px solid \",\n        \"aa;\\n    border-bottom: 1px solid \",\n        \"aa;\\n    transition: all 0.4s cubic-bezier(1, -0.2, 0, 0.4);\\n    color: gold;\\n    font-family: \\\"Inter\\\", sans-serif;\\n    font-size: 2rem;\\n    text-align: center;\\n    font-weight: 500;\\n    text-shadow: 0 0 10px #ffb85a7a, 4px 4px 8px #ffb85a3a;\\n    letter-spacing: 1px;\\n    padding: 0 2rem;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  justify-content: flex-end;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem;\\n  gap: 1rem;\\n  :hover {\\n    background-color: \",\n        \";\\n  }\\n  .user-link {\\n    border-right: 1px solid \",\n        \";\\n    display: flex;\\n    padding: 0 1rem;\\n    gap: 1rem;\\n    cursor: pointer;\\n  }\\n  .logout {\\n    padding: 10px;\\n    border-radius: 50%;\\n    cursor: pointer;\\n    :hover {\\n      background-color: \",\n        \";\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].nav.withConfig({\n    displayName: \"NavBar__NavContainer\",\n    componentId: \"sc-4370c0ee-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dark);\n_c = NavContainer;\nvar NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"NavBar__NavLogo\",\n    componentId: \"sc-4370c0ee-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dark, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dark, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray);\nvar AbsoluteUserThumb = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_tabloids__WEBPACK_IMPORTED_MODULE_6__.UserThumb).withConfig({\n    displayName: \"NavBar__AbsoluteUserThumb\",\n    componentId: \"sc-4370c0ee-2\"\n})(_templateObject2());\n_c1 = AbsoluteUserThumb;\nvar UserLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n    displayName: \"NavBar__UserLinkContainer\",\n    componentId: \"sc-4370c0ee-3\"\n})(_templateObject3(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].lightGray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].lightGray);\n_c2 = UserLinkContainer;\nfunction NavBar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), userData = ref[0].userData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _lib_logo_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AbsoluteUserThumb, {\n                className: \"grow\",\n                children: (userData === null || userData === void 0 ? void 0 : userData.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserLinkContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/users/\".concat(userData.id),\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"user-link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"user-thumb-info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Logged in as:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_6__.HoverLink, {\n                                                children: userData.username\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.CircularAvatar, {\n                                        imageURL: userData.avatarURL\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/auth/logout\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                title: \"Log out\",\n                                className: \"logout\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faDoorOpen\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this));\n}\n_s(NavBar, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c3 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NavContainer\");\n$RefreshReg$(_c1, \"AbsoluteUserThumb\");\n$RefreshReg$(_c2, \"UserLinkContainer\");\n$RefreshReg$(_c3, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNFO0FBQ3BDO0FBQ007QUFDSTtBQUNJO0FBRU87QUFDQTtBQUNIO0FBQ1o7Ozs7Ozs7Ozs7Ozs7UUFFRixDQUNaO1FBQW9CLENBU3hDOzs7Ozs7Ozs7UUFFMkIsQ0FjTDtRQUFvQixDQU1YO1FBQW9CLENBQy9CO1FBQW9CLENBQ3pCO1FBQXNCLENBS1g7UUFBb0IsQ0FDakI7UUFBb0IsQ0FXakQ7Ozs7Ozs7OztRQUU0QyxDQUU1Qzs7Ozs7Ozs7O1FBRXFDLENBTWY7UUFBb0IsQ0FHZDtRQUF5QixDQVc3QjtRQUF5QixDQUdqRDs7Ozs7Ozs7QUFoRkEsR0FBSyxDQUFDVyxZQUFZLEdBQUdQLHdFQUFVOzs7c0JBQ1RFLGlFQUFpQjtLQURqQ0ssWUFBWTtBQVlsQixHQUFLLENBQUNHLE9BQU8sR0FBR1Ysd0VBQVU7Ozt1QkFjRkUsaUVBQWlCLEVBTVJBLGlFQUFpQixFQUM1QkEsaUVBQWlCLEVBQ3RCQSxtRUFBbUIsRUFLUkEsaUVBQWlCLEVBQ2RBLGlFQUFpQjtBQWFoRCxHQUFLLENBQUNZLGlCQUFpQixHQUFHZCw2REFBTSxDQUFDSSxnREFBUzs7OztNQUFwQ1UsaUJBQWlCO0FBSXZCLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUdmLHdFQUFVOzs7dUJBTVpFLGlFQUFpQixFQUdYQSxzRUFBc0IsRUFXMUJBLHNFQUFzQjtNQXBCMUNhLGlCQUFpQjtTQXlCZEUsTUFBTSxHQUFHLENBQUM7O0lBQ2pCLEdBQUssQ0FBa0NsQixHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ0UsdURBQVUsR0FBbkRpQixRQUFRLEdBQXNCbkIsR0FBc0IsSUFBcERtQixRQUFRO0lBQ2pCLE1BQU0sNkVBQ0hYLFlBQVk7O3dGQUNWSSxDQUFHO2dCQUFDUSxTQUFTLEVBQUMsQ0FBTTs7Ozs7O3dGQUNwQnJCLGtEQUFJO2dCQUFDc0IsSUFBSSxFQUFDLENBQUc7Z0JBQUNDLFFBQVE7c0dBQ3BCQyxDQUFHO29CQUFDQyxHQUFHLEVBQUVqQixxREFBSTs7Ozs7Ozs7Ozs7d0ZBRWZRLGlCQUFpQjtnQkFBQ0ssU0FBUyxFQUFDLENBQU07MkJBQ2hDRCxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsUUFBUSxDQUFFTSxRQUFRLGlGQUNoQlQsaUJBQWlCOztvR0FDZmpCLGtEQUFJOzRCQUFDc0IsSUFBSSxFQUFHLENBQU8sU0FBYyxPQUFaRixRQUFRLENBQUNPLEVBQUU7NEJBQUlKLFFBQVE7a0hBQzFDSyxDQUFJO2dDQUFDUCxTQUFTLEVBQUMsQ0FBVzs7Z0hBQ3hCUixDQUFHO3dDQUFDUSxTQUFTLEVBQUMsQ0FBaUI7O3dIQUM3QlEsQ0FBQzswREFBQyxDQUFhOzs7Ozs7d0hBQ2Z4QixnREFBUzswREFBRWUsUUFBUSxDQUFDTSxRQUFROzs7Ozs7Ozs7Ozs7Z0hBRTlCbkIsd0RBQWM7d0NBQUN1QixRQUFRLEVBQUVWLFFBQVEsQ0FBQ1csU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBRy9DL0Isa0RBQUk7NEJBQUNzQixJQUFJLEVBQUMsQ0FBYzs0QkFBQ0MsUUFBUTtrSEFDL0JLLENBQUk7Z0NBQUNJLEtBQUssRUFBQyxDQUFTO2dDQUFDWCxTQUFTLEVBQUMsQ0FBUTtzSEFDckN0QiwyRUFBZTtvQ0FBQ2tDLElBQUksRUFBRW5DLDBFQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakQsQ0FBQztHQTlCUXFCLE1BQU07TUFBTkEsTUFBTTtBQWdDZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLnRzeD8zMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhRG9vck9wZW4gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2xpYi9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBBcHBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9saWIvdHlwZXNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcbmltcG9ydCB7IEhvdmVyTGluaywgVXNlclRodW1iIH0gZnJvbSBcIi4vdGFibG9pZHNcIjtcbmltcG9ydCB7IENpcmN1bGFyQXZhdGFyIH0gZnJvbSBcIi4vdXNlckRldGFpbHNcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9saWIvbG9nby5zdmdcIjtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZGFya307XG4gIHBhZGRpbmc6IDEuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5ncm93IHtcbiAgICBmbGV4OiAxO1xuICB9XG5gO1xuXG5jb25zdCBOYXZMb2dvID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDVweCBzb2xpZCAjZjg5ODNlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBnYXA6IDFyZW07XG4gIGRpdiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAjZmZlODg0O1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgICBoMyB7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggJHtDb2xvclBhbGV0dGUuZGFya301YSxcbiAgICAgICAgICAwIDRweCA4cHggJHtDb2xvclBhbGV0dGUuZGFya30yYTtcbiAgICAgICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmRhcmtlcn07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGgzIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX1hYTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX1hYTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMSwgLTAuMiwgMCwgMC40KTtcbiAgICBjb2xvcjogZ29sZDtcbiAgICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmYjg1YTdhLCA0cHggNHB4IDhweCAjZmZiODVhM2E7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gIH1cbmA7XG5cbmNvbnN0IEFic29sdXRlVXNlclRodW1iID0gc3R5bGVkKFVzZXJUaHVtYilgXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5jb25zdCBVc2VyTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdhcDogMXJlbTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgfVxuICAudXNlci1saW5rIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5saWdodEdyYXl9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGdhcDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmxvZ291dCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodEdyYXl9O1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCBbeyB1c2VyRGF0YSB9XTogQXBwRGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIiAvPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgPGltZyBzcmM9e2xvZ299IC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8QWJzb2x1dGVVc2VyVGh1bWIgY2xhc3NOYW1lPVwiZ3Jvd1wiPlxuICAgICAgICB7dXNlckRhdGE/LnVzZXJuYW1lICYmIChcbiAgICAgICAgICA8VXNlckxpbmtDb250YWluZXI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7dXNlckRhdGEuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItbGlua1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci10aHVtYi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8cD5Mb2dnZWQgaW4gYXM6PC9wPlxuICAgICAgICAgICAgICAgICAgPEhvdmVyTGluaz57dXNlckRhdGEudXNlcm5hbWV9PC9Ib3Zlckxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENpcmN1bGFyQXZhdGFyIGltYWdlVVJMPXt1c2VyRGF0YS5hdmF0YXJVUkx9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dvdXRcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJMb2cgb3V0XCIgY2xhc3NOYW1lPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURvb3JPcGVufSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9Vc2VyTGlua0NvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvQWJzb2x1dGVVc2VyVGh1bWI+XG4gICAgPC9OYXZDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJmYURvb3JPcGVuIiwiRm9udEF3ZXNvbWVJY29uIiwiTGluayIsInVzZUNvbnRleHQiLCJzdHlsZWQiLCJBcHBDb250ZXh0IiwiQ29sb3JQYWxldHRlIiwiSG92ZXJMaW5rIiwiVXNlclRodW1iIiwiQ2lyY3VsYXJBdmF0YXIiLCJsb2dvIiwiTmF2Q29udGFpbmVyIiwibmF2IiwiZGFyayIsIk5hdkxvZ28iLCJkaXYiLCJncmF5IiwiZGFya2VyIiwiQWJzb2x1dGVVc2VyVGh1bWIiLCJVc2VyTGlua0NvbnRhaW5lciIsImxpZ2h0R3JheSIsIk5hdkJhciIsInVzZXJEYXRhIiwiY2xhc3NOYW1lIiwiaHJlZiIsInBhc3NIcmVmIiwiaW1nIiwic3JjIiwidXNlcm5hbWUiLCJpZCIsInNwYW4iLCJwIiwiaW1hZ2VVUkwiLCJhdmF0YXJVUkwiLCJ0aXRsZSIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n");

/***/ })

});
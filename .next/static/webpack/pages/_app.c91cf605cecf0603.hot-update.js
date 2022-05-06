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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n/* harmony import */ var _lib_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/logo.svg */ \"./lib/logo.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  padding: 1.1rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: relative;\\n  .grow {\\n    flex: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  cursor: pointer;\\n  width: 30vmin;\\n  position: relative;\\n  padding: 2rem;\\n  img {\\n    filter: drop-shadow(0 0 10px #fafafa);\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  justify-content: flex-end;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem;\\n  gap: 1rem;\\n  :hover {\\n    background-color: \",\n        \";\\n  }\\n  .user-link {\\n    border-right: 1px solid \",\n        \";\\n    display: flex;\\n    padding: 0 1rem;\\n    gap: 1rem;\\n    cursor: pointer;\\n  }\\n  .logout {\\n    padding: 10px;\\n    border-radius: 50%;\\n    cursor: pointer;\\n    :hover {\\n      background-color: \",\n        \";\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].nav.withConfig({\n    displayName: \"NavBar__NavContainer\",\n    componentId: \"sc-edf0bacd-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dark);\n_c = NavContainer;\nvar NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"NavBar__NavLogo\",\n    componentId: \"sc-edf0bacd-1\"\n})(_templateObject1());\n_c1 = NavLogo;\nvar AbsoluteUserThumb = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_tabloids__WEBPACK_IMPORTED_MODULE_7__.UserThumb).withConfig({\n    displayName: \"NavBar__AbsoluteUserThumb\",\n    componentId: \"sc-edf0bacd-2\"\n})(_templateObject2());\n_c2 = AbsoluteUserThumb;\nvar UserLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"NavBar__UserLinkContainer\",\n    componentId: \"sc-edf0bacd-3\"\n})(_templateObject3(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lightGray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lightGray);\n_c3 = UserLinkContainer;\nfunction NavBar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), userData = ref[0].userData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLogo, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: _lib_logo_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                        layout: \"responsive\",\n                        priority: false\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AbsoluteUserThumb, {\n                className: \"grow\",\n                children: (userData === null || userData === void 0 ? void 0 : userData.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserLinkContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/users/\".concat(userData.id),\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"user-link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"user-thumb-info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Logged in as:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_7__.HoverLink, {\n                                                children: userData.username\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_8__.CircularAvatar, {\n                                        imageURL: userData.avatarURL\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/auth/logout\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                title: \"Log out\",\n                                className: \"logout\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faDoorOpen\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this));\n}\n_s(NavBar, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c4 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"NavContainer\");\n$RefreshReg$(_c1, \"NavLogo\");\n$RefreshReg$(_c2, \"AbsoluteUserThumb\");\n$RefreshReg$(_c3, \"UserLinkContainer\");\n$RefreshReg$(_c4, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ0U7QUFDcEM7QUFDTTtBQUNJO0FBQ1I7QUFDWTtBQUVPO0FBQ0E7QUFDSDtBQUNaOzs7Ozs7Ozs7Ozs7O1FBRUYsQ0FDWjtRQUFvQixDQVN4Qzs7Ozs7Ozs7O1FBRTJCLENBUTNCOzs7Ozs7Ozs7UUFFNEMsQ0FFNUM7Ozs7Ozs7OztRQUVxQyxDQU1mO1FBQW9CLENBR2Q7UUFBeUIsQ0FXN0I7UUFBeUIsQ0FHakQ7Ozs7Ozs7O0FBakRBLEdBQUssQ0FBQ1ksWUFBWSxHQUFHUix5RUFBVTs7O3NCQUNURyxpRUFBaUI7S0FEakNLLFlBQVk7QUFZbEIsR0FBSyxDQUFDRyxPQUFPLEdBQUdYLHlFQUFVOzs7O01BQXBCVyxPQUFPO0FBVWIsR0FBSyxDQUFDRSxpQkFBaUIsR0FBR2IsOERBQU0sQ0FBQ0ssZ0RBQVM7Ozs7TUFBcENRLGlCQUFpQjtBQUl2QixHQUFLLENBQUNDLGlCQUFpQixHQUFHZCx5RUFBVTs7O3VCQU1aRyxpRUFBaUIsRUFHWEEsc0VBQXNCLEVBVzFCQSxzRUFBc0I7TUFwQjFDVyxpQkFBaUI7U0F5QmRHLE1BQU0sR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQWtDbEIsR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNHLHVEQUFVLEdBQW5EZ0IsUUFBUSxHQUFzQm5CLEdBQXNCLElBQXBEbUIsUUFBUTtJQUNqQixNQUFNLDZFQUNIVixZQUFZOzt3RkFDVkksQ0FBRztnQkFBQ08sU0FBUyxFQUFDLENBQU07Ozs7Ozt3RkFDcEJyQixrREFBSTtnQkFBQ3NCLElBQUksRUFBQyxDQUFHO2dCQUFDQyxRQUFRO3NHQUNwQlYsT0FBTzswR0FDTFYsbURBQUs7d0JBQUNxQixHQUFHLEVBQUVmLHFEQUFJO3dCQUFFZ0IsTUFBTSxFQUFDLENBQVk7d0JBQUNDLFFBQVEsRUFBRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUd4RFgsaUJBQWlCO2dCQUFDTSxTQUFTLEVBQUMsQ0FBTTsyQkFDaENELFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWtCLEdBQWxCQSxJQUFJLENBQUpBLENBQWtCLEdBQWxCQSxRQUFRLENBQUVPLFFBQVEsaUZBQ2hCWCxpQkFBaUI7O29HQUNmaEIsa0RBQUk7NEJBQUNzQixJQUFJLEVBQUcsQ0FBTyxTQUFjLE9BQVpGLFFBQVEsQ0FBQ1EsRUFBRTs0QkFBSUwsUUFBUTtrSEFDMUNNLENBQUk7Z0NBQUNSLFNBQVMsRUFBQyxDQUFXOztnSEFDeEJQLENBQUc7d0NBQUNPLFNBQVMsRUFBQyxDQUFpQjs7d0hBQzdCUyxDQUFDOzBEQUFDLENBQWE7Ozs7Ozt3SEFDZnhCLGdEQUFTOzBEQUFFYyxRQUFRLENBQUNPLFFBQVE7Ozs7Ozs7Ozs7OztnSEFFOUJuQix3REFBYzt3Q0FBQ3VCLFFBQVEsRUFBRVgsUUFBUSxDQUFDWSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztvR0FHL0NoQyxrREFBSTs0QkFBQ3NCLElBQUksRUFBQyxDQUFjOzRCQUFDQyxRQUFRO2tIQUMvQk0sQ0FBSTtnQ0FBQ0ksS0FBSyxFQUFDLENBQVM7Z0NBQUNaLFNBQVMsRUFBQyxDQUFRO3NIQUNyQ3RCLDJFQUFlO29DQUFDbUMsSUFBSSxFQUFFcEMsMEVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRCxDQUFDO0dBaENRcUIsTUFBTTtNQUFOQSxNQUFNO0FBa0NmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIudHN4PzMwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmFEb29yT3BlbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9saWIvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgQXBwRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vbGliL3R5cGVzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5pbXBvcnQgeyBIb3ZlckxpbmssIFVzZXJUaHVtYiB9IGZyb20gXCIuL3RhYmxvaWRzXCI7XG5pbXBvcnQgeyBDaXJjdWxhckF2YXRhciB9IGZyb20gXCIuL3VzZXJEZXRhaWxzXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vbGliL2xvZ28uc3ZnXCI7XG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmRhcmt9O1xuICBwYWRkaW5nOiAxLjFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuZ3JvdyB7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcblxuY29uc3QgTmF2TG9nbyA9IHN0eWxlZC5kaXZgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwdm1pbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAycmVtO1xuICBpbWcge1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDEwcHggI2ZhZmFmYSk7XG4gIH1cbmA7XG5cbmNvbnN0IEFic29sdXRlVXNlclRodW1iID0gc3R5bGVkKFVzZXJUaHVtYilgXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5jb25zdCBVc2VyTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdhcDogMXJlbTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgfVxuICAudXNlci1saW5rIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5saWdodEdyYXl9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGdhcDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmxvZ291dCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodEdyYXl9O1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCBbeyB1c2VyRGF0YSB9XTogQXBwRGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIiAvPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgPE5hdkxvZ28+XG4gICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHByaW9yaXR5PXtmYWxzZX0gLz5cbiAgICAgICAgPC9OYXZMb2dvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPEFic29sdXRlVXNlclRodW1iIGNsYXNzTmFtZT1cImdyb3dcIj5cbiAgICAgICAge3VzZXJEYXRhPy51c2VybmFtZSAmJiAoXG4gICAgICAgICAgPFVzZXJMaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXJEYXRhLmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItdGh1bWItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPHA+TG9nZ2VkIGluIGFzOjwvcD5cbiAgICAgICAgICAgICAgICAgIDxIb3Zlckxpbms+e3VzZXJEYXRhLnVzZXJuYW1lfTwvSG92ZXJMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDaXJjdWxhckF2YXRhciBpbWFnZVVSTD17dXNlckRhdGEuYXZhdGFyVVJMfSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvbG9nb3V0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiTG9nIG91dFwiIGNsYXNzTmFtZT1cImxvZ291dFwiPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb29yT3Blbn0gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvVXNlckxpbmtDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L0Fic29sdXRlVXNlclRodW1iPlxuICAgIDwvTmF2Q29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsiZmFEb29yT3BlbiIsIkZvbnRBd2Vzb21lSWNvbiIsIkxpbmsiLCJ1c2VDb250ZXh0Iiwic3R5bGVkIiwiSW1hZ2UiLCJBcHBDb250ZXh0IiwiQ29sb3JQYWxldHRlIiwiSG92ZXJMaW5rIiwiVXNlclRodW1iIiwiQ2lyY3VsYXJBdmF0YXIiLCJsb2dvIiwiTmF2Q29udGFpbmVyIiwibmF2IiwiZGFyayIsIk5hdkxvZ28iLCJkaXYiLCJBYnNvbHV0ZVVzZXJUaHVtYiIsIlVzZXJMaW5rQ29udGFpbmVyIiwiZ3JheSIsImxpZ2h0R3JheSIsIk5hdkJhciIsInVzZXJEYXRhIiwiY2xhc3NOYW1lIiwiaHJlZiIsInBhc3NIcmVmIiwic3JjIiwibGF5b3V0IiwicHJpb3JpdHkiLCJ1c2VybmFtZSIsImlkIiwic3BhbiIsInAiLCJpbWFnZVVSTCIsImF2YXRhclVSTCIsInRpdGxlIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n");

/***/ })

});
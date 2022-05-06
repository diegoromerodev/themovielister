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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n/* harmony import */ var _lib_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/logo.svg */ \"./lib/logo.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  padding: 1.1rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: relative;\\n  .grow {\\n    flex: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  cursor: pointer;\\n  width: 4rem;\\n  height: 4rem;\\n  position: relative;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  justify-content: flex-end;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem;\\n  gap: 1rem;\\n  :hover {\\n    background-color: \",\n        \";\\n  }\\n  .user-link {\\n    border-right: 1px solid \",\n        \";\\n    display: flex;\\n    padding: 0 1rem;\\n    gap: 1rem;\\n    cursor: pointer;\\n  }\\n  .logout {\\n    padding: 10px;\\n    border-radius: 50%;\\n    cursor: pointer;\\n    :hover {\\n      background-color: \",\n        \";\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].nav.withConfig({\n    displayName: \"NavBar__NavContainer\",\n    componentId: \"sc-d2710e8f-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dark);\n_c = NavContainer;\nvar NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"NavBar__NavLogo\",\n    componentId: \"sc-d2710e8f-1\"\n})(_templateObject1());\n_c1 = NavLogo;\nvar AbsoluteUserThumb = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_tabloids__WEBPACK_IMPORTED_MODULE_7__.UserThumb).withConfig({\n    displayName: \"NavBar__AbsoluteUserThumb\",\n    componentId: \"sc-d2710e8f-2\"\n})(_templateObject2());\n_c2 = AbsoluteUserThumb;\nvar UserLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"NavBar__UserLinkContainer\",\n    componentId: \"sc-d2710e8f-3\"\n})(_templateObject3(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lightGray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lightGray);\n_c3 = UserLinkContainer;\nfunction NavBar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), userData = ref[0].userData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLogo, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: _lib_logo_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                        layout: \"fill\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AbsoluteUserThumb, {\n                className: \"grow\",\n                children: (userData === null || userData === void 0 ? void 0 : userData.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserLinkContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/users/\".concat(userData.id),\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"user-link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"user-thumb-info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Logged in as:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_7__.HoverLink, {\n                                                children: userData.username\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_8__.CircularAvatar, {\n                                        imageURL: userData.avatarURL\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/auth/logout\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                title: \"Log out\",\n                                className: \"logout\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faDoorOpen\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this));\n}\n_s(NavBar, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c4 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"NavContainer\");\n$RefreshReg$(_c1, \"NavLogo\");\n$RefreshReg$(_c2, \"AbsoluteUserThumb\");\n$RefreshReg$(_c3, \"UserLinkContainer\");\n$RefreshReg$(_c4, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ0U7QUFDcEM7QUFDTTtBQUNJO0FBQ1I7QUFDWTtBQUVPO0FBQ0E7QUFDSDtBQUNaOzs7Ozs7Ozs7Ozs7O1FBRUYsQ0FDWjtRQUFvQixDQVN4Qzs7Ozs7Ozs7O1FBRTJCLENBSzNCOzs7Ozs7Ozs7UUFFNEMsQ0FFNUM7Ozs7Ozs7OztRQUVxQyxDQU1mO1FBQW9CLENBR2Q7UUFBeUIsQ0FXN0I7UUFBeUIsQ0FHakQ7Ozs7Ozs7O0FBOUNBLEdBQUssQ0FBQ1ksWUFBWSxHQUFHUix5RUFBVTs7O3NCQUNURyxpRUFBaUI7S0FEakNLLFlBQVk7QUFZbEIsR0FBSyxDQUFDRyxPQUFPLEdBQUdYLHlFQUFVOzs7O01BQXBCVyxPQUFPO0FBT2IsR0FBSyxDQUFDRSxpQkFBaUIsR0FBR2IsOERBQU0sQ0FBQ0ssZ0RBQVM7Ozs7TUFBcENRLGlCQUFpQjtBQUl2QixHQUFLLENBQUNDLGlCQUFpQixHQUFHZCx5RUFBVTs7O3VCQU1aRyxpRUFBaUIsRUFHWEEsc0VBQXNCLEVBVzFCQSxzRUFBc0I7TUFwQjFDVyxpQkFBaUI7U0F5QmRHLE1BQU0sR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQWtDbEIsR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNHLHVEQUFVLEdBQW5EZ0IsUUFBUSxHQUFzQm5CLEdBQXNCLElBQXBEbUIsUUFBUTtJQUNqQixNQUFNLDZFQUNIVixZQUFZOzt3RkFDVkksQ0FBRztnQkFBQ08sU0FBUyxFQUFDLENBQU07Ozs7Ozt3RkFDcEJyQixrREFBSTtnQkFBQ3NCLElBQUksRUFBQyxDQUFHO2dCQUFDQyxRQUFRO3NHQUNwQlYsT0FBTzswR0FDTFYsbURBQUs7d0JBQUNxQixHQUFHLEVBQUVmLHFEQUFJO3dCQUFFZ0IsTUFBTSxFQUFDLENBQU07d0JBQUNDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBRzNDWCxpQkFBaUI7Z0JBQUNNLFNBQVMsRUFBQyxDQUFNOzJCQUNoQ0QsUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBa0IsR0FBbEJBLElBQUksQ0FBSkEsQ0FBa0IsR0FBbEJBLFFBQVEsQ0FBRU8sUUFBUSxpRkFDaEJYLGlCQUFpQjs7b0dBQ2ZoQixrREFBSTs0QkFBQ3NCLElBQUksRUFBRyxDQUFPLFNBQWMsT0FBWkYsUUFBUSxDQUFDUSxFQUFFOzRCQUFJTCxRQUFRO2tIQUMxQ00sQ0FBSTtnQ0FBQ1IsU0FBUyxFQUFDLENBQVc7O2dIQUN4QlAsQ0FBRzt3Q0FBQ08sU0FBUyxFQUFDLENBQWlCOzt3SEFDN0JTLENBQUM7MERBQUMsQ0FBYTs7Ozs7O3dIQUNmeEIsZ0RBQVM7MERBQUVjLFFBQVEsQ0FBQ08sUUFBUTs7Ozs7Ozs7Ozs7O2dIQUU5Qm5CLHdEQUFjO3dDQUFDdUIsUUFBUSxFQUFFWCxRQUFRLENBQUNZLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQUcvQ2hDLGtEQUFJOzRCQUFDc0IsSUFBSSxFQUFDLENBQWM7NEJBQUNDLFFBQVE7a0hBQy9CTSxDQUFJO2dDQUFDSSxLQUFLLEVBQUMsQ0FBUztnQ0FBQ1osU0FBUyxFQUFDLENBQVE7c0hBQ3JDdEIsMkVBQWU7b0NBQUNtQyxJQUFJLEVBQUVwQywwRUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpELENBQUM7R0FoQ1FxQixNQUFNO01BQU5BLE1BQU07QUFrQ2YsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci50c3g/MzAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYURvb3JPcGVuIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2xpYi9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBBcHBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9saWIvdHlwZXNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcbmltcG9ydCB7IEhvdmVyTGluaywgVXNlclRodW1iIH0gZnJvbSBcIi4vdGFibG9pZHNcIjtcbmltcG9ydCB7IENpcmN1bGFyQXZhdGFyIH0gZnJvbSBcIi4vdXNlckRldGFpbHNcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9saWIvbG9nby5zdmdcIjtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZGFya307XG4gIHBhZGRpbmc6IDEuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5ncm93IHtcbiAgICBmbGV4OiAxO1xuICB9XG5gO1xuXG5jb25zdCBOYXZMb2dvID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBBYnNvbHV0ZVVzZXJUaHVtYiA9IHN0eWxlZChVc2VyVGh1bWIpYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuYDtcblxuY29uc3QgVXNlckxpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBnYXA6IDFyZW07XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIH1cbiAgLnVzZXItbGluayB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUubGlnaHRHcmF5fTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5sb2dvdXQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHRHcmF5fTtcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgY29uc3QgW3sgdXNlckRhdGEgfV06IEFwcERhdGFDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8TmF2Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93XCIgLz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgIDxOYXZMb2dvPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGxheW91dD1cImZpbGxcIiBwcmlvcml0eSAvPlxuICAgICAgICA8L05hdkxvZ28+XG4gICAgICA8L0xpbms+XG4gICAgICA8QWJzb2x1dGVVc2VyVGh1bWIgY2xhc3NOYW1lPVwiZ3Jvd1wiPlxuICAgICAgICB7dXNlckRhdGE/LnVzZXJuYW1lICYmIChcbiAgICAgICAgICA8VXNlckxpbmtDb250YWluZXI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7dXNlckRhdGEuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItbGlua1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci10aHVtYi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8cD5Mb2dnZWQgaW4gYXM6PC9wPlxuICAgICAgICAgICAgICAgICAgPEhvdmVyTGluaz57dXNlckRhdGEudXNlcm5hbWV9PC9Ib3Zlckxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENpcmN1bGFyQXZhdGFyIGltYWdlVVJMPXt1c2VyRGF0YS5hdmF0YXJVUkx9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dvdXRcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJMb2cgb3V0XCIgY2xhc3NOYW1lPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURvb3JPcGVufSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9Vc2VyTGlua0NvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvQWJzb2x1dGVVc2VyVGh1bWI+XG4gICAgPC9OYXZDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdLCJuYW1lcyI6WyJmYURvb3JPcGVuIiwiRm9udEF3ZXNvbWVJY29uIiwiTGluayIsInVzZUNvbnRleHQiLCJzdHlsZWQiLCJJbWFnZSIsIkFwcENvbnRleHQiLCJDb2xvclBhbGV0dGUiLCJIb3ZlckxpbmsiLCJVc2VyVGh1bWIiLCJDaXJjdWxhckF2YXRhciIsImxvZ28iLCJOYXZDb250YWluZXIiLCJuYXYiLCJkYXJrIiwiTmF2TG9nbyIsImRpdiIsIkFic29sdXRlVXNlclRodW1iIiwiVXNlckxpbmtDb250YWluZXIiLCJncmF5IiwibGlnaHRHcmF5IiwiTmF2QmFyIiwidXNlckRhdGEiLCJjbGFzc05hbWUiLCJocmVmIiwicGFzc0hyZWYiLCJzcmMiLCJsYXlvdXQiLCJwcmlvcml0eSIsInVzZXJuYW1lIiwiaWQiLCJzcGFuIiwicCIsImltYWdlVVJMIiwiYXZhdGFyVVJMIiwidGl0bGUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n");

/***/ })

});
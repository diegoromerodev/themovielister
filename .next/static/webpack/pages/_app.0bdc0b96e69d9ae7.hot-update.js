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

/***/ "./components/tabloids.tsx":
/*!*********************************!*\
  !*** ./components/tabloids.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SectionContainer\": function() { return /* binding */ SectionContainer; },\n/* harmony export */   \"SectionHeader\": function() { return /* binding */ SectionHeader; },\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; },\n/* harmony export */   \"PostInfo\": function() { return /* binding */ PostInfo; },\n/* harmony export */   \"MovieThumb\": function() { return /* binding */ MovieThumb; },\n/* harmony export */   \"UserThumb\": function() { return /* binding */ UserThumb; },\n/* harmony export */   \"HoverLink\": function() { return /* binding */ HoverLink; },\n/* harmony export */   \"HoverableContainer\": function() { return /* binding */ HoverableContainer; },\n/* harmony export */   \"BoldTextShadow\": function() { return /* binding */ BoldTextShadow; },\n/* harmony export */   \"PostPreviewDetails\": function() { return /* binding */ PostPreviewDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var ellipsize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ellipsize */ \"./node_modules/ellipsize/src/index.js\");\n/* harmony import */ var ellipsize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ellipsize__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n/* eslint-disable jsx-a11y/anchor-is-valid */ \n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid \",\n        \";\\n  max-width: 1200px;\\n  margin: 1rem auto;\\n  position: relative;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n  padding: 0.5rem;\\n  text-align: center;\\n  text-transform: uppercase;\\n  flex: 1;\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  grid-column: 1 / span 3;\\n  background: linear-gradient(0deg, #111, #000);\\n  padding: 0.5rem;\\n  display: flex;\\n  gap: 1rem;\\n  border-top: 1px solid \",\n        \";\\n  img {\\n    transition: all 0.4s ease;\\n    filter: saturate(0%);\\n  }\\n  &:hover {\\n    background: linear-gradient(0deg, #333, #322);\\n    img {\\n      filter: saturate(100%);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  flex: 1;\\n  p {\\n    font-weight: 700;\\n  }\\n  small {\\n    font-weight: 200;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 25%;\\n  overflow: hidden;\\n  border: 1px solid \",\n        \";\\n  cursor: pointer;\\n  div {\\n    position: relative;\\n    height: 100%;\\n    display: grid;\\n    place-items: center;\\n    h4 {\\n      color: \",\n        \";\\n      position: absolute;\\n    }\\n    img {\\n      position: absolute;\\n    }\\n  }\\n  @media (max-width: 1200px) {\\n    width: 10vh;\\n    height: 12vh;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  gap: 1rem;\\n  .user-thumb-info {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n    justify-content: center;\\n    font-size: 0.9rem;\\n    font-weight: 300;\\n    p {\\n      font-size: 0.7rem;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: 600;\\n  &:hover {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  &:hover > * {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-shadow: 1px 1px 5px \",\n        \",\\n    2px 2px 10px \",\n        \";\\n  text-align: \",\n        \";\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nvar SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].section.withConfig({\n    displayName: \"tabloids__SectionContainer\",\n    componentId: \"sc-3e8397f0-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray);\nvar SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h2.withConfig({\n    displayName: \"tabloids__SectionHeader\",\n    componentId: \"sc-3e8397f0-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dark, function(param) {\n    var color = param.color;\n    return color || _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].light;\n});\nvar PostItem = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostItem\",\n    componentId: \"sc-3e8397f0-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dark);\n_c = PostItem;\nvar PostInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostInfo\",\n    componentId: \"sc-3e8397f0-3\"\n})(_templateObject3());\n_c1 = PostInfo;\nvar MovieThumb = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n    displayName: \"tabloids__MovieThumb\",\n    componentId: \"sc-3e8397f0-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].light);\n_c2 = MovieThumb;\nvar UserThumb = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"tabloids__UserThumb\",\n    componentId: \"sc-3e8397f0-5\"\n})(_templateObject5());\n_c3 = UserThumb;\nvar HoverLink = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverLink\",\n    componentId: \"sc-3e8397f0-6\"\n})(_templateObject6(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].warning);\n_c4 = HoverLink;\nvar HoverableContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverableContainer\",\n    componentId: \"sc-3e8397f0-7\"\n})(_templateObject7(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].warning);\nvar BoldTextShadow = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h4.withConfig({\n    displayName: \"tabloids__BoldTextShadow\",\n    componentId: \"sc-3e8397f0-8\"\n})(_templateObject8(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darker, function(param) {\n    var align = param.align;\n    return align;\n});\n_c5 = BoldTextShadow;\nfunction PostPreviewDetails(param) {\n    var post = param.post;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItem, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/movies/\".concat(post.Movie.imdbId),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieThumb, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                src: post.Movie.imageURL,\n                                alt: \"\".concat(post.Movie.title, \" poster\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoldTextShadow, {\n                                align: \"center\",\n                                children: [\n                                    ellipsize__WEBPACK_IMPORTED_MODULE_3___default()(post.Movie.title, 30),\n                                    \" (\",\n                                    post.Movie.year,\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostInfo, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/posts/\".concat(post.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverLink, {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 11\n                        }, this)\n                    }, \"post-index-\".concat(post.id), false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: [\n                            \"Created on \",\n                            new Date(post.createdAt).toUTCString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserThumb, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"user-thumb-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Created by:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/users/\".concat(post.User.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverLink, {\n                                    children: post.User.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                    lineNumber: 157,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 156,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(post.User.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_5__.CircularAvatar, {\n                                imageURL: post.User.avatarURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 161,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, this));\n}\n_c6 = PostPreviewDetails;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"PostItem\");\n$RefreshReg$(_c1, \"PostInfo\");\n$RefreshReg$(_c2, \"MovieThumb\");\n$RefreshReg$(_c3, \"UserThumb\");\n$RefreshReg$(_c4, \"HoverLink\");\n$RefreshReg$(_c5, \"BoldTextShadow\");\n$RefreshReg$(_c6, \"PostPreviewDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNVLEtBQUs7Ozs7Ozt1QkFEWixDQUFXLGFBQVUsT0FBUlYsSUFBSSxDQUFDWSxFQUFFOzs7OztnR0FHL0JDLENBQUs7OzRCQUFDLENBQVc7NEJBQUMsR0FBRyxDQUFDQyxJQUFJLENBQUNkLElBQUksQ0FBQ2UsU0FBUyxFQUFFQyxXQUFXOzs7Ozs7Ozs7Ozs7O3dGQUV4RHpCLFNBQVM7O2dHQUNQSixDQUFHO3dCQUFDOEIsU0FBUyxFQUFDLENBQWlCOzt3R0FDN0JDLENBQUM7MENBQUMsQ0FBVzs7Ozs7O3dHQUNiN0Msa0RBQUk7Z0NBQUM0QixJQUFJLEVBQUcsQ0FBTyxTQUFlLE9BQWJELElBQUksQ0FBQ21CLElBQUksQ0FBQ1AsRUFBRTtnQ0FBSVIsUUFBUTtzSEFDM0NaLFNBQVM7OENBQUVRLElBQUksQ0FBQ21CLElBQUksQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR2pDL0Msa0RBQUk7d0JBQUM0QixJQUFJLEVBQUcsQ0FBTyxTQUFlLE9BQWJELElBQUksQ0FBQ21CLElBQUksQ0FBQ1AsRUFBRTt3QkFBSVIsUUFBUTs4R0FDM0NkLENBQUM7a0hBQ0NiLHdEQUFjO2dDQUFDK0IsUUFBUSxFQUFFUixJQUFJLENBQUNtQixJQUFJLENBQUNFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekQsQ0FBQztNQXZDZXRCLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhYmxvaWRzLnRzeD8zMzBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGVsbGlwc2l6ZSBmcm9tIFwiZWxsaXBzaXplXCI7XG5pbXBvcnQgeyBQb3N0U2NoZW1hIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuaW1wb3J0IHsgQ2lyY3VsYXJBdmF0YXIgfSBmcm9tIFwiLi91c2VyRGV0YWlsc1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG50eXBlIFNlY3Rpb25IZWFkZXJQcm9wcyA9IHtcbiAgY29sb3I/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkhlYWRlciA9IHN0eWxlZC5oMjxTZWN0aW9uSGVhZGVyUHJvcHM+YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5kYXJrfTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmbGV4OiAxO1xuICBjb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvciB8fCBDb2xvclBhbGV0dGUubGlnaHR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFBvc3RJdGVtID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTExLCAjMDAwKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5kYXJrfTtcbiAgaW1nIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAgIGZpbHRlcjogc2F0dXJhdGUoMCUpO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMzMzLCAjMzIyKTtcbiAgICBpbWcge1xuICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgxMDAlKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0SW5mbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBmbGV4OiAxO1xuICBwIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIHNtYWxsIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTW92aWVUaHVtYiA9IHN0eWxlZC5hYFxuICB3aWR0aDogMjUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGg0IHtcbiAgICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICB3aWR0aDogMTB2aDtcbiAgICBoZWlnaHQ6IDEydmg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBVc2VyVGh1bWIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIC51c2VyLXRodW1iLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhvdmVyTGluayA9IHN0eWxlZC5hYFxuICBmb250LXdlaWdodDogNjAwO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUud2FybmluZ307XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIb3ZlcmFibGVDb250YWluZXIgPSBzdHlsZWQuYWBcbiAgJjpob3ZlciA+ICoge1xuICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS53YXJuaW5nfTtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIEJvbGRUZXh0U2hhZG93UHJvcHMge1xuICBhbGlnbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEJvbGRUZXh0U2hhZG93ID0gc3R5bGVkLmg0PEJvbGRUZXh0U2hhZG93UHJvcHM+YFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggJHtDb2xvclBhbGV0dGUuZGFya2VyfSxcbiAgICAycHggMnB4IDEwcHggJHtDb2xvclBhbGV0dGUuZGFya2VyfTtcbiAgdGV4dC1hbGlnbjogJHsoeyBhbGlnbiB9KSA9PiBhbGlnbn07XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gUG9zdFByZXZpZXdEZXRhaWxzKHsgcG9zdCB9OiB7IHBvc3Q6IFBvc3RTY2hlbWEgfSkge1xuICByZXR1cm4gKFxuICAgIDxQb3N0SXRlbT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWVzLyR7cG9zdC5Nb3ZpZS5pbWRiSWR9YH0gcGFzc0hyZWY+XG4gICAgICAgIDxNb3ZpZVRodW1iPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0Lk1vdmllLmltYWdlVVJMfVxuICAgICAgICAgICAgICBhbHQ9e2Ake3Bvc3QuTW92aWUudGl0bGV9IHBvc3RlcmB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJvbGRUZXh0U2hhZG93IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtlbGxpcHNpemUocG9zdC5Nb3ZpZS50aXRsZSwgMzApfSAoe3Bvc3QuTW92aWUueWVhcn0pXG4gICAgICAgICAgICA8L0JvbGRUZXh0U2hhZG93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vdmllVGh1bWI+XG4gICAgICA8L0xpbms+XG4gICAgICA8UG9zdEluZm8+XG4gICAgICAgIDxMaW5rIGtleT17YHBvc3QtaW5kZXgtJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdHMvJHtwb3N0LmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgIDxIb3Zlckxpbms+e3Bvc3QudGl0bGV9PC9Ib3Zlckxpbms+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHNtYWxsPkNyZWF0ZWQgb24ge25ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KS50b1VUQ1N0cmluZygpfTwvc21hbGw+XG4gICAgICA8L1Bvc3RJbmZvPlxuICAgICAgPFVzZXJUaHVtYj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRodW1iLWluZm9cIj5cbiAgICAgICAgICA8cD5DcmVhdGVkIGJ5OjwvcD5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7cG9zdC5Vc2VyLmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPEhvdmVyTGluaz57cG9zdC5Vc2VyLnVzZXJuYW1lfTwvSG92ZXJMaW5rPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHtwb3N0LlVzZXIuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8Q2lyY3VsYXJBdmF0YXIgaW1hZ2VVUkw9e3Bvc3QuVXNlci5hdmF0YXJVUkx9IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1VzZXJUaHVtYj5cbiAgICA8L1Bvc3RJdGVtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInN0eWxlZCIsImVsbGlwc2l6ZSIsIkNvbG9yUGFsZXR0ZSIsIkNpcmN1bGFyQXZhdGFyIiwiU2VjdGlvbkNvbnRhaW5lciIsInNlY3Rpb24iLCJncmF5IiwiU2VjdGlvbkhlYWRlciIsImgyIiwiZGFyayIsImNvbG9yIiwibGlnaHQiLCJQb3N0SXRlbSIsImRpdiIsIlBvc3RJbmZvIiwiTW92aWVUaHVtYiIsImEiLCJVc2VyVGh1bWIiLCJIb3ZlckxpbmsiLCJ3YXJuaW5nIiwiSG92ZXJhYmxlQ29udGFpbmVyIiwiQm9sZFRleHRTaGFkb3ciLCJoNCIsImRhcmtlciIsImFsaWduIiwiUG9zdFByZXZpZXdEZXRhaWxzIiwicG9zdCIsImhyZWYiLCJNb3ZpZSIsImltZGJJZCIsInBhc3NIcmVmIiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwic3JjIiwiaW1hZ2VVUkwiLCJhbHQiLCJ0aXRsZSIsInllYXIiLCJpZCIsInNtYWxsIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvVVRDU3RyaW5nIiwiY2xhc3NOYW1lIiwicCIsIlVzZXIiLCJ1c2VybmFtZSIsImF2YXRhclVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tabloids.tsx\n");

/***/ })

});
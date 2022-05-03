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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SectionContainer\": function() { return /* binding */ SectionContainer; },\n/* harmony export */   \"SectionHeader\": function() { return /* binding */ SectionHeader; },\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; },\n/* harmony export */   \"PostInfo\": function() { return /* binding */ PostInfo; },\n/* harmony export */   \"MovieThumb\": function() { return /* binding */ MovieThumb; },\n/* harmony export */   \"UserThumb\": function() { return /* binding */ UserThumb; },\n/* harmony export */   \"HoverLink\": function() { return /* binding */ HoverLink; },\n/* harmony export */   \"HoverableContainer\": function() { return /* binding */ HoverableContainer; },\n/* harmony export */   \"BoldTextShadow\": function() { return /* binding */ BoldTextShadow; },\n/* harmony export */   \"PostPreviewDetails\": function() { return /* binding */ PostPreviewDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var ellipsize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ellipsize */ \"./node_modules/ellipsize/src/index.js\");\n/* harmony import */ var ellipsize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ellipsize__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n/* eslint-disable jsx-a11y/anchor-is-valid */ \n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid \",\n        \";\\n  max-width: 1200px;\\n  margin: 1rem auto;\\n  position: relative;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n  padding: 0.5rem;\\n  text-align: center;\\n  text-transform: uppercase;\\n  flex: 1;\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  grid-column: 1 / span 3;\\n  background: linear-gradient(0deg, #111, #000);\\n  padding: 0.5rem;\\n  display: flex;\\n  gap: 1rem;\\n  border-top: 1px solid \",\n        \";\\n  img {\\n    transition: all 0.4s ease;\\n    filter: saturate(0%);\\n  }\\n  &:hover {\\n    background: linear-gradient(0deg, #333, #322);\\n    img {\\n      filter: saturate(100%);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  flex: 1;\\n  p {\\n    font-weight: 700;\\n  }\\n  small {\\n    font-weight: 200;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 25%;\\n  overflow: hidden;\\n  border: 1px solid \",\n        \";\\n  cursor: pointer;\\n  div {\\n    position: relative;\\n    height: 100%;\\n    display: grid;\\n    place-items: center;\\n    h4 {\\n      color: \",\n        \";\\n      position: absolute;\\n    }\\n    img {\\n      position: absolute;\\n    }\\n  }\\n  @media (max-width: 1200px) {\\n    width: 10vmax;\\n    height: 12vmax;\\n    div {\\n      padding: 0.4rem;\\n      h4 {\\n        font-size: 0.8rem;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  gap: 1rem;\\n  .user-thumb-info {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n    justify-content: center;\\n    font-size: 0.9rem;\\n    font-weight: 300;\\n    p {\\n      font-size: 0.7rem;\\n    }\\n  }\\n  @media (max-width: 1200px) {\\n    flex-direction: column;\\n    align-items: flex-end;\\n    gap: 0.5rem;\\n    .user-thumb-info {\\n      align-items: flex-start;\\n      a {\\n        display: none;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: 600;\\n  &:hover {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  &:hover > * {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-shadow: 1px 1px 5px \",\n        \",\\n    2px 2px 10px \",\n        \";\\n  text-align: \",\n        \";\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nvar SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].section.withConfig({\n    displayName: \"tabloids__SectionContainer\",\n    componentId: \"sc-b56862ea-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray);\nvar SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h2.withConfig({\n    displayName: \"tabloids__SectionHeader\",\n    componentId: \"sc-b56862ea-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dark, function(param) {\n    var color = param.color;\n    return color || _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].light;\n});\nvar PostItem = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostItem\",\n    componentId: \"sc-b56862ea-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dark);\n_c = PostItem;\nvar PostInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostInfo\",\n    componentId: \"sc-b56862ea-3\"\n})(_templateObject3());\n_c1 = PostInfo;\nvar MovieThumb = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n    displayName: \"tabloids__MovieThumb\",\n    componentId: \"sc-b56862ea-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].light);\n_c2 = MovieThumb;\nvar UserThumb = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"tabloids__UserThumb\",\n    componentId: \"sc-b56862ea-5\"\n})(_templateObject5());\n_c3 = UserThumb;\nvar HoverLink = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverLink\",\n    componentId: \"sc-b56862ea-6\"\n})(_templateObject6(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].warning);\n_c4 = HoverLink;\nvar HoverableContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverableContainer\",\n    componentId: \"sc-b56862ea-7\"\n})(_templateObject7(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].warning);\nvar BoldTextShadow = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h4.withConfig({\n    displayName: \"tabloids__BoldTextShadow\",\n    componentId: \"sc-b56862ea-8\"\n})(_templateObject8(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darker, function(param) {\n    var align = param.align;\n    return align;\n});\n_c5 = BoldTextShadow;\nfunction PostPreviewDetails(param) {\n    var post = param.post;\n    var maxTitleLength = window.innerWidth <= 1200 ? 15 : 30;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItem, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/movies/\".concat(post.Movie.imdbId),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieThumb, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                src: post.Movie.imageURL,\n                                alt: \"\".concat(post.Movie.title, \" poster\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoldTextShadow, {\n                                align: \"center\",\n                                children: [\n                                    ellipsize__WEBPACK_IMPORTED_MODULE_3___default()(post.Movie.title, maxTitleLength),\n                                    \" (\",\n                                    post.Movie.year,\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                    lineNumber: 151,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostInfo, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/posts/\".concat(post.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverLink, {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 167,\n                            columnNumber: 11\n                        }, this)\n                    }, \"post-index-\".concat(post.id), false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: [\n                            \"Created on \",\n                            new Date(post.createdAt).toUTCString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserThumb, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"user-thumb-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Created by:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 173,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/users/\".concat(post.User.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverLink, {\n                                    children: post.User.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                    lineNumber: 175,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 174,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 172,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(post.User.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_5__.CircularAvatar, {\n                                imageURL: post.User.avatarURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 180,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 179,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, this));\n}\n_c6 = PostPreviewDetails;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"PostItem\");\n$RefreshReg$(_c1, \"PostInfo\");\n$RefreshReg$(_c2, \"MovieThumb\");\n$RefreshReg$(_c3, \"UserThumb\");\n$RefreshReg$(_c4, \"HoverLink\");\n$RefreshReg$(_c5, \"BoldTextShadow\");\n$RefreshReg$(_c6, \"PostPreviewDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUcsQ0FBTyxTQUFVLE9BQVJKLElBQUksQ0FBQ2UsRUFBRTt3QkFBSVIsUUFBUTs4R0FDcEVmLFNBQVM7c0NBQUVRLElBQUksQ0FBQ2EsS0FBSzs7Ozs7O3VCQURaLENBQVcsYUFBVSxPQUFSYixJQUFJLENBQUNlLEVBQUU7Ozs7O2dHQUcvQkMsQ0FBSzs7NEJBQUMsQ0FBVzs0QkFBQyxHQUFHLENBQUNDLElBQUksQ0FBQ2pCLElBQUksQ0FBQ2tCLFNBQVMsRUFBRUMsV0FBVzs7Ozs7Ozs7Ozs7Ozt3RkFFeEQ1QixTQUFTOztnR0FDUEosQ0FBRzt3QkFBQ2lDLFNBQVMsRUFBQyxDQUFpQjs7d0dBQzdCQyxDQUFDOzBDQUFDLENBQVc7Ozs7Ozt3R0FDYmhELGtEQUFJO2dDQUFDK0IsSUFBSSxFQUFHLENBQU8sU0FBZSxPQUFiSixJQUFJLENBQUNzQixJQUFJLENBQUNQLEVBQUU7Z0NBQUlSLFFBQVE7c0hBQzNDZixTQUFTOzhDQUFFUSxJQUFJLENBQUNzQixJQUFJLENBQUNDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUdqQ2xELGtEQUFJO3dCQUFDK0IsSUFBSSxFQUFHLENBQU8sU0FBZSxPQUFiSixJQUFJLENBQUNzQixJQUFJLENBQUNQLEVBQUU7d0JBQUlSLFFBQVE7OEdBQzNDakIsQ0FBQztrSEFDQ2Isd0RBQWM7Z0NBQUNrQyxRQUFRLEVBQUVYLElBQUksQ0FBQ3NCLElBQUksQ0FBQ0UsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16RCxDQUFDO01BeENlekIsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFibG9pZHMudHN4PzMzMGMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgZWxsaXBzaXplIGZyb20gXCJlbGxpcHNpemVcIjtcbmltcG9ydCB7IFBvc3RTY2hlbWEgfSBmcm9tIFwiLi4vbGliL3R5cGVzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5pbXBvcnQgeyBDaXJjdWxhckF2YXRhciB9IGZyb20gXCIuL3VzZXJEZXRhaWxzXCI7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbnR5cGUgU2VjdGlvbkhlYWRlclByb3BzID0ge1xuICBjb2xvcj86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uSGVhZGVyID0gc3R5bGVkLmgyPFNlY3Rpb25IZWFkZXJQcm9wcz5gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmRhcmt9O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAkeyh7IGNvbG9yIH0pID0+IGNvbG9yIHx8IENvbG9yUGFsZXR0ZS5saWdodH07XG5gO1xuXG5leHBvcnQgY29uc3QgUG9zdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMTEsICMwMDApO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmRhcmt9O1xuICBpbWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgwJSk7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMzMzMsICMzMjIpO1xuICAgIGltZyB7XG4gICAgICBmaWx0ZXI6IHNhdHVyYXRlKDEwMCUpO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFBvc3RJbmZvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGZsZXg6IDE7XG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgc21hbGwge1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVRodW1iID0gc3R5bGVkLmFgXG4gIHdpZHRoOiAyNSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgaDQge1xuICAgICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIHdpZHRoOiAxMHZtYXg7XG4gICAgaGVpZ2h0OiAxMnZtYXg7XG4gICAgZGl2IHtcbiAgICAgIHBhZGRpbmc6IDAuNHJlbTtcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVXNlclRodW1iID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICAudXNlci10aHVtYi1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGdhcDogMC41cmVtO1xuICAgIC51c2VyLXRodW1iLWluZm8ge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIb3ZlckxpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLndhcm5pbmd9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSG92ZXJhYmxlQ29udGFpbmVyID0gc3R5bGVkLmFgXG4gICY6aG92ZXIgPiAqIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUud2FybmluZ307XG4gIH1cbmA7XG5cbmludGVyZmFjZSBCb2xkVGV4dFNoYWRvd1Byb3BzIHtcbiAgYWxpZ24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBCb2xkVGV4dFNoYWRvdyA9IHN0eWxlZC5oNDxCb2xkVGV4dFNoYWRvd1Byb3BzPmBcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICR7Q29sb3JQYWxldHRlLmRhcmtlcn0sXG4gICAgMnB4IDJweCAxMHB4ICR7Q29sb3JQYWxldHRlLmRhcmtlcn07XG4gIHRleHQtYWxpZ246ICR7KHsgYWxpZ24gfSkgPT4gYWxpZ259O1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RQcmV2aWV3RGV0YWlscyh7IHBvc3QgfTogeyBwb3N0OiBQb3N0U2NoZW1hIH0pIHtcbiAgY29uc3QgbWF4VGl0bGVMZW5ndGggPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMjAwID8gMTUgOiAzMDtcbiAgcmV0dXJuIChcbiAgICA8UG9zdEl0ZW0+XG4gICAgICA8TGluayBocmVmPXtgL21vdmllcy8ke3Bvc3QuTW92aWUuaW1kYklkfWB9IHBhc3NIcmVmPlxuICAgICAgICA8TW92aWVUaHVtYj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5Nb3ZpZS5pbWFnZVVSTH1cbiAgICAgICAgICAgICAgYWx0PXtgJHtwb3N0Lk1vdmllLnRpdGxlfSBwb3N0ZXJgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCb2xkVGV4dFNoYWRvdyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7ZWxsaXBzaXplKHBvc3QuTW92aWUudGl0bGUsIG1heFRpdGxlTGVuZ3RoKX0gKHtwb3N0Lk1vdmllLnllYXJ9KVxuICAgICAgICAgICAgPC9Cb2xkVGV4dFNoYWRvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb3ZpZVRodW1iPlxuICAgICAgPC9MaW5rPlxuICAgICAgPFBvc3RJbmZvPlxuICAgICAgICA8TGluayBrZXk9e2Bwb3N0LWluZGV4LSR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICA8SG92ZXJMaW5rPntwb3N0LnRpdGxlfTwvSG92ZXJMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzbWFsbD5DcmVhdGVkIG9uIHtuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkudG9VVENTdHJpbmcoKX08L3NtYWxsPlxuICAgICAgPC9Qb3N0SW5mbz5cbiAgICAgIDxVc2VyVGh1bWI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci10aHVtYi1pbmZvXCI+XG4gICAgICAgICAgPHA+Q3JlYXRlZCBieTo8L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3Bvc3QuVXNlci5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxIb3Zlckxpbms+e3Bvc3QuVXNlci51c2VybmFtZX08L0hvdmVyTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7cG9zdC5Vc2VyLmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPENpcmN1bGFyQXZhdGFyIGltYWdlVVJMPXtwb3N0LlVzZXIuYXZhdGFyVVJMfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Vc2VyVGh1bWI+XG4gICAgPC9Qb3N0SXRlbT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJzdHlsZWQiLCJlbGxpcHNpemUiLCJDb2xvclBhbGV0dGUiLCJDaXJjdWxhckF2YXRhciIsIlNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uIiwiZ3JheSIsIlNlY3Rpb25IZWFkZXIiLCJoMiIsImRhcmsiLCJjb2xvciIsImxpZ2h0IiwiUG9zdEl0ZW0iLCJkaXYiLCJQb3N0SW5mbyIsIk1vdmllVGh1bWIiLCJhIiwiVXNlclRodW1iIiwiSG92ZXJMaW5rIiwid2FybmluZyIsIkhvdmVyYWJsZUNvbnRhaW5lciIsIkJvbGRUZXh0U2hhZG93IiwiaDQiLCJkYXJrZXIiLCJhbGlnbiIsIlBvc3RQcmV2aWV3RGV0YWlscyIsInBvc3QiLCJtYXhUaXRsZUxlbmd0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJocmVmIiwiTW92aWUiLCJpbWRiSWQiLCJwYXNzSHJlZiIsImxheW91dCIsIm9iamVjdEZpdCIsInNyYyIsImltYWdlVVJMIiwiYWx0IiwidGl0bGUiLCJ5ZWFyIiwiaWQiLCJzbWFsbCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b1VUQ1N0cmluZyIsImNsYXNzTmFtZSIsInAiLCJVc2VyIiwidXNlcm5hbWUiLCJhdmF0YXJVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tabloids.tsx\n");

/***/ })

});
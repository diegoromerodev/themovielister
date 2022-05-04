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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SectionContainer\": function() { return /* binding */ SectionContainer; },\n/* harmony export */   \"SectionHeader\": function() { return /* binding */ SectionHeader; },\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; },\n/* harmony export */   \"PostInfo\": function() { return /* binding */ PostInfo; },\n/* harmony export */   \"MovieThumb\": function() { return /* binding */ MovieThumb; },\n/* harmony export */   \"UserThumb\": function() { return /* binding */ UserThumb; },\n/* harmony export */   \"HoverLink\": function() { return /* binding */ HoverLink; },\n/* harmony export */   \"HoverableContainer\": function() { return /* binding */ HoverableContainer; },\n/* harmony export */   \"BoldTextShadow\": function() { return /* binding */ BoldTextShadow; },\n/* harmony export */   \"PostPreviewDetails\": function() { return /* binding */ PostPreviewDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var ellipsize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ellipsize */ \"./node_modules/ellipsize/src/index.js\");\n/* harmony import */ var ellipsize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ellipsize__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n/* eslint-disable jsx-a11y/anchor-is-valid */ \n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid \",\n        \";\\n  max-width: 1200px;\\n  margin: 1rem auto;\\n  position: relative;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n  padding: 0.5rem;\\n  text-align: center;\\n  text-transform: uppercase;\\n  flex: 1;\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  grid-column: 1 / span 3;\\n  background: linear-gradient(0deg, #111, #000);\\n  padding: 0.5rem;\\n  display: flex;\\n  gap: 1rem;\\n  align-items: center;\\n  border-top: 1px solid \",\n        \";\\n  img {\\n    transition: all 0.4s ease;\\n    filter: saturate(0%);\\n  }\\n  &:hover {\\n    background: linear-gradient(0deg, #333, #322);\\n    img {\\n      filter: saturate(100%);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  flex: 1;\\n  p {\\n    font-weight: 700;\\n  }\\n  small {\\n    font-weight: 200;\\n  }\\n  @media (max-width: 1200px) {\\n    small {\\n      font-size: 0.7rem;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 25%;\\n  overflow: hidden;\\n  border: 1px solid \",\n        \";\\n  cursor: pointer;\\n  align-self: stretch;\\n  div {\\n    position: relative;\\n    height: 100%;\\n    display: grid;\\n    place-items: center;\\n    h4 {\\n      color: \",\n        \";\\n      position: absolute;\\n    }\\n    img {\\n      position: absolute;\\n    }\\n  }\\n  @media (max-width: 1200px) {\\n    width: 8vmax;\\n    height: 10vmax;\\n    div {\\n      h4 {\\n        margin: 0.3rem;\\n        font-size: 0.8rem;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  gap: 1rem;\\n  .user-thumb-info {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n    justify-content: center;\\n    font-size: 0.9rem;\\n    font-weight: 300;\\n    p {\\n      font-size: 0.7rem;\\n    }\\n  }\\n  @media (max-width: 1200px) {\\n    flex-direction: column;\\n    align-items: flex-end;\\n    gap: 0.5rem;\\n    .user-thumb-info {\\n      align-items: flex-start;\\n      a {\\n        display: none;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: 600;\\n  &:hover {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  &:hover > * {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-shadow: 1px 1px 5px \",\n        \",\\n    2px 2px 10px \",\n        \";\\n  text-align: \",\n        \";\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].section.withConfig({\n    displayName: \"tabloids__SectionContainer\",\n    componentId: \"sc-33aa5f4-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].gray);\nvar SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h2.withConfig({\n    displayName: \"tabloids__SectionHeader\",\n    componentId: \"sc-33aa5f4-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dark, function(param) {\n    var color = param.color;\n    return color || _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].light;\n});\nvar PostItem = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostItem\",\n    componentId: \"sc-33aa5f4-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dark);\n_c = PostItem;\nvar PostInfo = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostInfo\",\n    componentId: \"sc-33aa5f4-3\"\n})(_templateObject3());\n_c1 = PostInfo;\nvar MovieThumb = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].a.withConfig({\n    displayName: \"tabloids__MovieThumb\",\n    componentId: \"sc-33aa5f4-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].light);\n_c2 = MovieThumb;\nvar UserThumb = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"tabloids__UserThumb\",\n    componentId: \"sc-33aa5f4-5\"\n})(_templateObject5());\n_c3 = UserThumb;\nvar HoverLink = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverLink\",\n    componentId: \"sc-33aa5f4-6\"\n})(_templateObject6(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].warning);\n_c4 = HoverLink;\nvar HoverableContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverableContainer\",\n    componentId: \"sc-33aa5f4-7\"\n})(_templateObject7(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].warning);\nvar BoldTextShadow = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h4.withConfig({\n    displayName: \"tabloids__BoldTextShadow\",\n    componentId: \"sc-33aa5f4-8\"\n})(_templateObject8(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].darker, function(param) {\n    var align = param.align;\n    return align;\n});\n_c5 = BoldTextShadow;\nfunction PostPreviewDetails(param) {\n    var post = param.post, commentCount = param.commentCount;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(30), maxTitleLength = ref[0], setMaxTitleLength = ref[1];\n    var calculateMaxTitleLength = function() {\n        setMaxTitleLength(window.innerWidth <= 1200 ? 15 : 30);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        return window.addEventListener(\"resize\", calculateMaxTitleLength);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItem, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/movies/\".concat(post.Movie.imdbId),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieThumb, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                src: post.Movie.imageURL,\n                                alt: \"\".concat(post.Movie.title, \" poster\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 179,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoldTextShadow, {\n                                align: \"center\",\n                                children: [\n                                    ellipsize__WEBPACK_IMPORTED_MODULE_3___default()(post.Movie.title, maxTitleLength),\n                                    \" (\",\n                                    post.Movie.year,\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 185,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 178,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                    lineNumber: 177,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 176,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/posts/\".concat(post.id),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostInfo, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverLink, {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 193,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            children: [\n                                \"Created on \",\n                                new Date(post.createdAt).toUTCString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 194,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faComment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                    lineNumber: 196,\n                                    columnNumber: 13\n                                }, this),\n                                \"\\xa0\\xa0\",\n                                commentCount || \"No\",\n                                \" comment\",\n                                commentCount === 1 ? \"\" : \"s\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 195,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                    lineNumber: 192,\n                    columnNumber: 9\n                }, this)\n            }, \"post-index-\".concat(post.id), false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserThumb, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"user-thumb-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Created by:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 204,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/users/\".concat(post.User.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverLink, {\n                                    children: post.User.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                    lineNumber: 206,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 205,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(post.User.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.CircularAvatar, {\n                                imageURL: post.User.avatarURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 211,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 210,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 209,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 202,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n        lineNumber: 175,\n        columnNumber: 5\n    }, this));\n}\n_s(PostPreviewDetails, \"tiXRnzU2X8BBNvHfW7ts5G07BKM=\");\n_c6 = PostPreviewDetails;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"PostItem\");\n$RefreshReg$(_c1, \"PostInfo\");\n$RefreshReg$(_c2, \"MovieThumb\");\n$RefreshReg$(_c3, \"UserThumb\");\n$RefreshReg$(_c4, \"HoverLink\");\n$RefreshReg$(_c5, \"BoldTextShadow\");\n$RefreshReg$(_c6, \"PostPreviewDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxvaWRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQTZDLDRDQUNmO0FBQ0Y7QUFDVTtBQUNMO0FBQ1U7QUFDcUI7QUFDSDtBQUVaO0FBQ0g7Ozs7Ozs7Ozs7Ozs7UUFFQyxDQUczQjtRQUFvQixDQUl4Qzs7Ozs7Ozs7O1FBTTJELENBQ3ZDO1FBQW9CLENBTy9CO1FBQTZDLENBQ3REOzs7Ozs7Ozs7UUFFbUMsQ0FPWDtRQUFvQixDQVc1Qzs7Ozs7Ozs7O1FBRW1DLENBZ0JuQzs7Ozs7Ozs7O1FBRW1DLENBR2Y7UUFBb0IsQ0FTM0I7UUFBcUIsQ0FpQmxDOzs7Ozs7Ozs7UUFFb0MsQ0F5QnBDOzs7Ozs7Ozs7UUFFa0MsQ0FHdkI7UUFBdUIsQ0FFbEM7Ozs7Ozs7OztRQUUyQyxDQUVoQztRQUF1QixDQUVsQzs7Ozs7Ozs7O1FBTTZELENBQ2xDO1FBQXNCLENBQ2hDO1FBQXNCLENBQ3pCO1FBQXVCLENBQ3JDOzs7Ozs7OztBQTdJTyxHQUFLLENBQUNVLGdCQUFnQixHQUFHUiw0RUFBYzs7O3NCQUd4Qk0saUVBQWlCO0FBVWhDLEdBQUssQ0FBQ0ssYUFBYSxHQUFHWCx1RUFBUzs7O3VCQUNoQk0saUVBQWlCLEVBTzVCLFFBQVE7UUFBTFEsS0FBSyxTQUFMQSxLQUFLO0lBQU9BLE1BQU0sQ0FBTkEsS0FBSyxJQUFJUixrRUFBa0I7O0FBRzlDLEdBQUssQ0FBQ1UsUUFBUSxHQUFHaEIsd0VBQVU7Ozt1QkFPUk0saUVBQWlCO0tBUDlCVSxRQUFRO0FBb0JkLEdBQUssQ0FBQ0UsUUFBUSxHQUFHbEIsd0VBQVU7Ozs7TUFBckJrQixRQUFRO0FBa0JkLEdBQUssQ0FBQ0MsVUFBVSxHQUFHbkIsc0VBQVE7Ozt1QkFHWk0saUVBQWlCLEVBU3hCQSxrRUFBa0I7TUFacEJhLFVBQVU7QUErQmhCLEdBQUssQ0FBQ0UsU0FBUyxHQUFHckIsd0VBQVU7Ozs7TUFBdEJxQixTQUFTO0FBMkJmLEdBQUssQ0FBQ0MsU0FBUyxHQUFHdEIsc0VBQVE7Ozt1QkFHcEJNLG9FQUFvQjtNQUhwQmdCLFNBQVM7QUFPZixHQUFLLENBQUNFLGtCQUFrQixHQUFHeEIsc0VBQVE7Ozt1QkFFN0JNLG9FQUFvQjtBQVExQixHQUFLLENBQUNtQixjQUFjLEdBQUd6Qix1RUFBUzs7O3VCQUNWTSxtRUFBbUIsRUFDN0JBLG1FQUFtQixFQUN0QixRQUFRO1FBQUxzQixLQUFLLFNBQUxBLEtBQUs7SUFBT0EsTUFBTSxDQUFOQSxLQUFLOztNQUh2QkgsY0FBYztBQU1wQixTQUFTSSxrQkFBa0IsQ0FBQyxLQU1sQyxFQUFFLENBQUM7UUFMRkMsSUFBSSxHQUQ2QixLQU1sQyxDQUxDQSxJQUFJLEVBQ0pDLFlBQVksR0FGcUIsS0FNbEMsQ0FKQ0EsWUFBWTs7SUFLWixHQUFLLENBQXVDNUIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsR0FBaEQ2QixjQUFjLEdBQXVCN0IsR0FBWSxLQUFqQzhCLGlCQUFpQixHQUFJOUIsR0FBWTtJQUV4RCxHQUFLLENBQUMrQix1QkFBdUIsR0FBRyxRQUNsQyxHQUR3QyxDQUFDO1FBQ3JDRCxpQkFBaUIsQ0FBQ0UsTUFBTSxDQUFDQyxVQUFVLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ3ZELENBQUM7SUFFRGxDLGdEQUFTLENBQ1AsUUFBUTtRQUFGaUMsTUFBTSxDQUFOQSxNQUFNLENBQUNFLGdCQUFnQixDQUFDLENBQVEsU0FBRUgsdUJBQXVCO09BQy9ELENBQUMsQ0FBQztJQUdKLE1BQU0sNkVBQ0hsQixRQUFROzt3RkFDTmpCLGtEQUFJO2dCQUFDdUMsSUFBSSxFQUFHLENBQVEsVUFBb0IsT0FBbEJSLElBQUksQ0FBQ1MsS0FBSyxDQUFDQyxNQUFNO2dCQUFJQyxRQUFRO3NHQUNqRHRCLFVBQVU7MEdBQ1JGLENBQUc7O3dHQUNEbkIsbURBQUs7Z0NBQ0o0QyxNQUFNLEVBQUMsQ0FBTTtnQ0FDYkMsU0FBUyxFQUFDLENBQU87Z0NBQ2pCQyxHQUFHLEVBQUVkLElBQUksQ0FBQ1MsS0FBSyxDQUFDTSxRQUFRO2dDQUN4QkMsR0FBRyxFQUFHLEdBQW1CLE1BQU8sQ0FBeEJoQixJQUFJLENBQUNTLEtBQUssQ0FBQ1EsS0FBSyxFQUFDLENBQU87Ozs7Ozt3R0FFakN0QixjQUFjO2dDQUFDRyxLQUFLLEVBQUMsQ0FBUTs7b0NBQzNCM0IsZ0RBQVMsQ0FBQzZCLElBQUksQ0FBQ1MsS0FBSyxDQUFDUSxLQUFLLEVBQUVmLGNBQWM7b0NBQUUsQ0FBRTtvQ0FBQ0YsSUFBSSxDQUFDUyxLQUFLLENBQUNTLElBQUk7b0NBQUMsQ0FDbEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUlMakQsa0RBQUk7Z0JBQStCdUMsSUFBSSxFQUFHLENBQU8sU0FBVSxPQUFSUixJQUFJLENBQUNtQixFQUFFO2dCQUFJUixRQUFRO3NHQUNwRXZCLFFBQVE7O29HQUNOSSxTQUFTO3NDQUFFUSxJQUFJLENBQUNpQixLQUFLOzs7Ozs7b0dBQ3JCRyxDQUFLOztnQ0FBQyxDQUFXO2dDQUFDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDckIsSUFBSSxDQUFDc0IsU0FBUyxFQUFFQyxXQUFXOzs7Ozs7O29HQUN0REgsQ0FBSzs7NEdBQ0g5QywyRUFBZTtvQ0FBQ2tELElBQUksRUFBRWpELHdFQUFTOzs7Ozs7Z0NBQUksQ0FDeEI7Z0NBQUMwQixZQUFZLElBQUksQ0FBSTtnQ0FBQyxDQUNsQztnQ0FBQ0EsWUFBWSxLQUFLLENBQUMsR0FBRyxDQUFFLElBQUcsQ0FBRzs7Ozs7Ozs7Ozs7OztlQVB4QixDQUFXLGFBQVUsT0FBUkQsSUFBSSxDQUFDbUIsRUFBRTs7Ozs7d0ZBVy9CNUIsU0FBUzs7Z0dBQ1BKLENBQUc7d0JBQUNzQyxTQUFTLEVBQUMsQ0FBaUI7O3dHQUM3QkMsQ0FBQzswQ0FBQyxDQUFXOzs7Ozs7d0dBQ2J6RCxrREFBSTtnQ0FBQ3VDLElBQUksRUFBRyxDQUFPLFNBQWUsT0FBYlIsSUFBSSxDQUFDMkIsSUFBSSxDQUFDUixFQUFFO2dDQUFJUixRQUFRO3NIQUMzQ25CLFNBQVM7OENBQUVRLElBQUksQ0FBQzJCLElBQUksQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR2pDM0Qsa0RBQUk7d0JBQUN1QyxJQUFJLEVBQUcsQ0FBTyxTQUFlLE9BQWJSLElBQUksQ0FBQzJCLElBQUksQ0FBQ1IsRUFBRTt3QkFBSVIsUUFBUTs4R0FDM0NyQixDQUFDO2tIQUNDYix3REFBYztnQ0FBQ3NDLFFBQVEsRUFBRWYsSUFBSSxDQUFDMkIsSUFBSSxDQUFDRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpELENBQUM7R0E3RGU5QixrQkFBa0I7TUFBbEJBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhYmxvaWRzLnRzeD8zMzBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGVsbGlwc2l6ZSBmcm9tIFwiZWxsaXBzaXplXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNvbW1lbnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBQb3N0U2NoZW1hIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuaW1wb3J0IHsgQ2lyY3VsYXJBdmF0YXIgfSBmcm9tIFwiLi91c2VyRGV0YWlsc1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG50eXBlIFNlY3Rpb25IZWFkZXJQcm9wcyA9IHtcbiAgY29sb3I/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkhlYWRlciA9IHN0eWxlZC5oMjxTZWN0aW9uSGVhZGVyUHJvcHM+YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5kYXJrfTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmbGV4OiAxO1xuICBjb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvciB8fCBDb2xvclBhbGV0dGUubGlnaHR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFBvc3RJdGVtID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTExLCAjMDAwKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5kYXJrfTtcbiAgaW1nIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAgIGZpbHRlcjogc2F0dXJhdGUoMCUpO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMzMzLCAjMzIyKTtcbiAgICBpbWcge1xuICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgxMDAlKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0SW5mbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBmbGV4OiAxO1xuICBwIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIHNtYWxsIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBzbWFsbCB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVRodW1iID0gc3R5bGVkLmFgXG4gIHdpZHRoOiAyNSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgaDQge1xuICAgICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIHdpZHRoOiA4dm1heDtcbiAgICBoZWlnaHQ6IDEwdm1heDtcbiAgICBkaXYge1xuICAgICAgaDQge1xuICAgICAgICBtYXJnaW46IDAuM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVXNlclRodW1iID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICAudXNlci10aHVtYi1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGdhcDogMC41cmVtO1xuICAgIC51c2VyLXRodW1iLWluZm8ge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIb3ZlckxpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLndhcm5pbmd9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSG92ZXJhYmxlQ29udGFpbmVyID0gc3R5bGVkLmFgXG4gICY6aG92ZXIgPiAqIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUud2FybmluZ307XG4gIH1cbmA7XG5cbmludGVyZmFjZSBCb2xkVGV4dFNoYWRvd1Byb3BzIHtcbiAgYWxpZ24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBCb2xkVGV4dFNoYWRvdyA9IHN0eWxlZC5oNDxCb2xkVGV4dFNoYWRvd1Byb3BzPmBcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICR7Q29sb3JQYWxldHRlLmRhcmtlcn0sXG4gICAgMnB4IDJweCAxMHB4ICR7Q29sb3JQYWxldHRlLmRhcmtlcn07XG4gIHRleHQtYWxpZ246ICR7KHsgYWxpZ24gfSkgPT4gYWxpZ259O1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RQcmV2aWV3RGV0YWlscyh7XG4gIHBvc3QsXG4gIGNvbW1lbnRDb3VudCxcbn06IHtcbiAgcG9zdDogUG9zdFNjaGVtYTtcbiAgY29tbWVudENvdW50OiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IFttYXhUaXRsZUxlbmd0aCwgc2V0TWF4VGl0bGVMZW5ndGhdID0gdXNlU3RhdGUoMzApO1xuXG4gIGNvbnN0IGNhbGN1bGF0ZU1heFRpdGxlTGVuZ3RoID0gKCkgPT4ge1xuICAgIHNldE1heFRpdGxlTGVuZ3RoKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEyMDAgPyAxNSA6IDMwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2FsY3VsYXRlTWF4VGl0bGVMZW5ndGgpLFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9zdEl0ZW0+XG4gICAgICA8TGluayBocmVmPXtgL21vdmllcy8ke3Bvc3QuTW92aWUuaW1kYklkfWB9IHBhc3NIcmVmPlxuICAgICAgICA8TW92aWVUaHVtYj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5Nb3ZpZS5pbWFnZVVSTH1cbiAgICAgICAgICAgICAgYWx0PXtgJHtwb3N0Lk1vdmllLnRpdGxlfSBwb3N0ZXJgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCb2xkVGV4dFNoYWRvdyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7ZWxsaXBzaXplKHBvc3QuTW92aWUudGl0bGUsIG1heFRpdGxlTGVuZ3RoKX0gKHtwb3N0Lk1vdmllLnllYXJ9KVxuICAgICAgICAgICAgPC9Cb2xkVGV4dFNoYWRvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb3ZpZVRodW1iPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsga2V5PXtgcG9zdC1pbmRleC0ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0cy8ke3Bvc3QuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgIDxQb3N0SW5mbz5cbiAgICAgICAgICA8SG92ZXJMaW5rPntwb3N0LnRpdGxlfTwvSG92ZXJMaW5rPlxuICAgICAgICAgIDxzbWFsbD5DcmVhdGVkIG9uIHtuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkudG9VVENTdHJpbmcoKX08L3NtYWxsPlxuICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb21tZW50fSAvPlxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7e2NvbW1lbnRDb3VudCB8fCBcIk5vXCJ9IGNvbW1lbnRcbiAgICAgICAgICAgIHtjb21tZW50Q291bnQgPT09IDEgPyBcIlwiIDogXCJzXCJ9XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPC9Qb3N0SW5mbz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxVc2VyVGh1bWI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci10aHVtYi1pbmZvXCI+XG4gICAgICAgICAgPHA+Q3JlYXRlZCBieTo8L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3Bvc3QuVXNlci5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxIb3Zlckxpbms+e3Bvc3QuVXNlci51c2VybmFtZX08L0hvdmVyTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7cG9zdC5Vc2VyLmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPENpcmN1bGFyQXZhdGFyIGltYWdlVVJMPXtwb3N0LlVzZXIuYXZhdGFyVVJMfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Vc2VyVGh1bWI+XG4gICAgPC9Qb3N0SXRlbT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJzdHlsZWQiLCJlbGxpcHNpemUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ29tbWVudCIsIkNvbG9yUGFsZXR0ZSIsIkNpcmN1bGFyQXZhdGFyIiwiU2VjdGlvbkNvbnRhaW5lciIsInNlY3Rpb24iLCJncmF5IiwiU2VjdGlvbkhlYWRlciIsImgyIiwiZGFyayIsImNvbG9yIiwibGlnaHQiLCJQb3N0SXRlbSIsImRpdiIsIlBvc3RJbmZvIiwiTW92aWVUaHVtYiIsImEiLCJVc2VyVGh1bWIiLCJIb3ZlckxpbmsiLCJ3YXJuaW5nIiwiSG92ZXJhYmxlQ29udGFpbmVyIiwiQm9sZFRleHRTaGFkb3ciLCJoNCIsImRhcmtlciIsImFsaWduIiwiUG9zdFByZXZpZXdEZXRhaWxzIiwicG9zdCIsImNvbW1lbnRDb3VudCIsIm1heFRpdGxlTGVuZ3RoIiwic2V0TWF4VGl0bGVMZW5ndGgiLCJjYWxjdWxhdGVNYXhUaXRsZUxlbmd0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiaHJlZiIsIk1vdmllIiwiaW1kYklkIiwicGFzc0hyZWYiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJzcmMiLCJpbWFnZVVSTCIsImFsdCIsInRpdGxlIiwieWVhciIsImlkIiwic21hbGwiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9VVENTdHJpbmciLCJpY29uIiwiY2xhc3NOYW1lIiwicCIsIlVzZXIiLCJ1c2VybmFtZSIsImF2YXRhclVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tabloids.tsx\n");

/***/ })

});
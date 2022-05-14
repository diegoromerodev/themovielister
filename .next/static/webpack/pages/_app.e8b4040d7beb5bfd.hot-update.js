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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SectionContainer\": function() { return /* binding */ SectionContainer; },\n/* harmony export */   \"SectionHeader\": function() { return /* binding */ SectionHeader; },\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; },\n/* harmony export */   \"PostInfo\": function() { return /* binding */ PostInfo; },\n/* harmony export */   \"MovieThumb\": function() { return /* binding */ MovieThumb; },\n/* harmony export */   \"UserThumb\": function() { return /* binding */ UserThumb; },\n/* harmony export */   \"HoverLink\": function() { return /* binding */ HoverLink; },\n/* harmony export */   \"HoverableContainer\": function() { return /* binding */ HoverableContainer; },\n/* harmony export */   \"BoldTextShadow\": function() { return /* binding */ BoldTextShadow; },\n/* harmony export */   \"PostPreviewDetails\": function() { return /* binding */ PostPreviewDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var ellipsize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ellipsize */ \"./node_modules/ellipsize/src/index.js\");\n/* harmony import */ var ellipsize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ellipsize__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n/* eslint-disable jsx-a11y/anchor-is-valid */ \n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid \",\n        \";\\n  max-width: 1200px;\\n  margin: 1rem auto;\\n  position: relative;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n  padding: 0.5rem;\\n  text-align: center;\\n  text-transform: uppercase;\\n  flex: 1;\\n  color: \",\n        \";\\n  @media (max-width: 1200px) {\\n    font-size: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  grid-column: 1 / span 3;\\n  background: linear-gradient(0deg, #111, #000);\\n  padding: 0.5rem;\\n  display: flex;\\n  gap: 1rem;\\n  align-items: center;\\n  border-top: 1px solid \",\n        \";\\n  img {\\n    transition: all 0.4s ease;\\n    filter: saturate(25%);\\n  }\\n  &:hover {\\n    background: linear-gradient(0deg, #333, #322);\\n    img {\\n      filter: saturate(100%);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  flex: 1;\\n  cursor: pointer;\\n  p {\\n    font-weight: 700;\\n  }\\n  small {\\n    font-weight: 200;\\n  }\\n  @media (max-width: 1200px) {\\n    small {\\n      font-size: 0.7rem;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 25%;\\n  overflow: hidden;\\n  border: 1px solid \",\n        \";\\n  cursor: pointer;\\n  align-self: stretch;\\n  div {\\n    position: relative;\\n    height: 100%;\\n    display: grid;\\n    place-items: center;\\n    h4 {\\n      color: \",\n        \";\\n      position: absolute;\\n    }\\n    img {\\n      position: absolute;\\n    }\\n  }\\n  @media (max-width: 1200px) {\\n    width: 8vmax;\\n    height: 10vmax;\\n    div {\\n      h4 {\\n        margin: 0.3rem;\\n        font-size: 0.8rem;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  gap: 1rem;\\n  .user-thumb-info {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n    justify-content: center;\\n    font-size: 0.9rem;\\n    font-weight: 300;\\n    p {\\n      font-size: 0.7rem;\\n    }\\n  }\\n  @media (max-width: 1200px) {\\n    flex-direction: column;\\n    align-items: flex-end;\\n    gap: 0.5rem;\\n    .user-thumb-info {\\n      align-items: flex-start;\\n      a {\\n        display: none;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: 600;\\n  &:hover {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  &:hover > * {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-shadow: 1px 1px 5px \",\n        \",\\n    2px 2px 10px \",\n        \";\\n  text-align: \",\n        \";\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].section.withConfig({\n    displayName: \"tabloids__SectionContainer\",\n    componentId: \"sc-f67a400b-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].gray);\nvar SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h2.withConfig({\n    displayName: \"tabloids__SectionHeader\",\n    componentId: \"sc-f67a400b-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dark, function(param) {\n    var color = param.color;\n    return color || _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].light;\n});\nvar PostItem = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostItem\",\n    componentId: \"sc-f67a400b-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dark);\n_c = PostItem;\nvar PostInfo = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostInfo\",\n    componentId: \"sc-f67a400b-3\"\n})(_templateObject3());\n_c1 = PostInfo;\nvar MovieThumb = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].a.withConfig({\n    displayName: \"tabloids__MovieThumb\",\n    componentId: \"sc-f67a400b-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].light);\n_c2 = MovieThumb;\nvar UserThumb = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"tabloids__UserThumb\",\n    componentId: \"sc-f67a400b-5\"\n})(_templateObject5());\n_c3 = UserThumb;\nvar HoverLink = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverLink\",\n    componentId: \"sc-f67a400b-6\"\n})(_templateObject6(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].warning);\n_c4 = HoverLink;\nvar HoverableContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverableContainer\",\n    componentId: \"sc-f67a400b-7\"\n})(_templateObject7(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].warning);\nvar BoldTextShadow = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h4.withConfig({\n    displayName: \"tabloids__BoldTextShadow\",\n    componentId: \"sc-f67a400b-8\"\n})(_templateObject8(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_6__[\"default\"].darker, function(param) {\n    var align = param.align;\n    return align;\n});\n_c5 = BoldTextShadow;\nfunction PostPreviewDetails(param) {\n    var post = param.post, commentCount = param.commentCount;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(30), maxTitleLength = ref[0], setMaxTitleLength = ref[1];\n    var calculateMaxTitleLength = function() {\n        setMaxTitleLength(window.innerWidth <= 1200 ? 15 : 30);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        return window.addEventListener(\"resize\", calculateMaxTitleLength);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItem, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/movies/\".concat(post.Movie.imdbId),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieThumb, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                src: post.Movie.imageURL,\n                                alt: \"\".concat(post.Movie.title, \" poster\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 183,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoldTextShadow, {\n                                align: \"center\",\n                                children: [\n                                    ellipsize__WEBPACK_IMPORTED_MODULE_3___default()(post.Movie.title, maxTitleLength),\n                                    \" (\",\n                                    post.Movie.year,\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 189,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 182,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                    lineNumber: 181,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/posts/\".concat(post.id),\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostInfo, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverLink, {\n                            children: ellipsize__WEBPACK_IMPORTED_MODULE_3___default()(post.title, 30)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 197,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            children: [\n                                \"Created on \",\n                                new Date(post.createdAt).toUTCString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 198,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faComment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                    lineNumber: 200,\n                                    columnNumber: 13\n                                }, this),\n                                \"\\xa0\\xa0\",\n                                commentCount || \"No\",\n                                \" comment\",\n                                commentCount === 1 ? \"\" : \"s\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 199,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                    lineNumber: 196,\n                    columnNumber: 9\n                }, this)\n            }, \"post-index-\".concat(post.id), false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 195,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserThumb, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"user-thumb-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Created by:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 208,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/users/\".concat(post.User.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverLink, {\n                                    children: post.User.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                    lineNumber: 210,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 209,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 207,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(post.User.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.CircularAvatar, {\n                                imageURL: post.User.avatarURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                                lineNumber: 215,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                            lineNumber: 214,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                        lineNumber: 213,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n                lineNumber: 206,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\tabloids.tsx\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, this));\n}\n_s(PostPreviewDetails, \"tiXRnzU2X8BBNvHfW7ts5G07BKM=\");\n_c6 = PostPreviewDetails;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"PostItem\");\n$RefreshReg$(_c1, \"PostInfo\");\n$RefreshReg$(_c2, \"MovieThumb\");\n$RefreshReg$(_c3, \"UserThumb\");\n$RefreshReg$(_c4, \"HoverLink\");\n$RefreshReg$(_c5, \"BoldTextShadow\");\n$RefreshReg$(_c6, \"PostPreviewDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7OENBQUVRLElBQUksQ0FBQzJCLElBQUksQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR2pDM0Qsa0RBQUk7d0JBQUN1QyxJQUFJLEVBQUcsQ0FBTyxTQUFlLE9BQWJSLElBQUksQ0FBQzJCLElBQUksQ0FBQ1IsRUFBRTt3QkFBSVIsUUFBUTs4R0FDM0NyQixDQUFDO2tIQUNDYix3REFBYztnQ0FBQ3NDLFFBQVEsRUFBRWYsSUFBSSxDQUFDMkIsSUFBSSxDQUFDRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpELENBQUM7R0E3RGU5QixrQkFBa0I7TUFBbEJBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhYmxvaWRzLnRzeD8zMzBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGVsbGlwc2l6ZSBmcm9tIFwiZWxsaXBzaXplXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNvbW1lbnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBQb3N0U2NoZW1hIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuaW1wb3J0IHsgQ2lyY3VsYXJBdmF0YXIgfSBmcm9tIFwiLi91c2VyRGV0YWlsc1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG50eXBlIFNlY3Rpb25IZWFkZXJQcm9wcyA9IHtcbiAgY29sb3I/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkhlYWRlciA9IHN0eWxlZC5oMjxTZWN0aW9uSGVhZGVyUHJvcHM+YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5kYXJrfTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmbGV4OiAxO1xuICBjb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvciB8fCBDb2xvclBhbGV0dGUubGlnaHR9O1xuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUG9zdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMTEsICMwMDApO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmRhcmt9O1xuICBpbWcge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgyNSUpO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMzMzLCAjMzIyKTtcbiAgICBpbWcge1xuICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgxMDAlKTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0SW5mbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBmbGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgc21hbGwge1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIHNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1vdmllVGh1bWIgPSBzdHlsZWQuYWBcbiAgd2lkdGg6IDI1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBoNCB7XG4gICAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgd2lkdGg6IDh2bWF4O1xuICAgIGhlaWdodDogMTB2bWF4O1xuICAgIGRpdiB7XG4gICAgICBoNCB7XG4gICAgICAgIG1hcmdpbjogMC4zcmVtO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBVc2VyVGh1bWIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIC51c2VyLXRodW1iLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgLnVzZXItdGh1bWItaW5mbyB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhvdmVyTGluayA9IHN0eWxlZC5hYFxuICBmb250LXdlaWdodDogNjAwO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUud2FybmluZ307XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIb3ZlcmFibGVDb250YWluZXIgPSBzdHlsZWQuYWBcbiAgJjpob3ZlciA+ICoge1xuICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS53YXJuaW5nfTtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIEJvbGRUZXh0U2hhZG93UHJvcHMge1xuICBhbGlnbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEJvbGRUZXh0U2hhZG93ID0gc3R5bGVkLmg0PEJvbGRUZXh0U2hhZG93UHJvcHM+YFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggJHtDb2xvclBhbGV0dGUuZGFya2VyfSxcbiAgICAycHggMnB4IDEwcHggJHtDb2xvclBhbGV0dGUuZGFya2VyfTtcbiAgdGV4dC1hbGlnbjogJHsoeyBhbGlnbiB9KSA9PiBhbGlnbn07XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gUG9zdFByZXZpZXdEZXRhaWxzKHtcbiAgcG9zdCxcbiAgY29tbWVudENvdW50LFxufToge1xuICBwb3N0OiBQb3N0U2NoZW1hO1xuICBjb21tZW50Q291bnQ6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgW21heFRpdGxlTGVuZ3RoLCBzZXRNYXhUaXRsZUxlbmd0aF0gPSB1c2VTdGF0ZSgzMCk7XG5cbiAgY29uc3QgY2FsY3VsYXRlTWF4VGl0bGVMZW5ndGggPSAoKSA9PiB7XG4gICAgc2V0TWF4VGl0bGVMZW5ndGgod2luZG93LmlubmVyV2lkdGggPD0gMTIwMCA/IDE1IDogMzApO1xuICB9O1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjYWxjdWxhdGVNYXhUaXRsZUxlbmd0aCksXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQb3N0SXRlbT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWVzLyR7cG9zdC5Nb3ZpZS5pbWRiSWR9YH0gcGFzc0hyZWY+XG4gICAgICAgIDxNb3ZpZVRodW1iPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0Lk1vdmllLmltYWdlVVJMfVxuICAgICAgICAgICAgICBhbHQ9e2Ake3Bvc3QuTW92aWUudGl0bGV9IHBvc3RlcmB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJvbGRUZXh0U2hhZG93IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtlbGxpcHNpemUocG9zdC5Nb3ZpZS50aXRsZSwgbWF4VGl0bGVMZW5ndGgpfSAoe3Bvc3QuTW92aWUueWVhcn0pXG4gICAgICAgICAgICA8L0JvbGRUZXh0U2hhZG93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vdmllVGh1bWI+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBrZXk9e2Bwb3N0LWluZGV4LSR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgPFBvc3RJbmZvPlxuICAgICAgICAgIDxIb3Zlckxpbms+e2VsbGlwc2l6ZShwb3N0LnRpdGxlLCAzMCl9PC9Ib3Zlckxpbms+XG4gICAgICAgICAgPHNtYWxsPkNyZWF0ZWQgb24ge25ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KS50b1VUQ1N0cmluZygpfTwvc21hbGw+XG4gICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNvbW1lbnR9IC8+XG4gICAgICAgICAgICAmbmJzcDsmbmJzcDt7Y29tbWVudENvdW50IHx8IFwiTm9cIn0gY29tbWVudFxuICAgICAgICAgICAge2NvbW1lbnRDb3VudCA9PT0gMSA/IFwiXCIgOiBcInNcIn1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L1Bvc3RJbmZvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPFVzZXJUaHVtYj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRodW1iLWluZm9cIj5cbiAgICAgICAgICA8cD5DcmVhdGVkIGJ5OjwvcD5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7cG9zdC5Vc2VyLmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPEhvdmVyTGluaz57cG9zdC5Vc2VyLnVzZXJuYW1lfTwvSG92ZXJMaW5rPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHtwb3N0LlVzZXIuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8Q2lyY3VsYXJBdmF0YXIgaW1hZ2VVUkw9e3Bvc3QuVXNlci5hdmF0YXJVUkx9IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1VzZXJUaHVtYj5cbiAgICA8L1Bvc3RJdGVtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInN0eWxlZCIsImVsbGlwc2l6ZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDb21tZW50IiwiQ29sb3JQYWxldHRlIiwiQ2lyY3VsYXJBdmF0YXIiLCJTZWN0aW9uQ29udGFpbmVyIiwic2VjdGlvbiIsImdyYXkiLCJTZWN0aW9uSGVhZGVyIiwiaDIiLCJkYXJrIiwiY29sb3IiLCJsaWdodCIsIlBvc3RJdGVtIiwiZGl2IiwiUG9zdEluZm8iLCJNb3ZpZVRodW1iIiwiYSIsIlVzZXJUaHVtYiIsIkhvdmVyTGluayIsIndhcm5pbmciLCJIb3ZlcmFibGVDb250YWluZXIiLCJCb2xkVGV4dFNoYWRvdyIsImg0IiwiZGFya2VyIiwiYWxpZ24iLCJQb3N0UHJldmlld0RldGFpbHMiLCJwb3N0IiwiY29tbWVudENvdW50IiwibWF4VGl0bGVMZW5ndGgiLCJzZXRNYXhUaXRsZUxlbmd0aCIsImNhbGN1bGF0ZU1heFRpdGxlTGVuZ3RoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJocmVmIiwiTW92aWUiLCJpbWRiSWQiLCJwYXNzSHJlZiIsImxheW91dCIsIm9iamVjdEZpdCIsInNyYyIsImltYWdlVVJMIiwiYWx0IiwidGl0bGUiLCJ5ZWFyIiwiaWQiLCJzbWFsbCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b1VUQ1N0cmluZyIsImljb24iLCJjbGFzc05hbWUiLCJwIiwiVXNlciIsInVzZXJuYW1lIiwiYXZhdGFyVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tabloids.tsx\n");

/***/ })

});
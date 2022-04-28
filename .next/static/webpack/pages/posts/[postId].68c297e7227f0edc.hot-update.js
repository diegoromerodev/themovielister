"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./components/postDetails.tsx":
/*!************************************!*\
  !*** ./components/postDetails.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostDetailsContainer\": function() { return /* binding */ PostDetailsContainer; },\n/* harmony export */   \"MovieDetailsContainer\": function() { return /* binding */ MovieDetailsContainer; },\n/* harmony export */   \"ArtPostTitle\": function() { return /* binding */ ArtPostTitle; },\n/* harmony export */   \"CommentCreationContainer\": function() { return /* binding */ CommentCreationContainer; },\n/* harmony export */   \"SubmitButton\": function() { return /* binding */ SubmitButton; },\n/* harmony export */   \"CommentTextBox\": function() { return /* binding */ CommentTextBox; },\n/* harmony export */   \"UserInfoPostHeader\": function() { return /* binding */ UserInfoPostHeader; },\n/* harmony export */   \"CommentCreator\": function() { return /* binding */ CommentCreator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 1rem;\\n  align-self: center;\\n  border-radius: 2rem;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  h1 {\\n    color: \",\n        \";\\n    text-transform: lowercase;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    letter-spacing: -0.1rem;\\n    text-shadow: 0 0 4rem \",\n        \";\\n    text-align: center;\\n  }\\n  .post-info-link {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  padding: 1rem;\\n  gap: 0.5rem;\\n  position: relative;\\n  .under-comment-info {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 100%;\\n    align-items: center;\\n    button {\\n      font-family: \\\"Inter\\\";\\n    }\\n    .username-logged {\\n      font-weight: 700;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 0.5rem 1rem;\\n  border: 1px solid \",\n        \";\\n  color: \",\n        \";\\n  background-color: \",\n        \";\\n  font-weight: 600;\\n  cursor: pointer;\\n  font-family: \\\"Inter\\\";\\n  :hover {\\n    background-color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n  border: 1px solid \",\n        \";\\n  padding: 10px;\\n  width: 100%;\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background-color: \",\n        \"aa;\\n  top: 0;\\n  left: 0;\\n  display: grid;\\n  place-items: center;\\n  backdrop-filter: blur(5px);\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar PostDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].article.withConfig({\n    displayName: \"postDetails__PostDetailsContainer\",\n    componentId: \"sc-13601039-0\"\n})(_templateObject());\nvar MovieDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__MovieDetailsContainer\",\n    componentId: \"sc-13601039-1\"\n})(_templateObject1());\nvar ArtPostTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__ArtPostTitle\",\n    componentId: \"sc-13601039-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\nvar CommentCreationContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].form.withConfig({\n    displayName: \"postDetails__CommentCreationContainer\",\n    componentId: \"sc-13601039-3\"\n})(_templateObject3());\n_c = CommentCreationContainer;\nvar SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button.withConfig({\n    displayName: \"postDetails__SubmitButton\",\n    componentId: \"sc-13601039-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dark);\n_c1 = SubmitButton;\nvar CommentTextBox = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].textarea.withConfig({\n    displayName: \"postDetails__CommentTextBox\",\n    componentId: \"sc-13601039-5\"\n})(_templateObject5(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c2 = CommentTextBox;\nfunction UserInfoPostHeader(param) {\n    var user = param.user, postCount = param.postCount;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.UserDetailsContainer, {\n        role: user.role,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-avatar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: user.avatarURL,\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-info-post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(user.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_6__.HoverLink, {\n                            children: user.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.UserRole, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: user.role\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Posts: \",\n                            postCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Age: \",\n                            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.calculateAge)(new Date(user.createdAt))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this));\n}\n_c3 = UserInfoPostHeader;\nvar UnauthenticatedComment = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__UnauthenticatedComment\",\n    componentId: \"sc-13601039-6\"\n})(_templateObject6(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray);\n_c4 = UnauthenticatedComment;\nfunction CommentCreator(param1) {\n    var user = param1.user, handleSubmit = param1.handleSubmit;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), commentText = ref[0], setCommentText = ref[1];\n    if (!user) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommentCreationContainer, {\n        onSubmit: function(e) {\n            return handleSubmit(e, commentText);\n        },\n        children: [\n            !(user === null || user === void 0 ? void 0 : user.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UnauthenticatedComment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/auth/login\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_6__.HoverLink, {\n                        children: \"Log in to post a comment\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommentTextBox, {\n                value: commentText,\n                onChange: function(param) {\n                    var value = param.target.value;\n                    return setCommentText(value);\n                },\n                placeholder: \"Enter your response here...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"under-comment-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Logged in as:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"username-logged\",\n                                children: (user === null || user === void 0 ? void 0 : user.username) || \"Joe Smith\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitButton, {\n                        type: \"submit\",\n                        children: \"Submit reply\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, this));\n}\n_s(CommentCreator, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c5 = CommentCreator;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"CommentCreationContainer\");\n$RefreshReg$(_c1, \"SubmitButton\");\n$RefreshReg$(_c2, \"CommentTextBox\");\n$RefreshReg$(_c3, \"UserInfoPostHeader\");\n$RefreshReg$(_c4, \"UnauthenticatedComment\");\n$RefreshReg$(_c5, \"CommentCreator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3REZXRhaWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0Y7QUFDZTtBQUNMO0FBRUs7QUFDTTtBQUNYO0FBRXdCOzs7Ozs7Ozs7Ozs7O1FBRVgsQ0FHbkQ7Ozs7Ozs7OztRQUVnRCxDQUVoRDs7Ozs7Ozs7O1FBRXVDLENBUzVCO1FBQXFCLENBS047UUFBcUIsQ0FRL0M7Ozs7Ozs7OztRQUVvRCxDQW9CcEQ7Ozs7Ozs7OztRQUUwQyxDQUV0QjtRQUFxQixDQUNoQztRQUFxQixDQUNWO1FBQW9CLENBS2xCO1FBQW9CLENBRTFDOzs7Ozs7Ozs7UUFFOEMsQ0FFMUI7UUFBb0IsQ0FHL0I7UUFBcUIsQ0FDOUI7Ozs7Ozs7OztRQTRCMEMsQ0FJdEI7UUFBb0IsQ0FNeEM7Ozs7Ozs7O0FBaEhPLEdBQUssQ0FBQ1Msb0JBQW9CLEdBQUdOLDRFQUFjOzs7O0FBSzNDLEdBQUssQ0FBQ1EscUJBQXFCLEdBQUdSLHdFQUFVOzs7O0FBSXhDLEdBQUssQ0FBQ1UsWUFBWSxHQUFHVix3RUFBVTs7O3VCQVN6QkUsa0VBQWtCLEVBS0hBLGtFQUFrQjtBQVV2QyxHQUFLLENBQUNVLHdCQUF3QixHQUFHWix5RUFBVzs7OztLQUF0Q1ksd0JBQXdCO0FBc0I5QixHQUFLLENBQUNFLFlBQVksR0FBR2QsMkVBQWE7Ozt1QkFFbkJFLGtFQUFrQixFQUM3QkEsa0VBQWtCLEVBQ1BBLGlFQUFpQixFQUtmQSxpRUFBaUI7TUFUNUJZLFlBQVk7QUFhbEIsR0FBSyxDQUFDSSxjQUFjLEdBQUdsQiw2RUFBZTs7O3VCQUV2QkUsaUVBQWlCLEVBRzVCQSxrRUFBa0I7TUFMaEJnQixjQUFjO0FBUXBCLFNBQVNFLGtCQUFrQixDQUFDLEtBTWxDLEVBQUUsQ0FBQztRQUxGQyxJQUFJLEdBRDZCLEtBTWxDLENBTENBLElBQUksRUFDSkMsU0FBUyxHQUZ3QixLQU1sQyxDQUpDQSxTQUFTO0lBS1QsTUFBTSw2RUFDSGxCLDhEQUFvQjtRQUFDbUIsSUFBSSxFQUFFRixJQUFJLENBQUNFLElBQUk7O3dGQUNsQ2QsQ0FBRztnQkFBQ2UsU0FBUyxFQUFDLENBQWE7c0dBQ3pCM0IsbURBQUs7b0JBQUM0QixHQUFHLEVBQUVKLElBQUksQ0FBQ0ssU0FBUztvQkFBRUMsTUFBTSxFQUFDLENBQU07b0JBQUNDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7Ozs7Ozt3RkFFNURuQixDQUFHO2dCQUFDZSxTQUFTLEVBQUMsQ0FBZ0I7O2dHQUM1QjFCLGtEQUFJO3dCQUFDK0IsSUFBSSxFQUFHLENBQU8sU0FBVSxPQUFSUixJQUFJLENBQUNTLEVBQUU7d0JBQUlDLFFBQVE7OEdBQ3RDNUIsZ0RBQVM7c0NBQUVrQixJQUFJLENBQUNXLFFBQVE7Ozs7Ozs7Ozs7O2dHQUUxQjNCLGtEQUFROzhHQUNONEIsQ0FBQztzQ0FBRVosSUFBSSxDQUFDRSxJQUFJOzs7Ozs7Ozs7OztnR0FFZFUsQ0FBQzs7NEJBQUMsQ0FBTzs0QkFBQ1gsU0FBUzs7Ozs7OztnR0FDbkJXLENBQUM7OzRCQUFDLENBQUs7NEJBQUNoQyx3REFBWSxDQUFDLEdBQUcsQ0FBQ2lDLElBQUksQ0FBQ2IsSUFBSSxDQUFDYyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJELENBQUM7TUF4QmVmLGtCQUFrQjtBQTBCbEMsR0FBSyxDQUFDZ0Isc0JBQXNCLEdBQUdwQyx3RUFBVTs7O3VCQUluQkUsaUVBQWlCO01BSmpDa0Msc0JBQXNCO0FBWXJCLFNBQVNDLGNBQWMsQ0FBQyxNQU05QixFQUFFLENBQUM7UUFMRmhCLElBQUksR0FEeUIsTUFNOUIsQ0FMQ0EsSUFBSSxFQUNKaUIsWUFBWSxHQUZpQixNQU05QixDQUpDQSxZQUFZOztJQUtaLEdBQUssQ0FBaUN2QyxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUExQ3dDLFdBQVcsR0FBb0J4QyxHQUFZLEtBQTlCeUMsY0FBYyxHQUFJekMsR0FBWTtJQUNsRCxFQUFFLEdBQUdzQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDdEIsTUFBTSw2RUFDSFQsd0JBQXdCO1FBQUM2QixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDO1lBQUtKLE1BQU0sQ0FBTkEsWUFBWSxDQUFDSSxDQUFDLEVBQUVILFdBQVc7OztjQUNsRWxCLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBRVcsUUFBUSxpRkFDYkksc0JBQXNCO3NHQUNwQnRDLGtEQUFJO29CQUFDK0IsSUFBSSxFQUFDLENBQWE7b0JBQUNFLFFBQVE7MEdBQzlCNUIsZ0RBQVM7a0NBQUMsQ0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSXhDZSxjQUFjO2dCQUNieUIsS0FBSyxFQUFFSixXQUFXO2dCQUNsQkssUUFBUSxFQUFFLFFBQVE7d0JBQUtELEtBQUssU0FBZkUsTUFBTSxDQUFJRixLQUFLO29CQUFTSCxNQUFNLENBQU5BLGNBQWMsQ0FBQ0csS0FBSzs7Z0JBQ3pERyxXQUFXLEVBQUMsQ0FBNkI7Ozs7Ozt3RkFFMUNyQyxDQUFHO2dCQUFDZSxTQUFTLEVBQUMsQ0FBb0I7O2dHQUNoQ1MsQ0FBQzs7NEJBQUMsQ0FDWTs0QkFBQyxDQUFHO3dHQUNoQmMsQ0FBSTtnQ0FBQ3ZCLFNBQVMsRUFBQyxDQUFpQjsyQ0FDOUJILElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBRVcsUUFBUSxLQUFJLENBQVc7Ozs7Ozs7Ozs7OztnR0FHakNsQixZQUFZO3dCQUFDa0MsSUFBSSxFQUFDLENBQVE7a0NBQUMsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhELENBQUM7R0FsQ2VYLGNBQWM7TUFBZEEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3REZXRhaWxzLnRzeD9jMjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVBZ2UgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5pbXBvcnQgeyBIb3ZlckxpbmsgfSBmcm9tIFwiLi90YWJsb2lkc1wiO1xuaW1wb3J0IHsgUHJpbWFyeVRoaW5IZWFkZXIsIFNlY29uZGFyeVBhcmFncmFwaCB9IGZyb20gXCIuL3R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IFVzZXJEZXRhaWxzQ29udGFpbmVyLCBVc2VyUm9sZSB9IGZyb20gXCIuL3VzZXJEZXRhaWxzXCI7XG5cbmV4cG9ydCBjb25zdCBQb3N0RGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5hcnRpY2xlYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1vdmllRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQXJ0UG9zdFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGgxIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFyZW07XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA0cmVtICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnBvc3QtaW5mby1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29tbWVudENyZWF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdhcDogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC51bmRlci1jb21tZW50LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gICAgfVxuICAgIC51c2VybmFtZS1sb2dnZWQge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmRhcmt9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29tbWVudFRleHRCb3ggPSBzdHlsZWQudGV4dGFyZWFgXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gVXNlckluZm9Qb3N0SGVhZGVyKHtcbiAgdXNlcixcbiAgcG9zdENvdW50LFxufToge1xuICB1c2VyOiBVc2VyU2NoZW1hO1xuICBwb3N0Q291bnQ6IG51bWJlcjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8VXNlckRldGFpbHNDb250YWluZXIgcm9sZT17dXNlci5yb2xlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIj5cbiAgICAgICAgPEltYWdlIHNyYz17dXNlci5hdmF0YXJVUkx9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvLXBvc3RcIj5cbiAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPEhvdmVyTGluaz57dXNlci51c2VybmFtZX08L0hvdmVyTGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8VXNlclJvbGU+XG4gICAgICAgICAgPHA+e3VzZXIucm9sZX08L3A+XG4gICAgICAgIDwvVXNlclJvbGU+XG4gICAgICAgIDxwPlBvc3RzOiB7cG9zdENvdW50fTwvcD5cbiAgICAgICAgPHA+QWdlOiB7Y2FsY3VsYXRlQWdlKG5ldyBEYXRlKHVzZXIuY3JlYXRlZEF0KSl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9Vc2VyRGV0YWlsc0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgVW5hdXRoZW50aWNhdGVkQ29tbWVudCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX1hYTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50Q3JlYXRvcih7XG4gIHVzZXIsXG4gIGhhbmRsZVN1Ym1pdCxcbn06IHtcbiAgdXNlcjogVXNlclNjaGVtYTtcbiAgaGFuZGxlU3VibWl0OiAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4sIGJvZHk6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8Q29tbWVudENyZWF0aW9uQ29udGFpbmVyIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUsIGNvbW1lbnRUZXh0KX0+XG4gICAgICB7IXVzZXI/LnVzZXJuYW1lICYmIChcbiAgICAgICAgPFVuYXV0aGVudGljYXRlZENvbW1lbnQ+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8SG92ZXJMaW5rPkxvZyBpbiB0byBwb3N0IGEgY29tbWVudDwvSG92ZXJMaW5rPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9VbmF1dGhlbnRpY2F0ZWRDb21tZW50PlxuICAgICAgKX1cbiAgICAgIDxDb21tZW50VGV4dEJveFxuICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRDb21tZW50VGV4dCh2YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciByZXNwb25zZSBoZXJlLi4uXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVyLWNvbW1lbnQtaW5mb1wiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb2dnZWQgaW4gYXM6e1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJuYW1lLWxvZ2dlZFwiPlxuICAgICAgICAgICAge3VzZXI/LnVzZXJuYW1lIHx8IFwiSm9lIFNtaXRoXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdCByZXBseTwvU3VibWl0QnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db21tZW50Q3JlYXRpb25Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjYWxjdWxhdGVBZ2UiLCJDb2xvclBhbGV0dGUiLCJIb3ZlckxpbmsiLCJVc2VyRGV0YWlsc0NvbnRhaW5lciIsIlVzZXJSb2xlIiwiUG9zdERldGFpbHNDb250YWluZXIiLCJhcnRpY2xlIiwiTW92aWVEZXRhaWxzQ29udGFpbmVyIiwiZGl2IiwiQXJ0UG9zdFRpdGxlIiwibGlnaHQiLCJDb21tZW50Q3JlYXRpb25Db250YWluZXIiLCJmb3JtIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiZ3JheSIsImRhcmsiLCJDb21tZW50VGV4dEJveCIsInRleHRhcmVhIiwiVXNlckluZm9Qb3N0SGVhZGVyIiwidXNlciIsInBvc3RDb3VudCIsInJvbGUiLCJjbGFzc05hbWUiLCJzcmMiLCJhdmF0YXJVUkwiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJocmVmIiwiaWQiLCJwYXNzSHJlZiIsInVzZXJuYW1lIiwicCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJVbmF1dGhlbnRpY2F0ZWRDb21tZW50IiwiQ29tbWVudENyZWF0b3IiLCJoYW5kbGVTdWJtaXQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0Iiwib25TdWJtaXQiLCJlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwic3BhbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/postDetails.tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostDetailsContainer\": function() { return /* binding */ PostDetailsContainer; },\n/* harmony export */   \"MovieDetailsContainer\": function() { return /* binding */ MovieDetailsContainer; },\n/* harmony export */   \"ArtPostTitle\": function() { return /* binding */ ArtPostTitle; },\n/* harmony export */   \"CommentCreationContainer\": function() { return /* binding */ CommentCreationContainer; },\n/* harmony export */   \"SubmitButton\": function() { return /* binding */ SubmitButton; },\n/* harmony export */   \"CommentTextBox\": function() { return /* binding */ CommentTextBox; },\n/* harmony export */   \"UserInfoPostHeader\": function() { return /* binding */ UserInfoPostHeader; },\n/* harmony export */   \"CommentCreator\": function() { return /* binding */ CommentCreator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 1rem;\\n  align-self: center;\\n  border-radius: 2rem;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  h1 {\\n    color: \",\n        \";\\n    text-transform: lowercase;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    letter-spacing: -0.1rem;\\n    text-shadow: 0 0 4rem \",\n        \";\\n    text-align: center;\\n  }\\n  .post-info-link {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  padding: 1rem;\\n  gap: 0.5rem;\\n  position: relative;\\n  .under-comment-info {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 100%;\\n    align-items: center;\\n    button {\\n      font-family: \\\"Inter\\\";\\n    }\\n    .username-logged {\\n      font-weight: 700;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 0.5rem 1rem;\\n  border: 1px solid \",\n        \";\\n  color: \",\n        \";\\n  background-color: \",\n        \";\\n  font-weight: 600;\\n  cursor: pointer;\\n  font-family: \\\"Inter\\\";\\n  :hover {\\n    background-color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n  border: 1px solid \",\n        \";\\n  padding: 10px;\\n  width: 100%;\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background-color: \",\n        \";\\n  border: 1px solid red;\\n  top: 0;\\n  left: 0;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar PostDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].article.withConfig({\n    displayName: \"postDetails__PostDetailsContainer\",\n    componentId: \"sc-8a5625ee-0\"\n})(_templateObject());\nvar MovieDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__MovieDetailsContainer\",\n    componentId: \"sc-8a5625ee-1\"\n})(_templateObject1());\nvar ArtPostTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__ArtPostTitle\",\n    componentId: \"sc-8a5625ee-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\nvar CommentCreationContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].form.withConfig({\n    displayName: \"postDetails__CommentCreationContainer\",\n    componentId: \"sc-8a5625ee-3\"\n})(_templateObject3());\n_c = CommentCreationContainer;\nvar SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button.withConfig({\n    displayName: \"postDetails__SubmitButton\",\n    componentId: \"sc-8a5625ee-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dark);\n_c1 = SubmitButton;\nvar CommentTextBox = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].textarea.withConfig({\n    displayName: \"postDetails__CommentTextBox\",\n    componentId: \"sc-8a5625ee-5\"\n})(_templateObject5(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c2 = CommentTextBox;\nfunction UserInfoPostHeader(param) {\n    var user = param.user, postCount = param.postCount;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.UserDetailsContainer, {\n        role: user.role,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-avatar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: user.avatarURL,\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-info-post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(user.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_6__.HoverLink, {\n                            children: user.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.UserRole, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: user.role\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Posts: \",\n                            postCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Age: \",\n                            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.calculateAge)(new Date(user.createdAt))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this));\n}\n_c3 = UserInfoPostHeader;\nvar UnauthenticatedComment = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__UnauthenticatedComment\",\n    componentId: \"sc-8a5625ee-6\"\n})(_templateObject6(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c4 = UnauthenticatedComment;\nfunction CommentCreator(param1) {\n    var user = param1.user, handleSubmit = param1.handleSubmit;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), commentText = ref[0], setCommentText = ref[1];\n    if (!user) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommentCreationContainer, {\n        onSubmit: function(e) {\n            return handleSubmit(e, commentText);\n        },\n        children: [\n            !(user === null || user === void 0 ? void 0 : user.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UnauthenticatedComment, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 134,\n                columnNumber: 27\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommentTextBox, {\n                value: commentText,\n                onChange: function(param) {\n                    var value = param.target.value;\n                    return setCommentText(value);\n                },\n                placeholder: \"Enter your response here...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"under-comment-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Logged in as:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"username-logged\",\n                                children: (user === null || user === void 0 ? void 0 : user.username) || \"Joe Smith\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitButton, {\n                        type: \"submit\",\n                        children: \"Submit reply\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 133,\n        columnNumber: 5\n    }, this));\n}\n_s(CommentCreator, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c5 = CommentCreator;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"CommentCreationContainer\");\n$RefreshReg$(_c1, \"SubmitButton\");\n$RefreshReg$(_c2, \"CommentTextBox\");\n$RefreshReg$(_c3, \"UserInfoPostHeader\");\n$RefreshReg$(_c4, \"UnauthenticatedComment\");\n$RefreshReg$(_c5, \"CommentCreator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3REZXRhaWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0Y7QUFDZTtBQUNMO0FBRUs7QUFDTTtBQUNYO0FBQ3dCOzs7Ozs7Ozs7Ozs7O1FBRVgsQ0FHbkQ7Ozs7Ozs7OztRQUVnRCxDQUVoRDs7Ozs7Ozs7O1FBRXVDLENBUzVCO1FBQXFCLENBS047UUFBcUIsQ0FRL0M7Ozs7Ozs7OztRQUVvRCxDQW9CcEQ7Ozs7Ozs7OztRQUUwQyxDQUV0QjtRQUFxQixDQUNoQztRQUFxQixDQUNWO1FBQW9CLENBS2xCO1FBQW9CLENBRTFDOzs7Ozs7Ozs7UUFFOEMsQ0FFMUI7UUFBb0IsQ0FHL0I7UUFBcUIsQ0FDOUI7Ozs7Ozs7OztRQTRCMEMsQ0FJdEI7UUFBcUIsQ0FJekM7Ozs7Ozs7O0FBOUdPLEdBQUssQ0FBQ1Msb0JBQW9CLEdBQUdOLDRFQUFjOzs7O0FBSzNDLEdBQUssQ0FBQ1EscUJBQXFCLEdBQUdSLHdFQUFVOzs7O0FBSXhDLEdBQUssQ0FBQ1UsWUFBWSxHQUFHVix3RUFBVTs7O3VCQVN6QkUsa0VBQWtCLEVBS0hBLGtFQUFrQjtBQVV2QyxHQUFLLENBQUNVLHdCQUF3QixHQUFHWix5RUFBVzs7OztLQUF0Q1ksd0JBQXdCO0FBc0I5QixHQUFLLENBQUNFLFlBQVksR0FBR2QsMkVBQWE7Ozt1QkFFbkJFLGtFQUFrQixFQUM3QkEsa0VBQWtCLEVBQ1BBLGlFQUFpQixFQUtmQSxpRUFBaUI7TUFUNUJZLFlBQVk7QUFhbEIsR0FBSyxDQUFDSSxjQUFjLEdBQUdsQiw2RUFBZTs7O3VCQUV2QkUsaUVBQWlCLEVBRzVCQSxrRUFBa0I7TUFMaEJnQixjQUFjO0FBUXBCLFNBQVNFLGtCQUFrQixDQUFDLEtBTWxDLEVBQUUsQ0FBQztRQUxGQyxJQUFJLEdBRDZCLEtBTWxDLENBTENBLElBQUksRUFDSkMsU0FBUyxHQUZ3QixLQU1sQyxDQUpDQSxTQUFTO0lBS1QsTUFBTSw2RUFDSGxCLDhEQUFvQjtRQUFDbUIsSUFBSSxFQUFFRixJQUFJLENBQUNFLElBQUk7O3dGQUNsQ2QsQ0FBRztnQkFBQ2UsU0FBUyxFQUFDLENBQWE7c0dBQ3pCM0IsbURBQUs7b0JBQUM0QixHQUFHLEVBQUVKLElBQUksQ0FBQ0ssU0FBUztvQkFBRUMsTUFBTSxFQUFDLENBQU07b0JBQUNDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7Ozs7Ozt3RkFFNURuQixDQUFHO2dCQUFDZSxTQUFTLEVBQUMsQ0FBZ0I7O2dHQUM1QjFCLGtEQUFJO3dCQUFDK0IsSUFBSSxFQUFHLENBQU8sU0FBVSxPQUFSUixJQUFJLENBQUNTLEVBQUU7d0JBQUlDLFFBQVE7OEdBQ3RDNUIsZ0RBQVM7c0NBQUVrQixJQUFJLENBQUNXLFFBQVE7Ozs7Ozs7Ozs7O2dHQUUxQjNCLGtEQUFROzhHQUNONEIsQ0FBQztzQ0FBRVosSUFBSSxDQUFDRSxJQUFJOzs7Ozs7Ozs7OztnR0FFZFUsQ0FBQzs7NEJBQUMsQ0FBTzs0QkFBQ1gsU0FBUzs7Ozs7OztnR0FDbkJXLENBQUM7OzRCQUFDLENBQUs7NEJBQUNoQyx3REFBWSxDQUFDLEdBQUcsQ0FBQ2lDLElBQUksQ0FBQ2IsSUFBSSxDQUFDYyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJELENBQUM7TUF4QmVmLGtCQUFrQjtBQTBCbEMsR0FBSyxDQUFDZ0Isc0JBQXNCLEdBQUdwQyx3RUFBVTs7O3VCQUluQkUsa0VBQWtCO01BSmxDa0Msc0JBQXNCO0FBVXJCLFNBQVNDLGNBQWMsQ0FBQyxNQU05QixFQUFFLENBQUM7UUFMRmhCLElBQUksR0FEeUIsTUFNOUIsQ0FMQ0EsSUFBSSxFQUNKaUIsWUFBWSxHQUZpQixNQU05QixDQUpDQSxZQUFZOztJQUtaLEdBQUssQ0FBaUN2QyxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUExQ3dDLFdBQVcsR0FBb0J4QyxHQUFZLEtBQTlCeUMsY0FBYyxHQUFJekMsR0FBWTtJQUNsRCxFQUFFLEdBQUdzQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDdEIsTUFBTSw2RUFDSFQsd0JBQXdCO1FBQUM2QixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDO1lBQUtKLE1BQU0sQ0FBTkEsWUFBWSxDQUFDSSxDQUFDLEVBQUVILFdBQVc7OztjQUNsRWxCLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBRVcsUUFBUSxpRkFBS0ksc0JBQXNCOzs7Ozt3RkFDMUNsQixjQUFjO2dCQUNieUIsS0FBSyxFQUFFSixXQUFXO2dCQUNsQkssUUFBUSxFQUFFLFFBQVE7d0JBQUtELEtBQUssU0FBZkUsTUFBTSxDQUFJRixLQUFLO29CQUFTSCxNQUFNLENBQU5BLGNBQWMsQ0FBQ0csS0FBSzs7Z0JBQ3pERyxXQUFXLEVBQUMsQ0FBNkI7Ozs7Ozt3RkFFMUNyQyxDQUFHO2dCQUFDZSxTQUFTLEVBQUMsQ0FBb0I7O2dHQUNoQ1MsQ0FBQzs7NEJBQUMsQ0FDWTs0QkFBQyxDQUFHO3dHQUNoQmMsQ0FBSTtnQ0FBQ3ZCLFNBQVMsRUFBQyxDQUFpQjsyQ0FDOUJILElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBRVcsUUFBUSxLQUFJLENBQVc7Ozs7Ozs7Ozs7OztnR0FHakNsQixZQUFZO3dCQUFDa0MsSUFBSSxFQUFDLENBQVE7a0NBQUMsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhELENBQUM7R0E1QmVYLGNBQWM7TUFBZEEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3REZXRhaWxzLnRzeD9jMjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVBZ2UgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5pbXBvcnQgeyBIb3ZlckxpbmsgfSBmcm9tIFwiLi90YWJsb2lkc1wiO1xuaW1wb3J0IHsgVXNlckRldGFpbHNDb250YWluZXIsIFVzZXJSb2xlIH0gZnJvbSBcIi4vdXNlckRldGFpbHNcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3REZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5leHBvcnQgY29uc3QgTW92aWVEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcnRQb3N0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaDEge1xuICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDRyZW0gJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucG9zdC1pbmZvLWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb21tZW50Q3JlYXRpb25Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnVuZGVyLWNvbW1lbnQtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBidXR0b24ge1xuICAgICAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgICB9XG4gICAgLnVzZXJuYW1lLWxvZ2dlZCB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZGFya307XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb21tZW50VGV4dEJveCA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VySW5mb1Bvc3RIZWFkZXIoe1xuICB1c2VyLFxuICBwb3N0Q291bnQsXG59OiB7XG4gIHVzZXI6IFVzZXJTY2hlbWE7XG4gIHBvc3RDb3VudDogbnVtYmVyO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxVc2VyRGV0YWlsc0NvbnRhaW5lciByb2xlPXt1c2VyLnJvbGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyLmF2YXRhclVSTH0gbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm8tcG9zdFwiPlxuICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7dXNlci5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICA8SG92ZXJMaW5rPnt1c2VyLnVzZXJuYW1lfTwvSG92ZXJMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxVc2VyUm9sZT5cbiAgICAgICAgICA8cD57dXNlci5yb2xlfTwvcD5cbiAgICAgICAgPC9Vc2VyUm9sZT5cbiAgICAgICAgPHA+UG9zdHM6IHtwb3N0Q291bnR9PC9wPlxuICAgICAgICA8cD5BZ2U6IHtjYWxjdWxhdGVBZ2UobmV3IERhdGUodXNlci5jcmVhdGVkQXQpKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L1VzZXJEZXRhaWxzQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBVbmF1dGhlbnRpY2F0ZWRDb21tZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbW1lbnRDcmVhdG9yKHtcbiAgdXNlcixcbiAgaGFuZGxlU3VibWl0LFxufToge1xuICB1c2VyOiBVc2VyU2NoZW1hO1xuICBoYW5kbGVTdWJtaXQ6IChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PiwgYm9keTogc3RyaW5nKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxDb21tZW50Q3JlYXRpb25Db250YWluZXIgb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSwgY29tbWVudFRleHQpfT5cbiAgICAgIHshdXNlcj8udXNlcm5hbWUgJiYgPFVuYXV0aGVudGljYXRlZENvbW1lbnQgLz59XG4gICAgICA8Q29tbWVudFRleHRCb3hcbiAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxuICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0Q29tbWVudFRleHQodmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcmVzcG9uc2UgaGVyZS4uLlwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlci1jb21tZW50LWluZm9cIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9nZ2VkIGluIGFzOntcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VybmFtZS1sb2dnZWRcIj5cbiAgICAgICAgICAgIHt1c2VyPy51c2VybmFtZSB8fCBcIkpvZSBTbWl0aFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgcmVwbHk8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29tbWVudENyZWF0aW9uQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVN0YXRlIiwic3R5bGVkIiwiY2FsY3VsYXRlQWdlIiwiQ29sb3JQYWxldHRlIiwiSG92ZXJMaW5rIiwiVXNlckRldGFpbHNDb250YWluZXIiLCJVc2VyUm9sZSIsIlBvc3REZXRhaWxzQ29udGFpbmVyIiwiYXJ0aWNsZSIsIk1vdmllRGV0YWlsc0NvbnRhaW5lciIsImRpdiIsIkFydFBvc3RUaXRsZSIsImxpZ2h0IiwiQ29tbWVudENyZWF0aW9uQ29udGFpbmVyIiwiZm9ybSIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsImdyYXkiLCJkYXJrIiwiQ29tbWVudFRleHRCb3giLCJ0ZXh0YXJlYSIsIlVzZXJJbmZvUG9zdEhlYWRlciIsInVzZXIiLCJwb3N0Q291bnQiLCJyb2xlIiwiY2xhc3NOYW1lIiwic3JjIiwiYXZhdGFyVVJMIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaHJlZiIsImlkIiwicGFzc0hyZWYiLCJ1c2VybmFtZSIsInAiLCJEYXRlIiwiY3JlYXRlZEF0IiwiVW5hdXRoZW50aWNhdGVkQ29tbWVudCIsIkNvbW1lbnRDcmVhdG9yIiwiaGFuZGxlU3VibWl0IiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsIm9uU3VibWl0IiwiZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNwYW4iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postDetails.tsx\n");

/***/ })

});
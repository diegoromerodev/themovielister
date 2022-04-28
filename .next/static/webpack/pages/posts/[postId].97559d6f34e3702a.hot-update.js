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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostDetailsContainer\": function() { return /* binding */ PostDetailsContainer; },\n/* harmony export */   \"MovieDetailsContainer\": function() { return /* binding */ MovieDetailsContainer; },\n/* harmony export */   \"ArtPostTitle\": function() { return /* binding */ ArtPostTitle; },\n/* harmony export */   \"CommentCreationContainer\": function() { return /* binding */ CommentCreationContainer; },\n/* harmony export */   \"SubmitButton\": function() { return /* binding */ SubmitButton; },\n/* harmony export */   \"CommentTextBox\": function() { return /* binding */ CommentTextBox; },\n/* harmony export */   \"UserInfoPostHeader\": function() { return /* binding */ UserInfoPostHeader; },\n/* harmony export */   \"CommentCreator\": function() { return /* binding */ CommentCreator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 1rem;\\n  align-self: center;\\n  border-radius: 2rem;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  h1 {\\n    color: \",\n        \";\\n    text-transform: lowercase;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    letter-spacing: -0.1rem;\\n    text-shadow: 0 0 4rem \",\n        \";\\n    text-align: center;\\n  }\\n  .post-info-link {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  padding: 1rem;\\n  gap: 0.5rem;\\n  position: relative;\\n  .under-comment-info {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 100%;\\n    align-items: center;\\n    button {\\n      font-family: \\\"Inter\\\";\\n    }\\n    .username-logged {\\n      font-weight: 700;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 0.5rem 1rem;\\n  border: 1px solid \",\n        \";\\n  color: \",\n        \";\\n  background-color: \",\n        \";\\n  font-weight: 600;\\n  cursor: pointer;\\n  font-family: \\\"Inter\\\";\\n  :hover {\\n    background-color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n  border: 1px solid \",\n        \";\\n  padding: 10px;\\n  width: 100%;\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background-color: red;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar PostDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].article.withConfig({\n    displayName: \"postDetails__PostDetailsContainer\",\n    componentId: \"sc-6047c90d-0\"\n})(_templateObject());\nvar MovieDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__MovieDetailsContainer\",\n    componentId: \"sc-6047c90d-1\"\n})(_templateObject1());\nvar ArtPostTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__ArtPostTitle\",\n    componentId: \"sc-6047c90d-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\nvar CommentCreationContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].form.withConfig({\n    displayName: \"postDetails__CommentCreationContainer\",\n    componentId: \"sc-6047c90d-3\"\n})(_templateObject3());\n_c = CommentCreationContainer;\nvar SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button.withConfig({\n    displayName: \"postDetails__SubmitButton\",\n    componentId: \"sc-6047c90d-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dark);\n_c1 = SubmitButton;\nvar CommentTextBox = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].textarea.withConfig({\n    displayName: \"postDetails__CommentTextBox\",\n    componentId: \"sc-6047c90d-5\"\n})(_templateObject5(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c2 = CommentTextBox;\nfunction UserInfoPostHeader(param) {\n    var user = param.user, postCount = param.postCount;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.UserDetailsContainer, {\n        role: user.role,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-avatar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: user.avatarURL,\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-info-post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(user.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_6__.HoverLink, {\n                            children: user.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_7__.UserRole, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: user.role\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Posts: \",\n                            postCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Age: \",\n                            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.calculateAge)(new Date(user.createdAt))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this));\n}\n_c3 = UserInfoPostHeader;\nvar UnauthenticatedComment = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"postDetails__UnauthenticatedComment\",\n    componentId: \"sc-6047c90d-6\"\n})(_templateObject6());\nfunction CommentCreator(param1) {\n    var user = param1.user, handleSubmit = param1.handleSubmit;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), commentText = ref[0], setCommentText = ref[1];\n    if (!user) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommentCreationContainer, {\n        onSubmit: function(e) {\n            return handleSubmit(e, commentText);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommentTextBox, {\n                value: commentText,\n                onChange: function(param) {\n                    var value = param.target.value;\n                    return setCommentText(value);\n                },\n                placeholder: \"Enter your response here...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"under-comment-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Logged in as:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"username-logged\",\n                                children: (user === null || user === void 0 ? void 0 : user.username) || \"Joe Smith\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitButton, {\n                        type: \"submit\",\n                        children: \"Submit reply\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, this));\n}\n_s(CommentCreator, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c4 = CommentCreator;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"CommentCreationContainer\");\n$RefreshReg$(_c1, \"SubmitButton\");\n$RefreshReg$(_c2, \"CommentTextBox\");\n$RefreshReg$(_c3, \"UserInfoPostHeader\");\n$RefreshReg$(_c4, \"CommentCreator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7WUFBS0osTUFBTSxDQUFOQSxZQUFZLENBQUNJLENBQUMsRUFBRUgsV0FBVzs7O3dGQUNuRXJCLGNBQWM7Z0JBQ2J5QixLQUFLLEVBQUVKLFdBQVc7Z0JBQ2xCSyxRQUFRLEVBQUUsUUFBUTt3QkFBS0QsS0FBSyxTQUFmRSxNQUFNLENBQUlGLEtBQUs7b0JBQVNILE1BQU0sQ0FBTkEsY0FBYyxDQUFDRyxLQUFLOztnQkFDekRHLFdBQVcsRUFBQyxDQUE2Qjs7Ozs7O3dGQUUxQ3JDLENBQUc7Z0JBQUNlLFNBQVMsRUFBQyxDQUFvQjs7Z0dBQ2hDUyxDQUFDOzs0QkFBQyxDQUNZOzRCQUFDLENBQUc7d0dBQ2hCYyxDQUFJO2dDQUFDdkIsU0FBUyxFQUFDLENBQWlCOzJDQUM5QkgsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFFVyxRQUFRLEtBQUksQ0FBVzs7Ozs7Ozs7Ozs7O2dHQUdqQ2xCLFlBQVk7d0JBQUNrQyxJQUFJLEVBQUMsQ0FBUTtrQ0FBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEQsQ0FBQztHQTNCZVgsY0FBYztNQUFkQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdERldGFpbHMudHN4P2MyMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9saWIvdHlwZXNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFnZSB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcbmltcG9ydCB7IEhvdmVyTGluayB9IGZyb20gXCIuL3RhYmxvaWRzXCI7XG5pbXBvcnQgeyBVc2VyRGV0YWlsc0NvbnRhaW5lciwgVXNlclJvbGUgfSBmcm9tIFwiLi91c2VyRGV0YWlsc1wiO1xuXG5leHBvcnQgY29uc3QgUG9zdERldGFpbHNDb250YWluZXIgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZURldGFpbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEFydFBvc3RUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoMSB7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNHJlbSAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wb3N0LWluZm8tbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbW1lbnRDcmVhdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxcmVtO1xuICBnYXA6IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAudW5kZXItY29tbWVudC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICAgIH1cbiAgICAudXNlcm5hbWUtbG9nZ2VkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5kYXJrfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbW1lbnRUZXh0Qm94ID0gc3R5bGVkLnRleHRhcmVhYFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJJbmZvUG9zdEhlYWRlcih7XG4gIHVzZXIsXG4gIHBvc3RDb3VudCxcbn06IHtcbiAgdXNlcjogVXNlclNjaGVtYTtcbiAgcG9zdENvdW50OiBudW1iZXI7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPFVzZXJEZXRhaWxzQ29udGFpbmVyIHJvbGU9e3VzZXIucm9sZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYXZhdGFyXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9e3VzZXIuYXZhdGFyVVJMfSBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mby1wb3N0XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VyLmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgIDxIb3Zlckxpbms+e3VzZXIudXNlcm5hbWV9PC9Ib3Zlckxpbms+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFVzZXJSb2xlPlxuICAgICAgICAgIDxwPnt1c2VyLnJvbGV9PC9wPlxuICAgICAgICA8L1VzZXJSb2xlPlxuICAgICAgICA8cD5Qb3N0czoge3Bvc3RDb3VudH08L3A+XG4gICAgICAgIDxwPkFnZToge2NhbGN1bGF0ZUFnZShuZXcgRGF0ZSh1c2VyLmNyZWF0ZWRBdCkpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvVXNlckRldGFpbHNDb250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IFVuYXV0aGVudGljYXRlZENvbW1lbnQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50Q3JlYXRvcih7XG4gIHVzZXIsXG4gIGhhbmRsZVN1Ym1pdCxcbn06IHtcbiAgdXNlcjogVXNlclNjaGVtYTtcbiAgaGFuZGxlU3VibWl0OiAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4sIGJvZHk6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8Q29tbWVudENyZWF0aW9uQ29udGFpbmVyIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUsIGNvbW1lbnRUZXh0KX0+XG4gICAgICA8Q29tbWVudFRleHRCb3hcbiAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxuICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0Q29tbWVudFRleHQodmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcmVzcG9uc2UgaGVyZS4uLlwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlci1jb21tZW50LWluZm9cIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9nZ2VkIGluIGFzOntcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VybmFtZS1sb2dnZWRcIj5cbiAgICAgICAgICAgIHt1c2VyPy51c2VybmFtZSB8fCBcIkpvZSBTbWl0aFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgcmVwbHk8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29tbWVudENyZWF0aW9uQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVN0YXRlIiwic3R5bGVkIiwiY2FsY3VsYXRlQWdlIiwiQ29sb3JQYWxldHRlIiwiSG92ZXJMaW5rIiwiVXNlckRldGFpbHNDb250YWluZXIiLCJVc2VyUm9sZSIsIlBvc3REZXRhaWxzQ29udGFpbmVyIiwiYXJ0aWNsZSIsIk1vdmllRGV0YWlsc0NvbnRhaW5lciIsImRpdiIsIkFydFBvc3RUaXRsZSIsImxpZ2h0IiwiQ29tbWVudENyZWF0aW9uQ29udGFpbmVyIiwiZm9ybSIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsImdyYXkiLCJkYXJrIiwiQ29tbWVudFRleHRCb3giLCJ0ZXh0YXJlYSIsIlVzZXJJbmZvUG9zdEhlYWRlciIsInVzZXIiLCJwb3N0Q291bnQiLCJyb2xlIiwiY2xhc3NOYW1lIiwic3JjIiwiYXZhdGFyVVJMIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaHJlZiIsImlkIiwicGFzc0hyZWYiLCJ1c2VybmFtZSIsInAiLCJEYXRlIiwiY3JlYXRlZEF0IiwiVW5hdXRoZW50aWNhdGVkQ29tbWVudCIsIkNvbW1lbnRDcmVhdG9yIiwiaGFuZGxlU3VibWl0IiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsIm9uU3VibWl0IiwiZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNwYW4iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postDetails.tsx\n");

/***/ })

});
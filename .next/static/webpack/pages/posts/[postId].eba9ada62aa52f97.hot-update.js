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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostDetailsContainer\": function() { return /* binding */ PostDetailsContainer; },\n/* harmony export */   \"MovieDetailsContainer\": function() { return /* binding */ MovieDetailsContainer; },\n/* harmony export */   \"ArtPostTitle\": function() { return /* binding */ ArtPostTitle; },\n/* harmony export */   \"CommentCreationContainer\": function() { return /* binding */ CommentCreationContainer; },\n/* harmony export */   \"SubmitButton\": function() { return /* binding */ SubmitButton; },\n/* harmony export */   \"CommentTextBox\": function() { return /* binding */ CommentTextBox; },\n/* harmony export */   \"UserInfoPostHeader\": function() { return /* binding */ UserInfoPostHeader; },\n/* harmony export */   \"CommentCreator\": function() { return /* binding */ CommentCreator; }\n/* harmony export */ });\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 1rem;\\n  align-self: center;\\n  border-radius: 2rem;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  h1 {\\n    color: \",\n        \";\\n    text-transform: lowercase;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    letter-spacing: -0.1rem;\\n    text-shadow: 0 0 4rem \",\n        \";\\n    text-align: center;\\n  }\\n  .post-info-link {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  padding: 1rem;\\n  gap: 0.5rem;\\n  position: relative;\\n  .under-comment-info {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 100%;\\n    align-items: center;\\n    button {\\n      font-family: \\\"Inter\\\";\\n    }\\n    .username-logged {\\n      font-weight: 700;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 0.5rem 1rem;\\n  color: \",\n        \";\\n  background-color: \",\n        \";\\n  font-weight: 600;\\n  cursor: pointer;\\n  font-family: \\\"Inter\\\";\\n  border-radius: 0.5rem;\\n  align-self: \\\"flex-end\\\";\\n  :hover {\\n    background-color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n  border: 1px solid \",\n        \";\\n  padding: 10px;\\n  width: 100%;\\n  color: \",\n        \";\\n  font-family: Inter;\\n  :focus {\\n    outline: 1px solid \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background-color: \",\n        \"aa;\\n  top: 0;\\n  left: 0;\\n  display: grid;\\n  place-items: center;\\n  backdrop-filter: blur(5px);\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar PostDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].article.withConfig({\n    displayName: \"postDetails__PostDetailsContainer\",\n    componentId: \"sc-e4b1a7e9-0\"\n})(_templateObject());\nvar MovieDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"postDetails__MovieDetailsContainer\",\n    componentId: \"sc-e4b1a7e9-1\"\n})(_templateObject1());\nvar ArtPostTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"postDetails__ArtPostTitle\",\n    componentId: \"sc-e4b1a7e9-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light);\nvar CommentCreationContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].form.withConfig({\n    displayName: \"postDetails__CommentCreationContainer\",\n    componentId: \"sc-e4b1a7e9-3\"\n})(_templateObject3());\n_c = CommentCreationContainer;\nvar SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].button.withConfig({\n    displayName: \"postDetails__SubmitButton\",\n    componentId: \"sc-e4b1a7e9-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].info, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dark);\n_c1 = SubmitButton;\nvar CommentTextBox = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].textarea.withConfig({\n    displayName: \"postDetails__CommentTextBox\",\n    componentId: \"sc-e4b1a7e9-5\"\n})(_templateObject5(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].info);\n_c2 = CommentTextBox;\nfunction UserInfoPostHeader(param) {\n    var user = param.user, postCount = param.postCount;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_9__.UserDetailsContainer, {\n        role: user.role,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"user-avatar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: user.avatarURL,\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"user-info-post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/users/\".concat(user.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_8__.HoverLink, {\n                            children: user.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_9__.UserRole, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: user.role\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Posts: \",\n                            postCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Age: \",\n                            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.calculateAge)(new Date(user.createdAt))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this));\n}\n_c3 = UserInfoPostHeader;\nvar UnauthenticatedComment = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"postDetails__UnauthenticatedComment\",\n    componentId: \"sc-e4b1a7e9-6\"\n})(_templateObject6(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].gray);\n_c4 = UnauthenticatedComment;\nfunction CommentCreator(param1) {\n    var user = param1.user, handleSubmit = param1.handleSubmit;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), commentText = ref[0], setCommentText = ref[1];\n    var submitterMiddleman = function() {\n        var _ref = _asyncToGenerator(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return handleSubmit(e, commentText);\n                    case 2:\n                        setCommentText(\"\");\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function submitterMiddleman(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CommentCreationContainer, {\n        onSubmit: submitterMiddleman,\n        children: [\n            !(user === null || user === void 0 ? void 0 : user.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UnauthenticatedComment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/auth/login\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_8__.HoverableContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faLock,\n                                color: _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 15\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: \"Log in to post a comment\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                    lineNumber: 151,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 150,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CommentTextBox, {\n                value: commentText,\n                onChange: function(param) {\n                    var value = param.target.value;\n                    return setCommentText(value);\n                },\n                placeholder: \"Enter your response here...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"under-comment-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Logged in as:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"username-logged\",\n                                children: (user === null || user === void 0 ? void 0 : user.username) || \"Joe Smith\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 167,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SubmitButton, {\n                        type: \"submit\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faComments\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 11\n                            }, this),\n                            \"\\xa0\\xa0Submit reply\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 148,\n        columnNumber: 5\n    }, this));\n}\n_s(CommentCreator, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c5 = CommentCreator;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"CommentCreationContainer\");\n$RefreshReg$(_c1, \"SubmitButton\");\n$RefreshReg$(_c2, \"CommentTextBox\");\n$RefreshReg$(_c3, \"UserInfoPostHeader\");\n$RefreshReg$(_c4, \"UnauthenticatedComment\");\n$RefreshReg$(_c5, \"CommentCreator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3REZXRhaWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFDTjtBQUNsQztBQUNGO0FBQ2U7QUFDTDtBQUVLO0FBQ007QUFDUztBQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFWCxDQUduRDs7Ozs7Ozs7O1FBRWdELENBRWhEOzs7Ozs7Ozs7UUFFdUMsQ0FTNUI7UUFBcUIsQ0FLTjtRQUFxQixDQVEvQzs7Ozs7Ozs7O1FBRW9ELENBb0JwRDs7Ozs7Ozs7O1FBRTBDLENBRWpDO1FBQXFCLENBQ1Y7UUFBb0IsQ0FPbEI7UUFBb0IsQ0FFMUM7Ozs7Ozs7OztRQUU4QyxDQUUxQjtRQUFvQixDQUcvQjtRQUFxQixDQUdQO1FBQW9CLENBRTNDOzs7Ozs7Ozs7UUE0QjBDLENBSXRCO1FBQW9CLENBTXhDOzs7Ozs7OztBQXJITyxHQUFLLENBQUNhLG9CQUFvQixHQUFHUCw2RUFBYzs7OztBQUszQyxHQUFLLENBQUNTLHFCQUFxQixHQUFHVCx5RUFBVTs7OztBQUl4QyxHQUFLLENBQUNXLFlBQVksR0FBR1gseUVBQVU7Ozt1QkFTekJFLGtFQUFrQixFQUtIQSxrRUFBa0I7QUFVdkMsR0FBSyxDQUFDVyx3QkFBd0IsR0FBR2IsMEVBQVc7Ozs7S0FBdENhLHdCQUF3QjtBQXNCOUIsR0FBSyxDQUFDRSxZQUFZLEdBQUdmLDRFQUFhOzs7dUJBRTlCRSxrRUFBa0IsRUFDUEEsaUVBQWlCLEVBT2ZBLGlFQUFpQjtNQVY1QmEsWUFBWTtBQWNsQixHQUFLLENBQUNJLGNBQWMsR0FBR25CLDhFQUFlOzs7dUJBRXZCRSxpRUFBaUIsRUFHNUJBLGtFQUFrQixFQUdKQSxpRUFBaUI7TUFSN0JpQixjQUFjO0FBWXBCLFNBQVNHLGtCQUFrQixDQUFDLEtBTWxDLEVBQUUsQ0FBQztRQUxGQyxJQUFJLEdBRDZCLEtBTWxDLENBTENBLElBQUksRUFDSkMsU0FBUyxHQUZ3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QUFZO3dCQUFDc0MsSUFBSSxFQUFDLENBQVE7O3dHQUN4QnpELDJFQUFlO2dDQUFDa0QsSUFBSSxFQUFFcEQsMEVBQVU7Ozs7Ozs0QkFBSSxDQUV2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0E5Q2U2QyxjQUFjO01BQWRBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0RGV0YWlscy50c3g/YzIyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYUNvbW1lbnRzLCBmYUxvY2sgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlQWdlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuaW1wb3J0IHsgSG92ZXJhYmxlQ29udGFpbmVyLCBIb3ZlckxpbmsgfSBmcm9tIFwiLi90YWJsb2lkc1wiO1xuaW1wb3J0IHsgVXNlckRldGFpbHNDb250YWluZXIsIFVzZXJSb2xlIH0gZnJvbSBcIi4vdXNlckRldGFpbHNcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3REZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5leHBvcnQgY29uc3QgTW92aWVEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcnRQb3N0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaDEge1xuICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDRyZW0gJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucG9zdC1pbmZvLWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb21tZW50Q3JlYXRpb25Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnVuZGVyLWNvbW1lbnQtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBidXR0b24ge1xuICAgICAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgICB9XG4gICAgLnVzZXJuYW1lLWxvZ2dlZCB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5pbmZvfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGFsaWduLXNlbGY6IFwiZmxleC1lbmRcIjtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5kYXJrfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbW1lbnRUZXh0Qm94ID0gc3R5bGVkLnRleHRhcmVhYFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICBmb250LWZhbWlseTogSW50ZXI7XG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmluZm99O1xuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gVXNlckluZm9Qb3N0SGVhZGVyKHtcbiAgdXNlcixcbiAgcG9zdENvdW50LFxufToge1xuICB1c2VyOiBVc2VyU2NoZW1hO1xuICBwb3N0Q291bnQ6IG51bWJlcjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8VXNlckRldGFpbHNDb250YWluZXIgcm9sZT17dXNlci5yb2xlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIj5cbiAgICAgICAgPEltYWdlIHNyYz17dXNlci5hdmF0YXJVUkx9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvLXBvc3RcIj5cbiAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIuaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPEhvdmVyTGluaz57dXNlci51c2VybmFtZX08L0hvdmVyTGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8VXNlclJvbGU+XG4gICAgICAgICAgPHA+e3VzZXIucm9sZX08L3A+XG4gICAgICAgIDwvVXNlclJvbGU+XG4gICAgICAgIDxwPlBvc3RzOiB7cG9zdENvdW50fTwvcD5cbiAgICAgICAgPHA+QWdlOiB7Y2FsY3VsYXRlQWdlKG5ldyBEYXRlKHVzZXIuY3JlYXRlZEF0KSl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9Vc2VyRGV0YWlsc0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgVW5hdXRoZW50aWNhdGVkQ29tbWVudCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX1hYTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50Q3JlYXRvcih7XG4gIHVzZXIsXG4gIGhhbmRsZVN1Ym1pdCxcbn06IHtcbiAgdXNlcjogVXNlclNjaGVtYTtcbiAgaGFuZGxlU3VibWl0OiAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4sIGJvZHk6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbn0pIHtcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBzdWJtaXR0ZXJNaWRkbGVtYW4gPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgaGFuZGxlU3VibWl0KGUsIGNvbW1lbnRUZXh0KTtcbiAgICBzZXRDb21tZW50VGV4dChcIlwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb21tZW50Q3JlYXRpb25Db250YWluZXIgb25TdWJtaXQ9e3N1Ym1pdHRlck1pZGRsZW1hbn0+XG4gICAgICB7IXVzZXI/LnVzZXJuYW1lICYmIChcbiAgICAgICAgPFVuYXV0aGVudGljYXRlZENvbW1lbnQ+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8SG92ZXJhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9ja30gY29sb3I9e0NvbG9yUGFsZXR0ZS5saWdodH0gLz57XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuPkxvZyBpbiB0byBwb3N0IGEgY29tbWVudDwvc3Bhbj5cbiAgICAgICAgICAgIDwvSG92ZXJhYmxlQ29udGFpbmVyPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9VbmF1dGhlbnRpY2F0ZWRDb21tZW50PlxuICAgICAgKX1cbiAgICAgIDxDb21tZW50VGV4dEJveFxuICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRDb21tZW50VGV4dCh2YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciByZXNwb25zZSBoZXJlLi4uXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVyLWNvbW1lbnQtaW5mb1wiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb2dnZWQgaW4gYXM6e1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJuYW1lLWxvZ2dlZFwiPlxuICAgICAgICAgICAge3VzZXI/LnVzZXJuYW1lIHx8IFwiSm9lIFNtaXRoXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb21tZW50c30gLz5cbiAgICAgICAgICAmbmJzcDsmbmJzcDtTdWJtaXQgcmVwbHlcbiAgICAgICAgPC9TdWJtaXRCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbW1lbnRDcmVhdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJmYUNvbW1lbnRzIiwiZmFMb2NrIiwiRm9udEF3ZXNvbWVJY29uIiwiSW1hZ2UiLCJMaW5rIiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjYWxjdWxhdGVBZ2UiLCJDb2xvclBhbGV0dGUiLCJIb3ZlcmFibGVDb250YWluZXIiLCJIb3ZlckxpbmsiLCJVc2VyRGV0YWlsc0NvbnRhaW5lciIsIlVzZXJSb2xlIiwiUG9zdERldGFpbHNDb250YWluZXIiLCJhcnRpY2xlIiwiTW92aWVEZXRhaWxzQ29udGFpbmVyIiwiZGl2IiwiQXJ0UG9zdFRpdGxlIiwibGlnaHQiLCJDb21tZW50Q3JlYXRpb25Db250YWluZXIiLCJmb3JtIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiaW5mbyIsImRhcmsiLCJDb21tZW50VGV4dEJveCIsInRleHRhcmVhIiwiZ3JheSIsIlVzZXJJbmZvUG9zdEhlYWRlciIsInVzZXIiLCJwb3N0Q291bnQiLCJyb2xlIiwiY2xhc3NOYW1lIiwic3JjIiwiYXZhdGFyVVJMIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaHJlZiIsImlkIiwicGFzc0hyZWYiLCJ1c2VybmFtZSIsInAiLCJEYXRlIiwiY3JlYXRlZEF0IiwiVW5hdXRoZW50aWNhdGVkQ29tbWVudCIsIkNvbW1lbnRDcmVhdG9yIiwiaGFuZGxlU3VibWl0IiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInN1Ym1pdHRlck1pZGRsZW1hbiIsImUiLCJvblN1Ym1pdCIsImljb24iLCJjb2xvciIsInNwYW4iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postDetails.tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostDetailsContainer\": function() { return /* binding */ PostDetailsContainer; },\n/* harmony export */   \"MovieDetailsContainer\": function() { return /* binding */ MovieDetailsContainer; },\n/* harmony export */   \"ArtPostTitle\": function() { return /* binding */ ArtPostTitle; },\n/* harmony export */   \"CommentCreationContainer\": function() { return /* binding */ CommentCreationContainer; },\n/* harmony export */   \"SubmitButton\": function() { return /* binding */ SubmitButton; },\n/* harmony export */   \"CommentTextBox\": function() { return /* binding */ CommentTextBox; },\n/* harmony export */   \"UserInfoPostHeader\": function() { return /* binding */ UserInfoPostHeader; },\n/* harmony export */   \"CommentCreator\": function() { return /* binding */ CommentCreator; }\n/* harmony export */ });\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n/* harmony import */ var _tabloids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _userDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userDetails */ \"./components/userDetails.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 1rem;\\n  align-self: center;\\n  border-radius: 2rem;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  h1 {\\n    color: \",\n        \";\\n    text-transform: lowercase;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    letter-spacing: -0.1rem;\\n    text-shadow: 0 0 4rem \",\n        \";\\n    text-align: center;\\n  }\\n  .post-info-link {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  padding: 1rem;\\n  gap: 0.5rem;\\n  position: relative;\\n  .under-comment-info {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 100%;\\n    align-items: center;\\n    button {\\n      font-family: \\\"Inter\\\";\\n    }\\n    .username-logged {\\n      font-weight: 700;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 0.5rem 1rem;\\n  color: \",\n        \";\\n  background-color: \",\n        \";\\n  font-weight: 600;\\n  cursor: pointer;\\n  font-family: \\\"Inter\\\";\\n  border-radius: 0.5rem;\\n  :hover {\\n    background-color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n  border: 1px solid \",\n        \";\\n  padding: 10px;\\n  width: 100%;\\n  color: \",\n        \";\\n  font-family: Inter;\\n  :focus {\\n    outline: 1px solid \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background-color: \",\n        \"aa;\\n  top: 0;\\n  left: 0;\\n  display: grid;\\n  place-items: center;\\n  backdrop-filter: blur(5px);\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar PostDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].article.withConfig({\n    displayName: \"postDetails__PostDetailsContainer\",\n    componentId: \"sc-bb41c0d3-0\"\n})(_templateObject());\nvar MovieDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"postDetails__MovieDetailsContainer\",\n    componentId: \"sc-bb41c0d3-1\"\n})(_templateObject1());\nvar ArtPostTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"postDetails__ArtPostTitle\",\n    componentId: \"sc-bb41c0d3-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light);\nvar CommentCreationContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].form.withConfig({\n    displayName: \"postDetails__CommentCreationContainer\",\n    componentId: \"sc-bb41c0d3-3\"\n})(_templateObject3());\n_c = CommentCreationContainer;\nvar SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].button.withConfig({\n    displayName: \"postDetails__SubmitButton\",\n    componentId: \"sc-bb41c0d3-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].info, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dark);\n_c1 = SubmitButton;\nvar CommentTextBox = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].textarea.withConfig({\n    displayName: \"postDetails__CommentTextBox\",\n    componentId: \"sc-bb41c0d3-5\"\n})(_templateObject5(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].info);\n_c2 = CommentTextBox;\nfunction UserInfoPostHeader(param) {\n    var user = param.user, postCount = param.postCount;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_9__.UserDetailsContainer, {\n        role: user.role,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"user-avatar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: user.avatarURL,\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"user-info-post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/users/\".concat(user.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_8__.HoverLink, {\n                            children: user.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_userDetails__WEBPACK_IMPORTED_MODULE_9__.UserRole, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: user.role\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Posts: \",\n                            postCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Age: \",\n                            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.calculateAge)(new Date(user.createdAt))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this));\n}\n_c3 = UserInfoPostHeader;\nvar UnauthenticatedComment = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"postDetails__UnauthenticatedComment\",\n    componentId: \"sc-bb41c0d3-6\"\n})(_templateObject6(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].gray);\n_c4 = UnauthenticatedComment;\nfunction CommentCreator(param1) {\n    var user = param1.user, handleSubmit = param1.handleSubmit;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), commentText = ref[0], setCommentText = ref[1];\n    var submitterMiddleman = function() {\n        var _ref = _asyncToGenerator(C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return C_Users_diego_Desktop_JAVASCRIPT30_themovielister_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return handleSubmit(e, commentText);\n                    case 2:\n                        setCommentText(\"\");\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function submitterMiddleman(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CommentCreationContainer, {\n        onSubmit: submitterMiddleman,\n        children: [\n            !(user === null || user === void 0 ? void 0 : user.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UnauthenticatedComment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/auth/login\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_tabloids__WEBPACK_IMPORTED_MODULE_8__.HoverableContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faLock,\n                                color: _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_7__[\"default\"].light\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 15\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: \"Log in to post a comment\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 158,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 154,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CommentTextBox, {\n                value: commentText,\n                onChange: function(param) {\n                    var value = param.target.value;\n                    return setCommentText(value);\n                },\n                placeholder: \"Enter your response here...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"under-comment-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Logged in as:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"username-logged\",\n                                children: (user === null || user === void 0 ? void 0 : user.username) || \"Joe Smith\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SubmitButton, {\n                        type: \"submit\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faCommentAlt\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                                lineNumber: 176,\n                                columnNumber: 11\n                            }, this),\n                            \"\\xa0\\xa0Submit reply\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\postDetails.tsx\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, this));\n}\n_s(CommentCreator, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c5 = CommentCreator;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"CommentCreationContainer\");\n$RefreshReg$(_c1, \"SubmitButton\");\n$RefreshReg$(_c2, \"CommentTextBox\");\n$RefreshReg$(_c3, \"UserInfoPostHeader\");\n$RefreshReg$(_c4, \"UnauthenticatedComment\");\n$RefreshReg$(_c5, \"CommentCreator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3REZXRhaWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMEM7QUFDc0I7QUFDbEM7QUFDRjtBQUNlO0FBQ0w7QUFFSztBQUNNO0FBQ1M7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRVgsQ0FHbkQ7Ozs7Ozs7OztRQUVnRCxDQUVoRDs7Ozs7Ozs7O1FBRXVDLENBUzVCO1FBQXFCLENBS047UUFBcUIsQ0FRL0M7Ozs7Ozs7OztRQUVvRCxDQW9CcEQ7Ozs7Ozs7OztRQUUwQyxDQUVqQztRQUFxQixDQUNWO1FBQW9CLENBTWxCO1FBQW9CLENBRTFDOzs7Ozs7Ozs7UUFFOEMsQ0FFMUI7UUFBb0IsQ0FHL0I7UUFBcUIsQ0FHUDtRQUFvQixDQUUzQzs7Ozs7Ozs7O1FBNEIwQyxDQUl0QjtRQUFvQixDQU14Qzs7Ozs7Ozs7QUFwSE8sR0FBSyxDQUFDYSxvQkFBb0IsR0FBR1AsNkVBQWM7Ozs7QUFLM0MsR0FBSyxDQUFDUyxxQkFBcUIsR0FBR1QseUVBQVU7Ozs7QUFJeEMsR0FBSyxDQUFDVyxZQUFZLEdBQUdYLHlFQUFVOzs7dUJBU3pCRSxrRUFBa0IsRUFLSEEsa0VBQWtCO0FBVXZDLEdBQUssQ0FBQ1csd0JBQXdCLEdBQUdiLDBFQUFXOzs7O0tBQXRDYSx3QkFBd0I7QUFzQjlCLEdBQUssQ0FBQ0UsWUFBWSxHQUFHZiw0RUFBYTs7O3VCQUU5QkUsa0VBQWtCLEVBQ1BBLGlFQUFpQixFQU1mQSxpRUFBaUI7TUFUNUJhLFlBQVk7QUFhbEIsR0FBSyxDQUFDSSxjQUFjLEdBQUduQiw4RUFBZTs7O3VCQUV2QkUsaUVBQWlCLEVBRzVCQSxrRUFBa0IsRUFHSkEsaUVBQWlCO01BUjdCaUIsY0FBYztBQVlwQixTQUFTRyxrQkFBa0IsQ0FBQyxLQU1sQyxFQUFFLENBQUM7UUFMRkMsSUFBSSxHQUQ2QixLQU1sQyxDQUxDQSxJQUFJLEVBQ0pDLFNBQVMsR0FG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WUFBWTt3QkFBQ3NDLElBQUksRUFBQyxDQUFROzt3R0FDeEJ6RCwyRUFBZTtnQ0FBQ2tELElBQUksRUFBRXBELDRFQUFZOzs7Ozs7NEJBQUksQ0FFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBOUNlNkMsY0FBYztNQUFkQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdERldGFpbHMudHN4P2MyMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZmFDb21tZW50QWx0LFxuICBmYUNvbW1lbnRTbXMsXG4gIGZhTG9jayxcbiAgZmFNYWdpYyxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9saWIvdHlwZXNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFnZSB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcbmltcG9ydCB7IEhvdmVyYWJsZUNvbnRhaW5lciwgSG92ZXJMaW5rIH0gZnJvbSBcIi4vdGFibG9pZHNcIjtcbmltcG9ydCB7IFVzZXJEZXRhaWxzQ29udGFpbmVyLCBVc2VyUm9sZSB9IGZyb20gXCIuL3VzZXJEZXRhaWxzXCI7XG5cbmV4cG9ydCBjb25zdCBQb3N0RGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5hcnRpY2xlYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1vdmllRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQXJ0UG9zdFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGgxIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjFyZW07XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA0cmVtICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnBvc3QtaW5mby1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29tbWVudENyZWF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdhcDogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC51bmRlci1jb21tZW50LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gICAgfVxuICAgIC51c2VybmFtZS1sb2dnZWQge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuaW5mb307XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmRhcmt9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29tbWVudFRleHRCb3ggPSBzdHlsZWQudGV4dGFyZWFgXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuaW5mb307XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VySW5mb1Bvc3RIZWFkZXIoe1xuICB1c2VyLFxuICBwb3N0Q291bnQsXG59OiB7XG4gIHVzZXI6IFVzZXJTY2hlbWE7XG4gIHBvc3RDb3VudDogbnVtYmVyO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxVc2VyRGV0YWlsc0NvbnRhaW5lciByb2xlPXt1c2VyLnJvbGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyLmF2YXRhclVSTH0gbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm8tcG9zdFwiPlxuICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7dXNlci5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICA8SG92ZXJMaW5rPnt1c2VyLnVzZXJuYW1lfTwvSG92ZXJMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxVc2VyUm9sZT5cbiAgICAgICAgICA8cD57dXNlci5yb2xlfTwvcD5cbiAgICAgICAgPC9Vc2VyUm9sZT5cbiAgICAgICAgPHA+UG9zdHM6IHtwb3N0Q291bnR9PC9wPlxuICAgICAgICA8cD5BZ2U6IHtjYWxjdWxhdGVBZ2UobmV3IERhdGUodXNlci5jcmVhdGVkQXQpKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L1VzZXJEZXRhaWxzQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBVbmF1dGhlbnRpY2F0ZWRDb21tZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5ncmF5fWFhO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbW1lbnRDcmVhdG9yKHtcbiAgdXNlcixcbiAgaGFuZGxlU3VibWl0LFxufToge1xuICB1c2VyOiBVc2VyU2NoZW1hO1xuICBoYW5kbGVTdWJtaXQ6IChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PiwgYm9keTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xufSkge1xuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdHRlck1pZGRsZW1hbiA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhd2FpdCBoYW5kbGVTdWJtaXQoZSwgY29tbWVudFRleHQpO1xuICAgIHNldENvbW1lbnRUZXh0KFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbW1lbnRDcmVhdGlvbkNvbnRhaW5lciBvblN1Ym1pdD17c3VibWl0dGVyTWlkZGxlbWFufT5cbiAgICAgIHshdXNlcj8udXNlcm5hbWUgJiYgKFxuICAgICAgICA8VW5hdXRoZW50aWNhdGVkQ29tbWVudD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvbG9naW5cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxIb3ZlcmFibGVDb250YWluZXI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NrfSBjb2xvcj17Q29sb3JQYWxldHRlLmxpZ2h0fSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4+TG9nIGluIHRvIHBvc3QgYSBjb21tZW50PC9zcGFuPlxuICAgICAgICAgICAgPC9Ib3ZlcmFibGVDb250YWluZXI+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1VuYXV0aGVudGljYXRlZENvbW1lbnQ+XG4gICAgICApfVxuICAgICAgPENvbW1lbnRUZXh0Qm94XG4gICAgICAgIHZhbHVlPXtjb21tZW50VGV4dH1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldENvbW1lbnRUZXh0KHZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHJlc3BvbnNlIGhlcmUuLi5cIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXItY29tbWVudC1pbmZvXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvZ2dlZCBpbiBhczp7XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcm5hbWUtbG9nZ2VkXCI+XG4gICAgICAgICAgICB7dXNlcj8udXNlcm5hbWUgfHwgXCJKb2UgU21pdGhcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNvbW1lbnRBbHR9IC8+XG4gICAgICAgICAgJm5ic3A7Jm5ic3A7U3VibWl0IHJlcGx5XG4gICAgICAgIDwvU3VibWl0QnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db21tZW50Q3JlYXRpb25Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZmFDb21tZW50QWx0IiwiZmFMb2NrIiwiRm9udEF3ZXNvbWVJY29uIiwiSW1hZ2UiLCJMaW5rIiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjYWxjdWxhdGVBZ2UiLCJDb2xvclBhbGV0dGUiLCJIb3ZlcmFibGVDb250YWluZXIiLCJIb3ZlckxpbmsiLCJVc2VyRGV0YWlsc0NvbnRhaW5lciIsIlVzZXJSb2xlIiwiUG9zdERldGFpbHNDb250YWluZXIiLCJhcnRpY2xlIiwiTW92aWVEZXRhaWxzQ29udGFpbmVyIiwiZGl2IiwiQXJ0UG9zdFRpdGxlIiwibGlnaHQiLCJDb21tZW50Q3JlYXRpb25Db250YWluZXIiLCJmb3JtIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiaW5mbyIsImRhcmsiLCJDb21tZW50VGV4dEJveCIsInRleHRhcmVhIiwiZ3JheSIsIlVzZXJJbmZvUG9zdEhlYWRlciIsInVzZXIiLCJwb3N0Q291bnQiLCJyb2xlIiwiY2xhc3NOYW1lIiwic3JjIiwiYXZhdGFyVVJMIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaHJlZiIsImlkIiwicGFzc0hyZWYiLCJ1c2VybmFtZSIsInAiLCJEYXRlIiwiY3JlYXRlZEF0IiwiVW5hdXRoZW50aWNhdGVkQ29tbWVudCIsIkNvbW1lbnRDcmVhdG9yIiwiaGFuZGxlU3VibWl0IiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInN1Ym1pdHRlck1pZGRsZW1hbiIsImUiLCJvblN1Ym1pdCIsImljb24iLCJjb2xvciIsInNwYW4iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postDetails.tsx\n");

/***/ })

});
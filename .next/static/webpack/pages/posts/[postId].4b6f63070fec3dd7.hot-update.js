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

/***/ "./pages/posts/[postId]/index.tsx":
/*!****************************************!*\
  !*** ./pages/posts/[postId]/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: 1px solid \",\n        \";\\n  border-bottom: none;\\n  margin-top: 1rem;\\n  background-color: \",\n        \";\\n  padding: 0.4rem;\\n  display: flex;\\n  align-items: flex-start;\\n  gap: 1rem;\\n  .user-avatar {\\n    position: relative;\\n    border: 5px solid;\\n    border-image-slice: 1;\\n    border-image-source: linear-gradient(to right, blue, purple);\\n    width: 6rem;\\n    height: 6rem;\\n  }\\n  h4 {\\n    font-weight: 600;\\n    color: \",\n        \";\\n  }\\n  p {\\n    font-size: 0.8rem;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: 1px solid \",\n        \";\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 1rem;\\n  align-self: center;\\n  border-radius: 2rem;\\n  position: relative;\\n  h1 {\\n    color: \",\n        \";\\n    text-transform: lowercase;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    letter-spacing: -0.1rem;\\n    text-shadow: 0 0 4rem \",\n        \";\\n    text-align: center;\\n  }\\n  .post-info-link {\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar PostDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].article.withConfig({\n    displayName: \"[postId]__PostDetailsContainer\",\n    componentId: \"sc-352440f6-0\"\n})(_templateObject());\n_c = PostDetailsContainer;\nvar UserDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside.withConfig({\n    displayName: \"[postId]__UserDetailsContainer\",\n    componentId: \"sc-352440f6-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c1 = UserDetailsContainer;\nvar MovieDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"[postId]__MovieDetailsContainer\",\n    componentId: \"sc-352440f6-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray);\n_c2 = MovieDetailsContainer;\nvar ArtPostTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"[postId]__ArtPostTitle\",\n    componentId: \"sc-352440f6-3\"\n})(_templateObject3(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c3 = ArtPostTitle;\nfunction MovieDetails(param) {\n    var postData = param.postData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_4__.SectionContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostDetailsContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArtPostTitle, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: postData.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"post-info-link\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/users/\".concat(postData.User.id),\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_4__.HoverLink, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faUser\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            postData.User.username\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                \"•\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/movies/\".concat(postData.Movie.imdbId),\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_4__.HoverLink, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFilm\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            postData.Movie.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserDetailsContainer, {\n                    role: postData.User.role,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"user-avatar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: postData.User.avatarURL,\n                                layout: \"fill\",\n                                objectFit: \"cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: postData.User.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Posts: \",\n                                        3\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieDetailsContainer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: postData.body\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this));\n}\n_c4 = MovieDetails;\nMovieDetails.propTypes = {\n    postData: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({\n        title: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n        body: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n        User: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({\n            id: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),\n            username: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n            role: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n            avatarURL: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)\n        }),\n        Movie: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({\n            imdbId: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n            imageURL: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n            title: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)\n        })\n    }).isRequired\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetails);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"PostDetailsContainer\");\n$RefreshReg$(_c1, \"UserDetailsContainer\");\n$RefreshReg$(_c2, \"MovieDetailsContainer\");\n$RefreshReg$(_c3, \"ArtPostTitle\");\n$RefreshReg$(_c4, \"MovieDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRThCO0FBQ0Y7QUFDTTtBQUNJO0FBQzBCO0FBQ0U7QUFDUTtBQUVuQjs7Ozs7Ozs7Ozs7OztRQUdYLENBRzVDOzs7Ozs7Ozs7UUFFMEMsQ0FDdEI7UUFBb0IsQ0FHcEI7UUFBb0IsQ0FlN0I7UUFBcUIsQ0FLaEM7Ozs7Ozs7OztRQUV5QyxDQUNyQjtRQUFvQixDQUV4Qzs7Ozs7Ozs7O1FBRWdDLENBTXJCO1FBQXFCLENBS047UUFBcUIsQ0FRL0M7Ozs7Ozs7QUF2REEsR0FBSyxDQUFDVSxvQkFBb0IsR0FBR1AsNEVBQWM7Ozs7S0FBckNPLG9CQUFvQjtBQUsxQixHQUFLLENBQUNFLG9CQUFvQixHQUFHVCwwRUFBWTs7O3VCQUNuQk0saUVBQWlCLEVBR2pCQSxpRUFBaUIsRUFlMUJBLGtFQUFrQjtNQW5CekJHLG9CQUFvQjtBQTBCMUIsR0FBSyxDQUFDSSxxQkFBcUIsR0FBR2Isd0VBQVU7Ozt1QkFDbEJNLGlFQUFpQjtNQURqQ08scUJBQXFCO0FBSzNCLEdBQUssQ0FBQ0UsWUFBWSxHQUFHZix3RUFBVTs7O3VCQU1sQk0sa0VBQWtCLEVBS0hBLGtFQUFrQjtNQVh4Q1MsWUFBWTtTQXFCVEMsWUFBWSxDQUFDLEtBQXNDLEVBQUUsQ0FBQztRQUF2Q0MsUUFBUSxHQUFWLEtBQXNDLENBQXBDQSxRQUFRO0lBQzlCLE1BQU0sNkVBQ0haLGtFQUFnQjs4RkFDZEUsb0JBQW9COzs0RkFDbEJRLFlBQVk7O29HQUNWRyxDQUFFO3NDQUFFRCxRQUFRLENBQUNFLEtBQUs7Ozs7OztvR0FDbEJMLENBQUc7NEJBQUNNLFNBQVMsRUFBQyxDQUFnQjs7NEdBQzVCdEIsa0RBQUk7b0NBQUN1QixJQUFJLEVBQUcsQ0FBTyxTQUFtQixPQUFqQkosUUFBUSxDQUFDSyxJQUFJLENBQUNDLEVBQUU7b0NBQUlDLFFBQVE7MEhBQy9DcEIsMkRBQVM7O3dIQUNQSCwyRUFBZTtnREFBQ3dCLElBQUksRUFBRXRCLHFFQUFNOzs7Ozs7NENBQUksQ0FBQzs0Q0FBQ2MsUUFBUSxDQUFDSyxJQUFJLENBQUNJLFFBQVE7Ozs7Ozs7Ozs7OztnQ0FFdEQsQ0FFUDs0R0FBQzVCLGtEQUFJO29DQUFDdUIsSUFBSSxFQUFHLENBQVEsVUFBd0IsT0FBdEJKLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDQyxNQUFNO29DQUFJSixRQUFROzBIQUNyRHBCLDJEQUFTOzt3SEFDUEgsMkVBQWU7Z0RBQUN3QixJQUFJLEVBQUV2QixxRUFBTTs7Ozs7OzRDQUFJLENBQUM7NENBQUNlLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDUixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBSzlEVixvQkFBb0I7b0JBQUNvQixJQUFJLEVBQUVaLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDTyxJQUFJOztvR0FDM0NmLENBQUc7NEJBQUNNLFNBQVMsRUFBQyxDQUFhO2tIQUN6QnZCLG1EQUFLO2dDQUNKaUMsR0FBRyxFQUFFYixRQUFRLENBQUNLLElBQUksQ0FBQ1MsU0FBUztnQ0FDNUJDLE1BQU0sRUFBQyxDQUFNO2dDQUNiQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7Ozs7b0dBR3BCbkIsQ0FBRzs7NEdBQ0RvQixDQUFFOzhDQUFFakIsUUFBUSxDQUFDSyxJQUFJLENBQUNJLFFBQVE7Ozs7Ozs0R0FDMUJTLENBQUM7O3dDQUFDLENBQU87QUFBQyx5Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFHZnRCLHFCQUFxQjswR0FDbkJzQixDQUFDO2tDQUFFbEIsUUFBUSxDQUFDbUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQixDQUFDO01BdkNRcEIsWUFBWTtBQWdFckJBLFlBQVksQ0FBQ3FCLFNBQVMsR0FBRyxDQUFDO0lBQ3hCcEIsUUFBUSxFQUFFbEIsdURBQWUsQ0FBQyxDQUFDO1FBQ3pCb0IsS0FBSyxFQUFFcEIsMERBQWdCO1FBQ3ZCcUMsSUFBSSxFQUFFckMsMERBQWdCO1FBQ3RCdUIsSUFBSSxFQUFFdkIsdURBQWUsQ0FBQyxDQUFDO1lBQ3JCd0IsRUFBRSxFQUFFeEIsMERBQWdCO1lBQ3BCMkIsUUFBUSxFQUFFM0IsMERBQWdCO1lBQzFCOEIsSUFBSSxFQUFFOUIsMERBQWdCO1lBQ3RCZ0MsU0FBUyxFQUFFaEMsMERBQWdCO1FBQzdCLENBQUM7UUFDRDRCLEtBQUssRUFBRTVCLHVEQUFlLENBQUMsQ0FBQztZQUN0QjZCLE1BQU0sRUFBRTdCLDBEQUFnQjtZQUN4QjBDLFFBQVEsRUFBRTFDLDBEQUFnQjtZQUMxQm9CLEtBQUssRUFBRXBCLDBEQUFnQjtRQUN6QixDQUFDO0lBQ0gsQ0FBQyxFQUFFMkMsVUFBVTtBQUNmLENBQUM7O0FBRUQsK0RBQWUxQixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0vaW5kZXgudHN4PzEyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhRmlsbSwgZmFVc2VyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgSG92ZXJMaW5rLCBTZWN0aW9uQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibG9pZHNcIjtcbmltcG9ydCB7IFBvc3RTY2hlbWEgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3R5cGVzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uLy4uLy4uL2xpYi9zZXF1ZWxpemVcIjtcblxuY29uc3QgUG9zdERldGFpbHNDb250YWluZXIgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IFVzZXJEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbiAgLnVzZXItYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiA1cHggc29saWQ7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmx1ZSwgcHVycGxlKTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbiAgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuYDtcblxuY29uc3QgTW92aWVEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIHBhZGRpbmc6IDFyZW07XG5gO1xuXG5jb25zdCBBcnRQb3N0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaDEge1xuICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDRyZW0gJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucG9zdC1pbmZvLWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1vdmllRGV0YWlscyh7IHBvc3REYXRhIH06IHsgcG9zdERhdGE6IFBvc3RTY2hlbWEgfSkge1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFBvc3REZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICA8QXJ0UG9zdFRpdGxlPlxuICAgICAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW5mby1saW5rXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzLyR7cG9zdERhdGEuVXNlci5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPEhvdmVyTGluaz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gLz4ge3Bvc3REYXRhLlVzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgIDwvSG92ZXJMaW5rPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAg4oCiXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL21vdmllcy8ke3Bvc3REYXRhLk1vdmllLmltZGJJZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPEhvdmVyTGluaz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmlsbX0gLz4ge3Bvc3REYXRhLk1vdmllLnRpdGxlfVxuICAgICAgICAgICAgICA8L0hvdmVyTGluaz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BcnRQb3N0VGl0bGU+XG4gICAgICAgIDxVc2VyRGV0YWlsc0NvbnRhaW5lciByb2xlPXtwb3N0RGF0YS5Vc2VyLnJvbGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Bvc3REYXRhLlVzZXIuYXZhdGFyVVJMfVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0Pntwb3N0RGF0YS5Vc2VyLnVzZXJuYW1lfTwvaDQ+XG4gICAgICAgICAgICA8cD5Qb3N0czogezN9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1VzZXJEZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICA8TW92aWVEZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICAgIDxwPntwb3N0RGF0YS5ib2R5fTwvcD5cbiAgICAgICAgPC9Nb3ZpZURldGFpbHNDb250YWluZXI+XG4gICAgICA8L1Bvc3REZXRhaWxzQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKFxuICBjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XG4pID0+IHtcbiAgY29uc3QgcG9zdFJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hcGkvcG9zdHMvJHtjb250ZXh0LnF1ZXJ5LnBvc3RJZH1gXG4gICk7XG4gIGNvbnN0IHBvc3REYXRhOiBQb3N0U2NoZW1hID0gcG9zdFJlcy5kYXRhO1xuICBjb25zdCBudW1PZlBvc3RzQXJyID0gYXdhaXQgcGdTZXF1ZWxpemUucXVlcnkoXG4gICAgYFNFTEVDVCBDT1VOVCgqKSwgdXNlcm5hbWUgRlJPTSBcIlBvc3RzXCIgXG4gICAgSk9JTiBcIlVzZXJzXCIgT04gXCJQb3N0c1wiLlwiVXNlcklkXCIgPSBcIlVzZXJzXCIuaWRcbiAgICBHUk9VUCBCWSB1c2VybmFtZTtgXG4gICk7XG4gIGNvbnN0IHBvc3RDb3VudEhhc2ggPSBudW1PZlBvc3RzQXJyLnJlZHVjZSgoaGFzaCwgcm93KSA9PiB7XG4gICAgaGFzaFtyb3cudXNlcm5hbWVdID0gcm93LmNvdW50O1xuICB9LCB7fSk7XG4gIGNvbnNvbGUubG9nKG51bU9mUG9zdHMpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuTW92aWVEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgcG9zdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBVc2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBhdmF0YXJVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgTW92aWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpbWRiSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpbWFnZVVSTDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICB9KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVEZXRhaWxzO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhRmlsbSIsImZhVXNlciIsIkhvdmVyTGluayIsIlNlY3Rpb25Db250YWluZXIiLCJDb2xvclBhbGV0dGUiLCJQb3N0RGV0YWlsc0NvbnRhaW5lciIsImFydGljbGUiLCJVc2VyRGV0YWlsc0NvbnRhaW5lciIsImFzaWRlIiwiZ3JheSIsImxpZ2h0IiwiTW92aWVEZXRhaWxzQ29udGFpbmVyIiwiZGl2IiwiQXJ0UG9zdFRpdGxlIiwiTW92aWVEZXRhaWxzIiwicG9zdERhdGEiLCJoMSIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHJlZiIsIlVzZXIiLCJpZCIsInBhc3NIcmVmIiwiaWNvbiIsInVzZXJuYW1lIiwiTW92aWUiLCJpbWRiSWQiLCJyb2xlIiwic3JjIiwiYXZhdGFyVVJMIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaDQiLCJwIiwiYm9keSIsInByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwibnVtYmVyIiwiaW1hZ2VVUkwiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[postId]/index.tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: 1px solid \",\n        \";\\n  border-bottom: none;\\n  margin-top: 1rem;\\n  background-color: \",\n        \";\\n  padding: 0.4rem;\\n  position: relative;\\n  display: flex;\\n  gap: 1rem;\\n  h4 {\\n    font-weight: 600;\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: 1px solid \",\n        \";\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 1rem;\\n  align-self: center;\\n  padding: 0.7rem;\\n  border-radius: 2rem;\\n  position: relative;\\n  h1 {\\n    color: \",\n        \";\\n    text-transform: lowercase;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    letter-spacing: -0.1rem;\\n    text-shadow: 0 0 4rem \",\n        \";\\n  }\\n  div {\\n    overflow: hidden;\\n    width: 100%;\\n    height: 100%;\\n    img {\\n      position: absolute;\\n      display: block;\\n      opacity: 0.1;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar PostDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].article.withConfig({\n    displayName: \"[postId]__PostDetailsContainer\",\n    componentId: \"sc-277ae948-0\"\n})(_templateObject());\n_c = PostDetailsContainer;\nvar UserDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].aside.withConfig({\n    displayName: \"[postId]__UserDetailsContainer\",\n    componentId: \"sc-277ae948-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].light);\n_c1 = UserDetailsContainer;\nvar MovieDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"[postId]__MovieDetailsContainer\",\n    componentId: \"sc-277ae948-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray);\n_c2 = MovieDetailsContainer;\nvar ArtPostTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"[postId]__ArtPostTitle\",\n    componentId: \"sc-277ae948-3\"\n})(_templateObject3(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].light);\n_c3 = ArtPostTitle;\nfunction MovieDetails(param) {\n    var postData = param.postData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.SectionContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostDetailsContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArtPostTitle, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: postData.Movie.imageURL,\n                                layout: \"fill\",\n                                objectFit: \"cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: postData.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserDetailsContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"user-image\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg/220px-Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg\",\n                                height: \"100\",\n                                width: \"100\",\n                                objectFit: \"cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: postData.User.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieDetailsContainer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: postData.body\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this));\n}\n_c4 = MovieDetails;\nMovieDetails.propTypes = {\n    postData: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({\n        title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n        body: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n        User: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({\n            username: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)\n        }),\n        Movie: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({\n            imageURL: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)\n        })\n    }).isRequired\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetails);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"PostDetailsContainer\");\n$RefreshReg$(_c1, \"UserDetailsContainer\");\n$RefreshReg$(_c2, \"MovieDetailsContainer\");\n$RefreshReg$(_c3, \"ArtPostTitle\");\n$RefreshReg$(_c4, \"MovieDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFOEI7QUFDSTtBQUNJO0FBQ3lCO0FBRVI7Ozs7Ozs7Ozs7Ozs7UUFFWCxDQUc1Qzs7Ozs7Ozs7O1FBRTBDLENBQ3RCO1FBQW9CLENBR3BCO1FBQW9CLENBTzdCO1FBQXFCLENBRWhDOzs7Ozs7Ozs7UUFFeUMsQ0FDckI7UUFBb0IsQ0FFeEM7Ozs7Ozs7OztRQUVnQyxDQU9yQjtRQUFxQixDQUtOO1FBQXFCLENBWS9DOzs7Ozs7O0FBakRBLEdBQUssQ0FBQ0ssb0JBQW9CLEdBQUdILDRFQUFjOzs7O0tBQXJDRyxvQkFBb0I7QUFLMUIsR0FBSyxDQUFDRSxvQkFBb0IsR0FBR0wsMEVBQVk7Ozt1QkFDbkJFLGlFQUFpQixFQUdqQkEsaUVBQWlCLEVBTzFCQSxrRUFBa0I7TUFYekJHLG9CQUFvQjtBQWUxQixHQUFLLENBQUNJLHFCQUFxQixHQUFHVCx3RUFBVTs7O3VCQUNsQkUsaUVBQWlCO01BRGpDTyxxQkFBcUI7QUFLM0IsR0FBSyxDQUFDRSxZQUFZLEdBQUdYLHdFQUFVOzs7dUJBT2xCRSxrRUFBa0IsRUFLSEEsa0VBQWtCO01BWnhDUyxZQUFZO1NBMEJUQyxZQUFZLENBQUMsS0FBc0MsRUFBRSxDQUFDO1FBQXZDQyxRQUFRLEdBQVYsS0FBc0MsQ0FBcENBLFFBQVE7SUFDOUIsTUFBTSw2RUFDSFosa0VBQWdCOzhGQUNkRSxvQkFBb0I7OzRGQUNsQlEsWUFBWTs7b0dBQ1ZELENBQUc7a0hBQ0RaLG1EQUFLO2dDQUNKZ0IsR0FBRyxFQUFFRCxRQUFRLENBQUNFLEtBQUssQ0FBQ0MsUUFBUTtnQ0FDNUJDLE1BQU0sRUFBQyxDQUFNO2dDQUNiQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7Ozs7b0dBR3BCQyxDQUFFO3NDQUFFTixRQUFRLENBQUNPLEtBQUs7Ozs7Ozs7Ozs7Ozs0RkFFcEJmLG9CQUFvQjs7b0dBQ2xCSyxDQUFHOzRCQUFDVyxTQUFTLEVBQUMsQ0FBWTtrSEFDeEJ2QixtREFBSztnQ0FDSmdCLEdBQUcsRUFBQyxDQUEySztnQ0FDL0tRLE1BQU0sRUFBQyxDQUFLO2dDQUNaQyxLQUFLLEVBQUMsQ0FBSztnQ0FDWEwsU0FBUyxFQUFDLENBQU87Ozs7Ozs7Ozs7O29HQUdwQk0sQ0FBRTtzQ0FBRVgsUUFBUSxDQUFDWSxJQUFJLENBQUNDLFFBQVE7Ozs7Ozs7Ozs7Ozs0RkFFNUJqQixxQkFBcUI7MEdBQ25Ca0IsQ0FBQztrQ0FBRWQsUUFBUSxDQUFDZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCLENBQUM7TUEvQlFoQixZQUFZO0FBK0NyQkEsWUFBWSxDQUFDaUIsU0FBUyxHQUFHLENBQUM7SUFDeEJoQixRQUFRLEVBQUVkLHVEQUFlLENBQUMsQ0FBQztRQUN6QnFCLEtBQUssRUFBRXJCLDBEQUFnQjtRQUN2QjZCLElBQUksRUFBRTdCLDBEQUFnQjtRQUN0QjBCLElBQUksRUFBRTFCLHVEQUFlLENBQUMsQ0FBQztZQUFDMkIsUUFBUSxFQUFFM0IsMERBQWdCO1FBQUMsQ0FBQztRQUNwRGdCLEtBQUssRUFBRWhCLHVEQUFlLENBQUMsQ0FBQztZQUFDaUIsUUFBUSxFQUFFakIsMERBQWdCO1FBQUMsQ0FBQztJQUN2RCxDQUFDLEVBQUVpQyxVQUFVO0FBQ2YsQ0FBQzs7QUFFRCwrREFBZXBCLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bcG9zdElkXS9pbmRleC50c3g/MTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU2VjdGlvbkNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RhYmxvaWRzXCI7XG5pbXBvcnQgeyBQb3N0U2NoZW1hIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuXG5jb25zdCBQb3N0RGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5hcnRpY2xlYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgVXNlckRldGFpbHNDb250YWluZXIgPSBzdHlsZWQuYXNpZGVgXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgfVxuYDtcblxuY29uc3QgTW92aWVEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIHBhZGRpbmc6IDFyZW07XG5gO1xuXG5jb25zdCBBcnRQb3N0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoMSB7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNHJlbSAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gIH1cbiAgZGl2IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvcGFjaXR5OiAwLjE7XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBNb3ZpZURldGFpbHMoeyBwb3N0RGF0YSB9OiB7IHBvc3REYXRhOiBQb3N0U2NoZW1hIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxQb3N0RGV0YWlsc0NvbnRhaW5lcj5cbiAgICAgICAgPEFydFBvc3RUaXRsZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17cG9zdERhdGEuTW92aWUuaW1hZ2VVUkx9XG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgPC9BcnRQb3N0VGl0bGU+XG4gICAgICAgIDxVc2VyRGV0YWlsc0NvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW1hZ2VcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNWEvSmVmZl9TZXNzaW9uc193aXRoX0VsbW9fYW5kX1Jvc2l0YV8lMjhjcm9wcGVkJTI5LmpwZy8yMjBweC1KZWZmX1Nlc3Npb25zX3dpdGhfRWxtb19hbmRfUm9zaXRhXyUyOGNyb3BwZWQlMjkuanBnXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDBcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoND57cG9zdERhdGEuVXNlci51c2VybmFtZX08L2g0PlxuICAgICAgICA8L1VzZXJEZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICA8TW92aWVEZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICAgIDxwPntwb3N0RGF0YS5ib2R5fTwvcD5cbiAgICAgICAgPC9Nb3ZpZURldGFpbHNDb250YWluZXI+XG4gICAgICA8L1Bvc3REZXRhaWxzQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKFxuICBjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XG4pID0+IHtcbiAgY29uc3QgcG9zdFJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hcGkvcG9zdHMvJHtjb250ZXh0LnF1ZXJ5LnBvc3RJZH1gXG4gICk7XG4gIGNvbnN0IHBvc3REYXRhID0gcG9zdFJlcy5kYXRhO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuTW92aWVEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgcG9zdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBVc2VyOiBQcm9wVHlwZXMuc2hhcGUoeyB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZyB9KSxcbiAgICBNb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHsgaW1hZ2VVUkw6IFByb3BUeXBlcy5zdHJpbmcgfSksXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZURldGFpbHM7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJTZWN0aW9uQ29udGFpbmVyIiwiQ29sb3JQYWxldHRlIiwiUG9zdERldGFpbHNDb250YWluZXIiLCJhcnRpY2xlIiwiVXNlckRldGFpbHNDb250YWluZXIiLCJhc2lkZSIsImdyYXkiLCJsaWdodCIsIk1vdmllRGV0YWlsc0NvbnRhaW5lciIsImRpdiIsIkFydFBvc3RUaXRsZSIsIk1vdmllRGV0YWlscyIsInBvc3REYXRhIiwic3JjIiwiTW92aWUiLCJpbWFnZVVSTCIsImxheW91dCIsIm9iamVjdEZpdCIsImgxIiwidGl0bGUiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsImg0IiwiVXNlciIsInVzZXJuYW1lIiwicCIsImJvZHkiLCJwcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[postId]/index.tsx\n");

/***/ })

});
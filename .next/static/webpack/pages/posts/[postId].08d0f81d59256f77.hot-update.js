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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: 1px solid \",\n        \";\\n  border-bottom: none;\\n  margin-top: 1rem;\\n  background-color: \",\n        \";\\n  padding: 0.4rem;\\n  display: flex;\\n  align-items: flex-start;\\n  gap: 1rem;\\n  .user-avatar {\\n    border: 5px solid;\\n    border-image-slice: 1;\\n    border-image-source: linear-gradient(to right, blue, purple);\\n  }\\n  h4 {\\n    font-weight: 600;\\n    color: \",\n        \";\\n  }\\n  p {\\n    font-size: 0.8rem;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: 1px solid \",\n        \";\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-top: 1rem;\\n  align-self: center;\\n  border-radius: 2rem;\\n  position: relative;\\n  h1 {\\n    color: \",\n        \";\\n    text-transform: lowercase;\\n    font-size: 2rem;\\n    font-weight: 400;\\n    letter-spacing: -0.1rem;\\n    text-shadow: 0 0 4rem \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar PostDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].article.withConfig({\n    displayName: \"[postId]__PostDetailsContainer\",\n    componentId: \"sc-68826960-0\"\n})(_templateObject());\n_c = PostDetailsContainer;\nvar UserDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].aside.withConfig({\n    displayName: \"[postId]__UserDetailsContainer\",\n    componentId: \"sc-68826960-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].light);\n_c1 = UserDetailsContainer;\nvar MovieDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"[postId]__MovieDetailsContainer\",\n    componentId: \"sc-68826960-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gray);\n_c2 = MovieDetailsContainer;\nvar ArtPostTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"[postId]__ArtPostTitle\",\n    componentId: \"sc-68826960-3\"\n})(_templateObject3(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].light);\n_c3 = ArtPostTitle;\nfunction MovieDetails(param) {\n    var postData = param.postData;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.SectionContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostDetailsContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArtPostTitle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserDetailsContainer, {\n                    role: postData.User.role,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"user-avatar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg/220px-Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg\",\n                                layout: \"fill\",\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: postData.User.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Messages: 123\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieDetailsContainer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: postData.body\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this));\n}\n_c4 = MovieDetails;\nMovieDetails.propTypes = {\n    postData: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({\n        title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n        body: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n        User: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({\n            username: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n            role: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)\n        }),\n        Movie: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({\n            imageURL: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)\n        })\n    }).isRequired\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetails);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"PostDetailsContainer\");\n$RefreshReg$(_c1, \"UserDetailsContainer\");\n$RefreshReg$(_c2, \"MovieDetailsContainer\");\n$RefreshReg$(_c3, \"ArtPostTitle\");\n$RefreshReg$(_c4, \"MovieDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFOEI7QUFDSTtBQUNJO0FBQ3lCO0FBRVI7Ozs7Ozs7Ozs7Ozs7UUFFWCxDQUc1Qzs7Ozs7Ozs7O1FBRTBDLENBQ3RCO1FBQW9CLENBR3BCO1FBQW9CLENBWTdCO1FBQXFCLENBS2hDOzs7Ozs7Ozs7UUFFeUMsQ0FDckI7UUFBb0IsQ0FFeEM7Ozs7Ozs7OztRQUVnQyxDQU1yQjtRQUFxQixDQUtOO1FBQXFCLENBRS9DOzs7Ozs7O0FBOUNBLEdBQUssQ0FBQ0ssb0JBQW9CLEdBQUdILDRFQUFjOzs7O0tBQXJDRyxvQkFBb0I7QUFLMUIsR0FBSyxDQUFDRSxvQkFBb0IsR0FBR0wsMEVBQVk7Ozt1QkFDbkJFLGlFQUFpQixFQUdqQkEsaUVBQWlCLEVBWTFCQSxrRUFBa0I7TUFoQnpCRyxvQkFBb0I7QUF1QjFCLEdBQUssQ0FBQ0kscUJBQXFCLEdBQUdULHdFQUFVOzs7dUJBQ2xCRSxpRUFBaUI7TUFEakNPLHFCQUFxQjtBQUszQixHQUFLLENBQUNFLFlBQVksR0FBR1gsd0VBQVU7Ozt1QkFNbEJFLGtFQUFrQixFQUtIQSxrRUFBa0I7TUFYeENTLFlBQVk7U0FlVEMsWUFBWSxDQUFDLEtBQXNDLEVBQUUsQ0FBQztRQUF2Q0MsUUFBUSxHQUFWLEtBQXNDLENBQXBDQSxRQUFRO0lBQzlCLE1BQU0sNkVBQ0haLGtFQUFnQjs4RkFDZEUsb0JBQW9COzs0RkFDbEJRLFlBQVk7MEdBQ1ZHLENBQUU7a0NBQUVELFFBQVEsQ0FBQ0UsS0FBSzs7Ozs7Ozs7Ozs7NEZBRXBCVixvQkFBb0I7b0JBQUNXLElBQUksRUFBRUgsUUFBUSxDQUFDSSxJQUFJLENBQUNELElBQUk7O29HQUMzQ04sQ0FBRzs0QkFBQ1EsU0FBUyxFQUFDLENBQWE7a0hBQ3pCcEIsbURBQUs7Z0NBQ0pxQixHQUFHLEVBQUMsQ0FBMks7Z0NBQy9LQyxNQUFNLEVBQUMsQ0FBTTtnQ0FDYkMsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7Ozs7O29HQUd0QlgsQ0FBRzs7NEdBQ0RZLENBQUU7OENBQUVULFFBQVEsQ0FBQ0ksSUFBSSxDQUFDTSxRQUFROzs7Ozs7NEdBQzFCQyxDQUFDOzhDQUFDLENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFHbkJmLHFCQUFxQjswR0FDbkJlLENBQUM7a0NBQUVYLFFBQVEsQ0FBQ1ksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQixDQUFDO01BMUJRYixZQUFZO0FBMENyQkEsWUFBWSxDQUFDYyxTQUFTLEdBQUcsQ0FBQztJQUN4QmIsUUFBUSxFQUFFZCx1REFBZSxDQUFDLENBQUM7UUFDekJnQixLQUFLLEVBQUVoQiwwREFBZ0I7UUFDdkIwQixJQUFJLEVBQUUxQiwwREFBZ0I7UUFDdEJrQixJQUFJLEVBQUVsQix1REFBZSxDQUFDLENBQUM7WUFDckJ3QixRQUFRLEVBQUV4QiwwREFBZ0I7WUFDMUJpQixJQUFJLEVBQUVqQiwwREFBZ0I7UUFDeEIsQ0FBQztRQUNEOEIsS0FBSyxFQUFFOUIsdURBQWUsQ0FBQyxDQUFDO1lBQUMrQixRQUFRLEVBQUUvQiwwREFBZ0I7UUFBQyxDQUFDO0lBQ3ZELENBQUMsRUFBRWdDLFVBQVU7QUFDZixDQUFDOztBQUVELCtEQUFlbkIsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1twb3N0SWRdL2luZGV4LnRzeD8xMjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTZWN0aW9uQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibG9pZHNcIjtcbmltcG9ydCB7IFBvc3RTY2hlbWEgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3R5cGVzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5cbmNvbnN0IFBvc3REZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmFydGljbGVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBVc2VyRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5hc2lkZWBcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG4gIC51c2VyLWF2YXRhciB7XG4gICAgYm9yZGVyOiA1cHggc29saWQ7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmx1ZSwgcHVycGxlKTtcbiAgfVxuICBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG5gO1xuXG5jb25zdCBNb3ZpZURldGFpbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgcGFkZGluZzogMXJlbTtcbmA7XG5cbmNvbnN0IEFydFBvc3RUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoMSB7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNHJlbSAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1vdmllRGV0YWlscyh7IHBvc3REYXRhIH06IHsgcG9zdERhdGE6IFBvc3RTY2hlbWEgfSkge1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFBvc3REZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICA8QXJ0UG9zdFRpdGxlPlxuICAgICAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgPC9BcnRQb3N0VGl0bGU+XG4gICAgICAgIDxVc2VyRGV0YWlsc0NvbnRhaW5lciByb2xlPXtwb3N0RGF0YS5Vc2VyLnJvbGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNWEvSmVmZl9TZXNzaW9uc193aXRoX0VsbW9fYW5kX1Jvc2l0YV8lMjhjcm9wcGVkJTI5LmpwZy8yMjBweC1KZWZmX1Nlc3Npb25zX3dpdGhfRWxtb19hbmRfUm9zaXRhXyUyOGNyb3BwZWQlMjkuanBnXCJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0Pntwb3N0RGF0YS5Vc2VyLnVzZXJuYW1lfTwvaDQ+XG4gICAgICAgICAgICA8cD5NZXNzYWdlczogMTIzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1VzZXJEZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICA8TW92aWVEZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICAgIDxwPntwb3N0RGF0YS5ib2R5fTwvcD5cbiAgICAgICAgPC9Nb3ZpZURldGFpbHNDb250YWluZXI+XG4gICAgICA8L1Bvc3REZXRhaWxzQ29udGFpbmVyPlxuICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKFxuICBjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XG4pID0+IHtcbiAgY29uc3QgcG9zdFJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hcGkvcG9zdHMvJHtjb250ZXh0LnF1ZXJ5LnBvc3RJZH1gXG4gICk7XG4gIGNvbnN0IHBvc3REYXRhID0gcG9zdFJlcy5kYXRhO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuTW92aWVEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgcG9zdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYm9keTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBVc2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIE1vdmllOiBQcm9wVHlwZXMuc2hhcGUoeyBpbWFnZVVSTDogUHJvcFR5cGVzLnN0cmluZyB9KSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllRGV0YWlscztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlNlY3Rpb25Db250YWluZXIiLCJDb2xvclBhbGV0dGUiLCJQb3N0RGV0YWlsc0NvbnRhaW5lciIsImFydGljbGUiLCJVc2VyRGV0YWlsc0NvbnRhaW5lciIsImFzaWRlIiwiZ3JheSIsImxpZ2h0IiwiTW92aWVEZXRhaWxzQ29udGFpbmVyIiwiZGl2IiwiQXJ0UG9zdFRpdGxlIiwiTW92aWVEZXRhaWxzIiwicG9zdERhdGEiLCJoMSIsInRpdGxlIiwicm9sZSIsIlVzZXIiLCJjbGFzc05hbWUiLCJzcmMiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJoNCIsInVzZXJuYW1lIiwicCIsImJvZHkiLCJwcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsIk1vdmllIiwiaW1hZ2VVUkwiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[postId]/index.tsx\n");

/***/ })

});
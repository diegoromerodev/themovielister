"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tabloids */ \"./components/tabloids.tsx\");\n\n/* eslint-disable jsx-a11y/anchor-is-valid */ \n\n\n\nfunction HomePage(param) {\n    var categories = param.categories;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            categories === null || categories === void 0 ? void 0 : categories.map(function(cat) {\n                var _this1 = _this;\n                var ref;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.SectionContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.SectionHeader, {\n                            children: cat.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, _this),\n                        (ref = cat.Posts) === null || ref === void 0 ? void 0 : ref.map(function(post) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/posts/\".concat(post.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.PostItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.MovieThumb, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        layout: \"fill\",\n                                                        objectFit: \"cover\",\n                                                        src: post.Movie.imageURL,\n                                                        alt: \"\".concat(post.Movie.title, \" poster\")\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 33,\n                                                        columnNumber: 23\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                        children: [\n                                                            post.Movie.title,\n                                                            \" (\",\n                                                            post.Movie.year,\n                                                            \")\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.PostInfo, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: post.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                    children: [\n                                                        \"Created on \",\n                                                        new Date(post.createdAt).toUTCString()\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, \"post-index-\".concat(post.id), false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    ]\n                }, \"category-header-\".concat(cat.id), true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this));\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c = HomePage;\nHomePage.propTypes = {\n    categories: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({\n        name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired)\n    })).isRequired\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUE2Qyw0Q0FDZjtBQUdJO0FBQ047QUFRRztTQUd0QlEsUUFBUSxDQUFDLEtBQWdELEVBQUUsQ0FBQztRQUFqREMsVUFBVSxHQUFaLEtBQWdELENBQTlDQSxVQUFVOztJQUM1QixNQUFNOztZQUVEQSxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxVQUFVLENBQUVDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDOztvQkFJcEJBLEdBQVM7Z0JBSGQsTUFBTSw2RUFDSEwsa0VBQWdCOztvR0FDZEMsK0RBQWE7c0NBQUVJLEdBQUcsQ0FBQ0MsSUFBSTs7Ozs7O3lCQUN2QkQsR0FBUyxHQUFUQSxHQUFHLENBQUNFLEtBQUssY0FBVEYsR0FBUyxLQUFUQSxJQUFJRSxDQUFKRixDQUFjLEdBQWRBLElBQUlFLENBQUpGLENBQWMsR0FBZEEsR0FBUyxDQUFFRCxHQUFHLENBQUMsUUFBUSxDQUFQSSxJQUFJOzBDQUNuQixNQUNkLENBQUMsOERBRGNaLGtEQUFJO2dDQUVIYSxJQUFJLEVBQUcsQ0FBTyxTQUFVLE9BQVJELElBQUksQ0FBQ0UsRUFBRTtnQ0FDdkJDLFFBQVE7c0hBRVBaLDBEQUFROztvSEFDTkYsNERBQVU7a0lBQ1JlLENBQUc7O2dJQUNEbEIsbURBQUs7d0RBQ0ptQixNQUFNLEVBQUMsQ0FBTTt3REFDYkMsU0FBUyxFQUFDLENBQU87d0RBQ2pCQyxHQUFHLEVBQUVQLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxRQUFRO3dEQUN4QkMsR0FBRyxFQUFHLEdBQW1CLE1BQU8sQ0FBeEJWLElBQUksQ0FBQ1EsS0FBSyxDQUFDRyxLQUFLLEVBQUMsQ0FBTzs7Ozs7O2dJQUVqQ0MsQ0FBRTs7NERBQ0FaLElBQUksQ0FBQ1EsS0FBSyxDQUFDRyxLQUFLOzREQUFDLENBQUU7NERBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDSyxJQUFJOzREQUFDLENBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0hBR0h2QiwwREFBUTs7NEhBQ053QixDQUFDOzhEQUFFZCxJQUFJLENBQUNXLEtBQUs7Ozs7Ozs0SEFDYkksQ0FBSzs7d0RBQUMsQ0FDTTt3REFBQyxHQUFHLENBQUNDLElBQUksQ0FBQ2hCLElBQUksQ0FBQ2lCLFNBQVMsRUFBRUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFyQmhELENBQVcsYUFBVSxPQUFSbEIsSUFBSSxDQUFDRSxFQUFFOzs7Ozs7O21CQUpSLENBQWdCLGtCQUFTLE9BQVBMLEdBQUcsQ0FBQ0ssRUFBRTs7Ozs7WUFpQ3BELENBQUM7d0ZBQ0FFLENBQUc7Ozs7Ozs7QUFHVixDQUFDO0tBMUNRVixRQUFRO0FBNkRqQkEsUUFBUSxDQUFDeUIsU0FBUyxHQUFHLENBQUM7SUFDcEJ4QixVQUFVLEVBQUVSLHlEQUFpQixDQUMzQkEsdURBQWUsQ0FBQyxDQUFDO1FBQ2ZXLElBQUksRUFBRVgscUVBQTJCO0lBQ25DLENBQUMsR0FDRG9DLFVBQVU7QUFDZCxDQUFDOztBQUVELCtEQUFlN0IsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcbmltcG9ydCB7XG4gIE1vdmllVGh1bWIsXG4gIFBvc3RJbmZvLFxuICBQb3N0SXRlbSxcbiAgU2VjdGlvbkNvbnRhaW5lcixcbiAgU2VjdGlvbkhlYWRlcixcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFibG9pZHNcIjtcbmltcG9ydCB7IENhdGVnb3J5U2NoZW1hIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSh7IGNhdGVnb3JpZXMgfTogeyBjYXRlZ29yaWVzOiBDYXRlZ29yeVNjaGVtYVtdIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NhdGVnb3JpZXM/Lm1hcCgoY2F0KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFNlY3Rpb25Db250YWluZXIga2V5PXtgY2F0ZWdvcnktaGVhZGVyLSR7Y2F0LmlkfWB9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXI+e2NhdC5uYW1lfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgIHtjYXQuUG9zdHM/Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17YHBvc3QtaW5kZXgtJHtwb3N0LmlkfWB9XG4gICAgICAgICAgICAgICAgaHJlZj17YC9wb3N0cy8ke3Bvc3QuaWR9YH1cbiAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBvc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPE1vdmllVGh1bWI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5Nb3ZpZS5pbWFnZVVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7cG9zdC5Nb3ZpZS50aXRsZX0gcG9zdGVyYH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0Lk1vdmllLnRpdGxlfSAoe3Bvc3QuTW92aWUueWVhcn0pXG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L01vdmllVGh1bWI+XG4gICAgICAgICAgICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZWQgb24ge25ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KS50b1VUQ1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9Qb3N0SW5mbz5cbiAgICAgICAgICAgICAgICA8L1Bvc3RJdGVtPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxkaXYgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXM6IENhdGVnb3J5U2NoZW1hO1xuICB0cnkge1xuICAgIGF3YWl0IHBnU2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICBjb25zdCBjYXRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vYXBpL2NhdGVnb3JpZXNgKTtcbiAgICBjYXRlZ29yaWVzID0gY2F0UmVzLmRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn07XG5cbkhvbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgY2F0ZWdvcmllczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlByb3BUeXBlcyIsIkxpbmsiLCJNb3ZpZVRodW1iIiwiUG9zdEluZm8iLCJQb3N0SXRlbSIsIlNlY3Rpb25Db250YWluZXIiLCJTZWN0aW9uSGVhZGVyIiwiSG9tZVBhZ2UiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0IiwibmFtZSIsIlBvc3RzIiwicG9zdCIsImhyZWYiLCJpZCIsInBhc3NIcmVmIiwiZGl2IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwic3JjIiwiTW92aWUiLCJpbWFnZVVSTCIsImFsdCIsInRpdGxlIiwiaDQiLCJ5ZWFyIiwicCIsInNtYWxsIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvVVRDU3RyaW5nIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tabloids */ \"./components/tabloids.tsx\");\n\n\n\n\n\nfunction HomePage(param) {\n    var categories = param.categories;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            categories === null || categories === void 0 ? void 0 : categories.map(function(cat) {\n                var _this1 = _this;\n                var ref;\n                console.log(cat.Posts);\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.SectionContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.SectionHeader, {\n                            children: cat.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        (ref = cat.Posts) === null || ref === void 0 ? void 0 : ref.map(function(post) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/posts/\".concat(post.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.PostItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.MovieThumb, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                src: post.Movie.imageURL,\n                                                width: \"100px\",\n                                                height: \"100px\",\n                                                alt: \"\".concat(post.Movie.title, \" poster\")\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.PostInfo, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: post.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                    children: post.createdAt\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    ]\n                }, \"category-header-\".concat(cat.id), true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this));\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c = HomePage;\nHomePage.propTypes = {\n    categories: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({\n        name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired)\n    })).isRequired\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFOEI7QUFHSTtBQUNOO0FBUUc7U0FHdEJRLFFBQVEsQ0FBQyxLQUFnRCxFQUFFLENBQUM7UUFBakRDLFVBQVUsR0FBWixLQUFnRCxDQUE5Q0EsVUFBVTs7SUFDNUIsTUFBTTs7WUFFREEsVUFBVSxhQUFWQSxVQUFVLEtBQVZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsVUFBVSxDQUFFQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQzs7b0JBS3BCQSxHQUFTO2dCQUpkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxLQUFLO2dCQUNyQixNQUFNLDZFQUNIUixrRUFBZ0I7O29HQUNkQywrREFBYTtzQ0FBRUksR0FBRyxDQUFDSSxJQUFJOzs7Ozs7eUJBQ3ZCSixHQUFTLEdBQVRBLEdBQUcsQ0FBQ0csS0FBSyxjQUFUSCxHQUFTLEtBQVRBLElBQUlHLENBQUpILENBQWMsR0FBZEEsSUFBSUcsQ0FBSkgsQ0FBYyxHQUFkQSxHQUFTLENBQUVELEdBQUcsQ0FBQyxRQUFRLENBQVBNLElBQUk7MENBQ25CLE1BQU1DLENBQUFBLDZEQUFBQSxDQUFMZixrREFBSTtnQ0FBQ2UsSUFBSSxFQUFHLENBQU8sU0FBVSxPQUFSRCxJQUFJLENBQUNFLEVBQUU7Z0NBQUlDLFFBQVE7c0hBQ3RDZCwwREFBUTs7b0hBQ05GLDREQUFVO2tJQUNSSCxtREFBSztnREFDSm9CLEdBQUcsRUFBRUosSUFBSSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7Z0RBQ3hCQyxLQUFLLEVBQUMsQ0FBTztnREFDYkMsTUFBTSxFQUFDLENBQU87Z0RBQ2RDLEdBQUcsRUFBRyxHQUFtQixNQUFPLENBQXhCVCxJQUFJLENBQUNLLEtBQUssQ0FBQ0ssS0FBSyxFQUFDLENBQU87Ozs7Ozs7Ozs7O29IQUduQ3RCLDBEQUFROzs0SEFDTnVCLENBQUM7OERBQUVYLElBQUksQ0FBQ1UsS0FBSzs7Ozs7OzRIQUNiRSxDQUFLOzhEQUFFWixJQUFJLENBQUNhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBZlIsQ0FBZ0Isa0JBQVMsT0FBUGxCLEdBQUcsQ0FBQ08sRUFBRTs7Ozs7WUFzQnBELENBQUM7d0ZBQ0FZLENBQUc7Ozs7Ozs7QUFHVixDQUFDO0tBaENRdEIsUUFBUTtBQWtEakJBLFFBQVEsQ0FBQ3VCLFNBQVMsR0FBRyxDQUFDO0lBQ3BCdEIsVUFBVSxFQUFFUix5REFBaUIsQ0FDM0JBLHVEQUFlLENBQUMsQ0FBQztRQUNmYyxJQUFJLEVBQUVkLHFFQUEyQjtJQUNuQyxDQUFDLEdBQ0RrQyxVQUFVO0FBQ2QsQ0FBQzs7QUFFRCwrREFBZTNCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcbmltcG9ydCB7XG4gIE1vdmllVGh1bWIsXG4gIFBvc3RJbmZvLFxuICBQb3N0SXRlbSxcbiAgU2VjdGlvbkNvbnRhaW5lcixcbiAgU2VjdGlvbkhlYWRlcixcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFibG9pZHNcIjtcbmltcG9ydCB7IENhdGVnb3J5U2NoZW1hIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSh7IGNhdGVnb3JpZXMgfTogeyBjYXRlZ29yaWVzOiBDYXRlZ29yeVNjaGVtYVtdIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NhdGVnb3JpZXM/Lm1hcCgoY2F0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhdC5Qb3N0cyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFNlY3Rpb25Db250YWluZXIga2V5PXtgY2F0ZWdvcnktaGVhZGVyLSR7Y2F0LmlkfWB9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXI+e2NhdC5uYW1lfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgIHtjYXQuUG9zdHM/Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8UG9zdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TW92aWVUaHVtYj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0Lk1vdmllLmltYWdlVVJMfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3Bvc3QuTW92aWUudGl0bGV9IHBvc3RlcmB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L01vdmllVGh1bWI+XG4gICAgICAgICAgICAgICAgICA8UG9zdEluZm8+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntwb3N0LmNyZWF0ZWRBdH08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9Qb3N0SW5mbz5cbiAgICAgICAgICAgICAgICA8L1Bvc3RJdGVtPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxkaXYgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXM6IENhdGVnb3J5U2NoZW1hO1xuICB0cnkge1xuICAgIGF3YWl0IHBnU2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICBjb25zdCBjYXRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vYXBpL2NhdGVnb3JpZXNgKTtcbiAgICBjYXRlZ29yaWVzID0gY2F0UmVzLmRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbkhvbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgY2F0ZWdvcmllczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlByb3BUeXBlcyIsIkxpbmsiLCJNb3ZpZVRodW1iIiwiUG9zdEluZm8iLCJQb3N0SXRlbSIsIlNlY3Rpb25Db250YWluZXIiLCJTZWN0aW9uSGVhZGVyIiwiSG9tZVBhZ2UiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0IiwiY29uc29sZSIsImxvZyIsIlBvc3RzIiwibmFtZSIsInBvc3QiLCJocmVmIiwiaWQiLCJwYXNzSHJlZiIsInNyYyIsIk1vdmllIiwiaW1hZ2VVUkwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInRpdGxlIiwicCIsInNtYWxsIiwiY3JlYXRlZEF0IiwiZGl2IiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
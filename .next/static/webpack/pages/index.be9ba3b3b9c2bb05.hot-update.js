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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tabloids */ \"./components/tabloids.tsx\");\n\n/* eslint-disable jsx-a11y/anchor-is-valid */ \n\n\n\n\nvar _s = $RefreshSig$();\nfunction HomePage(param) {\n    var categories = param.categories;\n    var _this = this;\n    _s();\n    var movieAPI = \"http://www.omdbapi.com/?apikey=\".concat(\"4460dc3e\", \"&s=avengers\");\n    var fetcher = function(args) {\n        return fetch(args).then(function(res) {\n            return res.json();\n        });\n    };\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movieAPI, fetcher).data;\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Fetching data...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 21\n    }, this));\n    var movie = data.Search[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            categories === null || categories === void 0 ? void 0 : categories.map(function(cat) {\n                var _this1 = _this;\n                var ref;\n                console.log(cat.Posts);\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_4__.SectionContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_4__.SectionHeader, {\n                            children: cat.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this),\n                        (ref = cat.Posts) === null || ref === void 0 ? void 0 : ref.map(function(post) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/posts/\".concat(post.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_4__.PostItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    ]\n                }, \"category-header-\".concat(cat.id), true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, _this));\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: movie.Title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        layout: \"intrinsic\",\n                        width: 400,\n                        height: \"600\",\n                        src: movie.Poster,\n                        alt: \"\".concat(movie.Title, \" Poster\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(HomePage, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = HomePage;\nHomePage.propTypes = {\n    categories: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({\n        name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired)\n    })).isRequired\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBNkMsNENBQ3JCO0FBQ007QUFHSTtBQUNOO0FBTUc7O1NBR3RCTyxRQUFRLENBQUMsS0FBZ0QsRUFBRSxDQUFDO1FBQWpEQyxVQUFVLEdBQVosS0FBZ0QsQ0FBOUNBLFVBQVU7OztJQUM1QixHQUFLLENBQUNDLFFBQVEsR0FBSSxDQUErQixpQ0FBbUMsTUFBVyxDQUE1Q0MsVUFBZ0MsRUFBQyxDQUFXO0lBQy9GLEdBQUssQ0FBQ0csT0FBTyxHQUFHLFFBQVEsQ0FBUEMsSUFBSTtRQUFLQyxNQUFNRCxDQUFOQyxLQUFLLENBQUNELElBQUksRUFBRUUsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztZQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTs7O0lBQzVELEdBQUssQ0FBR0MsSUFBSSxHQUFLbkIsK0NBQU0sQ0FBQ1MsUUFBUSxFQUFFSSxPQUFPLEVBQWpDTSxJQUFJO0lBQ1osRUFBRSxHQUFHQSxJQUFJLEVBQUUsTUFBTSw2RUFBRUMsQ0FBRTtrQkFBQyxDQUFnQjs7Ozs7O0lBQ3RDLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRixJQUFJLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLE1BQU07O1lBRURkLFVBQVUsYUFBVkEsVUFBVSxLQUFWQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLFVBQVUsQ0FBRWUsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7O29CQUtwQkEsR0FBUztnQkFKZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csS0FBSztnQkFDckIsTUFBTSw2RUFDSHRCLGtFQUFnQjs7b0dBQ2RDLCtEQUFhO3NDQUFFa0IsR0FBRyxDQUFDSSxJQUFJOzs7Ozs7eUJBQ3ZCSixHQUFTLEdBQVRBLEdBQUcsQ0FBQ0csS0FBSyxjQUFUSCxHQUFTLEtBQVRBLElBQUlHLENBQUpILENBQWMsR0FBZEEsSUFBSUcsQ0FBSkgsQ0FBYyxHQUFkQSxHQUFTLENBQUVELEdBQUcsQ0FBQyxRQUFRLENBQVBNLElBQUk7MENBQ25CLE1BQU1DLENBQUFBLDZEQUFBQSxDQUFMM0Isa0RBQUk7Z0NBQUMyQixJQUFJLEVBQUcsQ0FBTyxTQUFVLE9BQVJELElBQUksQ0FBQ0UsRUFBRTtnQ0FBSUMsUUFBUTtzSEFDdEM1QiwwREFBUTs7b0hBQ042QixDQUFDO3NEQUFFSixJQUFJLENBQUNLLEtBQUs7Ozs7OztvSEFDYkQsQ0FBQztzREFBRUosSUFBSSxDQUFDSyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQU5FLENBQWdCLGtCQUFTLE9BQVBWLEdBQUcsQ0FBQ08sRUFBRTs7Ozs7WUFZcEQsQ0FBQzt3RkFDQUksQ0FBRzs7Z0dBQ0RDLENBQUU7a0NBQUVmLEtBQUssQ0FBQ2dCLEtBQUs7Ozs7OztnR0FDZnBDLG1EQUFLO3dCQUNKcUMsTUFBTSxFQUFDLENBQVc7d0JBQ2xCQyxLQUFLLEVBQUUsR0FBRzt3QkFDVkMsTUFBTSxFQUFDLENBQUs7d0JBQ1pDLEdBQUcsRUFBRXBCLEtBQUssQ0FBQ3FCLE1BQU07d0JBQ2pCQyxHQUFHLEVBQUcsR0FBYyxNQUFPLENBQW5CdEIsS0FBSyxDQUFDZ0IsS0FBSyxFQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7O0FBS3JDLENBQUM7R0FwQ1E5QixRQUFROztRQUdFUCwyQ0FBTTs7O0tBSGhCTyxRQUFRO0FBdURqQkEsUUFBUSxDQUFDcUMsU0FBUyxHQUFHLENBQUM7SUFDcEJwQyxVQUFVLEVBQUVOLHlEQUFpQixDQUMzQkEsdURBQWUsQ0FBQyxDQUFDO1FBQ2YwQixJQUFJLEVBQUUxQixxRUFBMkI7SUFDbkMsQ0FBQyxHQUNEOEMsVUFBVTtBQUNkLENBQUM7O0FBRUQsK0RBQWV6QyxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHBnU2VxdWVsaXplIGZyb20gXCIuLi9saWIvc2VxdWVsaXplXCI7XG5pbXBvcnQge1xuICBQb3N0SXRlbSxcbiAgU2VjdGlvbkNvbnRhaW5lcixcbiAgU2VjdGlvbkhlYWRlcixcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFibG9pZHNcIjtcbmltcG9ydCB7IENhdGVnb3J5U2NoZW1hIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSh7IGNhdGVnb3JpZXMgfTogeyBjYXRlZ29yaWVzOiBDYXRlZ29yeVNjaGVtYVtdIH0pIHtcbiAgY29uc3QgbW92aWVBUEkgPSBgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9WSUVLRVl9JnM9YXZlbmdlcnNgO1xuICBjb25zdCBmZXRjaGVyID0gKGFyZ3MpID0+IGZldGNoKGFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKG1vdmllQVBJLCBmZXRjaGVyKTtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGgxPkZldGNoaW5nIGRhdGEuLi48L2gxPjtcbiAgY29uc3QgbW92aWUgPSBkYXRhLlNlYXJjaFswXTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NhdGVnb3JpZXM/Lm1hcCgoY2F0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhdC5Qb3N0cyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFNlY3Rpb25Db250YWluZXIga2V5PXtgY2F0ZWdvcnktaGVhZGVyLSR7Y2F0LmlkfWB9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXI+e2NhdC5uYW1lfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgIHtjYXQuUG9zdHM/Lm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8UG9zdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cD57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cD57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9Qb3N0SXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+e21vdmllLlRpdGxlfTwvaDM+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGxheW91dD1cImludHJpbnNpY1wiXG4gICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICBoZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgIHNyYz17bW92aWUuUG9zdGVyfVxuICAgICAgICAgIGFsdD17YCR7bW92aWUuVGl0bGV9IFBvc3RlcmB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXM6IENhdGVnb3J5U2NoZW1hO1xuICB0cnkge1xuICAgIGF3YWl0IHBnU2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICBjb25zdCBjYXRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vYXBpL2NhdGVnb3JpZXNgKTtcbiAgICBjYXRlZ29yaWVzID0gY2F0UmVzLmRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcmllcyxcbiAgICB9LFxuICB9O1xufTtcblxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xuICBjYXRlZ29yaWVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkltYWdlIiwiUHJvcFR5cGVzIiwiTGluayIsIlBvc3RJdGVtIiwiU2VjdGlvbkNvbnRhaW5lciIsIlNlY3Rpb25IZWFkZXIiLCJIb21lUGFnZSIsImNhdGVnb3JpZXMiLCJtb3ZpZUFQSSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT1ZJRUtFWSIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoMSIsIm1vdmllIiwiU2VhcmNoIiwibWFwIiwiY2F0IiwiY29uc29sZSIsImxvZyIsIlBvc3RzIiwibmFtZSIsInBvc3QiLCJocmVmIiwiaWQiLCJwYXNzSHJlZiIsInAiLCJ0aXRsZSIsImRpdiIsImgzIiwiVGl0bGUiLCJsYXlvdXQiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIlBvc3RlciIsImFsdCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
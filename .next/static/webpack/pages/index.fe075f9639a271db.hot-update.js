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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tabloids */ \"./components/tabloids.tsx\");\n\n\n\n\nfunction HomePage(param) {\n    var categories = param.categories;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            categories === null || categories === void 0 ? void 0 : categories.map(function(cat) {\n                var _this1 = _this;\n                var ref;\n                console.log(cat.Posts);\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.SectionContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.SectionHeader, {\n                            children: cat.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        (ref = cat.Posts) === null || ref === void 0 ? void 0 : ref.map(function(post) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/posts/\".concat(post.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.PostItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.MovieThumb, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.PostInfo, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: post.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                    children: post.createdAt\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    ]\n                }, \"category-header-\".concat(cat.id), true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this));\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c = HomePage;\nHomePage.propTypes = {\n    categories: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({\n        name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)\n    })).isRequired\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS2tDO0FBQ047QUFRRztTQUd0Qk8sUUFBUSxDQUFDLEtBQWdELEVBQUUsQ0FBQztRQUFqREMsVUFBVSxHQUFaLEtBQWdELENBQTlDQSxVQUFVOztJQUM1QixNQUFNOztZQUVEQSxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxVQUFVLENBQUVDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDOztvQkFLcEJBLEdBQVM7Z0JBSmRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLEtBQUs7Z0JBQ3JCLE1BQU0sNkVBQ0hSLGtFQUFnQjs7b0dBQ2RDLCtEQUFhO3NDQUFFSSxHQUFHLENBQUNJLElBQUk7Ozs7Ozt5QkFDdkJKLEdBQVMsR0FBVEEsR0FBRyxDQUFDRyxLQUFLLGNBQVRILEdBQVMsS0FBVEEsSUFBSUcsQ0FBSkgsQ0FBYyxHQUFkQSxJQUFJRyxDQUFKSCxDQUFjLEdBQWRBLEdBQVMsQ0FBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBUE0sSUFBSTswQ0FDbkIsTUFBTUMsQ0FBQUEsNkRBQUFBLENBQUxmLGtEQUFJO2dDQUFDZSxJQUFJLEVBQUcsQ0FBTyxTQUFVLE9BQVJELElBQUksQ0FBQ0UsRUFBRTtnQ0FBSUMsUUFBUTtzSEFDdENkLDBEQUFROztvSEFDTkYsNERBQVU7Ozs7O29IQUNWQywwREFBUTs7NEhBQ05nQixDQUFDOzhEQUFFSixJQUFJLENBQUNLLEtBQUs7Ozs7Ozs0SEFDYkMsQ0FBSzs4REFBRU4sSUFBSSxDQUFDTyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQVJSLENBQWdCLGtCQUFTLE9BQVBaLEdBQUcsQ0FBQ08sRUFBRTs7Ozs7WUFlcEQsQ0FBQzt3RkFDQU0sQ0FBRzs7Ozs7OztBQUdWLENBQUM7S0F6QlFoQixRQUFRO0FBMkNqQkEsUUFBUSxDQUFDaUIsU0FBUyxHQUFHLENBQUM7SUFDcEJoQixVQUFVLEVBQUVSLHlEQUFpQixDQUMzQkEsdURBQWUsQ0FBQyxDQUFDO1FBQ2ZjLElBQUksRUFBRWQscUVBQTJCO0lBQ25DLENBQUMsR0FDRDRCLFVBQVU7QUFDZCxDQUFDOztBQUVELCtEQUFlckIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBwZ1NlcXVlbGl6ZSBmcm9tIFwiLi4vbGliL3NlcXVlbGl6ZVwiO1xuaW1wb3J0IHtcbiAgTW92aWVUaHVtYixcbiAgUG9zdEluZm8sXG4gIFBvc3RJdGVtLFxuICBTZWN0aW9uQ29udGFpbmVyLFxuICBTZWN0aW9uSGVhZGVyLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy90YWJsb2lkc1wiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlTY2hlbWEgfSBmcm9tIFwiLi4vbGliL3R5cGVzXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHsgY2F0ZWdvcmllcyB9OiB7IGNhdGVnb3JpZXM6IENhdGVnb3J5U2NoZW1hW10gfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y2F0ZWdvcmllcz8ubWFwKChjYXQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2F0LlBvc3RzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U2VjdGlvbkNvbnRhaW5lciBrZXk9e2BjYXRlZ29yeS1oZWFkZXItJHtjYXQuaWR9YH0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlcj57Y2F0Lm5hbWV9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgICAge2NhdC5Qb3N0cz8ubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LmlkfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgIDxQb3N0SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNb3ZpZVRodW1iPnsvKiA8SW1hZ2Ugc3JjPVwiXCIgYWx0PVwiXCIgLz4gKi99PC9Nb3ZpZVRodW1iPlxuICAgICAgICAgICAgICAgICAgPFBvc3RJbmZvPlxuICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD57cG9zdC5jcmVhdGVkQXR9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvUG9zdEluZm8+XG4gICAgICAgICAgICAgICAgPC9Qb3N0SXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8ZGl2IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzOiBDYXRlZ29yeVNjaGVtYTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwZ1NlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7XG4gICAgY29uc3QgY2F0UmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2FwaS9jYXRlZ29yaWVzYCk7XG4gICAgY2F0ZWdvcmllcyA9IGNhdFJlcy5kYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXRlZ29yaWVzLFxuICAgIH0sXG4gIH07XG59O1xuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGNhdGVnb3JpZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSlcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiTGluayIsIk1vdmllVGh1bWIiLCJQb3N0SW5mbyIsIlBvc3RJdGVtIiwiU2VjdGlvbkNvbnRhaW5lciIsIlNlY3Rpb25IZWFkZXIiLCJIb21lUGFnZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXQiLCJjb25zb2xlIiwibG9nIiwiUG9zdHMiLCJuYW1lIiwicG9zdCIsImhyZWYiLCJpZCIsInBhc3NIcmVmIiwicCIsInRpdGxlIiwic21hbGwiLCJjcmVhdGVkQXQiLCJkaXYiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
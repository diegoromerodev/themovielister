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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n/* eslint-disable jsx-a11y/anchor-is-valid */ \n\nvar _s = $RefreshSig$();\nfunction HomePage() {\n    _s();\n    var movieAPI = \"http://www.omdbapi.com/?apikey=\".concat(\"4460dc3e\", \"&s=avengers\");\n    var fetcher = function(args) {\n        return fetch(args).then(function(res) {\n            return res.json();\n        });\n    };\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movieAPI, fetcher).data;\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Fetching data...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 21\n    }, this));\n    var movie = data.Search[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: movie.Title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                layout: \"intrinsic\",\n                width: 400,\n                height: \"600\",\n                src: movie.Poster,\n                alt: \"\".concat(movie.Title, \" Poster\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_s(HomePage, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQTZDLDRDQUNyQjtBQUNNOztTQUlyQkUsUUFBUSxHQUFHLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsUUFBUSxHQUFJLENBQStCLGlDQUFtQyxNQUFXLENBQTVDQyxVQUFnQyxFQUFDLENBQVc7SUFDL0YsR0FBSyxDQUFDRyxPQUFPLEdBQUcsUUFBUSxDQUFQQyxJQUFJO1FBQUtDLE1BQU1ELENBQU5DLEtBQUssQ0FBQ0QsSUFBSSxFQUFFRSxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO1lBQUtBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDQyxJQUFJOzs7SUFDNUQsR0FBSyxDQUFHQyxJQUFJLEdBQUtiLCtDQUFNLENBQUNHLFFBQVEsRUFBRUksT0FBTyxFQUFqQ00sSUFBSTtJQUNaLEVBQUUsR0FBR0EsSUFBSSxFQUFFLE1BQU0sNkVBQUVDLENBQUU7a0JBQUMsQ0FBZ0I7Ozs7OztJQUN0QyxHQUFLLENBQUNDLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQztJQUMzQixNQUFNLDZFQUNIQyxDQUFHOzt3RkFDREMsQ0FBRTswQkFBRUgsS0FBSyxDQUFDSSxLQUFLOzs7Ozs7d0ZBQ2ZsQixtREFBSztnQkFDSm1CLE1BQU0sRUFBQyxDQUFXO2dCQUNsQkMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1ZDLE1BQU0sRUFBQyxDQUFLO2dCQUNaQyxHQUFHLEVBQUVSLEtBQUssQ0FBQ1MsTUFBTTtnQkFDakJDLEdBQUcsRUFBRyxHQUFjLE1BQU8sQ0FBbkJWLEtBQUssQ0FBQ0ksS0FBSyxFQUFDLENBQU87Ozs7Ozs7Ozs7OztBQUluQyxDQUFDO0dBbEJRakIsUUFBUTs7UUFHRUYsMkNBQU07OztLQUhoQkUsUUFBUTs7QUFnQ2pCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHBnU2VxdWVsaXplIGZyb20gXCIuLi9saWIvc2VxdWVsaXplXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBtb3ZpZUFQSSA9IGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT1ZJRUtFWX0mcz1hdmVuZ2Vyc2A7XG4gIGNvbnN0IGZldGNoZXIgPSAoYXJncykgPT4gZmV0Y2goYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IobW92aWVBUEksIGZldGNoZXIpO1xuICBpZiAoIWRhdGEpIHJldHVybiA8aDE+RmV0Y2hpbmcgZGF0YS4uLjwvaDE+O1xuICBjb25zdCBtb3ZpZSA9IGRhdGEuU2VhcmNoWzBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+e21vdmllLlRpdGxlfTwvaDM+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCJcbiAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgaGVpZ2h0PVwiNjAwXCJcbiAgICAgICAgc3JjPXttb3ZpZS5Qb3N0ZXJ9XG4gICAgICAgIGFsdD17YCR7bW92aWUuVGl0bGV9IFBvc3RlcmB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IHBnU2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3MgYXV0aGVudGljYXRpbmdcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwiQXV0aCBmYWlsZWRcIiwgZXJyKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkltYWdlIiwiSG9tZVBhZ2UiLCJtb3ZpZUFQSSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT1ZJRUtFWSIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoMSIsIm1vdmllIiwiU2VhcmNoIiwiZGl2IiwiaDMiLCJUaXRsZSIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiUG9zdGVyIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
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

/***/ "./lib/utils.tsx":
/*!***********************!*\
  !*** ./lib/utils.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateAge\": function() { return /* binding */ calculateAge; },\n/* harmony export */   \"fakeFn\": function() { return /* binding */ fakeFn; }\n/* harmony export */ });\nvar calculateAge = function(dateToCompare) {\n    var dateRange = new Date().getTime() - dateToCompare.getTime();\n    var numberOfDays = dateRange / 86400000;\n    if (numberOfDays < 1) {\n        return \"\".concat(numberOfDays * 24, \" hours\");\n    }\n};\nvar fakeFn = function() {\n    return true;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sR0FBSyxDQUFDQSxZQUFZLEdBQUcsUUFBUSxDQUFQQyxhQUFtQixFQUFhLENBQUM7SUFDNUQsR0FBSyxDQUFDQyxTQUFTLEdBQUcsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLE9BQU8sS0FBS0gsYUFBYSxDQUFDRyxPQUFPO0lBQzlELEdBQUssQ0FBQ0MsWUFBWSxHQUFHSCxTQUFTLEdBQUcsUUFBTTtJQUN2QyxFQUFFLEVBQUVHLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUUsR0FBb0IsTUFBTSxDQUF4QkEsWUFBWSxHQUFHLEVBQUUsRUFBQyxDQUFNO0lBQ3BDLENBQUM7QUFDSCxDQUFDO0FBRU0sR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztJQUMzQixNQUFNLENBQUMsSUFBSTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLnRzeD82ZTZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYWxjdWxhdGVBZ2UgPSAoZGF0ZVRvQ29tcGFyZTogRGF0ZSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGVSYW5nZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG4gIGNvbnN0IG51bWJlck9mRGF5cyA9IGRhdGVSYW5nZSAvIDguNjRlNztcbiAgaWYgKG51bWJlck9mRGF5cyA8IDEpIHtcbiAgICByZXR1cm4gYCR7bnVtYmVyT2ZEYXlzICogMjR9IGhvdXJzYDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZha2VGbiA9ICgpID0+IHtcbiAgcmV0dXJuIHRydWU7XG59O1xuIl0sIm5hbWVzIjpbImNhbGN1bGF0ZUFnZSIsImRhdGVUb0NvbXBhcmUiLCJkYXRlUmFuZ2UiLCJEYXRlIiwiZ2V0VGltZSIsIm51bWJlck9mRGF5cyIsImZha2VGbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/utils.tsx\n");

/***/ })

});
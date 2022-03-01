"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/movies";
exports.ids = ["pages/api/movies"];
exports.modules = {

/***/ "(api)/./pages/api/movies/index.js":
/*!***********************************!*\
  !*** ./pages/api/movies/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviesHandler = (req, res)=>{\n    const { method  } = req;\n    if (method === \"POST\") {\n        return res.status(200).json({\n            movies: [\n                \"New movie added\"\n            ]\n        });\n    }\n    return res.status(200).json({\n        movies: []\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92aWVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLGFBQWEsSUFBSUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNuQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEVBQUMsQ0FBQyxHQUFHRixHQUFHO0lBQ3RCLEVBQUUsRUFBRUUsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFBQSxDQUFpQjtZQUFBLENBQUM7UUFBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxNQUFNLENBQUNKLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0MsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVELGlFQUFlTixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3BhZ2VzL2FwaS9tb3ZpZXMvaW5kZXguanM/ODgwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb3ZpZXNIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbW92aWVzOiBbXCJOZXcgbW92aWUgYWRkZWRcIl0gfSk7XG4gIH1cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbW92aWVzOiBbXSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllc0hhbmRsZXI7XG4iXSwibmFtZXMiOlsibW92aWVzSGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtb3ZpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/movies/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/movies/index.js"));
module.exports = __webpack_exports__;

})();
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
exports.id = "pages/api/movies/[movieId]";
exports.ids = ["pages/api/movies/[movieId]"];
exports.modules = {

/***/ "(api)/./pages/api/movies/[movieId].js":
/*!***************************************!*\
  !*** ./pages/api/movies/[movieId].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieHandler = (req, res)=>{\n    const { movieId  } = req.query;\n    res.status(200).json({\n        movie: movieId\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92aWVzL1ttb3ZpZUlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxZQUFZLElBQUlDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxFQUFDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBQzdCRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1FBQUNDLEtBQUssRUFBRUosT0FBTztJQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELGlFQUFlSCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3BhZ2VzL2FwaS9tb3ZpZXMvW21vdmllSWRdLmpzPzQxMTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW92aWVIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgbW92aWVJZCB9ID0gcmVxLnF1ZXJ5O1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1vdmllOiBtb3ZpZUlkIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92aWVIYW5kbGVyO1xuIl0sIm5hbWVzIjpbIm1vdmllSGFuZGxlciIsInJlcSIsInJlcyIsIm1vdmllSWQiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJtb3ZpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/movies/[movieId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/movies/[movieId].js"));
module.exports = __webpack_exports__;

})();
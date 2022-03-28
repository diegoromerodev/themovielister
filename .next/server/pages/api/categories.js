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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ "(api)/./lib/sequelize.js":
/*!**************************!*\
  !*** ./lib/sequelize.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);\nsequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst pgSequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize(process.env.PG_DATABASE);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pgSequelize);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VxdWVsaXplLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBRXJDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ0QsZ0RBQVMsQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7QUFFekQsaUVBQWVILFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vbGliL3NlcXVlbGl6ZS5qcz84ODFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuY29uc3QgcGdTZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52LlBHX0RBVEFCQVNFKTtcblxuZXhwb3J0IGRlZmF1bHQgcGdTZXF1ZWxpemU7XG4iXSwibmFtZXMiOlsiU2VxdWVsaXplIiwicGdTZXF1ZWxpemUiLCJwcm9jZXNzIiwiZW52IiwiUEdfREFUQUJBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/sequelize.js\n");

/***/ }),

/***/ "(api)/./pages/api/categories/index.ts":
/*!***************************************!*\
  !*** ./pages/api/categories/index.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sequelize */ \"(api)/./lib/sequelize.js\");\n/* harmony import */ var _schemas_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../schemas/category */ \"(api)/./schemas/category.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_sequelize__WEBPACK_IMPORTED_MODULE_0__, _schemas_category__WEBPACK_IMPORTED_MODULE_1__]);\n([_lib_sequelize__WEBPACK_IMPORTED_MODULE_0__, _schemas_category__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst categoriesHandler = async (req, res)=>{\n    let catData;\n    try {\n        switch(req.method){\n            case \"POST\":\n                catData = await _schemas_category__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                    name: req.body.name\n                });\n                break;\n            default:\n                [catData] = await _lib_sequelize__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(`SELECT * FROM \"Categories\" \n          JOIN \"Posts\" ON \"Categories\".id = \"Posts\".\"CategoryId\"\n          JOIN \"Users\" ON \"Users\".id = \"Posts\".\"UserId\";`);\n                console.log({\n                    catData\n                });\n        }\n    } catch (err) {\n        console.log(err);\n        return res.status(400).send(\"Invalid request\");\n    }\n    return res.json(catData);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoriesHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0Q7QUFDQTtBQUloRCxLQUFLLENBQUNFLGlCQUFpQixVQUFVQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDOUUsR0FBRyxDQUFDQyxPQUFPO0lBQ1gsR0FBRyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUVGLEdBQUcsQ0FBQ0csTUFBTTtZQUNoQixJQUFJLENBQUMsQ0FBTTtnQkFDVEQsT0FBTyxHQUFHLEtBQUssQ0FBQ0osZ0VBQWUsQ0FBQyxDQUFDO29CQUMvQk8sSUFBSSxFQUFFTCxHQUFHLENBQUNNLElBQUksQ0FBQ0QsSUFBSTtnQkFDckIsQ0FBQztnQkFDRCxLQUFLOztpQkFFSkgsT0FBTyxJQUFJLEtBQUssQ0FBQ0wsNERBQWlCLEVBQ2hDOzt3REFFNkM7Z0JBRWhEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDO29CQUFDUCxPQUFPO2dCQUFDLENBQUM7O0lBRTdCLENBQUMsQ0FBQyxLQUFLLEVBQUVRLEdBQUcsRUFBRSxDQUFDO1FBQ2JGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHO1FBQ2YsTUFBTSxDQUFDVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFpQjtJQUMvQyxDQUFDO0lBQ0QsTUFBTSxDQUFDWCxHQUFHLENBQUNZLElBQUksQ0FBQ1gsT0FBTztBQUN6QixDQUFDO0FBRUQsaUVBQWVILGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cz9mYzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHBnU2VxdWVsaXplIGZyb20gXCIuLi8uLi8uLi9saWIvc2VxdWVsaXplXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uLy4uLy4uL3NjaGVtYXMvY2F0ZWdvcnlcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuLi8uLi8uLi9zY2hlbWFzL3Bvc3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9zY2hlbWFzL3VzZXJcIjtcblxuY29uc3QgY2F0ZWdvcmllc0hhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgbGV0IGNhdERhdGE7XG4gIHRyeSB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICBjYXREYXRhID0gYXdhaXQgQ2F0ZWdvcnkuY3JlYXRlKHtcbiAgICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBbY2F0RGF0YV0gPSBhd2FpdCBwZ1NlcXVlbGl6ZS5xdWVyeShcbiAgICAgICAgICBgU0VMRUNUICogRlJPTSBcIkNhdGVnb3JpZXNcIiBcbiAgICAgICAgICBKT0lOIFwiUG9zdHNcIiBPTiBcIkNhdGVnb3JpZXNcIi5pZCA9IFwiUG9zdHNcIi5cIkNhdGVnb3J5SWRcIlxuICAgICAgICAgIEpPSU4gXCJVc2Vyc1wiIE9OIFwiVXNlcnNcIi5pZCA9IFwiUG9zdHNcIi5cIlVzZXJJZFwiO2BcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coeyBjYXREYXRhIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJJbnZhbGlkIHJlcXVlc3RcIik7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKGNhdERhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcmllc0hhbmRsZXI7XG4iXSwibmFtZXMiOlsicGdTZXF1ZWxpemUiLCJDYXRlZ29yeSIsImNhdGVnb3JpZXNIYW5kbGVyIiwicmVxIiwicmVzIiwiY2F0RGF0YSIsIm1ldGhvZCIsImNyZWF0ZSIsIm5hbWUiLCJib2R5IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic3RhdHVzIiwic2VuZCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/index.ts\n");

/***/ }),

/***/ "(api)/./schemas/category.js":
/*!*****************************!*\
  !*** ./schemas/category.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst Category = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Category\", {\n    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL2NhdGVnb3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUNLO0FBRTFDLEtBQUssQ0FBQ0UsUUFBUSxHQUFHRCw2REFBa0IsQ0FBQyxDQUFVLFdBQUUsQ0FBQztJQUMvQ0csSUFBSSxFQUFFSix1REFBZ0I7QUFDeEIsQ0FBQztBQUVELGlFQUFlRSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3NjaGVtYXMvY2F0ZWdvcnkuanM/OGRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSBwZ1NlcXVlbGl6ZS5kZWZpbmUoXCJDYXRlZ29yeVwiLCB7XG4gIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibmFtZXMiOlsiRGF0YVR5cGVzIiwicGdTZXF1ZWxpemUiLCJDYXRlZ29yeSIsImRlZmluZSIsIm5hbWUiLCJTVFJJTkciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./schemas/category.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories/index.ts"));
module.exports = __webpack_exports__;

})();
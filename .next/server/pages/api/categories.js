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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _schemas_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../schemas/category */ \"(api)/./schemas/category.js\");\n/* harmony import */ var _schemas_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../schemas/movie */ \"(api)/./schemas/movie.js\");\n/* harmony import */ var _schemas_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../schemas/post */ \"(api)/./schemas/post.js\");\n/* harmony import */ var _schemas_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../schemas/user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas_category__WEBPACK_IMPORTED_MODULE_0__, _schemas_movie__WEBPACK_IMPORTED_MODULE_1__, _schemas_post__WEBPACK_IMPORTED_MODULE_2__, _schemas_user__WEBPACK_IMPORTED_MODULE_3__]);\n([_schemas_category__WEBPACK_IMPORTED_MODULE_0__, _schemas_movie__WEBPACK_IMPORTED_MODULE_1__, _schemas_post__WEBPACK_IMPORTED_MODULE_2__, _schemas_user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst categoriesHandler = async (req, res)=>{\n    let catData;\n    try {\n        switch(req.method){\n            case \"POST\":\n                catData = await _schemas_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n                    name: req.body.name\n                });\n                break;\n            default:\n                catData = await _schemas_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAll({\n                    include: [\n                        {\n                            model: _schemas_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                            include: [\n                                _schemas_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                _schemas_movie__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                            ]\n                        }, \n                    ]\n                });\n        }\n    } catch (err) {\n        return res.status(400).send(\"Invalid request\");\n    }\n    return res.json(catData);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoriesHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnRDtBQUNOO0FBQ0Y7QUFDQTtBQUV4QyxLQUFLLENBQUNJLGlCQUFpQixVQUFVQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDOUUsR0FBRyxDQUFDQyxPQUFPO0lBQ1gsR0FBRyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUVGLEdBQUcsQ0FBQ0csTUFBTTtZQUNoQixJQUFJLENBQUMsQ0FBTTtnQkFDVEQsT0FBTyxHQUFHLEtBQUssQ0FBQ1AsZ0VBQWUsQ0FBQyxDQUFDO29CQUMvQlUsSUFBSSxFQUFFTCxHQUFHLENBQUNNLElBQUksQ0FBQ0QsSUFBSTtnQkFDckIsQ0FBQztnQkFDRCxLQUFLOztnQkFFTEgsT0FBTyxHQUFHLEtBQUssQ0FBQ1AsaUVBQWdCLENBQUMsQ0FBQztvQkFDaENhLE9BQU8sRUFBRSxDQUFDO3dCQUNSLENBQUM7NEJBQ0NDLEtBQUssRUFBRVoscURBQUk7NEJBQ1hXLE9BQU8sRUFBRSxDQUFDVjtnQ0FBQUEscURBQUk7Z0NBQUVGLHNEQUFLOzRCQUFBLENBQUM7d0JBQ3hCLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDOztJQUVQLENBQUMsQ0FBQyxLQUFLLEVBQUVjLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFpQjtJQUMvQyxDQUFDO0lBQ0QsTUFBTSxDQUFDWCxHQUFHLENBQUNZLElBQUksQ0FBQ1gsT0FBTztBQUN6QixDQUFDO0FBRUQsaUVBQWVILGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cz9mYzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi8uLi8uLi9zY2hlbWFzL2NhdGVnb3J5XCI7XG5pbXBvcnQgTW92aWUgZnJvbSBcIi4uLy4uLy4uL3NjaGVtYXMvbW92aWVcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuLi8uLi8uLi9zY2hlbWFzL3Bvc3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9zY2hlbWFzL3VzZXJcIjtcblxuY29uc3QgY2F0ZWdvcmllc0hhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgbGV0IGNhdERhdGE7XG4gIHRyeSB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICBjYXREYXRhID0gYXdhaXQgQ2F0ZWdvcnkuY3JlYXRlKHtcbiAgICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjYXREYXRhID0gYXdhaXQgQ2F0ZWdvcnkuZmluZEFsbCh7XG4gICAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb2RlbDogUG9zdCxcbiAgICAgICAgICAgICAgaW5jbHVkZTogW1VzZXIsIE1vdmllXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJJbnZhbGlkIHJlcXVlc3RcIik7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKGNhdERhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcmllc0hhbmRsZXI7XG4iXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJNb3ZpZSIsIlBvc3QiLCJVc2VyIiwiY2F0ZWdvcmllc0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJjYXREYXRhIiwibWV0aG9kIiwiY3JlYXRlIiwibmFtZSIsImJvZHkiLCJmaW5kQWxsIiwiaW5jbHVkZSIsIm1vZGVsIiwiZXJyIiwic3RhdHVzIiwic2VuZCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/index.ts\n");

/***/ }),

/***/ "(api)/./schemas/category.js":
/*!*****************************!*\
  !*** ./schemas/category.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst Category = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Category\", {\n    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL2NhdGVnb3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUNLO0FBRTFDLEtBQUssQ0FBQ0UsUUFBUSxHQUFHRCw2REFBa0IsQ0FBQyxDQUFVLFdBQUUsQ0FBQztJQUMvQ0csSUFBSSxFQUFFSix1REFBZ0I7QUFDeEIsQ0FBQztBQUVELGlFQUFlRSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3NjaGVtYXMvY2F0ZWdvcnkuanM/OGRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSBwZ1NlcXVlbGl6ZS5kZWZpbmUoXCJDYXRlZ29yeVwiLCB7XG4gIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibmFtZXMiOlsiRGF0YVR5cGVzIiwicGdTZXF1ZWxpemUiLCJDYXRlZ29yeSIsImRlZmluZSIsIm5hbWUiLCJTVFJJTkciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./schemas/category.js\n");

/***/ }),

/***/ "(api)/./schemas/movie.js":
/*!**************************!*\
  !*** ./schemas/movie.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst Movie = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Movie\", {\n    title: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n    imageURL: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n    imdbId: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        primaryKey: true,\n        unique: true\n    },\n    year: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movie);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL21vdmllLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUNLO0FBRTFDLEtBQUssQ0FBQ0UsS0FBSyxHQUFHRCw2REFBa0IsQ0FBQyxDQUFPLFFBQUUsQ0FBQztJQUN6Q0csS0FBSyxFQUFFSix1REFBZ0I7SUFDdkJNLFFBQVEsRUFBRU4sdURBQWdCO0lBQzFCTyxNQUFNLEVBQUUsQ0FBQztRQUNQQyxJQUFJLEVBQUVSLHVEQUFnQjtRQUN0QlMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLE1BQU0sRUFBRSxJQUFJO0lBQ2QsQ0FBQztJQUNEQyxJQUFJLEVBQUVYLHdEQUFpQjtBQUN6QixDQUFDO0FBRUQsaUVBQWVFLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vc2NoZW1hcy9tb3ZpZS5qcz9hODAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcbmltcG9ydCBwZ1NlcXVlbGl6ZSBmcm9tIFwiLi4vbGliL3NlcXVlbGl6ZVwiO1xuXG5jb25zdCBNb3ZpZSA9IHBnU2VxdWVsaXplLmRlZmluZShcIk1vdmllXCIsIHtcbiAgdGl0bGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gIGltYWdlVVJMOiBEYXRhVHlwZXMuU1RSSU5HLFxuICBpbWRiSWQ6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9LFxuICB5ZWFyOiBEYXRhVHlwZXMuSU5URUdFUixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTtcbiJdLCJuYW1lcyI6WyJEYXRhVHlwZXMiLCJwZ1NlcXVlbGl6ZSIsIk1vdmllIiwiZGVmaW5lIiwidGl0bGUiLCJTVFJJTkciLCJpbWFnZVVSTCIsImltZGJJZCIsInR5cGUiLCJwcmltYXJ5S2V5IiwidW5pcXVlIiwieWVhciIsIklOVEVHRVIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./schemas/movie.js\n");

/***/ }),

/***/ "(api)/./schemas/post.js":
/*!*************************!*\
  !*** ./schemas/post.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ \"(api)/./schemas/category.js\");\n/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie */ \"(api)/./schemas/movie.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__, _category__WEBPACK_IMPORTED_MODULE_2__, _movie__WEBPACK_IMPORTED_MODULE_3__, _user__WEBPACK_IMPORTED_MODULE_4__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__, _category__WEBPACK_IMPORTED_MODULE_2__, _movie__WEBPACK_IMPORTED_MODULE_3__, _user__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst Post = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Post\", {\n    title: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    body: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,\n        allowNull: false\n    }\n});\nPost.belongsTo(_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nPost.belongsTo(_category__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n_category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasMany(Post);\nPost.belongsTo(_movie__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    foreignKey: \"MovieId\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL3Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0s7QUFDVDtBQUNOO0FBQ0Y7QUFFekIsS0FBSyxDQUFDSyxJQUFJLEdBQUdKLDZEQUFrQixDQUFDLENBQU0sT0FBRSxDQUFDO0lBQ3ZDTSxLQUFLLEVBQUUsQ0FBQztRQUNOQyxJQUFJLEVBQUVSLHVEQUFnQjtRQUN0QlUsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMSCxJQUFJLEVBQUVSLHFEQUFjO1FBQ3BCVSxTQUFTLEVBQUUsS0FBSztJQUNsQixDQUFDO0FBQ0gsQ0FBQztBQUVETCxJQUFJLENBQUNRLFNBQVMsQ0FBQ1QsNkNBQUk7QUFDbkJDLElBQUksQ0FBQ1EsU0FBUyxDQUFDWCxpREFBUTtBQUN2QkEseURBQWdCLENBQUNHLElBQUk7QUFDckJBLElBQUksQ0FBQ1EsU0FBUyxDQUFDViw4Q0FBSyxFQUFFLENBQUM7SUFDckJZLFVBQVUsRUFBRSxDQUFTO0FBQ3ZCLENBQUM7QUFFRCxpRUFBZVYsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9zY2hlbWFzL3Bvc3QuanM/MGI0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xuaW1wb3J0IE1vdmllIGZyb20gXCIuL21vdmllXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyXCI7XG5cbmNvbnN0IFBvc3QgPSBwZ1NlcXVlbGl6ZS5kZWZpbmUoXCJQb3N0XCIsIHtcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIGJvZHk6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuVEVYVCxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxufSk7XG5cblBvc3QuYmVsb25nc1RvKFVzZXIpO1xuUG9zdC5iZWxvbmdzVG8oQ2F0ZWdvcnkpO1xuQ2F0ZWdvcnkuaGFzTWFueShQb3N0KTtcblBvc3QuYmVsb25nc1RvKE1vdmllLCB7XG4gIGZvcmVpZ25LZXk6IFwiTW92aWVJZFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiRGF0YVR5cGVzIiwicGdTZXF1ZWxpemUiLCJDYXRlZ29yeSIsIk1vdmllIiwiVXNlciIsIlBvc3QiLCJkZWZpbmUiLCJ0aXRsZSIsInR5cGUiLCJTVFJJTkciLCJhbGxvd051bGwiLCJib2R5IiwiVEVYVCIsImJlbG9uZ3NUbyIsImhhc01hbnkiLCJmb3JlaWduS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./schemas/post.js\n");

/***/ }),

/***/ "(api)/./schemas/user.js":
/*!*************************!*\
  !*** ./schemas/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst User = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"User\", {\n    username: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        unique: true,\n        allowNull: false\n    },\n    avatarURL: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    bio: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    email: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        unique: true,\n        allowNull: false\n    },\n    firstName: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    lastName: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    password: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    role: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false,\n        defaultValue: \"member\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBQ0s7QUFFMUMsS0FBSyxDQUFDRSxJQUFJLEdBQUdELDZEQUFrQixDQUFDLENBQU0sT0FBRSxDQUFDO0lBQ3ZDRyxRQUFRLEVBQUUsQ0FBQztRQUNUQyxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0Qk8sTUFBTSxFQUFFLElBQUk7UUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNEQyxTQUFTLEVBQUUsQ0FBQztRQUNWSixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNERSxHQUFHLEVBQUUsQ0FBQztRQUNKTCxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNERyxLQUFLLEVBQUUsQ0FBQztRQUNOTixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0Qk8sTUFBTSxFQUFFLElBQUk7UUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNESSxTQUFTLEVBQUUsQ0FBQztRQUNWUCxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNESyxRQUFRLEVBQUUsQ0FBQztRQUNUUixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNETSxRQUFRLEVBQUUsQ0FBQztRQUNUVCxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNETyxJQUFJLEVBQUUsQ0FBQztRQUNMVixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7UUFDaEJRLFlBQVksRUFBRSxDQUFRO0lBQ3hCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVkLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vc2NoZW1hcy91c2VyLmpzPzdlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuaW1wb3J0IHBnU2VxdWVsaXplIGZyb20gXCIuLi9saWIvc2VxdWVsaXplXCI7XG5cbmNvbnN0IFVzZXIgPSBwZ1NlcXVlbGl6ZS5kZWZpbmUoXCJVc2VyXCIsIHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBhdmF0YXJVUkw6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIGJpbzoge1xuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBmaXJzdE5hbWU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIGxhc3ROYW1lOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgcm9sZToge1xuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICBkZWZhdWx0VmFsdWU6IFwibWVtYmVyXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJEYXRhVHlwZXMiLCJwZ1NlcXVlbGl6ZSIsIlVzZXIiLCJkZWZpbmUiLCJ1c2VybmFtZSIsInR5cGUiLCJTVFJJTkciLCJ1bmlxdWUiLCJhbGxvd051bGwiLCJhdmF0YXJVUkwiLCJiaW8iLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./schemas/user.js\n");

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
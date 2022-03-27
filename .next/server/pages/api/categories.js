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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _schemas_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../schemas/category */ \"(api)/./schemas/category.js\");\n/* harmony import */ var _schemas_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../schemas/post */ \"(api)/./schemas/post.js\");\n/* harmony import */ var _schemas_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../schemas/user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas_category__WEBPACK_IMPORTED_MODULE_0__, _schemas_post__WEBPACK_IMPORTED_MODULE_1__, _schemas_user__WEBPACK_IMPORTED_MODULE_2__]);\n([_schemas_category__WEBPACK_IMPORTED_MODULE_0__, _schemas_post__WEBPACK_IMPORTED_MODULE_1__, _schemas_user__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst categoriesHandler = async (req, res)=>{\n    let catData;\n    try {\n        switch(req.method){\n            case \"POST\":\n                catData = await _schemas_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n                    name: req.body.name\n                });\n                break;\n            default:\n                catData = await _schemas_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAll({\n                    include: [\n                        _schemas_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                        _schemas_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                    ]\n                });\n        }\n    } catch (err) {\n        return res.status(400).send(\"Invalid request\");\n    }\n    return res.json(catData);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoriesHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2dEO0FBQ1I7QUFDQTtBQUV4QyxLQUFLLENBQUNHLGlCQUFpQixVQUFVQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDOUUsR0FBRyxDQUFDQyxPQUFPO0lBQ1gsR0FBRyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUVGLEdBQUcsQ0FBQ0csTUFBTTtZQUNoQixJQUFJLENBQUMsQ0FBTTtnQkFDVEQsT0FBTyxHQUFHLEtBQUssQ0FBQ04sZ0VBQWUsQ0FBQyxDQUFDO29CQUMvQlMsSUFBSSxFQUFFTCxHQUFHLENBQUNNLElBQUksQ0FBQ0QsSUFBSTtnQkFDckIsQ0FBQztnQkFDRCxLQUFLOztnQkFFTEgsT0FBTyxHQUFHLEtBQUssQ0FBQ04saUVBQWdCLENBQUMsQ0FBQztvQkFBQ1ksT0FBTyxFQUFFLENBQUNYO3dCQUFBQSxxREFBSTt3QkFBRUMscURBQUk7b0JBQUEsQ0FBQztnQkFBQyxDQUFDOztJQUVoRSxDQUFDLENBQUMsS0FBSyxFQUFFVyxHQUFHLEVBQUUsQ0FBQztRQUNiLE1BQU0sQ0FBQ1IsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBaUI7SUFDL0MsQ0FBQztJQUNELE1BQU0sQ0FBQ1YsR0FBRyxDQUFDVyxJQUFJLENBQUNWLE9BQU87QUFDekIsQ0FBQztBQUVELGlFQUFlSCxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vcGFnZXMvYXBpL2NhdGVnb3JpZXMvaW5kZXgudHM/ZmMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vLi4vLi4vc2NoZW1hcy9jYXRlZ29yeVwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uLy4uL3NjaGVtYXMvcG9zdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL3NjaGVtYXMvdXNlclwiO1xuXG5jb25zdCBjYXRlZ29yaWVzSGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBsZXQgY2F0RGF0YTtcbiAgdHJ5IHtcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgIGNhdERhdGEgPSBhd2FpdCBDYXRlZ29yeS5jcmVhdGUoe1xuICAgICAgICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNhdERhdGEgPSBhd2FpdCBDYXRlZ29yeS5maW5kQWxsKHsgaW5jbHVkZTogW1Bvc3QsIFVzZXJdIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiSW52YWxpZCByZXF1ZXN0XCIpO1xuICB9XG4gIHJldHVybiByZXMuanNvbihjYXREYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3JpZXNIYW5kbGVyO1xuIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiUG9zdCIsIlVzZXIiLCJjYXRlZ29yaWVzSGFuZGxlciIsInJlcSIsInJlcyIsImNhdERhdGEiLCJtZXRob2QiLCJjcmVhdGUiLCJuYW1lIiwiYm9keSIsImZpbmRBbGwiLCJpbmNsdWRlIiwiZXJyIiwic3RhdHVzIiwic2VuZCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/index.ts\n");

/***/ }),

/***/ "(api)/./schemas/category.js":
/*!*****************************!*\
  !*** ./schemas/category.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst Category = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Category\", {\n    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL2NhdGVnb3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUNLO0FBRTFDLEtBQUssQ0FBQ0UsUUFBUSxHQUFHRCw2REFBa0IsQ0FBQyxDQUFVLFdBQUUsQ0FBQztJQUMvQ0csSUFBSSxFQUFFSix1REFBZ0I7QUFDeEIsQ0FBQztBQUVELGlFQUFlRSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3NjaGVtYXMvY2F0ZWdvcnkuanM/OGRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSBwZ1NlcXVlbGl6ZS5kZWZpbmUoXCJDYXRlZ29yeVwiLCB7XG4gIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibmFtZXMiOlsiRGF0YVR5cGVzIiwicGdTZXF1ZWxpemUiLCJDYXRlZ29yeSIsImRlZmluZSIsIm5hbWUiLCJTVFJJTkciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./schemas/category.js\n");

/***/ }),

/***/ "(api)/./schemas/post.js":
/*!*************************!*\
  !*** ./schemas/post.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ \"(api)/./schemas/category.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__, _category__WEBPACK_IMPORTED_MODULE_2__, _user__WEBPACK_IMPORTED_MODULE_3__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__, _category__WEBPACK_IMPORTED_MODULE_2__, _user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Post = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Post\", {\n    title: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    body: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,\n        allowNull: false\n    },\n    movie: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER\n    }\n});\nPost.belongsTo(_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nPost.belongsTo(_category__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n_category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasMany(Post);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL3Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUM7QUFDSztBQUNUO0FBQ1I7QUFFekIsS0FBSyxDQUFDSSxJQUFJLEdBQUdILDZEQUFrQixDQUFDLENBQU0sT0FBRSxDQUFDO0lBQ3ZDSyxLQUFLLEVBQUUsQ0FBQztRQUNOQyxJQUFJLEVBQUVQLHVEQUFnQjtRQUN0QlMsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMSCxJQUFJLEVBQUVQLHFEQUFjO1FBQ3BCUyxTQUFTLEVBQUUsS0FBSztJQUNsQixDQUFDO0lBQ0RHLEtBQUssRUFBRSxDQUFDO1FBQ05MLElBQUksRUFBRVAsd0RBQWlCO0lBQ3pCLENBQUM7QUFDSCxDQUFDO0FBRURJLElBQUksQ0FBQ1UsU0FBUyxDQUFDWCw2Q0FBSTtBQUNuQkMsSUFBSSxDQUFDVSxTQUFTLENBQUNaLGlEQUFRO0FBQ3ZCQSx5REFBZ0IsQ0FBQ0UsSUFBSTtBQUVyQixpRUFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9zY2hlbWFzL3Bvc3QuanM/MGI0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlclwiO1xuXG5jb25zdCBQb3N0ID0gcGdTZXF1ZWxpemUuZGVmaW5lKFwiUG9zdFwiLCB7XG4gIHRpdGxlOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBib2R5OiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlRFWFQsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgbW92aWU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgfSxcbn0pO1xuXG5Qb3N0LmJlbG9uZ3NUbyhVc2VyKTtcblBvc3QuYmVsb25nc1RvKENhdGVnb3J5KTtcbkNhdGVnb3J5Lmhhc01hbnkoUG9zdCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiRGF0YVR5cGVzIiwicGdTZXF1ZWxpemUiLCJDYXRlZ29yeSIsIlVzZXIiLCJQb3N0IiwiZGVmaW5lIiwidGl0bGUiLCJ0eXBlIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwiYm9keSIsIlRFWFQiLCJtb3ZpZSIsIklOVEVHRVIiLCJiZWxvbmdzVG8iLCJoYXNNYW55Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./schemas/post.js\n");

/***/ }),

/***/ "(api)/./schemas/user.js":
/*!*************************!*\
  !*** ./schemas/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst User = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"User\", {\n    username: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        unique: true,\n        allowNull: false\n    },\n    email: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        unique: true,\n        allowNull: false\n    },\n    firstName: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    lastName: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    password: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    role: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false,\n        defaultValue: \"member\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBQ0s7QUFFMUMsS0FBSyxDQUFDRSxJQUFJLEdBQUdELDZEQUFrQixDQUFDLENBQU0sT0FBRSxDQUFDO0lBQ3ZDRyxRQUFRLEVBQUUsQ0FBQztRQUNUQyxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0Qk8sTUFBTSxFQUFFLElBQUk7UUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztRQUNOSixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0Qk8sTUFBTSxFQUFFLElBQUk7UUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNERSxTQUFTLEVBQUUsQ0FBQztRQUNWTCxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNERyxRQUFRLEVBQUUsQ0FBQztRQUNUTixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNESSxRQUFRLEVBQUUsQ0FBQztRQUNUUCxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNESyxJQUFJLEVBQUUsQ0FBQztRQUNMUixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7UUFDaEJNLFlBQVksRUFBRSxDQUFRO0lBQ3hCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVaLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vc2NoZW1hcy91c2VyLmpzPzdlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuaW1wb3J0IHBnU2VxdWVsaXplIGZyb20gXCIuLi9saWIvc2VxdWVsaXplXCI7XG5cbmNvbnN0IFVzZXIgPSBwZ1NlcXVlbGl6ZS5kZWZpbmUoXCJVc2VyXCIsIHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIGZpcnN0TmFtZToge1xuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgbGFzdE5hbWU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICByb2xlOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIGRlZmF1bHRWYWx1ZTogXCJtZW1iZXJcIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sIm5hbWVzIjpbIkRhdGFUeXBlcyIsInBnU2VxdWVsaXplIiwiVXNlciIsImRlZmluZSIsInVzZXJuYW1lIiwidHlwZSIsIlNUUklORyIsInVuaXF1ZSIsImFsbG93TnVsbCIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0VmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./schemas/user.js\n");

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
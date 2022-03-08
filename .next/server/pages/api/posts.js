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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
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

/***/ "(api)/./pages/api/posts/index.ts":
/*!**********************************!*\
  !*** ./pages/api/posts/index.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _schemas_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../schemas/post */ \"(api)/./schemas/post.js\");\n/* harmony import */ var _schemas_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../schemas/user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas_post__WEBPACK_IMPORTED_MODULE_0__, _schemas_user__WEBPACK_IMPORTED_MODULE_1__]);\n([_schemas_post__WEBPACK_IMPORTED_MODULE_0__, _schemas_user__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst newPost = async ({ title , body , movie , userId  })=>{\n    const post = await _schemas_post__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        title,\n        body,\n        movie\n    });\n    const user = await _schemas_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByPk(userId);\n    post.setUser(user);\n    return post;\n};\nconst postsHandler = async (req, res)=>{\n    let postData;\n    try {\n        switch(req.method){\n            case \"POST\":\n                postData = await newPost(req.body);\n                break;\n            default:\n                postData = await _schemas_post__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAll();\n                break;\n        }\n    } catch (err) {\n        console.log(err);\n        return res.status(400).send(\"Invalid request\");\n    }\n    return res.json(postData);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postsHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ0E7QUFFeEMsS0FBSyxDQUFDRSxPQUFPLFVBQVUsQ0FBQyxDQUFDQyxLQUFLLEdBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDekQsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDUCw0REFBVyxDQUFDLENBQUM7UUFDOUJHLEtBQUs7UUFDTEMsSUFBSTtRQUNKQyxLQUFLO0lBQ1AsQ0FBQztJQUNELEtBQUssQ0FBQ0ksSUFBSSxHQUFHLEtBQUssQ0FBQ1IsOERBQWEsQ0FBQ0ssTUFBTTtJQUN2Q0MsSUFBSSxDQUFDSSxPQUFPLENBQUNGLElBQUk7SUFDakIsTUFBTSxDQUFDRixJQUFJO0FBQ2IsQ0FBQztBQUVELEtBQUssQ0FBQ0ssWUFBWSxVQUFVQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDekUsR0FBRyxDQUFDQyxRQUFRO0lBQ1osR0FBRyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUVGLEdBQUcsQ0FBQ0csTUFBTTtZQUNoQixJQUFJLENBQUMsQ0FBTTtnQkFDVEQsUUFBUSxHQUFHLEtBQUssQ0FBQ2IsT0FBTyxDQUFDVyxHQUFHLENBQUNULElBQUk7Z0JBQ2pDLEtBQUs7O2dCQUVMVyxRQUFRLEdBQUcsS0FBSyxDQUFDZiw2REFBWTtnQkFDN0IsS0FBSzs7SUFFWCxDQUFDLENBQUMsS0FBSyxFQUFFa0IsR0FBRyxFQUFFLENBQUM7UUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7UUFDZixNQUFNLENBQUNKLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQWlCO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUNSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDUixRQUFRO0FBQzFCLENBQUM7QUFFRCxpRUFBZUgsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9wYWdlcy9hcGkvcG9zdHMvaW5kZXgudHM/ZDI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHQvdHlwZXNcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuLi8uLi8uLi9zY2hlbWFzL3Bvc3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9zY2hlbWFzL3VzZXJcIjtcblxuY29uc3QgbmV3UG9zdCA9IGFzeW5jICh7IHRpdGxlLCBib2R5LCBtb3ZpZSwgdXNlcklkIH0pID0+IHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3QuY3JlYXRlKHtcbiAgICB0aXRsZSxcbiAgICBib2R5LFxuICAgIG1vdmllLFxuICB9KTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5UGsodXNlcklkKTtcbiAgcG9zdC5zZXRVc2VyKHVzZXIpO1xuICByZXR1cm4gcG9zdDtcbn07XG5cbmNvbnN0IHBvc3RzSGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBsZXQgcG9zdERhdGE7XG4gIHRyeSB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICBwb3N0RGF0YSA9IGF3YWl0IG5ld1Bvc3QocmVxLmJvZHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHBvc3REYXRhID0gYXdhaXQgUG9zdC5maW5kQWxsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJJbnZhbGlkIHJlcXVlc3RcIik7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKHBvc3REYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RzSGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJQb3N0IiwiVXNlciIsIm5ld1Bvc3QiLCJ0aXRsZSIsImJvZHkiLCJtb3ZpZSIsInVzZXJJZCIsInBvc3QiLCJjcmVhdGUiLCJ1c2VyIiwiZmluZEJ5UGsiLCJzZXRVc2VyIiwicG9zdHNIYW5kbGVyIiwicmVxIiwicmVzIiwicG9zdERhdGEiLCJtZXRob2QiLCJmaW5kQWxsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/index.ts\n");

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ \"(api)/./schemas/category.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__, _category__WEBPACK_IMPORTED_MODULE_2__, _user__WEBPACK_IMPORTED_MODULE_3__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__, _category__WEBPACK_IMPORTED_MODULE_2__, _user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Post = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Post\", {\n    title: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    body: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,\n        allowNull: false\n    },\n    movie: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER\n    }\n});\nPost.belongsTo(_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nPost.belongsToMany(_category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    through: \"Post_Category\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL3Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUM7QUFDSztBQUNUO0FBQ1I7QUFFekIsS0FBSyxDQUFDSSxJQUFJLEdBQUdILDZEQUFrQixDQUFDLENBQU0sT0FBRSxDQUFDO0lBQ3ZDSyxLQUFLLEVBQUUsQ0FBQztRQUNOQyxJQUFJLEVBQUVQLHVEQUFnQjtRQUN0QlMsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMSCxJQUFJLEVBQUVQLHFEQUFjO1FBQ3BCUyxTQUFTLEVBQUUsS0FBSztJQUNsQixDQUFDO0lBQ0RHLEtBQUssRUFBRSxDQUFDO1FBQ05MLElBQUksRUFBRVAsd0RBQWlCO0lBQ3pCLENBQUM7QUFDSCxDQUFDO0FBRURJLElBQUksQ0FBQ1UsU0FBUyxDQUFDWCw2Q0FBSTtBQUNuQkMsSUFBSSxDQUFDVyxhQUFhLENBQUNiLGlEQUFRLEVBQUUsQ0FBQztJQUFDYyxPQUFPLEVBQUUsQ0FBZTtBQUFDLENBQUM7QUFFekQsaUVBQWVaLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vc2NoZW1hcy9wb3N0LmpzPzBiNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuaW1wb3J0IHBnU2VxdWVsaXplIGZyb20gXCIuLi9saWIvc2VxdWVsaXplXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXJcIjtcblxuY29uc3QgUG9zdCA9IHBnU2VxdWVsaXplLmRlZmluZShcIlBvc3RcIiwge1xuICB0aXRsZToge1xuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgYm9keToge1xuICAgIHR5cGU6IERhdGFUeXBlcy5URVhULFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIG1vdmllOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gIH0sXG59KTtcblxuUG9zdC5iZWxvbmdzVG8oVXNlcik7XG5Qb3N0LmJlbG9uZ3NUb01hbnkoQ2F0ZWdvcnksIHsgdGhyb3VnaDogXCJQb3N0X0NhdGVnb3J5XCIgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiRGF0YVR5cGVzIiwicGdTZXF1ZWxpemUiLCJDYXRlZ29yeSIsIlVzZXIiLCJQb3N0IiwiZGVmaW5lIiwidGl0bGUiLCJ0eXBlIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwiYm9keSIsIlRFWFQiLCJtb3ZpZSIsIklOVEVHRVIiLCJiZWxvbmdzVG8iLCJiZWxvbmdzVG9NYW55IiwidGhyb3VnaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./schemas/post.js\n");

/***/ }),

/***/ "(api)/./schemas/user.js":
/*!*************************!*\
  !*** ./schemas/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst User = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"User\", {\n    username: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        unique: true,\n        allowNull: false\n    },\n    email: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        unique: true,\n        allowNull: false\n    },\n    firstName: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    lastName: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    },\n    password: {\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\n        allowNull: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBQ0s7QUFFMUMsS0FBSyxDQUFDRSxJQUFJLEdBQUdELDZEQUFrQixDQUFDLENBQU0sT0FBRSxDQUFDO0lBQ3ZDRyxRQUFRLEVBQUUsQ0FBQztRQUNUQyxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0Qk8sTUFBTSxFQUFFLElBQUk7UUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztRQUNOSixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0Qk8sTUFBTSxFQUFFLElBQUk7UUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNERSxTQUFTLEVBQUUsQ0FBQztRQUNWTCxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNERyxRQUFRLEVBQUUsQ0FBQztRQUNUTixJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNESSxRQUFRLEVBQUUsQ0FBQztRQUNUUCxJQUFJLEVBQUVMLHVEQUFnQjtRQUN0QlEsU0FBUyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZU4sSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9zY2hlbWFzL3VzZXIuanM/N2U1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcblxuY29uc3QgVXNlciA9IHBnU2VxdWVsaXplLmRlZmluZShcIlVzZXJcIiwge1xuICB1c2VybmFtZToge1xuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgZmlyc3ROYW1lOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICB9LFxuICBsYXN0TmFtZToge1xuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJEYXRhVHlwZXMiLCJwZ1NlcXVlbGl6ZSIsIlVzZXIiLCJkZWZpbmUiLCJ1c2VybmFtZSIsInR5cGUiLCJTVFJJTkciLCJ1bmlxdWUiLCJhbGxvd051bGwiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./schemas/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/index.ts"));
module.exports = __webpack_exports__;

})();
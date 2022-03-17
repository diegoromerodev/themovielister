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
exports.id = "pages/api/posts/[postId]/comments";
exports.ids = ["pages/api/posts/[postId]/comments"];
exports.modules = {

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ "(api)/./lib/jwtPassport.ts":
/*!****************************!*\
  !*** ./lib/jwtPassport.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schemas_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schemas/user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas_user__WEBPACK_IMPORTED_MODULE_1__]);\n_schemas_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst options = {\n    jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_0__.ExtractJwt.fromAuthHeaderAsBearerToken(),\n    secretOrKey: process.env.TOKENSECRET\n};\nconst jwtPassport = new passport_jwt__WEBPACK_IMPORTED_MODULE_0__.Strategy(options, async (payload, done)=>{\n    try {\n        const user = await _schemas_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByPk(payload.user.id);\n        if (user) return done(null, payload.user);\n        return done(null, false);\n    } catch (err) {\n        return done(new Error(\"Invalid data\"));\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jwtPassport);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvand0UGFzc3BvcnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRTtBQUNsQztBQUVsQyxLQUFLLENBQUNHLE9BQU8sR0FBb0IsQ0FBQztJQUNoQ0MsY0FBYyxFQUFFSCxnRkFBc0M7SUFDdERLLFdBQVcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7QUFDdEMsQ0FBQztBQUVELEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ1Ysa0RBQVEsQ0FBQ0csT0FBTyxTQUFTUSxPQUFPLEVBQUVDLElBQUksR0FBSyxDQUFDO0lBQ2xFLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDWCw4REFBYSxDQUFDUyxPQUFPLENBQUNFLElBQUksQ0FBQ0UsRUFBRTtRQUNoRCxFQUFFLEVBQUVGLElBQUksRUFBRSxNQUFNLENBQUNELElBQUksQ0FBQyxJQUFJLEVBQUVELE9BQU8sQ0FBQ0UsSUFBSTtRQUN4QyxNQUFNLENBQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSztJQUN6QixDQUFDLENBQUMsS0FBSyxFQUFFSSxHQUFHLEVBQUUsQ0FBQztRQUNiLE1BQU0sQ0FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQ0ssS0FBSyxDQUFDLENBQWM7SUFDdEMsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVAsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9saWIvand0UGFzc3BvcnQudHM/MmYwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJhdGVneSwgRXh0cmFjdEp3dCwgU3RyYXRlZ3lPcHRpb25zIH0gZnJvbSBcInBhc3Nwb3J0LWp3dFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3NjaGVtYXMvdXNlclwiO1xuXG5jb25zdCBvcHRpb25zOiBTdHJhdGVneU9wdGlvbnMgPSB7XG4gIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxuICBzZWNyZXRPcktleTogcHJvY2Vzcy5lbnYuVE9LRU5TRUNSRVQsXG59O1xuXG5jb25zdCBqd3RQYXNzcG9ydCA9IG5ldyBTdHJhdGVneShvcHRpb25zLCBhc3luYyAocGF5bG9hZCwgZG9uZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeVBrKHBheWxvYWQudXNlci5pZCk7XG4gICAgaWYgKHVzZXIpIHJldHVybiBkb25lKG51bGwsIHBheWxvYWQudXNlcik7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZG9uZShuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGFcIikpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgand0UGFzc3BvcnQ7XG4iXSwibmFtZXMiOlsiU3RyYXRlZ3kiLCJFeHRyYWN0Snd0IiwiVXNlciIsIm9wdGlvbnMiLCJqd3RGcm9tUmVxdWVzdCIsImZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbiIsInNlY3JldE9yS2V5IiwicHJvY2VzcyIsImVudiIsIlRPS0VOU0VDUkVUIiwiand0UGFzc3BvcnQiLCJwYXlsb2FkIiwiZG9uZSIsInVzZXIiLCJmaW5kQnlQayIsImlkIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/jwtPassport.ts\n");

/***/ }),

/***/ "(api)/./lib/sequelize.js":
/*!**************************!*\
  !*** ./lib/sequelize.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);\nsequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst pgSequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize(process.env.PG_DATABASE);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pgSequelize);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VxdWVsaXplLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBRXJDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ0QsZ0RBQVMsQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7QUFFekQsaUVBQWVILFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vbGliL3NlcXVlbGl6ZS5qcz84ODFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuY29uc3QgcGdTZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52LlBHX0RBVEFCQVNFKTtcblxuZXhwb3J0IGRlZmF1bHQgcGdTZXF1ZWxpemU7XG4iXSwibmFtZXMiOlsiU2VxdWVsaXplIiwicGdTZXF1ZWxpemUiLCJwcm9jZXNzIiwiZW52IiwiUEdfREFUQUJBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/sequelize.js\n");

/***/ }),

/***/ "(api)/./lib/tokenMiddleware.ts":
/*!********************************!*\
  !*** ./lib/tokenMiddleware.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _jwtPassport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwtPassport */ \"(api)/./lib/jwtPassport.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jwtPassport__WEBPACK_IMPORTED_MODULE_1__]);\n_jwtPassport__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\npassport__WEBPACK_IMPORTED_MODULE_0___default().use(_jwtPassport__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst tokenMiddleware = (req)=>{\n    return new Promise((resolve, reject)=>{\n        passport__WEBPACK_IMPORTED_MODULE_0___default().authenticate(\"jwt\", (err, user)=>{\n            if (user) return resolve(user);\n            return reject(err);\n        })(req);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenMiddleware);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdG9rZW5NaWRkbGV3YXJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0I7QUFDUTtBQUV2Q0EsbURBQVksQ0FBQ0Msb0RBQVc7QUFFeEIsS0FBSyxDQUFDRSxlQUFlLElBQUlDLEdBQW1CLEdBQUssQ0FBQztJQUNoRCxNQUFNLENBQUMsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxHQUFLLENBQUM7UUFDdkNQLDREQUFxQixDQUFDLENBQUssT0FBR1MsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztZQUMzQyxFQUFFLEVBQUVBLElBQUksRUFBRSxNQUFNLENBQUNKLE9BQU8sQ0FBQ0ksSUFBSTtZQUM3QixNQUFNLENBQUNILE1BQU0sQ0FBQ0UsR0FBRztRQUNuQixDQUFDLEVBQUVMLEdBQUc7SUFDUixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlRCxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL2xpYi90b2tlbk1pZGRsZXdhcmUudHM/NzkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XG5pbXBvcnQgand0UGFzc3BvcnQgZnJvbSBcIi4vand0UGFzc3BvcnRcIjtcblxucGFzc3BvcnQudXNlKGp3dFBhc3Nwb3J0KTtcblxuY29uc3QgdG9rZW5NaWRkbGV3YXJlID0gKHJlcTogTmV4dEFwaVJlcXVlc3QpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoXCJqd3RcIiwgKGVyciwgdXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHJldHVybiByZXNvbHZlKHVzZXIpO1xuICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgIH0pKHJlcSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5NaWRkbGV3YXJlO1xuIl0sIm5hbWVzIjpbInBhc3Nwb3J0Iiwiand0UGFzc3BvcnQiLCJ1c2UiLCJ0b2tlbk1pZGRsZXdhcmUiLCJyZXEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF1dGhlbnRpY2F0ZSIsImVyciIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/tokenMiddleware.ts\n");

/***/ }),

/***/ "(api)/./pages/api/posts/[postId]/comments/index.ts":
/*!****************************************************!*\
  !*** ./pages/api/posts/[postId]/comments/index.ts ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_tokenMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../lib/tokenMiddleware */ \"(api)/./lib/tokenMiddleware.ts\");\n/* harmony import */ var _schemas_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../schemas/comment */ \"(api)/./schemas/comment.js\");\n/* harmony import */ var _schemas_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../schemas/post */ \"(api)/./schemas/post.js\");\n/* harmony import */ var _schemas_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../schemas/user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_tokenMiddleware__WEBPACK_IMPORTED_MODULE_0__, _schemas_comment__WEBPACK_IMPORTED_MODULE_1__, _schemas_post__WEBPACK_IMPORTED_MODULE_2__, _schemas_user__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_tokenMiddleware__WEBPACK_IMPORTED_MODULE_0__, _schemas_comment__WEBPACK_IMPORTED_MODULE_1__, _schemas_post__WEBPACK_IMPORTED_MODULE_2__, _schemas_user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst getPostComments = async (postId)=>{\n    const comments = _schemas_comment__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findAll({\n        where: {\n            PostId: postId\n        },\n        include: [\n            _schemas_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            _schemas_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        ]\n    });\n    return comments;\n};\nconst createPostComment = async ({ body , postId , user  })=>{\n    const post = await _schemas_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByPk(postId);\n    if (!post || !user) return false;\n    const comment = await _schemas_comment__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        body,\n        PostId: postId,\n        UserId: user.id\n    }, {\n        include: [\n            _schemas_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            _schemas_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        ]\n    });\n    return comment;\n};\nconst postCommentsHandler = async (req, res)=>{\n    const postId = Number(req.query.postId);\n    const { body  } = req.body;\n    let user;\n    try {\n        user = await (0,_lib_tokenMiddleware__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\n    } catch (err) {\n        user = false;\n    }\n    let commentData;\n    switch(req.method){\n        case \"POST\":\n            commentData = await createPostComment({\n                body,\n                user,\n                postId\n            });\n            break;\n        default:\n            commentData = await getPostComments(postId);\n    }\n    if (!commentData) {\n        return res.status(400).json(\"INVALID REQUEST\");\n    }\n    return res.json(commentData);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postCommentsHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvW3Bvc3RJZF0vY29tbWVudHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDZ0U7QUFDWjtBQUNOO0FBQ0E7QUFFOUMsS0FBSyxDQUFDSSxlQUFlLFVBQVVDLE1BQWMsR0FBSyxDQUFDO0lBQ2pELEtBQUssQ0FBQ0MsUUFBUSxHQUFHTCxnRUFBZSxDQUFDLENBQUM7UUFDaENPLEtBQUssRUFBRSxDQUFDO1lBQ05DLE1BQU0sRUFBRUosTUFBTTtRQUNoQixDQUFDO1FBQ0RLLE9BQU8sRUFBRSxDQUFDUjtZQUFBQSxxREFBSTtZQUFFQyxxREFBSTtRQUFBLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBQ0csUUFBUTtBQUNqQixDQUFDO0FBRUQsS0FBSyxDQUFDSyxpQkFBaUIsVUFBVSxDQUFDLENBQUNDLElBQUksR0FBRVAsTUFBTSxHQUFFUSxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDM0QsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDWiw4REFBYSxDQUFDRyxNQUFNO0lBQ3ZDLEVBQUUsR0FBR1MsSUFBSSxLQUFLRCxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7SUFDaEMsS0FBSyxDQUFDRyxPQUFPLEdBQUcsS0FBSyxDQUFDZiwrREFBYyxDQUNsQyxDQUFDO1FBQ0NXLElBQUk7UUFDSkgsTUFBTSxFQUFFSixNQUFNO1FBQ2RhLE1BQU0sRUFBRUwsSUFBSSxDQUFDTSxFQUFFO0lBQ2pCLENBQUMsRUFDRCxDQUFDO1FBQ0NULE9BQU8sRUFBRSxDQUFDUjtZQUFBQSxxREFBSTtZQUFFQyxxREFBSTtRQUFBLENBQUM7SUFDdkIsQ0FBQztJQUVILE1BQU0sQ0FBQ2EsT0FBTztBQUNoQixDQUFDO0FBRUQsS0FBSyxDQUFDSSxtQkFBbUIsVUFDdkJDLEdBQW1CLEVBQ25CQyxHQUFvQixHQUNqQixDQUFDO0lBQ0osS0FBSyxDQUFDakIsTUFBTSxHQUFHa0IsTUFBTSxDQUFDRixHQUFHLENBQUNHLEtBQUssQ0FBQ25CLE1BQU07SUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxFQUFDLENBQUMsR0FBR1MsR0FBRyxDQUFDVCxJQUFJO0lBQ3pCLEdBQUcsQ0FBQ0MsSUFBSTtJQUNSLEdBQUcsQ0FBQyxDQUFDO1FBQ0hBLElBQUksR0FBRyxLQUFLLENBQUNiLGdFQUFlLENBQUNxQixHQUFHO0lBQ2xDLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEdBQUcsRUFBRSxDQUFDO1FBQ2JaLElBQUksR0FBRyxLQUFLO0lBQ2QsQ0FBQztJQUNELEdBQUcsQ0FBQ2EsV0FBVztJQUNmLE1BQU0sQ0FBRUwsR0FBRyxDQUFDTSxNQUFNO1FBQ2hCLElBQUksQ0FBQyxDQUFNO1lBQ1RELFdBQVcsR0FBRyxLQUFLLENBQUNmLGlCQUFpQixDQUFDLENBQUM7Z0JBQUNDLElBQUk7Z0JBQUVDLElBQUk7Z0JBQUVSLE1BQU07WUFBQyxDQUFDO1lBQzVELEtBQUs7O1lBRUxxQixXQUFXLEdBQUcsS0FBSyxDQUFDdEIsZUFBZSxDQUFDQyxNQUFNOztJQUU5QyxFQUFFLEdBQUdxQixXQUFXLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUNKLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQWlCO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUNQLEdBQUcsQ0FBQ08sSUFBSSxDQUFDSCxXQUFXO0FBQzdCLENBQUM7QUFFRCxpRUFBZU4sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3BhZ2VzL2FwaS9wb3N0cy9bcG9zdElkXS9jb21tZW50cy9pbmRleC50cz9iNTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHRva2VuTWlkZGxld2FyZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGliL3Rva2VuTWlkZGxld2FyZVwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NjaGVtYXMvY29tbWVudFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NjaGVtYXMvcG9zdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NjaGVtYXMvdXNlclwiO1xuXG5jb25zdCBnZXRQb3N0Q29tbWVudHMgPSBhc3luYyAocG9zdElkOiBudW1iZXIpID0+IHtcbiAgY29uc3QgY29tbWVudHMgPSBDb21tZW50LmZpbmRBbGwoe1xuICAgIHdoZXJlOiB7XG4gICAgICBQb3N0SWQ6IHBvc3RJZCxcbiAgICB9LFxuICAgIGluY2x1ZGU6IFtQb3N0LCBVc2VyXSxcbiAgfSk7XG4gIHJldHVybiBjb21tZW50cztcbn07XG5cbmNvbnN0IGNyZWF0ZVBvc3RDb21tZW50ID0gYXN5bmMgKHsgYm9keSwgcG9zdElkLCB1c2VyIH0pID0+IHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3QuZmluZEJ5UGsocG9zdElkKTtcbiAgaWYgKCFwb3N0IHx8ICF1c2VyKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBDb21tZW50LmNyZWF0ZShcbiAgICB7XG4gICAgICBib2R5LFxuICAgICAgUG9zdElkOiBwb3N0SWQsXG4gICAgICBVc2VySWQ6IHVzZXIuaWQsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbmNsdWRlOiBbUG9zdCwgVXNlcl0sXG4gICAgfVxuICApO1xuICByZXR1cm4gY29tbWVudDtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50c0hhbmRsZXIgPSBhc3luYyAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pID0+IHtcbiAgY29uc3QgcG9zdElkID0gTnVtYmVyKHJlcS5xdWVyeS5wb3N0SWQpO1xuICBjb25zdCB7IGJvZHkgfSA9IHJlcS5ib2R5O1xuICBsZXQgdXNlcjtcbiAgdHJ5IHtcbiAgICB1c2VyID0gYXdhaXQgdG9rZW5NaWRkbGV3YXJlKHJlcSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHVzZXIgPSBmYWxzZTtcbiAgfVxuICBsZXQgY29tbWVudERhdGE7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICBjb21tZW50RGF0YSA9IGF3YWl0IGNyZWF0ZVBvc3RDb21tZW50KHsgYm9keSwgdXNlciwgcG9zdElkIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbW1lbnREYXRhID0gYXdhaXQgZ2V0UG9zdENvbW1lbnRzKHBvc3RJZCk7XG4gIH1cbiAgaWYgKCFjb21tZW50RGF0YSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcIklOVkFMSUQgUkVRVUVTVFwiKTtcbiAgfVxuICByZXR1cm4gcmVzLmpzb24oY29tbWVudERhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdENvbW1lbnRzSGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJ0b2tlbk1pZGRsZXdhcmUiLCJDb21tZW50IiwiUG9zdCIsIlVzZXIiLCJnZXRQb3N0Q29tbWVudHMiLCJwb3N0SWQiLCJjb21tZW50cyIsImZpbmRBbGwiLCJ3aGVyZSIsIlBvc3RJZCIsImluY2x1ZGUiLCJjcmVhdGVQb3N0Q29tbWVudCIsImJvZHkiLCJ1c2VyIiwicG9zdCIsImZpbmRCeVBrIiwiY29tbWVudCIsImNyZWF0ZSIsIlVzZXJJZCIsImlkIiwicG9zdENvbW1lbnRzSGFuZGxlciIsInJlcSIsInJlcyIsIk51bWJlciIsInF1ZXJ5IiwiZXJyIiwiY29tbWVudERhdGEiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/[postId]/comments/index.ts\n");

/***/ }),

/***/ "(api)/./schemas/category.js":
/*!*****************************!*\
  !*** ./schemas/category.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst Category = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Category\", {\n    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL2NhdGVnb3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUNLO0FBRTFDLEtBQUssQ0FBQ0UsUUFBUSxHQUFHRCw2REFBa0IsQ0FBQyxDQUFVLFdBQUUsQ0FBQztJQUMvQ0csSUFBSSxFQUFFSix1REFBZ0I7QUFDeEIsQ0FBQztBQUVELGlFQUFlRSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3NjaGVtYXMvY2F0ZWdvcnkuanM/OGRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSBwZ1NlcXVlbGl6ZS5kZWZpbmUoXCJDYXRlZ29yeVwiLCB7XG4gIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibmFtZXMiOlsiRGF0YVR5cGVzIiwicGdTZXF1ZWxpemUiLCJDYXRlZ29yeSIsImRlZmluZSIsIm5hbWUiLCJTVFJJTkciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./schemas/category.js\n");

/***/ }),

/***/ "(api)/./schemas/comment.js":
/*!****************************!*\
  !*** ./schemas/comment.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/sequelize */ \"(api)/./lib/sequelize.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"(api)/./schemas/post.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__, _post__WEBPACK_IMPORTED_MODULE_2__, _user__WEBPACK_IMPORTED_MODULE_3__]);\n([sequelize__WEBPACK_IMPORTED_MODULE_0__, _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__, _post__WEBPACK_IMPORTED_MODULE_2__, _user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Comment = _lib_sequelize__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define(\"Comment\", {\n    body: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING\n});\nComment.belongsTo(_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onDelete: \"CASCADE\"\n});\nComment.belongsTo(_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWFzL2NvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUM7QUFDSztBQUNqQjtBQUNBO0FBRXpCLEtBQUssQ0FBQ0ksT0FBTyxHQUFHSCw2REFBa0IsQ0FBQyxDQUFTLFVBQUUsQ0FBQztJQUM3Q0ssSUFBSSxFQUFFTix1REFBZ0I7QUFDeEIsQ0FBQztBQUVESSxPQUFPLENBQUNJLFNBQVMsQ0FBQ04sNkNBQUksRUFBRSxDQUFDO0lBQ3ZCTyxRQUFRLEVBQUUsQ0FBUztBQUNyQixDQUFDO0FBQ0RMLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDTCw2Q0FBSTtBQUV0QixpRUFBZUMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9zY2hlbWFzL2NvbW1lbnQuanM/NzU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgcGdTZXF1ZWxpemUgZnJvbSBcIi4uL2xpYi9zZXF1ZWxpemVcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXJcIjtcblxuY29uc3QgQ29tbWVudCA9IHBnU2VxdWVsaXplLmRlZmluZShcIkNvbW1lbnRcIiwge1xuICBib2R5OiBEYXRhVHlwZXMuU1RSSU5HLFxufSk7XG5cbkNvbW1lbnQuYmVsb25nc1RvKFBvc3QsIHtcbiAgb25EZWxldGU6IFwiQ0FTQ0FERVwiLFxufSk7XG5Db21tZW50LmJlbG9uZ3NUbyhVc2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiJdLCJuYW1lcyI6WyJEYXRhVHlwZXMiLCJwZ1NlcXVlbGl6ZSIsIlBvc3QiLCJVc2VyIiwiQ29tbWVudCIsImRlZmluZSIsImJvZHkiLCJTVFJJTkciLCJiZWxvbmdzVG8iLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./schemas/comment.js\n");

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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/[postId]/comments/index.ts"));
module.exports = __webpack_exports__;

})();
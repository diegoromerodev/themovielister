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
exports.id = "pages/api/auth/verify";
exports.ids = ["pages/api/auth/verify"];
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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schemas_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schemas/user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas_user__WEBPACK_IMPORTED_MODULE_1__]);\n_schemas_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst options = {\n    jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_0__.ExtractJwt.fromAuthHeaderAsBearerToken(),\n    secretOrKey: process.env.TOKENSECRET\n};\nconst jwtPassport = new passport_jwt__WEBPACK_IMPORTED_MODULE_0__.Strategy(options, async (payload, done)=>{\n    try {\n        const user = await _schemas_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            where: {\n                id: payload.user.id,\n                email: payload.user.email,\n                createdAt: payload.user.createdAt\n            }\n        });\n        if (user) return done(null, user);\n        return done(null, false);\n    } catch (err) {\n        return done(new Error(\"Invalid data\"));\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jwtPassport);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvand0UGFzc3BvcnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRTtBQUNsQztBQUVsQyxLQUFLLENBQUNHLE9BQU8sR0FBb0IsQ0FBQztJQUNoQ0MsY0FBYyxFQUFFSCxnRkFBc0M7SUFDdERLLFdBQVcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7QUFDdEMsQ0FBQztBQUVELEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ1Ysa0RBQVEsQ0FBQ0csT0FBTyxTQUFTUSxPQUFPLEVBQUVDLElBQUksR0FBSyxDQUFDO0lBQ2xFLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDWCw2REFBWSxDQUFDLENBQUM7WUFDL0JhLEtBQUssRUFBRSxDQUFDO2dCQUNOQyxFQUFFLEVBQUVMLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDRyxFQUFFO2dCQUNuQkMsS0FBSyxFQUFFTixPQUFPLENBQUNFLElBQUksQ0FBQ0ksS0FBSztnQkFDekJDLFNBQVMsRUFBRVAsT0FBTyxDQUFDRSxJQUFJLENBQUNLLFNBQVM7WUFDbkMsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLEVBQUVMLElBQUksRUFBRSxNQUFNLENBQUNELElBQUksQ0FBQyxJQUFJLEVBQUVDLElBQUk7UUFDaEMsTUFBTSxDQUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUs7SUFDekIsQ0FBQyxDQUFDLEtBQUssRUFBRU8sR0FBRyxFQUFFLENBQUM7UUFDYixNQUFNLENBQUNQLElBQUksQ0FBQyxHQUFHLENBQUNRLEtBQUssQ0FBQyxDQUFjO0lBQ3RDLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVWLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vbGliL2p3dFBhc3Nwb3J0LnRzPzJmMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyYXRlZ3ksIEV4dHJhY3RKd3QsIFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gXCJwYXNzcG9ydC1qd3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9zY2hlbWFzL3VzZXJcIjtcblxuY29uc3Qgb3B0aW9uczogU3RyYXRlZ3lPcHRpb25zID0ge1xuICBqd3RGcm9tUmVxdWVzdDogRXh0cmFjdEp3dC5mcm9tQXV0aEhlYWRlckFzQmVhcmVyVG9rZW4oKSxcbiAgc2VjcmV0T3JLZXk6IHByb2Nlc3MuZW52LlRPS0VOU0VDUkVULFxufTtcblxuY29uc3Qgand0UGFzc3BvcnQgPSBuZXcgU3RyYXRlZ3kob3B0aW9ucywgYXN5bmMgKHBheWxvYWQsIGRvbmUpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBwYXlsb2FkLnVzZXIuaWQsXG4gICAgICAgIGVtYWlsOiBwYXlsb2FkLnVzZXIuZW1haWwsXG4gICAgICAgIGNyZWF0ZWRBdDogcGF5bG9hZC51c2VyLmNyZWF0ZWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKHVzZXIpIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGRvbmUobmV3IEVycm9yKFwiSW52YWxpZCBkYXRhXCIpKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGp3dFBhc3Nwb3J0O1xuIl0sIm5hbWVzIjpbIlN0cmF0ZWd5IiwiRXh0cmFjdEp3dCIsIlVzZXIiLCJvcHRpb25zIiwiand0RnJvbVJlcXVlc3QiLCJmcm9tQXV0aEhlYWRlckFzQmVhcmVyVG9rZW4iLCJzZWNyZXRPcktleSIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTlNFQ1JFVCIsImp3dFBhc3Nwb3J0IiwicGF5bG9hZCIsImRvbmUiLCJ1c2VyIiwiZmluZE9uZSIsIndoZXJlIiwiaWQiLCJlbWFpbCIsImNyZWF0ZWRBdCIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/jwtPassport.ts\n");

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

/***/ "(api)/./pages/api/auth/verify.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/verify.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_tokenMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/tokenMiddleware */ \"(api)/./lib/tokenMiddleware.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_tokenMiddleware__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_tokenMiddleware__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst verifyToken = async (req, res)=>{\n    if (req.method !== \"POST\") return res.json(false);\n    let user;\n    try {\n        user = await (0,_lib_tokenMiddleware__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\n    } catch  {\n        user = false;\n    }\n    return res.json(user);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyToken);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC92ZXJpZnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMEQ7QUFFMUQsS0FBSyxDQUFDQyxXQUFXLFVBQVVDLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUssQ0FBQztJQUN4RSxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxNQUFNLENBQUNELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLEtBQUs7SUFDaEQsR0FBRyxDQUFDQyxJQUFJO0lBQ1IsR0FBRyxDQUFDLENBQUM7UUFDSEEsSUFBSSxHQUFHLEtBQUssQ0FBQ04sZ0VBQWUsQ0FBQ0UsR0FBRztJQUNsQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDUEksSUFBSSxHQUFHLEtBQUs7SUFDZCxDQUFDO0lBQ0QsTUFBTSxDQUFDSCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsSUFBSTtBQUN0QixDQUFDO0FBRUQsaUVBQWVMLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vcGFnZXMvYXBpL2F1dGgvdmVyaWZ5LnRzP2Y1YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgdG9rZW5NaWRkbGV3YXJlIGZyb20gXCIuLi8uLi8uLi9saWIvdG9rZW5NaWRkbGV3YXJlXCI7XG5cbmNvbnN0IHZlcmlmeVRva2VuID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikgcmV0dXJuIHJlcy5qc29uKGZhbHNlKTtcbiAgbGV0IHVzZXI7XG4gIHRyeSB7XG4gICAgdXNlciA9IGF3YWl0IHRva2VuTWlkZGxld2FyZShyZXEpO1xuICB9IGNhdGNoIHtcbiAgICB1c2VyID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKHVzZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VG9rZW47XG4iXSwibmFtZXMiOlsidG9rZW5NaWRkbGV3YXJlIiwidmVyaWZ5VG9rZW4iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJqc29uIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/verify.ts\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/verify.ts"));
module.exports = __webpack_exports__;

})();
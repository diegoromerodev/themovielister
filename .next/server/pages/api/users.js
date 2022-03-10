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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ "(api)/./pages/api/users/index.ts":
/*!**********************************!*\
  !*** ./pages/api/users/index.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schemas_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../schemas/user */ \"(api)/./schemas/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schemas_user__WEBPACK_IMPORTED_MODULE_1__]);\n_schemas_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst usersHandler = async (req, res)=>{\n    if (req.method !== \"POST\") return res.status(400).json(\"NO SUCH ENDPOINT\");\n    const { username , email , firstName , lastName , password  } = req.body;\n    try {\n        const hashedPass = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 5);\n        const user = await _schemas_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n            username,\n            email,\n            firstName,\n            lastName,\n            password: hashedPass\n        });\n        return res.status(200).json(user);\n    } catch (err) {\n        return res.status(400).json({\n            errors: err\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QjtBQUNXO0FBRXhDLEtBQUssQ0FBQ0UsWUFBWSxVQUFVQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDekUsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsTUFBTSxDQUFDRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFrQjtJQUN6RSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsU0FBUyxHQUFFQyxRQUFRLEdBQUVDLFFBQVEsRUFBQyxDQUFDLEdBQUdULEdBQUcsQ0FBQ1UsSUFBSTtJQUNuRSxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEtBQUssQ0FBQ2Qsb0RBQVcsQ0FBQ1ksUUFBUSxFQUFFLENBQUM7UUFDaEQsS0FBSyxDQUFDSSxJQUFJLEdBQUcsS0FBSyxDQUFDZiw0REFBVyxDQUFDLENBQUM7WUFDOUJPLFFBQVE7WUFDUkMsS0FBSztZQUNMQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsUUFBUSxFQUFFRSxVQUFVO1FBQ3RCLENBQUM7UUFDRCxNQUFNLENBQUNWLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDUyxJQUFJO0lBQ2xDLENBQUMsQ0FBQyxLQUFLLEVBQUVFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDZCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNZLE1BQU0sRUFBRUQsR0FBRztRQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWhCLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vcGFnZXMvYXBpL3VzZXJzL2luZGV4LnRzP2U4YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL3NjaGVtYXMvdXNlclwiO1xuXG5jb25zdCB1c2Vyc0hhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXCJOTyBTVUNIIEVORFBPSU5UXCIpO1xuICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICB0cnkge1xuICAgIGNvbnN0IGhhc2hlZFBhc3MgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgNSk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBmaXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZSxcbiAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzLFxuICAgIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3JzOiBlcnIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJzSGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJVc2VyIiwidXNlcnNIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsInVzZXJuYW1lIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBhc3N3b3JkIiwiYm9keSIsImhhc2hlZFBhc3MiLCJoYXNoIiwidXNlciIsImNyZWF0ZSIsImVyciIsImVycm9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.ts"));
module.exports = __webpack_exports__;

})();
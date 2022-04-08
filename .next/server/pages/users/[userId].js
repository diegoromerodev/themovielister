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
exports.id = "pages/users/[userId]";
exports.ids = ["pages/users/[userId]"];
exports.modules = {

/***/ "./pages/users/[userId]/index.tsx":
/*!****************************************!*\
  !*** ./pages/users/[userId]/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction UserDetailsHandler({ userData  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: userData.username\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\users\\\\[userId]\\\\index.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\users\\\\[userId]\\\\index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\nconst getServerSideProps = async (context)=>{\n    console.log(`${process.env.API_URL}/api/users/${context.query.userId}`);\n    const userDataRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${process.env.API_URL}/api/users/${context.query.userId}`);\n    console.log({\n        userDataRes\n    });\n    const userData = userDataRes.data;\n    return {\n        props: {\n            userData\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDetailsHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bdXNlcklkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtTQUloQkMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQTJCLENBQUMsRUFBRSxDQUFDO0lBQ25FLE1BQU0sNkVBQ0hDLENBQUc7OEZBQ0RDLENBQUU7c0JBQUVGLFFBQVEsQ0FBQ0csUUFBUTs7Ozs7Ozs7Ozs7QUFHNUIsQ0FBQztBQUVNLEtBQUssQ0FBQ0Msa0JBQWtCLFVBQzdCQyxPQUFrQyxHQUMvQixDQUFDO0lBQ0pDLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLFdBQVcsRUFBRUwsT0FBTyxDQUFDTSxLQUFLLENBQUNDLE1BQU07SUFDcEUsS0FBSyxDQUFDQyxXQUFXLEdBQUcsS0FBSyxDQUFDZixnREFBUyxJQUM5QlUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxXQUFXLEVBQUVMLE9BQU8sQ0FBQ00sS0FBSyxDQUFDQyxNQUFNO0lBRTFETixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1FBQUNNLFdBQVc7SUFBQyxDQUFDO0lBQzNCLEtBQUssQ0FBQ2IsUUFBUSxHQUFHYSxXQUFXLENBQUNFLElBQUk7SUFDakMsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTmhCLFFBQVE7UUFDVixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUQsa0JBQWtCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3BhZ2VzL3VzZXJzL1t1c2VySWRdL2luZGV4LnRzeD8zZDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi90eXBlc1wiO1xuXG5mdW5jdGlvbiBVc2VyRGV0YWlsc0hhbmRsZXIoeyB1c2VyRGF0YSB9OiB7IHVzZXJEYXRhOiBVc2VyU2NoZW1hIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt1c2VyRGF0YS51c2VybmFtZX08L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoXG4gIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcbikgPT4ge1xuICBjb25zb2xlLmxvZyhgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hcGkvdXNlcnMvJHtjb250ZXh0LnF1ZXJ5LnVzZXJJZH1gKTtcbiAgY29uc3QgdXNlckRhdGFSZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vYXBpL3VzZXJzLyR7Y29udGV4dC5xdWVyeS51c2VySWR9YFxuICApO1xuICBjb25zb2xlLmxvZyh7IHVzZXJEYXRhUmVzIH0pO1xuICBjb25zdCB1c2VyRGF0YSA9IHVzZXJEYXRhUmVzLmRhdGE7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHVzZXJEYXRhLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyRGV0YWlsc0hhbmRsZXI7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJVc2VyRGV0YWlsc0hhbmRsZXIiLCJ1c2VyRGF0YSIsImRpdiIsImgxIiwidXNlcm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyRGF0YVJlcyIsImdldCIsImRhdGEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[userId]/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[userId]/index.tsx"));
module.exports = __webpack_exports__;

})();
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
exports.id = "pages/posts/[postId]";
exports.ids = ["pages/posts/[postId]"];
exports.modules = {

/***/ "./pages/posts/[postId]/index.tsx":
/*!****************************************!*\
  !*** ./pages/posts/[postId]/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MovieDetails({ postData  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: postData.title\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\nconst getServerSideProps = async (context)=>{\n    console.log(`${process.env.API_URL}/api/posts/${context.query}`);\n    const postRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${process.env.API_URL}/api/posts/${context.query.postId}`);\n    const postData = postRes.data;\n    return {\n        props: {\n            postData\n        }\n    };\n};\nMovieDetails.propTypes = {\n    postData: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n        title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n    }).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBRVM7U0FHekJFLFlBQVksQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBMkIsQ0FBQyxFQUFFLENBQUM7SUFDN0QsTUFBTSw2RUFDSEMsQ0FBTzs4RkFDTEMsQ0FBRTtzQkFBRUYsUUFBUSxDQUFDRyxLQUFLOzs7Ozs7Ozs7OztBQUd6QixDQUFDO0FBRU0sS0FBSyxDQUFDQyxrQkFBa0IsVUFDN0JDLE9BQWtDLEdBQy9CLENBQUM7SUFDSkMsT0FBTyxDQUFDQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFTCxPQUFPLENBQUNNLEtBQUs7SUFDN0QsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDZixnREFBUyxJQUMxQlcsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxXQUFXLEVBQUVMLE9BQU8sQ0FBQ00sS0FBSyxDQUFDRyxNQUFNO0lBRTFELEtBQUssQ0FBQ2QsUUFBUSxHQUFHWSxPQUFPLENBQUNHLElBQUk7SUFDN0IsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTmhCLFFBQVE7UUFDVixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFREQsWUFBWSxDQUFDa0IsU0FBUyxHQUFHLENBQUM7SUFDeEJqQixRQUFRLEVBQUVGLHVEQUFlLENBQUMsQ0FBQztRQUFDSyxLQUFLLEVBQUVMLDBEQUFnQjtJQUFDLENBQUMsRUFBRXNCLFVBQVU7QUFDbkUsQ0FBQztBQUVELGlFQUFlckIsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9wYWdlcy9wb3N0cy9bcG9zdElkXS9pbmRleC50c3g/MTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgUG9zdFNjaGVtYSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdHlwZXNcIjtcblxuZnVuY3Rpb24gTW92aWVEZXRhaWxzKHsgcG9zdERhdGEgfTogeyBwb3N0RGF0YTogUG9zdFNjaGVtYSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoXG4gIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcbikgPT4ge1xuICBjb25zb2xlLmxvZyhgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hcGkvcG9zdHMvJHtjb250ZXh0LnF1ZXJ5fWApO1xuICBjb25zdCBwb3N0UmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2FwaS9wb3N0cy8ke2NvbnRleHQucXVlcnkucG9zdElkfWBcbiAgKTtcbiAgY29uc3QgcG9zdERhdGEgPSBwb3N0UmVzLmRhdGE7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3REYXRhLFxuICAgIH0sXG4gIH07XG59O1xuXG5Nb3ZpZURldGFpbHMucHJvcFR5cGVzID0ge1xuICBwb3N0RGF0YTogUHJvcFR5cGVzLnNoYXBlKHsgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllRGV0YWlscztcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlByb3BUeXBlcyIsIk1vdmllRGV0YWlscyIsInBvc3REYXRhIiwiYXJ0aWNsZSIsImgxIiwidGl0bGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwicXVlcnkiLCJwb3N0UmVzIiwiZ2V0IiwicG9zdElkIiwiZGF0YSIsInByb3BzIiwicHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[postId]/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

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
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[postId]/index.tsx"));
module.exports = __webpack_exports__;

})();
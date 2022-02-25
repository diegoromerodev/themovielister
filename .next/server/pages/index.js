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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./index.module.scss":
/*!***************************!*\
  !*** ./index.module.scss ***!
  \***************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"mainHeader\": \"_mainHeader__p0XfJ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vaW5kZXgubW9kdWxlLnNjc3M/MzM1OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluSGVhZGVyXCI6IFwiX21haW5IZWFkZXJfX3AwWGZKXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.module.scss\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.module.scss */ \"./index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction HomePage() {\n    const movieAPI = `http://www.omdbapi.com/?apikey=${\"4460dc3e\"}&s=avengers`;\n    const fetcher = (...args)=>fetch(...args).then((res)=>res.json()\n        )\n    ;\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movieAPI, fetcher);\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Fetching data...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 21\n    }, this));\n    const movie = data.Search[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mainHeader),\n                children: \"movielister\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: movie.Title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: movie.Poster,\n                alt: `${movie.Title} Poster`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n}\n// export const getStaticProps = async () => {\n//   return {\n//     props: {\n//       movie: data.Search[0],\n//     },\n//     revalidate: 10,\n//   };\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ2lCO1NBRWhDRSxRQUFRLEdBQUcsQ0FBQztJQUNuQixLQUFLLENBQUNDLFFBQVEsSUFBSSwrQkFBK0IsRUFBRUMsVUFBZ0MsQ0FBQyxXQUFXO0lBQy9GLEtBQUssQ0FBQ0csT0FBTyxPQUFPQyxJQUFJLEdBQUtDLEtBQUssSUFBSUQsSUFBSSxFQUFFRSxJQUFJLEVBQUVDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJOzs7SUFDbEUsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR2IsK0NBQU0sQ0FBQ0csUUFBUSxFQUFFSSxPQUFPO0lBQ3pDLEVBQUUsR0FBR00sSUFBSSxFQUFFLE1BQU0sNkVBQUVDLENBQUU7a0JBQUMsQ0FBZ0I7Ozs7OztJQUN0QyxLQUFLLENBQUNDLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQztJQUMzQixNQUFNLDZFQUNIQyxDQUFHOzt3RkFDREgsQ0FBRTtnQkFBQ0ksU0FBUyxFQUFFakIsc0VBQWlCOzBCQUFFLENBQVc7Ozs7Ozt3RkFDNUNtQixDQUFFOzBCQUFFTCxLQUFLLENBQUNNLEtBQUs7Ozs7Ozt3RkFDZkMsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFUixLQUFLLENBQUNTLE1BQU07Z0JBQUVDLEdBQUcsS0FBS1YsS0FBSyxDQUFDTSxLQUFLLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7O0FBR3pELENBQUM7QUFFRCxFQUE4QztBQUM5QyxFQUFhO0FBQ2IsRUFBZTtBQUNmLEVBQStCO0FBQy9CLEVBQVM7QUFDVCxFQUFzQjtBQUN0QixFQUFPO0FBQ1AsRUFBSztBQUVMLGlFQUFlbkIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbW92aWVsaXN0ZXIvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IG1vdmllQVBJID0gYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PVklFS0VZfSZzPWF2ZW5nZXJzYDtcbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihtb3ZpZUFQSSwgZmV0Y2hlcik7XG4gIGlmICghZGF0YSkgcmV0dXJuIDxoMT5GZXRjaGluZyBkYXRhLi4uPC9oMT47XG4gIGNvbnN0IG1vdmllID0gZGF0YS5TZWFyY2hbMF07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tYWluSGVhZGVyfT5tb3ZpZWxpc3RlcjwvaDE+XG4gICAgICA8aDM+e21vdmllLlRpdGxlfTwvaDM+XG4gICAgICA8aW1nIHNyYz17bW92aWUuUG9zdGVyfSBhbHQ9e2Ake21vdmllLlRpdGxlfSBQb3N0ZXJgfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1vdmllOiBkYXRhLlNlYXJjaFswXSxcbi8vICAgICB9LFxuLy8gICAgIHJldmFsaWRhdGU6IDEwLFxuLy8gICB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU1dSIiwic3R5bGVzIiwiSG9tZVBhZ2UiLCJtb3ZpZUFQSSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT1ZJRUtFWSIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoMSIsIm1vdmllIiwiU2VhcmNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbkhlYWRlciIsImgzIiwiVGl0bGUiLCJpbWciLCJzcmMiLCJQb3N0ZXIiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
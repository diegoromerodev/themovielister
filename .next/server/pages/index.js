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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction HomePage({ movie  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"movielister\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: movie.Title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: movie.Poster,\n                alt: `${movie.Title} Poster`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this));\n}\nconst getStaticProps = async ()=>{\n    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.MOVIEKEY}&s=avengers`);\n    const data = await res.json();\n    return {\n        props: {\n            movie: data.Search[0]\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztTQUFTQSxRQUFRLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUIsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RDLENBQUU7MEJBQUMsQ0FBVzs7Ozs7O3dGQUNkQyxDQUFFOzBCQUFFSCxLQUFLLENBQUNJLEtBQUs7Ozs7Ozt3RkFDZkMsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFTixLQUFLLENBQUNPLE1BQU07Z0JBQUVDLEdBQUcsS0FBS1IsS0FBSyxDQUFDSSxLQUFLLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7O0FBR3pELENBQUM7QUFFTSxLQUFLLENBQUNLLGNBQWMsYUFBZSxDQUFDO0lBQ3pDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUNwQiwrQkFBK0IsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyxXQUFXO0lBRXBFLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0wsR0FBRyxDQUFDTSxJQUFJO0lBQzNCLE1BQU0sQ0FBQyxDQUFDO1FBQ05DLEtBQUssRUFBRSxDQUFDO1lBQ05qQixLQUFLLEVBQUVlLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVuQixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSG9tZVBhZ2UoeyBtb3ZpZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5tb3ZpZWxpc3RlcjwvaDE+XG4gICAgICA8aDM+e21vdmllLlRpdGxlfTwvaDM+XG4gICAgICA8aW1nIHNyYz17bW92aWUuUG9zdGVyfSBhbHQ9e2Ake21vdmllLlRpdGxlfSBQb3N0ZXJgfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9JHtwcm9jZXNzLmVudi5NT1ZJRUtFWX0mcz1hdmVuZ2Vyc2BcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1vdmllOiBkYXRhLlNlYXJjaFswXSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJtb3ZpZSIsImRpdiIsImgxIiwiaDMiLCJUaXRsZSIsImltZyIsInNyYyIsIlBvc3RlciIsImFsdCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTU9WSUVLRVkiLCJkYXRhIiwianNvbiIsInByb3BzIiwiU2VhcmNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
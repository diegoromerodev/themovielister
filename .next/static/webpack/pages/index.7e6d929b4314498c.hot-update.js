"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/tabloids.tsx":
/*!*********************************!*\
  !*** ./components/tabloids.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SectionContainer\": function() { return /* binding */ SectionContainer; },\n/* harmony export */   \"SectionHeader\": function() { return /* binding */ SectionHeader; },\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid \",\n        \";\\n  max-width: 1200px;\\n  margin: 1rem auto;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n  padding: 0.5rem;\\n  text-align: center;\\n  text-transform: uppercase;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  grid-column: 1 / span 3;\\n  background: linear-gradient(0deg, #333, #444);\\n  padding: 0.5rem;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n    displayName: \"tabloids__SectionContainer\",\n    componentId: \"sc-1f93d643-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray);\nvar SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n    displayName: \"tabloids__SectionHeader\",\n    componentId: \"sc-1f93d643-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dark);\nvar PostItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostItem\",\n    componentId: \"sc-1f93d643-2\"\n})(_templateObject2());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxvaWRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzQztBQUNXOzs7Ozs7Ozs7Ozs7O1FBRUYsQ0FHM0I7UUFBb0IsQ0FHeEM7Ozs7Ozs7OztRQUV1QyxDQUNuQjtRQUFvQixDQU14Qzs7Ozs7Ozs7O1FBRW1DLENBS25DOzs7Ozs7O0FBdEJPLEdBQUssQ0FBQ0UsZ0JBQWdCLEdBQUdGLDRFQUFjOzs7c0JBR3hCQyxpRUFBaUI7QUFLaEMsR0FBSyxDQUFDSSxhQUFhLEdBQUdMLHVFQUFTOzs7dUJBQ2hCQyxpRUFBaUI7QUFRaEMsR0FBSyxDQUFDTyxRQUFRLEdBQUdSLHdFQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFibG9pZHMudHN4PzMzMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDFyZW0gYXV0bztcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uSGVhZGVyID0gc3R5bGVkLmgyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5kYXJrfTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBvc3RJdGVtID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMzMzLCAjNDQ0KTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbG9yUGFsZXR0ZSIsIlNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uIiwiZ3JheSIsIlNlY3Rpb25IZWFkZXIiLCJoMiIsImRhcmsiLCJQb3N0SXRlbSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tabloids.tsx\n");

/***/ })

});
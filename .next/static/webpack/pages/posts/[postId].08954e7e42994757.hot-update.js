"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./components/userDetails.tsx":
/*!************************************!*\
  !*** ./components/userDetails.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserRole\": function() { return /* binding */ UserRole; },\n/* harmony export */   \"UserDetailsContainer\": function() { return /* binding */ UserDetailsContainer; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: blue;\\n  padding: 5px;\\n  display: inline-block;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: 1px solid \",\n        \";\\n  border-bottom: none;\\n  margin-top: 1rem;\\n  background-color: \",\n        \";\\n  padding: 0.4rem;\\n  display: flex;\\n  align-items: flex-start;\\n  gap: 1rem;\\n  .user-avatar {\\n    position: relative;\\n    border: 5px solid;\\n    border-image-slice: 1;\\n    border-image-source: linear-gradient(to right, blue, purple);\\n    width: 6rem;\\n    height: 6rem;\\n  }\\n  h4 {\\n    font-weight: 600;\\n    color: \",\n        \";\\n  }\\n  p {\\n    font-size: 0.8rem;\\n  }\\n  .user-info-post {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar UserRole = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"userDetails__UserRole\",\n    componentId: \"sc-bb879271-0\"\n})(_templateObject());\nvar UserDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aside.withConfig({\n    displayName: \"userDetails__UserDetailsContainer\",\n    componentId: \"sc-bb879271-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].light);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJEZXRhaWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBQ1c7Ozs7Ozs7Ozs7Ozs7UUFFZCxDQUluQzs7Ozs7Ozs7O1FBRWlELENBQzdCO1FBQW9CLENBR3BCO1FBQW9CLENBZTdCO1FBQXFCLENBVWhDOzs7Ozs7O0FBbkNPLEdBQUssQ0FBQ0UsUUFBUSxHQUFHRix3RUFBVTs7OztBQU0zQixHQUFLLENBQUNJLG9CQUFvQixHQUFHSiwwRUFBWTs7O3VCQUMxQkMsaUVBQWlCLEVBR2pCQSxpRUFBaUIsRUFlMUJBLGtFQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJEZXRhaWxzLnRzeD9lMjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5cbmV4cG9ydCBjb25zdCBVc2VyUm9sZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYDtcblxuZXhwb3J0IGNvbnN0IFVzZXJEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbiAgLnVzZXItYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiA1cHggc29saWQ7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmx1ZSwgcHVycGxlKTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbiAgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAudXNlci1pbmZvLXBvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb2xvclBhbGV0dGUiLCJVc2VyUm9sZSIsImRpdiIsIlVzZXJEZXRhaWxzQ29udGFpbmVyIiwiYXNpZGUiLCJncmF5IiwibGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/userDetails.tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SectionContainer\": function() { return /* binding */ SectionContainer; },\n/* harmony export */   \"SectionHeader\": function() { return /* binding */ SectionHeader; },\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; },\n/* harmony export */   \"PostInfo\": function() { return /* binding */ PostInfo; },\n/* harmony export */   \"MovieThumb\": function() { return /* binding */ MovieThumb; },\n/* harmony export */   \"UserThumb\": function() { return /* binding */ UserThumb; },\n/* harmony export */   \"HoverLink\": function() { return /* binding */ HoverLink; },\n/* harmony export */   \"BoldTextShadow\": function() { return /* binding */ BoldTextShadow; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid \",\n        \";\\n  max-width: 1200px;\\n  margin: 1rem auto;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n  padding: 0.5rem;\\n  text-align: center;\\n  text-transform: uppercase;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  grid-column: 1 / span 3;\\n  background: linear-gradient(0deg, #111, #000);\\n  padding: 0.5rem;\\n  display: flex;\\n  gap: 1rem;\\n  border-top: 1px solid \",\n        \";\\n  img {\\n    transition: all 0.4s ease;\\n    filter: saturate(0%);\\n  }\\n  &:hover {\\n    background: linear-gradient(0deg, #333, #322);\\n    img {\\n      filter: saturate(100%);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  flex: 1;\\n  p {\\n    font-weight: 700;\\n  }\\n  small {\\n    font-weight: 200;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 25%;\\n  overflow: hidden;\\n  border: 1px solid \",\n        \";\\n  cursor: pointer;\\n  div {\\n    position: relative;\\n    height: 100%;\\n    display: grid;\\n    place-items: center;\\n    h4 {\\n      color: \",\n        \";\\n      position: absolute;\\n    }\\n    img {\\n      position: absolute;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  gap: 1rem;\\n  .user-thumb-info {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n    justify-content: center;\\n    font-size: 0.9rem;\\n    font-weight: 300;\\n    p {\\n      font-size: 0.7rem;\\n    }\\n  }\\n  .user-thumb-img {\\n    width: 3rem;\\n    overflow: hidden;\\n    height: 3rem;\\n    position: relative;\\n    border-radius: 50%;\\n    border: 1px solid \",\n        \";\\n    img {\\n      position: absolute;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  &:hover {\\n    color: gold;\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  text-shadow: 1px 1px 5px \",\n        \",\\n    2px 2px 10px \",\n        \";\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nvar SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n    displayName: \"tabloids__SectionContainer\",\n    componentId: \"sc-68681fb8-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray);\nvar SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n    displayName: \"tabloids__SectionHeader\",\n    componentId: \"sc-68681fb8-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dark);\nvar PostItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostItem\",\n    componentId: \"sc-68681fb8-2\"\n})(_templateObject2(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dark);\nvar PostInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"tabloids__PostInfo\",\n    componentId: \"sc-68681fb8-3\"\n})(_templateObject3());\nvar MovieThumb = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a.withConfig({\n    displayName: \"tabloids__MovieThumb\",\n    componentId: \"sc-68681fb8-4\"\n})(_templateObject4(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].light);\nvar UserThumb = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"tabloids__UserThumb\",\n    componentId: \"sc-68681fb8-5\"\n})(_templateObject5(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray);\nvar HoverLink = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a.withConfig({\n    displayName: \"tabloids__HoverLink\",\n    componentId: \"sc-68681fb8-6\"\n})(_templateObject6());\nvar BoldTextShadow = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h4.withConfig({\n    displayName: \"tabloids__BoldTextShadow\",\n    componentId: \"sc-68681fb8-7\"\n})(_templateObject7(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_0__[\"default\"].darker);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxvaWRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1c7Ozs7Ozs7Ozs7Ozs7UUFFRixDQUczQjtRQUFvQixDQUd4Qzs7Ozs7Ozs7O1FBRXVDLENBQ25CO1FBQW9CLENBTXhDOzs7Ozs7Ozs7UUFFbUMsQ0FNWDtRQUFvQixDQVc1Qzs7Ozs7Ozs7O1FBRW1DLENBV25DOzs7Ozs7Ozs7UUFFbUMsQ0FHZjtRQUFvQixDQVEzQjtRQUFxQixDQU9sQzs7Ozs7Ozs7O1FBRW9DLENBb0JkO1FBQW9CLENBSzFDOzs7Ozs7Ozs7UUFFa0MsQ0FJbEM7Ozs7Ozs7OztRQUV3QyxDQUNiO1FBQXNCLENBQ2hDO1FBQXNCLENBQ3ZDOzs7Ozs7O0FBekdPLEdBQUssQ0FBQ0UsZ0JBQWdCLEdBQUdGLDRFQUFjOzs7c0JBR3hCQyxpRUFBaUI7QUFLaEMsR0FBSyxDQUFDSSxhQUFhLEdBQUdMLHVFQUFTOzs7dUJBQ2hCQyxpRUFBaUI7QUFRaEMsR0FBSyxDQUFDTyxRQUFRLEdBQUdSLHdFQUFVOzs7dUJBTVJDLGlFQUFpQjtBQWFwQyxHQUFLLENBQUNTLFFBQVEsR0FBR1Ysd0VBQVU7Ozs7QUFhM0IsR0FBSyxDQUFDVyxVQUFVLEdBQUdYLHNFQUFROzs7dUJBR1pDLGlFQUFpQixFQVF4QkEsa0VBQWtCO0FBUzFCLEdBQUssQ0FBQ2EsU0FBUyxHQUFHZCx3RUFBVTs7O3VCQW9CWEMsaUVBQWlCO0FBT2xDLEdBQUssQ0FBQ2MsU0FBUyxHQUFHZixzRUFBUTs7OztBQU0xQixHQUFLLENBQUNnQixjQUFjLEdBQUdoQix1RUFBUzs7O3VCQUNWQyxtRUFBbUIsRUFDN0JBLG1FQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhYmxvaWRzLnRzeD8zMzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbkhlYWRlciA9IHN0eWxlZC5oMmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZGFya307XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzExMSwgIzAwMCk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZGFya307XG4gIGltZyB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDAlKTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzMzMywgIzMyMik7XG4gICAgaW1nIHtcbiAgICAgIGZpbHRlcjogc2F0dXJhdGUoMTAwJSk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUG9zdEluZm8gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgZmxleDogMTtcbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBzbWFsbCB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1vdmllVGh1bWIgPSBzdHlsZWQuYWBcbiAgd2lkdGg6IDI1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBoNCB7XG4gICAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFVzZXJUaHVtYiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgLnVzZXItdGh1bWItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxuICB9XG4gIC51c2VyLXRodW1iLWltZyB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhvdmVyTGluayA9IHN0eWxlZC5hYFxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogZ29sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJvbGRUZXh0U2hhZG93ID0gc3R5bGVkLmg0YFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggJHtDb2xvclBhbGV0dGUuZGFya2VyfSxcbiAgICAycHggMnB4IDEwcHggJHtDb2xvclBhbGV0dGUuZGFya2VyfTtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29sb3JQYWxldHRlIiwiU2VjdGlvbkNvbnRhaW5lciIsInNlY3Rpb24iLCJncmF5IiwiU2VjdGlvbkhlYWRlciIsImgyIiwiZGFyayIsIlBvc3RJdGVtIiwiZGl2IiwiUG9zdEluZm8iLCJNb3ZpZVRodW1iIiwiYSIsImxpZ2h0IiwiVXNlclRodW1iIiwiSG92ZXJMaW5rIiwiQm9sZFRleHRTaGFkb3ciLCJoNCIsImRhcmtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tabloids.tsx\n");

/***/ })

});
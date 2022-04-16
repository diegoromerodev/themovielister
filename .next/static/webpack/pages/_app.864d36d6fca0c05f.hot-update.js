"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/userDetails.tsx":
/*!************************************!*\
  !*** ./components/userDetails.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserRole\": function() { return /* binding */ UserRole; },\n/* harmony export */   \"UserDetailsContainer\": function() { return /* binding */ UserDetailsContainer; },\n/* harmony export */   \"CircularAvatar\": function() { return /* binding */ CircularAvatar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: \",\n        \";\\n  padding: 5px;\\n  display: inline-block;\\n  text-transform: uppercase;\\n  color: #0f0;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border: 1px solid \",\n        \";\\n  border-bottom: none;\\n  margin-top: 1rem;\\n  background-color: \",\n        \";\\n  padding: 0.4rem;\\n  display: flex;\\n  align-items: flex-start;\\n  gap: 1rem;\\n  .user-avatar {\\n    position: relative;\\n    border: 5px solid;\\n    border-image-slice: 1;\\n    border-image-source: linear-gradient(to right, blue, purple);\\n    width: 6rem;\\n    height: 6rem;\\n  }\\n  h4 {\\n    font-weight: 600;\\n    color: \",\n        \";\\n  }\\n  p {\\n    font-size: 0.8rem;\\n  }\\n  .user-info-post {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 5px;\\n    align-items: flex-start;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: \",\n        \";\\n  height: \",\n        \";\\n  overflow: hidden;\\n  position: relative;\\n  border-radius: 50%;\\n  border: 1px solid \",\n        \";\\n  img {\\n    position: absolute;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar UserRole = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"userDetails__UserRole\",\n    componentId: \"sc-cdc76862-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].darker);\nvar UserDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aside.withConfig({\n    displayName: \"userDetails__UserDetailsContainer\",\n    componentId: \"sc-cdc76862-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].light);\nvar RoundImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"userDetails__RoundImageContainer\",\n    componentId: \"sc-cdc76862-2\"\n})(_templateObject2(), function(param) {\n    var width = param.width;\n    return width;\n}, function(param) {\n    var height = param.height;\n    return height;\n}, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray);\n_c = RoundImageContainer;\nfunction CircularAvatar(param) {\n    var imageURL = param.imageURL, width = param.width, height = param.height;\n    if (!imageURL) return null;\n    var defaultSize = \"3rem\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RoundImageContainer, {\n        width: width || defaultSize,\n        height: height || defaultSize,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: imageURL,\n            objectFit: \"cover\",\n            layout: \"fill\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\userDetails.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\userDetails.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this));\n}\n_c1 = CircularAvatar;\nvar _c, _c1;\n$RefreshReg$(_c, \"RoundImageContainer\");\n$RefreshReg$(_c1, \"CircularAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJEZXRhaWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVE7QUFDVzs7Ozs7Ozs7Ozs7OztRQUVkLENBQ3JCO1FBQXNCLENBS3BDOzs7Ozs7Ozs7UUFFaUQsQ0FDN0I7UUFBb0IsQ0FHcEI7UUFBb0IsQ0FlN0I7UUFBcUIsQ0FXaEM7Ozs7Ozs7OztRQU95RCxDQUNoRDtRQUF1QixDQUN0QjtRQUF5QixDQUlmO1FBQW9CLENBSXhDOzs7Ozs7O0FBdkRPLEdBQUssQ0FBQ0csUUFBUSxHQUFHRix3RUFBVTs7O3NCQUNsQkMsbUVBQW1CO0FBTzVCLEdBQUssQ0FBQ0ksb0JBQW9CLEdBQUdMLDBFQUFZOzs7dUJBQzFCQyxpRUFBaUIsRUFHakJBLGlFQUFpQixFQWUxQkEsa0VBQWtCO0FBa0IvQixHQUFLLENBQUNRLG1CQUFtQixHQUFHVCx3RUFBVTs7O3VCQUMzQixRQUFRO1FBQUxVLEtBQUssU0FBTEEsS0FBSztJQUFPQSxNQUFNLENBQU5BLEtBQUs7R0FDbkIsUUFBUTtRQUFMQyxNQUFNLFNBQU5BLE1BQU07SUFBT0EsTUFBTSxDQUFOQSxNQUFNO0dBSVpWLGlFQUFpQjtLQU5qQ1EsbUJBQW1CO0FBWWxCLFNBQVNHLGNBQWMsQ0FBQyxLQVE5QixFQUFFLENBQUM7UUFQRkMsUUFBUSxHQURxQixLQVE5QixDQVBDQSxRQUFRLEVBQ1JILEtBQUssR0FGd0IsS0FROUIsQ0FOQ0EsS0FBSyxFQUNMQyxNQUFNLEdBSHVCLEtBUTlCLENBTENBLE1BQU07SUFNTixFQUFFLEdBQUdFLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSTtJQUMxQixHQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFNO0lBQzFCLE1BQU0sNkVBQ0hMLG1CQUFtQjtRQUNsQkMsS0FBSyxFQUFFQSxLQUFLLElBQUlJLFdBQVc7UUFDM0JILE1BQU0sRUFBRUEsTUFBTSxJQUFJRyxXQUFXOzhGQUU1QmYsbURBQUs7WUFBQ2dCLEdBQUcsRUFBRUYsUUFBUTtZQUFFRyxTQUFTLEVBQUMsQ0FBTztZQUFDQyxNQUFNLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7QUFHM0QsQ0FBQztNQW5CZUwsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJEZXRhaWxzLnRzeD9lMjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgU3RyaW5nT3B0aW9ucyB9IGZyb20gXCJzYXNzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuXG5leHBvcnQgY29uc3QgVXNlclJvbGUgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAke0NvbG9yUGFsZXR0ZS5kYXJrZXJ9O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwZjA7XG5gO1xuXG5leHBvcnQgY29uc3QgVXNlckRldGFpbHNDb250YWluZXIgPSBzdHlsZWQuYXNpZGVgXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xuICAudXNlci1hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDVweCBzb2xpZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibHVlLCBwdXJwbGUpO1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxuICBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIC51c2VyLWluZm8tcG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgUm91bmRBdmF0YXJQcm9wcyB7XG4gIHdpZHRoOiBzdHJpbmc7XG4gIGhlaWdodDogc3RyaW5nO1xufVxuXG5jb25zdCBSb3VuZEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdjxSb3VuZEF2YXRhclByb3BzPmBcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGh9O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaXJjdWxhckF2YXRhcih7XG4gIGltYWdlVVJMLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufToge1xuICBpbWFnZVVSTDogc3RyaW5nO1xuICB3aWR0aDogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbn0pIHtcbiAgaWYgKCFpbWFnZVVSTCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGRlZmF1bHRTaXplID0gXCIzcmVtXCI7XG4gIHJldHVybiAoXG4gICAgPFJvdW5kSW1hZ2VDb250YWluZXJcbiAgICAgIHdpZHRoPXt3aWR0aCB8fCBkZWZhdWx0U2l6ZX1cbiAgICAgIGhlaWdodD17aGVpZ2h0IHx8IGRlZmF1bHRTaXplfVxuICAgID5cbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlVVJMfSBvYmplY3RGaXQ9XCJjb3ZlclwiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIDwvUm91bmRJbWFnZUNvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlZCIsIkNvbG9yUGFsZXR0ZSIsIlVzZXJSb2xlIiwiZGl2IiwiZGFya2VyIiwiVXNlckRldGFpbHNDb250YWluZXIiLCJhc2lkZSIsImdyYXkiLCJsaWdodCIsIlJvdW5kSW1hZ2VDb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsIkNpcmN1bGFyQXZhdGFyIiwiaW1hZ2VVUkwiLCJkZWZhdWx0U2l6ZSIsInNyYyIsIm9iamVjdEZpdCIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/userDetails.tsx\n");

/***/ })

});
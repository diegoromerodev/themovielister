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

/***/ "./components/SecondaryNav.tsx":
/*!*************************************!*\
  !*** ./components/SecondaryNav.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar LighterNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray);\n_c = LighterNavContainer;\nvar MenuItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_1___default()))(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].light);\n_c1 = MenuItem;\nfunction SecondaryNav() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LighterNavContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {\n            href: \"/about\",\n            children: \"About\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_c2 = SecondaryNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SecondaryNav);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"LighterNavContainer\");\n$RefreshReg$(_c1, \"MenuItem\");\n$RefreshReg$(_c2, \"SecondaryNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY29uZGFyeU5hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDVTtBQUNXOzs7Ozs7Ozs7Ozs7O1FBRVYsQ0FDbkI7UUFBb0IsQ0FFeEM7Ozs7Ozs7OztRQUU4QixDQUNyQjtRQUFxQixDQUM5Qjs7Ozs7OztBQVBBLEdBQUssQ0FBQ0csbUJBQW1CLEdBQUdGLDZEQUFVLG9CQUNoQkMsaUVBQWlCO0tBRGpDQyxtQkFBbUI7QUFLekIsR0FBSyxDQUFDRyxRQUFRLEdBQUdMLDZEQUFNLENBQUNELGtEQUFJLHNCQUNqQkUsa0VBQWtCO01BRHZCSSxRQUFRO1NBSUxFLFlBQVksR0FBRyxDQUFDO0lBQ3ZCLE1BQU0sNkVBQ0hMLG1CQUFtQjs4RkFDakJHLFFBQVE7WUFBQ0csSUFBSSxFQUFDLENBQVE7c0JBQUMsQ0FBSzs7Ozs7Ozs7Ozs7QUFHbkMsQ0FBQztNQU5RRCxZQUFZO0FBUXJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWNvbmRhcnlOYXYudHN4Pzg0M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcblxuY29uc3QgTGlnaHRlck5hdkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQoTGluaylgXG4gIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG5gO1xuXG5mdW5jdGlvbiBTZWNvbmRhcnlOYXYoKSB7XG4gIHJldHVybiAoXG4gICAgPExpZ2h0ZXJOYXZDb250YWluZXI+XG4gICAgICA8TWVudUl0ZW0gaHJlZj1cIi9hYm91dFwiPkFib3V0PC9NZW51SXRlbT5cbiAgICA8L0xpZ2h0ZXJOYXZDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZGFyeU5hdjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVkIiwiQ29sb3JQYWxldHRlIiwiTGlnaHRlck5hdkNvbnRhaW5lciIsImRpdiIsImdyYXkiLCJNZW51SXRlbSIsImxpZ2h0IiwiU2Vjb25kYXJ5TmF2IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SecondaryNav.tsx\n");

/***/ })

});
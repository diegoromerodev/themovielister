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

/***/ "./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  padding: 1.1rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-family: sans-serif;\\n  color: \",\n        \";\\n  font-family: \\\"Inter\\\";\\n  font-size: 1.2rem;\\n  letter-spacing: 1.2rem;\\n  text-align: center;\\n  animation: variable-font 2s ease alternate infinite;\\n\\n  @keyframes variable-font {\\n    from {\\n      font-weight: 100;\\n    }\\n    to {\\n      font-weight: 900;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nav(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dark);\n_c = NavContainer;\nvar NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h3(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].light);\n_c1 = NavLogo;\nfunction NavBar() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLogo, {\n            children: \"MOVIELISTER\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\NavBar.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this));\n}\n_c2 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavContainer\");\n$RefreshReg$(_c1, \"NavLogo\");\n$RefreshReg$(_c2, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBQ1c7Ozs7Ozs7Ozs7Ozs7UUFFakIsQ0FDWjtRQUFvQixDQUV4Qzs7Ozs7Ozs7O1FBRTBCLENBRWpCO1FBQXFCLENBZTlCOzs7Ozs7O0FBdEJBLEdBQUssQ0FBQ0UsWUFBWSxHQUFHRiw2REFBVSxvQkFDVEMsaUVBQWlCO0tBRGpDQyxZQUFZO0FBS2xCLEdBQUssQ0FBQ0csT0FBTyxHQUFHTCw0REFBUyxxQkFFZEMsa0VBQWtCO01BRnZCSSxPQUFPO1NBbUJKRyxNQUFNLEdBQUcsQ0FBQztJQUNqQixNQUFNLDZFQUNITixZQUFZOzhGQUNWRyxPQUFPO3NCQUFDLENBQVc7Ozs7Ozs7Ozs7O0FBRzFCLENBQUM7TUFOUUcsTUFBTTtBQVFmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIudHN4PzMwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZGFya307XG4gIHBhZGRpbmc6IDEuMXJlbTtcbmA7XG5cbmNvbnN0IE5hdkxvZ28gPSBzdHlsZWQuaDNgXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbmltYXRpb246IHZhcmlhYmxlLWZvbnQgMnMgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XG5cbiAgQGtleWZyYW1lcyB2YXJpYWJsZS1mb250IHtcbiAgICBmcm9tIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIDxOYXZMb2dvPk1PVklFTElTVEVSPC9OYXZMb2dvPlxuICAgIDwvTmF2Q29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29sb3JQYWxldHRlIiwiTmF2Q29udGFpbmVyIiwibmF2IiwiZGFyayIsIk5hdkxvZ28iLCJoMyIsImxpZ2h0IiwiTmF2QmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/logout",{

/***/ "./pages/auth/logout.tsx":
/*!*******************************!*\
  !*** ./pages/auth/logout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_postDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postDetails */ \"./components/postDetails.tsx\");\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/typography */ \"./components/typography.tsx\");\n/* harmony import */ var _components_userDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/userDetails */ \"./components/userDetails.tsx\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/AppContext */ \"./lib/AppContext.tsx\");\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  place-items: center;\\n  gap: 1rem;\\n  padding: 2rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar LogoutScreenContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"logout__LogoutScreenContainer\",\n    componentId: \"sc-49dda00b-0\"\n})(_templateObject());\n_c = LogoutScreenContainer;\nvar handleLogout = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), appData = ref[0];\n    if (!appData.userData.avatarURL) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.SectionContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_3__.SectionHeader, {\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\logout.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoutScreenContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_userDetails__WEBPACK_IMPORTED_MODULE_5__.CircularAvatar, {\n                        width: \"10rem\",\n                        height: \"10rem\",\n                        imageURL: appData.userData.avatarURL\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\logout.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_typography__WEBPACK_IMPORTED_MODULE_4__.PrimaryThinHeader, {\n                        children: [\n                            \"See you soon, \",\n                            appData.userData.username,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\logout.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_postDetails__WEBPACK_IMPORTED_MODULE_2__.SubmitButton, {\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\logout.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\logout.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\auth\\\\logout.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_s(handleLogout, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleLogout);\nvar _c;\n$RefreshReg$(_c, \"LogoutScreenContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ291dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0k7QUFDcUI7QUFDZ0I7QUFDWjtBQUNGO0FBQ2hCOzs7Ozs7Ozs7Ozs7OztRQUdKLENBS3pDOzs7Ozs7OztBQUxBLEdBQUssQ0FBQ1EscUJBQXFCLEdBQUdQLHdFQUFVOzs7O0tBQWxDTyxxQkFBcUI7QUFPM0IsR0FBSyxDQUFDRSxZQUFZLEdBQUcsUUFDckIsR0FEMkIsQ0FBQzs7SUFDMUIsR0FBSyxDQUE2QlYsR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNPLHVEQUFVLEdBQWhESSxPQUFPLEdBQW9CWCxHQUFzQjtJQUN4RCxFQUFFLEdBQUdXLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDNUMsTUFBTSw2RUFDSFYsa0VBQWdCOzt3RkFDZEMsK0RBQWE7MEJBQUMsQ0FBTTs7Ozs7O3dGQUNwQkkscUJBQXFCOztnR0FDbkJGLG1FQUFjO3dCQUNiUSxLQUFLLEVBQUMsQ0FBTzt3QkFDYkMsTUFBTSxFQUFDLENBQU87d0JBQ2RDLFFBQVEsRUFBRUwsT0FBTyxDQUFDQyxRQUFRLENBQUNDLFNBQVM7Ozs7OztnR0FFckNSLHFFQUFpQjs7NEJBQUMsQ0FDSDs0QkFBQ00sT0FBTyxDQUFDQyxRQUFRLENBQUNLLFFBQVE7NEJBQUMsQ0FDM0M7Ozs7Ozs7Z0dBQ0NmLGlFQUFZO2tDQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1QixDQUFDO0dBbkJLUSxZQUFZO0FBcUJsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvbG9nb3V0LnRzeD9kOGUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTdWJtaXRCdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0RGV0YWlsc1wiO1xuaW1wb3J0IHsgU2VjdGlvbkNvbnRhaW5lciwgU2VjdGlvbkhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RhYmxvaWRzXCI7XG5pbXBvcnQgeyBQcmltYXJ5VGhpbkhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IENpcmN1bGFyQXZhdGFyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckRldGFpbHNcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi8uLi9saWIvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgQXBwRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vbGliL3R5cGVzXCI7XG5cbmNvbnN0IExvZ291dFNjcmVlbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbmA7XG5cbmNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgY29uc3QgW2FwcERhdGFdOiBBcHBEYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGlmICghYXBwRGF0YS51c2VyRGF0YS5hdmF0YXJVUkwpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFNlY3Rpb25IZWFkZXI+TG9nb3V0PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgPExvZ291dFNjcmVlbkNvbnRhaW5lcj5cbiAgICAgICAgPENpcmN1bGFyQXZhdGFyXG4gICAgICAgICAgd2lkdGg9XCIxMHJlbVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTByZW1cIlxuICAgICAgICAgIGltYWdlVVJMPXthcHBEYXRhLnVzZXJEYXRhLmF2YXRhclVSTH1cbiAgICAgICAgLz5cbiAgICAgICAgPFByaW1hcnlUaGluSGVhZGVyPlxuICAgICAgICAgIFNlZSB5b3Ugc29vbiwge2FwcERhdGEudXNlckRhdGEudXNlcm5hbWV9IVxuICAgICAgICA8L1ByaW1hcnlUaGluSGVhZGVyPlxuICAgICAgICA8U3VibWl0QnV0dG9uPkxvZ291dDwvU3VibWl0QnV0dG9uPlxuICAgICAgPC9Mb2dvdXRTY3JlZW5Db250YWluZXI+XG4gICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlTG9nb3V0O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJzdHlsZWQiLCJTdWJtaXRCdXR0b24iLCJTZWN0aW9uQ29udGFpbmVyIiwiU2VjdGlvbkhlYWRlciIsIlByaW1hcnlUaGluSGVhZGVyIiwiQ2lyY3VsYXJBdmF0YXIiLCJBcHBDb250ZXh0IiwiTG9nb3V0U2NyZWVuQ29udGFpbmVyIiwiZGl2IiwiaGFuZGxlTG9nb3V0IiwiYXBwRGF0YSIsInVzZXJEYXRhIiwiYXZhdGFyVVJMIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVVSTCIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/logout.tsx\n");

/***/ })

});
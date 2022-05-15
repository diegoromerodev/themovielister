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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \"7a;\\n  display: flex;\\n  padding: 0.5rem;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 0.5rem;\\n  margin: 0 auto;\\n  span {\\n    color: \",\n        \";\\n    text-decoration: none;\\n    font-size: 0.9rem;\\n    transition: all 0.2s ease-out;\\n    padding: 0.5rem 1rem;\\n    text-align: center;\\n    background-color: \",\n        \";\\n    border-radius: 5rem;\\n    cursor: pointer;\\n    &.curr-url {\\n      background: \",\n        \";\\n      color: \",\n        \";\\n    }\\n    &:hover {\\n      font-weight: 700;\\n      background-color: \",\n        \"7a;\\n    }\\n  }\\n  p {\\n    color: \",\n        \";\\n    font-weight: 100;\\n    opacity: 0.4;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar LighterNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside.withConfig({\n    displayName: \"SecondaryNav__LighterNavContainer\",\n    componentId: \"sc-ce9ddaa8-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].lightGray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dark, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].lightGray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c = LighterNavContainer;\nvar AuthTypes;\n(function(AuthTypes) {\n    AuthTypes[AuthTypes[\"Auth\"] = 0] = \"Auth\";\n    AuthTypes[AuthTypes[\"Unauth\"] = 1] = \"Unauth\";\n    AuthTypes[AuthTypes[\"Both\"] = 2] = \"Both\";\n})(AuthTypes || (AuthTypes = {}));\nfunction SecondaryNav() {\n    var _this = this;\n    var ref2;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), appData = ref1[0];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var menuOptions = [\n        {\n            name: \"Home\",\n            path: \"/\",\n            showWhen: AuthTypes.Both\n        },\n        {\n            name: \"Create account\",\n            path: \"/auth/signup\",\n            showWhen: AuthTypes.Unauth\n        },\n        {\n            name: \"Login\",\n            path: \"/auth/login\",\n            showWhen: AuthTypes.Unauth\n        },\n        {\n            name: \"Create post\",\n            path: \"/posts/create\",\n            showWhen: AuthTypes.Auth\n        },\n        {\n            name: \"My account\",\n            path: \"/users/\".concat(appData === null || appData === void 0 ? void 0 : (ref2 = appData.userData) === null || ref2 === void 0 ? void 0 : ref2.id),\n            showWhen: AuthTypes.Auth\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LighterNavContainer, {\n        children: menuOptions.reduce(function(options, opt) {\n            var ref;\n            var optionAuthType = (appData === null || appData === void 0 ? void 0 : (ref = appData.userData) === null || ref === void 0 ? void 0 : ref.username) ? AuthTypes.Auth : AuthTypes.Unauth;\n            if (opt.showWhen === optionAuthType || opt.showWhen === AuthTypes.Both) {\n                options.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: opt.path,\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: router.pathname === opt.path && \"curr-url\",\n                        children: opt.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, _this));\n            }\n            return options;\n        }, [])\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this));\n}\n_s(SecondaryNav, \"uwal1nlCjR6zsENuIPII/d8HuYo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c1 = SecondaryNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SecondaryNav);\nvar _c, _c1;\n$RefreshReg$(_c, \"LighterNavContainer\");\n$RefreshReg$(_c1, \"SecondaryNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNFLE1BQU07WUFDcEIsRUFBRSxFQUNBYSxHQUFHLENBQUNMLFFBQVEsS0FBS00sY0FBYyxJQUMvQkQsR0FBRyxDQUFDTCxRQUFRLEtBQUtWLFNBQVMsQ0FBQ0csSUFBSSxFQUMvQixDQUFDO2dCQUNEVyxPQUFPLENBQUNJLElBQUksNkVBQ1Q5QixrREFBSTtvQkFBQytCLElBQUksRUFBRUosR0FBRyxDQUFDTixJQUFJO29CQUFFVyxRQUFROzBHQUMzQkMsQ0FBSTt3QkFBQ0MsU0FBUyxFQUFFaEIsTUFBTSxDQUFDaUIsUUFBUSxLQUFLUixHQUFHLENBQUNOLElBQUksSUFBSSxDQUFVO2tDQUN4RE0sR0FBRyxDQUFDUCxJQUFJOzs7Ozs7Ozs7OztZQUlqQixDQUFDO1lBQ0QsTUFBTSxDQUFDTSxPQUFPO1FBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7OztBQUdYLENBQUM7R0FwRFFWLFlBQVk7O1FBRUpmLGtEQUFTOzs7TUFGakJlLFlBQVk7QUFzRHJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWNvbmRhcnlOYXYudHN4Pzg0M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2xpYi9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBBcHBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9saWIvdHlwZXNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcblxuY29uc3QgTGlnaHRlck5hdkNvbnRhaW5lciA9IHN0eWxlZC5hc2lkZWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX03YTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBzcGFuIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJi5jdXJyLXVybCB7XG4gICAgICBiYWNrZ3JvdW5kOiAke0NvbG9yUGFsZXR0ZS5saWdodEdyYXl9O1xuICAgICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmRhcmt9O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodEdyYXl9N2E7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbmA7XG5cbmVudW0gQXV0aFR5cGVzIHtcbiAgQXV0aCxcbiAgVW5hdXRoLFxuICBCb3RoLFxufVxuXG5pbnRlcmZhY2UgTWVudU9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBzaG93V2hlbjogQXV0aFR5cGVzO1xufVxuXG5mdW5jdGlvbiBTZWNvbmRhcnlOYXYoKSB7XG4gIGNvbnN0IFthcHBEYXRhXTogQXBwRGF0YUNvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbWVudU9wdGlvbnM6IE1lbnVPcHRpb25bXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkhvbWVcIixcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgc2hvd1doZW46IEF1dGhUeXBlcy5Cb3RoLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDcmVhdGUgYWNjb3VudFwiLFxuICAgICAgcGF0aDogXCIvYXV0aC9zaWdudXBcIixcbiAgICAgIHNob3dXaGVuOiBBdXRoVHlwZXMuVW5hdXRoLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJMb2dpblwiLFxuICAgICAgcGF0aDogXCIvYXV0aC9sb2dpblwiLFxuICAgICAgc2hvd1doZW46IEF1dGhUeXBlcy5VbmF1dGgsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkNyZWF0ZSBwb3N0XCIsXG4gICAgICBwYXRoOiBcIi9wb3N0cy9jcmVhdGVcIixcbiAgICAgIHNob3dXaGVuOiBBdXRoVHlwZXMuQXV0aCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTXkgYWNjb3VudFwiLFxuICAgICAgcGF0aDogYC91c2Vycy8ke2FwcERhdGE/LnVzZXJEYXRhPy5pZH1gLFxuICAgICAgc2hvd1doZW46IEF1dGhUeXBlcy5BdXRoLFxuICAgIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPExpZ2h0ZXJOYXZDb250YWluZXI+XG4gICAgICB7bWVudU9wdGlvbnMucmVkdWNlKChvcHRpb25zLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uQXV0aFR5cGUgPSBhcHBEYXRhPy51c2VyRGF0YT8udXNlcm5hbWVcbiAgICAgICAgICA/IEF1dGhUeXBlcy5BdXRoXG4gICAgICAgICAgOiBBdXRoVHlwZXMuVW5hdXRoO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb3B0LnNob3dXaGVuID09PSBvcHRpb25BdXRoVHlwZSB8fFxuICAgICAgICAgIG9wdC5zaG93V2hlbiA9PT0gQXV0aFR5cGVzLkJvdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17b3B0LnBhdGh9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gb3B0LnBhdGggJiYgXCJjdXJyLXVybFwifT5cbiAgICAgICAgICAgICAgICB7b3B0Lm5hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfSwgW10pfVxuICAgIDwvTGlnaHRlck5hdkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kYXJ5TmF2O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0Iiwic3R5bGVkIiwiQXBwQ29udGV4dCIsIkNvbG9yUGFsZXR0ZSIsIkxpZ2h0ZXJOYXZDb250YWluZXIiLCJhc2lkZSIsImdyYXkiLCJsaWdodCIsImxpZ2h0R3JheSIsImRhcmsiLCJBdXRoVHlwZXMiLCJBdXRoIiwiVW5hdXRoIiwiQm90aCIsIlNlY29uZGFyeU5hdiIsImFwcERhdGEiLCJyb3V0ZXIiLCJtZW51T3B0aW9ucyIsIm5hbWUiLCJwYXRoIiwic2hvd1doZW4iLCJ1c2VyRGF0YSIsImlkIiwicmVkdWNlIiwib3B0aW9ucyIsIm9wdCIsIm9wdGlvbkF1dGhUeXBlIiwidXNlcm5hbWUiLCJwdXNoIiwiaHJlZiIsInBhc3NIcmVmIiwic3BhbiIsImNsYXNzTmFtZSIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SecondaryNav.tsx\n");

/***/ })

});
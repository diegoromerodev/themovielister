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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \"7a;\\n  display: flex;\\n  padding: 0.5rem;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 0.5rem;\\n  margin: 0 auto;\\n  span {\\n    color: \",\n        \";\\n    text-decoration: none;\\n    font-size: 0.9rem;\\n    transition: all 0.2s ease-out;\\n    padding: 0.5rem 1rem;\\n    text-align: center;\\n    background-color: \",\n        \";\\n    border-radius: 5rem;\\n    cursor: pointer;\\n    border: 2px solid transparent;\\n    &:hover {\\n      font-weight: 700;\\n      background-color: \",\n        \"7a;\\n    }\\n    &.curr-url {\\n      background: \",\n        \";\\n      color: \",\n        \";\\n      font-weight: 700;\\n      border: 2px solid \",\n        \";\\n    }\\n  }\\n  p {\\n    color: \",\n        \";\\n    font-weight: 100;\\n    opacity: 0.4;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar LighterNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside.withConfig({\n    displayName: \"SecondaryNav__LighterNavContainer\",\n    componentId: \"sc-f5c07201-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].lightGray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c = LighterNavContainer;\nvar AuthTypes;\n(function(AuthTypes) {\n    AuthTypes[AuthTypes[\"Auth\"] = 0] = \"Auth\";\n    AuthTypes[AuthTypes[\"Unauth\"] = 1] = \"Unauth\";\n    AuthTypes[AuthTypes[\"Both\"] = 2] = \"Both\";\n})(AuthTypes || (AuthTypes = {}));\nfunction SecondaryNav() {\n    var _this = this;\n    var ref2;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), appData = ref1[0];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var menuOptions = [\n        {\n            name: \"Home\",\n            path: \"/\",\n            showWhen: AuthTypes.Both\n        },\n        {\n            name: \"Create account\",\n            path: \"/auth/signup\",\n            showWhen: AuthTypes.Unauth\n        },\n        {\n            name: \"Login\",\n            path: \"/auth/login\",\n            showWhen: AuthTypes.Unauth\n        },\n        {\n            name: \"Create post\",\n            path: \"/posts/create\",\n            showWhen: AuthTypes.Auth\n        },\n        {\n            name: \"My account\",\n            path: \"/users/\".concat(appData === null || appData === void 0 ? void 0 : (ref2 = appData.userData) === null || ref2 === void 0 ? void 0 : ref2.id),\n            showWhen: AuthTypes.Auth\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LighterNavContainer, {\n        children: menuOptions.reduce(function(options, opt) {\n            var ref;\n            var optionAuthType = (appData === null || appData === void 0 ? void 0 : (ref = appData.userData) === null || ref === void 0 ? void 0 : ref.username) ? AuthTypes.Auth : AuthTypes.Unauth;\n            if (opt.showWhen === optionAuthType || opt.showWhen === AuthTypes.Both) {\n                options.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: opt.path,\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: router.asPath === opt.path ? \"curr-url\" : \"\",\n                        children: opt.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 15\n                    }, _this)\n                }, opt.path + opt.name, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, _this));\n            }\n            return options;\n        }, [])\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this));\n}\n_s(SecondaryNav, \"uwal1nlCjR6zsENuIPII/d8HuYo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c1 = SecondaryNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SecondaryNav);\nvar _c, _c1;\n$RefreshReg$(_c, \"LighterNavContainer\");\n$RefreshReg$(_c1, \"SecondaryNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUNDLElBQUksR0FDZEQsU0FBUyxDQUFDRSxNQUFNO1lBQ3BCLEVBQUUsRUFDQWEsR0FBRyxDQUFDTCxRQUFRLEtBQUtNLGNBQWMsSUFDL0JELEdBQUcsQ0FBQ0wsUUFBUSxLQUFLVixTQUFTLENBQUNHLElBQUksRUFDL0IsQ0FBQztnQkFDRFcsT0FBTyxDQUFDSSxJQUFJLDZFQUNUOUIsa0RBQUk7b0JBQTJCK0IsSUFBSSxFQUFFSixHQUFHLENBQUNOLElBQUk7b0JBQUVXLFFBQVE7MEdBQ3JEQyxDQUFJO3dCQUFDQyxTQUFTLEVBQUVoQixNQUFNLENBQUNpQixNQUFNLEtBQUtSLEdBQUcsQ0FBQ04sSUFBSSxHQUFHLENBQVUsWUFBRyxDQUFFO2tDQUMxRE0sR0FBRyxDQUFDUCxJQUFJOzs7Ozs7bUJBRkZPLEdBQUcsQ0FBQ04sSUFBSSxHQUFHTSxHQUFHLENBQUNQLElBQUk7Ozs7O1lBTWxDLENBQUM7WUFDRCxNQUFNLENBQUNNLE9BQU87UUFDaEIsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Ozs7O0FBR1gsQ0FBQztHQXJEUVYsWUFBWTs7UUFFSmYsa0RBQVM7OztNQUZqQmUsWUFBWTtBQXVEckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlY29uZGFyeU5hdi50c3g/ODQzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vbGliL0FwcENvbnRleHRcIjtcbmltcG9ydCB7IEFwcERhdGFDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuXG5jb25zdCBMaWdodGVyTmF2Q29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5ncmF5fTdhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHNwYW4ge1xuICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodEdyYXl9N2E7XG4gICAgfVxuICAgICYuY3Vyci11cmwge1xuICAgICAgYmFja2dyb3VuZDogJHtDb2xvclBhbGV0dGUuZGFya2VyfTtcbiAgICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgIH1cbiAgfVxuICBwIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG5gO1xuXG5lbnVtIEF1dGhUeXBlcyB7XG4gIEF1dGgsXG4gIFVuYXV0aCxcbiAgQm90aCxcbn1cblxuaW50ZXJmYWNlIE1lbnVPcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbiAgc2hvd1doZW46IEF1dGhUeXBlcztcbn1cblxuZnVuY3Rpb24gU2Vjb25kYXJ5TmF2KCkge1xuICBjb25zdCBbYXBwRGF0YV06IEFwcERhdGFDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG1lbnVPcHRpb25zOiBNZW51T3B0aW9uW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJIb21lXCIsXG4gICAgICBwYXRoOiBcIi9cIixcbiAgICAgIHNob3dXaGVuOiBBdXRoVHlwZXMuQm90aCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ3JlYXRlIGFjY291bnRcIixcbiAgICAgIHBhdGg6IFwiL2F1dGgvc2lnbnVwXCIsXG4gICAgICBzaG93V2hlbjogQXV0aFR5cGVzLlVuYXV0aCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTG9naW5cIixcbiAgICAgIHBhdGg6IFwiL2F1dGgvbG9naW5cIixcbiAgICAgIHNob3dXaGVuOiBBdXRoVHlwZXMuVW5hdXRoLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDcmVhdGUgcG9zdFwiLFxuICAgICAgcGF0aDogXCIvcG9zdHMvY3JlYXRlXCIsXG4gICAgICBzaG93V2hlbjogQXV0aFR5cGVzLkF1dGgsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk15IGFjY291bnRcIixcbiAgICAgIHBhdGg6IGAvdXNlcnMvJHthcHBEYXRhPy51c2VyRGF0YT8uaWR9YCxcbiAgICAgIHNob3dXaGVuOiBBdXRoVHlwZXMuQXV0aCxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExpZ2h0ZXJOYXZDb250YWluZXI+XG4gICAgICB7bWVudU9wdGlvbnMucmVkdWNlKChvcHRpb25zLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uQXV0aFR5cGUgPSBhcHBEYXRhPy51c2VyRGF0YT8udXNlcm5hbWVcbiAgICAgICAgICA/IEF1dGhUeXBlcy5BdXRoXG4gICAgICAgICAgOiBBdXRoVHlwZXMuVW5hdXRoO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb3B0LnNob3dXaGVuID09PSBvcHRpb25BdXRoVHlwZSB8fFxuICAgICAgICAgIG9wdC5zaG93V2hlbiA9PT0gQXV0aFR5cGVzLkJvdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICAgICAgPExpbmsga2V5PXtvcHQucGF0aCArIG9wdC5uYW1lfSBocmVmPXtvcHQucGF0aH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cm91dGVyLmFzUGF0aCA9PT0gb3B0LnBhdGggPyBcImN1cnItdXJsXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICB7b3B0Lm5hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfSwgW10pfVxuICAgIDwvTGlnaHRlck5hdkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kYXJ5TmF2O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0Iiwic3R5bGVkIiwiQXBwQ29udGV4dCIsIkNvbG9yUGFsZXR0ZSIsIkxpZ2h0ZXJOYXZDb250YWluZXIiLCJhc2lkZSIsImdyYXkiLCJsaWdodCIsImxpZ2h0R3JheSIsImRhcmtlciIsIkF1dGhUeXBlcyIsIkF1dGgiLCJVbmF1dGgiLCJCb3RoIiwiU2Vjb25kYXJ5TmF2IiwiYXBwRGF0YSIsInJvdXRlciIsIm1lbnVPcHRpb25zIiwibmFtZSIsInBhdGgiLCJzaG93V2hlbiIsInVzZXJEYXRhIiwiaWQiLCJyZWR1Y2UiLCJvcHRpb25zIiwib3B0Iiwib3B0aW9uQXV0aFR5cGUiLCJ1c2VybmFtZSIsInB1c2giLCJocmVmIiwicGFzc0hyZWYiLCJzcGFuIiwiY2xhc3NOYW1lIiwiYXNQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SecondaryNav.tsx\n");

/***/ })

});
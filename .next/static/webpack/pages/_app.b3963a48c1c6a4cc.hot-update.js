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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: \",\n        \";\\n  display: flex;\\n  padding: 0.5rem;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 0.5rem;\\n  margin: 0 auto;\\n  span {\\n    color: \",\n        \";\\n    text-decoration: none;\\n    font-size: 0.9rem;\\n    transition: all 0.2s ease-out;\\n    padding: 0.5rem 1rem;\\n    text-align: center;\\n    background-color: \",\n        \";\\n    border-radius: 5rem;\\n    cursor: pointer;\\n    border: 2px solid transparent;\\n    &:hover {\\n      font-weight: 700;\\n      background-color: \",\n        \"7a;\\n    }\\n    &.curr-url {\\n      background: \",\n        \";\\n      color: \",\n        \";\\n      font-weight: 700;\\n      border: 2px solid \",\n        \";\\n    }\\n  }\\n  p {\\n    color: \",\n        \";\\n    font-weight: 100;\\n    opacity: 0.4;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar LighterNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].aside.withConfig({\n    displayName: \"SecondaryNav__LighterNavContainer\",\n    componentId: \"sc-ce636633-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].lightGray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].lightGray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].darker, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].light);\n_c = LighterNavContainer;\nvar AuthTypes;\n(function(AuthTypes) {\n    AuthTypes[AuthTypes[\"Auth\"] = 0] = \"Auth\";\n    AuthTypes[AuthTypes[\"Unauth\"] = 1] = \"Unauth\";\n    AuthTypes[AuthTypes[\"Both\"] = 2] = \"Both\";\n})(AuthTypes || (AuthTypes = {}));\nfunction SecondaryNav() {\n    var _this = this;\n    var ref2;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), appData = ref1[0];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var menuOptions = [\n        {\n            name: \"Home\",\n            path: \"/\",\n            showWhen: AuthTypes.Both\n        },\n        {\n            name: \"Create account\",\n            path: \"/auth/signup\",\n            showWhen: AuthTypes.Unauth\n        },\n        {\n            name: \"Login\",\n            path: \"/auth/login\",\n            showWhen: AuthTypes.Unauth\n        },\n        {\n            name: \"Create post\",\n            path: \"/posts/create\",\n            showWhen: AuthTypes.Auth\n        },\n        {\n            name: \"My account\",\n            path: \"/users/\".concat(appData === null || appData === void 0 ? void 0 : (ref2 = appData.userData) === null || ref2 === void 0 ? void 0 : ref2.id),\n            showWhen: AuthTypes.Auth\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LighterNavContainer, {\n        children: menuOptions.reduce(function(options, opt) {\n            var ref;\n            var optionAuthType = (appData === null || appData === void 0 ? void 0 : (ref = appData.userData) === null || ref === void 0 ? void 0 : ref.username) ? AuthTypes.Auth : AuthTypes.Unauth;\n            if (opt.showWhen === optionAuthType || opt.showWhen === AuthTypes.Both) {\n                options.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: opt.path,\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: router.asPath === opt.path ? \"curr-url\" : \"\",\n                        children: opt.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 15\n                    }, _this)\n                }, opt.path + opt.name, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, _this));\n            }\n            return options;\n        }, [])\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\SecondaryNav.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this));\n}\n_s(SecondaryNav, \"uwal1nlCjR6zsENuIPII/d8HuYo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c1 = SecondaryNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SecondaryNav);\nvar _c, _c1;\n$RefreshReg$(_c, \"LighterNavContainer\");\n$RefreshReg$(_c1, \"SecondaryNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDQyxJQUFJLEdBQ2RELFNBQVMsQ0FBQ0UsTUFBTTtZQUNwQixFQUFFLEVBQ0FhLEdBQUcsQ0FBQ0wsUUFBUSxLQUFLTSxjQUFjLElBQy9CRCxHQUFHLENBQUNMLFFBQVEsS0FBS1YsU0FBUyxDQUFDRyxJQUFJLEVBQy9CLENBQUM7Z0JBQ0RXLE9BQU8sQ0FBQ0ksSUFBSSw2RUFDVDlCLGtEQUFJO29CQUEyQitCLElBQUksRUFBRUosR0FBRyxDQUFDTixJQUFJO29CQUFFVyxRQUFROzBHQUNyREMsQ0FBSTt3QkFBQ0MsU0FBUyxFQUFFaEIsTUFBTSxDQUFDaUIsTUFBTSxLQUFLUixHQUFHLENBQUNOLElBQUksR0FBRyxDQUFVLFlBQUcsQ0FBRTtrQ0FDMURNLEdBQUcsQ0FBQ1AsSUFBSTs7Ozs7O21CQUZGTyxHQUFHLENBQUNOLElBQUksR0FBR00sR0FBRyxDQUFDUCxJQUFJOzs7OztZQU1sQyxDQUFDO1lBQ0QsTUFBTSxDQUFDTSxPQUFPO1FBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7OztBQUdYLENBQUM7R0FyRFFWLFlBQVk7O1FBRUpmLGtEQUFTOzs7TUFGakJlLFlBQVk7QUF1RHJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWNvbmRhcnlOYXYudHN4Pzg0M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2xpYi9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyBBcHBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9saWIvdHlwZXNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcblxuY29uc3QgTGlnaHRlck5hdkNvbnRhaW5lciA9IHN0eWxlZC5hc2lkZWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgc3BhbiB7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0R3JheX07XG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHRHcmF5fTdhO1xuICAgIH1cbiAgICAmLmN1cnItdXJsIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7Q29sb3JQYWxldHRlLmRhcmtlcn07XG4gICAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICB9XG4gIH1cbiAgcCB7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuYDtcblxuZW51bSBBdXRoVHlwZXMge1xuICBBdXRoLFxuICBVbmF1dGgsXG4gIEJvdGgsXG59XG5cbmludGVyZmFjZSBNZW51T3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG4gIHNob3dXaGVuOiBBdXRoVHlwZXM7XG59XG5cbmZ1bmN0aW9uIFNlY29uZGFyeU5hdigpIHtcbiAgY29uc3QgW2FwcERhdGFdOiBBcHBEYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBtZW51T3B0aW9uczogTWVudU9wdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBzaG93V2hlbjogQXV0aFR5cGVzLkJvdGgsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkNyZWF0ZSBhY2NvdW50XCIsXG4gICAgICBwYXRoOiBcIi9hdXRoL3NpZ251cFwiLFxuICAgICAgc2hvd1doZW46IEF1dGhUeXBlcy5VbmF1dGgsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxvZ2luXCIsXG4gICAgICBwYXRoOiBcIi9hdXRoL2xvZ2luXCIsXG4gICAgICBzaG93V2hlbjogQXV0aFR5cGVzLlVuYXV0aCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ3JlYXRlIHBvc3RcIixcbiAgICAgIHBhdGg6IFwiL3Bvc3RzL2NyZWF0ZVwiLFxuICAgICAgc2hvd1doZW46IEF1dGhUeXBlcy5BdXRoLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNeSBhY2NvdW50XCIsXG4gICAgICBwYXRoOiBgL3VzZXJzLyR7YXBwRGF0YT8udXNlckRhdGE/LmlkfWAsXG4gICAgICBzaG93V2hlbjogQXV0aFR5cGVzLkF1dGgsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMaWdodGVyTmF2Q29udGFpbmVyPlxuICAgICAge21lbnVPcHRpb25zLnJlZHVjZSgob3B0aW9ucywgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkF1dGhUeXBlID0gYXBwRGF0YT8udXNlckRhdGE/LnVzZXJuYW1lXG4gICAgICAgICAgPyBBdXRoVHlwZXMuQXV0aFxuICAgICAgICAgIDogQXV0aFR5cGVzLlVuYXV0aDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG9wdC5zaG93V2hlbiA9PT0gb3B0aW9uQXV0aFR5cGUgfHxcbiAgICAgICAgICBvcHQuc2hvd1doZW4gPT09IEF1dGhUeXBlcy5Cb3RoXG4gICAgICAgICkge1xuICAgICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgIDxMaW5rIGtleT17b3B0LnBhdGggKyBvcHQubmFtZX0gaHJlZj17b3B0LnBhdGh9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JvdXRlci5hc1BhdGggPT09IG9wdC5wYXRoID8gXCJjdXJyLXVybFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAge29wdC5uYW1lfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH0sIFtdKX1cbiAgICA8L0xpZ2h0ZXJOYXZDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZGFyeU5hdjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsInN0eWxlZCIsIkFwcENvbnRleHQiLCJDb2xvclBhbGV0dGUiLCJMaWdodGVyTmF2Q29udGFpbmVyIiwiYXNpZGUiLCJncmF5IiwibGlnaHQiLCJsaWdodEdyYXkiLCJkYXJrZXIiLCJBdXRoVHlwZXMiLCJBdXRoIiwiVW5hdXRoIiwiQm90aCIsIlNlY29uZGFyeU5hdiIsImFwcERhdGEiLCJyb3V0ZXIiLCJtZW51T3B0aW9ucyIsIm5hbWUiLCJwYXRoIiwic2hvd1doZW4iLCJ1c2VyRGF0YSIsImlkIiwicmVkdWNlIiwib3B0aW9ucyIsIm9wdCIsIm9wdGlvbkF1dGhUeXBlIiwidXNlcm5hbWUiLCJwdXNoIiwiaHJlZiIsInBhc3NIcmVmIiwic3BhbiIsImNsYXNzTmFtZSIsImFzUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SecondaryNav.tsx\n");

/***/ })

});
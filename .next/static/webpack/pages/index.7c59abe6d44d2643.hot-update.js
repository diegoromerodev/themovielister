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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var _components_containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/containers */ \"./components/containers.tsx\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: \",\n        \";\\n  font-weight: 700;\\n  font-size: 0.8rem;\\n  position: absolute;\\n  right: 1rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar SeeMoreLink = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].a.withConfig({\n    displayName: \"pages__SeeMoreLink\",\n    componentId: \"sc-219ea083-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].info);\n_c = SeeMoreLink;\nfunction HomePage(param) {\n    var categories = param.categories;\n    var _this = this;\n    return categories === null || categories === void 0 ? void 0 : categories.map(function(cat) {\n        var _this1 = _this;\n        var ref;\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.SectionContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers__WEBPACK_IMPORTED_MODULE_3__.FlexRow, {\n                    align: _components_containers__WEBPACK_IMPORTED_MODULE_3__.CenteringPositions.Center,\n                    justify: _components_containers__WEBPACK_IMPORTED_MODULE_3__.CenteringPositions.Center,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.SectionHeader, {\n                            children: cat.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/categories/\".concat(cat.id),\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SeeMoreLink, {\n                                children: [\n                                    \">>See more of \",\n                                    cat.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, _this),\n                (ref = cat.Posts) === null || ref === void 0 ? void 0 : ref.slice(0, 4).map(function(post) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_2__.PostPreviewDetails, {\n                        post: post\n                    }, \"index-post-\".concat(post.id), false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this1);\n                })\n            ]\n        }, \"category-header-\".concat(cat.id), true, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\index.tsx\",\n            lineNumber: 27,\n            columnNumber: 5\n        }, _this);\n    });\n}\n_c1 = HomePage;\nHomePage.propTypes = {\n    categories: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({\n        name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)\n    })).isRequired\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"SeeMoreLink\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRWtDO0FBQ0k7QUFDVjtBQU1HO0FBR3VDO0FBQ3JCOzs7Ozs7Ozs7Ozs7O1FBRXBCLENBQ3BCO1FBQW9CLENBSzdCOzs7Ozs7O0FBTkEsR0FBSyxDQUFDUyxXQUFXLEdBQUdSLHNFQUFROzs7c0JBQ2pCTyxpRUFBaUI7S0FEdEJDLFdBQVc7U0FRUkcsUUFBUSxDQUFDLEtBQWdELEVBQUUsQ0FBQztRQUFqREMsVUFBVSxHQUFaLEtBQWdELENBQTlDQSxVQUFVOztJQUM1QixNQUFNLENBQUNBLFVBQVUsYUFBVkEsVUFBVSxLQUFWQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLFVBQVUsQ0FBRUMsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRzs7WUFXdEJBLEdBQVM7c0JBVlosTUFBTSwrREFBTFgsa0VBQWdCOzs0RkFDZEcsMkRBQU87b0JBQ05TLEtBQUssRUFBRVYsNkVBQXlCO29CQUNoQ1ksT0FBTyxFQUFFWiw2RUFBeUI7O29HQUVqQ0QsK0RBQWE7c0NBQUVVLEdBQUcsQ0FBQ0ksSUFBSTs7Ozs7O29HQUN2QmpCLGtEQUFJOzRCQUFDa0IsSUFBSSxFQUFHLENBQVksY0FBUyxPQUFQTCxHQUFHLENBQUNNLEVBQUU7NEJBQUlDLFFBQVE7a0hBQzFDYixXQUFXOztvQ0FBQyxDQUFvQjtvQ0FBQ00sR0FBRyxDQUFDSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBRzdDSixHQUFTLEdBQVRBLEdBQUcsQ0FBQ1EsS0FBSyxjQUFUUixHQUFTLEtBQVRBLElBQUlRLENBQUpSLENBQWdCLEdBQWhCQSxJQUFJUSxDQUFKUixDQUFnQixHQUFoQkEsR0FBUyxDQUFFUyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVYsR0FBRyxDQUFDLFFBQVEsQ0FBUFcsSUFBSTtrQ0FDL0IsTUFBTSwrREFBTHRCLG9FQUFrQjt3QkFBK0JzQixJQUFJLEVBQUVBLElBQUk7dUJBQWxDLENBQVcsYUFBVSxPQUFSQSxJQUFJLENBQUNKLEVBQUU7Ozs7Ozs7V0FYMUIsQ0FBZ0Isa0JBQVMsT0FBUE4sR0FBRyxDQUFDTSxFQUFFOzs7Ozs7QUFlcEQsQ0FBQztNQWpCUVQsUUFBUTtBQStCakJBLFFBQVEsQ0FBQ2MsU0FBUyxHQUFHLENBQUM7SUFDcEJiLFVBQVUsRUFBRWIseURBQWlCLENBQzNCQSx1REFBZSxDQUFDLENBQUM7UUFDZm1CLElBQUksRUFBRW5CLHFFQUEyQjtJQUNuQyxDQUFDLEdBQ0Q4QixVQUFVO0FBQ2QsQ0FBQzs7QUFFRCwrREFBZWxCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHBnU2VxdWVsaXplIGZyb20gXCIuLi9saWIvc2VxdWVsaXplXCI7XG5pbXBvcnQge1xuICBQb3N0UHJldmlld0RldGFpbHMsXG4gIFNlY3Rpb25Db250YWluZXIsXG4gIFNlY3Rpb25IZWFkZXIsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL3RhYmxvaWRzXCI7XG5pbXBvcnQgeyBDYXRlZ29yeVNjaGVtYSB9IGZyb20gXCIuLi9saWIvdHlwZXNcIjtcbmltcG9ydCB7IGN1c3RvbUF4aW9zIH0gZnJvbSBcIi4uL2xpYi9ob29rcy91c2VBeGlvc0ludGVyY2VwdG9yXCI7XG5pbXBvcnQgeyBDZW50ZXJpbmdQb3NpdGlvbnMsIEZsZXhSb3cgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWluZXJzXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5cbmNvbnN0IFNlZU1vcmVMaW5rID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5pbmZvfTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG5gO1xuXG5mdW5jdGlvbiBIb21lUGFnZSh7IGNhdGVnb3JpZXMgfTogeyBjYXRlZ29yaWVzOiBDYXRlZ29yeVNjaGVtYVtdIH0pIHtcbiAgcmV0dXJuIGNhdGVnb3JpZXM/Lm1hcCgoY2F0KSA9PiAoXG4gICAgPFNlY3Rpb25Db250YWluZXIga2V5PXtgY2F0ZWdvcnktaGVhZGVyLSR7Y2F0LmlkfWB9PlxuICAgICAgPEZsZXhSb3dcbiAgICAgICAgYWxpZ249e0NlbnRlcmluZ1Bvc2l0aW9ucy5DZW50ZXJ9XG4gICAgICAgIGp1c3RpZnk9e0NlbnRlcmluZ1Bvc2l0aW9ucy5DZW50ZXJ9XG4gICAgICA+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyPntjYXQubmFtZX08L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcmllcy8ke2NhdC5pZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICA8U2VlTW9yZUxpbms+Jmd0OyZndDtTZWUgbW9yZSBvZiB7Y2F0Lm5hbWV9PC9TZWVNb3JlTGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9GbGV4Um93PlxuICAgICAge2NhdC5Qb3N0cz8uc2xpY2UoMCwgNCkubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxQb3N0UHJldmlld0RldGFpbHMga2V5PXtgaW5kZXgtcG9zdC0ke3Bvc3QuaWR9YH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICkpfVxuICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgKSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcGdTZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pO1xuICBjb25zdCBjYXRSZXMgPSBhd2FpdCBjdXN0b21BeGlvcy5nZXQoXCIvYXBpL2NhdGVnb3JpZXNcIik7XG4gIGNvbnN0IGNhdGVnb3JpZXM6IENhdGVnb3J5U2NoZW1hID0gY2F0UmVzLmRhdGE7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcmllcyxcbiAgICB9LFxuICB9O1xufTtcblxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xuICBjYXRlZ29yaWVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsInN0eWxlZCIsIkxpbmsiLCJQb3N0UHJldmlld0RldGFpbHMiLCJTZWN0aW9uQ29udGFpbmVyIiwiU2VjdGlvbkhlYWRlciIsIkNlbnRlcmluZ1Bvc2l0aW9ucyIsIkZsZXhSb3ciLCJDb2xvclBhbGV0dGUiLCJTZWVNb3JlTGluayIsImEiLCJpbmZvIiwiSG9tZVBhZ2UiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0IiwiYWxpZ24iLCJDZW50ZXIiLCJqdXN0aWZ5IiwibmFtZSIsImhyZWYiLCJpZCIsInBhc3NIcmVmIiwiUG9zdHMiLCJzbGljZSIsInBvc3QiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
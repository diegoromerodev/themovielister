"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/create",{

/***/ "./pages/posts/create.tsx":
/*!********************************!*\
  !*** ./pages/posts/create.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forms */ \"./components/forms.tsx\");\n/* harmony import */ var _components_tabloids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tabloids */ \"./components/tabloids.tsx\");\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css\");\n/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1rem;\\n  gap: 1rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-draft-wysiwyg_dist_react-draft-wysiwyg_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js\", 23)).then(function(mod) {\n        return mod.Editor;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"posts\\\\create.tsx -> \" + \"react-draft-wysiwyg\"\n        ]\n    },\n    ssr: false\n});\n_c = Editor;\nvar CreatePostForm = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].form.withConfig({\n    displayName: \"create__CreatePostForm\",\n    componentId: \"sc-88b5439a-0\"\n})(_templateObject());\n_c1 = CreatePostForm;\nvar submitPost = function(e) {\n    e.preventDefault();\n    return true;\n};\nfunction CreatePost() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), bodyText = ref[0], setBodyText = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_4__.SectionContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabloids__WEBPACK_IMPORTED_MODULE_4__.SectionHeader, {\n                children: \"Create a post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\create.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreatePostForm, {\n                onSubmit: submitPost,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms__WEBPACK_IMPORTED_MODULE_3__.StyledTextInput, {\n                        placeholder: \"Enter a post title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\create.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\create.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\create.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\create.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n}\n_s(CreatePost, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c2 = CreatePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePost);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Editor\");\n$RefreshReg$(_c1, \"CreatePostForm\");\n$RefreshReg$(_c2, \"CreatePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9jcmVhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDTDtBQUNKO0FBQ3NCO0FBQ21CO0FBQ2xCOzs7Ozs7Ozs7Ozs7O1FBT3RCLENBTW5DOzs7Ozs7OztBQVhBLEdBQUssQ0FBQ00sTUFBTSxHQUFHSixtREFBTyxDQUNwQixRQUFRO0lBQUYsTUFBTSxDQUFOLDRQQUE0QixDQUFFSyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO1FBQUtBLE1BQU0sQ0FBTkEsR0FBRyxDQUFDRixNQUFNOzs7Ozs7OztJQUMxREcsR0FBRyxFQUFFLEtBQUs7O0tBRlJILE1BQU07QUFLWixHQUFLLENBQUNJLGNBQWMsR0FBR1QseUVBQVc7Ozs7TUFBNUJTLGNBQWM7QUFRcEIsR0FBSyxDQUFDRSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxDQUE2QixFQUFLLENBQUM7SUFDckRBLENBQUMsQ0FBQ0MsY0FBYztJQUNoQixNQUFNLENBQUMsSUFBSTtBQUNiLENBQUM7U0FFUUMsVUFBVSxHQUFHLENBQUM7O0lBQ3JCLEdBQUssQ0FBMkJmLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDZ0IsUUFBUSxHQUFpQmhCLEdBQVksS0FBM0JpQixXQUFXLEdBQUlqQixHQUFZO0lBQzVDLE1BQU0sNkVBQ0hJLGtFQUFnQjs7d0ZBQ2RDLCtEQUFhOzBCQUFDLENBQWE7Ozs7Ozt3RkFDM0JLLGNBQWM7Z0JBQUNRLFFBQVEsRUFBRU4sVUFBVTs7Z0dBQ2pDVCw4REFBZTt3QkFBQ2dCLFdBQVcsRUFBQyxDQUFvQjs7Ozs7O2dHQUNoRGIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZixDQUFDO0dBWFFTLFVBQVU7TUFBVkEsVUFBVTtBQWFuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2NyZWF0ZS50c3g/ZmYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgU3R5bGVkVGV4dElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybXNcIjtcbmltcG9ydCB7IFNlY3Rpb25Db250YWluZXIsIFNlY3Rpb25IZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90YWJsb2lkc1wiO1xuaW1wb3J0IFwicmVhY3QtZHJhZnQtd3lzaXd5Zy9kaXN0L3JlYWN0LWRyYWZ0LXd5c2l3eWcuY3NzXCI7XG5cbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydChcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIikudGhlbigobW9kKSA9PiBtb2QuRWRpdG9yKSxcbiAgeyBzc3I6IGZhbHNlIH1cbik7XG5cbmNvbnN0IENyZWF0ZVBvc3RGb3JtID0gc3R5bGVkLmZvcm1gXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxcmVtO1xuICBnYXA6IDFyZW07XG5gO1xuXG5jb25zdCBzdWJtaXRQb3N0ID0gKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBDcmVhdGVQb3N0KCkge1xuICBjb25zdCBbYm9keVRleHQsIHNldEJvZHlUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFNlY3Rpb25IZWFkZXI+Q3JlYXRlIGEgcG9zdDwvU2VjdGlvbkhlYWRlcj5cbiAgICAgIDxDcmVhdGVQb3N0Rm9ybSBvblN1Ym1pdD17c3VibWl0UG9zdH0+XG4gICAgICAgIDxTdHlsZWRUZXh0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHBvc3QgdGl0bGVcIiAvPlxuICAgICAgICA8RWRpdG9yIC8+XG4gICAgICA8L0NyZWF0ZVBvc3RGb3JtPlxuICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsImR5bmFtaWMiLCJTdHlsZWRUZXh0SW5wdXQiLCJTZWN0aW9uQ29udGFpbmVyIiwiU2VjdGlvbkhlYWRlciIsIkVkaXRvciIsInRoZW4iLCJtb2QiLCJzc3IiLCJDcmVhdGVQb3N0Rm9ybSIsImZvcm0iLCJzdWJtaXRQb3N0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiQ3JlYXRlUG9zdCIsImJvZHlUZXh0Iiwic2V0Qm9keVRleHQiLCJvblN1Ym1pdCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/create.tsx\n");

/***/ })

});
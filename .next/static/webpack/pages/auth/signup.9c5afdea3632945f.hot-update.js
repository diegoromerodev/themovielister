"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./components/forms.tsx":
/*!******************************!*\
  !*** ./components/forms.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTextInput\": function() { return /* binding */ StyledTextInput; },\n/* harmony export */   \"ErrorMessage\": function() { return /* binding */ ErrorMessage; },\n/* harmony export */   \"PostBodyArea\": function() { return /* binding */ PostBodyArea; },\n/* harmony export */   \"FormContainer\": function() { return /* binding */ FormContainer; },\n/* harmony export */   \"InputWithErrors\": function() { return /* binding */ InputWithErrors; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n  border: 1px solid \",\n        \";\\n  padding: 0.5rem;\\n  font-family: Inter;\\n  color: \",\n        \";\\n  outline: none;\\n  font-size: 1.2rem;\\n  &.invalid {\\n    border-color: \",\n        \";\\n    background-color: \",\n        \"57;\\n  }\\n  ::placeholder {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: 700;\\n  color: \",\n        \";\\n  text-align: left;\\n  padding-left: 2rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n  display: grid;\\n  gap: 1rem;\\n  text-align: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar StyledTextInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input.withConfig({\n    displayName: \"forms__StyledTextInput\",\n    componentId: \"sc-b847b592-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lightGray);\n_c = StyledTextInput;\nvar ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].small.withConfig({\n    displayName: \"forms__ErrorMessage\",\n    componentId: \"sc-b847b592-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error);\nvar PostBodyArea = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textarea.withConfig({\n    displayName: \"forms__PostBodyArea\",\n    componentId: \"sc-b847b592-2\"\n})(_templateObject2());\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].form.withConfig({\n    displayName: \"forms__FormContainer\",\n    componentId: \"sc-b847b592-3\"\n})(_templateObject3());\nfunction InputWithErrors(param1) {\n    var name = param1.name, errors = param1.errors;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextInput, {\n        name: \"password\",\n        type: \"password\",\n        placeholder: \"Create a password\",\n        onChange: function(param) {\n            var value = param.target.value;\n            return setPassword(value);\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\forms.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this));\n}\n_c1 = InputWithErrors;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledTextInput\");\n$RefreshReg$(_c1, \"InputWithErrors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1c7Ozs7Ozs7Ozs7Ozs7UUFFTCxDQUV4QjtRQUFvQixDQUcvQjtRQUFxQixDQUlaO1FBQXFCLENBQ2pCO1FBQXFCLENBR2hDO1FBQXlCLENBRXBDOzs7Ozs7Ozs7UUFFeUMsQ0FFaEM7UUFBcUIsQ0FHOUI7Ozs7Ozs7OztRQUU0QyxDQUU1Qzs7Ozs7Ozs7O1FBRXlDLENBS3pDOzs7Ozs7O0FBakNPLEdBQUssQ0FBQ0UsZUFBZSxHQUFHRiwwRUFBWTs7O3NCQUVyQkMsaUVBQWlCLEVBRzVCQSxrRUFBa0IsRUFJVEEsa0VBQWtCLEVBQ2RBLGtFQUFrQixFQUc3QkEsc0VBQXNCO0tBYnRCQyxlQUFlO0FBaUJyQixHQUFLLENBQUNNLFlBQVksR0FBR1IsMEVBQVk7Ozt1QkFFN0JDLGtFQUFrQjtBQUt0QixHQUFLLENBQUNTLFlBQVksR0FBR1YsNkVBQWU7Ozs7QUFJcEMsR0FBSyxDQUFDWSxhQUFhLEdBQUdaLHlFQUFXOzs7O0FBWWpDLFNBQVNjLGVBQWUsQ0FBQyxNQUdULEVBQWUsQ0FBQztRQUZyQ0MsSUFBSSxHQUQwQixNQUdULENBRnJCQSxJQUFJLEVBQ0pDLE1BQU0sR0FGd0IsTUFHVCxDQURyQkEsTUFBTTtJQUVOLE1BQU0sNkVBQ0hkLGVBQWU7UUFDZGEsSUFBSSxFQUFDLENBQVU7UUFDZkUsSUFBSSxFQUFDLENBQVU7UUFDZkMsV0FBVyxFQUFDLENBQW1CO1FBQy9CQyxRQUFRLEVBQUUsUUFBUTtnQkFBS0MsS0FBSyxTQUFmQyxNQUFNLENBQUlELEtBQUs7WUFBU0UsTUFBTSxDQUFOQSxXQUFXLENBQUNGLEtBQUs7Ozs7Ozs7QUFHNUQsQ0FBQztNQVplTixlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybXMudHN4P2M1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclBhbGV0dGVcIjtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRleHRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Q29sb3JQYWxldHRlLmdyYXl9O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0fTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gICYuaW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5lcnJvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvclBhbGV0dGUuZXJyb3J9NTc7XG4gIH1cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmxpZ2h0R3JheX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc21hbGxgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5lcnJvcn07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0Qm9keUFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5pbnRlcmZhY2UgSW5wdXRXaXRoRXJyb3JzUHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVycm9ycz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRXaXRoRXJyb3JzKHtcbiAgbmFtZSxcbiAgZXJyb3JzLFxufTogSW5wdXRXaXRoRXJyb3JzUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFRleHRJbnB1dFxuICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBhIHBhc3N3b3JkXCJcbiAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRQYXNzd29yZCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb2xvclBhbGV0dGUiLCJTdHlsZWRUZXh0SW5wdXQiLCJpbnB1dCIsImdyYXkiLCJsaWdodCIsImVycm9yIiwibGlnaHRHcmF5IiwiRXJyb3JNZXNzYWdlIiwic21hbGwiLCJQb3N0Qm9keUFyZWEiLCJ0ZXh0YXJlYSIsIkZvcm1Db250YWluZXIiLCJmb3JtIiwiSW5wdXRXaXRoRXJyb3JzIiwibmFtZSIsImVycm9ycyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRQYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/forms.tsx\n");

/***/ })

});
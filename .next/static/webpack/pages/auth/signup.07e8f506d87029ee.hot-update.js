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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTextInput\": function() { return /* binding */ StyledTextInput; },\n/* harmony export */   \"ErrorMessage\": function() { return /* binding */ ErrorMessage; },\n/* harmony export */   \"PostBodyArea\": function() { return /* binding */ PostBodyArea; },\n/* harmony export */   \"FormContainer\": function() { return /* binding */ FormContainer; },\n/* harmony export */   \"InputWithErrors\": function() { return /* binding */ InputWithErrors; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n  border: 1px solid \",\n        \";\\n  padding: 0.5rem;\\n  font-family: Inter;\\n  color: \",\n        \";\\n  outline: none;\\n  font-size: 1.2rem;\\n  &.invalid {\\n    border-color: \",\n        \";\\n    background-color: \",\n        \"57;\\n  }\\n  ::placeholder {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: 700;\\n  color: \",\n        \";\\n  text-align: left;\\n  padding-left: 0.2rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n  display: grid;\\n  gap: 1rem;\\n  text-align: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar StyledTextInput = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input.withConfig({\n    displayName: \"forms__StyledTextInput\",\n    componentId: \"sc-143674d9-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lightGray);\n_c = StyledTextInput;\nvar ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].small.withConfig({\n    displayName: \"forms__ErrorMessage\",\n    componentId: \"sc-143674d9-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error);\n_c1 = ErrorMessage;\nvar PostBodyArea = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textarea.withConfig({\n    displayName: \"forms__PostBodyArea\",\n    componentId: \"sc-143674d9-2\"\n})(_templateObject2());\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n    displayName: \"forms__FormContainer\",\n    componentId: \"sc-143674d9-3\"\n})(_templateObject3());\nfunction InputWithErrors(param1) {\n    var name = param1.name, error = param1.error, placeholder = param1.placeholder, type = param1.type, serial = param1.serial, changeHandler = param1.changeHandler;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextInput, {\n                name: name,\n                type: type,\n                placeholder: placeholder,\n                onChange: function(param) {\n                    var value = param.target.value;\n                    return changeHandler(serial, name, value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\forms.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorMessage, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBomb\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\forms.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    \"\\xa0\\xa0\",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\forms.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c2 = InputWithErrors;\nInputWithErrors.defaultProps = {\n    error: \"\"\n};\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StyledTextInput\");\n$RefreshReg$(_c1, \"ErrorMessage\");\n$RefreshReg$(_c2, \"InputWithErrors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDTTtBQUMxQjtBQUNXOzs7Ozs7Ozs7Ozs7O1FBRUwsQ0FFeEI7UUFBb0IsQ0FHL0I7UUFBcUIsQ0FJWjtRQUFxQixDQUNqQjtRQUFxQixDQUdoQztRQUF5QixDQUVwQzs7Ozs7Ozs7O1FBRXlDLENBRWhDO1FBQXFCLENBRzlCOzs7Ozs7Ozs7UUFFNEMsQ0FFNUM7Ozs7Ozs7OztRQUV5QyxDQUt6Qzs7Ozs7OztBQWpDTyxHQUFLLENBQUNJLGVBQWUsR0FBR0YsMEVBQVk7OztzQkFFckJDLGlFQUFpQixFQUc1QkEsa0VBQWtCLEVBSVRBLGtFQUFrQixFQUNkQSxrRUFBa0IsRUFHN0JBLHNFQUFzQjtLQWJ0QkMsZUFBZTtBQWlCckIsR0FBSyxDQUFDTSxZQUFZLEdBQUdSLDBFQUFZOzs7dUJBRTdCQyxrRUFBa0I7TUFGaEJPLFlBQVk7QUFPbEIsR0FBSyxDQUFDRSxZQUFZLEdBQUdWLDZFQUFlOzs7O0FBSXBDLEdBQUssQ0FBQ1ksYUFBYSxHQUFHWix5RUFBVzs7OztBQWdCakMsU0FBU2MsZUFBZSxDQUFDLE1BT1QsRUFBZSxDQUFDO1FBTnJDQyxJQUFJLEdBRDBCLE1BT1QsQ0FOckJBLElBQUksRUFDSlQsS0FBSyxHQUZ5QixNQU9ULENBTHJCQSxLQUFLLEVBQ0xVLFdBQVcsR0FIbUIsTUFPVCxDQUpyQkEsV0FBVyxFQUNYQyxJQUFJLEdBSjBCLE1BT1QsQ0FIckJBLElBQUksRUFDSkMsTUFBTSxHQUx3QixNQU9ULENBRnJCQSxNQUFNLEVBQ05DLGFBQWEsR0FOaUIsTUFPVCxDQURyQkEsYUFBYTtJQUViLE1BQU07O3dGQUVEakIsZUFBZTtnQkFDZGEsSUFBSSxFQUFFQSxJQUFJO2dCQUNWRSxJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZELFdBQVcsRUFBRUEsV0FBVztnQkFDeEJJLFFBQVEsRUFBRSxRQUFRO3dCQUFLQyxLQUFLLFNBQWZDLE1BQU0sQ0FBSUQsS0FBSztvQkFBU0YsTUFBTSxDQUFOQSxhQUFhLENBQUNELE1BQU0sRUFBRUgsSUFBSSxFQUFFTSxLQUFLOzs7Ozs7O1lBRXZFZixLQUFLLGdGQUNIRSxZQUFZOztnR0FDVlQsMkVBQWU7d0JBQUN3QixJQUFJLEVBQUV6QixxRUFBTTs7Ozs7O29CQUFJLENBRWpDO29CQUFDUSxLQUFLOzs7Ozs7Ozs7QUFLaEIsQ0FBQztNQXpCZVEsZUFBZTtBQTJCL0JBLGVBQWUsQ0FBQ1UsWUFBWSxHQUFHLENBQUM7SUFDOUJsQixLQUFLLEVBQUUsQ0FBRTtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy50c3g/YzU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYUJvbWIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yUGFsZXR0ZVwiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkVGV4dElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtDb2xvclBhbGV0dGUuZ3JheX07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IEludGVyO1xuICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHR9O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgJi5pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6ICR7Q29sb3JQYWxldHRlLmVycm9yfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yUGFsZXR0ZS5lcnJvcn01NztcbiAgfVxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHtDb2xvclBhbGV0dGUubGlnaHRHcmF5fTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zbWFsbGBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICR7Q29sb3JQYWxldHRlLmVycm9yfTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgUG9zdEJvZHlBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuaW50ZXJmYWNlIElucHV0V2l0aEVycm9yc1Byb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlcnJvcj86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBzZXJpYWw6IHN0cmluZztcbiAgY2hhbmdlSGFuZGxlcjogKG5hbWU6IHN0cmluZywgcmVhZGFibGVOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dFdpdGhFcnJvcnMoe1xuICBuYW1lLFxuICBlcnJvcixcbiAgcGxhY2Vob2xkZXIsXG4gIHR5cGUsXG4gIHNlcmlhbCxcbiAgY2hhbmdlSGFuZGxlcixcbn06IElucHV0V2l0aEVycm9yc1Byb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3R5bGVkVGV4dElucHV0XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IGNoYW5nZUhhbmRsZXIoc2VyaWFsLCBuYW1lLCB2YWx1ZSl9XG4gICAgICAvPlxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPEVycm9yTWVzc2FnZT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQm9tYn0gLz5cbiAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgIDwvRXJyb3JNZXNzYWdlPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuSW5wdXRXaXRoRXJyb3JzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IFwiXCIsXG59O1xuIl0sIm5hbWVzIjpbImZhQm9tYiIsIkZvbnRBd2Vzb21lSWNvbiIsInN0eWxlZCIsIkNvbG9yUGFsZXR0ZSIsIlN0eWxlZFRleHRJbnB1dCIsImlucHV0IiwiZ3JheSIsImxpZ2h0IiwiZXJyb3IiLCJsaWdodEdyYXkiLCJFcnJvck1lc3NhZ2UiLCJzbWFsbCIsIlBvc3RCb2R5QXJlYSIsInRleHRhcmVhIiwiRm9ybUNvbnRhaW5lciIsImZvcm0iLCJJbnB1dFdpdGhFcnJvcnMiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwic2VyaWFsIiwiY2hhbmdlSGFuZGxlciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJpY29uIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms.tsx\n");

/***/ })

});
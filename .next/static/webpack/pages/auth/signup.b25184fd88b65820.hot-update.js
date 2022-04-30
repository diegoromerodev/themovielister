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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTextInput\": function() { return /* binding */ StyledTextInput; },\n/* harmony export */   \"ErrorMessage\": function() { return /* binding */ ErrorMessage; },\n/* harmony export */   \"PostBodyArea\": function() { return /* binding */ PostBodyArea; },\n/* harmony export */   \"FormContainer\": function() { return /* binding */ FormContainer; },\n/* harmony export */   \"InputWithErrors\": function() { return /* binding */ InputWithErrors; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ColorPalette */ \"./styles/ColorPalette.ts\");\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n  border: 1px solid \",\n        \";\\n  padding: 0.5rem;\\n  font-family: Inter;\\n  color: \",\n        \";\\n  outline: none;\\n  font-size: 1.2rem;\\n  &.invalid {\\n    border-color: \",\n        \";\\n    background-color: \",\n        \"57;\\n  }\\n  ::placeholder {\\n    color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: 700;\\n  color: \",\n        \";\\n  text-align: left;\\n  padding-left: 2rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: transparent;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 1rem;\\n  display: grid;\\n  gap: 1rem;\\n  text-align: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar StyledTextInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input.withConfig({\n    displayName: \"forms__StyledTextInput\",\n    componentId: \"sc-49a344fa-0\"\n})(_templateObject(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].light, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error, _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lightGray);\n_c = StyledTextInput;\nvar ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].small.withConfig({\n    displayName: \"forms__ErrorMessage\",\n    componentId: \"sc-49a344fa-1\"\n})(_templateObject1(), _styles_ColorPalette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error);\n_c1 = ErrorMessage;\nvar PostBodyArea = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textarea.withConfig({\n    displayName: \"forms__PostBodyArea\",\n    componentId: \"sc-49a344fa-2\"\n})(_templateObject2());\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].form.withConfig({\n    displayName: \"forms__FormContainer\",\n    componentId: \"sc-49a344fa-3\"\n})(_templateObject3());\nfunction InputWithErrors(param1) {\n    var name = param1.name, error = param1.error, placeholder = param1.placeholder, changeHandler = param1.changeHandler;\n    var inputTypes = {\n        email: \"email\",\n        password: \"password\",\n        passwordConfirm: \"password\"\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextInput, {\n                name: name,\n                type: inputTypes[name] || \"text\",\n                placeholder: placeholder,\n                onChange: function(param) {\n                    var value = param.target.value;\n                    return changeHandler(function(prevState) {\n                        var newState = _objectSpread({}, prevState);\n                        newState[name].value = value;\n                        return newState;\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\forms.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorMessage, {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\components\\\\forms.tsx\",\n                lineNumber: 74,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c2 = InputWithErrors;\nInputWithErrors.defaultProps = {\n    error: \"\"\n};\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StyledTextInput\");\n$RefreshReg$(_c1, \"ErrorMessage\");\n$RefreshReg$(_c2, \"InputWithErrors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3NDO0FBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRUwsQ0FFeEI7UUFBb0IsQ0FHL0I7UUFBcUIsQ0FJWjtRQUFxQixDQUNqQjtRQUFxQixDQUdoQztRQUF5QixDQUVwQzs7Ozs7Ozs7O1FBRXlDLENBRWhDO1FBQXFCLENBRzlCOzs7Ozs7Ozs7UUFFNEMsQ0FFNUM7Ozs7Ozs7OztRQUV5QyxDQUt6Qzs7Ozs7OztBQWpDTyxHQUFLLENBQUNFLGVBQWUsR0FBR0YsMEVBQVk7OztzQkFFckJDLGlFQUFpQixFQUc1QkEsa0VBQWtCLEVBSVRBLGtFQUFrQixFQUNkQSxrRUFBa0IsRUFHN0JBLHNFQUFzQjtLQWJ0QkMsZUFBZTtBQWlCckIsR0FBSyxDQUFDTSxZQUFZLEdBQUdSLDBFQUFZOzs7dUJBRTdCQyxrRUFBa0I7TUFGaEJPLFlBQVk7QUFPbEIsR0FBSyxDQUFDRSxZQUFZLEdBQUdWLDZFQUFlOzs7O0FBSXBDLEdBQUssQ0FBQ1ksYUFBYSxHQUFHWix5RUFBVzs7OztBQWNqQyxTQUFTYyxlQUFlLENBQUMsTUFLVCxFQUFlLENBQUM7UUFKckNDLElBQUksR0FEMEIsTUFLVCxDQUpyQkEsSUFBSSxFQUNKVCxLQUFLLEdBRnlCLE1BS1QsQ0FIckJBLEtBQUssRUFDTFUsV0FBVyxHQUhtQixNQUtULENBRnJCQSxXQUFXLEVBQ1hDLGFBQWEsR0FKaUIsTUFLVCxDQURyQkEsYUFBYTtJQUViLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUM7UUFDbEJDLEtBQUssRUFBRSxDQUFPO1FBQ2RDLFFBQVEsRUFBRSxDQUFVO1FBQ3BCQyxlQUFlLEVBQUUsQ0FBVTtJQUM3QixDQUFDO0lBRUQsTUFBTTs7d0ZBRURuQixlQUFlO2dCQUNkYSxJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZPLElBQUksRUFBRUosVUFBVSxDQUFDSCxJQUFJLEtBQUssQ0FBTTtnQkFDaENDLFdBQVcsRUFBRUEsV0FBVztnQkFDeEJPLFFBQVEsRUFBRSxRQUFRO3dCQUFLQyxLQUFLLFNBQWZDLE1BQU0sQ0FBSUQsS0FBSztvQkFDMUJQLE1BQU0sQ0FBTkEsYUFBYSxDQUFDLFFBQVEsQ0FBUFMsU0FBUyxFQUFLLENBQUM7d0JBQzVCLEdBQUssQ0FBQ0MsUUFBUSxxQkFBUUQsU0FBUzt3QkFDL0JDLFFBQVEsQ0FBQ1osSUFBSSxFQUFFUyxLQUFLLEdBQUdBLEtBQUs7d0JBQzVCLE1BQU0sQ0FBQ0csUUFBUTtvQkFDakIsQ0FBQzs7Ozs7OztZQUdKckIsS0FBSyxnRkFBS0UsWUFBWTswQkFBRUYsS0FBSzs7Ozs7Ozs7QUFHcEMsQ0FBQztNQTdCZVEsZUFBZTtBQStCL0JBLGVBQWUsQ0FBQ2MsWUFBWSxHQUFHLENBQUM7SUFDOUJ0QixLQUFLLEVBQUUsQ0FBRTtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy50c3g/YzU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IER5bmFtaWNGaWVsZHNEYXRhIH0gZnJvbSBcIi4uL3BhZ2VzL2F1dGgvc2lnbnVwXCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JQYWxldHRlXCI7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUZXh0SW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAke0NvbG9yUGFsZXR0ZS5ncmF5fTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LWZhbWlseTogSW50ZXI7XG4gIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodH07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAmLmludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogJHtDb2xvclBhbGV0dGUuZXJyb3J9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JQYWxldHRlLmVycm9yfTU3O1xuICB9XG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAke0NvbG9yUGFsZXR0ZS5saWdodEdyYXl9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNtYWxsYFxuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHtDb2xvclBhbGV0dGUuZXJyb3J9O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgUG9zdEJvZHlBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuaW50ZXJmYWNlIElucHV0V2l0aEVycm9yc1Byb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlcnJvcj86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgY2hhbmdlSGFuZGxlcjogKHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxEeW5hbWljRmllbGRzRGF0YT4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dFdpdGhFcnJvcnMoe1xuICBuYW1lLFxuICBlcnJvcixcbiAgcGxhY2Vob2xkZXIsXG4gIGNoYW5nZUhhbmRsZXIsXG59OiBJbnB1dFdpdGhFcnJvcnNQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgaW5wdXRUeXBlcyA9IHtcbiAgICBlbWFpbDogXCJlbWFpbFwiLFxuICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXG4gICAgcGFzc3dvcmRDb25maXJtOiBcInBhc3N3b3JkXCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0eWxlZFRleHRJbnB1dFxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICB0eXBlPXtpbnB1dFR5cGVzW25hbWVdIHx8IFwidGV4dFwifVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnByZXZTdGF0ZSB9O1xuICAgICAgICAgICAgbmV3U3RhdGVbbmFtZV0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuSW5wdXRXaXRoRXJyb3JzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IFwiXCIsXG59O1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbG9yUGFsZXR0ZSIsIlN0eWxlZFRleHRJbnB1dCIsImlucHV0IiwiZ3JheSIsImxpZ2h0IiwiZXJyb3IiLCJsaWdodEdyYXkiLCJFcnJvck1lc3NhZ2UiLCJzbWFsbCIsIlBvc3RCb2R5QXJlYSIsInRleHRhcmVhIiwiRm9ybUNvbnRhaW5lciIsImZvcm0iLCJJbnB1dFdpdGhFcnJvcnMiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJjaGFuZ2VIYW5kbGVyIiwiaW5wdXRUeXBlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJ0eXBlIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsIm5ld1N0YXRlIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms.tsx\n");

/***/ })

});
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

/***/ "./lib/utils.tsx":
/*!***********************!*\
  !*** ./lib/utils.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateAge\": function() { return /* binding */ calculateAge; },\n/* harmony export */   \"UserFormFieldConstraints\": function() { return /* binding */ UserFormFieldConstraints; }\n/* harmony export */ });\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"./node_modules/validator/index.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n\nvar calculateAge = function(dateToCompare) {\n    var dateRange = new Date().getTime() - dateToCompare.getTime();\n    var numberOfDays = dateRange / 86400000;\n    if (numberOfDays < 1) {\n        var ageInHours = Math.round(numberOfDays * 24);\n        return \"\".concat(ageInHours, \" hour\").concat(ageInHours >= 2 || !ageInHours ? \"s\" : \"\");\n    }\n    return \"\".concat(Math.round(numberOfDays), \" day\").concat(numberOfDays >= 1.5 ? \"s\" : \"\");\n};\nvar isNotWithinRange = function(max, min, value) {\n    var result = \"\";\n    if (value.length < min || value.length > max) {\n        result = \"must be between \".concat(min, \" and \").concat(max, \" characters long\");\n    }\n    return result;\n};\nvar isValidEmail = function(value) {\n    if (!validator__WEBPACK_IMPORTED_MODULE_0___default().isEmail(value)) return \"must be a valid email\";\n    return \"\";\n};\nvar isValidUrl = function(value) {\n    if (!validator__WEBPACK_IMPORTED_MODULE_0___default().isURL(value)) return \"must be a valid url\";\n    return \"\";\n};\nvar passwordConstraints = function(value) {\n    var regexes = [\n        /[\\W|_]/,\n        /[A-Z]/,\n        /\\d/\n    ];\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        // eslint-disable-next-line no-restricted-syntax\n        for(var _iterator = regexes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var re = _step.value;\n            if (!re.test(value)) return \"must contain at least 1 special character, 1 uppercase letter and 1 number\";\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    return \"\";\n};\nvar checkAllErrorValidators = function(valArr, fieldName) {\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        // eslint-disable-next-line no-restricted-syntax\n        for(var _iterator = valArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var valFn = _step.value;\n            var errResult = valFn();\n            if (errResult) return \"\".concat(fieldName, \" \").concat(errResult);\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    return \"\";\n};\nvar UserFormFieldConstraints = Object.freeze({\n    username: function username(value, fieldName) {\n        var errorValidators = [\n            isNotWithinRange.bind(this, 20, 3, value), \n        ];\n        return checkAllErrorValidators(errorValidators, fieldName);\n    },\n    avatarURL: function avatarURL(value, fieldName) {\n        var errorValidators = [\n            isValidUrl.bind(this, value)\n        ];\n        return checkAllErrorValidators(errorValidators, fieldName);\n    },\n    bio: function bio(value, fieldName) {\n        var errorValidators = [\n            isNotWithinRange.bind(this, 100, 20, value), \n        ];\n        return checkAllErrorValidators(errorValidators, fieldName);\n    },\n    email: function email(value, fieldName) {\n        var errorValidators = [\n            isValidEmail.bind(this, value)\n        ];\n        return checkAllErrorValidators(errorValidators, fieldName);\n    },\n    password: function password(value, fieldName) {\n        var errorValidators = [\n            passwordConstraints.bind(value),\n            isNotWithinRange.bind(this, 100, 8, value), \n        ];\n        return checkAllErrorValidators(errorValidators, fieldName);\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLEVBQUVhLFNBQWlCLEVBQVUsQ0FBQztRQUM3QyxHQUFLLENBQUNPLGVBQWUsR0FBcUIsQ0FBQztZQUN6Q3ZCLGdCQUFnQixDQUFDd0IsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFckIsS0FBSztRQUM1QyxDQUFDO1FBQ0QsTUFBTSxDQUFDVyx1QkFBdUIsQ0FBQ1MsZUFBZSxFQUFFUCxTQUFTO0lBQzNELENBQUM7SUFDRFcsS0FBSyxFQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ3hCLEtBQWEsRUFBRWEsU0FBaUIsRUFBVSxDQUFDO1FBQy9DLEdBQUssQ0FBQ08sZUFBZSxHQUFxQixDQUFDakI7WUFBQUEsWUFBWSxDQUFDa0IsSUFBSSxDQUFDLElBQUksRUFBRXJCLEtBQUs7UUFBQyxDQUFDO1FBQzFFLE1BQU0sQ0FBQ1csdUJBQXVCLENBQUNTLGVBQWUsRUFBRVAsU0FBUztJQUMzRCxDQUFDO0lBQ0RZLFFBQVEsRUFBUkEsUUFBUSxDQUFSQSxRQUFRLENBQUN6QixLQUFhLEVBQUVhLFNBQWlCLEVBQVUsQ0FBQztRQUNsRCxHQUFLLENBQUNPLGVBQWUsR0FBcUIsQ0FBQztZQUN6Q2IsbUJBQW1CLENBQUNjLElBQUksQ0FBQ3JCLEtBQUs7WUFDOUJILGdCQUFnQixDQUFDd0IsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFckIsS0FBSztRQUMzQyxDQUFDO1FBQ0QsTUFBTSxDQUFDVyx1QkFBdUIsQ0FBQ1MsZUFBZSxFQUFFUCxTQUFTO0lBQzNELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91dGlscy50c3g/NmU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUFnZSA9IChkYXRlVG9Db21wYXJlOiBEYXRlKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZGF0ZVJhbmdlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbiAgY29uc3QgbnVtYmVyT2ZEYXlzID0gZGF0ZVJhbmdlIC8gOC42NGU3O1xuICBpZiAobnVtYmVyT2ZEYXlzIDwgMSkge1xuICAgIGNvbnN0IGFnZUluSG91cnMgPSBNYXRoLnJvdW5kKG51bWJlck9mRGF5cyAqIDI0KTtcbiAgICByZXR1cm4gYCR7YWdlSW5Ib3Vyc30gaG91ciR7YWdlSW5Ib3VycyA+PSAyIHx8ICFhZ2VJbkhvdXJzID8gXCJzXCIgOiBcIlwifWA7XG4gIH1cbiAgcmV0dXJuIGAke01hdGgucm91bmQobnVtYmVyT2ZEYXlzKX0gZGF5JHtudW1iZXJPZkRheXMgPj0gMS41ID8gXCJzXCIgOiBcIlwifWA7XG59O1xuXG5jb25zdCBpc05vdFdpdGhpblJhbmdlID0gKG1heDogbnVtYmVyLCBtaW46IG51bWJlciwgdmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBpZiAodmFsdWUubGVuZ3RoIDwgbWluIHx8IHZhbHVlLmxlbmd0aCA+IG1heCkge1xuICAgIHJlc3VsdCA9IGBtdXN0IGJlIGJldHdlZW4gJHttaW59IGFuZCAke21heH0gY2hhcmFjdGVycyBsb25nYDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgaXNWYWxpZEVtYWlsID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXZhbGlkYXRvci5pc0VtYWlsKHZhbHVlKSkgcmV0dXJuIFwibXVzdCBiZSBhIHZhbGlkIGVtYWlsXCI7XG4gIHJldHVybiBcIlwiO1xufTtcblxuY29uc3QgaXNWYWxpZFVybCA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKCF2YWxpZGF0b3IuaXNVUkwodmFsdWUpKSByZXR1cm4gXCJtdXN0IGJlIGEgdmFsaWQgdXJsXCI7XG4gIHJldHVybiBcIlwiO1xufTtcblxuY29uc3QgcGFzc3dvcmRDb25zdHJhaW50cyA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcmVnZXhlczogUmVnRXhwW10gPSBbL1tcXFd8X10vLCAvW0EtWl0vLCAvXFxkL107XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBmb3IgKGNvbnN0IHJlIG9mIHJlZ2V4ZXMpIHtcbiAgICBpZiAoIXJlLnRlc3QodmFsdWUpKVxuICAgICAgcmV0dXJuIFwibXVzdCBjb250YWluIGF0IGxlYXN0IDEgc3BlY2lhbCBjaGFyYWN0ZXIsIDEgdXBwZXJjYXNlIGxldHRlciBhbmQgMSBudW1iZXJcIjtcbiAgfVxuICByZXR1cm4gXCJcIjtcbn07XG5cbnR5cGUgU3RyaW5nRm5Ob0FyZ3MgPSAoKSA9PiBzdHJpbmc7XG5cbmNvbnN0IGNoZWNrQWxsRXJyb3JWYWxpZGF0b3JzID0gKFxuICB2YWxBcnI6IFN0cmluZ0ZuTm9BcmdzW10sXG4gIGZpZWxkTmFtZTogc3RyaW5nXG4pOiBzdHJpbmcgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCB2YWxGbiBvZiB2YWxBcnIpIHtcbiAgICBjb25zdCBlcnJSZXN1bHQgPSB2YWxGbigpO1xuICAgIGlmIChlcnJSZXN1bHQpIHJldHVybiBgJHtmaWVsZE5hbWV9ICR7ZXJyUmVzdWx0fWA7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlckZvcm1GaWVsZENvbnN0cmFpbnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHVzZXJuYW1lKHZhbHVlOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlcnJvclZhbGlkYXRvcnM6IFN0cmluZ0ZuTm9BcmdzW10gPSBbXG4gICAgICBpc05vdFdpdGhpblJhbmdlLmJpbmQodGhpcywgMjAsIDMsIHZhbHVlKSxcbiAgICBdO1xuICAgIHJldHVybiBjaGVja0FsbEVycm9yVmFsaWRhdG9ycyhlcnJvclZhbGlkYXRvcnMsIGZpZWxkTmFtZSk7XG4gIH0sXG4gIGF2YXRhclVSTCh2YWx1ZTogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZXJyb3JWYWxpZGF0b3JzOiBTdHJpbmdGbk5vQXJnc1tdID0gW2lzVmFsaWRVcmwuYmluZCh0aGlzLCB2YWx1ZSldO1xuICAgIHJldHVybiBjaGVja0FsbEVycm9yVmFsaWRhdG9ycyhlcnJvclZhbGlkYXRvcnMsIGZpZWxkTmFtZSk7XG4gIH0sXG4gIGJpbyh2YWx1ZTogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZXJyb3JWYWxpZGF0b3JzOiBTdHJpbmdGbk5vQXJnc1tdID0gW1xuICAgICAgaXNOb3RXaXRoaW5SYW5nZS5iaW5kKHRoaXMsIDEwMCwgMjAsIHZhbHVlKSxcbiAgICBdO1xuICAgIHJldHVybiBjaGVja0FsbEVycm9yVmFsaWRhdG9ycyhlcnJvclZhbGlkYXRvcnMsIGZpZWxkTmFtZSk7XG4gIH0sXG4gIGVtYWlsKHZhbHVlOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlcnJvclZhbGlkYXRvcnM6IFN0cmluZ0ZuTm9BcmdzW10gPSBbaXNWYWxpZEVtYWlsLmJpbmQodGhpcywgdmFsdWUpXTtcbiAgICByZXR1cm4gY2hlY2tBbGxFcnJvclZhbGlkYXRvcnMoZXJyb3JWYWxpZGF0b3JzLCBmaWVsZE5hbWUpO1xuICB9LFxuICBwYXNzd29yZCh2YWx1ZTogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZXJyb3JWYWxpZGF0b3JzOiBTdHJpbmdGbk5vQXJnc1tdID0gW1xuICAgICAgcGFzc3dvcmRDb25zdHJhaW50cy5iaW5kKHZhbHVlKSxcbiAgICAgIGlzTm90V2l0aGluUmFuZ2UuYmluZCh0aGlzLCAxMDAsIDgsIHZhbHVlKSxcbiAgICBdO1xuICAgIHJldHVybiBjaGVja0FsbEVycm9yVmFsaWRhdG9ycyhlcnJvclZhbGlkYXRvcnMsIGZpZWxkTmFtZSk7XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJ2YWxpZGF0b3IiLCJjYWxjdWxhdGVBZ2UiLCJkYXRlVG9Db21wYXJlIiwiZGF0ZVJhbmdlIiwiRGF0ZSIsImdldFRpbWUiLCJudW1iZXJPZkRheXMiLCJhZ2VJbkhvdXJzIiwiTWF0aCIsInJvdW5kIiwiaXNOb3RXaXRoaW5SYW5nZSIsIm1heCIsIm1pbiIsInZhbHVlIiwicmVzdWx0IiwibGVuZ3RoIiwiaXNWYWxpZEVtYWlsIiwiaXNFbWFpbCIsImlzVmFsaWRVcmwiLCJpc1VSTCIsInBhc3N3b3JkQ29uc3RyYWludHMiLCJyZWdleGVzIiwicmUiLCJ0ZXN0IiwiY2hlY2tBbGxFcnJvclZhbGlkYXRvcnMiLCJ2YWxBcnIiLCJmaWVsZE5hbWUiLCJ2YWxGbiIsImVyclJlc3VsdCIsIlVzZXJGb3JtRmllbGRDb25zdHJhaW50cyIsIk9iamVjdCIsImZyZWV6ZSIsInVzZXJuYW1lIiwiZXJyb3JWYWxpZGF0b3JzIiwiYmluZCIsImF2YXRhclVSTCIsImJpbyIsImVtYWlsIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/utils.tsx\n");

/***/ })

});
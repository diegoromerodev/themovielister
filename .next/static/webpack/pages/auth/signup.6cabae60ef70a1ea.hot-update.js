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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateAge\": function() { return /* binding */ calculateAge; },\n/* harmony export */   \"camelCaseToCapitalize\": function() { return /* binding */ camelCaseToCapitalize; }\n/* harmony export */ });\nvar calculateAge = function(dateToCompare) {\n    var dateRange = new Date().getTime() - dateToCompare.getTime();\n    var numberOfDays = dateRange / 86400000;\n    if (numberOfDays < 1) {\n        var ageInHours = Math.round(numberOfDays * 24);\n        return \"\".concat(ageInHours, \" hour\").concat(ageInHours >= 2 || !ageInHours ? \"s\" : \"\");\n    }\n    return \"\".concat(Math.round(numberOfDays), \" day\").concat(numberOfDays >= 1.5 ? \"s\" : \"\");\n};\nvar camelCaseToCapitalize = function(camelCaseStr) {\n    debugger;\n    var breakPoints = [];\n    camelCaseStr.split(\"\").forEach(function(char, index) {\n        if (char.toLowerCase() !== char) breakPoints.push(index);\n    });\n    if (!breakPoints.length) {\n        return camelCaseStr[0].toUpperCase() + camelCaseStr.slice(1);\n    }\n    var lastSplitPoint = 0;\n    var resultingStr = breakPoints.reduce(function(capStr, bp) {\n        lastSplitPoint = bp;\n        var currStr;\n        if (bp && bp === lastSplitPoint + 1) {\n            currStr = capStr;\n        } else {\n            var newCapitalizedSection = camelCaseStr.slice(lastSplitPoint, bp);\n            currStr = \"\".concat(capStr + newCapitalizedSection[0].toUpperCase(), \" \").concat(newCapitalizedSection.slice(1));\n        }\n    }, \"\");\n    return resultingStr;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sR0FBSyxDQUFDQSxZQUFZLEdBQUcsUUFBUSxDQUFQQyxhQUFtQixFQUFhLENBQUM7SUFDNUQsR0FBSyxDQUFDQyxTQUFTLEdBQUcsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLE9BQU8sS0FBS0gsYUFBYSxDQUFDRyxPQUFPO0lBQzlELEdBQUssQ0FBQ0MsWUFBWSxHQUFHSCxTQUFTLEdBQUcsUUFBTTtJQUN2QyxFQUFFLEVBQUVHLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNyQixHQUFLLENBQUNDLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksR0FBRyxFQUFFO1FBQy9DLE1BQU0sQ0FBRSxHQUFvQkMsTUFBeUMsQ0FBM0RBLFVBQVUsRUFBQyxDQUFLLFFBQTRDLE9BQTFDQSxVQUFVLElBQUksQ0FBQyxLQUFLQSxVQUFVLEdBQUcsQ0FBRyxLQUFHLENBQUU7SUFDdkUsQ0FBQztJQUNELE1BQU0sQ0FBRSxHQUFpQ0QsTUFBOEIsQ0FBN0RFLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxZQUFZLEdBQUUsQ0FBSSxPQUFpQyxPQUEvQkEsWUFBWSxJQUFJLEdBQUcsR0FBRyxDQUFHLEtBQUcsQ0FBRTtBQUN6RSxDQUFDO0FBRU0sR0FBSyxDQUFDSSxxQkFBcUIsR0FBRyxRQUFRLENBQVBDLFlBQW9CLEVBQWEsQ0FBQztJQUN0RSxRQUFTO0lBQ1QsR0FBSyxDQUFDQyxXQUFXLEdBQWEsQ0FBQyxDQUFDO0lBQ2hDRCxZQUFZLENBQUNFLEtBQUssQ0FBQyxDQUFFLEdBQUVDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSyxFQUFLLENBQUM7UUFDL0MsRUFBRSxFQUFFRCxJQUFJLENBQUNFLFdBQVcsT0FBT0YsSUFBSSxFQUFFSCxXQUFXLENBQUNNLElBQUksQ0FBQ0YsS0FBSztJQUN6RCxDQUFDO0lBQ0QsRUFBRSxHQUFHSixXQUFXLENBQUNPLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQ1IsWUFBWSxDQUFDLENBQUMsRUFBRVMsV0FBVyxLQUFLVCxZQUFZLENBQUNVLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxHQUFHLENBQUNDLGNBQWMsR0FBRyxDQUFDO0lBQ3RCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHWCxXQUFXLENBQUNZLE1BQU0sQ0FDckMsUUFBUSxDQUFQQyxNQUFjLEVBQUVDLEVBQVUsRUFBYSxDQUFDO1FBQ3ZDSixjQUFjLEdBQUdJLEVBQUU7UUFDbkIsR0FBRyxDQUFDQyxPQUFPO1FBQ1gsRUFBRSxFQUFFRCxFQUFFLElBQUlBLEVBQUUsS0FBS0osY0FBYyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3BDSyxPQUFPLEdBQUdGLE1BQU07UUFDbEIsQ0FBQyxNQUFNLENBQUM7WUFDTixHQUFLLENBQUNHLHFCQUFxQixHQUFHakIsWUFBWSxDQUFDVSxLQUFLLENBQUNDLGNBQWMsRUFBRUksRUFBRTtZQUNuRUMsT0FBTyxHQUFJLEdBRVBDLE1BQThCLENBRGhDSCxNQUFNLEdBQUdHLHFCQUFxQixDQUFDLENBQUMsRUFBRVIsV0FBVyxJQUM5QyxDQUFDLElBQWlDLE9BQS9CUSxxQkFBcUIsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUMsRUFDRCxDQUFFO0lBRUosTUFBTSxDQUFDRSxZQUFZO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLnRzeD82ZTZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYWxjdWxhdGVBZ2UgPSAoZGF0ZVRvQ29tcGFyZTogRGF0ZSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGVSYW5nZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG4gIGNvbnN0IG51bWJlck9mRGF5cyA9IGRhdGVSYW5nZSAvIDguNjRlNztcbiAgaWYgKG51bWJlck9mRGF5cyA8IDEpIHtcbiAgICBjb25zdCBhZ2VJbkhvdXJzID0gTWF0aC5yb3VuZChudW1iZXJPZkRheXMgKiAyNCk7XG4gICAgcmV0dXJuIGAke2FnZUluSG91cnN9IGhvdXIke2FnZUluSG91cnMgPj0gMiB8fCAhYWdlSW5Ib3VycyA/IFwic1wiIDogXCJcIn1gO1xuICB9XG4gIHJldHVybiBgJHtNYXRoLnJvdW5kKG51bWJlck9mRGF5cyl9IGRheSR7bnVtYmVyT2ZEYXlzID49IDEuNSA/IFwic1wiIDogXCJcIn1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsQ2FzZVRvQ2FwaXRhbGl6ZSA9IChjYW1lbENhc2VTdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGRlYnVnZ2VyO1xuICBjb25zdCBicmVha1BvaW50czogbnVtYmVyW10gPSBbXTtcbiAgY2FtZWxDYXNlU3RyLnNwbGl0KFwiXCIpLmZvckVhY2goKGNoYXIsIGluZGV4KSA9PiB7XG4gICAgaWYgKGNoYXIudG9Mb3dlckNhc2UoKSAhPT0gY2hhcikgYnJlYWtQb2ludHMucHVzaChpbmRleCk7XG4gIH0pO1xuICBpZiAoIWJyZWFrUG9pbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYW1lbENhc2VTdHJbMF0udG9VcHBlckNhc2UoKSArIGNhbWVsQ2FzZVN0ci5zbGljZSgxKTtcbiAgfVxuICBsZXQgbGFzdFNwbGl0UG9pbnQgPSAwO1xuICBjb25zdCByZXN1bHRpbmdTdHIgPSBicmVha1BvaW50cy5yZWR1Y2UoXG4gICAgKGNhcFN0cjogc3RyaW5nLCBicDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgIGxhc3RTcGxpdFBvaW50ID0gYnA7XG4gICAgICBsZXQgY3VyclN0cjtcbiAgICAgIGlmIChicCAmJiBicCA9PT0gbGFzdFNwbGl0UG9pbnQgKyAxKSB7XG4gICAgICAgIGN1cnJTdHIgPSBjYXBTdHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdDYXBpdGFsaXplZFNlY3Rpb24gPSBjYW1lbENhc2VTdHIuc2xpY2UobGFzdFNwbGl0UG9pbnQsIGJwKTtcbiAgICAgICAgY3VyclN0ciA9IGAke1xuICAgICAgICAgIGNhcFN0ciArIG5ld0NhcGl0YWxpemVkU2VjdGlvblswXS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0gJHtuZXdDYXBpdGFsaXplZFNlY3Rpb24uc2xpY2UoMSl9YDtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiXCJcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdGluZ1N0cjtcbn07XG4iXSwibmFtZXMiOlsiY2FsY3VsYXRlQWdlIiwiZGF0ZVRvQ29tcGFyZSIsImRhdGVSYW5nZSIsIkRhdGUiLCJnZXRUaW1lIiwibnVtYmVyT2ZEYXlzIiwiYWdlSW5Ib3VycyIsIk1hdGgiLCJyb3VuZCIsImNhbWVsQ2FzZVRvQ2FwaXRhbGl6ZSIsImNhbWVsQ2FzZVN0ciIsImJyZWFrUG9pbnRzIiwic3BsaXQiLCJmb3JFYWNoIiwiY2hhciIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJwdXNoIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImxhc3RTcGxpdFBvaW50IiwicmVzdWx0aW5nU3RyIiwicmVkdWNlIiwiY2FwU3RyIiwiYnAiLCJjdXJyU3RyIiwibmV3Q2FwaXRhbGl6ZWRTZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utils.tsx\n");

/***/ })

});
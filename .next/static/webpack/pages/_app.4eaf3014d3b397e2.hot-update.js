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

/***/ "./lib/hooks/useAxiosInterceptor.ts":
/*!******************************************!*\
  !*** ./lib/hooks/useAxiosInterceptor.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customAxios\": function() { return /* binding */ customAxios; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar customAxios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3000\"\n});\nvar useAxiosInterceptor = function(token, setAppData) {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        request: null,\n        response: null\n    }), interceptors = ref[0], setInterceptors = ref[1];\n    var configureInterceptors = function() {\n        Object.keys(interceptors).forEach(function(k) {\n            if (!interceptors[k]) return;\n            customAxios.interceptors[k].eject(interceptors[k]);\n        });\n        var requestInterceptor = customAxios.interceptors.request.use(function(req) {\n            if (token) {\n                req.headers.Authorization = \"Bearer \".concat(token);\n            }\n            return req;\n        }, function() {\n            setAppData(function(prevData) {\n                return _objectSpread({}, prevData, {\n                    currentErrors: _toConsumableArray(prevData.currentErrors).concat([\n                        \"Invalid request.\"\n                    ])\n                });\n            });\n        });\n        var responseInterceptor = customAxios.interceptors.response.use(function(res) {\n            return res;\n        }, function(error) {\n            setAppData(function(prevData) {\n                return _objectSpread({}, prevData, {\n                    currentErrors: _toConsumableArray(prevData.currentErrors).concat([\n                        error.response.data.error, \n                    ])\n                });\n            });\n        });\n        setInterceptors({\n            request: requestInterceptor,\n            response: responseInterceptor\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        configureInterceptors();\n    }, [\n        token\n    ]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useAxiosInterceptor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9va3MvdXNlQXhpb3NJbnRlcmNlcHRvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXJFLEdBQUssQ0FBQ0csV0FBVyxHQUFHSCxtREFBWSxDQUFDLENBQUM7SUFDaENLLE9BQU8sRUFBRUMsdUJBQStCO0FBQzFDLENBQUM7QUFFRCxHQUFLLENBQUNHLG1CQUFtQixHQUFHLFFBQ3RCLENBQUpDLEtBQWEsRUFDYkMsVUFBa0QsRUFDL0MsQ0FBQztJQUNKLEdBQUssQ0FBbUNULEdBR3RDLEdBSHNDQSwrQ0FBUSxDQUFtQixDQUFDO1FBQ2xFVSxPQUFPLEVBQUUsSUFBSTtRQUNiQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDLEdBSE1DLFlBQVksR0FBcUJaLEdBR3RDLEtBSG1CYSxlQUFlLEdBQUliLEdBR3RDO0lBQ0YsR0FBSyxDQUFDYyxxQkFBcUIsR0FBRyxRQUNoQyxHQURzQyxDQUFDO1FBQ25DQyxNQUFNLENBQUNDLElBQUksQ0FBQ0osWUFBWSxFQUFFSyxPQUFPLENBQUMsUUFBUSxDQUFQQyxDQUFrQixFQUFLLENBQUM7WUFDekQsRUFBRSxHQUFHTixZQUFZLENBQUNNLENBQUMsR0FBRyxNQUFNO1lBQzVCakIsV0FBVyxDQUFDVyxZQUFZLENBQUNNLENBQUMsRUFBRUMsS0FBSyxDQUFDUCxZQUFZLENBQUNNLENBQUM7UUFDbEQsQ0FBQztRQUNELEdBQUssQ0FBQ0Usa0JBQWtCLEdBQUduQixXQUFXLENBQUNXLFlBQVksQ0FBQ0YsT0FBTyxDQUFDVyxHQUFHLENBQzdELFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7WUFDUixFQUFFLEVBQUVkLEtBQUssRUFBRSxDQUFDO2dCQUNWYyxHQUFHLENBQUNDLE9BQU8sQ0FBQ0MsYUFBYSxHQUFJLENBQU8sU0FBUSxPQUFOaEIsS0FBSztZQUM3QyxDQUFDO1lBQ0QsTUFBTSxDQUFDYyxHQUFHO1FBQ1osQ0FBQyxFQUNELFFBQ04sR0FEWSxDQUFDO1lBQ0xiLFVBQVUsQ0FBQyxRQUFRLENBQVBnQixRQUFRLEVBQUssQ0FBQztnQkFDeEIsTUFBTSxtQkFDREEsUUFBUTtvQkFDWEMsYUFBYSxxQkFBTUQsUUFBUSxDQUFDQyxhQUFhLFNBQTFCLENBQUM7d0JBQTJCLENBQWtCO29CQUFBLENBQUM7O1lBRWxFLENBQUM7UUFDSCxDQUFDO1FBR0gsR0FBSyxDQUFDQyxtQkFBbUIsR0FBRzFCLFdBQVcsQ0FBQ1csWUFBWSxDQUFDRCxRQUFRLENBQUNVLEdBQUcsQ0FDL0QsUUFBUSxDQUFQTyxHQUFHLEVBQUssQ0FBQztZQUNSLE1BQU0sQ0FBQ0EsR0FBRztRQUNaLENBQUMsRUFDRCxRQUFRLENBQVBDLEtBQWlCLEVBQUssQ0FBQztZQUN0QnBCLFVBQVUsQ0FBQyxRQUFRLENBQVBnQixRQUFRLEVBQUssQ0FBQztnQkFDeEIsTUFBTSxtQkFDREEsUUFBUTtvQkFDWEMsYUFBYSxxQkFDUkQsUUFBUSxDQUFDQyxhQUFhLFNBRFosQ0FBQzt3QkFFZEcsS0FBSyxDQUFDbEIsUUFBUSxDQUFDbUIsSUFBSSxDQUFDRCxLQUFLO29CQUMzQixDQUFDOztZQUVMLENBQUM7UUFDSCxDQUFDO1FBR0hoQixlQUFlLENBQUMsQ0FBQztZQUNmSCxPQUFPLEVBQUVVLGtCQUFrQjtZQUMzQlQsUUFBUSxFQUFFZ0IsbUJBQW1CO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQ1QixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmZSxxQkFBcUI7SUFDdkIsQ0FBQyxFQUFFLENBQUNOO1FBQUFBLEtBQUs7SUFBQSxDQUFDO0FBQ1osQ0FBQztBQUVzQjtBQUV2QiwrREFBZUQsbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZUF4aW9zSW50ZXJjZXB0b3IudHM/Y2QyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBEYXRhU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBJbnRlcmNlcHRvcktleXMgPSBcInJlcXVlc3RcIiB8IFwicmVzcG9uc2VcIjtcblxuaW50ZXJmYWNlIEludGVyY2VwdG9yU3RhdGUge1xuICByZXF1ZXN0OiBudW1iZXI7XG4gIHJlc3BvbnNlOiBudW1iZXI7XG59XG5cbmNvbnN0IGN1c3RvbUF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCxcbn0pO1xuXG5jb25zdCB1c2VBeGlvc0ludGVyY2VwdG9yID0gKFxuICB0b2tlbjogc3RyaW5nLFxuICBzZXRBcHBEYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxBcHBEYXRhU3RhdGU+PlxuKSA9PiB7XG4gIGNvbnN0IFtpbnRlcmNlcHRvcnMsIHNldEludGVyY2VwdG9yc10gPSB1c2VTdGF0ZTxJbnRlcmNlcHRvclN0YXRlPih7XG4gICAgcmVxdWVzdDogbnVsbCxcbiAgICByZXNwb25zZTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IGNvbmZpZ3VyZUludGVyY2VwdG9ycyA9ICgpID0+IHtcbiAgICBPYmplY3Qua2V5cyhpbnRlcmNlcHRvcnMpLmZvckVhY2goKGs6IEludGVyY2VwdG9yS2V5cykgPT4ge1xuICAgICAgaWYgKCFpbnRlcmNlcHRvcnNba10pIHJldHVybjtcbiAgICAgIGN1c3RvbUF4aW9zLmludGVyY2VwdG9yc1trXS5lamVjdChpbnRlcmNlcHRvcnNba10pO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlcXVlc3RJbnRlcmNlcHRvciA9IGN1c3RvbUF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgICAgIChyZXEpID0+IHtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVxLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXE7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRBcHBEYXRhKChwcmV2RGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2RGF0YSxcbiAgICAgICAgICAgIGN1cnJlbnRFcnJvcnM6IFsuLi5wcmV2RGF0YS5jdXJyZW50RXJyb3JzLCBcIkludmFsaWQgcmVxdWVzdC5cIl0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3IgPSBjdXN0b21BeGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgKHJlcykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xuICAgICAgICBzZXRBcHBEYXRhKChwcmV2RGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2RGF0YSxcbiAgICAgICAgICAgIGN1cnJlbnRFcnJvcnM6IFtcbiAgICAgICAgICAgICAgLi4ucHJldkRhdGEuY3VycmVudEVycm9ycyxcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHNldEludGVyY2VwdG9ycyh7XG4gICAgICByZXF1ZXN0OiByZXF1ZXN0SW50ZXJjZXB0b3IsXG4gICAgICByZXNwb25zZTogcmVzcG9uc2VJbnRlcmNlcHRvcixcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbmZpZ3VyZUludGVyY2VwdG9ycygpO1xuICB9LCBbdG9rZW5dKTtcbn07XG5cbmV4cG9ydCB7IGN1c3RvbUF4aW9zIH07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUF4aW9zSW50ZXJjZXB0b3I7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImN1c3RvbUF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwidXNlQXhpb3NJbnRlcmNlcHRvciIsInRva2VuIiwic2V0QXBwRGF0YSIsInJlcXVlc3QiLCJyZXNwb25zZSIsImludGVyY2VwdG9ycyIsInNldEludGVyY2VwdG9ycyIsImNvbmZpZ3VyZUludGVyY2VwdG9ycyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsImVqZWN0IiwicmVxdWVzdEludGVyY2VwdG9yIiwidXNlIiwicmVxIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcmV2RGF0YSIsImN1cnJlbnRFcnJvcnMiLCJyZXNwb25zZUludGVyY2VwdG9yIiwicmVzIiwiZXJyb3IiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/hooks/useAxiosInterceptor.ts\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[postId]/edit";
exports.ids = ["pages/posts/[postId]/edit"];
exports.modules = {

/***/ "./lib/AppContext.tsx":
/*!****************************!*\
  !*** ./lib/AppContext.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvQXBwQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLEtBQUssQ0FBQ0MsVUFBVSxpQkFBR0Qsb0RBQWEsQ0FBQyxJQUFJO0FBRXJDLGlFQUFlQyxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL2xpYi9BcHBDb250ZXh0LnRzeD83MDdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkFwcENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/AppContext.tsx\n");

/***/ }),

/***/ "./lib/hooks/useAxiosInterceptor.ts":
/*!******************************************!*\
  !*** ./lib/hooks/useAxiosInterceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customAxios\": () => (/* binding */ customAxios),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst customAxios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3000\"\n});\nconst useAxiosInterceptor = (token, setAppData)=>{\n    const { 0: interceptors , 1: setInterceptors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        request: null,\n        response: null\n    });\n    const configureInterceptors = ()=>{\n        Object.keys(interceptors).forEach((k)=>{\n            if (!interceptors[k]) return;\n            customAxios.interceptors[k].eject(interceptors[k]);\n        });\n        const requestInterceptor = customAxios.interceptors.request.use((req)=>{\n            if (token) {\n                req.headers.Authorization = `Bearer ${token}`;\n            }\n            return req;\n        });\n        const responseInterceptor = customAxios.interceptors.response.use((res)=>{\n            return res;\n        }, (error)=>{\n            setAppData((prevData)=>{\n                return {\n                    ...prevData,\n                    currentErrors: [\n                        ...prevData.currentErrors,\n                        error.response.data.error, \n                    ]\n                };\n            });\n        });\n        setInterceptors({\n            request: requestInterceptor,\n            response: responseInterceptor\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        configureInterceptors();\n    }, [\n        token\n    ]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAxiosInterceptor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9va3MvdXNlQXhpb3NJbnRlcmNlcHRvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDNEI7QUFVckUsS0FBSyxDQUFDRyxXQUFXLEdBQUdILG1EQUFZLENBQUMsQ0FBQztJQUNoQ0ssT0FBTyxFQUFFQyx1QkFBK0I7QUFDMUMsQ0FBQztBQUVELEtBQUssQ0FBQ0csbUJBQW1CLElBQ3ZCQyxLQUFhLEVBQ2JDLFVBQWtELEdBQy9DLENBQUM7SUFDSixLQUFLLE1BQUVDLFlBQVksTUFBRUMsZUFBZSxNQUFJWCwrQ0FBUSxDQUFtQixDQUFDO1FBQ2xFWSxPQUFPLEVBQUUsSUFBSTtRQUNiQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0QsS0FBSyxDQUFDQyxxQkFBcUIsT0FBUyxDQUFDO1FBQ25DQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sWUFBWSxFQUFFTyxPQUFPLEVBQUVDLENBQWtCLEdBQUssQ0FBQztZQUN6RCxFQUFFLEdBQUdSLFlBQVksQ0FBQ1EsQ0FBQyxHQUFHLE1BQU07WUFDNUJqQixXQUFXLENBQUNTLFlBQVksQ0FBQ1EsQ0FBQyxFQUFFQyxLQUFLLENBQUNULFlBQVksQ0FBQ1EsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsS0FBSyxDQUFDRSxrQkFBa0IsR0FBR25CLFdBQVcsQ0FBQ1MsWUFBWSxDQUFDRSxPQUFPLENBQUNTLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7WUFDeEUsRUFBRSxFQUFFZCxLQUFLLEVBQUUsQ0FBQztnQkFDVmMsR0FBRyxDQUFDQyxPQUFPLENBQUNDLGFBQWEsSUFBSSxPQUFPLEVBQUVoQixLQUFLO1lBQzdDLENBQUM7WUFDRCxNQUFNLENBQUNjLEdBQUc7UUFDWixDQUFDO1FBRUQsS0FBSyxDQUFDRyxtQkFBbUIsR0FBR3hCLFdBQVcsQ0FBQ1MsWUFBWSxDQUFDRyxRQUFRLENBQUNRLEdBQUcsRUFDOURLLEdBQUcsR0FBSyxDQUFDO1lBQ1IsTUFBTSxDQUFDQSxHQUFHO1FBQ1osQ0FBQyxHQUNBQyxLQUFpQixHQUFLLENBQUM7WUFDdEJsQixVQUFVLEVBQUVtQixRQUFRLEdBQUssQ0FBQztnQkFDeEIsTUFBTSxDQUFDLENBQUM7dUJBQ0hBLFFBQVE7b0JBQ1hDLGFBQWEsRUFBRSxDQUFDOzJCQUNYRCxRQUFRLENBQUNDLGFBQWE7d0JBQ3pCRixLQUFLLENBQUNkLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQ0gsS0FBSztvQkFDM0IsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFHSGhCLGVBQWUsQ0FBQyxDQUFDO1lBQ2ZDLE9BQU8sRUFBRVEsa0JBQWtCO1lBQzNCUCxRQUFRLEVBQUVZLG1CQUFtQjtRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVEMUIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZlLHFCQUFxQjtJQUN2QixDQUFDLEVBQUUsQ0FBQ047UUFBQUEsS0FBSztJQUFBLENBQUM7QUFDWixDQUFDO0FBRXNCO0FBRXZCLGlFQUFlRCxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW1vdmllbGlzdGVyLy4vbGliL2hvb2tzL3VzZUF4aW9zSW50ZXJjZXB0b3IudHM/Y2QyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBEYXRhU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBJbnRlcmNlcHRvcktleXMgPSBcInJlcXVlc3RcIiB8IFwicmVzcG9uc2VcIjtcblxuaW50ZXJmYWNlIEludGVyY2VwdG9yU3RhdGUge1xuICByZXF1ZXN0OiBudW1iZXI7XG4gIHJlc3BvbnNlOiBudW1iZXI7XG59XG5cbmNvbnN0IGN1c3RvbUF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCxcbn0pO1xuXG5jb25zdCB1c2VBeGlvc0ludGVyY2VwdG9yID0gKFxuICB0b2tlbjogc3RyaW5nLFxuICBzZXRBcHBEYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxBcHBEYXRhU3RhdGU+PlxuKSA9PiB7XG4gIGNvbnN0IFtpbnRlcmNlcHRvcnMsIHNldEludGVyY2VwdG9yc10gPSB1c2VTdGF0ZTxJbnRlcmNlcHRvclN0YXRlPih7XG4gICAgcmVxdWVzdDogbnVsbCxcbiAgICByZXNwb25zZTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IGNvbmZpZ3VyZUludGVyY2VwdG9ycyA9ICgpID0+IHtcbiAgICBPYmplY3Qua2V5cyhpbnRlcmNlcHRvcnMpLmZvckVhY2goKGs6IEludGVyY2VwdG9yS2V5cykgPT4ge1xuICAgICAgaWYgKCFpbnRlcmNlcHRvcnNba10pIHJldHVybjtcbiAgICAgIGN1c3RvbUF4aW9zLmludGVyY2VwdG9yc1trXS5lamVjdChpbnRlcmNlcHRvcnNba10pO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlcXVlc3RJbnRlcmNlcHRvciA9IGN1c3RvbUF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgocmVxKSA9PiB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3IgPSBjdXN0b21BeGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgKHJlcykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xuICAgICAgICBzZXRBcHBEYXRhKChwcmV2RGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2RGF0YSxcbiAgICAgICAgICAgIGN1cnJlbnRFcnJvcnM6IFtcbiAgICAgICAgICAgICAgLi4ucHJldkRhdGEuY3VycmVudEVycm9ycyxcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHNldEludGVyY2VwdG9ycyh7XG4gICAgICByZXF1ZXN0OiByZXF1ZXN0SW50ZXJjZXB0b3IsXG4gICAgICByZXNwb25zZTogcmVzcG9uc2VJbnRlcmNlcHRvcixcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbmZpZ3VyZUludGVyY2VwdG9ycygpO1xuICB9LCBbdG9rZW5dKTtcbn07XG5cbmV4cG9ydCB7IGN1c3RvbUF4aW9zIH07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUF4aW9zSW50ZXJjZXB0b3I7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImN1c3RvbUF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwidXNlQXhpb3NJbnRlcmNlcHRvciIsInRva2VuIiwic2V0QXBwRGF0YSIsImludGVyY2VwdG9ycyIsInNldEludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImNvbmZpZ3VyZUludGVyY2VwdG9ycyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsImVqZWN0IiwicmVxdWVzdEludGVyY2VwdG9yIiwidXNlIiwicmVxIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZUludGVyY2VwdG9yIiwicmVzIiwiZXJyb3IiLCJwcmV2RGF0YSIsImN1cnJlbnRFcnJvcnMiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/hooks/useAxiosInterceptor.ts\n");

/***/ }),

/***/ "./pages/posts/[postId]/edit.tsx":
/*!***************************************!*\
  !*** ./pages/posts/[postId]/edit.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/AppContext */ \"./lib/AppContext.tsx\");\n/* harmony import */ var _lib_hooks_useAxiosInterceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/hooks/useAxiosInterceptor */ \"./lib/hooks/useAxiosInterceptor.ts\");\n\n\n\n\n\nfunction EditPostView({ post  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { 0: appData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_lib_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!post || post.UserId !== appData.userData.id) router.push(\"/\");\n    }, []);\n    if (!post) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"EDIT POST\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\edit.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\JAVASCRIPT30\\\\themovielister\\\\pages\\\\posts\\\\[postId]\\\\edit.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\nconst getServerSideProps = async (ctx)=>{\n    const { postId  } = ctx.query;\n    let post;\n    try {\n        const postRes = await (0,_lib_hooks_useAxiosInterceptor__WEBPACK_IMPORTED_MODULE_4__.customAxios)(`/api/posts/${postId}`);\n        post = postRes === null || postRes === void 0 ? void 0 : postRes.data;\n    } catch  {\n        post = null;\n    }\n    return {\n        props: {\n            post\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditPostView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS9lZGl0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN1QztBQUNNO0FBQ0c7QUFDb0I7U0FHM0RLLFlBQVksQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBdUIsQ0FBQyxFQUFFLENBQUM7SUFDckQsS0FBSyxDQUFDQyxNQUFNLEdBQUdQLHNEQUFTO0lBQ3hCLEtBQUssTUFBRVEsT0FBTyxNQUFvQlAsaURBQVUsQ0FBQ0UsdURBQVU7SUFDdkRELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsR0FBR0ksSUFBSSxJQUFJQSxJQUFJLENBQUNHLE1BQU0sS0FBS0QsT0FBTyxDQUFDRSxRQUFRLENBQUNDLEVBQUUsRUFBRUosTUFBTSxDQUFDSyxJQUFJLENBQUMsQ0FBRztJQUNuRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsRUFBRSxHQUFHTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDdEIsTUFBTSw2RUFDSE8sQ0FBRzs4RkFDREMsQ0FBRTtzQkFBQyxDQUFTOzs7Ozs7Ozs7OztBQUduQixDQUFDO0FBRU0sS0FBSyxDQUFDQyxrQkFBa0IsVUFDN0JDLEdBQThCLEdBQzNCLENBQUM7SUFDSixLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEVBQUMsQ0FBQyxHQUFHRCxHQUFHLENBQUNFLEtBQUs7SUFDNUIsR0FBRyxDQUFDWixJQUFJO0lBQ1IsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNhLE9BQU8sR0FBRyxLQUFLLENBQUNmLDJFQUFXLEVBQUUsV0FBVyxFQUFFYSxNQUFNO1FBQ3REWCxJQUFJLEdBQUdhLE9BQU8sYUFBUEEsT0FBTyxLQUFQQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLE9BQU8sQ0FBRUMsSUFBSTtJQUN0QixDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDUGQsSUFBSSxHQUFHLElBQUk7SUFDYixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUM7UUFDTmUsS0FBSyxFQUFFLENBQUM7WUFDTmYsSUFBSTtRQUNOLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlRCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtb3ZpZWxpc3Rlci8uL3BhZ2VzL3Bvc3RzL1twb3N0SWRdL2VkaXQudHN4PzU3MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vLi4vLi4vbGliL0FwcENvbnRleHRcIjtcbmltcG9ydCB7IGN1c3RvbUF4aW9zIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9ob29rcy91c2VBeGlvc0ludGVyY2VwdG9yXCI7XG5pbXBvcnQgeyBBcHBEYXRhQ29udGV4dCwgUG9zdFNjaGVtYSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdHlwZXNcIjtcblxuZnVuY3Rpb24gRWRpdFBvc3RWaWV3KHsgcG9zdCB9OiB7IHBvc3Q6IFBvc3RTY2hlbWEgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2FwcERhdGFdOiBBcHBEYXRhQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwb3N0IHx8IHBvc3QuVXNlcklkICE9PSBhcHBEYXRhLnVzZXJEYXRhLmlkKSByb3V0ZXIucHVzaChcIi9cIik7XG4gIH0sIFtdKTtcbiAgaWYgKCFwb3N0KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkVESVQgUE9TVDwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChcbiAgY3R4OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XG4pID0+IHtcbiAgY29uc3QgeyBwb3N0SWQgfSA9IGN0eC5xdWVyeTtcbiAgbGV0IHBvc3Q7XG4gIHRyeSB7XG4gICAgY29uc3QgcG9zdFJlcyA9IGF3YWl0IGN1c3RvbUF4aW9zKGAvYXBpL3Bvc3RzLyR7cG9zdElkfWApO1xuICAgIHBvc3QgPSBwb3N0UmVzPy5kYXRhO1xuICB9IGNhdGNoIHtcbiAgICBwb3N0ID0gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9zdFZpZXc7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkFwcENvbnRleHQiLCJjdXN0b21BeGlvcyIsIkVkaXRQb3N0VmlldyIsInBvc3QiLCJyb3V0ZXIiLCJhcHBEYXRhIiwiVXNlcklkIiwidXNlckRhdGEiLCJpZCIsInB1c2giLCJkaXYiLCJoMSIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInBvc3RJZCIsInF1ZXJ5IiwicG9zdFJlcyIsImRhdGEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[postId]/edit.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[postId]/edit.tsx"));
module.exports = __webpack_exports__;

})();
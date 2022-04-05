"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_middleware",{

/***/ "(middleware)/./pages/_middleware.ts":
/*!******************************!*\
  !*** ./pages/_middleware.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n\nconst MiddlewareHandler = async (req)=>{\n    const tokenString = req.headers.get(\"Authorization\");\n    const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    if (tokenString) {\n        const verifyRes = await fetch(`${process.env.API_URL}/api/auth/verify`, {\n            headers: {\n                Authorization: tokenString\n            },\n            method: \"POST\"\n        });\n        const userData = await verifyRes.json();\n        response.cookie(\"user\", userData);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiddlewareHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBdUQ7QUFFdkQsS0FBSyxDQUFDQyxpQkFBaUIsVUFBVUMsR0FBZ0IsR0FBSyxDQUFDO0lBQ3JELEtBQUssQ0FBQ0MsV0FBVyxHQUFHRCxHQUFHLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWU7SUFDbkQsS0FBSyxDQUFDQyxRQUFRLEdBQUdOLDBEQUFpQjtJQUNsQyxFQUFFLEVBQUVHLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssQ0FBQ0ssU0FBUyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixHQUFHLENBQUM7WUFDdkVSLE9BQU8sRUFBRSxDQUFDO2dCQUNSUyxhQUFhLEVBQUVWLFdBQVc7WUFDNUIsQ0FBQztZQUNEVyxNQUFNLEVBQUUsQ0FBTTtRQUNoQixDQUFDO1FBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDUCxTQUFTLENBQUNRLElBQUk7UUFDckNWLFFBQVEsQ0FBQ1csTUFBTSxDQUFDLENBQU0sT0FBRUYsUUFBUTtJQUNsQyxDQUFDO0FBQ0gsQ0FBQztBQUVELCtEQUFlZCxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fbWlkZGxld2FyZS50cz9mZTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuY29uc3QgTWlkZGxld2FyZUhhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0UmVxdWVzdCkgPT4ge1xuICBjb25zdCB0b2tlblN0cmluZyA9IHJlcS5oZWFkZXJzLmdldChcIkF1dGhvcml6YXRpb25cIik7XG4gIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLm5leHQoKTtcbiAgaWYgKHRva2VuU3RyaW5nKSB7XG4gICAgY29uc3QgdmVyaWZ5UmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vYXBpL2F1dGgvdmVyaWZ5YCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblN0cmluZyxcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgdmVyaWZ5UmVzLmpzb24oKTtcbiAgICByZXNwb25zZS5jb29raWUoXCJ1c2VyXCIsIHVzZXJEYXRhKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWlkZGxld2FyZUhhbmRsZXI7XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiTWlkZGxld2FyZUhhbmRsZXIiLCJyZXEiLCJ0b2tlblN0cmluZyIsImhlYWRlcnMiLCJnZXQiLCJyZXNwb25zZSIsIm5leHQiLCJ2ZXJpZnlSZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwiQXV0aG9yaXphdGlvbiIsIm1ldGhvZCIsInVzZXJEYXRhIiwianNvbiIsImNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.ts\n");

/***/ })

});
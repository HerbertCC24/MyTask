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

/***/ "./utils/request.ts":
/*!**************************!*\
  !*** ./utils/request.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ping\": function() { return /* binding */ ping; },\n/* harmony export */   \"qryLogin\": function() { return /* binding */ qryLogin; }\n/* harmony export */ });\n/* harmony import */ var umi_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! umi-request */ \"./node_modules/umi-request/dist/index.esm.js\");\n\n//  测试接口 POST /api/ping\nasync function ping(// body: API.CorpContractInfoDTO_,\noptions) {\n    return (0,umi_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/ping\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        //   data: body,\n        ...options || {}\n    });\n}\n//  登录接口 POST /api/ping\nasync function qryLogin(params, options) {\n    const { username , password  } = params;\n    return (0,umi_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/user/login\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        params,\n        //   data: body,\n        ...options || {}\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9yZXF1ZXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUVsQyx1QkFBdUI7QUFDaEIsZUFBZUMsS0FDcEIsa0NBQWtDO0FBQ2xDQyxPQUFnQyxFQUNoQztJQUNBLE9BQU9GLHVEQUFPQSxDQUFhLGFBQWE7UUFDdENHLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBLGdCQUFnQjtRQUNoQixHQUFJRixXQUFXLENBQUMsQ0FBQztJQUNuQjtBQUNGLENBQUM7QUFDRCx1QkFBdUI7QUFDaEIsZUFBZUcsU0FDcEJDLE1BQThCLEVBQzlCSixPQUFnQyxFQUNoQztJQUNBLE1BQU0sRUFBRUssU0FBUSxFQUFFQyxTQUFRLEVBQUUsR0FBR0Y7SUFDL0IsT0FBT04sdURBQU9BLENBQWMsbUJBQWtCO1FBQzVDRyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUU7UUFDQSxnQkFBZ0I7UUFDaEIsR0FBSUosV0FBVyxDQUFDLENBQUM7SUFDbkI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3JlcXVlc3QudHM/NDM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwidW1pLXJlcXVlc3RcIjtcblxuLy8gIOa1i+ivleaOpeWPoyBQT1NUIC9hcGkvcGluZ1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBpbmcoXG4gIC8vIGJvZHk6IEFQSS5Db3JwQ29udHJhY3RJbmZvRFRPXyxcbiAgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikge1xuICByZXR1cm4gcmVxdWVzdDxBUEkuUmVzdWx0PihcIi9hcGkvcGluZ1wiLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgLy8gICBkYXRhOiBib2R5LFxuICAgIC4uLihvcHRpb25zIHx8IHt9KSxcbiAgfSk7XG59XG4vLyAg55m75b2V5o6l5Y+jIFBPU1QgL2FwaS9waW5nXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXJ5TG9naW4oXG4gIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikge1xuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcGFyYW1zO1xuICByZXR1cm4gcmVxdWVzdDxBUEkuUmVzdWx0PihgL2FwaS91c2VyL2xvZ2luYCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIHBhcmFtcyxcbiAgICAvLyAgIGRhdGE6IGJvZHksXG4gICAgLi4uKG9wdGlvbnMgfHwge30pLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwicGluZyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicXJ5TG9naW4iLCJwYXJhbXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/request.ts\n"));

/***/ })

});
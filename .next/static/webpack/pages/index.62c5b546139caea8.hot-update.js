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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ping\": function() { return /* binding */ ping; },\n/* harmony export */   \"qryLogin\": function() { return /* binding */ qryLogin; },\n/* harmony export */   \"restfulLogin\": function() { return /* binding */ restfulLogin; }\n/* harmony export */ });\n/* harmony import */ var umi_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! umi-request */ \"./node_modules/umi-request/dist/index.esm.js\");\n\n//请求拦截器\n// request.interceptors.request.use((url, options) => {\n//     return {\n//       url,\n//       options,\n//     };\n// });\n//响应拦截器\numi_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].interceptors.response.use(async (response)=>{\n    const data = await response.clone().json();\n    console.log(data);\n    return response;\n});\n//  测试接口 POST /api/ping\nasync function ping(// body: API.CorpContractInfoDTO_,\noptions) {\n    return (0,umi_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/ping\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        //   data: body,\n        ...options || {}\n    });\n}\n//  登录接口 POST /user/login\nasync function qryLogin(params, options) {\n    const { username , password  } = params;\n    return (0,umi_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/user/login\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        params,\n        //   data: body,\n        ...options || {}\n    });\n}\n//  登录接口restful POST /user/login\nasync function restfulLogin(params, options) {\n    const { username , password  } = params;\n    return (0,umi_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/user/login/\".concat(username, \"/\").concat(password), {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        // params,\n        //   data: body,\n        ...options || {}\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9yZXF1ZXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFFbEMsT0FBTztBQUNQLHVEQUF1RDtBQUN2RCxlQUFlO0FBQ2YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsTUFBTTtBQUVOLE9BQU87QUFDUEEsNkVBQWlDLENBQUMsT0FBT0UsV0FBYTtJQUNwRCxNQUFNRSxPQUFPLE1BQU1GLFNBQVNHLEtBQUssR0FBR0MsSUFBSTtJQUN4Q0MsUUFBUUMsR0FBRyxDQUFDSjtJQUNaLE9BQU9GO0FBQ1Q7QUFDQSx1QkFBdUI7QUFDaEIsZUFBZU8sS0FDcEIsa0NBQWtDO0FBQ2xDQyxPQUFnQyxFQUNoQztJQUNBLE9BQU9WLHVEQUFPQSxDQUFhLGFBQWE7UUFDdENXLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBLGdCQUFnQjtRQUNoQixHQUFJRixXQUFXLENBQUMsQ0FBQztJQUNuQjtBQUNGLENBQUM7QUFDRCx5QkFBeUI7QUFDbEIsZUFBZUcsU0FDcEJDLE1BQThCLEVBQzlCSixPQUFnQyxFQUNoQztJQUNBLE1BQU0sRUFBRUssU0FBUSxFQUFFQyxTQUFRLEVBQUUsR0FBR0Y7SUFDL0IsT0FBT2QsdURBQU9BLENBQWMsbUJBQWtCO1FBQzVDVyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUU7UUFDQSxnQkFBZ0I7UUFDaEIsR0FBSUosV0FBVyxDQUFDLENBQUM7SUFDbkI7QUFDRixDQUFDO0FBQ0QsZ0NBQWdDO0FBQ3pCLGVBQWVPLGFBQ3BCSCxNQUE4QixFQUM5QkosT0FBZ0MsRUFDaEM7SUFDQSxNQUFNLEVBQUVLLFNBQVEsRUFBRUMsU0FBUSxFQUFFLEdBQUdGO0lBQy9CLE9BQU9kLHVEQUFPQSxDQUFhLG1CQUErQmdCLE9BQVpELFVBQVMsS0FBWSxPQUFUQyxXQUFZO1FBQ3BFTCxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQSxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLEdBQUlGLFdBQVcsQ0FBQyxDQUFDO0lBQ25CO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9yZXF1ZXN0LnRzPzQzOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSBcInVtaS1yZXF1ZXN0XCI7XG5cbi8v6K+35rGC5oum5oiq5ZmoXG4vLyByZXF1ZXN0LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgodXJsLCBvcHRpb25zKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHVybCxcbi8vICAgICAgIG9wdGlvbnMsXG4vLyAgICAgfTtcbi8vIH0pO1xuXG4vL+WTjeW6lOaLpuaIquWZqFxucmVxdWVzdC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59KTtcbi8vICDmtYvor5XmjqXlj6MgUE9TVCAvYXBpL3BpbmdcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5nKFxuICAvLyBib2R5OiBBUEkuQ29ycENvbnRyYWN0SW5mb0RUT18sXG4gIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4pIHtcbiAgcmV0dXJuIHJlcXVlc3Q8QVBJLlJlc3VsdD4oXCIvYXBpL3BpbmdcIiwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIC8vICAgZGF0YTogYm9keSxcbiAgICAuLi4ob3B0aW9ucyB8fCB7fSksXG4gIH0pO1xufVxuLy8gIOeZu+W9leaOpeWPoyBQT1NUIC91c2VyL2xvZ2luXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXJ5TG9naW4oXG4gIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikge1xuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcGFyYW1zO1xuICByZXR1cm4gcmVxdWVzdDxBUEkuUmVzdWx0PihgL2FwaS91c2VyL2xvZ2luYCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIHBhcmFtcyxcbiAgICAvLyAgIGRhdGE6IGJvZHksXG4gICAgLi4uKG9wdGlvbnMgfHwge30pLFxuICB9KTtcbn1cbi8vICDnmbvlvZXmjqXlj6NyZXN0ZnVsIFBPU1QgL3VzZXIvbG9naW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXN0ZnVsTG9naW4oXG4gIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikge1xuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcGFyYW1zO1xuICByZXR1cm4gcmVxdWVzdDxBUEkuUmVzdWx0PihgL2FwaS91c2VyL2xvZ2luLyR7dXNlcm5hbWV9LyR7cGFzc3dvcmR9YCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIC8vIHBhcmFtcyxcbiAgICAvLyAgIGRhdGE6IGJvZHksXG4gICAgLi4uKG9wdGlvbnMgfHwge30pLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJkYXRhIiwiY2xvbmUiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInBpbmciLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsInFyeUxvZ2luIiwicGFyYW1zIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlc3RmdWxMb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/request.ts\n"));

/***/ })

});
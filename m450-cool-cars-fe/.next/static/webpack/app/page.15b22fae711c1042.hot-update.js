"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_carform_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/carform/page */ \"(app-pages-browser)/./src/app/carform/page.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [cars, setCars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function buttonHandler() {\n        fetch(\"http://localhost:8080/cars\").then((response)=>response.json()).then((data)=>setCars(data));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"My Frontend - The very beginning\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: buttonHandler,\n                children: \"load cars\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: cars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: car.brand + \" \" + car.model + \" (\" + car.horsePower + \")\"\n                    }, car.id, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            \"Brand\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"asc\",\n                                        children: \"Aufsteigend\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"desc\",\n                                        children: \"Absteigend\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/carform\",\n                children: \"add a new car\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"SbbgPvtmlEuAK5fVh8Mwc2/uV5Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUrQjtBQUNVO0FBQ1o7QUFHZCxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkMsU0FBU007UUFDUEMsTUFBTSw4QkFDSEMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVFOLFFBQVFNO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNGLDhEQUFDQztnQkFBT0MsU0FBU1Y7MEJBQWU7Ozs7OzswQkFDaEMsOERBQUNXOzs7OzswQkFDRCw4REFBQ0M7MEJBQ0dkLEtBQUtlLEdBQUcsQ0FBQ0MsQ0FBQUEsb0JBQ1QsOERBQUNDO2tDQUNJRCxJQUFJRSxLQUFLLEdBQUcsTUFBTUYsSUFBSUcsS0FBSyxHQUFHLE9BQU9ILElBQUlJLFVBQVUsR0FBRzt1QkFEbERKLElBQUlLLEVBQUU7Ozs7Ozs7Ozs7MEJBS25CLDhEQUFDQzswQkFDQyw0RUFBQ0M7OEJBQ0MsNEVBQUNDOzs0QkFBRzswQ0FFRiw4REFBQ0M7O2tEQUNDLDhEQUFDQzt3Q0FBT0MsT0FBTTtrREFBTTs7Ozs7O2tEQUNwQiw4REFBQ0Q7d0NBQU9DLE9BQU07a0RBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzdCLDhEQUFDN0IsaURBQUlBO2dCQUFDOEIsTUFBSzswQkFBVzs7Ozs7Ozs7Ozs7O0FBRzlCO0dBbkN3QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhckZvcm0gZnJvbSBcIkAvYXBwL2NhcmZvcm0vcGFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbY2Fycywgc2V0Q2Fyc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgZnVuY3Rpb24gYnV0dG9uSGFuZGxlcigpIHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NhcnNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHNldENhcnMoZGF0YSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPGgxPk15IEZyb250ZW5kIC0gVGhlIHZlcnkgYmVnaW5uaW5nPC9oMT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J1dHRvbkhhbmRsZXJ9PmxvYWQgY2FyczwvYnV0dG9uPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgeyBjYXJzLm1hcChjYXIgPT5cclxuICAgICAgICAgICAgPGxpIGtleT17Y2FyLmlkfT5cclxuICAgICAgICAgICAgICAgIHtjYXIuYnJhbmQgKyBcIiBcIiArIGNhci5tb2RlbCArIFwiIChcIiArIGNhci5ob3JzZVBvd2VyICsgXCIpXCJ9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgQnJhbmRcclxuICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFzY1wiPkF1ZnN0ZWlnZW5kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVzY1wiPkFic3RlaWdlbmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NhcmZvcm1cIj5hZGQgYSBuZXcgY2FyPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhckZvcm0iLCJMaW5rIiwiSG9tZSIsImNhcnMiLCJzZXRDYXJzIiwiYnV0dG9uSGFuZGxlciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsInVsIiwibWFwIiwiY2FyIiwibGkiLCJicmFuZCIsIm1vZGVsIiwiaG9yc2VQb3dlciIsImlkIiwidGFibGUiLCJ0aGVhZCIsInRyIiwic2VsZWN0Iiwib3B0aW9uIiwidmFsdWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
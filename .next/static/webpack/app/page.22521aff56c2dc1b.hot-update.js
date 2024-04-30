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

/***/ "(app-pages-browser)/./src/components/deleteDialog.tsx":
/*!*****************************************!*\
  !*** ./src/components/deleteDialog.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteDialog: function() { return /* binding */ DeleteDialog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n\n\n\n\nfunction DeleteDialog(param) {\n    let { _id, name } = param;\n    const deleteTodo = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/api/todos/\".concat(_id));\n        toast({\n            title: \"todo has been deleted\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"destructive\",\n                    children: \"delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                className: \"sm:max-w-[425px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                children: \"Delete Todo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogDescription, {\n                                children: [\n                                    \"Are you sure to want delete the\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold uppercase text-black\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" Todo ?\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogFooter, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"submit\",\n                                    variant: \"destructive\",\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = DeleteDialog;\nvar _c;\n$RefreshReg$(_c, \"DeleteDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZURpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ1c7QUFVaEI7QUFFZCxTQUFTVSxhQUFhLEtBQWtCO1FBQWxCLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFPLEdBQWxCO0lBQzNCLE1BQU1DLGFBQWE7UUFDakJiLDZDQUFLQSxDQUFDYyxNQUFNLENBQUMsY0FBa0IsT0FBSkg7UUFDM0JJLE1BQU07WUFDSkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2QsOENBQU1BOzswQkFDTCw4REFBQ08scURBQWFBO2dCQUFDUSxPQUFPOzBCQUNwQiw0RUFBQ2hCLDhDQUFNQTtvQkFBQ2lCLFNBQVE7OEJBQWM7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ2QscURBQWFBO2dCQUFDZSxXQUFVOztrQ0FDdkIsOERBQUNaLG9EQUFZQTs7MENBQ1gsOERBQUNDLG1EQUFXQTswQ0FBQzs7Ozs7OzBDQUNiLDhEQUFDSCx5REFBaUJBOztvQ0FBQztvQ0FDZTtrREFDaEMsOERBQUNlO3dDQUFLRCxXQUFVO2tEQUFrQ1A7Ozs7OztvQ0FBWTs7Ozs7Ozs7Ozs7OztrQ0FLbEUsOERBQUNOLG9EQUFZQTs7MENBQ1gsOERBQUNILG1EQUFXQTtnQ0FBQ2MsT0FBTzswQ0FDbEIsNEVBQUNoQiw4Q0FBTUE7OENBQUM7Ozs7Ozs7Ozs7OzBDQUdWLDhEQUFDRSxtREFBV0E7Z0NBQUNjLE9BQU87MENBQ2xCLDRFQUFDaEIsOENBQU1BO29DQUFDb0IsTUFBSztvQ0FBU0gsU0FBUzs4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUQ7S0FyQ2dCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kZWxldGVEaWFsb2cudHN4PzA3OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi91aS9idXR0b25cIjtcclxuaW1wb3J0IHtcclxuICBEaWFsb2csXHJcbiAgRGlhbG9nQ2xvc2UsXHJcbiAgRGlhbG9nQ29udGVudCxcclxuICBEaWFsb2dEZXNjcmlwdGlvbixcclxuICBEaWFsb2dGb290ZXIsXHJcbiAgRGlhbG9nSGVhZGVyLFxyXG4gIERpYWxvZ1RpdGxlLFxyXG4gIERpYWxvZ1RyaWdnZXIsXHJcbn0gZnJvbSBcIi4vdWkvZGlhbG9nXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlRGlhbG9nKHsgX2lkLCBuYW1lIH06IGFueSkge1xyXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoKSA9PiB7XHJcbiAgICBheGlvcy5kZWxldGUoYC9hcGkvdG9kb3MvJHtfaWR9YCk7XHJcbiAgICB0b2FzdCh7XHJcbiAgICAgIHRpdGxlOiBcInRvZG8gaGFzIGJlZW4gZGVsZXRlZFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2c+XHJcbiAgICAgIDxEaWFsb2dUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIj5kZWxldGU8L0J1dHRvbj5cclxuICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxyXG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJzbTptYXgtdy1bNDI1cHhdXCI+XHJcbiAgICAgICAgPERpYWxvZ0hlYWRlcj5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZT5EZWxldGUgVG9kbzwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB0byB3YW50IGRlbGV0ZSB0aGV7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ibGFja1wiPntuYW1lfTwvc3Bhbj4gVG9kb1xyXG4gICAgICAgICAgICA/XHJcbiAgICAgICAgICA8L0RpYWxvZ0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvRGlhbG9nSGVhZGVyPlxyXG5cclxuICAgICAgICA8RGlhbG9nRm9vdGVyPlxyXG4gICAgICAgICAgPERpYWxvZ0Nsb3NlIGFzQ2hpbGQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0Nsb3NlPlxyXG5cclxuICAgICAgICAgIDxEaWFsb2dDbG9zZSBhc0NoaWxkPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PXtcImRlc3RydWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRGlhbG9nQ2xvc2U+XHJcbiAgICAgICAgPC9EaWFsb2dGb290ZXI+XHJcbiAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQ2xvc2UiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJEZWxldGVEaWFsb2ciLCJfaWQiLCJuYW1lIiwiZGVsZXRlVG9kbyIsImRlbGV0ZSIsInRvYXN0IiwidGl0bGUiLCJhc0NoaWxkIiwidmFyaWFudCIsImNsYXNzTmFtZSIsInNwYW4iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/deleteDialog.tsx\n"));

/***/ })

});
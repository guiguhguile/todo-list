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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteDialog: function() { return /* binding */ DeleteDialog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DeleteDialog(param) {\n    let { _id, name } = param;\n    _s();\n    const { toast } = (0,_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const deleteTodo = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"/api/todos/\".concat(_id));\n        toast({\n            title: \"todo has been deleted\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"destructive\",\n                    children: \"delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                className: \"sm:max-w-[425px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                children: \"Delete Todo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogDescription, {\n                                children: [\n                                    \"Are you sure to want delete the\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold uppercase text-black\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" Todo ?\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogFooter, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    onClick: deleteTodo,\n                                    variant: \"destructive\",\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\deleteDialog.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(DeleteDialog, \"XbQoRqPDPo6PJEzRId7w4FMisDk=\", false, function() {\n    return [\n        _ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = DeleteDialog;\nvar _c;\n$RefreshReg$(_c, \"DeleteDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZURpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVztBQVVoQjtBQUNxQjtBQUVuQyxTQUFTVyxhQUFhLEtBQWtCO1FBQWxCLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFPLEdBQWxCOztJQUMzQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHSix1REFBUUE7SUFFMUIsTUFBTUssYUFBYTtRQUNqQmYsNkNBQUtBLENBQUNnQixNQUFNLENBQUMsY0FBa0IsT0FBSko7UUFDM0JFLE1BQU07WUFDSkcsT0FBTztRQUNUO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2YsOENBQU1BOzswQkFDTCw4REFBQ08scURBQWFBO2dCQUFDUyxPQUFPOzBCQUNwQiw0RUFBQ2pCLDhDQUFNQTtvQkFBQ2tCLFNBQVE7OEJBQWM7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ2YscURBQWFBO2dCQUFDZ0IsV0FBVTs7a0NBQ3ZCLDhEQUFDYixvREFBWUE7OzBDQUNYLDhEQUFDQyxtREFBV0E7MENBQUM7Ozs7OzswQ0FDYiw4REFBQ0gseURBQWlCQTs7b0NBQUM7b0NBQ2U7a0RBQ2hDLDhEQUFDZ0I7d0NBQUtELFdBQVU7a0RBQWtDUDs7Ozs7O29DQUFZOzs7Ozs7Ozs7Ozs7O2tDQUtsRSw4REFBQ1Asb0RBQVlBOzswQ0FDWCw4REFBQ0gsbURBQVdBO2dDQUFDZSxPQUFPOzBDQUNsQiw0RUFBQ2pCLDhDQUFNQTs4Q0FBQzs7Ozs7Ozs7Ozs7MENBR1YsOERBQUNFLG1EQUFXQTtnQ0FBQ2UsT0FBTzswQ0FDbEIsNEVBQUNqQiw4Q0FBTUE7b0NBQUNxQixTQUFTUDtvQ0FBWUksU0FBUzs4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakU7R0F2Q2dCUjs7UUFDSUQsbURBQVFBOzs7S0FEWkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGVsZXRlRGlhbG9nLnRzeD8wNzkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ0Nsb3NlLFxyXG4gIERpYWxvZ0NvbnRlbnQsXHJcbiAgRGlhbG9nRGVzY3JpcHRpb24sXHJcbiAgRGlhbG9nRm9vdGVyLFxyXG4gIERpYWxvZ0hlYWRlcixcclxuICBEaWFsb2dUaXRsZSxcclxuICBEaWFsb2dUcmlnZ2VyLFxyXG59IGZyb20gXCIuL3VpL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCIuL3VpL3VzZS10b2FzdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZURpYWxvZyh7IF9pZCwgbmFtZSB9OiBhbnkpIHtcclxuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xyXG5cclxuICBjb25zdCBkZWxldGVUb2RvID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZGVsZXRlKGAvYXBpL3RvZG9zLyR7X2lkfWApO1xyXG4gICAgdG9hc3Qoe1xyXG4gICAgICB0aXRsZTogXCJ0b2RvIGhhcyBiZWVuIGRlbGV0ZWRcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGlhbG9nPlxyXG4gICAgICA8RGlhbG9nVHJpZ2dlciBhc0NoaWxkPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCI+ZGVsZXRlPC9CdXR0b24+XHJcbiAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cclxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwic206bWF4LXctWzQyNXB4XVwiPlxyXG4gICAgICAgIDxEaWFsb2dIZWFkZXI+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGU+RGVsZXRlIFRvZG88L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgPERpYWxvZ0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICBBcmUgeW91IHN1cmUgdG8gd2FudCBkZWxldGUgdGhle1wiIFwifVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtYmxhY2tcIj57bmFtZX08L3NwYW4+IFRvZG9cclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgPC9EaWFsb2dEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cclxuXHJcbiAgICAgICAgPERpYWxvZ0Zvb3Rlcj5cclxuICAgICAgICAgIDxEaWFsb2dDbG9zZSBhc0NoaWxkPlxyXG4gICAgICAgICAgICA8QnV0dG9uPkNhbmNlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9EaWFsb2dDbG9zZT5cclxuXHJcbiAgICAgICAgICA8RGlhbG9nQ2xvc2UgYXNDaGlsZD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtkZWxldGVUb2RvfSB2YXJpYW50PXtcImRlc3RydWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRGlhbG9nQ2xvc2U+XHJcbiAgICAgICAgPC9EaWFsb2dGb290ZXI+XHJcbiAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQ2xvc2UiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJ1c2VUb2FzdCIsIkRlbGV0ZURpYWxvZyIsIl9pZCIsIm5hbWUiLCJ0b2FzdCIsImRlbGV0ZVRvZG8iLCJkZWxldGUiLCJ0aXRsZSIsImFzQ2hpbGQiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/deleteDialog.tsx\n"));

/***/ })

});
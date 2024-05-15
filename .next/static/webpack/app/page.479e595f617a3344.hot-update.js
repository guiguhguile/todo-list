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

/***/ "(app-pages-browser)/./src/components/editForm.tsx":
/*!*************************************!*\
  !*** ./src/components/editForm.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditForm: function() { return /* binding */ EditForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _app_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/schema */ \"(app-pages-browser)/./src/app/schema.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ EditForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction EditForm(param) {\n    let { item } = param;\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__.zodResolver)(_app_schema__WEBPACK_IMPORTED_MODULE_4__.todoSchema)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"default\",\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogContent, {\n                className: \"sm:max-w-[425px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"space-y-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogHeader, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, {\n                                    children: \"Edit profile\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogDescription, {\n                                    children: \"Make changes to your profile here. Click save when you're done.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                type: \"text\",\n                                placeholder: \"Add todo...\",\n                                ...register(\"title\")\n                            }, void 0, false, {\n                                fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogFooter, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogClose, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"submit\",\n                                    children: \"Save changes\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(EditForm, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = EditForm;\nvar _c;\n$RefreshReg$(_c, \"EditForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2VkaXRGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBV3FCO0FBQ2dCO0FBQ0Y7QUFJTztBQUNZO0FBQ1o7QUFFbkMsU0FBU2EsU0FBUyxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQWtCLEdBQXhCOztJQUN2QixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFLEdBQUdKLHdEQUFPQSxDQUFDO1FBQ3pDSyxVQUFVTixvRUFBV0EsQ0FBQ0QsbURBQVVBO0lBQ2xDO0lBQ0EscUJBQ0UsOERBQUNWLDhDQUFNQTs7MEJBQ0wsOERBQUNPLHFEQUFhQTtnQkFBQ1csT0FBTzswQkFDcEIsNEVBQUNWLDhDQUFNQTtvQkFBQ1csU0FBUTs4QkFBVTs7Ozs7Ozs7Ozs7MEJBRTVCLDhEQUFDakIscURBQWFBO2dCQUFDa0IsV0FBVTswQkFDdkIsNEVBQUNDO29CQUFLRCxXQUFVOztzQ0FDZCw4REFBQ2Ysb0RBQVlBOzs4Q0FDWCw4REFBQ0MsbURBQVdBOzhDQUFDOzs7Ozs7OENBQ2IsOERBQUNILHlEQUFpQkE7OENBQUM7Ozs7Ozs7Ozs7OztzQ0FLckIsOERBQUNtQjtzQ0FDQyw0RUFBQ2IsNENBQUtBO2dDQUNKYyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNYLEdBQUdULFNBQVMsUUFBUTs7Ozs7Ozs7Ozs7c0NBSXpCLDhEQUFDWCxvREFBWUE7c0NBQ1gsNEVBQUNILG1EQUFXQTtnQ0FBQ2lCLE9BQU87MENBQ2xCLDRFQUFDViw4Q0FBTUE7b0NBQUNlLE1BQUs7OENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQztHQW5DZ0JWOztRQUNxQkQsb0RBQU9BOzs7S0FENUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2VkaXRGb3JtLnRzeD84YzVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ0Nsb3NlLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dEZXNjcmlwdGlvbixcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dUcmlnZ2VyLFxufSBmcm9tIFwiLi91aS9kaWFsb2dcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi91aS9pbnB1dFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCJAL2FwcC90eXBlc1wiO1xuaW1wb3J0IHsgVXBzZXJ0Rm9ybSB9IGZyb20gXCIuL3Vwc2VydC1mb3JtXCI7XG5pbXBvcnQgeyB1cHNlcnRUb2RvIH0gZnJvbSBcIkAvYXBwL2FjdGlvbnNcIjtcbmltcG9ydCB7IHRvZG9TY2hlbWEgfSBmcm9tIFwiQC9hcHAvc2NoZW1hXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRGb3JtKHsgaXRlbSB9OiB7IGl0ZW06IFRvZG8gfSkge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcih0b2RvU2NoZW1hKSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPERpYWxvZz5cbiAgICAgIDxEaWFsb2dUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlZmF1bHRcIj5FZGl0PC9CdXR0b24+XG4gICAgICA8L0RpYWxvZ1RyaWdnZXI+XG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJzbTptYXgtdy1bNDI1cHhdXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgIDxEaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGU+RWRpdCBwcm9maWxlPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgIDxEaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgTWFrZSBjaGFuZ2VzIHRvIHlvdXIgcHJvZmlsZSBoZXJlLiBDbGljayBzYXZlIHdoZW4geW91J3JlIGRvbmUuXG4gICAgICAgICAgICA8L0RpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHRvZG8uLi5cIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ0aXRsZVwiKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgICAgPERpYWxvZ0Nsb3NlIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgY2hhbmdlczwvQnV0dG9uPlxuICAgICAgICAgICAgPC9EaWFsb2dDbG9zZT5cbiAgICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgIDwvRGlhbG9nPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkRpYWxvZyIsIkRpYWxvZ0Nsb3NlIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0Rlc2NyaXB0aW9uIiwiRGlhbG9nRm9vdGVyIiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dUcmlnZ2VyIiwiQnV0dG9uIiwiSW5wdXQiLCJ0b2RvU2NoZW1hIiwiem9kUmVzb2x2ZXIiLCJ1c2VGb3JtIiwiRWRpdEZvcm0iLCJpdGVtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNvbHZlciIsImFzQ2hpbGQiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwiZm9ybSIsImRpdiIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/editForm.tsx\n"));

/***/ })

});
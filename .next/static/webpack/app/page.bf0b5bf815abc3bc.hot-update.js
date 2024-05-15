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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditForm: function() { return /* binding */ EditForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/actions */ \"(app-pages-browser)/./src/app/actions.ts\");\n/* harmony import */ var _app_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/schema */ \"(app-pages-browser)/./src/app/schema.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ EditForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction EditForm(param) {\n    let { item } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__.zodResolver)(_app_schema__WEBPACK_IMPORTED_MODULE_5__.todoSchema)\n    });\n    const onSubmit = async (data)=>{\n        await (0,_app_actions__WEBPACK_IMPORTED_MODULE_4__.upsertTodo)(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"default\",\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogContent, {\n                className: \"sm:max-w-[425px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"space-y-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogHeader, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, {\n                                    children: \"Edit profile\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogDescription, {\n                                    children: \"Make changes to your profile here. Click save when you're done.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                type: \"text\",\n                                placeholder: \"Add todo...\",\n                                ...register(\"title\"),\n                                value: item.title\n                            }, void 0, false, {\n                                fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogFooter, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogClose, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"submit\",\n                                    children: \"Save changes\"\n                                }, void 0, false, {\n                                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/guiguhguile/Documents/javascript/React/Projects/todo-list/src/components/editForm.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(EditForm, \"AUoAFjrPrwihd40NMXoMWCHpp6Y=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm\n    ];\n});\n_c = EditForm;\nvar _c;\n$RefreshReg$(_c, \"EditForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2VkaXRGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBV3FCO0FBQ2dCO0FBQ0Y7QUFHUTtBQUNEO0FBQ1k7QUFDWjtBQUNFO0FBRXJDLFNBQVNlLFNBQVMsS0FBd0I7UUFBeEIsRUFBRUMsSUFBSSxFQUFrQixHQUF4Qjs7SUFDdkIsTUFBTUMsU0FBU0gsMERBQVNBO0lBRXhCLE1BQU0sRUFBRUksUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR04sd0RBQU9BLENBQUM7UUFDekNPLFVBQVVSLG9FQUFXQSxDQUFDRCxtREFBVUE7SUFDbEM7SUFFQSxNQUFNVSxXQUFXLE9BQU9DO1FBQ3RCLE1BQU1aLHdEQUFVQSxDQUFDWTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDdEIsOENBQU1BOzswQkFDTCw4REFBQ08scURBQWFBO2dCQUFDZ0IsT0FBTzswQkFDcEIsNEVBQUNmLDhDQUFNQTtvQkFBQ2dCLFNBQVE7OEJBQVU7Ozs7Ozs7Ozs7OzBCQUU1Qiw4REFBQ3RCLHFEQUFhQTtnQkFBQ3VCLFdBQVU7MEJBQ3ZCLDRFQUFDQztvQkFBS0QsV0FBVTs7c0NBQ2QsOERBQUNwQixvREFBWUE7OzhDQUNYLDhEQUFDQyxtREFBV0E7OENBQUM7Ozs7Ozs4Q0FDYiw4REFBQ0gseURBQWlCQTs4Q0FBQzs7Ozs7Ozs7Ozs7O3NDQUtyQiw4REFBQ3dCO3NDQUNDLDRFQUFDbEIsNENBQUtBO2dDQUNKbUIsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWCxHQUFHWCxTQUFTLFFBQVE7Z0NBQ3JCWSxPQUFPZCxLQUFLZSxLQUFLOzs7Ozs7Ozs7OztzQ0FJckIsOERBQUMzQixvREFBWUE7c0NBQ1gsNEVBQUNILG1EQUFXQTtnQ0FBQ3NCLE9BQU87MENBQ2xCLDRFQUFDZiw4Q0FBTUE7b0NBQUNvQixNQUFLOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEM7R0EzQ2dCYjs7UUFDQ0Qsc0RBQVNBO1FBRVdELG9EQUFPQTs7O0tBSDVCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9lZGl0Rm9ybS50c3g/OGM1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDbG9zZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRGVzY3JpcHRpb24sXG4gIERpYWxvZ0Zvb3RlcixcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nVHJpZ2dlcixcbn0gZnJvbSBcIi4vdWkvZGlhbG9nXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vdWkvaW5wdXRcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiQC9hcHAvdHlwZXNcIjtcbmltcG9ydCB7IFVwc2VydEZvcm0gfSBmcm9tIFwiLi91cHNlcnQtZm9ybVwiO1xuaW1wb3J0IHsgdXBzZXJ0VG9kbyB9IGZyb20gXCJAL2FwcC9hY3Rpb25zXCI7XG5pbXBvcnQgeyB0b2RvU2NoZW1hIH0gZnJvbSBcIkAvYXBwL3NjaGVtYVwiO1xuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0Rm9ybSh7IGl0ZW0gfTogeyBpdGVtOiBUb2RvIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIodG9kb1NjaGVtYSksXG4gIH0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGE6IGFueSkgPT4ge1xuICAgIGF3YWl0IHVwc2VydFRvZG8oZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nPlxuICAgICAgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVmYXVsdFwiPkVkaXQ8L0J1dHRvbj5cbiAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cbiAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cInNtOm1heC13LVs0MjVweF1cIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlcj5cbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5FZGl0IHByb2ZpbGU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgPERpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICBNYWtlIGNoYW5nZXMgdG8geW91ciBwcm9maWxlIGhlcmUuIENsaWNrIHNhdmUgd2hlbiB5b3UncmUgZG9uZS5cbiAgICAgICAgICAgIDwvRGlhbG9nRGVzY3JpcHRpb24+XG4gICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgdG9kby4uLlwiXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInRpdGxlXCIpfVxuICAgICAgICAgICAgICB2YWx1ZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgICAgPERpYWxvZ0Nsb3NlIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgY2hhbmdlczwvQnV0dG9uPlxuICAgICAgICAgICAgPC9EaWFsb2dDbG9zZT5cbiAgICAgICAgICA8L0RpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgIDwvRGlhbG9nPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkRpYWxvZyIsIkRpYWxvZ0Nsb3NlIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0Rlc2NyaXB0aW9uIiwiRGlhbG9nRm9vdGVyIiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dUcmlnZ2VyIiwiQnV0dG9uIiwiSW5wdXQiLCJ1cHNlcnRUb2RvIiwidG9kb1NjaGVtYSIsInpvZFJlc29sdmVyIiwidXNlRm9ybSIsInVzZVJvdXRlciIsIkVkaXRGb3JtIiwiaXRlbSIsInJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzb2x2ZXIiLCJvblN1Ym1pdCIsImRhdGEiLCJhc0NoaWxkIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImZvcm0iLCJkaXYiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/editForm.tsx\n"));

/***/ })

});
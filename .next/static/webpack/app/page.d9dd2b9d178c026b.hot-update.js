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

/***/ "(app-pages-browser)/./src/components/heading.tsx":
/*!************************************!*\
  !*** ./src/components/heading.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Heading: function() { return /* binding */ Heading; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _ui_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ Heading auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Heading() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { toast } = (0,_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const handleTodo = async (event)=>{\n        const data = {\n            name\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/todos\", {\n            ...data\n        });\n        toast({\n            title: \"todo has been created \"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-between items-center sborder-b-2 border-gray-300 p-3 mb-[50px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-gray-500 text-4xl font-bold\",\n                children: \"Todo list\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"default\",\n                                children: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                            className: \"sm:max-w-[425px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleTodo,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                                children: \"Edit profile\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogDescription, {\n                                                children: \"Make changes to your profile here. Click save when you're done.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid gap-4 py-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-col gap-2\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        children: \"New Todo\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                        placeholder: \"Add todo... \",\n                                                        className: \"w-full\",\n                                                        onChange: (event)=>setName(event.target.value),\n                                                        value: name\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"grid grid-cols-4 items-center gap-4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogFooter, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                                            asChild: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                type: \"submit\",\n                                                children: \"Save changes\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\heading.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Heading, \"sl7xxQm+tOx17oE/1wJ98+NhRU8=\", false, function() {\n    return [\n        _ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast\n    ];\n});\n_c = Heading;\nvar _c;\n$RefreshReg$(_c, \"Heading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXdDO0FBVVI7QUFDSztBQUNGO0FBQ1Q7QUFDZ0I7QUFFbkMsU0FBU2M7O0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU0sRUFBRWdCLEtBQUssRUFBRSxHQUFHSix1REFBUUE7SUFFMUIsTUFBTUssYUFBYSxPQUFPQztRQUN4QixNQUFNQyxPQUFPO1lBQ1hMO1FBQ0Y7UUFFQSxNQUFNSCw2Q0FBS0EsQ0FBQ1MsSUFBSSxDQUFDLGNBQWM7WUFBRSxHQUFHRCxJQUFJO1FBQUM7UUFDekNILE1BQU07WUFDSkssT0FBTztRQUNUO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtQzs7Ozs7OzBCQUNqRCw4REFBQ0Q7MEJBQ0MsNEVBQUNyQix5REFBTUE7O3NDQUNMLDhEQUFDTSxnRUFBYUE7NEJBQUNrQixPQUFPO3NDQUNwQiw0RUFBQ2hCLDhDQUFNQTtnQ0FBQ2lCLFNBQVE7MENBQVU7Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ3hCLGdFQUFhQTs0QkFBQ3FCLFdBQVU7c0NBQ3ZCLDRFQUFDSTtnQ0FBS0MsVUFBVVg7O2tEQUNkLDhEQUFDWiwrREFBWUE7OzBEQUNYLDhEQUFDQyw4REFBV0E7MERBQUM7Ozs7OzswREFDYiw4REFBQ0gsb0VBQWlCQTswREFBQzs7Ozs7Ozs7Ozs7O2tEQUtyQiw4REFBQ21CO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDTTtrRUFBTTs7Ozs7O2tFQUNQLDhEQUFDbkIsNENBQUtBO3dEQUNKb0IsYUFBWTt3REFDWlAsV0FBVTt3REFDVlEsVUFBVSxDQUFDYixRQUFVSCxRQUFRRyxNQUFNYyxNQUFNLENBQUNDLEtBQUs7d0RBQy9DQSxPQUFPbkI7Ozs7Ozs7Ozs7OzswREFHWCw4REFBQ1E7Z0RBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztrREFFakIsOERBQUNuQiwrREFBWUE7a0RBQ1gsNEVBQUNJLDhEQUFXQTs0Q0FBQ2lCLE9BQU87c0RBQ2xCLDRFQUFDaEIsOENBQU1BO2dEQUFDeUIsTUFBSzswREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeEM7R0F4RGdCckI7O1FBR0lELG1EQUFRQTs7O0tBSFpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRpbmcudHN4P2VmOWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dEZXNjcmlwdGlvbixcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dUcmlnZ2VyLFxuICBEaWFsb2dDbG9zZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi91aS9pbnB1dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiLi91aS91c2UtdG9hc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRpbmcoKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG5cbiAgY29uc3QgaGFuZGxlVG9kbyA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG5hbWUsXG4gICAgfTtcblxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3RvZG9zXCIsIHsgLi4uZGF0YSB9KTtcbiAgICB0b2FzdCh7XG4gICAgICB0aXRsZTogXCJ0b2RvIGhhcyBiZWVuIGNyZWF0ZWQgXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc2JvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIHAtMyBtYi1bNTBweF1cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtNHhsIGZvbnQtYm9sZFwiPlRvZG8gbGlzdDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8RGlhbG9nPlxuICAgICAgICAgIDxEaWFsb2dUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZWZhdWx0XCI+QWRkIFRvZG88L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ1RyaWdnZXI+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwic206bWF4LXctWzQyNXB4XVwiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVRvZG99PlxuICAgICAgICAgICAgICA8RGlhbG9nSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5FZGl0IHByb2ZpbGU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgIDxEaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIE1ha2UgY2hhbmdlcyB0byB5b3VyIHByb2ZpbGUgaGVyZS4gQ2xpY2sgc2F2ZSB3aGVuIHlvdSdyZVxuICAgICAgICAgICAgICAgICAgZG9uZS5cbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IHB5LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5OZXcgVG9kbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgdG9kby4uLiBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgaXRlbXMtY2VudGVyIGdhcC00XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxEaWFsb2dDbG9zZSBhc0NoaWxkPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBjaGFuZ2VzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDbG9zZT5cbiAgICAgICAgICAgICAgPC9EaWFsb2dGb290ZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJEaWFsb2dDbG9zZSIsIkJ1dHRvbiIsIklucHV0IiwiYXhpb3MiLCJ1c2VUb2FzdCIsIkhlYWRpbmciLCJuYW1lIiwic2V0TmFtZSIsInRvYXN0IiwiaGFuZGxlVG9kbyIsImV2ZW50IiwiZGF0YSIsInBvc3QiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYXNDaGlsZCIsInZhcmlhbnQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/heading.tsx\n"));

/***/ })

});
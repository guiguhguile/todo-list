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

/***/ "(app-pages-browser)/./src/components/todo.tsx":
/*!*********************************!*\
  !*** ./src/components/todo.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: function() { return /* binding */ Todo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _editForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editForm */ \"(app-pages-browser)/./src/components/editForm.tsx\");\n/* harmony import */ var _deleteDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteDialog */ \"(app-pages-browser)/./src/components/deleteDialog.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\n\n\n\nfunction Todo(param) {\n    let { name, _id, createdAt, updatedAt } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full border-2 border-gray-300 shadow-lg rounded-md p-6 flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col text-lg text-orange-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"uppercase text-gray-500\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\todo.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm\",\n                        children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.dateFormater)(new Date(createdAt))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\todo.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\todo.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_editForm__WEBPACK_IMPORTED_MODULE_1__.EditForm, {\n                        name: name,\n                        _id: _id,\n                        updatedAt: updatedAt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\todo.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deleteDialog__WEBPACK_IMPORTED_MODULE_2__.DeleteDialog, {\n                        name: name,\n                        _id: _id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\todo.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\todo.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\todo.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Todo;\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RvZG8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNzQztBQUVRO0FBQ0g7QUFFcEMsU0FBU0csS0FBSyxLQUEwQztRQUExQyxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVMsR0FBMUM7SUFDbkIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUEyQkw7Ozs7OztrQ0FDekMsOERBQUNPO3dCQUFLRixXQUFVO2tDQUFXUCx3REFBWUEsQ0FBQyxJQUFJVSxLQUFLTjs7Ozs7Ozs7Ozs7OzBCQUduRCw4REFBQ0U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVCwrQ0FBUUE7d0JBQUNJLE1BQU1BO3dCQUFNQyxLQUFLQTt3QkFBS0UsV0FBV0E7Ozs7OztrQ0FDM0MsOERBQUNOLHVEQUFZQTt3QkFBQ0csTUFBTUE7d0JBQU1DLEtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkM7S0FkZ0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RvZG8udHN4P2NjNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRvZG8gfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0lUb2RvXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtIH0gZnJvbSBcIi4vZWRpdEZvcm1cIjtcclxuXHJcbmltcG9ydCB7IERlbGV0ZURpYWxvZyB9IGZyb20gXCIuL2RlbGV0ZURpYWxvZ1wiO1xyXG5pbXBvcnQgeyBkYXRlRm9ybWF0ZXIgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2RvKHsgbmFtZSwgX2lkLCBjcmVhdGVkQXQsIHVwZGF0ZWRBdCB9OiBJVG9kbykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgc2hhZG93LWxnIHJvdW5kZWQtbWQgcC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1sZyB0ZXh0LW9yYW5nZS01MDBcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS01MDBcIj57bmFtZX08L2gxPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc21cIj57ZGF0ZUZvcm1hdGVyKG5ldyBEYXRlKGNyZWF0ZWRBdCkpfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTNcIj5cclxuICAgICAgICA8RWRpdEZvcm0gbmFtZT17bmFtZX0gX2lkPXtfaWR9IHVwZGF0ZWRBdD17dXBkYXRlZEF0fSAvPlxyXG4gICAgICAgIDxEZWxldGVEaWFsb2cgbmFtZT17bmFtZX0gX2lkPXtfaWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRWRpdEZvcm0iLCJEZWxldGVEaWFsb2ciLCJkYXRlRm9ybWF0ZXIiLCJUb2RvIiwibmFtZSIsIl9pZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsIkRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/todo.tsx\n"));

/***/ })

});
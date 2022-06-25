webpackHotUpdate_N_E("pages/signup",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/a1234/Documents/react-nodebird/front/components/LoginForm.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar LoginForm = function LoginForm() {\n  var onFinish = function onFinish(values) {\n    console.log(\"Success:\", values);\n  };\n\n  var onFinishFailed = function onFinishFailed(errorInfo) {\n    console.log(\"Failed:\", errorInfo);\n  };\n\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    name: \"basic\",\n    labelCol: {\n      span: 8\n    },\n    wrapperCol: {\n      span: 16\n    },\n    initialValues: {\n      remember: true\n    },\n    onFinish: onFinish,\n    onFinishFailed: onFinishFailed,\n    autoComplete: \"off\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    label: \"Username\",\n    name: \"username\",\n    rules: [{\n      required: true,\n      message: \"Please input your username!\"\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    label: \"Password\",\n    name: \"password\",\n    rules: [{\n      required: true,\n      message: \"Please input your password!\"\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].Password, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    name: \"remember\",\n    valuePropName: \"checked\",\n    wrapperCol: {\n      offset: 8,\n      span: 16\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, \"Remember me\")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    wrapperCol: {\n      offset: 8,\n      span: 16\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, \"Submit\")));\n};\n\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDM0OCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsInNwYW4iLCJyZW1lbWJlciIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07RUFDdEIsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0lBQzNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtFQUNELENBRkQ7O0VBSUEsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxTQUFELEVBQWU7SUFDcENILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJFLFNBQXZCO0VBQ0QsQ0FGRDs7RUFJQSxPQUNFLE1BQUMseUNBQUQ7SUFDRSxJQUFJLEVBQUMsT0FEUDtJQUVFLFFBQVEsRUFBRTtNQUNSQyxJQUFJLEVBQUU7SUFERSxDQUZaO0lBS0UsVUFBVSxFQUFFO01BQ1ZBLElBQUksRUFBRTtJQURJLENBTGQ7SUFRRSxhQUFhLEVBQUU7TUFDYkMsUUFBUSxFQUFFO0lBREcsQ0FSakI7SUFXRSxRQUFRLEVBQUVQLFFBWFo7SUFZRSxjQUFjLEVBQUVJLGNBWmxCO0lBYUUsWUFBWSxFQUFDLEtBYmY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQWVFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQ0UsS0FBSyxFQUFDLFVBRFI7SUFFRSxJQUFJLEVBQUMsVUFGUDtJQUdFLEtBQUssRUFBRSxDQUNMO01BQ0VJLFFBQVEsRUFBRSxJQURaO01BRUVDLE9BQU8sRUFBRTtJQUZYLENBREssQ0FIVDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBVUUsTUFBQywwQ0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBVkYsQ0FmRixFQTRCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtJQUNFLEtBQUssRUFBQyxVQURSO0lBRUUsSUFBSSxFQUFDLFVBRlA7SUFHRSxLQUFLLEVBQUUsQ0FDTDtNQUNFRCxRQUFRLEVBQUUsSUFEWjtNQUVFQyxPQUFPLEVBQUU7SUFGWCxDQURLLENBSFQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQVVFLE1BQUMsMENBQUQsQ0FBTyxRQUFQO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFWRixDQTVCRixFQXlDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtJQUNFLElBQUksRUFBQyxVQURQO0lBRUUsYUFBYSxFQUFDLFNBRmhCO0lBR0UsVUFBVSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSxDQURFO01BRVZKLElBQUksRUFBRTtJQUZJLENBSGQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQVFFLE1BQUMsNkNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxpQkFSRixDQXpDRixFQW9ERSxNQUFDLHlDQUFELENBQU0sSUFBTjtJQUNFLFVBQVUsRUFBRTtNQUNWSSxNQUFNLEVBQUUsQ0FERTtNQUVWSixJQUFJLEVBQUU7SUFGSSxDQURkO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FNRSxNQUFDLDJDQUFEO0lBQVEsSUFBSSxFQUFDLFNBQWI7SUFBdUIsUUFBUSxFQUFDLFFBQWhDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFORixDQXBERixDQURGO0FBaUVELENBMUVEOztLQUFNUCxTO0FBNEVTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzczpcIiwgdmFsdWVzKTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBuYW1lPVwiYmFzaWNcIlxuICAgICAgbGFiZWxDb2w9e3tcbiAgICAgICAgc3BhbjogOCxcbiAgICAgIH19XG4gICAgICB3cmFwcGVyQ29sPXt7XG4gICAgICAgIHNwYW46IDE2LFxuICAgICAgfX1cbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgcmVtZW1iZXI6IHRydWUsXG4gICAgICB9fVxuICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxuICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICA+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSFcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCFcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJyZW1lbWJlclwiXG4gICAgICAgIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCJcbiAgICAgICAgd3JhcHBlckNvbD17e1xuICAgICAgICAgIG9mZnNldDogOCxcbiAgICAgICAgICBzcGFuOiAxNixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIHdyYXBwZXJDb2w9e3tcbiAgICAgICAgICBvZmZzZXQ6IDgsXG4gICAgICAgICAgc3BhbjogMTYsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ })

})
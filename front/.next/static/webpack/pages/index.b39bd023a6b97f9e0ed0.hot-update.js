webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/a1234/Documents/react-nodebird/front/components/PostForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar PostForm = function PostForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      imagePaths = _useSelector.imagePaths;\n\n  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {});\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {}, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    style: {\n      margin: \"10px 0 20px\"\n    },\n    encType: \"multipart/form-data\",\n    onFinish: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea, {\n    value: text,\n    onChange: onChangeText,\n    maxLength: 140,\n    placeholder: \"\\uC5B4\\uB5A4 \\uC2E0\\uAE30\\uD55C \\uC77C\\uC774 \\uC788\\uC5C8\\uB098\\uC694 ?\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    hidden: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"\\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    style: {\n      \"float\": \"right\"\n    },\n    htmlType: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"\\uC9F9\\uC9F9\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, imagePaths.map(function (v) {\n    return __jsx(\"div\", {\n      key: v,\n      style: {\n        display: \"inline-block\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: v,\n      alt: v,\n      style: {\n        width: \"200px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }\n    }, \"\\uC81C\\uAC70\")));\n  })));\n};\n\n_s(PostForm, \"kYkhfqwCmPcTNICmvCIPx1tEsa0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcz83OWM1Il0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsIm9uQ2hhbmdlVGV4dCIsInVzZUNhbGxiYWNrIiwib25TdWJtaXQiLCJtYXJnaW4iLCJtYXAiLCJ2IiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFBQTs7RUFDckIsZ0JBQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7RUFBQSxJQUFPQyxJQUFQO0VBQUEsSUFBYUMsT0FBYjs7RUFDQSxtQkFBdUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQWxDO0VBQUEsSUFBUUMsVUFBUixnQkFBUUEsVUFBUjs7RUFFQSxJQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTSxDQUV0QyxDQUYrQixDQUFoQztFQUlBLElBQU1DLFFBQVEsR0FBR0QseURBQVcsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLEVBQVgsQ0FBNUI7RUFFQSxPQUNFLE1BQUMseUNBQUQ7SUFDRSxLQUFLLEVBQUU7TUFBRUUsTUFBTSxFQUFFO0lBQVYsQ0FEVDtJQUVFLE9BQU8sRUFBQyxxQkFGVjtJQUdFLFFBQVEsRUFBRUQsUUFIWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBS0UsTUFBQywwQ0FBRCxDQUFPLFFBQVA7SUFDRSxLQUFLLEVBQUVSLElBRFQ7SUFFRSxRQUFRLEVBQUVNLFlBRlo7SUFHRSxTQUFTLEVBQUUsR0FIYjtJQUlFLFdBQVcsRUFBQyx5RUFKZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBTEYsRUFXRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixRQUFRLE1BQTNCO0lBQTRCLE1BQU0sTUFBbEM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLEVBRUUsTUFBQywyQ0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJDQUZGLEVBR0UsTUFBQywyQ0FBRDtJQUFRLElBQUksRUFBQyxTQUFiO0lBQXVCLEtBQUssRUFBRTtNQUFFLFNBQU87SUFBVCxDQUE5QjtJQUFrRCxRQUFRLEVBQUMsUUFBM0Q7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxrQkFIRixDQVhGLEVBa0JFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR0QsVUFBVSxDQUFDSyxHQUFYLENBQWUsVUFBQ0MsQ0FBRDtJQUFBLE9BQ2Q7TUFBSyxHQUFHLEVBQUVBLENBQVY7TUFBYSxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFO01BQVgsQ0FBcEI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFO01BQUssR0FBRyxFQUFFRCxDQUFWO01BQWEsR0FBRyxFQUFFQSxDQUFsQjtNQUFxQixLQUFLLEVBQUU7UUFBRUUsS0FBSyxFQUFFO01BQVQsQ0FBNUI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQURGLEVBRUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLE1BQUMsMkNBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxrQkFERixDQUZGLENBRGM7RUFBQSxDQUFmLENBREgsQ0FsQkYsQ0FERjtBQStCRCxDQXpDRDs7R0FBTWYsUTtVQUVtQkksdUQ7OztLQUZuQkosUTtBQTJDU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgaW1hZ2VQYXRocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcblxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgXG4gIH0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge30sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fVxuICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgID5cbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cbiAgICAgICAgbWF4TGVuZ3RoPXsxNDB9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUID9cIlxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiAvPlxuICAgICAgICA8QnV0dG9uPuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICDsp7nsp7lcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Z9IGFsdD17dn0gc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiB9fSAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostForm.js\n");

/***/ })

})
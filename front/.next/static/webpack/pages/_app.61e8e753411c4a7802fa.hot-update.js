webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar initialState = {\n  user: {\n    isLoggedIn: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n  },\n  post: {\n    mainPosts: []\n  }\n};\nvar loginAction = function loginAction(data) {\n  return {\n    type: \"LOG_IN\",\n    data: data\n  };\n};\nvar logoutAction = function logoutAction() {\n  return {\n    type: \"LOG_OUT\"\n  };\n};\n\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]:\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case \"LOG_IN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: true,\n          user: action.data\n        })\n      });\n\n    case \"LOG_OUT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: false,\n          user: null\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanM/Y2U4ZSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJwb3N0IiwibWFpblBvc3RzIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFlBQVksR0FBRztFQUNuQkMsSUFBSSxFQUFFO0lBQ0pDLFVBQVUsRUFBRSxLQURSO0lBRUpELElBQUksRUFBRSxJQUZGO0lBR0pFLFVBQVUsRUFBRSxFQUhSO0lBSUpDLFNBQVMsRUFBRTtFQUpQLENBRGE7RUFPbkJDLElBQUksRUFBRTtJQUNKQyxTQUFTLEVBQUU7RUFEUDtBQVBhLENBQXJCO0FBWU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0VBQ25DLE9BQU87SUFDTEMsSUFBSSxFQUFFLFFBREQ7SUFFTEQsSUFBSSxFQUFKQTtFQUZLLENBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtFQUNoQyxPQUFPO0lBQ0xELElBQUksRUFBRTtFQURELENBQVA7QUFHRCxDQUpNOztBQU1QLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQWtDO0VBQUEsSUFBakNDLEtBQWlDLHVFQUF6QlosWUFBeUI7RUFBQSxJQUFYYSxNQUFXOztFQUNwRCxRQUFRQSxNQUFNLENBQUNKLElBQWY7SUFDRSxLQUFLSywwREFBTDtNQUNFLHVDQUFZRixLQUFaLEdBQXNCQyxNQUFNLENBQUNFLE9BQTdCOztJQUNGLEtBQUssUUFBTDtNQUNFLHVDQUNLSCxLQURMO1FBRUVYLElBQUksa0NBQ0NXLEtBQUssQ0FBQ1gsSUFEUDtVQUVGQyxVQUFVLEVBQUUsSUFGVjtVQUdGRCxJQUFJLEVBQUVZLE1BQU0sQ0FBQ0w7UUFIWDtNQUZOOztJQVFGLEtBQUssU0FBTDtNQUNFLHVDQUNLSSxLQURMO1FBRUVYLElBQUksa0NBQ0NXLEtBQUssQ0FBQ1gsSUFEUDtVQUVGQyxVQUFVLEVBQUUsS0FGVjtVQUdGRCxJQUFJLEVBQUU7UUFISjtNQUZOOztJQVFGO01BQ0UsT0FBT1csS0FBUDtFQXRCSjtBQXdCRCxDQXpCRDs7QUEyQmVELDBFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IHtcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsLFxuICAgIHNpZ25VcERhdGE6IHt9LFxuICAgIGxvZ2luRGF0YToge30sXG4gIH0sXG4gIHBvc3Q6IHtcbiAgICBtYWluUG9zdHM6IFtdLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkxPR19JTlwiLFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiTE9HX09VVFwiLFxuICB9O1xufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSBcIkxPR19JTlwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgXCJMT0dfT1VUXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

})
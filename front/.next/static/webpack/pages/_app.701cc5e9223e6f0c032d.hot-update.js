webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"모상빈\"\n    },\n    content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n    Images: [{\n      src: \"https://velog.velcdn.com/images/sangbin2/post/3d195f3d-7e5e-4e53-9879-ef2c97ba8107/image.png\"\n    }, {\n      src: \"https://velog.velcdn.com/images/sangbin2/post/3d195f3d-7e5e-4e53-9879-ef2c97ba8107/image.png\"\n    }, {\n      src: \"https://velog.velcdn.com/images/sangbin2/post/3d195f3d-7e5e-4e53-9879-ef2c97ba8107/image.png\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"다현\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      User: {\n        nickname: \"콩이\"\n      },\n      content: \"왈왈왈왈왈왈\"\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nvar ADD_POST = \"ADD_POST\";\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsU0FBUyxFQUFFLENBQ1Q7SUFDRUMsRUFBRSxFQUFFLENBRE47SUFFRUMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQURBO01BRUpFLFFBQVEsRUFBRTtJQUZOLENBRlI7SUFNRUMsT0FBTyxFQUFFLHVCQU5YO0lBT0VDLE1BQU0sRUFBRSxDQUNOO01BQ0VDLEdBQUcsRUFBRTtJQURQLENBRE0sRUFJTjtNQUNFQSxHQUFHLEVBQUU7SUFEUCxDQUpNLEVBT047TUFDRUEsR0FBRyxFQUFFO0lBRFAsQ0FQTSxDQVBWO0lBa0JFQyxRQUFRLEVBQUUsQ0FDUjtNQUNFTCxJQUFJLEVBQUU7UUFDSkMsUUFBUSxFQUFFO01BRE4sQ0FEUjtNQUlFQyxPQUFPLEVBQUU7SUFKWCxDQURRLEVBT1I7TUFDRUYsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtNQUROLENBRFI7TUFJRUMsT0FBTyxFQUFFO0lBSlgsQ0FQUTtFQWxCWixDQURTLENBRGU7RUFvQzFCSSxVQUFVLEVBQUUsRUFwQ2M7RUFxQzFCQyxTQUFTLEVBQUU7QUFyQ2UsQ0FBckI7QUF3Q1AsSUFBTUMsUUFBUSxHQUFHLFVBQWpCOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0VBQUEsSUFBakNDLEtBQWlDLHVFQUF6QmIsWUFBeUI7RUFBQSxJQUFYYyxNQUFXOztFQUNoRCxRQUFRQSxNQUFNLENBQUNDLElBQWY7SUFDRTtNQUNFLE9BQU9GLEtBQVA7RUFGSjtBQUlELENBTEQ7O0FBT2VELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6IFwi66qo7IOB67mIXCIsXG4gICAgICB9LFxuICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcbiAgICAgIEltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vdmVsb2cudmVsY2RuLmNvbS9pbWFnZXMvc2FuZ2JpbjIvcG9zdC8zZDE5NWYzZC03ZTVlLTRlNTMtOTg3OS1lZjJjOTdiYTgxMDcvaW1hZ2UucG5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly92ZWxvZy52ZWxjZG4uY29tL2ltYWdlcy9zYW5nYmluMi9wb3N0LzNkMTk1ZjNkLTdlNWUtNGU1My05ODc5LWVmMmM5N2JhODEwNy9pbWFnZS5wbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCJodHRwczovL3ZlbG9nLnZlbGNkbi5jb20vaW1hZ2VzL3NhbmdiaW4yL3Bvc3QvM2QxOTVmM2QtN2U1ZS00ZTUzLTk4NzktZWYyYzk3YmE4MTA3L2ltYWdlLnBuZ1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogXCLri6TtmIRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogXCLsvansnbRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7JmI7JmI7JmI7JmI7JmI7JmIXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlLFxufTtcblxuY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})
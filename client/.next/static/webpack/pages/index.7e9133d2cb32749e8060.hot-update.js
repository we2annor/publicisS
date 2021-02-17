webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NameList/NameList.js":
/*!*****************************************!*\
  !*** ./components/NameList/NameList.js ***!
  \*****************************************/
/*! exports provided: default, NAME_LIST_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NAME_LIST_QUERY\", function() { return NAME_LIST_QUERY; });\n/* harmony import */ var _Users_ernest_Downloads_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/ernest/Downloads/next-apollo-demo/client/components/NameList/NameList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_ernest_Downloads_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query cards {\\n    cards {\\n      name\\n      email\\n      phone\\n      address {\\n        streetA\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    paper: {\n      padding: theme.spacing(1),\n      textAlign: \"center\",\n      color: theme.palette.text.secondary\n    }\n  };\n});\n\nvar NameList = function NameList(_ref) {\n  _s();\n\n  var props = _ref.props;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"])(NAME_LIST_QUERY),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  var classes = useStyles();\n  console.log(\"namelist\", data, \"loading\", loading, \"error\", props);\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: \"Loading ...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 23\n  }, _this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [\"Error Occured \", error]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 21\n  }, _this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: data.cards.map(function (card, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        container: true,\n        direction: \"row\",\n        justify: \"center\",\n        alignItems: \"center\",\n        spacing: 2,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          item: true,\n          xs: 4,\n          container: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: classes.paper,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: [\"Name: \", card.name]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: [\"Email: \", card.email]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: [\"Address: \", card.address.streetA]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: [\"Phone:\", card.phone]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NameList, \"wXmRKmiR17i8+SoHocIuNUs1i6c=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"], useStyles];\n});\n\n_c = NameList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NameList);\nvar NAME_LIST_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"gql\"])(_templateObject());\n\nvar _c;\n\n$RefreshReg$(_c, \"NameList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYW1lTGlzdC9OYW1lTGlzdC5qcz84ZTYzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiTmFtZUxpc3QiLCJwcm9wcyIsInVzZVF1ZXJ5IiwiTkFNRV9MSVNUX1FVRVJZIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNsYXNzZXMiLCJjb25zb2xlIiwibG9nIiwiY2FyZHMiLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwic3RyZWV0QSIsInBob25lIiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsZUFBUyxFQUFFLFFBRk47QUFHTEMsV0FBSyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFIckI7QUFKZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBV0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDR0MsK0RBQVEsQ0FBQ0MsZUFBRCxDQURYO0FBQUEsTUFDdEJDLE9BRHNCLGFBQ3RCQSxPQURzQjtBQUFBLE1BQ2JDLEtBRGEsYUFDYkEsS0FEYTtBQUFBLE1BQ05DLElBRE0sYUFDTkEsSUFETTs7QUFFOUIsTUFBTUMsT0FBTyxHQUFHcEIsU0FBUyxFQUF6QjtBQUVBcUIsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkgsSUFBeEIsRUFBOEIsU0FBOUIsRUFBeUNGLE9BQXpDLEVBQWtELE9BQWxELEVBQTJESCxLQUEzRDtBQUVBLE1BQUlHLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsaUNBQW9CQSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUVYLHNCQUNFO0FBQUssYUFBUyxFQUFFRSxPQUFPLENBQUNqQixJQUF4QjtBQUFBLGNBQ0dnQixJQUFJLENBQUNJLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDBCQUNkLHFFQUFDLDhEQUFEO0FBRUUsaUJBQVMsTUFGWDtBQUdFLGlCQUFTLEVBQUMsS0FIWjtBQUlFLGVBQU8sRUFBQyxRQUpWO0FBS0Usa0JBQVUsRUFBQyxRQUxiO0FBTUUsZUFBTyxFQUFFLENBTlg7QUFBQSwrQkFRRSxxRUFBQyw4REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQWtCLG1CQUFTLE1BQTNCO0FBQUEsaUNBQ0UscUVBQUMsK0RBQUQ7QUFBTyxxQkFBUyxFQUFFTixPQUFPLENBQUNmLEtBQTFCO0FBQUEsb0NBQ0UscUVBQUMsb0VBQUQ7QUFBQSxtQ0FBbUJvQixJQUFJLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLG9FQUFEO0FBQUEsb0NBQW9CRixJQUFJLENBQUNHLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLHFFQUFDLG9FQUFEO0FBQUEsc0NBQXNCSCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUUscUVBQUMsb0VBQUQ7QUFBQSxtQ0FBbUJMLElBQUksQ0FBQ00sS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRixTQUNPTCxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0FoQ0Q7O0dBQU1iLFE7VUFDNkJFLHVELEVBQ2pCZixTOzs7S0FGWmEsUTtBQWtDU0EsdUVBQWY7QUFFTyxJQUFNRyxlQUFlLEdBQUdnQiwwREFBSCxtQkFBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hbWVMaXN0L05hbWVMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBwYXBlcjoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBOYW1lTGlzdCA9ICh7IHByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoTkFNRV9MSVNUX1FVRVJZKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnNvbGUubG9nKFwibmFtZWxpc3RcIiwgZGF0YSwgXCJsb2FkaW5nXCIsIGxvYWRpbmcsIFwiZXJyb3JcIiwgcHJvcHMpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBPY2N1cmVkIHtlcnJvcn08L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIHtkYXRhLmNhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xuICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcbiAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5OYW1lOiB7Y2FyZC5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RW1haWw6IHtjYXJkLmVtYWlsfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+QWRkcmVzczoge2NhcmQuYWRkcmVzcy5zdHJlZXRBfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+UGhvbmU6e2NhcmQucGhvbmV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmFtZUxpc3Q7XG5cbmV4cG9ydCBjb25zdCBOQU1FX0xJU1RfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGNhcmRzIHtcbiAgICBjYXJkcyB7XG4gICAgICBuYW1lXG4gICAgICBlbWFpbFxuICAgICAgcGhvbmVcbiAgICAgIGFkZHJlc3Mge1xuICAgICAgICBzdHJlZXRBXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NameList/NameList.js\n");

/***/ })

})
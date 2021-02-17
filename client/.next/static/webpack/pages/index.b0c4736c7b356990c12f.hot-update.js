webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/NameList/NameList.js":
/*!************************************!*\
  !*** ./pages/NameList/NameList.js ***!
  \************************************/
/*! exports provided: default, NAME_LIST_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NAME_LIST_QUERY\", function() { return NAME_LIST_QUERY; });\n/* harmony import */ var _Users_ernest_Downloads_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/ernest/Downloads/next-apollo-demo/client/pages/NameList/NameList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_ernest_Downloads_next_apollo_demo_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query cards {\\n    cards {\\n      name\\n      email\\n      phone\\n      address {\\n        streetA\\n        streetB\\n        streetC\\n        streetD\\n        city\\n        country\\n        zipcode\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    paper: {\n      padding: theme.spacing(1),\n      textAlign: \"center\",\n      color: theme.palette.text.secondary\n    }\n  };\n});\n\nvar NameList = function NameList(_ref) {\n  _s();\n\n  var props = _ref.props;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"])(NAME_LIST_QUERY),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  var classes = useStyles();\n  console.log(\"namelist\", data, \"loading\", loading, \"error\", props);\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: \"Loading ...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 23\n  }, _this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [\"Error Occured \", error]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 21\n  }, _this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n      children: \"Person Cards \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), data.cards.map(function (card, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        container: true,\n        direction: \"row\",\n        justify: \"center\",\n        alignItems: \"center\",\n        spacing: 2,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          item: true,\n          md: 6,\n          xs: 4,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: classes.paper,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                children: \"Card\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                children: [\"Name: \", card.name]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: [\"Email: \", card.email]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: [\"Address: \", card.address.streetA, \" \", card.address.streetB, card.address.streetC, \" \", card.address.streetD, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\"City: \", card.address.city, \" \"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\"Country: \", card.address.country]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\"ZipCode: \", card.address.zipcode]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              children: [\"Phone:\", card.phone]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      children: \"Load more\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NameList, \"wXmRKmiR17i8+SoHocIuNUs1i6c=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"], useStyles];\n});\n\n_c = NameList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NameList);\nvar NAME_LIST_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"gql\"])(_templateObject());\n\nvar _c;\n\n$RefreshReg$(_c, \"NameList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTmFtZUxpc3QvTmFtZUxpc3QuanM/ZjQ5MCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIk5hbWVMaXN0IiwicHJvcHMiLCJ1c2VRdWVyeSIsIk5BTUVfTElTVF9RVUVSWSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsImNhcmRzIiwibWFwIiwiY2FyZCIsImluZGV4IiwibmFtZSIsImVtYWlsIiwiYWRkcmVzcyIsInN0cmVldEEiLCJzdHJlZXRCIiwic3RyZWV0QyIsInN0cmVldEQiLCJjaXR5IiwiY291bnRyeSIsInppcGNvZGUiLCJwaG9uZSIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURpQztBQUl2Q0MsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZCxDQURKO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xDLFdBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNDLElBQWQsQ0FBbUJDO0FBSHJCO0FBSmdDLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVdBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ0dDLCtEQUFRLENBQUNDLGVBQUQsQ0FEWDtBQUFBLE1B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OztLQUZaYSxRO0FBZ0RTQSx1RUFBZjtBQUVPLElBQU1HLGVBQWUsR0FBR3NCLDBEQUFILG1CQUFyQiIsImZpbGUiOiIuL3BhZ2VzL05hbWVMaXN0L05hbWVMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBwYXBlcjoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBOYW1lTGlzdCA9ICh7IHByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoTkFNRV9MSVNUX1FVRVJZKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnNvbGUubG9nKFwibmFtZWxpc3RcIiwgZGF0YSwgXCJsb2FkaW5nXCIsIGxvYWRpbmcsIFwiZXJyb3JcIiwgcHJvcHMpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBPY2N1cmVkIHtlcnJvcn08L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxoMj5QZXJzb24gQ2FyZHMgPC9oMj5cbiAgICAgIHtkYXRhLmNhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj0ncm93J1xuICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcbiAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXs0fT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8aDM+Q2FyZDwvaDM+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPGRpdj5OYW1lOiB7Y2FyZC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkVtYWlsOiB7Y2FyZC5lbWFpbH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIEFkZHJlc3M6IHtjYXJkLmFkZHJlc3Muc3RyZWV0QX0ge2NhcmQuYWRkcmVzcy5zdHJlZXRCfVxuICAgICAgICAgICAgICAgIHtjYXJkLmFkZHJlc3Muc3RyZWV0Q30ge2NhcmQuYWRkcmVzcy5zdHJlZXREfVxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkNpdHk6IHtjYXJkLmFkZHJlc3MuY2l0eX0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkNvdW50cnk6IHtjYXJkLmFkZHJlc3MuY291bnRyeX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+WmlwQ29kZToge2NhcmQuYWRkcmVzcy56aXBjb2RlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5QaG9uZTp7Y2FyZC5waG9uZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKSl9XG5cbiAgICAgIDxidXR0b24+TG9hZCBtb3JlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYW1lTGlzdDtcblxuZXhwb3J0IGNvbnN0IE5BTUVfTElTVF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgY2FyZHMge1xuICAgIGNhcmRzIHtcbiAgICAgIG5hbWVcbiAgICAgIGVtYWlsXG4gICAgICBwaG9uZVxuICAgICAgYWRkcmVzcyB7XG4gICAgICAgIHN0cmVldEFcbiAgICAgICAgc3RyZWV0QlxuICAgICAgICBzdHJlZXRDXG4gICAgICAgIHN0cmVldERcbiAgICAgICAgY2l0eVxuICAgICAgICBjb3VudHJ5XG4gICAgICAgIHppcGNvZGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/NameList/NameList.js\n");

/***/ })

})
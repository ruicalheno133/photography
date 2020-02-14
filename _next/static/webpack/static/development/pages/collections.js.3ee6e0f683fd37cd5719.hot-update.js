webpackHotUpdate("static/development/pages/collections.js",{

/***/ "./components/horizontalPhotoList.js":
/*!*******************************************!*\
  !*** ./components/horizontalPhotoList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _photoModal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photoModal.js */ "./components/photoModal.js");






var _jsxFileName = "/Users/ruipedro/Desktop/projetos/WebfolioV2/components/horizontalPhotoList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var sideScroller = {
  whiteSpace: 'nowrap',
  width: '100%',
  transform: 'translateX(100%)',
  textAlign: 'left',
  margin: 0,
  padding: 0,
  position: 'absolute'
};
var imgH = {
  display: 'inline-block',
  height: '70vmin',
  marginLeft: '5vmin',
  marginTop: 0,
  marginBottom: 0,
  padding: 0
};
var imgV = {
  display: 'inline-block',
  height: '70vmin',
  marginLeft: '5vmin',
  marginTop: 0,
  marginBottom: 0,
  padding: 0
};
var backButton = {
  display: 'inline-block',
  color: 'black',
  marginLeft: '5em',
  marginRight: '5em',
  marginTop: 0,
  marginBottom: 0,
  padding: 0,
  cursor: 'pointer',
  textAlign: 'center'
};

var HorizontalPhotoList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HorizontalPhotoList, _React$Component);

  function HorizontalPhotoList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalPhotoList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HorizontalPhotoList).call(this, props));
    var animateList = props.photos.map(function (img) {
      return 'appear';
    });
    _this.state = {
      animate: animateList,
      showModal: false,
      modalIndex: 0
    };
    _this.animate = _this.animate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HorizontalPhotoList).call(this));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalPhotoList, [{
    key: "animate",
    value: function animate(index) {
      var newList = [];

      if (this.state.showModal == false) {
        for (var i = 0; i < this.state.animate.length; i++) {
          newList.push('hide');
        }

        this.setState({
          animate: newList,
          modalIndex: index,
          showModal: true
        });
      } else {
        for (var _i = 0; _i < this.state.animate.length; _i++) {
          newList.push('show');
        }

        this.setState({
          animate: newList,
          modalIndex: index,
          showModal: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var photos = this.props.photos.map(function (img, index) {
        if (img.orientation == 'V') {
          return __jsx("img", {
            style: imgV,
            className: _this2.state.animate[index],
            src: process.env.BACKEND_URL + img.src,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          });
        } else {
          return __jsx("img", {
            style: imgH,
            className: _this2.state.animate[index],
            src: process.env.BACKEND_URL + img.src,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          });
        }
      });
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["CSSTransition"], {
        "in": true,
        timeout: 2000,
        classNames: "collection-transition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("div", {
        key: 0,
        style: sideScroller,
        className: "sideScroller",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, photos, __jsx("a", {
        style: backButton,
        onClick: this.props.goBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("h1", {
        style: {
          fontSize: '2vmax'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, " GO ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), " BACK")))), __jsx(_photoModal_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        show: this.state.showModal,
        photo: this.props.photos[this.state.modalIndex],
        click: this.animate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }));
    }
  }]);

  return HorizontalPhotoList;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HorizontalPhotoList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../usr/local/lib/node_modules/next/node_modules/process/browser.js */ "../../../../../usr/local/lib/node_modules/next/node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=collections.js.3ee6e0f683fd37cd5719.hot-update.js.map
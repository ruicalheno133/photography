webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _components_gallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/gallery.js */ "./components/gallery.js");
/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home.js */ "./components/home.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/ruipedro/Desktop/projetos/WebfolioV2/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// pages/index.js




process.env.BACKEND_URL = '';
var galleryStyle = {
  margin: '0 auto',
  marginTop: '2vmin ',
  width: '80%'
};
var photos = [{
  src: process.env.BACKEND_URL + "/static/photography/london/bike-1.jpg",
  width: 4,
  height: 3
}, {
  src: process.env.BACKEND_URL + "/static/photography/lightAndShadow/passing_by-1.jpg",
  width: 3,
  height: 4
}, {
  src: process.env.BACKEND_URL + "/static/photography/tate-1.jpg",
  width: 4,
  height: 3
}, {
  src: process.env.BACKEND_URL + "/static/photography/midnight-basket-1.jpg",
  width: 3,
  height: 4
}, {
  src: process.env.BACKEND_URL + "/static/photography/lightAndShadow/rcv-1.jpg",
  width: 3,
  height: 4
}, {
  src: process.env.BACKEND_URL + "/static/photography/underwater-1.jpg",
  width: 3,
  height: 4
}, {
  src: process.env.BACKEND_URL + "/static/photography/london/higher-1.jpg",
  width: 3,
  height: 4
}, {
  src: process.env.BACKEND_URL + "/static/photography/gliding-1.jpg",
  width: 4,
  height: 3
}, {
  src: process.env.BACKEND_URL + "/static/photography/shard-1.jpg",
  width: 3,
  height: 4
}];
function Index() {
  var w = window.innerWidth;
  columns = Math.floor(w % 400 * 2);
  console.log(columns);
  return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    renderFooter: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_components_gallery_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    photos: photos,
    columns: 3,
    margin: 5,
    galleryStyle: galleryStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../usr/local/lib/node_modules/next/node_modules/process/browser.js */ "../../../../../usr/local/lib/node_modules/next/node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.a14b3330c5e9eed3a57b.hot-update.js.map
"use strict";
exports.id = 137;
exports.ids = [137];
exports.modules = {

/***/ 137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AF": () => (/* binding */ shadow),
/* harmony export */   "BC": () => (/* binding */ media),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const mediaQuery = max_width => `
  @media (max-width: ${max_width}px)
`;

const media = {
  large: mediaQuery(1200),
  medium: mediaQuery(992),
  small: mediaQuery(768),
  xsmall: mediaQuery(376)
}; // 그림자 효과: https://codepen.io/sdthornton/pen/wBZdXq 기반

const shadow = weight => {
  const shadows = [(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);"]), (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);"]), (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);"]), (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);"]), (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22);"])];
  return shadows[weight];
};
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["body{margin:0;padding:0;font-family:sans-serif;box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}a{color:inherit;text-decoration:none;}.info_container{display:flex;align-items:center;overflow:hidden;border:2px solid #5e79fc;border-radius:50px;background:#fff;}.icon_circle{display:flex;justify-content:center;align-items:center;margin-left:0.5rem;width:30px;height:30px;border-radius:50%;}.info_contents{display:flex;flex-direction:column;height:100%;padding:0.5rem;.title{font-size:14px;font-weight:bold;margin-top:0.1rem;margin-bottom:0.2rem;color:#0168c3;overflow:auto;}.address{font-size:12px;overflow:auto;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ })

};
;
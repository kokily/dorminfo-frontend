(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./libs/context/UserContext.tsx


const UserContext = /*#__PURE__*/(0,external_react_.createContext)(null);
function UserContextProvider({
  children
}) {
  const userState = (0,external_react_.useState)(null);
  return /*#__PURE__*/jsx_runtime_.jsx(UserContext.Provider, {
    value: userState,
    children: children
  });
}
function useUserState() {
  const userState = useContext(UserContext);

  if (!userState) {
    throw new Error('User Context is not used!');
  }

  return userState;
}
;// CONCATENATED MODULE: external "react-query"
const external_react_query_namespaceObject = require("react-query");
;// CONCATENATED MODULE: external "react-query/devtools"
const devtools_namespaceObject = require("react-query/devtools");
;// CONCATENATED MODULE: external "react-toastify"
const external_react_toastify_namespaceObject = require("react-toastify");
// EXTERNAL MODULE: ./styles/index.ts
var styles = __webpack_require__(137);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(819);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function MyApp({
  Component,
  pageProps
}) {
  const {
    0: queryClient
  } = (0,external_react_.useState)(() => new external_react_query_namespaceObject.QueryClient());
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/assets/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/assets/apple-icon-152x152.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/assets/favicon-96x96.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/assets/logo192.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uACE0\uC2DC\uC6D0 \uC815\uBCF4"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      strategy: "beforeInteractive",
      src: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${"qqxeo9xs35"}`
    }), /*#__PURE__*/jsx_runtime_.jsx(styles/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx(UserContextProvider, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_query_namespaceObject.QueryClientProvider, {
        client: queryClient,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_query_namespaceObject.Hydrate, {
          state: pageProps.dehydratedState,
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        }), /*#__PURE__*/jsx_runtime_.jsx(devtools_namespaceObject.ReactQueryDevtools, {
          initialIsOpen: false
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_namespaceObject.ToastContainer, {
      position: "bottom-center",
      draggable: false
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 819:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [137], () => (__webpack_exec__(602)));
module.exports = __webpack_exports__;

})();
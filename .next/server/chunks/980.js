"use strict";
exports.id = 980;
exports.ids = [980];
exports.modules = {

/***/ 980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_PageTemplate)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/index.ts
var styles = __webpack_require__(137);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Aside.tsx





const Aside = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(Container, {
  children: /*#__PURE__*/jsx_runtime_.jsx(Content, {
    children: children
  })
}); // Styles


const Container = external_styled_components_default().aside.withConfig({
  displayName: "Aside__Container",
  componentId: "sc-1ndx7s6-0"
})(["display:flex;flex-direction:column;padding:0.5rem;max-height:calc(100vh - 64px);min-width:320px;overflow:scroll;", "{min-height:calc(100vh - 64px - 450px);}"], styles/* media.small */.BC.small);
const Content = external_styled_components_default().div.withConfig({
  displayName: "Aside__Content",
  componentId: "sc-1ndx7s6-1"
})(["display:flex;flex-direction:column;align-items:center;"]);
/* harmony default export */ const common_Aside = (Aside);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./libs/hooks/common/useHeader.ts


function useHeader() {
  const {
    0: menu,
    1: setMenu
  } = (0,external_react_.useState)(false);
  const ref = (0,external_react_.useRef)(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const onOutsideClick = (0,external_react_.useCallback)(e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setMenu(false);
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    window.addEventListener('click', onOutsideClick, true);
    return () => {
      window.removeEventListener('click', onOutsideClick, true);
    };
  }, [ref]);
  return {
    ref,
    menu,
    toggleMenu,
    onOutsideClick
  };
}

/* harmony default export */ const common_useHeader = (useHeader);
;// CONCATENATED MODULE: ./components/common/MenuButton.tsx




const MenuButton = ({
  onClick
}) => /*#__PURE__*/jsx_runtime_.jsx(MenuButton_Container, {
  onClick: onClick,
  children: "\uBA54\uB274"
}); // Styles


const MenuButton_Container = external_styled_components_default().div.withConfig({
  displayName: "MenuButton__Container",
  componentId: "sc-qk3hmp-0"
})(["display:flex;align-items:center;cursor:pointer;color:white;font-weight:bold;"]);
/* harmony default export */ const common_MenuButton = (MenuButton);
;// CONCATENATED MODULE: ./components/common/MenuItem.tsx





const MenuItem = ({
  children,
  href,
  onClick
}) => {
  const jsx = /*#__PURE__*/jsx_runtime_.jsx(Item, {
    onClick: onClick,
    children: children
  });

  return href ? /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    href: href,
    children: /*#__PURE__*/jsx_runtime_.jsx(MenuItem_Container, {
      style: {
        display: 'block'
      },
      children: jsx
    })
  }) : jsx;
}; // Styles


const MenuItem_Container = external_styled_components_default().div.withConfig({
  displayName: "MenuItem__Container",
  componentId: "sc-ylo0m9-0"
})(["display:block;color:inherit;text-decoration:none;background:#313131;overflow:hidden;"]);
const Item = external_styled_components_default().div.withConfig({
  displayName: "MenuItem__Item",
  componentId: "sc-ylo0m9-1"
})(["padding:0.75rem 1rem;line-height:1.5;color:#cdcdcd;cursor:pointer;transition:0.2s all;&:hover{color:white;background:#464646;}"]);
/* harmony default export */ const common_MenuItem = (MenuItem);
;// CONCATENATED MODULE: ./components/common/MenuList.tsx








const MenuList = ({
  onClose,
  visible
}) => /*#__PURE__*/jsx_runtime_.jsx(MenuList_Container, {
  visible: visible,
  onClick: onClose,
  children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: visible && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(common_MenuItem, {
        href: "/",
        children: "\uD648\uC73C\uB85C"
      }), /*#__PURE__*/jsx_runtime_.jsx(Split, {}), /*#__PURE__*/jsx_runtime_.jsx(common_MenuItem, {
        href: "/qna",
        children: "\uBB38\uC758\uC0AC\uD56D"
      })]
    })
  })
}); // Styles


const MenuList_Container = external_styled_components_default().div.withConfig({
  displayName: "MenuList__Container",
  componentId: "sc-gtai4e-0"
})(["position:absolute;top:100%;margin-top:0.22rem;right:0;z-index:999999;", ";transition:0.14s transform;background:#313131;border-radius:15px;border:1px solid #5a5a5a;overflow:hidden;", ""], (0,styles/* shadow */.AF)(5), props => props.visible ? (0,external_styled_components_.css)(["opacity:1;transform:scale(1);"]) : (0,external_styled_components_.css)(["opacity:0;transform:scale(0.5);"]));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "MenuList__Wrapper",
  componentId: "sc-gtai4e-1"
})(["position:relative;z-index:5;width:12rem;"]);
const Split = external_styled_components_default().div.withConfig({
  displayName: "MenuList__Split",
  componentId: "sc-gtai4e-2"
})(["margin-left:1rem;margin-right:1rem;height:2px;background:linear-gradient(to right,#5a5a5a,#333333);"]);
/* harmony default export */ const common_MenuList = (MenuList);
;// CONCATENATED MODULE: ./components/common/Header.tsx










const Header = () => {
  const {
    ref,
    menu,
    toggleMenu,
    onOutsideClick
  } = common_useHeader();
  return /*#__PURE__*/jsx_runtime_.jsx(Header_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header_Content, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {
          children: "Dorm Info"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Spacer, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        children: [/*#__PURE__*/jsx_runtime_.jsx(common_MenuButton, {
          onClick: toggleMenu
        }), /*#__PURE__*/jsx_runtime_.jsx(common_MenuList, {
          onClose: onOutsideClick,
          visible: menu
        })]
      })]
    })
  });
}; // Styles


const Header_Container = external_styled_components_default().header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-6ko897-0"
})(["display:flex;justify-content:center;width:100%;background:#313131;", ""], (0,styles/* shadow */.AF)(1));
const Header_Content = external_styled_components_default().div.withConfig({
  displayName: "Header__Content",
  componentId: "sc-6ko897-1"
})(["display:flex;align-items:center;padding-left:1rem;padding-right:1rem;width:1200px;height:56px;position:relative;", "{width:992px;}", "{width:100%;}"], styles/* media.large */.BC.large, styles/* media.medium */.BC.medium);
const Logo = external_styled_components_default().a.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-6ko897-2"
})(["font-size:1.4rem;font-family:'Rajdhani';font-weight:bold;text-decoration:none;cursor:pointer;color:#ffffff;&:hover{text-shadow:0.5px 0.5px;}"]);
const Spacer = external_styled_components_default().div.withConfig({
  displayName: "Header__Spacer",
  componentId: "sc-6ko897-3"
})(["flex-grow:1;"]);
/* harmony default export */ const common_Header = (Header);
;// CONCATENATED MODULE: ./components/common/PageTemplate.tsx









const PageTemplate = ({
  children,
  aside
}) => {
  const router = (0,router_.useRouter)();
  const isQna = router.pathname === '/qna';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageTemplate_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(common_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Main, {
      qna: isQna,
      children: [/*#__PURE__*/jsx_runtime_.jsx(PageTemplate_Content, {
        children: children
      }), aside && /*#__PURE__*/jsx_runtime_.jsx(common_Aside, {
        children: aside
      })]
    })]
  });
}; // Styles


const PageTemplate_Container = external_styled_components_default().div.withConfig({
  displayName: "PageTemplate__Container",
  componentId: "sc-1phfl1q-0"
})(["display:flex;flex-direction:column;"]);
const Main = external_styled_components_default().main.withConfig({
  displayName: "PageTemplate__Main",
  componentId: "sc-1phfl1q-1"
})(["display:flex;flex-direction:row;padding-top:0.5rem;padding-left:0.5rem;padding-right:0.5rem;", "{flex-direction:column;}", ""], styles/* media.small */.BC.small, props => props.qna && (0,external_styled_components_.css)(["height:calc(100vh - 56px);background:#5f5f5f;"]));
const PageTemplate_Content = external_styled_components_default().div.withConfig({
  displayName: "PageTemplate__Content",
  componentId: "sc-1phfl1q-2"
})(["display:flex;flex-direction:column;width:100%;height:100%;min-height:960px;", "{min-height:auto;max-height:450px;}"], styles/* media.small */.BC.small);
/* harmony default export */ const common_PageTemplate = (PageTemplate);

/***/ })

};
;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@chakra-ui/react");
var react_responsive_1 = __importDefault(require("react-responsive"));
var Navigation_module_css_1 = __importDefault(require("./Navigation.module.css"));
var antiApple_png_1 = __importDefault(require("./antiApple.png"));
var hamburger_png_1 = __importDefault(require("./hamburger.png"));
var batu_png_1 = __importDefault(require("./batu.png"));
function Navigation() {
    var _a = (0, react_2.useDisclosure)(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    document.title = "格安モバイルWebへようこそ！";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_responsive_1.default, { query: "(max-width:700px)" },
            react_1.default.createElement("div", { className: Navigation_module_css_1.default.navDivMobile },
                react_1.default.createElement("div", { className: Navigation_module_css_1.default.grid },
                    react_1.default.createElement("div", { className: Navigation_module_css_1.default.hamburgerDiv },
                        react_1.default.createElement(react_2.IconButton, { icon: react_1.default.createElement(react_2.Image, { className: Navigation_module_css_1.default.hamburger, src: hamburger_png_1.default }), variant: "customicon", onClick: onOpen, "aria-label": "navIcon" })),
                    react_1.default.createElement("div", { className: Navigation_module_css_1.default.iconBtnDiv },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                            react_1.default.createElement(react_2.Image, { className: Navigation_module_css_1.default.navIconMobile, src: antiApple_png_1.default })))),
                react_1.default.createElement(react_2.Drawer, { placement: "left", onClose: onClose, isOpen: isOpen },
                    react_1.default.createElement(react_2.DrawerOverlay, null),
                    react_1.default.createElement(react_2.DrawerContent, null,
                        react_1.default.createElement(react_2.DrawerHeader, { borderBottomWidth: "1px" },
                            react_1.default.createElement(react_2.IconButton, { icon: react_1.default.createElement(react_2.Image, { className: Navigation_module_css_1.default.hamburger, src: batu_png_1.default }), variant: "customicon", onClick: onClose, "aria-label": "navIcon" }),
                            "\u30E1\u30CB\u30E5\u30FC"),
                        react_1.default.createElement(react_2.DrawerBody, null,
                            react_1.default.createElement(react_2.Accordion, null,
                                react_1.default.createElement(react_2.AccordionItem, null,
                                    react_1.default.createElement("h2", null,
                                        react_1.default.createElement(react_2.AccordionButton, null,
                                            react_1.default.createElement(react_2.Box, { flex: "1", textAlign: "center", as: react_router_dom_1.NavLink, to: "/", onClick: onClose }, "\u30C8\u30C3\u30D7")))),
                                react_1.default.createElement(react_2.AccordionItem, null,
                                    react_1.default.createElement("h2", null,
                                        react_1.default.createElement(react_2.AccordionButton, null,
                                            react_1.default.createElement(react_2.Box, { as: "span", flex: "1", textAlign: "center" }, "\u683C\u5B89SIM\u306E\u6982\u8981"),
                                            react_1.default.createElement(react_2.AccordionIcon, null))),
                                    react_1.default.createElement(react_2.AccordionPanel, null,
                                        react_1.default.createElement("h3", null,
                                            react_1.default.createElement(react_2.Box, { flex: "1", textAlign: "center", as: react_router_dom_1.NavLink, to: "/about", onClick: onClose }, "\u683C\u5B89SIM\u3068\u306F")),
                                        react_1.default.createElement("h3", null,
                                            react_1.default.createElement(react_2.Box, { flex: "1", textAlign: "center", as: react_router_dom_1.NavLink, to: "/pros_cons", onClick: onClose }, "\u30E1\u30EA\u30C3\u30C8\u30FB\u30C7\u30E1\u30EA\u30C3\u30C8")),
                                        react_1.default.createElement("h3", null,
                                            react_1.default.createElement(react_2.Box, { flex: "1", textAlign: "center", as: react_router_dom_1.NavLink, to: "/content/speed", onClick: onClose }, "\u901F\u5EA6\u6BD4\u8F03")))),
                                react_1.default.createElement(react_2.AccordionItem, null,
                                    react_1.default.createElement("h2", null,
                                        react_1.default.createElement(react_2.AccordionButton, null,
                                            react_1.default.createElement(react_2.Box, { flex: "1", textAlign: "center", as: react_router_dom_1.NavLink, to: "/content/plan/all_company", onClick: onClose }, "\u30D7\u30E9\u30F3\u4E00\u89A7")))),
                                react_1.default.createElement(react_2.AccordionItem, null,
                                    react_1.default.createElement("h2", null,
                                        react_1.default.createElement(react_2.AccordionButton, null,
                                            react_1.default.createElement(react_2.Box, { flex: "1", textAlign: "center", as: react_router_dom_1.NavLink, to: "/content/simulation", onClick: onClose }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3")))),
                                react_1.default.createElement(react_2.AccordionItem, null,
                                    react_1.default.createElement("h2", null,
                                        react_1.default.createElement(react_2.AccordionButton, null,
                                            react_1.default.createElement(react_2.Box, { flex: "1", textAlign: "center", as: react_router_dom_1.NavLink, to: "/content/device/recommend_devices", onClick: onClose }, "\u304A\u3059\u3059\u3081\u7AEF\u672B")))))))))),
        react_1.default.createElement(react_responsive_1.default, { query: "(min-width:701px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: Navigation_module_css_1.default.navDiv },
                    react_1.default.createElement("div", { className: Navigation_module_css_1.default.navHead },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                            react_1.default.createElement(react_2.Image, { className: Navigation_module_css_1.default.navIcon, src: antiApple_png_1.default })),
                        react_1.default.createElement(react_2.Heading, { size: "md", className: Navigation_module_css_1.default.navTitle }, "\u683C\u5B89\u30E2\u30D0\u30A4\u30EBWeb")),
                    react_1.default.createElement(react_2.Breadcrumb, { className: Navigation_module_css_1.default.navMain, separator: "", spacing: "0" },
                        react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navNormal },
                            react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink, as: react_router_dom_1.NavLink, to: "/" },
                                react_1.default.createElement("p", null, "\u30C8\u30C3\u30D7"))),
                        react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navNormal },
                            react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink },
                                react_1.default.createElement("p", null, "\u683C\u5B89SIM\u306E\u6982\u8981")),
                            react_1.default.createElement(react_2.Breadcrumb, { className: Navigation_module_css_1.default.navSubMain, separator: "", spacing: "0" },
                                react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navSub },
                                    react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink, as: react_router_dom_1.NavLink, to: "/about" },
                                        react_1.default.createElement("p", null, "\u683C\u5B89SIM\u3068\u306F"))),
                                react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navSub },
                                    react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink, as: react_router_dom_1.NavLink, to: "/pros_cons" },
                                        react_1.default.createElement("p", null, "\u30E1\u30EA\u30C3\u30C8\u30FB\u30C7\u30E1\u30EA\u30C3\u30C8"))),
                                react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navSub },
                                    react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink, as: react_router_dom_1.NavLink, to: "/content/plan/all_company" },
                                        react_1.default.createElement("p", null, "\u30D7\u30E9\u30F3\u4E00\u89A7"))),
                                react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navSub },
                                    react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink, as: react_router_dom_1.NavLink, to: "/content/Speed" },
                                        react_1.default.createElement("p", null, "\u901F\u5EA6\u6BD4\u8F03"))))),
                        react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navNormal },
                            react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink, as: react_router_dom_1.NavLink, to: "/content/plan/all_company" },
                                react_1.default.createElement("p", null, "\u30D7\u30E9\u30F3\u4E00\u89A7"))),
                        react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navNormal },
                            react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink, as: react_router_dom_1.NavLink, to: "/content/simulation" },
                                react_1.default.createElement("p", null, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3"))),
                        react_1.default.createElement(react_2.BreadcrumbItem, { className: Navigation_module_css_1.default.navNormal },
                            react_1.default.createElement(react_2.BreadcrumbLink, { className: Navigation_module_css_1.default.navLink, as: react_router_dom_1.NavLink, to: "/content/device/recommend_devices" },
                                react_1.default.createElement("p", null, "\u304A\u3059\u3059\u3081\u7AEF\u672B")))))))));
}
exports.default = Navigation;

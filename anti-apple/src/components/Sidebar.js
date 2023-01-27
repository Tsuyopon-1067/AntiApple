"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var react_router_dom_1 = require("react-router-dom");
var Sidebar_module_css_1 = __importDefault(require("./Sidebar.module.css"));
var Sidebar = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: Sidebar_module_css_1.default.main },
            react_1.default.createElement(react_2.Box, { bg: "white", flex: "1", textAlign: "center" },
                react_1.default.createElement(react_2.Stack, null,
                    react_1.default.createElement(react_2.Button, { as: react_router_dom_1.NavLink, to: "../../", bg: "white" }, "\u30C8\u30C3\u30D7"),
                    react_1.default.createElement(react_2.Button, { as: react_router_dom_1.NavLink, to: "/about", bg: "white" }, "\u683C\u5B89SIM\u3068\u306F\uFF1F"),
                    react_1.default.createElement(react_2.Button, { as: react_router_dom_1.NavLink, to: "/pros_cons", bg: "white" }, "\u683C\u5B89SIM\u306E\u30E1\u30EA\u30C3\u30C8\u30FB\u30C7\u30E1\u30EA\u30C3\u30C8"),
                    react_1.default.createElement(react_2.Button, { as: react_router_dom_1.NavLink, to: "/content", bg: "white" }, "\u30B3\u30F3\u30C6\u30F3\u30C4\u4E00\u89A7"),
                    react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u304A\u3059\u3059\u3081\u683C\u5B89SIM \u30EA\u30F3\u30AF\u96C6"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://ahamo.com", target: "_blank", bg: "white" }, "ahamo"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://povo.jp", target: "_blank", bg: "white" }, "povo"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://linemo.jp", target: "_blank", bg: "white" }, "LINEMO"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://www.uqwimax.jp/", target: "_blank", bg: "white" }, "UQ mobile"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://www.ymobile.jp/", target: "_blank", bg: "white" }, "Y!mobile"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://service.ocn.ne.jp/mobile/", target: "_blank", bg: "white" }, "OCN\u30E2\u30D0\u30A4\u30EBONE"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://www.mineo.jp/", target: "_blank", bg: "white" }, "mineo"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://www.iijmio.jp/", target: "_blank", bg: "white" }, "IIJmio"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://aeonmobile.jp/", target: "_blank", bg: "white" }, "\u30A4\u30AA\u30F3\u30E2\u30D0\u30A4\u30EB"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://www.jcom.co.jp/service/mobile/", target: "_blank", bg: "white" }, "J:COM\u30E2\u30D0\u30A4\u30EB"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://www.nihontsushin.com/", target: "_blank", bg: "white" }, "\u65E5\u672C\u901A\u4FE1SIM"),
                    react_1.default.createElement(react_2.Button, { as: "a", href: "https://join.biglobe.ne.jp/mobile/", target: "_blank", bg: "white" }, "BIGLOBE\u30E2\u30D0\u30A4\u30EB"))))));
};
exports.default = Sidebar;

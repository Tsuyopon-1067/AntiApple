"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_responsive_1 = __importDefault(require("react-responsive"));
var react_2 = require("@chakra-ui/react");
var Sidebar_1 = __importDefault(require("../Sidebar"));
var About = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_responsive_1.default, { query: "(max-width:900px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h1", null, "\u683C\u5B89SIM\u3068\u306F\uFF1F"),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "\u30DB\u30FC\u30E0")),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/about" }, "\u683C\u5B89SIM\u3068\u306F\uFF1F")),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/pros_cons" }, "\u683C\u5B89SIM\u306E\u30E1\u30EA\u30C3\u30C8\u30FB\u30C7\u30E1\u30EA\u30C3\u30C8")),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/content" }, "\u30B3\u30F3\u30C6\u30F3\u30C4\u4E00\u89A7"))))),
        react_1.default.createElement(react_responsive_1.default, { query: "(min-width:901px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_2.Stack, { direction: "row" },
                    react_1.default.createElement(Sidebar_1.default, null),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h1", null, "\u683C\u5B89SIM\u3068\u306F\uFF1F"),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "\u30DB\u30FC\u30E0")),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/about" }, "\u683C\u5B89SIM\u3068\u306F\uFF1F")),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/pros_cons" }, "\u683C\u5B89SIM\u306E\u30E1\u30EA\u30C3\u30C8\u30FB\u30C7\u30E1\u30EA\u30C3\u30C8")),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/content" }, "\u30B3\u30F3\u30C6\u30F3\u30C4\u4E00\u89A7"))))))));
};
exports.default = About;

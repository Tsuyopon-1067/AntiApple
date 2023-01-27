"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@chakra-ui/react");
var fa_1 = require("react-icons/fa");
var CardStyles_module_css_1 = __importDefault(require("./CardStyles.module.css"));
var react_responsive_1 = __importDefault(require("react-responsive"));
var GenerateCard = function (props) {
    var carddata = [];
    //const linkdata:JSX.Element[] = [];
    for (var i = 0; i < props.cardtitle.length; i++) {
        carddata.push(react_1.default.createElement(react_2.Card, { className: CardStyles_module_css_1.default.card, rounded: "lg" },
            react_1.default.createElement(react_router_dom_1.Link, { to: props.cardlink[i] },
                react_1.default.createElement(react_2.CardHeader, null,
                    react_1.default.createElement(react_2.Heading, { size: "sm" }, props.cardtitle[i])),
                react_1.default.createElement(react_2.CardBody, null,
                    react_1.default.createElement(react_2.Text, { noOfLines: [1, 2] }, props.carddetail[i])),
                react_1.default.createElement(react_2.CardFooter, null,
                    react_1.default.createElement(react_2.IconButton, { "aria-label": "\u8A73\u3057\u304F\u898B\u308B", isRound: true, icon: react_1.default.createElement(fa_1.FaArrowRight, null) })))));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_responsive_1.default, { query: "(max-width:800px)" },
            react_1.default.createElement("div", { className: CardStyles_module_css_1.default.main },
                react_1.default.createElement(react_2.Stack, { spacing: "24px" }, carddata))),
        react_1.default.createElement(react_responsive_1.default, { query: "(min-width:801px)" },
            react_1.default.createElement("div", { className: CardStyles_module_css_1.default.main },
                react_1.default.createElement(react_2.SimpleGrid, { columns: 2, className: CardStyles_module_css_1.default.grid, spacing: "24px" }, carddata)))));
};
exports.default = GenerateCard;

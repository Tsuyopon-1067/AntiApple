"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
//import ReactDOM from 'react-dom';
var react_responsive_1 = __importDefault(require("react-responsive"));
var Sidebar_1 = __importDefault(require("../../Sidebar"));
var company_module_css_1 = __importDefault(require("./company.module.css"));
var react_2 = require("@chakra-ui/react");
var GenerateArticle = function (props) {
    var valuedata = [];
    var optiondata = [];
    for (var i = 0; i < props.gbtable.length; i++) {
        valuedata.push(react_1.default.createElement(react_2.Tr, null,
            react_1.default.createElement(react_2.Td, null, props.gbtable[i]),
            react_1.default.createElement(react_2.Td, null, props.valuetable[i] + "円"),
            react_1.default.createElement(react_2.Td, null, props.valueremarktable[i])));
    }
    for (var j = 0; j < props.optiontable.length; j++) {
        optiondata.push(react_1.default.createElement(react_2.Tr, null,
            react_1.default.createElement(react_2.Td, null, props.optiontable[j]),
            react_1.default.createElement(react_2.Td, null, props.optionvaluetable[j] + "円"),
            react_1.default.createElement(react_2.Td, null, props.optionremarktable[j])));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_responsive_1.default, { query: "(max-width: 900px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: company_module_css_1.default.flex },
                        react_1.default.createElement(react_2.Heading, { className: company_module_css_1.default.title }, props.name),
                        react_1.default.createElement("img", { className: company_module_css_1.default.img, src: props.img, alt: "image" }),
                        react_1.default.createElement(react_2.Heading, { size: "sm", className: company_module_css_1.default.heading }, "\u6982\u8981"),
                        react_1.default.createElement("p", null, props.abstract),
                        react_1.default.createElement(react_2.Heading, { size: "sm", className: company_module_css_1.default.heading }, "\u30D7\u30E9\u30F3"),
                        react_1.default.createElement(react_2.TableContainer, { className: company_module_css_1.default.table },
                            react_1.default.createElement(react_2.Table, { variant: "simple" },
                                react_1.default.createElement(react_2.TableCaption, null, "\u6708\u984D\u3001\u6599\u91D1\u306F\u7A0E\u8FBC\u3067\u3059"),
                                react_1.default.createElement(react_2.Thead, null,
                                    react_1.default.createElement(react_2.Tr, null,
                                        react_1.default.createElement(react_2.Th, null, "\u30C7\u30FC\u30BF\u5BB9\u91CF"),
                                        react_1.default.createElement(react_2.Th, null, "\u6599\u91D1"),
                                        react_1.default.createElement(react_2.Th, null, "\u5099\u8003"))),
                                react_1.default.createElement(react_2.Tbody, null, valuedata))),
                        react_1.default.createElement("p", null, props.value),
                        react_1.default.createElement(react_2.Heading, { size: "sm", className: company_module_css_1.default.heading }, "\u30AA\u30D7\u30B7\u30E7\u30F3"),
                        react_1.default.createElement(react_2.TableContainer, { className: company_module_css_1.default.table },
                            react_1.default.createElement(react_2.Table, { variant: "simple" },
                                react_1.default.createElement(react_2.TableCaption, null, "\u6708\u984D\u3001\u6599\u91D1\u306F\u7A0E\u8FBC\u3067\u3059"),
                                react_1.default.createElement(react_2.Thead, null,
                                    react_1.default.createElement(react_2.Tr, null,
                                        react_1.default.createElement(react_2.Th, null, "\u30AA\u30D7\u30B7\u30E7\u30F3"),
                                        react_1.default.createElement(react_2.Th, null, "\u6599\u91D1"),
                                        react_1.default.createElement(react_2.Th, null, "\u5099\u8003"))),
                                react_1.default.createElement(react_2.Tbody, null, optiondata))),
                        react_1.default.createElement("p", null, props.option),
                        react_1.default.createElement(react_2.Heading, { size: "sm", className: company_module_css_1.default.heading }, "\u901A\u4FE1\u901F\u5EA6"),
                        react_1.default.createElement("p", null, props.speed),
                        react_1.default.createElement(react_2.Heading, { size: "sm", className: company_module_css_1.default.heading }, "\u307E\u3068\u3081\u30FB\u3069\u3093\u306A\u4EBA\u306B\u304A\u3059\u3059\u3081\uFF1F"),
                        react_1.default.createElement("p", null, props.recommended),
                        react_1.default.createElement(react_2.Heading, { size: "sm", className: company_module_css_1.default.heading }, "\u53C2\u8003\u6587\u732E"),
                        react_1.default.createElement("p", null, props.reference))))),
        react_1.default.createElement(react_responsive_1.default, { query: "(min-width: 901px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement(react_2.Stack, { direction: 'row', spacing: "0" },
                        react_1.default.createElement(Sidebar_1.default, null),
                        react_1.default.createElement("div", { className: company_module_css_1.default.flex },
                            react_1.default.createElement("div", { className: company_module_css_1.default.article },
                                react_1.default.createElement(react_2.Heading, { size: "xl", className: company_module_css_1.default.title }, props.name),
                                react_1.default.createElement("img", { className: company_module_css_1.default.img, src: props.img, alt: "image" }),
                                react_1.default.createElement(react_2.Heading, { className: company_module_css_1.default.heading, size: "lg" }, "\u6982\u8981"),
                                react_1.default.createElement("p", null, props.abstract),
                                react_1.default.createElement(react_2.Heading, { className: company_module_css_1.default.heading, size: "lg" }, "\u30D7\u30E9\u30F3"),
                                react_1.default.createElement(react_2.TableContainer, { className: company_module_css_1.default.table },
                                    react_1.default.createElement(react_2.Table, { variant: "simple" },
                                        react_1.default.createElement(react_2.TableCaption, null, "\u6708\u984D\u3001\u6599\u91D1\u306F\u7A0E\u8FBC\u3067\u3059"),
                                        react_1.default.createElement(react_2.Thead, null,
                                            react_1.default.createElement(react_2.Tr, null,
                                                react_1.default.createElement(react_2.Th, null, "\u30C7\u30FC\u30BF\u5BB9\u91CF"),
                                                react_1.default.createElement(react_2.Th, null, "\u6599\u91D1"),
                                                react_1.default.createElement(react_2.Th, null, "\u5099\u8003"))),
                                        react_1.default.createElement(react_2.Tbody, null, valuedata))),
                                react_1.default.createElement("p", null, props.value),
                                react_1.default.createElement(react_2.Heading, { className: company_module_css_1.default.heading, size: "lg" }, "\u30AA\u30D7\u30B7\u30E7\u30F3"),
                                react_1.default.createElement(react_2.TableContainer, { className: company_module_css_1.default.table },
                                    react_1.default.createElement(react_2.Table, { variant: "simple" },
                                        react_1.default.createElement(react_2.TableCaption, null, "\u6708\u984D\u3001\u6599\u91D1\u306F\u7A0E\u8FBC\u3067\u3059"),
                                        react_1.default.createElement(react_2.Thead, null,
                                            react_1.default.createElement(react_2.Tr, null,
                                                react_1.default.createElement(react_2.Th, null, "\u30AA\u30D7\u30B7\u30E7\u30F3"),
                                                react_1.default.createElement(react_2.Th, null, "\u6599\u91D1"),
                                                react_1.default.createElement(react_2.Th, null, "\u5099\u8003"))),
                                        react_1.default.createElement(react_2.Tbody, null, optiondata))),
                                react_1.default.createElement("p", null, props.option),
                                react_1.default.createElement(react_2.Heading, { className: company_module_css_1.default.heading, size: "lg" }, "\u901A\u4FE1\u901F\u5EA6"),
                                react_1.default.createElement("p", null, props.speed),
                                react_1.default.createElement(react_2.Heading, { className: company_module_css_1.default.heading, size: "lg" }, "\u307E\u3068\u3081\u30FB\u3069\u3093\u306A\u4EBA\u306B\u304A\u3059\u3059\u3081\uFF1F"),
                                react_1.default.createElement("p", null, props.recommended),
                                react_1.default.createElement(react_2.Heading, { className: company_module_css_1.default.heading, size: "lg" }, "\u53C2\u8003\u6587\u732E"),
                                react_1.default.createElement("p", null, props.reference)))))))));
};
exports.default = GenerateArticle;

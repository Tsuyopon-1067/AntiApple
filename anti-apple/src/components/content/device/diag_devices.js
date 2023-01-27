"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var react_responsive_1 = __importDefault(require("react-responsive"));
var Diag_1 = require("./Diag"); // デバイスコンポーネント
var Sidebar_1 = __importDefault(require("../../Sidebar"));
var Device_module_css_1 = __importDefault(require("./Device.module.css"));
var DiagDevices = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_responsive_1.default, { query: "(max-width:900px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: Device_module_css_1.default.main },
                    react_1.default.createElement("div", { className: Device_module_css_1.default.article },
                        react_1.default.createElement(react_2.Heading, { className: Device_module_css_1.default.title, size: "xl" }, "\u304A\u3059\u3059\u3081\u7AEF\u672B\u8A3A\u65AD"),
                        react_1.default.createElement(Diag_1.Diag, null))))),
        react_1.default.createElement(react_responsive_1.default, { query: "(min-width:901px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_2.Stack, { direction: "row", spacing: "0" },
                    react_1.default.createElement(Sidebar_1.default, null),
                    react_1.default.createElement("div", { className: Device_module_css_1.default.main },
                        react_1.default.createElement("div", { className: Device_module_css_1.default.article },
                            react_1.default.createElement(react_2.Heading, { className: Device_module_css_1.default.title, size: "xl" }, "\u304A\u3059\u3059\u3081\u7AEF\u672B\u8A3A\u65AD"),
                            react_1.default.createElement(Diag_1.Diag, null))))))));
};
exports.default = DiagDevices;

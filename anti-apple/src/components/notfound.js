"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_responsive_1 = __importDefault(require("react-responsive"));
var _404pagenotfound_png_1 = __importDefault(require("../404pagenotfound.png"));
var Sidebar_1 = __importDefault(require("./Sidebar"));
var react_2 = require("@chakra-ui/react");
var styles = {
    width: "50%",
    height: "50%",
};
var notfound = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_responsive_1.default, { query: "(max-width :900px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("img", { src: _404pagenotfound_png_1.default, alt: "Image", style: styles })))),
        react_1.default.createElement(react_responsive_1.default, { query: "(min-width :901px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement(react_2.Stack, { direction: "row" },
                        react_1.default.createElement(Sidebar_1.default, null),
                        react_1.default.createElement("img", { src: _404pagenotfound_png_1.default, alt: "Image", style: styles })))))));
};
exports.default = notfound;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleButton = void 0;
// トグルボタン1つ
var react_1 = __importStar(require("react"));
var ToggleButton_module_css_1 = __importDefault(require("./ToggleButton.module.css"));
var check_png_1 = __importDefault(require("./check.png"));
var react_2 = require("@chakra-ui/react");
var ToggleButton = function (props, _a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(props.defaultState), state = _b[0], setState = _b[1]; // 押されていたら（暗い色なら）false
    var checkChange = function (e) {
        setState(!state);
        props.getState(state);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { className: ToggleButton_module_css_1.default.lbl },
            react_1.default.createElement("input", { type: "checkbox", checked: state, onChange: checkChange }),
            react_1.default.createElement("span", { className: ToggleButton_module_css_1.default.span },
                react_1.default.createElement("div", { className: ToggleButton_module_css_1.default.div },
                    react_1.default.createElement(react_2.Image, { className: ToggleButton_module_css_1.default.btnImage, src: check_png_1.default }),
                    props.children)))));
};
exports.ToggleButton = ToggleButton;

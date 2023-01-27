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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionButtonList = void 0;
// オプション選択ボタン ボタン状態に対応するoption番号を返す
var react_1 = __importStar(require("react"));
var ToggleButton_1 = require("./ToggleButton");
var OptionButtonList = function (props) {
    var _a = (0, react_1.useState)(false), isChecked0 = _a[0], setIsChecked0 = _a[1];
    var _b = (0, react_1.useState)(false), isChecked1 = _b[0], setIsChecked1 = _b[1];
    var _c = (0, react_1.useState)(false), isChecked2 = _c[0], setIsChecked2 = _c[1];
    (0, react_1.useEffect)(function () {
        var res = 0;
        if (isChecked0) {
            res += 1;
        }
        if (isChecked1) {
            res += 2;
        }
        // if (isChecked2) { res += 4 }
        props.getCarrier(res);
    }, [isChecked0, isChecked1, isChecked2]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked0, defaultState: true }, "\u901A\u8A71\uFF08\u6642\u9593\u5236\u9650\u3042\u308A\uFF09"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked1, defaultState: true }, "\u7121\u5236\u9650\u901A\u8A71"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked2, defaultState: true }, "\u306A\u306B\u304B")));
};
exports.OptionButtonList = OptionButtonList;

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
exports.CarrierButtonList = void 0;
// キャリア選択ボタン
var react_1 = __importStar(require("react"));
var ToggleButton_1 = require("./ToggleButton");
var CarrierButtonList = function (props) {
    var _a = (0, react_1.useState)(true), isChecked0 = _a[0], setIsChecked0 = _a[1];
    var _b = (0, react_1.useState)(true), isChecked1 = _b[0], setIsChecked1 = _b[1];
    var _c = (0, react_1.useState)(true), isChecked2 = _c[0], setIsChecked2 = _c[1];
    var _d = (0, react_1.useState)(true), isChecked3 = _d[0], setIsChecked3 = _d[1];
    var _e = (0, react_1.useState)(true), isChecked4 = _e[0], setIsChecked4 = _e[1];
    var _f = (0, react_1.useState)(true), isChecked5 = _f[0], setIsChecked5 = _f[1];
    var _g = (0, react_1.useState)(true), isChecked6 = _g[0], setIsChecked6 = _g[1];
    var _h = (0, react_1.useState)(true), isChecked7 = _h[0], setIsChecked7 = _h[1];
    var _j = (0, react_1.useState)(true), isChecked8 = _j[0], setIsChecked8 = _j[1];
    var _k = (0, react_1.useState)(true), isChecked9 = _k[0], setIsChecked9 = _k[1];
    var _l = (0, react_1.useState)(true), isChecked10 = _l[0], setIsChecked10 = _l[1];
    var _m = (0, react_1.useState)(true), isChecked11 = _m[0], setIsChecked11 = _m[1];
    (0, react_1.useEffect)(function () {
        var lst = new Array();
        if (isChecked0) {
            lst.push(0);
        }
        if (isChecked1) {
            lst.push(1);
        }
        if (isChecked2) {
            lst.push(2);
        }
        if (isChecked3) {
            lst.push(3);
        }
        if (isChecked4) {
            lst.push(4);
        }
        if (isChecked5) {
            lst.push(5);
        }
        if (isChecked6) {
            lst.push(6);
        }
        if (isChecked7) {
            lst.push(7);
        }
        if (isChecked8) {
            lst.push(8);
        }
        if (isChecked9) {
            lst.push(9);
        }
        if (isChecked10) {
            lst.push(10);
        }
        if (isChecked11) {
            lst.push(11);
        }
        props.getCarrier(lst);
    }, [isChecked0, isChecked1, isChecked2, isChecked3, isChecked4, isChecked5, isChecked6, isChecked7, isChecked8, isChecked9, isChecked10, isChecked11]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked0, defaultState: false }, "ahamo"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked1, defaultState: false }, "povo"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked2, defaultState: false }, "LINEMO"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked3, defaultState: false }, "UQ"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked4, defaultState: false }, "Y!mobile"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked5, defaultState: false }, "OCN"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked6, defaultState: false }, "mineo"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked7, defaultState: false }, "IIJmio"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked8, defaultState: false }, "\u30A4\u30AA\u30F3\u30E2\u30D0\u30A4\u30EB"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked9, defaultState: false }, "J:COM"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked10, defaultState: false }, "\u65E5\u672C\u901A\u4FE1"),
        react_1.default.createElement(ToggleButton_1.ToggleButton, { getState: setIsChecked11, defaultState: false }, "biglobe")));
};
exports.CarrierButtonList = CarrierButtonList;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.RecoDevices = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var Device_module_css_1 = __importDefault(require("./Device.module.css"));
var react_responsive_1 = __importDefault(require("react-responsive"));
var Device_1 = require("./Device");
var Sidebar_1 = __importDefault(require("../../Sidebar"));
var Devices_1 = require("./Devices");
var RecoDevices = function () {
    var _a = (0, react_1.useState)([
        Devices_1.Pixel6a,
        Devices_1.Xiaomi12TPro,
        Devices_1.Redminote11,
        Devices_1.iPhoneSE,
        Devices_1.iPhone14Pro,
        Devices_1.AQUOSsense7,
        Devices_1.motog52j,
        Devices_1.iPhone13mini,
        Devices_1.Pixel7,
        Devices_1.Pixel7Pro,
    ]), DeviceData = _a[0], setDeviceData = _a[1];
    function sortRecommended() {
        DeviceData.sort(function (a, b) { return a.index - b.index; });
        renew();
    }
    function sortPrice() {
        DeviceData.sort(function (a, b) { return a.price - b.price; });
        renew();
    }
    function sortSizeBig() {
        DeviceData.sort(function (a, b) { return b.displaySize - a.displaySize; });
        renew();
    }
    function sortSizeSmall() {
        DeviceData.sort(function (a, b) { return a.displaySize - b.displaySize; });
        renew();
    }
    function sortPower() {
        DeviceData.sort(function (a, b) { return b.antutu - a.antutu; });
        renew();
    }
    function renew() {
        var d = DeviceData.concat();
        setDeviceData(d);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_responsive_1.default, { query: "(max-width:900px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: Device_module_css_1.default.main },
                    react_1.default.createElement("div", { className: Device_module_css_1.default.article },
                        react_1.default.createElement(react_2.Container, null,
                            react_1.default.createElement("div", null,
                                react_1.default.createElement(react_2.Stack, null,
                                    react_1.default.createElement(react_2.VStack, { marginBlock: "40px" },
                                        react_1.default.createElement(react_2.Button, { w: "90%", onClick: sortRecommended }, "\u7DCF\u5408"),
                                        react_1.default.createElement(react_2.Button, { w: "90%", onClick: sortPrice }, "\u5024\u6BB5"),
                                        react_1.default.createElement(react_2.Button, { w: "90%", onClick: sortSizeBig }, "\u30B5\u30A4\u30BA\uFF08\u5927\u304D\u3044\u9806\uFF09"),
                                        react_1.default.createElement(react_2.Button, { w: "90%", onClick: sortSizeSmall }, "\u30B5\u30A4\u30BA\uFF08\u5C0F\u3055\u3044\u9806\uFF09"),
                                        react_1.default.createElement(react_2.Button, { w: "90%", onClick: sortPower }, "\u6027\u80FD")),
                                    react_1.default.createElement(react_2.Stack, null, (function () {
                                        // ここで端末情報を追加する
                                        // ごちゃごちゃしてるけどfor文で回してるだけ
                                        var items = [];
                                        for (var i = 0; i < 10; i++) {
                                            items.push(react_1.default.createElement(react_2.Heading, { className: Device_module_css_1.default.title },
                                                "\u304A\u3059\u3059\u3081\u7AEF\u672B\u305D\u306E",
                                                i + 1));
                                            items.push(react_1.default.createElement(Device_1.Device, __assign({}, DeviceData[i])));
                                        }
                                        return react_1.default.createElement(react_1.default.Fragment, null, items);
                                        // for文埋め込みここまで
                                    })())))))))),
        react_1.default.createElement(react_responsive_1.default, { query: "(min-width:901px)" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_2.Stack, { direction: "row", spacing: "0" },
                    react_1.default.createElement(Sidebar_1.default, null),
                    react_1.default.createElement("div", { className: Device_module_css_1.default.main },
                        react_1.default.createElement("div", { className: Device_module_css_1.default.article },
                            react_1.default.createElement(react_2.Container, null,
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement(react_2.Stack, { spacing: "10" },
                                        react_1.default.createElement(react_2.HStack, { marginBlock: "40px" },
                                            react_1.default.createElement(react_2.Button, { w: "20%", onClick: sortRecommended }, "\u7DCF\u5408"),
                                            react_1.default.createElement(react_2.Button, { w: "20%", onClick: sortPrice }, "\u5024\u6BB5"),
                                            react_1.default.createElement(react_2.Button, { w: "20%", onClick: sortSizeBig }, "\u30B5\u30A4\u30BA\uFF08\u5927\u304D\u3044\u9806\uFF09"),
                                            react_1.default.createElement(react_2.Button, { w: "20%", onClick: sortSizeSmall }, "\u30B5\u30A4\u30BA\uFF08\u5C0F\u3055\u3044\u9806\uFF09"),
                                            react_1.default.createElement(react_2.Button, { w: "20%", onClick: sortPower }, "\u6027\u80FD")),
                                        (function () {
                                            // ここで端末情報を追加する
                                            // ごちゃごちゃしてるけどfor文で回してるだけ
                                            var items = [];
                                            for (var i = 0; i < 10; i++) {
                                                items.push(react_1.default.createElement(react_2.Heading, { marginBlock: "40px", className: Device_module_css_1.default.title },
                                                    "\u304A\u3059\u3059\u3081\u7AEF\u672B\u305D\u306E",
                                                    i + 1));
                                                items.push(react_1.default.createElement(Device_1.Device, __assign({}, DeviceData[i])));
                                            }
                                            return react_1.default.createElement(react_1.default.Fragment, null, items);
                                            // for文埋め込みここまで
                                        })()))))))))));
};
exports.RecoDevices = RecoDevices;
exports.default = exports.RecoDevices;

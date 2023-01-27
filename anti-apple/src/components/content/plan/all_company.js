"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("../../Card"));
var AllCompany = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "\u5404\u793E\u30D7\u30E9\u30F3\u4E00\u89A7"),
            react_1.default.createElement(Card_1.default, { cardtitle: [
                    "ahamo",
                    "povo",
                    "LINEMO",
                    "UQ mobile",
                    "Y!mobile",
                    "OCNモバイルONE",
                    "mineo",
                    "IIJmio",
                    "イオンモバイル",
                    "J:COMモバイル",
                    "日本通信SIM",
                    "BIGLOBEモバイル",
                ], carddetail: [], cardlink: [
                    "/content/plan/company01",
                    "/content/plan/company02",
                    "/content/plan/company03",
                    "/content/plan/company04",
                    "/content/plan/company05",
                    "/content/plan/company06",
                    "/content/plan/company07",
                    "/content/plan/company08",
                    "/content/plan/company09",
                    "/content/plan/company10",
                    "/content/plan/company11",
                    "/content/plan/company12",
                ] }))));
};
exports.default = AllCompany;

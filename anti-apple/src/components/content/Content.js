"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("../Card"));
var react_2 = require("@chakra-ui/react");
var Content = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Stack, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("h1", null, "\u30B3\u30F3\u30C6\u30F3\u30C4\u4E00\u89A7"),
                react_1.default.createElement(Card_1.default, { cardtitle: [
                        "プラン料金シミュレーション",
                        "速度比較",
                        "各社プラン一覧",
                        "おすすめ端末",
                    ], carddetail: ["", "", "", "", ""], cardlink: [
                        "./content/simulation",
                        "./content/speed",
                        "./content/plan/all_company",
                        "./content/device/recommend_devices",
                    ] })))));
};
exports.default = Content;

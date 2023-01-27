"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Carousel_1 = __importDefault(require("./Carousel/Carousel"));
var Card_1 = __importDefault(require("./Card"));
var Top = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Carousel_1.default, null),
        react_1.default.createElement("div", null,
            react_1.default.createElement(Card_1.default, { cardtitle: [
                    "ホーム",
                    "格安SIMとは？",
                    "格安SIMのメリット・デメリット",
                    "コンテンツ一覧",
                ], carddetail: [
                    "トップページです。",
                    "格安SIMをよく知らない！という人にも、まずは格安SIMについて知ってもらいます。",
                    "格安SIMのメリット・デメリットについて、またどんな人に向いているのかについて解説します。",
                    "コンテンツ一覧です。",
                ], cardlink: ["/", "/about", "/pros_cons", "/content"] }))));
};
exports.default = Top;

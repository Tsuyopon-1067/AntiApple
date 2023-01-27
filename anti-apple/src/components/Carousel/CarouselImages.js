"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowNext = exports.ArrowPrev = exports.Image3 = exports.Image2 = exports.Image1 = void 0;
var react_1 = __importDefault(require("react"));
var _1_png_1 = __importDefault(require("./1.png"));
var _2_png_1 = __importDefault(require("./2.png"));
var _3_png_1 = __importDefault(require("./3.png"));
var arrowPrev_png_1 = __importDefault(require("./arrowPrev.png"));
var arrowNext_png_1 = __importDefault(require("./arrowNext.png"));
var react_2 = require("@chakra-ui/react");
var Image1 = function () {
    return react_1.default.createElement(react_2.Image, { borderRadius: "15px", src: _1_png_1.default });
};
exports.Image1 = Image1;
var Image2 = function () {
    return react_1.default.createElement(react_2.Image, { borderRadius: "15px", src: _2_png_1.default });
};
exports.Image2 = Image2;
var Image3 = function () {
    return react_1.default.createElement(react_2.Image, { borderRadius: "15px", src: _3_png_1.default });
};
exports.Image3 = Image3;
var ArrowPrev = function () {
    return react_1.default.createElement(react_2.Image, { src: arrowPrev_png_1.default });
};
exports.ArrowPrev = ArrowPrev;
var ArrowNext = function () {
    return react_1.default.createElement(react_2.Image, { src: arrowNext_png_1.default });
};
exports.ArrowNext = ArrowNext;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
//DOM
var react_router_dom_1 = require("react-router-dom");
//components
var Home_1 = __importDefault(require("./components/Home"));
var react_1 = __importDefault(require("react"));
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", component: Home_1.default }))));
};
exports.default = App;

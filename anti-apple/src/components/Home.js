"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
//Components(Pages)
var Top_1 = __importDefault(require("./Top"));
var About_1 = __importDefault(require("./about/About"));
var Pros_Cons_1 = __importDefault(require("./about/Pros_Cons"));
var Content_1 = __importDefault(require("./content/Content"));
var Simulation_1 = require("./content/Simulation");
var Speed_1 = __importDefault(require("./content/Speed"));
var all_company_1 = __importDefault(require("./content/plan/all_company"));
var recommend_devices_1 = __importDefault(require("./content/device/recommend_devices"));
var diag_devices_1 = __importDefault(require("./content/device/diag_devices"));
var company01_1 = __importDefault(require("./content/plan/company01"));
var company02_1 = __importDefault(require("./content/plan/company02"));
var company03_1 = __importDefault(require("./content/plan/company03"));
var company04_1 = __importDefault(require("./content/plan/company04"));
var company05_1 = __importDefault(require("./content/plan/company05"));
var company06_1 = __importDefault(require("./content/plan/company06"));
var company07_1 = __importDefault(require("./content/plan/company07"));
var company08_1 = __importDefault(require("./content/plan/company08"));
var company09_1 = __importDefault(require("./content/plan/company09"));
var company10_1 = __importDefault(require("./content/plan/company10"));
var company11_1 = __importDefault(require("./content/plan/company11"));
var company12_1 = __importDefault(require("./content/plan/company12"));
var Navigation_1 = __importDefault(require("./Navigation"));
var notfound_1 = __importDefault(require("./notfound"));
var Home_module_css_1 = __importDefault(require("./Home.module.css"));
//import Carousel from './Carousel/Carousel.jsx';
var Home = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: Home_module_css_1.default.homeMainDiv },
            react_1.default.createElement(Navigation_1.default, null),
            react_1.default.createElement("main", null,
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Top_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/about', component: About_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/pros_cons', component: Pros_Cons_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/content", render: function () { return (react_1.default.createElement(react_router_dom_1.Switch, null,
                            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/content', component: Content_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/content/simulation', component: Simulation_1.Simulation }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/content/speed', component: Speed_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/content/device/recommend_devices', component: recommend_devices_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/content/device/diag_devices', component: diag_devices_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan', render: function () { return (react_1.default.createElement(react_router_dom_1.Switch, null,
                                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/content/plan/all_company', component: all_company_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company01', component: company01_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company02', component: company02_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company03', component: company03_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company04', component: company04_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company05', component: company05_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company06', component: company06_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company07', component: company07_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company08', component: company08_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company09', component: company09_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company10', component: company10_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company11', component: company11_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '/content/plan/company12', component: company12_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: '*', component: notfound_1.default }))); } }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '*', component: notfound_1.default }))); } }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '*', component: notfound_1.default }))),
            react_1.default.createElement("footer", { className: Home_module_css_1.default.homeFooter }, "\u00A9\uFE0F2022 Apple\u3081\u3063\u3063\u3061\u3083\u5ACC\u3044\u3067\u3059 from \u9759\u5CA1\u5927\u5B66\u60C5\u5831\u5B66\u90E8 Web\u30C7\u30B6\u30A4\u30F32022"))));
};
exports.default = Home;

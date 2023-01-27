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
exports.Simulation = void 0;
var react_1 = __importStar(require("react"));
var Plans_1 = require("./SimulationComponents/Plans");
var SimulationSlider_1 = require("./SimulationComponents/SimulationSlider");
var SimulationSelecter_1 = require("./SimulationComponents/SimulationSelecter");
var CarrierButtonList_1 = require("./SimulationComponents/CarrierButtonList");
var OptionButtonList_1 = require("./SimulationComponents/OptionButtonList ");
var react_2 = require("@chakra-ui/react");
var Simulation_module_css_1 = __importDefault(require("./Simulation.module.css"));
var react_responsive_1 = __importDefault(require("react-responsive"));
// 20 50 70 100
var Simulation = function (param) {
    var _a = (0, react_1.useState)(5), dataVolume = _a[0], setDataVolume = _a[1];
    var _b = (0, react_1.useState)([1]), carrier = _b[0], setCarrier = _b[1];
    var _c = (0, react_1.useState)(0), option = _c[0], setOption = _c[1];
    var selectedPlan = Plans_1.Plans.getSelectedPlan(carrier, dataVolume, option);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_responsive_1.default, { query: "(max-width:700px)" },
                react_1.default.createElement("h1", null, "\u30D7\u30E9\u30F3\u6599\u91D1\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3"),
                react_1.default.createElement("p", null,
                    react_1.default.createElement(CarrierButtonList_1.CarrierButtonList, { getCarrier: setCarrier })),
                react_1.default.createElement("p", null,
                    react_1.default.createElement(OptionButtonList_1.OptionButtonList, { getCarrier: setOption })),
                react_1.default.createElement("div", { className: Simulation_module_css_1.default.slider },
                    react_1.default.createElement(SimulationSelecter_1.SimulationSelecter, { setDataVolume: setDataVolume })),
                react_1.default.createElement("br", null),
                react_1.default.createElement("p", null,
                    "\u9078\u629E : ",
                    dataVolume),
                react_1.default.createElement("p", null,
                    selectedPlan.carrierName,
                    ", ",
                    selectedPlan.planName,
                    ",",
                    " ",
                    selectedPlan.price,
                    "\u5186")),
            react_1.default.createElement(react_responsive_1.default, { query: "(min-width:701px)" },
                react_1.default.createElement("h1", null, "\u30D7\u30E9\u30F3\u6599\u91D1\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3"),
                react_1.default.createElement("p", null,
                    react_1.default.createElement(CarrierButtonList_1.CarrierButtonList, { getCarrier: setCarrier })),
                react_1.default.createElement("p", null,
                    react_1.default.createElement(OptionButtonList_1.OptionButtonList, { getCarrier: setOption })),
                react_1.default.createElement("div", { className: Simulation_module_css_1.default.slider },
                    react_1.default.createElement(SimulationSlider_1.SimulationSlider, { setDataVolume: setDataVolume })),
                react_1.default.createElement("br", null),
                react_1.default.createElement("p", null,
                    "\u9078\u629E : ",
                    dataVolume,
                    "GB"),
                react_1.default.createElement(react_2.Stack, { marginBlock: "20px" },
                    react_1.default.createElement(react_2.Heading, { size: "lg" }, "\u3042\u306A\u305F\u306B\u6700\u9069\u306A\u30D7\u30E9\u30F3\u306F\u2026"),
                    react_1.default.createElement(react_2.Heading, { size: "md" },
                        "\u30D7\u30E9\u30F3: ",
                        selectedPlan.carrierName),
                    react_1.default.createElement(react_2.Heading, { size: "md" },
                        "\u5BB9\u91CF: ",
                        selectedPlan.planName,
                        " "),
                    react_1.default.createElement(react_2.Heading, { size: "md" },
                        "\u6708\u984D: ",
                        selectedPlan.price,
                        "\u5186"))))));
};
exports.Simulation = Simulation;

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
exports.SimulationSelecter = void 0;
// シミュレーション画面のスライダーコンポーネント
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
// 20 50 70 100
var SimulationSelecter = function (props) {
    var _a = (0, react_1.useState)(5), dataVolume = _a[0], setDataVolume = _a[1];
    props.setDataVolume(dataVolume);
    //const volumes: number[] = [ 0.5, 1, 0, 0, 0, 5, 0, 0, 0, 0, 10, 0, 0, 0, 0, 15, 0, 0, 0, 0, 20, 50, 70, 100];
    var volumes = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 70, 100];
    //setDataVolume(volumes[Number(val)])
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Select, { defaultValue: 5, onChange: function (val) { return console.log(val); } }, (function () {
            // ここでスライダーのラベルを追加する
            // ごちゃごちゃしてるけどfor文で回してるだけ
            var items = [];
            for (var i = 0; i < volumes.length; i++) {
                items.push(react_1.default.createElement("option", { value: String(volumes[i]) }, volumes[i] + "GB"));
                console.log(dataVolume);
            }
            return react_1.default.createElement(react_1.default.Fragment, null, items);
            // for文埋め込みここまで
        })())));
};
exports.SimulationSelecter = SimulationSelecter;
/*const SliderLabel : React.FC<{ index: number; volume: number; }> = (props) => {
    const labelStyles = {
        mt: '5',
        ml: '-2.5',
        fontSize: 's',
    }
    let volumeText: String;
    if (props.volume == 0) {
        volumeText = "";
    //}
    //else if (props.volume < 1) {
    //    volumeText = (props.volume*1000).toString() + "MB";
    } else {
        //volumeText = props.volume.toString() + "GB";
        volumeText = props.volume.toString();
    }
    if (props.volume==-1) {
        volumeText = "[GB]";
        return <div className={Styles.mb}><SliderMark value={props.index} {...labelStyles}>{volumeText}</SliderMark></div>
    }
    return (
        <></>
    );
}*/ 

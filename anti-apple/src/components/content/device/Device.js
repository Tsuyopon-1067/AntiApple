"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var Device_module_css_1 = __importDefault(require("./Device.module.css"));
var react_responsive_1 = __importDefault(require("react-responsive"));
var Device = function (props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_responsive_1.default, { query: "(max-width: 900px)" },
            react_1.default.createElement(react_2.Container, null,
                react_1.default.createElement(react_2.VStack, { marginBottom: "20px", spacing: "8" },
                    react_1.default.createElement(react_2.Stack, { w: "300px" },
                        react_1.default.createElement(react_2.VStack, null,
                            react_1.default.createElement("figure", null,
                                react_1.default.createElement(react_2.Image, { w: "90%", src: props.img }),
                                react_1.default.createElement("figcaption", null,
                                    "\u51FA\u5178\uFF1A",
                                    props.source)))),
                    react_1.default.createElement(react_2.Box, { marginBottom: "30px", width: "90%" },
                        react_1.default.createElement(react_2.Stack, { spacing: "6" },
                            react_1.default.createElement(react_2.Heading, { size: "lg" },
                                react_1.default.createElement("span", null, props.manufacturer),
                                "\u2002",
                                react_1.default.createElement("span", null, props.name)),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "\u30B5\u30A4\u30BA\u3068\u91CD\u91CF"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u7E26"),
                            react_1.default.createElement("p", null, props.height),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u6A2A"),
                            react_1.default.createElement("p", null, props.width),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u539A\u3055"),
                            react_1.default.createElement("p", null, props.thickness),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u91CD\u91CF"),
                            react_1.default.createElement("p", null, props.weight),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u753B\u9762\u30B5\u30A4\u30BA"),
                            react_1.default.createElement("p", null,
                                props.displaySize,
                                "\u30A4\u30F3\u30C1"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u89E3\u50CF\u5EA6"),
                            react_1.default.createElement("p", null,
                                props.resolution,
                                "px"),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "CPU&GPU"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "SoC"),
                            react_1.default.createElement("p", null, props.soc),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "Antutu\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u30B9\u30B3\u30A2"),
                            react_1.default.createElement("p", null,
                                "\u7D04",
                                props.antutu,
                                "\u4E07\u70B9"),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "\u7AEF\u5B50\u985E"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u5145\u96FB\u30FB\u901A\u4FE1\u7AEF\u5B50"),
                            react_1.default.createElement("p", null, props.usb),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u30A4\u30E4\u30DB\u30F3\u30B8\u30E3\u30C3\u30AF"),
                            react_1.default.createElement("p", null, props.earphone),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "\u4FA1\u683C\u3068\u8CA9\u8DEF"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u4FA1\u683C"),
                            react_1.default.createElement("p", null,
                                props.price,
                                "\u5186"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u8CA9\u8DEF"),
                            react_1.default.createElement("p", null, props.market),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u5099\u8003"),
                            react_1.default.createElement(react_2.Text, null, props.note)))))),
        react_1.default.createElement(react_responsive_1.default, { query: "(min-width: 901px)" },
            react_1.default.createElement(react_2.Box, { className: Device_module_css_1.default.container },
                react_1.default.createElement(react_2.Stack, { direction: "row", spacing: "16" },
                    react_1.default.createElement(react_2.Box, { w: "300px" },
                        react_1.default.createElement(react_2.Stack, { spacing: "0" },
                            react_1.default.createElement(react_2.Image, { className: Device_module_css_1.default.image, src: props.img }),
                            react_1.default.createElement(react_2.Text, { className: Device_module_css_1.default.figcaption },
                                "\u51FA\u5178\uFF1A",
                                props.source))),
                    react_1.default.createElement(react_2.Box, null,
                        react_1.default.createElement(react_2.Stack, null,
                            react_1.default.createElement(react_2.Heading, { size: "lg" },
                                react_1.default.createElement("span", null, props.manufacturer),
                                "\u2002",
                                react_1.default.createElement("span", null, props.name)),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "\u30B5\u30A4\u30BA\u3068\u91CD\u91CF"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u7E26"),
                            react_1.default.createElement("p", null, props.height),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u6A2A"),
                            react_1.default.createElement("p", null, props.width),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u539A\u3055"),
                            react_1.default.createElement("p", null, props.thickness),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u91CD\u91CF"),
                            react_1.default.createElement("p", null, props.weight),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u753B\u9762\u30B5\u30A4\u30BA"),
                            react_1.default.createElement("p", null,
                                props.displaySize,
                                "\u30A4\u30F3\u30C1"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u89E3\u50CF\u5EA6"),
                            react_1.default.createElement("p", null,
                                props.resolution,
                                "px"),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "CPU&GPU"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "SoC"),
                            react_1.default.createElement("p", null, props.soc),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "Antutu\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u30B9\u30B3\u30A2"),
                            react_1.default.createElement("p", null,
                                "\u7D04",
                                props.antutu,
                                "\u4E07\u70B9"),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "\u7AEF\u5B50\u985E"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u5145\u96FB\u30FB\u901A\u4FE1\u7AEF\u5B50"),
                            react_1.default.createElement("p", null, props.usb),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u30A4\u30E4\u30DB\u30F3\u30B8\u30E3\u30C3\u30AF"),
                            react_1.default.createElement("p", null, props.earphone),
                            react_1.default.createElement(react_2.Heading, { size: "md" }, "\u4FA1\u683C\u3068\u8CA9\u8DEF"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u4FA1\u683C"),
                            react_1.default.createElement("p", null,
                                props.price,
                                "\u5186"),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u8CA9\u8DEF"),
                            react_1.default.createElement("p", null, props.market),
                            react_1.default.createElement(react_2.Heading, { size: "sm" }, "\u5099\u8003"),
                            react_1.default.createElement(react_2.Text, null, props.note))))))));
};
exports.Device = Device;
/*
      <MediaQuery query="(max-width: 900px)">
        <div className={Styles.flex}>
          <figure className={Styles.figure}>
            <Image className={Styles.img} src={props.img} />
            <p className={Styles.source}>出典：{props.source}</p>
          </figure>
          <div className={Styles.description}>
            <h1>
              <span className={Styles.deviceManufacturer}>
                {props.manufacturer}
              </span>
              &ensp;
              <span className={Styles.deviceName}>{props.name}</span>
            </h1>
            <p className={`${Styles.category} ${Styles.categoryFirst}`}>
              サイズと重量
            </p>
            <h3 className={Styles.subCategory}>縦</h3>
            <p className={Styles.info}>{props.height}</p>
            <h3 className={Styles.subCategory}>横</h3>
            <p className={Styles.info}>{props.width}</p>
            <h3 className={Styles.subCategory}>厚さ</h3>
            <p className={Styles.info}>{props.thickness}</p>
            <h3 className={Styles.subCategory}>重量</h3>
            <p className={Styles.info}>{props.weight}</p>
            <p className={Styles.category}>ディスプレイ</p>
            <h3 className={Styles.subCategory}>画面サイズ</h3>
            <p className={Styles.info}>{props.displaySize}インチ</p>
            <h3 className={Styles.subCategory}>解像度</h3>
            <p className={Styles.info}>{props.resolution}</p>
            <p className={Styles.category}>CPU&GPU</p>
            <h3 className={Styles.subCategory}>SoC</h3>
            <p className={Styles.info}>{props.soc}</p>
            <h3 className={Styles.subCategory}>Antutu</h3>
            <p className={Styles.info}>{props.antutu}</p>
            <p className={Styles.category}>端子類</p>
            <h3 className={Styles.subCategory}>充電・通信端子</h3>
            <p className={Styles.info}>{props.usb}</p>
            <h3 className={Styles.subCategory}>イヤホンジャック</h3>
            <p className={Styles.info}>{props.earphone}</p>
            <p className={Styles.category}>価格と販路</p>
            <h3 className={Styles.subCategory}>価格</h3>
            <p className={Styles.info}>{props.price}</p>
            <h3 className={Styles.subCategory}>販路</h3>
            <p className={Styles.info}>{props.market}</p>
            <p className={Styles.category}>備考</p>
            <p className={Styles.description}>{props.note}</p>
          </div>
        </div>
      </MediaQuery>

    :/

/* {<MediaQuery query="(min-width: 901px)">
<div className={Styles.flex}>
  <figure className={Styles.figure}>
    <Image className={Styles.img} src={props.img} />
    <figcaption className={Styles.source}>出典：{props.source}</figcaption>
  </figure>
  <div className={Styles.description}>
    <h1>
      <span className={Styles.deviceManufacturer}>
        {props.manufacturer}
      </span>
      &ensp;
      <span className={Styles.deviceName}>{props.name}</span>
    </h1>
    <p className={`${Styles.category} ${Styles.categoryFirst}`}>
      サイズと重量
    </p>
    <h3 className={Styles.subCategory}>縦</h3>
    <p className={Styles.info}>{props.height}</p>
    <h3 className={Styles.subCategory}>横</h3>
    <p className={Styles.info}>{props.width}</p>
    <h3 className={Styles.subCategory}>厚さ</h3>
    <p className={Styles.info}>{props.thickness}</p>
    <h3 className={Styles.subCategory}>重量</h3>
    <p className={Styles.info}>{props.weight}</p>
    <p className={Styles.category}>ディスプレイ</p>
    <h3 className={Styles.subCategory}>画面サイズ</h3>
    <p className={Styles.info}>{props.displaySize}インチ</p>
    <h3 className={Styles.subCategory}>解像度</h3>
    <p className={Styles.info}>{props.resolution}</p>
    <p className={Styles.category}>CPU&GPU</p>
    <h3 className={Styles.subCategory}>SoC</h3>
    <p className={Styles.info}>{props.soc}</p>
    <h3 className={Styles.subCategory}>Antutu</h3>
    <p className={Styles.info}>{props.antutu}</p>
    <p className={Styles.category}>端子類</p>
    <h3 className={Styles.subCategory}>充電・通信端子</h3>
    <p className={Styles.info}>{props.usb}</p>
    <h3 className={Styles.subCategory}>イヤホンジャック</h3>
    <p className={Styles.info}>{props.earphone}</p>
    <p className={Styles.category}>価格と販路</p>
    <h3 className={Styles.subCategory}>価格</h3>
    <p className={Styles.info}>{props.price}</p>
    <h3 className={Styles.subCategory}>販路</h3>
    <p className={Styles.info}>{props.market}</p>
    <p className={Styles.category}>備考</p>
    <p className={Styles.description}>{props.note}</p>
  </div>
</div>
</MediaQuery>}
*/

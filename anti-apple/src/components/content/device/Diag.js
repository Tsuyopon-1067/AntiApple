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
exports.Diag = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var Devices_1 = require("./Devices");
var Diag = function () {
    var DeviceData = [
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
    ];
    var _a = (0, react_1.useState)(DeviceData[1].name), best = _a[0], setBest = _a[1];
    var _b = (0, react_1.useState)("にばんめ"), second = _b[0], setSecond = _b[1];
    var _c = (0, react_1.useState)("さんばんめ"), third = _c[0], setThird = _c[1];
    var priceData = [];
    var powerData = [];
    var sizeData = [];
    var index = 0;
    for (var i = 0; i < DeviceData.length; i++) {
        priceData.push(DeviceData[i].price);
        powerData.push(DeviceData[i].antutu);
        sizeData.push(DeviceData[i].displaySize);
    }
    var Name = "";
    function sortPrice() {
        DeviceData.sort(function (sm, lg) {
            if (sm.price < lg.price) {
                return -1;
            }
            else if (sm.price > lg.price) {
                return 1;
            }
            else {
                return 0;
            }
        });
        setBest(DeviceData[0].name);
        setSecond(DeviceData[1].name);
        setThird(DeviceData[2].name);
        for (var i = 0; i < DeviceData.length; i++) {
            console.log(DeviceData[i].price);
        }
    }
    function sortSizeBig() {
        DeviceData.sort(function (sm, lg) {
            if (sm.displaySize < lg.displaySize) {
                return 1;
            }
            else if (sm.displaySize > lg.displaySize) {
                return -1;
            }
            else {
                return 0;
            }
        });
        setBest(DeviceData[0].name);
        setSecond(DeviceData[1].name);
        setThird(DeviceData[2].name);
        for (var i = 0; i < DeviceData.length; i++) {
            console.log(DeviceData[i].displaySize);
        }
    }
    function sortSizeSmall() {
        DeviceData.sort(function (sm, lg) {
            if (sm.displaySize < lg.displaySize) {
                return -1;
            }
            else if (sm.displaySize > lg.displaySize) {
                return 1;
            }
            else {
                return 0;
            }
        });
        setBest(DeviceData[0].name);
        setSecond(DeviceData[1].name);
        setThird(DeviceData[2].name);
        for (var i = 0; i < DeviceData.length; i++) {
            console.log(DeviceData[i].displaySize);
        }
    }
    function sortPower() {
        DeviceData.sort(function (sm, lg) {
            if (sm.antutu < lg.antutu) {
                return 1;
            }
            else if (sm.antutu > lg.antutu) {
                return -1;
            }
            else {
                return 0;
            }
        });
        setBest(DeviceData[0].name);
        setSecond(DeviceData[1].name);
        setThird(DeviceData[2].name);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_2.Container, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement(react_2.Stack, null,
                        react_1.default.createElement(react_2.HStack, null,
                            react_1.default.createElement(react_2.Button, { onClick: sortPrice }, "\u5024\u6BB5"),
                            react_1.default.createElement(react_2.Button, { onClick: sortSizeBig }, "\u30B5\u30A4\u30BA\uFF08\u5927\u304D\u3044\u9806\uFF09"),
                            react_1.default.createElement(react_2.Button, { onClick: sortSizeSmall }, "\u30B5\u30A4\u30BA\uFF08\u5C0F\u3055\u3044\u9806\uFF09"),
                            react_1.default.createElement(react_2.Button, { onClick: sortPower }, "\u6027\u80FD")),
                        react_1.default.createElement(react_2.Heading, null, "\u304A\u3059\u3059\u3081\u7AEF\u672B\u305D\u306E1"),
                        react_1.default.createElement(react_2.Heading, null, best),
                        react_1.default.createElement(react_2.Heading, null, "\u304A\u3059\u3059\u3081\u7AEF\u672B\u305D\u306E2"),
                        react_1.default.createElement(react_2.Heading, null, second),
                        react_1.default.createElement(react_2.Heading, null, "\u304A\u3059\u3059\u3081\u7AEF\u672B\u305D\u306E3"),
                        react_1.default.createElement(react_2.Heading, null, third)))))));
};
exports.Diag = Diag;
/*
  return (
    <>
      <MediaQuery query="(max-width: 900px)">
        <Container>
          <VStack marginBottom="20px" spacing="8">
            <Stack w="300px">
              <VStack>
                <figure>
                  <Image w="90%" src={props.img} />
                  <figcaption>出典：{props.source}</figcaption>
                </figure>
              </VStack>
            </Stack>
            <Box marginBottom="30px" width="90%">
              <Stack spacing="6">
                <Heading size="lg">
                  <span>おすすめ端末</span>
                  <span>{props.manufacturer}</span>
                  &ensp;
                  <span>{props.name}</span>
                </Heading>
                <Heading size="md">サイズと重量</Heading>
                <Heading size="sm">縦</Heading>
                <p>{props.height}</p>
                <Heading size="sm">横</Heading>
                <p>{props.width}</p>
                <Heading size="sm">厚さ</Heading>
                <p>{props.thickness}</p>
                <Heading size="sm">重量</Heading>
                <p>{props.weight}</p>
                <Heading size="md">ディスプレイ</Heading>
                <Heading size="sm">画面サイズ</Heading>
                <p>{props.displaySize}インチ</p>
                <Heading size="sm">解像度</Heading>
                <p>{props.resolution}px</p>
                <Heading size="md">CPU&GPU</Heading>
                <Heading size="sm">SoC</Heading>
                <p>{props.soc}</p>
                <Heading size="sm">Antutuベンチマークスコア</Heading>
                <p>約{props.antutu}万点</p>
                <Heading size="md">端子類</Heading>
                <Heading size="sm">充電・通信端子</Heading>
                <p>{props.usb}</p>
                <Heading size="sm">イヤホンジャック</Heading>
                <p>{props.earphone}</p>
                <Heading size="md">価格と販路</Heading>
                <Heading size="sm">価格</Heading>
                <p>{props.price}円</p>
                <Heading size="sm">販路</Heading>
                <p>{props.market}</p>
                <Heading size="sm">備考</Heading>
                <Text>{props.note}</Text>
                <Text>{priceData}</Text>
              </Stack>
            </Box>
          </VStack>
        </Container>
      </MediaQuery>

      <MediaQuery query="(min-width: 901px)">
        <Box className={Styles.container}>
          <Stack direction="row" spacing="16">
            <Box w="300px">
              <Stack spacing="0">
                  <Image className={Styles.image} src={props.img} />
                  <Text className={Styles.figcaption}>出典：{props.source}</Text>
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Heading size="lg">
                  <span>{props.manufacturer}</span>
                  &ensp;
                  <span>{props.name}</span>
                </Heading>
                <Heading size="md">サイズと重量</Heading>
                <Heading size="sm">縦</Heading>
                <p>{props.height}</p>
                <Heading size="sm">横</Heading>
                <p>{props.width}</p>
                <Heading size="sm">厚さ</Heading>
                <p>{props.thickness}</p>
                <Heading size="sm">重量</Heading>
                <p>{props.weight}</p>
                <Heading size="md">ディスプレイ</Heading>
                <Heading size="sm">画面サイズ</Heading>
                <p>{props.displaySize}インチ</p>
                <Heading size="sm">解像度</Heading>
                <p>{props.resolution}px</p>
                <Heading size="md">CPU&GPU</Heading>
                <Heading size="sm">SoC</Heading>
                <p>{props.soc}</p>
                <Heading size="sm">Antutuベンチマークスコア</Heading>
                <p>約{props.antutu}万点</p>
                <Heading size="md">端子類</Heading>
                <Heading size="sm">充電・通信端子</Heading>
                <p>{props.usb}</p>
                <Heading size="sm">イヤホンジャック</Heading>
                <p>{props.earphone}</p>
                <Heading size="md">価格と販路</Heading>
                <Heading size="sm">価格</Heading>
                <p>{props.price}円</p>
                <Heading size="sm">販路</Heading>
                <p>{props.market}</p>
                <Heading size="sm">備考</Heading>
                <Text>{props.note}</Text>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </MediaQuery>
    </>
  );
};
*/

import React, { useState } from "react";
import {
  Box,
  Stack,
  HStack,
  VStack,
  Text,
  Heading,
  Image,
  Container,
  Button,
} from "@chakra-ui/react";
import Styles from "./Device.module.css";
import MediaQuery from "react-responsive";

import {Device} from './Device';

import {
  Pixel6a,
  Xiaomi12TPro,
  Redminote11,
  iPhoneSE,
  iPhone14Pro,
  AQUOSsense7,
  motog52j,
  iPhone13mini,
  Pixel7,
  Pixel7Pro,
} from "./Devices";

export const Diag = () => {
  let DeviceData: DeviceType[] = [
    Pixel6a,
    Xiaomi12TPro,
    Redminote11,
    iPhoneSE,
    iPhone14Pro,
    AQUOSsense7,
    motog52j,
    iPhone13mini,
    Pixel7,
    Pixel7Pro,
  ];

  const [best, setBest] = useState(DeviceData[1].name);
  let [second, setSecond] = useState("にばんめ");
  let [third, setThird] = useState("さんばんめ");

  let priceData: number[] = [];
  let powerData: number[] = [];
  let sizeData: number[] = [];
  let index = 0;

  for (let i = 0; i < DeviceData.length; i++) {
    priceData.push(DeviceData[i].price);
    powerData.push(DeviceData[i].antutu);
    sizeData.push(DeviceData[i].displaySize);
  }

  let Name = "";

  type DeviceType = {
    name: string;
    manufacturer: string;
    img: string;
    height: string;
    width: string;
    thickness: string;
    weight: string;
    displaySize: number;
    resolution: string;
    soc: string;
    antutu: number;
    usb: string;
    earphone: string;
    price: number;
    market: string;
    note: string;
    source: string;  
  }

  function sortPrice() {
    DeviceData.sort(function (sm: DeviceType, lg: DeviceType) {
      if (sm.price < lg.price) {
        return -1;
      } else if (sm.price > lg.price) {
        return 1;
      } else {
        return 0;
      }
    });

    setBest(DeviceData[0].name)
    setSecond(DeviceData[1].name)
    setThird(DeviceData[2].name)


    for(let i = 0; i < DeviceData.length; i++){
      console.log(DeviceData[i].price);
      }
  }

  function sortSizeBig() {
    DeviceData.sort(function (sm: DeviceType, lg: DeviceType) {
      if (sm.displaySize < lg.displaySize) {
        return 1;
      } else if (sm.displaySize > lg.displaySize) {
        return -1;
      } else {
        return 0;
      }
    });

    setBest(DeviceData[0].name)
    setSecond(DeviceData[1].name)
    setThird(DeviceData[2].name)


    for(let i = 0; i < DeviceData.length; i++){
      console.log(DeviceData[i].displaySize);
      }
  }

  function sortSizeSmall() {
    DeviceData.sort(function (sm: DeviceType, lg: DeviceType) {
      if (sm.displaySize < lg.displaySize) {
        return -1;
      } else if (sm.displaySize > lg.displaySize) {
        return 1;
      } else {
        return 0;
      }
    });

    setBest(DeviceData[0].name)
    setSecond(DeviceData[1].name)
    setThird(DeviceData[2].name)


    for(let i = 0; i < DeviceData.length; i++){
      console.log(DeviceData[i].displaySize);
      }
  }

  function sortPower() {
    DeviceData.sort(function (sm: DeviceType, lg: DeviceType) {
      if (sm.antutu < lg.antutu) {
        return 1;
      } else if (sm.antutu > lg.antutu) {
        return -1;
      } else {
        return 0;
      }
    });

    setBest(DeviceData[0].name)
    setSecond(DeviceData[1].name)
    setThird(DeviceData[2].name)

  }


  return (
    <>
      <React.Fragment>
        <Container>
          <div>
            <Stack>
              <HStack>
                <Button onClick={sortPrice}>値段</Button>
                <Button onClick={sortSizeBig}>サイズ（大きい順）</Button>
                <Button onClick={sortSizeSmall}>サイズ（小さい順）</Button>
                <Button onClick={sortPower}>性能</Button>
              </HStack>
              <Heading>おすすめ端末その1</Heading>
              <Heading>{best}</Heading>
              <Heading>おすすめ端末その2</Heading>
              <Heading>{second}</Heading>
              <Heading>おすすめ端末その3</Heading>
              <Heading>{third}</Heading>
            </Stack>
          </div>
        </Container>
      </React.Fragment>
    </>
  );
};

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

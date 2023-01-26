import React from "react";
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
  const DeviceData: any[] = [
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

  let priceData: number[] = [];
  let powerData: number[] = [];
  let sizeData: number[] = [];
  let index = 0;

  for (let i = 0; i < DeviceData.length; i++) {
    priceData.push(DeviceData[i].price);
    powerData.push(DeviceData[i].antutu);
    sizeData.push(DeviceData[i].displaySize);
  }

  function sortPrice() {
    priceData.sort(function (sm, lg) {
      if (sm < lg) {
        return -1;
      } else if (sm > lg) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  function sortSizeBig() {
    priceData.sort(function (sm, lg) {
      if (sm < lg) {
        return 1;
      } else if (sm > lg) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  function sortSizeSmall() {
    priceData.sort(function (sm, lg) {
      if (sm < lg) {
        return -1;
      } else if (sm > lg) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  function sortPower() {
    powerData.sort(function (sm, lg) {
      if (sm < lg) {
        return -1;
      } else if (sm > lg) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  console.log(priceData);
  console.log(powerData);
  console.log(sizeData);

  return (
    <>
      <React.Fragment>
        <Container>
          <div>
            <Button>診断する</Button>
            <p>{DeviceData[index].name}</p>
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

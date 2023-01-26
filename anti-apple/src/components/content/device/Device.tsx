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
} from "@chakra-ui/react";
import Styles from "./Device.module.css";
import MediaQuery from "react-responsive";

export const Device = (props) => {
  return (
    <>
      <MediaQuery query="(max-width: 900px)">
        <Container>
          <VStack spacing="8">
            <Box w="300px">
              <VStack>
                <figure>
                  <Image w="90%" src={props.img} />
                  <figcaption>出典：{props.source}</figcaption>
                </figure>
              </VStack>
            </Box>
            <Box marginBottom="30px" width="90%">
              <Stack spacing="6">
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
                <p>{props.resolution}</p>
                <Heading size="md">CPU&GPU</Heading>
                <Heading size="sm">SoC</Heading>
                <p>{props.soc}</p>
                <Heading size="sm">Antutu</Heading>
                <p>{props.antutu}</p>
                <Heading size="md">端子類</Heading>
                <Heading size="sm">充電・通信端子</Heading>
                <p>{props.usb}</p>
                <Heading size="sm">イヤホンジャック</Heading>
                <p>{props.earphone}</p>
                <Heading size="md">価格と販路</Heading>
                <Heading size="sm">価格</Heading>
                <p>{props.price}</p>
                <Heading size="sm">販路</Heading>
                <p>{props.market}</p>
                <Heading size="sm">備考</Heading>
                <Text>{props.note}</Text>
              </Stack>
            </Box>
          </VStack>
        </Container>
      </MediaQuery>

      <MediaQuery query="(min-width: 901px)">
        <Container className={Styles.container}>
          <Stack direction="row" spacing="8">
            <Box w="300px">
              <Stack>
                <figure>
                  <Image src={props.img} />
                  <figcaption>出典：{props.source}</figcaption>
                </figure>
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
                <p>{props.resolution}</p>
                <Heading size="md">CPU&GPU</Heading>
                <Heading size="sm">SoC</Heading>
                <p>{props.soc}</p>
                <Heading size="sm">Antutu</Heading>
                <p>{props.antutu}</p>
                <Heading size="md">端子類</Heading>
                <Heading size="sm">充電・通信端子</Heading>
                <p>{props.usb}</p>
                <Heading size="sm">イヤホンジャック</Heading>
                <p>{props.earphone}</p>
                <Heading size="md">価格と販路</Heading>
                <Heading size="sm">価格</Heading>
                <p>{props.price}</p>
                <Heading size="sm">販路</Heading>
                <p>{props.market}</p>
                <Heading size="sm">備考</Heading>
                <Text>{props.note}</Text>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </MediaQuery>
    </>
  );
};

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

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
import Sidebar from "../../Sidebar";

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

export const RecoDevices = () => {
  const[DeviceData, setDeviceData] = useState<DeviceType[]>(
  [
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
    ]
  );

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
    index: number;
  }

  function sortRecommended() {
    DeviceData.sort((a: DeviceType, b: DeviceType) => a.index - b.index);
    renew();
  }
  function sortPrice() {
    DeviceData.sort((a: DeviceType, b: DeviceType) => a.price - b.price);
    renew();
  }
  function sortSizeBig() {
    DeviceData.sort((a: DeviceType, b: DeviceType) => b.displaySize - a.displaySize);
    renew();
  }
  function sortSizeSmall() {
    DeviceData.sort((a: DeviceType, b: DeviceType) => a.displaySize - b.displaySize);
    renew();
  }
  function sortPower() {
    DeviceData.sort((a: DeviceType, b: DeviceType) => b.antutu - a.antutu);
    renew();
  }
  function renew() {
    let d = DeviceData.concat();
    setDeviceData(d);
  }

  return (
    <>
      <MediaQuery query="(max-width:900px)">
        <React.Fragment>
          <div className={Styles.main}>
            <div className={Styles.article}>
              <Container>
                <div>
                  <Stack>
                    <HStack>
                      <Button onClick={sortRecommended}>総合</Button>
                      <Button onClick={sortPrice}>値段</Button>
                      <Button onClick={sortSizeBig}>サイズ（大きい順）</Button>
                      <Button onClick={sortSizeSmall}>サイズ（小さい順）</Button>
                      <Button onClick={sortPower}>性能</Button>
                    </HStack>
                    {(() => {
                        // ここで端末情報を追加する
                        // ごちゃごちゃしてるけどfor文で回してるだけ
                        const items: React.ReactNode[] = [];
                        for (let i: number = 0; i < 10; i++) {
                          items.push(<Heading>おすすめ端末その{i+1}</Heading>);
                          items.push(<Device {...DeviceData[i]} />);
                        }
                        return <React.Fragment>{items}</React.Fragment>;
                      // for文埋め込みここまで
                  })()}
                  </Stack>
                </div>
              </Container>
            </div>
          </div>
        </React.Fragment>
      </MediaQuery>

      <MediaQuery query="(min-width:901px)">
        <React.Fragment>
          <Stack direction="row" spacing="0">
            <Sidebar />
            <div className={Styles.main}>
              <div className={Styles.article}>
                <Container>
                  <div>
                    <Stack>
                      <HStack>
                        <Button onClick={sortRecommended}>総合</Button>
                        <Button onClick={sortPrice}>値段</Button>
                        <Button onClick={sortSizeBig}>サイズ（大きい順）</Button>
                        <Button onClick={sortSizeSmall}>サイズ（小さい順）</Button>
                        <Button onClick={sortPower}>性能</Button>
                      </HStack>
                      {(() => {
                          // ここで端末情報を追加する
                          // ごちゃごちゃしてるけどfor文で回してるだけ
                          const items: React.ReactNode[] = [];
                          for (let i: number = 0; i < 10; i++) {
                            items.push(<Heading>おすすめ端末その{i+1}</Heading>);
                            items.push(<Device {...DeviceData[i]} />);
                          }
                          return <React.Fragment>{items}</React.Fragment>;
                        // for文埋め込みここまで
                    })()}
                    </Stack>
                  </div>
                </Container>
              </div>
            </div>
          </Stack>
        </React.Fragment>
      </MediaQuery>
    </>
  );
};

export default RecoDevices;


import React from "react";
import MediaQuery from "react-responsive";
import { Heading, Stack } from "@chakra-ui/react";

import { Device } from "./Device"; // デバイスコンポーネント
import {
  Pixel6a,
  Xiaomi11TPro,
  Redminote11,
  iPhoneSE,
  iPhone14Pro,
  AQUOSsense7,
  motog52j,
} from "./Devices"; // 端末情報定義（端末追加のときはこっちをいじる）．波括弧内に端末を追加する．
import Sidebar from "../../Sidebar";

import Styles from "./Device.module.css";

const RecoDevices = () => {
  return (
    <>
      <MediaQuery query="(max-width:900px)">
        <React.Fragment>
          <div className={Styles.main}>
            <div className={Styles.article}>
            <Heading className={Styles.title} size="xl">
              おすすめ端末
            </Heading>
            {/* ここでテスト用デバイス画面を配置 */}
            <Device {...Pixel6a} />
            <Device {...AQUOSsense7} />
            <Device {...motog52j} />
            <Device {...Xiaomi11TPro} />
            <Device {...Redminote11} />
            <Device {...iPhoneSE} />
            <Device {...iPhone14Pro} />
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
                <Heading className={Styles.title} size="xl">
                  おすすめ端末
                </Heading>
                {/* ここでテスト用デバイス画面を配置 */}
                <Device {...Pixel6a} />
                <Device {...AQUOSsense7} />
                <Device {...motog52j} />
                <Device {...Xiaomi11TPro} />
                <Device {...Redminote11} />
                <Device {...iPhoneSE} />
                <Device {...iPhone14Pro} />
              </div>
            </div>
          </Stack>
        </React.Fragment>
      </MediaQuery>
    </>
  );
};

export default RecoDevices;

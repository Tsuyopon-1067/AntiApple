import React from "react";
import MediaQuery from "react-responsive";
import { Stack } from "@chakra-ui/react";

import { Device } from "./Device"; // デバイスコンポーネント
import {
  Pixel6a,
  Xiaomi11TPro,
  Redminote11,
  iPhoneSE,
  iPhone14,
  AQUOSsense7,
  motog52j,
} from "./Devices"; // 端末情報定義（端末追加のときはこっちをいじる）．波括弧内に端末を追加する．
import Sidebar from "../../Sidebar";

const RecoDevices = () => {
  return (
    <>
      <MediaQuery query="(max-width:900px)">
        <React.Fragment>
          <div>
            <h1>おすすめ端末</h1>
            <p>おすすめ端末1~10</p>
            {/* ここでテスト用デバイス画面を配置 */}
            <Device {...Pixel6a} />
            <Device {...AQUOSsense7} />
            <Device {...motog52j} />
            <Device {...Xiaomi11TPro} />
            <Device {...Redminote11} />
            <Device {...iPhoneSE} />
            <Device {...iPhone14} />
          </div>
        </React.Fragment>
      </MediaQuery>

      <MediaQuery query="(min-width:901px)">
        <React.Fragment>
          <Stack direction="row">
            <Sidebar />
            <div>
              <h1>おすすめ端末</h1>
              <p>おすすめ端末1~10</p>
              {/* ここでテスト用デバイス画面を配置 */}
              <Device {...Pixel6a} />
              <Device {...AQUOSsense7} />
              <Device {...motog52j} />
              <Device {...Xiaomi11TPro} />
              <Device {...Redminote11} />
              <Device {...iPhoneSE} />
              <Device {...iPhone14} />
            </div>
          </Stack>
        </React.Fragment>
      </MediaQuery>
    </>
  );
};

export default RecoDevices;

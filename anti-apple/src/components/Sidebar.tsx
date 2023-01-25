import React from "react";
import { Heading, Button, Box, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className={Styles.main}>
        <Box bg="white" flex="1" textAlign="center">
          <Stack>
            <Button as={NavLink} to="../../" bg="white">
              トップ
            </Button>
            <Button as={NavLink} to="/about" bg="white">
              格安SIMとは？
            </Button>
            <Button as={NavLink} to="/pros_cons" bg="white">
              格安SIMのメリット・デメリット
            </Button>
            <Button as={NavLink} to="/content" bg="white">
              コンテンツ一覧
            </Button>
            <Heading size="sm">おすすめ格安SIM リンク集</Heading>
            <Button as="a" href="https://ahamo.com" target= "_blank" bg="white">
              ahamo
            </Button>
            <Button as="a" href="https://povo.jp" target= "_blank"bg="white">
              povo
            </Button>
            <Button as="a" href="https://linemo.jp" target= "_blank" bg="white">
              LINEMO
            </Button>
            <Button as="a" href="https://www.uqwimax.jp/" target= "_blank" bg="white">
              UQ mobile
            </Button>
            <Button as="a" href="https://www.ymobile.jp/" target= "_blank" bg="white">
              Y!mobile
            </Button>
            <Button as="a" href="https://service.ocn.ne.jp/mobile/" target= "_blank" bg="white">
              OCNモバイルONE
            </Button>
            <Button as="a" href="https://www.mineo.jp/" target= "_blank" bg="white">
              mineo
            </Button>
            <Button as="a" href="https://www.iijmio.jp/" target= "_blank" bg="white">
              IIJmio
            </Button>
            <Button as="a" href="https://aeonmobile.jp/" target= "_blank" bg="white">
              イオンモバイル
            </Button>
            <Button as="a" href="https://www.jcom.co.jp/service/mobile/" target= "_blank" bg="white">
              J:COMモバイル
            </Button>
            <Button as="a" href="https://www.nihontsushin.com/" target= "_blank" bg="white">
              日本通信SIM
            </Button>
            <Button as="a" href="https://join.biglobe.ne.jp/mobile/" target= "_blank" bg="white">
              BIGLOBEモバイル
            </Button>
          </Stack>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

import React from "react";
import { Box, Button, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className={Styles.main}>
          <Box bg="teal" flex="1" textAlign="center">
          <Stack>
            <Button as={NavLink} to="../../" colorScheme="teal">
              トップ
            </Button>
            <Button as={NavLink} to="/about" colorScheme="teal">
              格安SIMとは？
            </Button>
            <Button as={NavLink} to="/pros_cons" colorScheme="teal">
              格安SIMのメリット・デメリット
            </Button>
            <Button as={NavLink} to="/content" colorScheme="teal">
              コンテンツ一覧
            </Button>
            </Stack>
            <p>これがサイドバー</p>
          </Box>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

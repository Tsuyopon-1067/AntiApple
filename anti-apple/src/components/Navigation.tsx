import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  useDisclosure,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import MediaQuery from "react-responsive";

import Styles from "./Navigation.module.css";
import Icon from "./antiApple.png";
import HamburgerIcon from "./hamburger.png";
import CloseIcon from "./batu.png";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  document.title = "格安モバイルWebへようこそ！";

  return (
    <>
      <MediaQuery query="(max-width:700px)">
        <div className={Styles.navDivMobile}>
          <div className={Styles.grid}>
            <div className={Styles.hamburgerDiv}>
              <IconButton
                icon={
                  <Image className={Styles.hamburger} src={HamburgerIcon} />
                }
                variant="customicon"
                onClick={onOpen}
                aria-label={"navIcon"}
              />
            </div>
            <div className={Styles.iconBtnDiv}>
              <Link to="/">
                <Image className={Styles.navIconMobile} src={Icon} />
              </Link>
            </div>
          </div>
          {
            //<h1 className={Styles.navTitle}>モバイル用ヘッダのテスト 700px以下で見れるはず</h1>
          }
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">
                <IconButton
                  icon={<Image className={Styles.hamburger} src={CloseIcon} />}
                  variant="customicon"
                  onClick={onClose}
                  aria-label={"navIcon"}
                />
                メニュー
              </DrawerHeader>
              <DrawerBody>
                <Accordion>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="center"
                          as={NavLink}
                          to="/"
                          onClick={onClose}
                        >
                          トップ
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="center">
                          格安SIMの概要
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <h3>
                        <Box
                          flex="1"
                          textAlign="center"
                          as={NavLink}
                          to="/about"
                          onClick={onClose}
                        >
                          格安SIMとは
                        </Box>
                      </h3>
                      <h3>
                        <Box
                          flex="1"
                          textAlign="center"
                          as={NavLink}
                          to="/pros_cons"
                          onClick={onClose}
                        >
                          メリット・デメリット
                        </Box>
                      </h3>
                      <h3>
                        <Box
                          flex="1"
                          textAlign="center"
                          as={NavLink}
                          to="/content/speed"
                          onClick={onClose}
                        >
                          速度比較
                        </Box>
                      </h3>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="center"
                          as={NavLink}
                          to="/content/plan/all_company"
                          onClick={onClose}
                        >
                          プラン一覧
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="center"
                          as={NavLink}
                          to="/content/simulation"
                          onClick={onClose}
                        >
                          シミュレーション
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="center"
                          as={NavLink}
                          to="/content/device/recommend_devices"
                          onClick={onClose}
                        >
                          おすすめ端末
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </MediaQuery>

      <MediaQuery query="(min-width:701px)">
        <React.Fragment>
          <div className={Styles.navDiv}>
            <div className={Styles.navHead}>
              <Link to="/">
                <Image className={Styles.navIcon} src={Icon} />
              </Link>
              <h1 className={Styles.navTitle}>格安モバイルWebへようこそ！</h1>
            </div>
            <Breadcrumb className={Styles.navMain} separator="" spacing="0">
              <BreadcrumbItem className={Styles.navNormal}>
                <BreadcrumbLink className={Styles.navLink} as={NavLink} to="/">
                  <p>トップ</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem className={Styles.navNormal}>
                <BreadcrumbLink className={Styles.navLink}>
                  <p>格安SIMの概要</p>
                </BreadcrumbLink>
                <Breadcrumb
                  className={Styles.navSubMain}
                  separator=""
                  spacing="0"
                >
                  <BreadcrumbItem className={Styles.navSub}>
                    <BreadcrumbLink
                      className={Styles.navLink}
                      as={NavLink}
                      to="/about"
                    >
                      <p>格安SIMとは</p>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem className={Styles.navSub}>
                    <BreadcrumbLink
                      className={Styles.navLink}
                      as={NavLink}
                      to="/pros_cons"
                    >
                      <p>メリット・デメリット</p>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem className={Styles.navSub}>
                    <BreadcrumbLink
                      className={Styles.navLink}
                      as={NavLink}
                      to="/content/plan/all_company"
                    >
                      <p>プラン一覧</p>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem className={Styles.navSub}>
                    <BreadcrumbLink
                      className={Styles.navLink}
                      as={NavLink}
                      to="/content/Speed"
                    >
                      <p>速度比較</p>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </BreadcrumbItem>
              <BreadcrumbItem className={Styles.navNormal}>
                <BreadcrumbLink
                  className={Styles.navLink}
                  as={NavLink}
                  to="/content/plan/all_company"
                >
                  <p>プラン一覧</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem className={Styles.navNormal}>
                <BreadcrumbLink
                  className={Styles.navLink}
                  as={NavLink}
                  to="/content/simulation"
                >
                  <p>シミュレーション</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem className={Styles.navNormal}>
                <BreadcrumbLink
                  className={Styles.navLink}
                  as={NavLink}
                  to="/content/device/recommend_devices"
                >
                  <p>おすすめ端末</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </React.Fragment>
      </MediaQuery>
    </>
  );
}

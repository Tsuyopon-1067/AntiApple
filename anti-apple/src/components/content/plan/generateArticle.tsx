import React from "react";
//import ReactDOM from 'react-dom';
import MediaQuery from "react-responsive";
import Sidebar from "../../Sidebar";
import Styles from "./company.module.css";

import {
  Box,
  Stack,
  Grid,
  GridItem,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const GenerateArticle = (props) => {
  const valuedata: JSX.Element[] = [];
  const optiondata: JSX.Element[] = [];
  for (let i = 0; i < props.gbtable.length; i++) {
    valuedata.push(
      <Tr>
        <Td>{props.gbtable[i]}</Td>
        <Td>{props.valuetable[i] + "円"}</Td>
        <Td>{props.valueremarktable[i]}</Td>
      </Tr>
    );
  }
  for (let j = 0; j < props.optiontable.length; j++) {
    optiondata.push(
      <Tr>
        <Td>{props.optiontable[j]}</Td>
        <Td>{props.optionvaluetable[j] + "円"}</Td>
        <Td>{props.optionremarktable[j]}</Td>
      </Tr>
    );
  }
  return (
    <>
      <MediaQuery query="(max-width: 900px)">
        <React.Fragment>
        <div>
          <div className={Styles.flex}>
            <Heading className={Styles.title}>{props.name}</Heading>
            <img className={Styles.img} src={props.img} alt="image"/>
            <Heading size="sm" className={Styles.heading}>概要</Heading>
            <p>{props.abstract}</p>
            <Heading size="sm" className={Styles.heading}>プラン</Heading>
            <TableContainer className={Styles.table}>
              <Table variant="simple">
                <TableCaption>月額、料金は税込です</TableCaption>
                <Thead>
                  <Tr>
                    <Th>データ容量</Th>
                    <Th>料金</Th>
                    <Th>備考</Th>
                  </Tr>
                </Thead>
                <Tbody>{valuedata}</Tbody>
              </Table>
            </TableContainer>
            <p>{props.value}</p>
            <Heading size="sm" className={Styles.heading}>オプション</Heading>
            <TableContainer className={Styles.table}>
              <Table variant="simple">
                <TableCaption>月額、料金は税込です</TableCaption>
                <Thead>
                  <Tr>
                    <Th>オプション</Th>
                    <Th>料金</Th>
                    <Th>備考</Th>
                  </Tr>
                </Thead>
                <Tbody>{optiondata}</Tbody>
              </Table>
            </TableContainer>
            <p>{props.option}</p>
            <Heading size="sm" className={Styles.heading}>通信速度</Heading>
            <p>{props.speed}</p>
            <Heading size="sm" className={Styles.heading}>まとめ・どんな人におすすめ？</Heading>
            <p>{props.recommended}</p>
            <Heading size="sm" className={Styles.heading}>参考文献</Heading>
            <p>{props.reference}</p>
          </div>
        </div>
        </React.Fragment>
      </MediaQuery>

      <MediaQuery query="(min-width: 901px)">
        <React.Fragment>
        <div>
          <Stack direction='row' spacing="0">

              <Sidebar/>
              <div className={Styles.flex}>
                <div className={Styles.article}>
                  <Heading size="xl" className={Styles.title}>{props.name}</Heading>
                  <img className={Styles.img} src={props.img} alt="image"/>
                  <Heading className = {Styles.heading} size="lg">概要</Heading>
                  <p>{props.abstract}</p>
                  <Heading className = {Styles.heading} size="lg">プラン</Heading>
                  <TableContainer className={Styles.table}>
                    <Table variant="simple">
                      <TableCaption>月額、料金は税込です</TableCaption>
                      <Thead>
                        <Tr>
                          <Th>データ容量</Th>
                          <Th>料金</Th>
                          <Th>備考</Th>
                        </Tr>
                      </Thead>
                      <Tbody>{valuedata}</Tbody>
                    </Table>
                  </TableContainer>
                  <p>{props.value}</p>
                  <Heading className = {Styles.heading} size="lg">オプション</Heading>
                  <TableContainer className={Styles.table}>
                    <Table variant="simple">
                      <TableCaption>月額、料金は税込です</TableCaption>
                      <Thead>
                        <Tr>
                          <Th>オプション</Th>
                          <Th>料金</Th>
                          <Th>備考</Th>
                        </Tr>
                      </Thead>
                      <Tbody>{optiondata}</Tbody>
                    </Table>
                  </TableContainer>
                  <p>{props.option}</p>
                  <Heading className = {Styles.heading} size="lg">通信速度</Heading>
                  <p>{props.speed}</p>
                  <Heading className = {Styles.heading} size="lg">まとめ・どんな人におすすめ？</Heading>
                  <p>{props.recommended}</p>
                  <Heading className = {Styles.heading} size="lg">参考文献</Heading>
                  <p>{props.reference}</p>
                </div>
              </div>
          </Stack>
        </div>
      </React.Fragment>
      </MediaQuery>
    </>
  );
};

export default GenerateArticle;

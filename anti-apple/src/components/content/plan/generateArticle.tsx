import React from "react";
//import ReactDOM from 'react-dom';
import MediaQuery from "react-responsive";
import Sidebar from "../../Sidebar";
import Styles from "./company.module.css";

import {
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
        <div>
          <div className={Styles.flex}>
            <Heading className={Styles.title}>{props.name}</Heading>
            <img className={Styles.img} src={props.img} />
            <h2>概要</h2>
            <p>{props.abstract}</p>
            <h2>プラン</h2>
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
            <h2>オプション</h2>
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
            <h2>通信速度</h2>
            <p>{props.speed}</p>
            <h2>まとめ・どんな人におすすめ？</h2>
            <p>{props.recommended}</p>
            <h2>参考文献</h2>
            <p>{props.reference}</p>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery query="(min-width: 901px)">
        <div>
          <Stack direction='row'>

              <Sidebar />
              <div className={Styles.flex}>
                <div className={Styles.article}>
                  <Heading className={Styles.title}>{props.name}</Heading>
                  <img className={Styles.img} src={props.img} />
                  <h2>概要</h2>
                  <p>{props.abstract}</p>
                  <h2>プラン</h2>
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
                  <h2>オプション</h2>
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
                  <h2>通信速度</h2>
                  <p>{props.speed}</p>
                  <h2>まとめ・どんな人におすすめ？</h2>
                  <p>{props.recommended}</p>
                  <h2>参考文献</h2>
                  <p>{props.reference}</p>
                </div>
              </div>
          </Stack>
        </div>
      </MediaQuery>
    </>
  );
};

export default GenerateArticle;

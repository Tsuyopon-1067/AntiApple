import React from "react";
import { Link } from "react-router-dom";
import { Flex, Stack, Heading, IconButton, Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa"
import Styles from './CardStyles.module.css'

const GenerateCard = (props) => {
  const carddata: JSX.Element[] = [];
  //const linkdata:JSX.Element[] = [];
  for (let i = 0; i < props.cardtitle.length; i++) {
    carddata.push(

      <Card className = {Styles.card} rounded = "lg">
        <Link to={props.cardlink[i]}>
        <CardHeader>
            <Heading size = 'md'>{props.cardtitle[i]}</Heading>
        </CardHeader>
          <CardBody>
            <Text>{props.carddetail[i]}</Text>
          </CardBody>
          <CardFooter>
          <IconButton aria-label="詳しく見る" isRound icon={<FaArrowRight />}></IconButton>
          </CardFooter>
        </Link>
      </Card>
    );
  }
  return <div className = {Styles.main}>{carddata}</div>;
};

export default GenerateCard;

import React from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Heading,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Styles from "./CardStyles.module.css";
import MediaQuery from "react-responsive";

const GenerateCard = (props) => {
  const carddata: JSX.Element[] = [];
  //const linkdata:JSX.Element[] = [];
  for (let i = 0; i < props.cardtitle.length; i++) {
    carddata.push(
      <Card className={Styles.card} rounded="lg">
        <Link to={props.cardlink[i]}>
          <CardHeader>
            <Heading size="sm">{props.cardtitle[i]}</Heading>
          </CardHeader>
          <CardBody>
            <Text noOfLines={[1,2]}>{props.carddetail[i]}</Text>
          </CardBody>
          <CardFooter>
            <IconButton
              aria-label="詳しく見る"
              isRound
              icon={<FaArrowRight />}
            ></IconButton>
          </CardFooter>
        </Link>
      </Card>
    );
  }
  return (
    <>
      <MediaQuery query="(max-width:800px)">
        <div className={Styles.main}>
          <Stack spacing="24px">{carddata}</Stack>
        </div>
      </MediaQuery>

      <MediaQuery query="(min-width:801px)">
        <div className={Styles.main}>
          <SimpleGrid columns={2} className = {Styles.grid} spacing="24px">{carddata}</SimpleGrid>
        </div>
      </MediaQuery>
    </>
  );
};

export default GenerateCard;

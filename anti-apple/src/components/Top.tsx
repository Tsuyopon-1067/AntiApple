import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";

import Carousel from "./Carousel/Carousel";
import GenerateCard from "./Card";

const Top = () => {
  return (
    <React.Fragment>
      <Carousel />
      <div>
        <GenerateCard
          cardtitle={[
            "ホーム",
            "格安SIMとは？",
            "格安SIMのメリット・デメリット",
            "コンテンツ一覧",
          ]}
          carddetail={[
            "トップページです。",
            "格安SIMをよく知らない！という人にも、まずは格安SIMについて知ってもらいます。あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
            "格安SIMのメリット・デメリットについて、またどんな人に向いているのかについて解説します。",
            "コンテンツ一覧です。",
          ]}
          cardlink={["/", "/about", "/pros_cons", "/content"]}
        />
      </div>
    </React.Fragment>
  );
};

export default Top;

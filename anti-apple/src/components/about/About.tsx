import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Stack, List, ListItem, ListIcon, Heading } from "@chakra-ui/react";
import { AiFillCheckCircle, AiFillLike } from "react-icons/ai";
import Styles from "./about.module.css";
import Sidebar from "../Sidebar";

const title: string = "格安SIMとは？";
const about: string =
  "格安SIMとは、基本料金が安いSIMカード、携帯通信事業者のことを指します。格安SIMは、主にMVNOと呼ばれるドコモ、au、ソフトバンクといった大手キャリアから基地局などの通信設備を間借りして運用されている形態と、それらの大手キャリアが顧客対応をオンライン専用にするなどして安く運営しているサブブランドに二分されます。プランの自由度も高く、料金設定が小刻みで自分の使いたい容量に合ったプランが選択しやすいことも多いです。中には基本料を0円とし、その都度課金するオプション形式で通信容量を購入するものもあります。業者によっては、複数の大手キャリアから回線を間借りすることで、居住地に合った回線を選ぶことができるようにしているものもあります。格安SIMのデメリットとも呼べる点として、サポートは大手キャリアのメインブランドに比べて弱い点があります。特に、実店舗を持たない形式で運営されている格安SIMは、トラブルが発生した際、カスタマーサポートに連絡する前にまずは自分で情報を調べて対応する必要があります。とはいえ、大抵の情報はインターネットに載っているので、ほとんどのトラブルは誰でも自己解決できるでしょう。以上を踏まえると、スマートフォンをより安く、自由に使いたい人が格安SIMを利用するメリットは十分大きいと考えられます。";
const feat: string[] = [
  "料金が安い",
  "MVNOと大手キャリアのサブブランドの2パターンに分かれる", 
  "プランの自由度が高い",
  "速度は千差万別、時間帯によっては安定しない場合も",
  "プランの自由度が高い",
  "テザリングもちゃんとできる",
  "サポートは大手キャリアのメインブランドに比べると弱い",
];
const img: JSX.Element = <div></div>;
const recommended: string[] = [
  "節約したい人",
  "大手キャリアのプラン体制に不満がある人",
  "小容量~中容量(20GB程度まで)の利用が多い人",
  "複数回戦を使いたい人",
  "まずは自分で調べる人（重要）",
];

const About = () => {
  const featData: JSX.Element[] = [];
  const recoData: JSX.Element[] = [];

  for (let i = 0; i < feat.length; i++) {
    featData.push(
      <ListItem>
        <ListIcon as={AiFillCheckCircle} color="green.500" />
        {feat[i]}
      </ListItem>
    );
  }

  for (let i = 0; i < recommended.length; i++) {
    recoData.push(
      <ListItem>
        <ListIcon as={AiFillLike} color="blue.500" />
        {recommended[i]}
      </ListItem>
    );
  }

  return (
    <>
      <MediaQuery query="(max-width:900px)">
        <React.Fragment>
          <div className={Styles.flex}>
            <div className={Styles.article}>
              <Heading className={Styles.title}>{title}</Heading>
              <Heading className={Styles.heading} size="lg">
                格安SIMの特徴
              </Heading>
              <List marginBottom="20px" spacing={2}>
                {featData}
              </List>
              <p>{about}</p>
              <Heading className={Styles.heading} size="lg">
                どんな人におすすめ？
              </Heading>
              <List marginBottom="20px" spacing={2}>
                {recoData}
              </List>
              <p>{img}</p>
            </div>
          </div>
        </React.Fragment>
      </MediaQuery>

      <MediaQuery query="(min-width:901px)">
        <React.Fragment>
          <Stack direction="row" spacing="0">
            <Sidebar />
            <div className={Styles.flex}>
              <div className={Styles.article}>
                <Heading className={Styles.title}>{title}</Heading>
                <Heading className={Styles.heading} size="lg">
                  格安SIMの特徴
                </Heading>
                <List marginBottom="20px" spacing={2}>
                  {featData}
                </List>
                <p>{about}</p>
                <Heading className={Styles.heading} size="lg">
                  どんな人におすすめ？
                </Heading>
                <List marginBottom="20px" spacing={2}>
                  {recoData}
                </List>
                <p>{img}</p>
              </div>
            </div>
          </Stack>
        </React.Fragment>
      </MediaQuery>
    </>
  );
};
export default About;

import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Stack, List, ListItem, ListIcon, Heading } from "@chakra-ui/react";
import { AiFillCheckCircle, AiFillWarning } from "react-icons/ai";
import Styles from "./about.module.css";
import Sidebar from "../Sidebar";

const title: string = "格安SIMのメリット・デメリット";
const pros: string =
  "格安SIMのメリットは、まず第一に料金が安いことが挙げられます（当たり前ですが）。格安SIMの業者は大手キャリアの基地局などの設備を借りて運用し、実店舗も一部を除いて非常に少ないか、完全に実店舗がありません。そのため設備投資費用や人件費などの経費を抑え、安くサービスを提供することができているのです。また、一部の格安SIMは大手キャリアやその子会社が自ら運用しているものもあり、そのようなSIMは回線も十分速い場合が多いので、一概に安い=遅いとは言えません。プランのわかりやすさや自由度の高さも魅力です。今ではだいぶ改善されたように感じますが、大手キャリアのプランは光回線やクレジットカードのセット割引が多く、お得なように感じて実はわかりにくいです。また、元々の料金が安いわけではないのでそれらの割引の効果も感じにくいです。また、プランは大手3社とも初めてスマホを持つ方向けのプラン、高速通信できる通信容量（いわゆるギガ）は少なく、1~7GB程度なものの使った分だけ課金（従量課金制）されるプラン、定額使い放題のプランの3形態で、8GB~15GB前後の中間の容量のプランがなくかなり自由度が低いです。格安SIMのプランは、業者にもよりますが大手と異なり小容量から大容量まで小刻みに料金設定されていることが多く、プラン設計に無駄がありません。また、もともとの料金が大手キャリアより安いため月に使う容量が大きく変動する人が大容量プランを契約した場合でも大手キャリアより安くなる場合があります。端末価格に関しては、大手キャリアは分割払いでの購入を推奨しており、現在では2年後に端末を返却する（機種変するときに手元に残らない）ことで実際に支払う端末料金を下げられるいわば車の残価設定型ローンのような購入方法が流行っています。そのため、そのような方式での分割払いを行う前提になっているのか同じ端末でも大手キャリア版は割引を受けられない場合、格安SIMの業者や家電量販店、メーカー公式通販などを通して買うモデルより若干端末価格が高い場合が多いです。";
const prosList: string[] = [
  "料金が安い",
  "プラン、業者によっては速度も十分速い",
  "キャリアの契約に比べややこしい割引や縛りが少ない",
  "プランの自由度が高い",
  "同じ端末を買う場合大手キャリアに比べ端末価格が安いことが多い（あくまで定価の場合）",
];
const cons: string =
  "格安SIMにも当然デメリットはあります。最大の問題は、トラブルが起こった時のサポートが受けにくい点です。「格安SIMのメリット」の項でも説明した通り、格安SIMの業者は一部を除き実店舗が非常に少ないか、全く実店舗がない場合が多いです。契約上の手続きやトラブル対応はインターネット経由を前提としており、困った時に自分で調べる前にまずは店舗に行く！というやり方は通用しません。（少なくとも、2022年7月のau通信障害でauショップに押しかけたような人々には厳しいものがあるでしょう）。そのほか、時間帯によって通信速度が安定しない業者もあり、特に昼の12時台は業者によってかなり速度に差があります。端末の選びにくさも難点で、実店舗の多い業者や大手キャリアであれば自分の用途に合った端末をアドバイスしてもらえる場合もありますが、オンライン手続きを前提としている格安SIM業者では多くの種類の端末から自分で情報を調べて選ぶ必要があります。端末を購入した後も、APN設定というデータ通信を行うための設定を初期設定時に行う必要があります。もちろん設定方法は業者の公式サイトやSIM本体の同梱書類に記載されていますが、SIMを挿しただけで通信開始ではありません。以上のように、格安SIMを選んだり、利用を行ったりする際は、「自分で調べる」というプロセスが非常に重要になってきます。ネットで調べれば大抵のトラブルは解決します。当サイトが、皆様の格安SIM選びの一助となることを願います…";
const consList: string[] = [
  "トラブルが起こった時のサポートが受けにくい",
  "時間帯によって速度が安定しない",
  "端末が選びにくい",
  "端末設定がワンステップ増える",
];

const ProsCons = () => {
  const prosData: JSX.Element[] = [];
  const consData: JSX.Element[] = [];

  for (let i = 0; i < prosList.length; i++) {
    prosData.push(
      <ListItem>
        <ListIcon as={AiFillCheckCircle} color="green.500" />
        {prosList[i]}
      </ListItem>
    );
  }

  for (let i = 0; i < consList.length; i++) {
    consData.push(
      <ListItem>
        <ListIcon as={AiFillWarning} color="red.500" />
        {consList[i]}
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
                格安SIMのメリット
              </Heading>
              <List marginBottom="20px" spacing={2}>
                {prosData}
              </List>
              <p>{pros}</p>
              <Heading className={Styles.heading} size="lg">
                格安SIMのデメリット
              </Heading>
              <List marginBottom="20px" spacing={2}>
                {consData}
              </List>
              <p>{cons}</p>
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
                  格安SIMのメリット
                </Heading>
                <List marginBottom="20px" spacing={2}>
                  {prosData}
                </List>
                <p>{pros}</p>
                <Heading className={Styles.heading} size="lg">
                  格安SIMのデメリット
                </Heading>
                <List marginBottom="20px" spacing={2}>
                  {consData}
                </List>
                <p>{cons}</p>
              </div>
            </div>
          </Stack>
        </React.Fragment>
      </MediaQuery>
    </>
  );
};
export default ProsCons;

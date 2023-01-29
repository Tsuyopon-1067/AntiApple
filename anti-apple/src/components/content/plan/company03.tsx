import React from "react";
import GenerateArticle from "./generateArticle";

const company03 = () => {
  return (
    <div>
      <GenerateArticle
        name="LINEMO"
        img="https://www.linemo.jp/assets/images/common/logo.svg"
        abstract="LINEMOは、ソフトバンクが提供しているオンライン限定の格安プランです。比較的通信速度が早く、昼間でも安定して使えます。"
        gbtable={["3GB", "20GB"]}
        valuetable={[990, 2728]}
        valueremarktable={[
          "データ容量超過後の通信速度は300Kbps, LINEスタンププレミアム for LINEMO非対応",
          "データ容量超過後の通信速度は1Mbps",
        ]}
        value="プラン構成は、低容量の3GBと20GBの二形態です。特筆すべきは3GBミニプランのコスパの良さで、大手通信キャリアのソフトバンクとほぼ変わらない品質の回線が月額990円という安さで使えます。どちらもLINEカウントフリーを採用しており、LINEは通話を含めいくら使用してもデータ容量を消費しません。ただし、データ容量超過後の通信速度は3GBが300Kbps、20GBが1Mbpsになる点は要注意です。"
        optiontable={[
          "5分以内かけ放題",
          "かけ放題",
          "LINE Music for SoftBank",
          "持込端末保証 with AppleCare Services",
          "持込端末保証",
          "留守電パック",
          "+メッセージ",
          "セキュリティパックプラス(L)",
          "フィルタリング",
          "世界対応ケータイ",
          "国際電話",
        ]}
        optionvaluetable={[550, 1650, 980, 1480, 715, 220, 0, 660, 0, 0, 0]}
        optionremarktable={[
          "国内に限る",
          "国内に限る",
          "学生は480円",
          "iPhone 14 Proの場合。iPhoneのモデルによって料金は異なります。",
          "Android端末もしくはiPad向け",
          "",
          "",
          "",
          "",
          "オプション加入料金と別途にデータサービス定額料金が発生します。",
          "オプション加入料金と別途に通話料が発生します。",
        ]}
        option="LINEMOはオプションも充実しています。別途通信料金はかかりますが海外ローミングも可能で、海外に出かける用事の多い方のメイン回線としても便利です。"
        speed="LINEMOは比較的速度が速いです。格安SIMの中には昼間の速度が非常に安定しないものもありますが、LINEMOは運営元が大手キャリアのソフトバンクであるため昼間でも安定して速度が出ます。ストレスなくいつでも使いたい方におすすめです。筆者のメイン回線はLINEMOですが、平日の昼間にWi-Fiのない環境で利用しても全くストレスがありません。"
        recommended="LINEでよく通話をする人や、通信品質の安定感を求めている方におすすめです。その性質ゆえ、メイン回線としても非常に扱いやすいでしょう。ただし、PayPayをよく使われる方や店頭サポートを求める方、家族で同じ携帯電話会社を利用する方は料金自体は割高になりますが同じソフトバンク系のY!mobileがおすすめです。Y!mobileであれば家族割引や、PayPayをはじめとしたYahoo!系のサービスで優遇措置があるYahoo!プレミアムが無料で利用できます。"
        reference="【公式】LINEMO｜ミニプランが最大半年間基本料実質無料｜格安SIM／格安スマホ (https://www.linemo.jp/)"
      />
    </div>
  );
};

export default company03;

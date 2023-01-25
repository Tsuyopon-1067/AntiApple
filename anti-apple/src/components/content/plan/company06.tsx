import React from "react";
import GenerateArticle from "./generateArticle";

const company06 = () => {
  return (
    <div>
      <GenerateArticle
        name="OCNモバイルONE"
        img="https://service.ocn.ne.jp/mobile/img/logo_mobileone.png"
        abstract="OCNモバイルONEは、ドコモのグループ会社である「NTTコミュニケーションズ」が提供している格安プランです。通信速度は高速ではありませんが必要十分です。特筆すべきは新規契約・他社乗り換えに対する破格の端末セールが頻繁に行われていることです。最初にOCNモバイルONEで端末を安く買い、その後により高速な回線が使える他社格安プランに乗り換えるという使い方がおすすめです。以前は他社プラン使用時よりも電池消費量が多くなる問題がありましたが、現在は解消されています。"
        gbtable={["500MB", "1GB", "3GB", "6GB", "10GB"]}
        valuetable={[550, 770, 990, 1320, 1760]}
        valueremarktable={["最大10分相当/月の無料通話あり", "", "", "", ""]}
        value="プラン構成は、10GB以下の低容量プランが中心です。500MB（税込み550円/月）という超低用量プランが提供されていることが特徴です。上述の通り回線品質は高いとは言えませんが、ドコモ回線を使用しているため、他社のドコモ回線使用格安プランと同様に、広い範囲の通信が可能です。"
        optiontable={[
          "容量追加オプション（1GB）",
          "10分かけ放題",
          "トップ3かけ放題",
          "完全かけ放題",
        ]}
        optionvaluetable={[550, 935, 935, 1430]}
        optionremarktable={["OCN アプリ経由で申し込みの場合", "", "", ""]}
        option="OCNモバイルONEは容量追加オプションとかけ放題オプションが用意されています。国際電話は申込不要で、国際ローミングサービスは申込みをすることで無料で利用できます（月額料金は無料ですが、利用時に国際電話・国際ローミングの料金がかかります）。"
        speed="OCNモバイルONEの回線速度はそこそこです。高速とは言えません。郊外では問題なく使用できますが、都市部の人が密集している場所では通信速度が低下する場合があります。しかし、NTTドコモと密に運営されているため、ドコモ回線使用している他社の格安プランよりは安定します。"
        recommended="端末を格安で購入できるため、今使っているスマートフォンが古くなっている人は格安SIMの入門としておすすめです。また、すでに新しいスマートフォンを持っている人も、サブスマホ・サブ回線を手に入れたい人にはおすすめです。すでに新しいスマートフォンを持っていてサブ回線は必要ないという人は、他社のより高速な回線が使えるプランを選ぶほうが良いです。"
        reference="OCN モバイル ONE｜格安SIM・格安スマホ | OCN (https://service.ocn.ne.jp/mobile/)"
      />
    </div>
  );
};

export default company06;

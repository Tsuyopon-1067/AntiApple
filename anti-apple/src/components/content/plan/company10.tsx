import React from 'react';
import GenerateArticle from './generateArticle';

const company10 = () => {
    return (
        <div>
          <GenerateArticle
            name="J:COMモバイル"
            img="https://www.jcom.co.jp/common_v10/images/logo-jcom-mobile.svg"
            abstract="J:COMはau回線のみの提供をしている格安SIMです。割引やデータ増量特典を利用すれば格安SIM最安級でとてもコスパがよいです。"
            gbtable={["1GB", "5GB", "20GB", "30GB"]}
            valuetable={[1078, 1628, 2178, 1650]}
            valueremarktable={[
              "容量超過後の通信速度は最大200Kbps", 
              "容量超過後の通信速度は最大200Kbps", 
              "容量超過後の通信速度は最大1Mbps", 
              "容量超過後の通信速度は最大1Mbps"
            ]}
            value="他のJ:COMサービスに加入することで適用されるデータ盛によって、ずっと1GB→5GB、5GB→10GB、10GB→20GB、20GB→30GBとなり、余ったデータ容量は翌月に自動で繰り越しされます。26歳以下なら最強ヤング割でさらにお得になります。"
            optiontable={[
              "かけ放題(5分/回)", 
              "かけ放題(60分/回)", 
              "お手軽♪パック", 
              "ぴったり♪パック", 
              "安心端末保証48", 
              "AppleCare+ for iPhone", 
              "端末保証 for iPhone", 
              "あんしんフィルター for J:COM", 
              "割込通話サービス", 
              "お留守番サービスEX", 
              "迷惑電話撃退サービス", 
              "追加データ500MB", 
              "追加データ1GB"
            ]}
            optionvaluetable={[550, 1650, 1628, 2178, 550, 682, 660, 0, 220, 330, 110, 220, 330]}
            optionremarktable={[
              "", 
              "", 
              "データ容量5GB+かけ放題(5分/回)", 
              "データ容量10GB+かけ放題(5分/回)", 
              "", 
              "月額料金は機種により異なります。", 
              "", 
              "", 
              "", 
              "", 
              "", 
              "保有できるデータ量の上限100GBを超えた場合データの追加購入はできません。", 
              "保有できるデータ量の上限100GBを超えた場合データの追加購入はできません。"
              
            ]}
            option="J:COMはオプションも充実しています。かけ放題オプションだけでなく、かけ放題とデータ容量を組み合わせたかけ放題付きパックもあります。"
            speed="J:COMの通信速度は比較的速いです。昼間に落ち込むということもそこまでなく、安定した速度で利用することができます。"
            recommended="訪問サポートが利用できるため、オンライン専用プランが不安という方におすすめです。ドコモ、ソフトバンク回線は使えないため、ドコモ、ソフトバンク回線を使いたい人は他の会社がおすすめです。"
            reference="J:COM 公式サイト | ケーブルテレビ（CATV）・インターネット・電話・格安スマホ・電気 (https://www.jcom.co.jp/?sc_pid=common_jcomlogo_01)"
          />
        </div>
      );
    };

export default company10;
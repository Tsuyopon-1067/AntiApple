import React from 'react';
import GenerateArticle from './generateArticle';

const company08 = () => {
    return (
        <div>
          <GenerateArticle
            name="IIJmio"
            img="https://www.iijmio.jp/image/header-logo.png"
            abstract="IIJmioはIIJ社が運営する格安SIMで、5種類のデータ容量と、ドコモ、auの2種類の回線から選ぶことができます。"
            gbtable={["2GB", "4GB", "8GB", "15GB", "20GB"]}
            valuetable={[850, 990, 1500, 1800, 2000]}
            valueremarktable={[
            ]}
            value="プラン編成は、音声SIM・音声eSIM(タイプAのみ)、SMS、データ(タイプDのみ)、データeSIM(ドコモ網のみ)となっており、それぞれ2GB、4GB、8GB、15GB、20GBから選べます。ここに示したプランは音声SIM・音声eSIMとなっています。"
            optiontable={[
              "みおふぉんダイアル通話定額5分+", 
              "みおふぉんダイアル通話定額10分+", 
              "みおふぉんダイアルかけ放題+", 
              "ギガプラン専用追加データ量(1GB)", 
              "留守番電話", 
              "割り込み電話着信", 
              "迷惑電話ストップサービス", 
              "端末補償オプション"
            ]}
            optionvaluetable={[500, 700, 1400, 220, 330, 220, 0, 418]}
            optionremarktable={[
              "国内に限る。", 
              "国内に限る。", 
              "国内に限る。", 
              "購入当月のみ有効。毎月最大20枚まで購入できます。", 
              "", 
              "", 
              "タイプAの場合110円", 
              "月額料金は機種により異なります。"
              
            ]}
            option="IIJmioはオプションも充実しています。2023年1月末までの割引キャンペーンにより、みおふぉんダイアルは3ヶ月間上に示した料金から410円割引となっています。"
            speed="IIJmioの通信速度は格安SIMの中では遅くはないです。"
            recommended="格安SIMの老舗であるため、安定感があります。そのため情報が多く格安SIM初心者にもおすすめです。また、頻繁に端末購入割引を行っており、端末とセットで回線契約したい方にもおすすめです。"
            reference="格安SIM/格安スマホ・インターネットサービスのIIJmio (https://www.iijmio.jp/)"
          />
        </div>
      );
    };

export default company08;
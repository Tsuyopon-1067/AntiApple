import React from "react";
import { Link } from "react-router-dom";
import GenerateCard from "../Card";

const Content = () => {
  return (
    <React.Fragment>
      <div>
        <h1>コンテンツ一覧</h1>
        <GenerateCard
          cardtitle={[
            "プラン料金シミュレーション",
            "速度比較",
            "各社プラン一覧",
            "おすすめ端末",
            "おすすめ端末診断"
          ]}
          carddetail={["", "", "", "", ""]}
          cardlink={[
            "./content/simulation",
            "./content/speed",
            "./content/plan/all_company",
            "./content/device/recommend_devices",
            "./content/device/diag_devices"
          ]}
        />
      </div>
    </React.Fragment>
  );
};
export default Content;

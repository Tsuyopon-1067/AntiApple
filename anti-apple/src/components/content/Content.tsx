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
        <ul>
          <li>
            <Link to="./content/simulation">プラン料金シミュレーション</Link>
          </li>
          <li>
            <Link to="./content/speed">速度比較</Link>
          </li>
          <li>
            <Link to="./content/plan/all_company">各社プラン一覧</Link>
            <ul>
              <li>
                <Link to="./content/plan/company01">ahamo</Link>
              </li>
              <li>
                <Link to="./content/plan/company02">povo</Link>
              </li>
              <li>
                <Link to="./content/plan/company03">LINEMO</Link>
              </li>
              <li>
                <Link to="./content/plan/company04">UQ mobile</Link>
              </li>
              <li>
                <Link to="./content/plan/company05">Y!mobile</Link>
              </li>
              <li>
                <Link to="./content/plan/company06">OCNモバイルONE</Link>
              </li>
              <li>
                <Link to="./content/plan/company07">mineo</Link>
              </li>
              <li>
                <Link to="./content/plan/company08">IIJmio</Link>
              </li>
              <li>
                <Link to="./content/plan/company09">イオンモバイル</Link>
              </li>
              <li>
                <Link to="./content/plan/company10">J:COMモバイル</Link>
              </li>
              <li>
                <Link to="./content/plan/company11">日本通信SIM</Link>
              </li>
              <li>
                <Link to="./content/plan/company12">BIGLOBEモバイル</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="./content/plan/diag_plans">おすすめプラン診断</Link>
          </li>
          <li>
            <Link to="./content/device/recommend_devices">おすすめ端末</Link>
          </li>
          <li>
            <Link to="./content/device/diag_devices">おすすめ端末診断</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Content;

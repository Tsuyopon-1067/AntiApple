import React from "react";
import { Link } from "react-router-dom";
import GenerateCard from "../../Card";

const AllCompany = () => {
  return (
    <React.Fragment>
    <div>
      <h1>各社プラン一覧</h1>
      <GenerateCard 
        cardtitle={[
            "ahamo",
            "povo",
            "LINEMO",
            "UQ!mobile",
            "Y!mobile",
            "OCNモバイルONE",
            "mineo",
            "IIJmio",
            "イオンモバイル",
            "J:COMモバイル",
            "日本通信SIM",
            "BIGLOBEモバイル",
        ]} 
        carddetail={[]} 
        cardlink={[
            "/content/plan/company01",
            "/content/plan/company02",
            "/content/plan/company03",
            "/content/plan/company04",
            "/content/plan/company05",
            "/content/plan/company06",
            "/content/plan/company07",
            "/content/plan/company08",
            "/content/plan/company09",
            "/content/plan/company10",
            "/content/plan/company11",
            "/content/plan/company12",
        ]} 
      />
    </div>
    </React.Fragment>
  );
};

export default AllCompany;

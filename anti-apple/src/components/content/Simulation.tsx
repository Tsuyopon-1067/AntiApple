import React, { useState } from "react";
import { Plan, Plans } from "./SimulationComponents/Plans";
import { SimulationSlider } from "./SimulationComponents/SimulationSlider";
import { SimulationSelecter } from "./SimulationComponents/SimulationSelecter";
import { CarrierButtonList } from "./SimulationComponents/CarrierButtonList";
import { OptionButtonList } from "./SimulationComponents/OptionButtonList ";

import { Stack, HStack, VStack, Heading } from "@chakra-ui/react";

import styles from "./Simulation.module.css";
import MediaQuery from "react-responsive";

// 20 50 70 100
export const Simulation = (param) => {
  const [dataVolume, setDataVolume] = useState(5);
  const [carrier, setCarrier] = useState([1]);
  const [option, setOption] = useState(0);
  let selectedPlan: Plan = Plans.getSelectedPlan(carrier, dataVolume, option);
  return (
    <React.Fragment>
      <>
        <MediaQuery query="(max-width:700px)">
          <h1>プラン料金シミュレーション</h1>
          <p>
            <CarrierButtonList getCarrier={setCarrier} />
          </p>
          <p>
            <OptionButtonList getCarrier={setOption} />
          </p>
          <div className={styles.slider}>
            <SimulationSelecter setDataVolume={setDataVolume} />
          </div>
          <br />
          <p>選択 : {dataVolume}</p>
          <p>
            {selectedPlan.carrierName}, {selectedPlan.planName},{" "}
            {selectedPlan.price}円
          </p>
        </MediaQuery>
        <MediaQuery query="(min-width:701px)">
          <h1>プラン料金シミュレーション</h1>
          <p>
            <CarrierButtonList getCarrier={setCarrier} />
          </p>
          <p>
            <OptionButtonList getCarrier={setOption} />
          </p>
          <div className={styles.slider}>
            <SimulationSlider setDataVolume={setDataVolume} />
          </div>
          <br />
          <p>選択 : {dataVolume}GB</p>
          <Stack marginBlock="20px">
            <Heading size="lg">あなたに最適なプランは…</Heading>
            <Heading size="md">プラン: {selectedPlan.carrierName}</Heading>
            <Heading size="md">容量: {selectedPlan.planName}{" "}</Heading>
            <Heading size="md">月額: {selectedPlan.price}円</Heading>
          </Stack>
        </MediaQuery>
      </>
    </React.Fragment>
  );
};

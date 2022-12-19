import React, { useState } from 'react';
import { Plan, Plans } from './SimulationComponents/Plans';
import {SimulationSlider} from './SimulationComponents/SimulationSlider';
import {ToggleButtonList} from './SimulationComponents/ToggleButtonList';
// 20 50 70 100
export const Simulation = (param) => {
    const[dataVolume, setDataVolume] = useState(5);
    const[carrier, setCarrier] = useState([1]);
    let selectedPlan: Plan = Plans.getSelectedPlan(carrier, dataVolume, 0);
    return (
        <React.Fragment>
            <h1>プラン料金シミュレーション</h1>
            <p>ここに料金シミュレーションを実装</p>
            <ToggleButtonList getCarrier={setCarrier} />
            <SimulationSlider setDataVolume={setDataVolume} />
            <br />
            <p>選択 : {dataVolume}</p>
            <p>{selectedPlan.carrierName}, {selectedPlan.planName}, {selectedPlan.price}円</p>
        </React.Fragment>
    );
}

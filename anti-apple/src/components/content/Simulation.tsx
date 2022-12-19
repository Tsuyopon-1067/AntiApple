import React, { useState } from 'react';
import { Plan, Plans } from './SimulationComponents/Plans';
import {SimulationSlider} from './SimulationComponents/SimulationSlider';
import {ToggleButton} from './SimulationComponents/ToggleButton';
// 20 50 70 100
export const Simulation = (param) => {
    const[dataVolume, setDataVolume] = useState(5);
    let carrier: number[] = [1];
    let selectedPlan: Plan = Plans.getSelectedPlan(carrier, dataVolume, 0);
    return (
        <React.Fragment>
            <h1>プラン料金シミュレーション</h1>
            <p>ここに料金シミュレーションを実装</p>
            <SimulationSlider setDataVolume={setDataVolume} />
            <br />
            <p>選択 : {dataVolume}</p>
            <p>{selectedPlan.name}, {selectedPlan.price}円</p>
            <ToggleButton>aaaaa</ToggleButton>
        </React.Fragment>
    );
}

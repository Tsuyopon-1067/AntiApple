import React, { useState } from 'react';
import { Plan, Plans } from './Plans';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box
} from '@chakra-ui/react'
import {SimulationSlider} from './SimulationSlider';
// 20 50 70 100
export const Simulation = (param) => {
    const[dataVolume, setDataVolume] = useState(5);
    let carrier: number = 1;
    let selectedPlan: Volume = Plans.getSelectedPlan(carrier, dataVolume, 0);
    return (
        <React.Fragment>
            <h1>プラン料金シミュレーション</h1>
            <p>ここに料金シミュレーションを実装</p>
            <SimulationSlider setDataVolume={setDataVolume} />
            <br />
            <p>選択 : {dataVolume}</p>
            <p>{Plans.getCarrierName(carrier)}:{selectedPlan.name}, {selectedPlan.price}円</p>
        </React.Fragment>
    );
}

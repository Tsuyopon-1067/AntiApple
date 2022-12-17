import React, { useState } from 'react';
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
    return (
        <React.Fragment>
            <h1>プラン料金シミュレーション</h1>
            <p>ここに料金シミュレーションを実装</p>
            <SimulationSlider setDataVolume={setDataVolume} />
            <p>選択 : {dataVolume}</p>
        </React.Fragment>
    );
}
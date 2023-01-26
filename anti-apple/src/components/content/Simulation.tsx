import React, { useState } from 'react';
import { Plan, Plans } from './SimulationComponents/Plans';
import {SimulationSlider} from './SimulationComponents/SimulationSlider';
import {CarrierButtonList} from './SimulationComponents/CarrierButtonList';
import {OptionButtonList} from './SimulationComponents/OptionButtonList ';
import styles from './Simulation.module.css';

// 20 50 70 100
export const Simulation = (param) => {
    const[dataVolume, setDataVolume] = useState(5);
    const[carrier, setCarrier] = useState([1]);
    const[option, setOption] = useState(0);
    let selectedPlan: Plan = Plans.getSelectedPlan(carrier, dataVolume, option);
    return (
        <React.Fragment>
            <h1 >プラン料金シミュレーション</h1>
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
            <p>選択 : {dataVolume}</p>
            <p>{selectedPlan.carrierName}, {selectedPlan.planName}, {selectedPlan.price}円</p>
        </React.Fragment>
    );
}

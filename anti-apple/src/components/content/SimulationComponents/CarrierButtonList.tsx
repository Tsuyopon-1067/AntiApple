// キャリア選択ボタン
import { effect } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import  { ToggleButton } from './ToggleButton';

export const CarrierButtonList = (props) => {
    const [isChecked0, setIsChecked0] = useState(true);
    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(true);
    const [isChecked3, setIsChecked3] = useState(true);
    const [isChecked4, setIsChecked4] = useState(true);
    const [isChecked5, setIsChecked5] = useState(true);
    const [isChecked6, setIsChecked6] = useState(true);
    const [isChecked7, setIsChecked7] = useState(true);
    const [isChecked8, setIsChecked8] = useState(true);
    const [isChecked9, setIsChecked9] = useState(true);
    const [isChecked10, setIsChecked10] = useState(true);
    const [isChecked11, setIsChecked11] = useState(true);

    useEffect(() => {
        let lst: number[] = new Array();
        if (isChecked0) { lst.push(0) }
        if (isChecked1) { lst.push(1) }
        if (isChecked2) { lst.push(2) }
        if (isChecked3) { lst.push(3) }
        if (isChecked4) { lst.push(4) }
        if (isChecked5) { lst.push(5) }
        if (isChecked6) { lst.push(6) }
        if (isChecked7) { lst.push(7) }
        if (isChecked8) { lst.push(8) }
        if (isChecked9) { lst.push(9) }
        if (isChecked10) { lst.push(10) }
        if (isChecked11) { lst.push(11) }
        props.getCarrier(lst);
    }, [isChecked0, isChecked1, isChecked2, isChecked3, isChecked4, isChecked5, isChecked6, isChecked7, isChecked8, isChecked9, isChecked10, isChecked11]);

    return(
        <React.Fragment>
            <ToggleButton getState={setIsChecked0}>ahamo</ToggleButton>
            <ToggleButton getState={setIsChecked1}>povo</ToggleButton>
            <ToggleButton getState={setIsChecked2}>LINEMO</ToggleButton>
            <ToggleButton getState={setIsChecked3}>UQ</ToggleButton>
            <ToggleButton getState={setIsChecked4}>Y!mobile</ToggleButton>
            <ToggleButton getState={setIsChecked5}>OCN</ToggleButton>
            <ToggleButton getState={setIsChecked6}>mineo</ToggleButton>
            <ToggleButton getState={setIsChecked7}>IIJmio</ToggleButton>
            <ToggleButton getState={setIsChecked8}>イオンモバイル</ToggleButton>
            <ToggleButton getState={setIsChecked9}>J:COM</ToggleButton>
            <ToggleButton getState={setIsChecked10}>日本通信</ToggleButton>
            <ToggleButton getState={setIsChecked11}>biglobe</ToggleButton>
        </React.Fragment>
    );
}
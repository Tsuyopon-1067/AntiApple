// キャリア選択ボタン
import React, { useEffect, useState } from 'react';
import  { ToggleButton } from './ToggleButton';

export const OptionButtonList = (props) => {
    const [isChecked0, setIsChecked0] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    useEffect(() => {
        let lst: number[] = new Array();
        if (isChecked0) { lst.push(0) }
        if (isChecked1) { lst.push(1) }
        if (isChecked2) { lst.push(2) }
        props.getCarrier(lst);
    }, [isChecked0, isChecked1, isChecked2]);

    return(
        <React.Fragment>
            <ToggleButton getState={setIsChecked0} defaultState={true} >無制限通話</ToggleButton>
            <ToggleButton getState={setIsChecked1} defaultState={true} >通話（時間制限あり）</ToggleButton>
            <ToggleButton getState={setIsChecked2} defaultState={true} >なにか</ToggleButton>
        </React.Fragment>
    );
}
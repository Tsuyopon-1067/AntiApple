// トグルボタン1つ
import React, { useState, ReactNode } from 'react';
import Styles from './ToggleButton.module.css';
import CheckIcon from './check.png';
import { Image, propNames } from '@chakra-ui/react'

export const ToggleButton = (props, { children }: {
    children?: ReactNode;}) => {
    const [state, setState] = useState(props.defaultState); // 押されていたら（暗い色なら）false
    const checkChange = (e) => {
        setState(!state);
        props.getState(state);

    }
    return(
        <React.Fragment>
            <label className={Styles.lbl}>
                <input type="checkbox" checked={state} onChange={checkChange} />
                <span className={Styles.span}>
                    <div className={Styles.div}>
                        <Image className={Styles.btnImage} src={CheckIcon} />
                        {props.children}
                    </div>
                </span>
            </label>
        </React.Fragment>
    );
}
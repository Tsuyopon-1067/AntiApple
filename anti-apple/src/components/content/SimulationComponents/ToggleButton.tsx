// トグルボタン1つ
import React, { useState, ReactNode } from 'react';
import Styles from './ToggleButton.module.css';
import CheckIcon from './check.png';
import { Image } from '@chakra-ui/react'

export const ToggleButton = ({ children }: {
    children?: ReactNode;
}) => {
    const [state, setState] = useState(false); // 押されていたら（暗い色なら）false
    const checkChange = (e) => {
        setState(!state);
        if (state) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
    return(
        <React.Fragment>
            <label className={Styles.lbl}>
                <input type="checkbox" checked={state} onChange={checkChange} />
                <span className={Styles.span}>
                    <div className={Styles.div}>
                        <Image className={Styles.btnImage} src={CheckIcon} />
                        {children}
                    </div>
                </span>
            </label>
        </React.Fragment>
    );
}
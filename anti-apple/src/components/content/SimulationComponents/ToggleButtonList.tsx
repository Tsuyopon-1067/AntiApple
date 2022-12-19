// トグルボタン1つ
import React, { useState } from 'react';
import  { ToggleButton } from './ToggleButton';

export const ToggleButtonList = () => {
    return(
        <React.Fragment>
            <ToggleButton>ahamo</ToggleButton>
            <ToggleButton>povo</ToggleButton>
            <ToggleButton>LINEMO</ToggleButton>
            <ToggleButton>UQ</ToggleButton>
            <ToggleButton>Y!mobile</ToggleButton>
            <ToggleButton>OCN</ToggleButton>
            <ToggleButton>mineo</ToggleButton>
            <ToggleButton>IIJmio</ToggleButton>
            <ToggleButton>イオンモバイル</ToggleButton>
            <ToggleButton>J:COM</ToggleButton>
            <ToggleButton>日本通信</ToggleButton>
            <ToggleButton>biglobe</ToggleButton>
        </React.Fragment>
    );
}
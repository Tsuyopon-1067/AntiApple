import React from 'react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box
} from '@chakra-ui/react'
// 20 50 70 100
export const Simulation = (param) => {
    return (
        <React.Fragment>
            <h1>プラン料金シミュレーション</h1>
            <p>ここに料金シミュレーションを実装</p>
            <Slider defaultValue={5} min={0} max={24} step={1}>
                <SliderTrack bg='red.100'>
                    <SliderFilledTrack bg='tomato' />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                    <Box color='tomato' />
                </SliderThumb>
                {(() => {
                    // ここでスライダーのラベルを追加する
                    const items: any = [];
                    const volumes: number[] = [ 500, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 70, 100];
                    for (let i: number = 0; i < volumes.length; i++) {
                        items.push(<SliderLabel index={i} volume={volumes[i]} />);
                    }
                    return <React.Fragment>{items}</React.Fragment>;
                })()}
            </Slider>
        </React.Fragment>
    );
}

const SliderLabel : React.FC<{ index: number; volume: number; }> = (props) => {
    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }
    let volumeText = props.volume.toString();
    if (props.volume > 100) {
        volumeText = volumeText + "MB";
    } else {
        volumeText = volumeText + "GB";
    }
    return (
        <SliderMark value={props.index} {...labelStyles}>{volumeText}</SliderMark>
    );
}
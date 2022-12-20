// シミュレーション画面のスライダーコンポーネント
import React, {useState} from 'react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box
} from '@chakra-ui/react'
import Styles from './SimulationSlider.module.css';
// 20 50 70 100

export const SimulationSlider = (props) => {
    const [dataVolume,setDataVolume] = useState(5);
    props.setDataVolume(dataVolume);
    const volumes: number[] = [ 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 70, 100];
    return (
        <React.Fragment>
            <Slider defaultValue={5} min={0} max={volumes.length-1} step={1} onChangeEnd={(val) => setDataVolume(volumes[val])}>
                <SliderTrack bg="#c2e4cb">
                    <SliderFilledTrack bg="#5cbf79" />
                </SliderTrack>
                <SliderThumb boxSize={3}>
                    <Box className={Styles.thumb} bg="#fcfcfc" w='100%' p={3} color='white' />
                </SliderThumb>
                {(() => {
                    // ここでスライダーのラベルを追加する
                    // ごちゃごちゃしてるけどfor文で回してるだけ
                    const items: React.ReactNode = [];
                    for (let i: number = 0; i < volumes.length; i++) {
                        items.push(<SliderLabel index={i} volume={volumes[i]} />);
                    }
                    return <React.Fragment>{items}</React.Fragment>;
                    // for文埋め込みここまで
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
    let volumeText: String;
    if (props.volume < 1) {
        volumeText = (props.volume*1000).toString() + "MB";
    } else {
        volumeText = props.volume.toString() + "GB";
    }
    return (
        <SliderMark value={props.index} {...labelStyles}>{volumeText}</SliderMark>
    );
}
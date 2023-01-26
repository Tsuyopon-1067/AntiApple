// シミュレーション画面のスライダーコンポーネント
import React, {useState} from 'react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Select,
    Box
} from '@chakra-ui/react'
import Styles from './SimulationSlider.module.css';
// 20 50 70 100

export const SimulationSelecter = (props) => {
    const [dataVolume,setDataVolume] = useState(5);
    props.setDataVolume(dataVolume);
    //const volumes: number[] = [ 0.5, 1, 0, 0, 0, 5, 0, 0, 0, 0, 10, 0, 0, 0, 0, 15, 0, 0, 0, 0, 20, 50, 70, 100];
    const volumes: number[] = [ 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 70, 100];

    //setDataVolume(volumes[Number(val)])

    return (
        <React.Fragment>
            <Select defaultValue={5} onChange={(val) => console.log(val)}>
                {(() => {
                    // ここでスライダーのラベルを追加する
                    // ごちゃごちゃしてるけどfor文で回してるだけ
                    const items: React.ReactNode[] = [];
                    for (let i: number = 0; i < volumes.length; i++) {
                        items.push(<option value={String(volumes[i])} >{volumes[i] + "GB"}</option>);
                        console.log(dataVolume)
                    }

                    return <React.Fragment>{items}</React.Fragment>;
                    // for文埋め込みここまで
                })()}
            </Select>
        </React.Fragment>
    );
}

/*const SliderLabel : React.FC<{ index: number; volume: number; }> = (props) => {
    const labelStyles = {
        mt: '5',
        ml: '-2.5',
        fontSize: 's',
    }
    let volumeText: String;
    if (props.volume == 0) {
        volumeText = "";
    //}
    //else if (props.volume < 1) {
    //    volumeText = (props.volume*1000).toString() + "MB";
    } else {
        //volumeText = props.volume.toString() + "GB";
        volumeText = props.volume.toString();
    }
    if (props.volume==-1) {
        volumeText = "[GB]";
        return <div className={Styles.mb}><SliderMark value={props.index} {...labelStyles}>{volumeText}</SliderMark></div>
    }
    return (
        <></>
    );
}*/
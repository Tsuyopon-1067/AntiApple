import React from 'react';
import {
    Image
} from '@chakra-ui/react';
import Styles from './Device.module.css';

export const Device = (props) => {
    return (
        <div className={Styles.flex}>
            <figure className={Styles.figure}>
                <Image className={Styles.img} src={props.img} />
                <p className={Styles.source}>出典：{props.source}</p>
            </figure>
            <div className={Styles.description}>
                <h1>
                    <span className={Styles.deviceManufacturer}>{props.manufacturer}</span>
                    &ensp;
                    <span className={Styles.deviceName}>{props.name}</span>
                </h1>
                <p className={`${Styles.category} ${Styles.categoryFirst}`}>サイズと重量</p>
                    <h3 className={Styles.subCategory}>縦</h3>
                        <p className={Styles.info}>{props.height}</p>
                    <h3 className={Styles.subCategory}>横</h3>
                        <p className={Styles.info}>{props.width}</p>
                    <h3 className={Styles.subCategory}>厚さ</h3>
                        <p className={Styles.info}>{props.thickness}</p>
                    <h3 className={Styles.subCategory}>重量</h3>
                        <p className={Styles.info}>{props.weight}</p>
                <p className={Styles.category}>ディスプレイ</p>
                    <h3 className={Styles.subCategory}>画面サイズ</h3>
                        <p className={Styles.info}>{props.displaySize}インチ</p>
                    <h3 className={Styles.subCategory}>解像度</h3>
                        <p className={Styles.info}>{props.resolution}</p>
                <p className={Styles.category}>CPU＆GPU</p>
                    <h3 className={Styles.subCategory}>SoC</h3>
                        <p className={Styles.info}>{props.soc}</p>
                    <h3 className={Styles.subCategory}>Antutu</h3>
                        <p className={Styles.info}>{props.antutu}</p>
                <p className={Styles.category}>端子類</p>
                    <h3 className={Styles.subCategory}>充電・通信端子</h3>
                        <p className={Styles.info} >{props.usb}</p>
                    <h3 className={Styles.subCategory}>イヤホンジャック</h3>
                        <p className={Styles.info}>{props.earphone}</p>
                <p className={Styles.category}>備考</p>
                    <p className={Styles.description}>{props.note}</p>
            </div>
        </div>
    )
}
import React from 'react';
import {
    Image
} from '@chakra-ui/react';
import Styles from './Device.module.css';

export const Device = (props) => {
    return (
        <div className={Styles.flex}>
            <figure className={Styles.deviceImage}>
                <Image src={props.img} />
            </figure>
            <div class={Styles.description}>
                <h1>
                    <p className={Styles.deviceManufacturer}>{props.manufacturer}</p>
                    &ensp;
                    <p className={Styles.deviceName}>{props.name}</p>
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
                <p className={Styles.category}>CPU＆GPU</p>
                    <h3 className={Styles.subCategory}>SoC</h3>
                        <p className={Styles.info}>{props.soc}</p>
                    <h3 className={Styles.subCategory}>CPU</h3>
                        <p className={Styles.info}>{props.cpu}</p>
                    <h3 className={Styles.subCategory}>GPU</h3>
                        <p className={Styles.info}>{props.gpu}</p>
                    <h3 className={Styles.subCategory}>Antutu</h3>
                        <p className={Styles.info}>{props.antutu}</p>
                <p className={Styles.category}>端子類</p>
                    <h3 className={Styles.subCategory}>充電・通信端子</h3>
                        <p className={Styles.info} >{props.usb}</p>
                    <h3 className={Styles.subCategory}>イヤホンジャック</h3>
                        <p className={Styles.info}>{props.earphone}</p>
                    <h3 className={Styles.category}>備考</h3>
                        <p className={Styles.description}>{props.note}</p>
            </div>
        </div>
    )
}
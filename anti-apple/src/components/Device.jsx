import React from 'react';

export default function Device() {

    const spec = ["端末名", "メーカー", "CPU", "コネクタ"]
    const phone= [
        ["iPhone 14", "Apple", "A15", "Lightning"],
        ["Pixel 6a", "Google", "Tensor", "USB-C"],
        ["AQUOS sense7", "SHARP", "Snapdragon 695", "USB-C, イヤホンジャック"],
        ["Reno7 A", "OPPO", "Snapdragon 695", "USB-C, イヤホンジャック"],
        ["Pixel 7", "Google", "Tensor G2", "USB-C"],
        ["iPhone SE", "Apple", "A15", "Lightning"],
        ["Xperia 5 Ⅲ", "SONY", "Snapdragon 888", "USB-C, イヤホンジャック"],
    ]
    //const name = ["iPhone 14", "Pixel 6a", "AQUOS sense7", "Reno7 A"];
    //const manufac = ["Apple", "Google", "SHARP"];
    //const cpu = ["A15", "Tensor", "Snapdragon 695"];
    //const connector = ["Lightning", "USB-C", "USB-C, イヤホンジャック"];

    
   //const ind = [];
    const device = [];
    var ind = 0;

    for(const i in phone){
            ind++;
            device.push(<h1 style={styles.device}>おすすめ端末その{ind}</h1>)

        for(const j in phone[i]){
            device.push(<p>{spec[j]}: {phone[i][j]}</p>)
        }
    }

    return (
        <React.Fragment>
            {device}
        </React.Fragment>
    )
}

const styles = {
    device: {
        margin: "1em 0 0.5em",
    },
}
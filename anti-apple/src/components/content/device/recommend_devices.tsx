import React from 'react';
import {Device} from './Device'; // デバイスコンポーネント
import {Pixel6a, Xiaomi11TPro, Redminote11, iPhoneSE, iPhone14, AQUOSsense7, motog52j } from './Devices'; // 端末情報定義（端末追加のときはこっちをいじる）．波括弧内に端末を追加する．

const RecoDevices = () => {
    return (
        <div>
            <h1>おすすめ端末</h1>
            <p>おすすめ端末1~10</p>
                {/* ここでテスト用デバイス画面を配置 */}
                <Device {...Pixel6a} />
                <Device {...AQUOSsense7} />
                <Device {...motog52j} />
                <Device {...Xiaomi11TPro} />
                <Device {...Redminote11} />
                <Device {...iPhoneSE} />
                <Device {...iPhone14} />
        </div>
    );
};

export default RecoDevices;
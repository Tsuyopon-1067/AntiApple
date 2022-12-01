import React from 'react';
import { Link } from 'react-router-dom';


const Content = () => {
    return (
        <div>
            <h1>コンテンツ一覧</h1>
            <ul>
                <li>プラン料金シミュレーション</li>
                <li><Link to="/speed">速度比較</Link></li>
                <li>各社プラン一覧
                    <ul>
                        <li>会社1</li>
                        <li>会社2</li>
                        <li>会社3</li>
                        <li>会社4</li>
                        <li>会社5</li>
                        <li>会社6</li>
                        <li>会社7</li>
                        <li>会社8</li>
                        <li>会社9</li>
                        <li>会社10</li>
                    </ul>    
                </li>
                <li>おすすめプラン診断</li>
                <li>おすすめ端末</li>
                <li>おすすめ端末診断</li>         
            </ul>
        </div>
    );
};
export default Content;
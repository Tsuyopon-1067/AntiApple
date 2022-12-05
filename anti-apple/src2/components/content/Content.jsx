import React from 'react';
import { Link } from 'react-router-dom';


const Content = () => {
    return (
        <div>
            <h1>コンテンツ一覧</h1>
            <ul>
                <li><Link to="./content/simulation">プラン料金シミュレーション</Link></li>
                <li><Link to="./content/speed">速度比較</Link></li>
                <li><Link to="./content/plan/all_company">各社プラン一覧</Link>
                    <ul>
                        <li><Link to="./content/plan/company01">会社1</Link></li>
                        <li><Link to="./content/plan/company02">会社2</Link></li>
                        <li><Link to="./content/plan/company03">会社3</Link></li>
                        <li><Link to="./content/plan/company04">会社4</Link></li>
                        <li><Link to="./content/plan/company05">会社5</Link></li>
                        <li><Link to="./content/plan/company06">会社6</Link></li>
                        <li><Link to="./content/plan/company07">会社7</Link></li>
                        <li><Link to="./content/plan/company08">会社8</Link></li>
                        <li><Link to="./content/plan/company09">会社9</Link></li>
                        <li><Link to="./content/plan/company10">会社10</Link></li>
                    </ul>
                </li>
                <li><Link to="./content/plan/diag_plans">おすすめプラン診断</Link></li>
                <li><Link to="./content/device/recommend_devices">おすすめ端末</Link></li>
                <li><Link to="./content/device/diag_devices">おすすめ端末診断</Link></li>
            </ul>
        </div>
    );
}
export default Content;
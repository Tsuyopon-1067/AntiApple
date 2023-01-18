import React from 'react';
import { Link } from 'react-router-dom';

const AllCompany = () => {
    return (
        <div>
            <h1>各社プラン一覧</h1>
            <ul>
                <li><Link to="/content/plan/company01">ahamo</Link></li>
                <li><Link to="/content/plan/company02">povo</Link></li>
                <li><Link to="/content/plan/company03">LINEMO</Link></li>
                <li><Link to="/content/plan/company04">UQ mobile</Link></li>
                <li><Link to="/content/plan/company05">Y!mobile</Link></li>
                <li><Link to="/content/plan/company06">OCNモバイルONE</Link></li>
                <li><Link to="/content/plan/company07">mineo</Link></li>
                <li><Link to="/content/plan/company08">IIJmio</Link></li>
                <li><Link to="/content/plan/company09">イオンモバイル</Link></li>
                <li><Link to="/content/plan/company10">J:COMモバイル</Link></li>
                <li><Link to="/content/plan/company11">日本通信SIM</Link></li>
                <li><Link to="/content/plan/company12">BIGLOBEモバイル</Link></li>
            </ul>
        </div>
    );
};

export default AllCompany;
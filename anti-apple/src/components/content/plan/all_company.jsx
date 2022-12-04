import React from 'react';
import { Link } from 'react-router-dom';

const AllCompany = () => {
    return (
        <div>
            <h1>各社プラン一覧</h1>
            <ul>
                <li><Link to="/content/plan/company01">会社1</Link></li>
                <li><Link to="/content/plan/company02">会社2</Link></li>
                <li><Link to="/content/plan/company03">会社3</Link></li>
                <li><Link to="/content/plan/company04">会社4</Link></li>
                <li><Link to="/content/plan/company05">会社5</Link></li>
                <li><Link to="/content/plan/company06">会社6</Link></li>
                <li><Link to="/content/plan/company07">会社7</Link></li>
                <li><Link to="/content/plan/company08">会社8</Link></li>
                <li><Link to="/content/plan/company09">会社9</Link></li>
                <li><Link to="/content/plan/company10">会社10</Link></li>
            </ul>
        </div>
    );
};

export default AllCompany;
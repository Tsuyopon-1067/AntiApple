import React from 'react';
import { Link } from 'react-router-dom';

const ProsCons = () => {
    return (
        <div>
            <h1>格安SIMのメリット・デメリット</h1>
            <p><Link to="/">ホーム</Link></p>
            <p><Link to="/about">格安SIMとは？</Link></p>
            <p><Link to="/pros_cons">格安SIMのメリット・デメリット</Link></p>
            <p><Link to="/content">コンテンツ一覧</Link></p>
        </div>
    );
}

export default ProsCons;
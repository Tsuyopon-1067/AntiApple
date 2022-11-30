import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div>
            <h1>コンテンツ一覧</h1>
            <p><Link to="/">ホーム</Link></p>
            <p><Link to="/about">格安SIMとは？</Link></p>
            <p><Link to="/pros_cons">格安SIMのメリット・デメリット</Link></p>
            <p><Link to="/content">コンテンツ一覧</Link></p>
        </div>
    );
}
export default Content;
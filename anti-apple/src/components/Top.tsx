import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel/Carousel';

const Top = () => {
    return (
        <React.Fragment>
            <Carousel />
            <div>
                <h1>格安モバイルWebへようこそ！</h1>
                <p><Link to="/">ホーム</Link></p>
                <p><Link to="/about">格安SIMとは？</Link></p>
                <p><Link to="/pros_cons">格安SIMのメリット・デメリット</Link></p>
                <p><Link to="/content">コンテンツ一覧</Link></p>
            </div>
        </React.Fragment>
    );
}

export default Top;
import React from 'react';
//import ReactDOM from 'react-dom';

const GenerateArticle = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} />
            <h2>概要</h2>
            <p>{props.abstract}</p>
            <h2>データ通信容量</h2>
            <p>{props.gb}</p>
            <h2>料金プラン</h2>
            <p>{props.value}</p>
            <h2>オプション</h2>
            <p>{props.option}</p>
            <h2>通信速度</h2>
            <p>{props.speed}</p>
            <h2>どんな人におすすめ？</h2>
            <p>{props.recommended}</p>
            <h2>参考文献</h2>
            <p>{props.reference}</p>
        </div>
    );
};

export default GenerateArticle;
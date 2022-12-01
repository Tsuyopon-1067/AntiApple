import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Top from './Top';
import About from './about/About';
import ProsCons from './about/Pros_Cons';
import Content from './content/Content';
import Speed from './content/Speed';

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <header style={styles.header}>格安モバイルWeb
                    <ul>
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/about">格安SIMとは？</Link></li>
                        <li><Link to="/pros_cons">格安SIMのメリット・デメリット</Link></li>
                        <li><Link to="/content">コンテンツ一覧</Link></li>
                    </ul>
                </header>

                <main style={styles.main}>
                    <Switch>
                        <Route exact path="/" component={Top} />
                        <Route path='/about' component={About} />
                        <Route path='/pros_cons' component={ProsCons} />
                        <Route path='/content' component={Content} />
                        <Route path="./Speed" component={Speed} />
                        <Route render={() => <p>Not found!</p>} />
                    </Switch>
                </main>

                <footer style={styles.footer}>©️2022 Appleめっっちゃ嫌いです from 静岡大学情報学部 Webデザイン2022</footer>
            </div>
        </BrowserRouter>
    );
};

export default Home;

const styles = {
    header: {
        height: 150,
        background: "#cef",
    },
    main: {

    },
    footer: {
        height: 100,
        background: '#cef',
    }
}
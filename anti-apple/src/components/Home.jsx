import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Top from './Top';
import About from './about/About';
import ProsCons from './about/Pros_Cons';
import Content from './content/Content';

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <header style={styles.header}>格安モバイルWeb</header>

                <main style={styles.main}>
                    <Switch>
                        <Route exact path="/" component={Top} />
                        <Route path='/about' component={About} />
                        <Route path='/pros_cons' component={ProsCons} />
                        <Route path='/content' component={Content} />
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
        height: 100,
        background: "#ddd",
    },
    main: {

    },
    footer: {
        height: 100,
        background: '#ddd',
    }
}
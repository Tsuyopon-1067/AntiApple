import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

//Components(Pages)
import Top from './Top.jsx';
import About from './about/About.jsx';
import ProsCons from './about/Pros_Cons.jsx';
import Content from './content/Content.jsx';
import Simulation from './content/Simulation.jsx';
import Speed from './content/Speed.jsx';
import AllCompany from './content/plan/all_company.jsx';
import DiagPlans from './content/plan/diag_plans.jsx';
import RecoDevices from './content/device/recommend_devices.jsx';
import DiagDevices from './content/device/diag_devices.jsx';
import company01 from './content/plan/company01.jsx';
import company02 from './content/plan/company02.jsx';
import company03 from './content/plan/company03.jsx';
import company04 from './content/plan/company04.jsx';
import company05 from './content/plan/company05.jsx';
import company06 from './content/plan/company06.jsx';
import company07 from './content/plan/company07.jsx';
import company08 from './content/plan/company08.jsx';
import company09 from './content/plan/company09.jsx';
import company10 from './content/plan/company10.jsx';
import Navigation from './Navigation.jsx';

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                {/*
                <header style={styles.header}>格安モバイルWeb
                    <ul>
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/about">格安SIMとは？</Link></li>
                        <li><Link to="/pros_cons">格安SIMのメリット・デメリット</Link></li>
                        <li><Link to="/content">コンテンツ一覧</Link></li>
                    </ul>
                </header>
                */}

                <main style={styles.main}>
                    <Switch>
                        <Route exact path="/" component={Top} />
                        <Route path='/about' component={About} />
                        <Route path='/pros_cons' component={ProsCons} />
                        <Route
                            path="/content"
                            render={() => (
                                <Switch>
                                    <Route exact path='/content' component={Content} />
                                    <Route path='/content/simulation' component={Simulation} />
                                    <Route path='/content/speed' component={Speed} />
                                    <Route path='/content/plan/diag_plans' component={DiagPlans} />
                                    <Route path='/content/device/recommend_devices' component={RecoDevices} />
                                    <Route path='/content/device/diag_devices' component={DiagDevices} />
                                    <Route
                                        path='/content/plan'
                                        render={() => (
                                            <Switch>
                                                <Route exact path='/content/plan/all_company' component={AllCompany} />
                                                <Route path='/content/plan/company01' component={company01} />
                                                <Route path='/content/plan/company02' component={company02} />
                                                <Route path='/content/plan/company03' component={company03} />
                                                <Route path='/content/plan/company04' component={company04} />
                                                <Route path='/content/plan/company05' component={company05} />
                                                <Route path='/content/plan/company06' component={company06} />
                                                <Route path='/content/plan/company07' component={company07} />
                                                <Route path='/content/plan/company08' component={company08} />
                                                <Route path='/content/plan/company09' component={company09} />
                                                <Route path='/content/plan/company10' component={company10} />
                                            </Switch>
                                        )}
                                    />
                                </Switch>
                            )}
                        />
                    </Switch>
                </main>

                <footer style={styles.footer}>©️2022 Appleめっっちゃ嫌いです from 静岡大学情報学部 Webデザイン2022</footer>
            </div>
        </BrowserRouter>
    );
}

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
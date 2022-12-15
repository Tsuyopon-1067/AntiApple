import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Image } from '@chakra-ui/react'

//Components(Pages)
import Top from './Top';
import About from './about/About';
import ProsCons from './about/Pros_Cons';
import Content from './content/Content';
import {Simulation} from './content/Simulation';
import Speed from './content/Speed';
import AllCompany from './content/plan/all_company';
import DiagPlans from './content/plan/diag_plans';
import RecoDevices from './content/device/recommend_devices';
import DiagDevices from './content/device/diag_devices';
import company01 from './content/plan/company01';
import company02 from './content/plan/company02';
import company03 from './content/plan/company03';
import company04 from './content/plan/company04';
import company05 from './content/plan/company05';
import company06 from './content/plan/company06';
import company07 from './content/plan/company07';
import company08 from './content/plan/company08';
import company09 from './content/plan/company09';
import company10 from './content/plan/company10';
import Navigation from './Navigation';
import notfound from './notfound';
import Styles from './Home.module.css';
//import Carousel from './Carousel/Carousel.jsx';

const Home = () => {
    return (
        <BrowserRouter>
            <div className={Styles.homeMainDiv}>
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
                {/* ここでテスト用カルーセルを配置 */}
                {//<Carousel />
                }

                <main>
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
                                                <Route path='*' component={notfound} />
                                            </Switch>
                                        )}
                                    />
                                    <Route path='*' component={notfound} />
                                </Switch>
                            )}
                        />
                        <Route path='*' component={notfound} />
                    </Switch>
                </main>

                <footer className={Styles.homeFooter}>©️2022 Appleめっっちゃ嫌いです from 静岡大学情報学部 Webデザイン2022</footer>
            </div>
        </BrowserRouter>
    );
}

export default Home;

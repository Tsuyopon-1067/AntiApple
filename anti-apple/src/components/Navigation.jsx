import React from 'react';
import { NavLink,
} from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
} from '@chakra-ui/react';
import Styles from './Navigation.module.css';
import Icon from './ika.png';

export default function Navigation() {
    return (
        <React.Fragment>
            <div className={Styles.navDiv}>
                <div className={Styles.navHead}>
                    <Image className={Styles.navIcon} src={Icon} />
                    <h1 className={Styles.navTitle}>格安モバイルWebへようこそ！</h1>
                </div>
                <Breadcrumb className={Styles.navMain} separator='' spacing='0' >
                    <BreadcrumbItem className={Styles.navNormal} activeClassName='navActive'>
                        <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/' >
                            <p>トップ</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem className={Styles.navNormal} activeClassName='navActive'>
                        <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/about' >
                            <p>格安SIMの概要</p>
                        </BreadcrumbLink>
                        <Breadcrumb className={Styles.navSubMain} separator='' spacing='0' >
                            <BreadcrumbItem className={Styles.navSub} activeClassName='navActive'>
                                <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/' >
                                    <p>格安SIMとは</p>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem className={Styles.navSub} activeClassName='navActive'>
                                <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/' >
                                    <p>メリット・デメリット</p>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem className={Styles.navSub} activeClassName='navActive'>
                                <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/' >
                                    <p>プラン一覧</p>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem className={Styles.navSub} activeClassName='navActive'>
                                <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/' >
                                    <p>速度比較</p>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </BreadcrumbItem>
                    <BreadcrumbItem className={Styles.navNormal} activeClassName='navActive'>
                        <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content/plan/diag_plans'>
                            <p>プラン診断</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem className={Styles.navNormal} activeClassName='navActive'>
                        <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content/simulation'>
                            <p>シミュレーション</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem className={Styles.navNormal} activeClassName='navActive'>
                        <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content/device/recommend_devices'>
                            <p>おすすめ端末</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </React.Fragment>
    )
}

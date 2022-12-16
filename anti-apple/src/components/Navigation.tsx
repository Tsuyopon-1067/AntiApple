import React from 'react';
import { NavLink,
    Link
} from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
} from '@chakra-ui/react';

import MediaQuery from 'react-responsive';

import Styles from './Navigation.module.css';
import Icon from './antiApple.png';

export default function Navigation() {
    document.title = "格安モバイルWebへようこそ！";

    return (
        <>
        <MediaQuery query="(max-width:700px)">
            <React.Fragment>
                <h1>モバイル用ヘッダのテスト 700px以下で見れるはず</h1>
            </React.Fragment>
        </MediaQuery>

        <MediaQuery query="(min-width:701px)">
            <React.Fragment>
                <div className={Styles.navDiv}>
                    <div className={Styles.navHead}>
                        <Link to="/">
                            <Image className={Styles.navIcon} src={Icon} />
                            </Link>
                        <h1 className={Styles.navTitle}>格安モバイルWebへようこそ！</h1>
                    </div>
                    <Breadcrumb className={Styles.navMain} separator='' spacing='0' >
                        <BreadcrumbItem className={Styles.navNormal}>
                            <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/' >
                                <p>トップ</p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem className={Styles.navNormal}>
                            <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/' >
                                <p>格安SIMの概要</p>
                            </BreadcrumbLink>
                            <Breadcrumb className={Styles.navSubMain} separator='' spacing='0' >
                                <BreadcrumbItem className={Styles.navSub}>
                                    <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/about' >
                                        <p>格安SIMとは</p>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem className={Styles.navSub}>
                                    <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/pros_cons' >
                                        <p>メリット・デメリット</p>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem className={Styles.navSub} >
                                    <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content/plan/all_company' >
                                        <p>プラン一覧</p>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem className={Styles.navSub} >
                                    <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content/Speed' >
                                        <p>速度比較</p>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </BreadcrumbItem>
                        <BreadcrumbItem className={Styles.navNormal} >
                            <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content/plan/diag_plans'>
                                <p>プラン診断</p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem className={Styles.navNormal} >
                            <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content/simulation'>
                                <p>シミュレーション</p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem className={Styles.navNormal} >
                            <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content/device/recommend_devices'>
                                <p>おすすめ端末</p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </React.Fragment>
        </MediaQuery>
        </>
    )
}

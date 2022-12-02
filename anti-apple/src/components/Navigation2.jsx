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
                            <p>ホーム</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem className={Styles.navNormal} activeClassName='navActive'>
                        <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/about'>
                            <p>格安SIMとは？</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem className={Styles.navNormal} activeClassName='navActive'>
                        <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/pros_cons'>
                            <p>格安SIMのメリット・デメリット</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem className={Styles.navNormal} activeClassName='navActive'>
                        <BreadcrumbLink className={Styles.navLink} as={NavLink} to='/content'>
                            <p>コンテンツ一覧</p>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </React.Fragment>
    )
}

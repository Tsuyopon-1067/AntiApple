import React from 'react';
import { NavLink,
    Link
} from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
    useDisclosure,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
} from '@chakra-ui/react';

import MediaQuery from 'react-responsive';

import Styles from './Navigation.module.css';
import Icon from './antiApple.png';

export default function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    document.title = "格安モバイルWebへようこそ！";

    return (
        <>
        <MediaQuery query="(max-width:700px)">
            <div className={Styles.navDivMobile}>
                <Button onClick={onOpen}>≡</Button>
                <Link to="/">
                    <Image className={Styles.navIconMobile} src={Icon} />
                </Link>
                {//<h1 className={Styles.navTitle}>モバイル用ヘッダのテスト 700px以下で見れるはず</h1>
                }
                <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                    <Button onClick={onClose}>X</Button>
                    Basic Drawer
                    </DrawerHeader>
                    <DrawerBody>
                    <Breadcrumb separator='' spacing='0' >
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NavLink} to='/' >
                                <p>トップ</p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <BreadcrumbLink as={NavLink} to='/' >
                                <p>格安SIMの概要</p>
                            </BreadcrumbLink>
                            <Breadcrumb separator='' spacing='0' >
                                <BreadcrumbItem>
                                    <BreadcrumbLink as={NavLink} to='/about' >
                                        <p>格安SIMとは</p>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink as={NavLink} to='/pros_cons' >
                                        <p>メリット・デメリット</p>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink as={NavLink} to='/content/plan/all_company' >
                                        <p>プラン一覧</p>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink as={NavLink} to='/content/Speed' >
                                        <p>速度比較</p>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NavLink} to='/content/plan/diag_plans'>
                                <p>プラン診断</p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NavLink} to='/content/simulation'>
                                <p>シミュレーション</p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NavLink} to='/content/device/recommend_devices'>
                                <p>おすすめ端末</p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>          
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

import React from 'react';
import { NavLink,
} from 'react-router-dom'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

export default function Navigation() {
    return (
        <nav className='navMain' style={styles.navMain} >
            <h1>格安モバイルWebへようこそ！</h1>
            <Breadcrumb>
                <BreadcrumbItem className='navNormal' activeClassName='navActive'>
                    <BreadcrumbLink as={NavLink} to='/' >ホーム</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='navNormal' activeClassName='navActive'>
                    <BreadcrumbLink as={NavLink} to='/about'>格安SIMとは？</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='navNormal' activeClassName='navActive'>
                    <BreadcrumbLink as={NavLink} to='/pros_cons'>格安SIMのメリット・デメリット</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='navNormal' activeClassName='navActive'>
                    <BreadcrumbLink as={NavLink} to='/content'>コンテンツ一覧</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>
    )
}

const styles = {
    navMain : {
        height: 150,
        background: "#c8f",
    },
    navLink : {
        background: "#cef",
    }

}
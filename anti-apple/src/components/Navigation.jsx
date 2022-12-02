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
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/' className='navNormal' activeClassName='navActive'>ホーム</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/about' className='navNormal' activeClassName='navActive'>格安SIMとは？</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/pros_cons' className='navNormal' activeClassName='navActive'>格安SIMのメリット・デメリット</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to='/content' className='navNormal' activeClassName='navActive'>コンテンツ一覧</BreadcrumbLink>
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
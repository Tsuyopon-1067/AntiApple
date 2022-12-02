import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Top from './Top';
import About from './about/About';
import ProsCons from './about/Pros_Cons';
import Content from './content/Content';
import Speed from './content/Speed';

export default function Navigation() {
    return (
        <nav>
            <NavLink exact to='/' className='header-item' activeClassName='active'>Home</NavLink>
            <NavLink to='/item1' className='header-item' activeClassName='active'>Item1</NavLink>
            <NavLink to='/item2' className='header-item' activeClassName='active'>Item2</NavLink>
        </nav>
    )
}
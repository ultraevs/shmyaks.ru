import React from "react";
import {animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.scss"
const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav>
            <ul>
                <li>
                    <NavLink onClick={scrollToTop} to="/">
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        Проекты
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import styles from "./Navbar.module.scss"
const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link onClick={scrollToTop} to="#">Главная</Link>
                </li>
                <li>
                    <Link to="about" spy smooth>
                        О нас
                    </Link>
                </li>
                <li>
                    <Link to="projects" spy smooth>
                        Проекты
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
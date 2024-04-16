import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import logo from "../../assets/svg/logo.svg"
import close from "../../assets/svg/close.svg"
import arrow from "../../assets/svg/move-up-right.svg"
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal.jsx";

import styles from "./Header.module.scss"

const Header = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [modalActive1, setModalActive1] = useState(false);

    return (
        <header className={styles.header}>
            <div onClick={scrollToTop} className={styles.header__logo}>
                <img src={logo} alt="TMX logo" />
            </div>
            <div className={styles.header__nav}>
                <Navbar />
                <button onClick={() => setModalActive1(true)}>Связаться</button>
            </div>

            <Modal active={modalActive1} setActive={setModalActive1}>
                <div className={styles.modal_info}>
                    <button
                        className={styles.close}
                        onClick={() => setModalActive1(false)}
                    >
                        <img src={close} alt="" />
                    </button>
                    <div className={styles.contact}>
                        <input className={styles.contact__input} type="text" placeholder="Оставьте Email или telegram" />
                        <button><img src={arrow} alt="" /></button>
                    </div>
                </div>

            </Modal>

        </header>
    );
}

export default Header;
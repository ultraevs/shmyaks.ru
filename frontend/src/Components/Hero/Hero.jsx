import gallery_1 from "../../assets/img/gallery_1.jpg"
import mouse from "../../assets/svg/mouse.svg"
import styles from "./Hero.module.scss"

const Hero = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.container__info}>
                <h1>Создадим сайт вашей мечты</h1>
                <p>профессиональный веб-дизайн и разработка</p>
                <button>Заказать сайт</button>
            </div>
            <div className={styles.container__gallery}>
                <img src={gallery_1} alt="" />
            </div>
        </div>
        <div className={styles.scroll_down}>
            <img src={mouse} alt="scroll down" />
            <p>Листайте ниже</p>
        </div>
        </> 
        
     );
}
 
export default Hero;
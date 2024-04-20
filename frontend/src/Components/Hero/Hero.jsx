import mouse from "../../assets/svg/mouse.svg"
import CarouselBox from "../СarouselBox/CarouselBox";

import gallery_1 from "../../assets/img/gallery_1.jpg";
import gallery_2 from "../../assets/img/gallery_2.jpg";
import gallery_3 from "../../assets/img/gallery_3.jpg";
import gallery_4 from "../../assets/img/gallery_4.jpg";

import styles from "./Hero.module.scss"

const Hero = () => {
    let images = [gallery_1, gallery_2, gallery_3, gallery_4];
    return (
        <>
        <div className={styles.container}>
            <div className={styles.container__info}>
                <h1>Создадим сайт <br/> вашей мечты</h1>
                <p>профессиональный веб-дизайн и разработка</p>
                <button>Заказать сайт</button>
            </div>
            <div className={styles.container__gallery}>
                <CarouselBox props={images} />
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
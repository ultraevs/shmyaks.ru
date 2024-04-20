import Layout from "../../Components/Layout/Layout";
import CarouselBox from "../../Components/СarouselBox/CarouselBox";

import gallery_1 from "../../assets/img/gallery_1.jpg";
import gallery_2 from "../../assets/img/gallery_2.jpg";
import gallery_2_1 from "../../assets/img/gallery_2_1.jpg";
import gallery_3 from "../../assets/img/gallery_3.jpg";
import gallery_3_1 from "../../assets/img/gallery_3_1.jpg";
import gallery_4 from "../../assets/img/gallery_4.jpg";
import gallery_4_1 from "../../assets/img/gallery_4_1.jpg";

import styles from "./Projects.module.scss"

const Projects = () => {
    let tender = [gallery_1];
    let shmyksb = [gallery_2, gallery_2_1];
    let smolathon = [gallery_3, gallery_3_1];
    let vetdonor = [gallery_4, gallery_4_1];

    return (
        <Layout>
            <div className={styles.projects}>
                <div className={styles.projects__part}>
                    <h1 className={styles.projects__title}>Галерея<br/>проектов</h1>
                    <div className={styles.projects__block__tender}>
                        <CarouselBox control={false} props={tender} />
                    </div>
                    <div className={styles.projects__block}>
                        <CarouselBox control={false} props={shmyksb} />
                    </div>
                </div>
                <div className={styles.projects__part}>
                    <div className={styles.projects__block}>
                        <CarouselBox control={false} props={vetdonor} />
                    </div>

                    <div className={styles.projects__block}>
                        <CarouselBox control={false} props={smolathon} />
                    </div>
                </div>


            </div>
        </Layout>
    );
}

export default Projects;
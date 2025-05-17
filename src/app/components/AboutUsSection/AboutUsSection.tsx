'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from "motion/react"

const AboutUsSection = () => {
    return (
        <div className={styles.page} id='o-nas'>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0 }}>O Naszej Sali Zabaw</motion.h2>
            <div className={styles.container}>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0 }}>Nasza sala zabaw jest bezpieczna, nowoczesna, pełna kolorów i przestrzeni, stworzona z myślą o dzieciach i ich rodzicach. Tutaj twoje dziecko może rozwijać swoją wyobraźnię, sprawność ruchową oraz umiejętności społeczne, a ty zyskać chwile wytchnienia, lub załatwić ważne sprawy, mając pewność że twoja pociecha jest w dobrych rękach.<br /><br />
                    Zapraszamy do naszej sali zabaw, miejsca które pokocha zarówno dzieci jak i rodzice. Stworzyliśmy bezpieczną, kolorową i inspirującą przestrzeń, gdzie dzieci mogą się wyszaleć, rozwijać, i spędzać czas na najlepszej zabawie a dorośli mają chwilę by się zrelaksować przy kawie obserwując radość swoich pociech.</motion.p>
                <Image src={"/images/zdjecie1.jpg"} width={1200} height={600} alt="Sala zabaw Kinderland" />
            </div>
        </div>
    );
}

export default AboutUsSection;
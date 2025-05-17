'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import Link from 'next/link';
import { motion } from "motion/react"

const TopContent = () => {
    return (
        <div className={styles.page}>
            <div className={styles.heroContent}>
                <div className={styles.logoContainer}>
                    <Image
                        src="/images/kinderland_przezroczyste.png"
                        alt="Kinderland Logo"
                        width={200}
                        height={200}
                        className={styles.logo}
                    />
                    <h1 className={styles.title}>Sala Zabaw Kinderland</h1>
                </div>
                <motion.p initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className={styles.subtitle}>Miejsce gdzie dzieci się bawią, a rodzice odpoczywają ze spokojem</motion.p>
                <Link href={'/#kontakt'}><motion.button initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={styles.heroButton}>Zarezerwuj wizytę</motion.button></Link>
            </div>
            <div className={styles.baner}>
                <Image
                    src="/images/baner.png"
                    alt="Kinderland baner"
                    width={2000}
                    height={850}
                    className={styles.baner}
                />
            </div>
        </div>
    );
}

export default TopContent;
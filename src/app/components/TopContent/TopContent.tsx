'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import Link from 'next/link';
import { motion, useScroll } from "motion/react"
import { useEffect, useState } from 'react';

const TopContent = () => {
    const { scrollY } = useScroll()
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (y) => {
            setIsFixed(y > 0);
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <div className={styles.page}>
            <div className={styles.nav}
            style={{boxShadow: isFixed ? '0px 0px 15px rgba(0,0,0,0.15)' : 'none'}}>
                <Link href={'/#atrakcje'}>Atrakcje</Link>
                <Link href={'/#cennik'}>Cennik</Link>
                <Link href={'/#urodziny'}>Urodziny</Link>
                <Link href={'/#kontakt'}>Kontakt</Link>
            </div>
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
        </div >
    );
}

export default TopContent;
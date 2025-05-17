'use client'
import styles from './styles.module.css'
import { motion } from "motion/react"

const OpeningHours = () => {
    return (
        <div className={styles.page} id='godziny-otwarcia'>
            <div className={styles.container}>
                <motion.h2 initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0 }}>Godziny Otwarcia</motion.h2>
                <div className={styles.hoursCard}>
                    <div className={styles.hoursRow}>
                        <div className={styles.day}>Poniedziałek - Piątek:</div>
                        <motion.div
                            className={styles.time}
                            initial={{ opacity: 0, y: 10}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0 }}>12:00 - 20:00</motion.div>
                    </div>
                    <div className={styles.hoursRow}>
                        <div className={styles.day}>Sobota - niedziela:</div>
                        <motion.div
                            className={styles.time}
                            initial={{ opacity: 0, y: 10}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}>10:00 - 20:00</motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpeningHours;
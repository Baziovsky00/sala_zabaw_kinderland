'use client'
import styles from './styles.module.css'
import { motion } from "motion/react"

const WhyTrustUs = () => {
    return (
        <div className={styles.page}>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0 }}>Dlaczego Warto Nam Zaufać</motion.h2>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                {
                    trustBlocks.map((item, i) => (
                        <div
                            key={i}
                            className={styles.block}>
                            <div style={{ overflow: 'hidden' }}>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >{item.title}</motion.p>
                            </div>
                            <h3>{item.content}</h3>
                        </div>
                    ))
                }
            </motion.div >
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={styles.underPar}>Nasza sala to więcej niż miejsce do zabawy, to przestrzeń do budowania wspomnień, odkrywania świata i wspólnego spędzania czasu w wyjątkowy sposób .</motion.p>
        </div >
    );
}

export default WhyTrustUs;

const trustBlocks = [
    {
        title: 'BEZPIECZENSTWO PRZEDE WSYSTKIM',
        content: 'Sala jest monitorowana , wyposażona w certyfikowane zabawki , oraz miękkie strefy chroniąceprze urazami'
    },
    {
        title: 'STREFA MALUCHA I STARSZAKA',
        content: 'Specjalnie wydzielone części , dostosowane do dzieci i potrzeb w różnym wieku'
    },
    {
        title: 'ORGANIZACJA URODZIN I WYDARZEN',
        content: 'Niezapomniane chwile w gronie przyjaciół i świetna zabawa'
    },
    {
        title: 'MNÓSTWO RUCHU I SMIECHU ',
        content: 'Zjeżdżalnie , baseny z kulkami , tory przeszkód , trampoliny'
    }
]
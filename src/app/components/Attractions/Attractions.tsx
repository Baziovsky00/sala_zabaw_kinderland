'use client'
import styles from './styles.module.css'
import { motion } from "motion/react"

const Attractions = () => {
    return (
        <div className={styles.page} id='atrakcje'>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0 }}>Nasze Atrakcje</motion.h2>
            <div className={styles.container}>
                {
                    attractions.map((item, i) => (
                        <motion.div
                            className={styles.container}
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }} 
                            key={i}>
                            <p>{item.emote}</p>
                            <h3><span>{item.title}</span> - {item.content}</h3>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}

export default Attractions;

const attractions = [
    {
        emote: '🧗',
        title: 'Wieża Spider',
        content: 'wspinaczka w bezpiecznej formie'
    },
    {
        emote: '🛝',
        title: 'Zjeżdżalnie torowe i tubowe',
        content: 'dla fanów szybkości i śmiechu'
    },
    {
        emote: '👶',
        title: 'Kącik Malucha',
        content: 'bezpieczna strefa dla najmłodszych'
    },
    {
        emote: '💥',
        title: 'Armatki pneumatyczne',
        content: 'celność i zabawa w jednym'
    },
    {
        emote: '🥷',
        title: 'Ninja Park',
        content: 'strefa zręczności i interaktywnych gier'
    },
    {
        emote: '🤸 ',
        title: 'Trampoliny',
        content: 'wyskocz po uśmiech'
    },
    {
        emote: '🎢',
        title: 'Zjazd pontonowy',
        content: 'emocje gwarantowane!'
    }
]
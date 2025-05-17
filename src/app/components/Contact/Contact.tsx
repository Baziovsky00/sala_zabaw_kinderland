'use client'
import styles from './styles.module.css'
import { LuMapPin } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className={styles.page} id='kontakt'>
      <div className={styles.container}>
        <motion.h2 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0 }}>Kontakt</motion.h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <motion.div className={styles.contactItem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}>
              <LuMapPin className={styles.contactIcon} />
              <p>Marszałka Józefa Piłsudskiego 52, 73-110 Stargard</p>
            </motion.div>
            {/* <motion.div className={styles.contactItem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <FaPhoneAlt className={styles.contactIcon} />
              <p>+48 667 831 121</p>
            </motion.div> */}
            <motion.div className={styles.contactItem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <IoMdMail className={styles.contactIcon} />
              <p>Kinderland.net@gmail.com</p>
            </motion.div>
            <motion.div className={styles.contactItem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <FaClock className={styles.contactIcon} />
              <p>Poniedziałek - Piątek: 12:00 - 20:00</p>
              <p>Sobota - Niedziela: 10:00 - 20:00</p>
            </motion.div>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7594744723942!2d15.024582476967572!3d53.3475616746323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700b9a41dd8f695%3A0xb1ae49420a1a6265!2sMarsza%C5%82ka%20J%C3%B3zefa%20Pi%C5%82sudskiego%2052%2C%2073-110%20Stargard!5e0!3m2!1spl!2spl!4v1747477906264!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
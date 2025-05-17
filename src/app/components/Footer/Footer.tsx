import Image from 'next/image';
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <Image
                            src="/images/kinderland_przezroczyste.png"
                            alt="Kinderland Logo"
                            width={120}
                            height={120}
                            className={styles.footerLogoImage}
                        />
                        <h3>Sala Zabaw Kinderland</h3>
                    </div>
                    <div className={styles.footerLinks}>
                        <a href="#" className={styles.footerLink}>
                            Strona główna
                        </a>
                        <a href="#o-nas" className={styles.footerLink}>
                            O nas
                        </a>
                        <a href="#atrakcje" className={styles.footerLink}>
                            Atrakcje
                        </a>
                        <a href="#cennik" className={styles.footerLink}>
                            Cennik
                        </a>
                        <a href="#urodziny" className={styles.footerLink}>
                            Urodziny
                        </a>
                        <a href="#godziny-otwarcia" className={styles.footerLink}>
                            Godziny otwarcia
                        </a>
                        <a href="#kontakt" className={styles.footerLink}>
                            Kontakt
                        </a>
                    </div>
                    <div className={styles.footerContact}>
                        <p>Marszałka Józefa Piłsudskiego 52, 73-110 Stargard</p>
                        <p>+48 667 831 121</p>
                        <p>kinderland@gmail.pl</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} Sala Zabaw Kinderland. Wszelkie prawa zastrzeżone.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
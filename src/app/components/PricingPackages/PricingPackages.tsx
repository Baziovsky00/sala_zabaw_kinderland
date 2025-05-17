'use client'
import styles from './styles.module.css'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "motion/react"

const PricingPackages = () => {
    return (
        <div className={styles.page} id='urodziny'>
            <div className={styles.container}>
                <motion.h2 initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0 }}>Pakiety Urodzinowe</motion.h2>
                <motion.div
                    className={styles.tableOutside}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0 }}>
                    <Table className={`${styles.birthdayTable} w-full border-collapse`}>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="py-3 px-4 text-left font-semibold">Pakiet</TableHead>
                                <TableHead className="py-3 px-4 text-left font-semibold">Cena</TableHead>
                                <TableHead className="py-3 px-4 text-left font-semibold">Czas</TableHead>
                                <TableHead className="py-3 px-4 text-left font-semibold">Ilość dzieci</TableHead>
                                <TableHead className="py-3 px-4 text-left font-semibold">Uwagi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-b hover:bg-gray-50">
                                <TableCell className="py-3 px-4">MINI</TableCell>
                                <TableCell className="py-3 px-4 font-medium">590 zł</TableCell>
                                <TableCell className="py-3 px-4">2h</TableCell>
                                <TableCell className="py-3 px-4">do 10</TableCell>
                                <TableCell className="py-3 px-4">2 soki 2 wody, słone przekąski, owoce</TableCell>
                            </TableRow>
                            <TableRow className="border-b hover:bg-gray-50">
                                <TableCell className="py-3 px-4">STANDARD</TableCell>
                                <TableCell className="py-3 px-4 font-medium">790 zł</TableCell>
                                <TableCell className="py-3 px-4">2h</TableCell>
                                <TableCell className="py-3 px-4">do 15</TableCell>
                                <TableCell className="py-3 px-4">
                                    Napoje bez limitu, wejściówka dla 2 osób za darmo, słone i słodkie, popcorn chipsy przekąski, owoce
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b hover:bg-gray-50">
                                <TableCell className="py-3 px-4">PREMIUM</TableCell>
                                <TableCell className="py-3 px-4 font-medium">950 zł</TableCell>
                                <TableCell className="py-3 px-4">2h</TableCell>
                                <TableCell className="py-3 px-4">do 20</TableCell>
                                <TableCell className="py-3 px-4">
                                    Napoje bez limitu, wejściówka dla 2 osób za darmo, słone i słodkie, popcorn chipsy przekąski, owoce,
                                    kawa herbata, malowanie buziek
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </motion.div>
                <motion.div
                    className={styles.birthdayNotes}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    <div className={styles.cakeInfo}>
                        <h4>Zadbaliśmy o to, by każde przyjęcie było w pełni dopasowane do potrzeb dziecka i oczekiwań rodziców</h4>
                        <p>Każda dodatkowa osoba do urodzin 35 zł</p>
                        <p>Dzieci do 1 roku życia - wejście darmowe</p>
                        <p>Strefa dla rodziców (kawa/herbata + stolik): 100 zł w mini i standard</p>
                    </div>

                    <div className={styles.cakeInfo}>
                        <h4>Informacja na temat tortów</h4>
                        <p>
                            Ze względów sanitarno-epidemiologicznych informujemy, że tort urodzinowy należy zorganizować we własnym
                            zakresie.
                        </p>
                        <p>Wymagane jest przyniesienie paragonu przy wnoszeniu tortu do naszej sali zabaw.</p>
                        <p>
                            Dziękujemy za zrozumienie i współpracę - bezpieczeństwo oraz komfort naszych małych gości jest dla nas
                            priorytetem.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default PricingPackages
'use client'
import styles from './styles.module.css'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "motion/react"

const Pricing = () => {
    return (
        <div className={styles.page} id='cennik'>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0 }}>Cennik</motion.h2>
            <div className={styles.container}>
                <div className={styles.pricingTables}>
                    <motion.div
                        className={styles.pricingTable}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0 }}>
                        <h3>Wejścia Indywidualne</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Czas</TableHead>
                                    <TableHead>Cena</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1h</TableCell>
                                    <TableCell>29 zł</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2h</TableCell>
                                    <TableCell>39 zł</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Bez limitu (dzień)</TableCell>
                                    <TableCell>49 zł</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Opiekun</TableCell>
                                    <TableCell>GRATIS</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </motion.div>

                    <motion.div
                        className={styles.pricingTable}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}>
                        <h3>Pakiety</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Pakiet</TableHead>
                                    <TableHead>Cena</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>5 wejść po 1h</TableCell>
                                    <TableCell>100 zł</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>10 wejść po 1h</TableCell>
                                    <TableCell>180 zł</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Miesięczny nielimitowany</TableCell>
                                    <TableCell>250 zł</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Pricing
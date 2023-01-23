import Head from "next/head";
import styles from '../styles/About.module.css'

export default function About() {
    return(
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            
            <div className={styles.container}>
                <div className={styles.image}>oisas</div>
            </div>
        </>
    )
}
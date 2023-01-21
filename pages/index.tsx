import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.resume}>
                <h1>Olá! Me chamo Gabriel Trigueiro</h1>
                <p>Desenvolvedor Front-End</p>
                <p>Atualmente cursando Ciência da Computação na UEPB</p>
            </div>
            <div className={styles.photo}>
                <Image
                    alt='foto'
                    src={'/images/self.jpg'}
                    fill
                    style={{
                        objectFit: 'cover',
                        borderRadius: '800px'
                    }}
                />
            </div>
        </div>
    </>
  )
}

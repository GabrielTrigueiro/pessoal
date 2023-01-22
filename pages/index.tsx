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
                <p>
                    Desenvolvedor Front-End, atualmente cursando Ciência da Computação na UEPB, trabalho com React e Next.
                </p>
                   
                <h3>Para mais detalhes consulte a página "Sobre mim" ou baixe e leia o currículo a baixo.</h3>

                <div className={styles.button}>
                    <button>Dowload Currículo</button>
                </div>
            </div>
            <div className={styles.photo}>
                <Image
                    alt='foto'
                    src={'/images/self.jpg'}
                    width={350}
                    height={350}
                    style={{
                        borderRadius: '2000px',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </div>
    </>
  )
}

import Head from "next/head";
import styles from '../styles/About.module.css'

export default function About() {

    const skills = [
        "Typesciprt",
        "Javascript",
        "Html",
        "CSS",
        "Sass",
        "React",
        "Next",
        "Flutter",
        "Redux",
        "React-Router",
        "React-Hooks",
        "Material-UI"
    ]

    return(
        <>  
            <Head>
                <title>Sobre</title>
            </Head>
            
            <div className={styles.container}>
                <div className={styles.image}>
                    oi
                </div>
                <div className={styles.skills}>
                    {skills.map((value) => (
                        <div className={styles.item}>
                            <p>{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}   
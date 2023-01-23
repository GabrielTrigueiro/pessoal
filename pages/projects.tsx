import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Project.module.css"

interface RepoName {
    name: string
    html_url: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const api = 'https://api.github.com/users/GabrielTrigueiro/repos'

    const res = await fetch(api)

    const data = await res.json()

    return {
        props: {data, fallback: false}}
}

export default function Projects({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return(
        <>
            <Head>
                <title>Projetos</title>
            </Head>
            <div className={styles.container}>
                {data.map((rep:RepoName) => (
                    <div>
                        <Link href={rep.html_url} target={'_blank'}>{rep.name}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}
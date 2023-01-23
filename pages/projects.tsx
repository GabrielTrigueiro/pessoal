import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const api = 'https://api.github.com/users/GabrielTrigueiro/repos'

    const res = await fetch(api)

    const data = await res.json()

    return {props: {data}}
}

export default function Projects() {
    return(
        <>
            <Head>
                <title>Projetos</title>
            </Head>
            <div>
                {}
            </div>
        </>
    )
}
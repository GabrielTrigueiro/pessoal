import { Layout } from '../components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/App.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>
        <div className={styles.container}>
            <Component {...pageProps} />
        </div>
    </Layout>
    )
}

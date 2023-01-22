import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar_container}>
            <Link href={'/'}>Home</Link>
            <Link href={'/projects'}>Projetos</Link>
            <Link href={'/about'}>Sobre mim</Link>
        </div>
    )
}
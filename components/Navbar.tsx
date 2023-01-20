import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar_container}>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/projects'}>Projetos</Link>
                </li>
                <li>
                    <Link href={'/about'}>Sobre mim</Link>
                </li>
            </ul>
        </nav>
    )
}
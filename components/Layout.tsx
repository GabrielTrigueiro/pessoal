import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css"

interface props {
    children?:  React.ReactNode
}

export const Layout: React.FC<props> = ({children}) => {
    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
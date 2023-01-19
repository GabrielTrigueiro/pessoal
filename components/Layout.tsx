import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface props {
    children?:  React.ReactNode
}

export const Layout: React.FC<props> = ({children}) => {
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
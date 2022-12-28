
import AppHeader from "../main/AppHeader";
import AppFooter from "../main/AppFooter";
import AppSidebar from "../main/AppSidebar";
import Head from "next/head";
import React from "react";
const MainLayout = ({ children }) => {
    return ( 
        <>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                </Head>
                <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full">
                    <AppHeader />
                    <AppSidebar />
                    <div class="page-wrapper" style={{ display: "block"}}>
                        { children }
                        
                        <AppFooter />
                    </div>
                </div>
        </>
     );
}
 
export default MainLayout;

import AppHeader from "../main/AppHeader";
import AppFooter from "../main/AppFooter";
import AppSidebar from "../main/AppSidebar";
import React from "react";
const MainLayout = ({ children }) => {
    return ( 
        <>
                <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full">
                    <AppHeader />
                    <AppSidebar />
                    <div className="page-wrapper" style={{ display: "block", marginTop: "80px"}}>
                        { children }
                        
                        <AppFooter />
                    </div>
                </div>
        </>
     );
}
 
export default MainLayout;
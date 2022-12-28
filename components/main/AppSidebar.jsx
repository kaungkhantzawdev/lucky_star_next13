const AppSidebar = () => {
    return ( 
        <>
            <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar" data-sidebarbg="skin6">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="index.html"
                                    aria-expanded="false"><i data-feather="home" className="feather-icon"></i><span
                                        className="hide-menu">Dashboard</span></a></li>
                            <li className="list-divider"></li>
                            <li className="nav-small-cap"><span className="hide-menu">Applications</span></li>

                            <li className="sidebar-item"> <a className="sidebar-link" href="ticket-list.html"
                                    aria-expanded="false"><i data-feather="tag" className="feather-icon"></i><span
                                        className="hide-menu">Ticket List
                                    </span></a>
                            </li>
                        
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
     );
}
 
export default AppSidebar;
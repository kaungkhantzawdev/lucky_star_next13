import Link from "next/link";
const AppSidebar = () => {
    return ( 
        <>
            {/* <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar" data-sidebarbg="skin6">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="index.html"
                                    aria-expanded="false"><i data-feather="home" className="feather-icon"></i><span
                                        className="hide-menu">Dashboard</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="index.html"
                                    aria-expanded="false"><i data-feather="home" className="feather-icon"></i><span
                                        className="hide-menu">Dashboard</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="index.html"
                                    aria-expanded="false"><i data-feather="home" className="feather-icon"></i><span
                                        className="hide-menu">Dashboard</span></a></li>
                            <li className="list-divider"></li>
                           
                        </ul>
                    </nav>
                </div>
            </aside> */}

            <aside class="left-sidebar" style={{ position: "fixed"}} data-sidebarbg="skin6">
            <div class="scroll-sidebar" data-sidebarbg="skin6">
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="sidebar-item">
                            <Link class="sidebar-link sidebar-link" href="/"
                                aria-expanded="false">
                                <span class="material-symbols-outlined" style={{ marginRight:" 5px ", marginBottom: "3px"}}>
                                    home
                                </span>
                                <span class="hide-menu">Dashboard</span>
                            </Link>
                        </li>
                        <li class="list-divider"></li>
                        <li class="nav-small-cap"><span class="hide-menu">Applications</span></li>
                        <li class="sidebar-item">
                            <Link class="sidebar-link sidebar-link" href="/categories"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style={{ marginRight:" 5px ",  margiBbottom:" 3px" }}>
                                category
                                </span>
                                <span
                                    class="hide-menu">Categories</span>
                            </Link>
                        </li>
                        <li class="sidebar-item">
                            <Link class="sidebar-link sidebar-link" href="/products"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style={{ marginRight:" 5px ",  margiBbottom:" 3px" }}>
                                storefront
                                </span>
                                <span
                                    class="hide-menu">Products</span>
                            </Link>
                        </li>
                        <li class="sidebar-item">
                             <Link class="sidebar-link" href="/tickets"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style={{ marginRight:" 5px "}}>
                                   sell
                                </span>
                                <span
                                    class="hide-menu">Tickets
                                </span>
                            </Link>
                        </li>
                        <li class="sidebar-item"> 
                            <Link class="sidebar-link sidebar-link" href="/users"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style={{ marginRight:" 5px"}}>
                                 group
                                </span>
                                <span
                                    class="hide-menu">Users</span>
                            </Link>
                        </li>

                        <li class="list-divider"></li>

                        <li class="nav-small-cap"><span class="hide-menu">Authentication</span></li>

                        <li class="sidebar-item"> 
                            <Link class="sidebar-link sidebar-link" href="/auth/login"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style={{ marginRight:" 5px ",  margiBbottom:" 3px" }}>
                                login
                                </span>
                                <span
                                    class="hide-menu">Login</span>
                            </Link>
                        </li>
                        <li class="sidebar-item">
                            <Link class="sidebar-link sidebar-link" href="/auth/register"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style={{ marginRight:" 5px ",  margiBbottom:" 3px" }}>
                                    person
                                </span>
                                <span
                                    class="hide-menu">Register</span>
                            </Link>
                        </li>


                        <li class="list-divider"></li>
                        <li class="nav-small-cap"><span class="hide-menu">Extra</span></li>
                        <li class="sidebar-item"> 
                            <Link class="sidebar-link sidebar-link" href="/auth/login"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style={{ marginRight:" 5px ",  margiBbottom:" 3px" }}>
                                edit_note
                                </span>
                                <span
                                    class="hide-menu">Logout</span>
                            </Link>
                        </li>
                        <li class="sidebar-item"> 
                            <Link class="sidebar-link sidebar-link" href="/auth/login"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style={{ marginRight:" 5px ",  margiBbottom:" 3px" }}>
                                logout
                                </span>
                                <span
                                    class="hide-menu">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        </>
     );
}
 
export default AppSidebar;
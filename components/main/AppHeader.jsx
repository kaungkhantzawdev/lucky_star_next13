import Link from "next/link";
import Image from "next/image";
const AppHeader = () => {
    return ( 
        <>
        <header className="topbar w-100" style={{ position: "fixed"}} data-navbarbg="skin6">
            <nav className="navbar top-navbar navbar-expand-md">
                <div className="navbar-header" data-logobg="skin6">
                    <Link className="nav-toggler waves-effect waves-light d-block d-md-none" href="/"><i
                            className="ti-menu ti-close"></i></Link>
                    <div className="navbar-brand">
                        <Link href="/">
                            <b className="logo-icon" style={{ height: " 45px; "}}>
                                <Image src="/assets/images/logo-icon.png" alt="homepage" className="dark-logo" height={45} width={45 }/>
                                <Image src="/assets/images/logo-icon.png" alt="homepage" className="light-logo"  height={45} width={45}/>
                            </b>
                            <span className="logo-text">
                                <span style={{color:" #e51422", fontWeight:" 700", margin: "0 5px;"}}>LUCKY</span><span style={{fontWeight: "500",color:" #e51422",}}>Star</span>
                            </span>
                        </Link>
                    </div>
                    <Link className="topbartoggler d-block d-md-none waves-effect waves-light" href="/"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                            className="ti-more"></i></Link>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle pl-md-3 position-relative" href="javascript:void(0)"
                                id="bell" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <span>
                                    <span className="material-symbols-outlined">
                                    notifications
                                    </span>
                                </span>
                                <span className="badge badge-primary notify-no rounded-circle">5</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
                                <ul className="list-style-none">
                                    <li>
                                        <div className="message-center notifications position-relative">
                                            <Link href="javascript:void(0)"
                                                className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <div className="btn btn-danger rounded-circle btn-circle"><i
                                                        data-feather="airplay" className="text-white"></i></div>
                                                <div className="w-75 d-inline-block v-middle pl-2">
                                                    <h6 className="message-title mb-0 mt-1">Luanch Admin</h6>
                                                    <span className="font-12 text-nowrap d-block text-muted">Just see
                                                        the my new
                                                        admin!</span>
                                                    <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                                                </div>
                                            </Link>
                                            <Link href="javascript:void(0)"
                                                className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span className="btn btn-success text-white rounded-circle btn-circle"><i
                                                        data-feather="calendar" className="text-white"></i></span>
                                                <div className="w-75 d-inline-block v-middle pl-2">
                                                    <h6 className="message-title mb-0 mt-1">Event today</h6>
                                                    <span
                                                        className="font-12 text-nowrap d-block text-muted text-truncate">Just
                                                        a reminder that you have event</span>
                                                    <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span>
                                                </div>
                                            </Link>
                                            <Link href="javascript:void(0)"
                                                className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span className="btn btn-info rounded-circle btn-circle"><i
                                                        data-feather="settings" className="text-white"></i></span>
                                                <div className="w-75 d-inline-block v-middle pl-2">
                                                    <h6 className="message-title mb-0 mt-1">Settings</h6>
                                                    <span
                                                        className="font-12 text-nowrap d-block text-muted text-truncate">You
                                                        can customize this template
                                                        as you want</span>
                                                    <span className="font-12 text-nowrap d-block text-muted">9:08 AM</span>
                                                </div>
                                            </Link>
                                            <Link href="javascript:void(0)"
                                                className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span className="btn btn-primary rounded-circle btn-circle"><i
                                                        data-feather="box" className="text-white"></i></span>
                                                <div className="w-75 d-inline-block v-middle pl-2">
                                                    <h6 className="message-title mb-0 mt-1">Pavan kumar</h6> <span
                                                        className="font-12 text-nowrap d-block text-muted">Just
                                                        see the my admin!</span>
                                                    <span className="font-12 text-nowrap d-block text-muted">9:02 AM</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className="nav-link pt-3 text-center text-dark" href="javascript:void(0);">
                                            <strong>Check all notifications</strong>
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="settings" className="svg-icon"></i>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" href="#">Action</Link>
                                <Link className="dropdown-item" href="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="#">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <Link className="nav-link" href="javascript:void(0)">
                                <div className="customize-input">
                                    <select
                                        className="custom-select form-control bg-white custom-radius custom-shadow border-0">
                                        <option selected>EN</option>
                                        <option value="1">CN</option>
                                    </select>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav float-right">
                        <li className="nav-item d-none d-md-block">
                            <Link className="nav-link" href="javascript:void(0)">
                                <form>
                                    <div className="customize-input">
                                        <input className="form-control custom-shadow custom-radius border-0 bg-white"
                                            type="search" placeholder="Search" aria-label="Search" />
                                        <i className="form-control-icon" data-feather="search"></i>
                                    </div>
                                </form>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <Image src="/assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle"
                                    width={ 40 } height={40}/>
                                <span className="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span
                                        className="text-dark">Jason Doe</span> <i data-feather="chevron-down"
                                        className="svg-icon"></i></span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <Link className="dropdown-item" href="javascript:void(0)"><i data-feather="user"
                                        className="svg-icon mr-2 ml-1"></i>
                                    My Profile</Link>
                                <Link className="dropdown-item" href="javascript:void(0)"><i data-feather="credit-card"
                                        className="svg-icon mr-2 ml-1"></i>
                                    My Balance</Link>
                                <Link className="dropdown-item" href="javascript:void(0)"><i data-feather="mail"
                                        className="svg-icon mr-2 ml-1"></i>
                                    Inbox</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="javascript:void(0)"><i data-feather="settings"
                                        className="svg-icon mr-2 ml-1"></i>
                                    Account Setting</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="javascript:void(0)"><i data-feather="power"
                                        className="svg-icon mr-2 ml-1"></i>
                                    Logout</Link>
                                <div className="dropdown-divider"></div>
                                <div className="pl-4 p-3">
                                    <Link href="javascript:void(0)" className="btn btn-sm btn-info">View
                                        Profile</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
     );
}
 
export default AppHeader;
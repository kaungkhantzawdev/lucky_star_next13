import Item from "../sidebar/Item";
import Divider from "../sidebar/Divider";
import Title from "../sidebar/Title";
const AppSidebar = () => {
    return ( 
        <>
        <aside className="left-sidebar" data-sidebarbg="skin6" style={{ overflow: "auto", position: "fixed"}}>
            <div className="scroll-sidebar" data-sidebarbg="skin6">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                    
                        <Item link="/" iconName="home" itemName="Dashboard"/>
                        <Divider />
                        <Title titleName="Applications"/>
                        <Item link="/avatars" iconName="account_circle" itemName="Avatars"/>
                        <Item link="/categories" iconName="category" itemName="Categories"/>
                        <Item link="/lucky-draw" iconName="shapes" itemName="Lucky draw"/>
                        <Item link="/products" iconName="shopping_bag" itemName="Products"/>
                        <Item link="/media" iconName="perm_media" itemName="Media"/>
                        <Item link="/result" iconName="receipt_long" itemName="Result"/>
                        <Item link="/shops" iconName="store" itemName="Shops"/>
                        <Item link="/tickets" iconName="sell" itemName="Tickets"/>
                        <Item link="/users" iconName="group" itemName="Users"/>

                        <Divider />

                        <Title titleName="Authentication"/>

                        <Item link="/auth/login" iconName="login" itemName="Login"/>

                        <Item link="/auth/register" iconName="person" itemName="Register"/>

                        <Divider />

                        <Title titleName="Extra"/>

                        <Item link="/auth/login" iconName="edit_note" itemName="Document"/>

                        <Item link="/auth/login" iconName="logout" itemName="Logout"/>
                    </ul>
                </nav>
            </div>
        </aside>
        </>
     );
}
 
export default AppSidebar;
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    link: string,
    iconName: string,
    itemName: string
}

const Item = ({ link, iconName, itemName }: Props) => {

    const router = useRouter()
    console.log(router.query)

    return ( 
        <>
        {/* selected - active */}
        <li className={"sidebar-item"}>
            <Link className="sidebar-link sidebar-link" href={link}
                aria-expanded="false">
                <span className="material-symbols-outlined" style={{ marginRight: 5 + 'px', marginBottom: 3+ 'px' }}>
                    { iconName }
                </span>
                <span className="hide-menu">{ itemName }</span>
            </Link>
        </li>
        </>
     );
}
 
export default Item;
interface Props {
    titleName: string
}

const Title = ({ titleName }: Props ) => {
    return ( 
        <>
            <li className="nav-small-cap"><span className="hide-menu">{ titleName }</span></li>
        </>
     );
}
 
export default Title;
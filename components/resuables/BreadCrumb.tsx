import Link from "next/link";

interface Props {
    title: string,
    link: string,
    child: string
}

const BreadCrumb = ({title, link, child }: Props) => {
    return ( 
        <>
            <div className="col-7 align-self-center">
                <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">{ title }</h4>
                <div className="d-flex align-items-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 p-0">
                            <li className="breadcrumb-item"><Link href={link} className="text-muted">App</Link></li>
                            <li className="breadcrumb-item text-muted active" aria-current="page">{ child }</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
     );
}
 
export default BreadCrumb;
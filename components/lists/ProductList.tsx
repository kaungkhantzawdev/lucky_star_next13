import Link from "next/link";
const ProductList = () => {
    return ( 
        <>
             <div className="container-fluid">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body d-lg-flex alin-items-end justify-content-between">
                            <div>
                                <h4 className="card-title">Products table</h4>
                                <h6 className="card-subtitle">
                                    all products management
                                </h6>
                            </div>
                            <div className="d-md-flex aligin-items-center">
                                <form>
                                    <div className="d-flex mr-3">
                                        <input className="form-control" type="text" placeholder="Search product" />
                                        <button className="btn waves-effect waves-light btn-primary d-inline-block">search</button>
                                    </div>
                                </form>
                                <Link href="/products/create">
                                    <span className="mt-2 mt-lg-0 btn waves-effect waves-light btn-success d-inline-block">Create Product</span>
                                </Link>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover" style={{ borderBottom: "1px solid #e8eef3"}}>
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Created user name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>13.4.2022</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>13.4.2022</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>13.4.2022</td>
                                    </tr>
                                </tbody>
                            </table>
                        <div className="d-flex aligin-item-end justify-content-between">
                            <div>
                                <p  style={{ margin: "25px"}}>Total product: 300</p>
                            </div>
                            <ul className="pagination" style={{ margin: "25px"}}>
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductList;
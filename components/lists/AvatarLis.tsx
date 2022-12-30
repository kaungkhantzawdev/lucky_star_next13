import Link from "next/link";
const AvatarList = () => {
    return ( 
        <>
             <div className="container-fluid">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body d-lg-flex alin-items-end justify-content-between">
                            <div>
                                <h4 className="card-title">Avatars</h4>
                                <h6 className="card-subtitle">
                                    all avatars management
                                </h6>
                            </div>
                            <div className="d-md-flex aligin-items-center">
                                <form>
                                    <div className="d-flex">
                                        <input className="form-control" type="text" placeholder="Search product" />
                                        <button className="btn waves-effect waves-light btn-primary d-inline-block">search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Avatar</th>
                                        <th scope="col">Ticket count</th>
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
                                        <td>20</td>
                                        <td>@mdo</td>
                                        <td>12.3.2019</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>20</td>
                                        <td>@mdo</td>
                                        <td>12.3.2019</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>20</td>
                                        <td>@mdo</td>
                                        <td>12.3.2019</td>
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
 
export default AvatarList;
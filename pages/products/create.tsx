import BreadCrumb from "../../components/resuables/BreadCrumb";
import Image from "next/image";
import { ReactElement, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Head from "next/head";

const ProductCreate = () => {
    const [value, setValue] = useState('')
    return ( 
        <>
            <Head>
                <title>Lucky start | avatars</title>
            </Head>
             <div className="page-breadcrumb">
                <div className="row mb-4">
                <BreadCrumb title="Product Create" child="product-create" link="/" />
                
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Create Product</h4>
                                <h6 className="card-subtitle">
                                    all products management
                                </h6>
                                <form className="mt-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="nametext" aria-describedby="name" placeholder="Name" />
                                        <small id="name" className="form-text text-muted">Please, must be fill data</small>
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected disabled>Choose category</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <small id="name" className="form-text text-muted">Please, must be fill data</small>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="number" className="form-control" id="nametext" aria-describedby="name" placeholder="Quantity" />
                                                <small id="name" className="form-text text-muted">Please, must be fill data</small>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <select value={value} className="form-control" id="exampleFormControlSelect1">
                                                    <option selected disabled>Choose status</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            <small id="name" className="form-text text-muted">Please, must be fill data</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3" placeholder="Text Here..."></textarea>
                                        <small id="textHelp" className="form-text text-muted">Helper Text</small>
                                    </div>
                                   
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn waves-effect waves-light btn-success d-inline-block">Create Product</button>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Media</h4>
                                <h6 className="card-subtitle">
                                    products create field
                                </h6>
                                <form className="mt-3">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                    
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                        <button type="button" className="btn waves-effect waves-light btn-success d-inline-block">Upload Media</button>
                                    </div>
                            </form>
                            </div>
                        
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Media</h4>
                                <h6 className="card-subtitle">
                                    products create field
                                </h6>
                                <div>
                                    <Image src="/assets/images/logo-icon.png" alt="img" className="my-2 mr-2" width={200} height={200}/>
                                    <Image src="/assets/images/logo-icon.png" alt="img" className="my-2 mr-2" width={200} height={200}/>

                                </div>
                            </div>
                        
                        </div>
                    </div>
                    </div>
            </div>
            </div>
        </>
     );
}

ProductCreate.getLayout = function getLayout(page: ReactElement) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
  }
 
 
export default ProductCreate;
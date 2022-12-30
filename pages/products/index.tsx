import BreadCrumb from "../../components/resuables/BreadCrumb";
import { ReactElement } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import ProductList from "../../components/lists/ProductList";
import Head from "next/head";

const Products = () => {
    return ( 
        <>
                <Head>
                    <title>Lucky start | products</title>
                </Head>
                <div className="page-breadcrumb">
                    <div className="row">
                        <BreadCrumb title="Products" child="products" link="/" />
                        <div className="col-5 align-self-center">
                            <div className="customize-input float-right">
                                <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                                    <option selected>Aug 19</option>
                                    <option value="1">July 19</option>
                                    <option value="2">Jun 19</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductList />
        </>
     );
}

Products.getLayout = function getLayout(page: ReactElement) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
  }
 
export default Products;
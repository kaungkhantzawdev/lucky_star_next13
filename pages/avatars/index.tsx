import type { ReactElement } from 'react'
import BreadCrumb from '../../components/resuables/BreadCrumb'
import MainLayout from '../../components/layouts/MainLayout';
import Head from 'next/head';
import AvatarList from '../../components/lists/AvatarLis';
const Avatars = () => {
    return ( 
        <>
                <Head>
                    <title>Lucky start | avatars</title>
                </Head>
                <div className="page-breadcrumb">
                    <div className="row">
                        <BreadCrumb title="Avatars" child="avatars" link="/" />
                    
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
                <AvatarList/>
        </>
     );
}

Avatars.getLayout = function getLayout(page: ReactElement) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
  }
 
export default Avatars;
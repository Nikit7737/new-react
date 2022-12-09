import React, { useState, fetchData } from 'react';
import { Link, } from "react-router-dom";
import axios from "axios";
import { getRequest } from './Components/Service/Auth';
// import React, { getRequest } from 'react';
import Auth from './Components/Service/Auth'


const Common = () => {
    // let categories = getRequest("/blog/category/")
    let posts = getRequest("/blog/post/")

















    return (

        <>
            {/* for (let i = 0; i < posts.length; i++) {
            posts[i];
            
        } */}
            <div className="container mt-5 ">
                <div className="row flex-row-reverse">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 border-start">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-sm-5 col-md-5 ms-lg-5 col-6">
                                <div className="nav-list-top mb-5">
                                    <h5 className="text-secondary">Category</h5>
                                    <ul className="list-inline sidebar">






                                        <li className="pb-2" onClick={() => fetchData('/blog/Time Management')} ><Link >Time Management</Link></li>
                                        {/* <li className="pb-2"><Link href=" ">Time Management</Link></li> */}
                                        <li className="pb-2"><Link to="#">Remote work</Link></li>
                                        <li className="pb-2"><Link to="#">Team</Link></li>
                                        <li className="pb-2"><Link to="#">Work Culture</Link></li>
                                        <li className="pb-2"><Link to="#">Time Tracking</Link></li>
                                        <li className="pb-2"><Link to="#">Productivity</Link></li>
                                        <li className="pb-2"><Link to="#">Product</Link></li>
                                        <li className="pb-2"><Link to="#">Project</Link></li>
                                        <li className="pb-2"><Link to="#">Management</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-5 col-md-5 ms-lg-5 col-6">
                                <div className="nav-list-bottom">
                                    <h5 className="text-secondary">Tags</h5>
                                    <ul className="list-inline sidebar">
                                        <li className="pb-2" ><Link to="">Managment</Link></li>
                                        <li className="pb-2"><Link to="#">work from home</Link></li>
                                        <li className="pb-2"><Link to="#">work culture</Link></li>
                                        <li className="pb-2"><Link to="#">team building</Link></li>
                                        <li className="pb-2"><Link to="#">deadline</Link></li>
                                        <li className="pb-2"><Link to="#">Workspace</Link></li>
                                        <li className="pb-2"><Link to="#">FreelancerTags - 5</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                        <div className="row">

                            {/* {
                            items.map((elem) =>{
                                const { name, image} = elem;



                                return(

<>   */}



                            <div className="col-md-5 col-12 mx-auto">
                                <div className="card cstm-card shadow border-0 rounded-0 mb-5" >
                                    <img src="https://timestint.s3.amazonaws.com/media/blog/thumbnail/thumbnail_ZwhYeAc.png" className="card-img-top" alt="server issue" />
                                    <div className="card-body cstm-card-body cstm-card-first text-center">
                                        <h5 className="card-title">How to schedule your week like a boss</h5>
                                        <p className="card-text">10-03-2022</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5 col-12 mx-auto">
                                <div className="card cstm-card shadow border-0 rounded-0 mb-5" >
                                    <img src="https://timestint.s3.amazonaws.com/media/blog/thumbnail/thumbnail_3YirRxX.png" className="card-img-top" alt="server issue" />
                                    <div className="card-body cstm-card-body cstm-card-first text-center">
                                        <h5 className="card-title">How to schedule your week like a boss</h5>
                                        <p className="card-text">10-03-2022</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5 col-12 mx-auto">
                                <div className="card cstm-card shadow border-0 rounded-0 mb-5" >
                                    <img src="https://timestint.s3.amazonaws.com/media/blog/thumbnail/thumbnail_V5FEgiL.png" className="card-img-top" alt="..." />
                                    <div className="card-body cstm-card-body cstm-card-first text-center">
                                        <h5 className="card-title">How to schedule your week like a boss</h5>
                                        <p className="card-text">10-03-2022</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5 col-12 mx-auto">
                                <div className="card cstm-card shadow border-0 rounded-0 mb-5" >
                                    <img src="https://timestint.s3.amazonaws.com/media/blog/thumbnail/Thumbnail_4NRM9ux_pUC4era.png" className="card-img-top" alt="..." />
                                    <div className="card-body cstm-card-body cstm-card-first text-center">
                                        <h5 className="card-title">How to schedule your week like a boss</h5>
                                        <p className="card-text">10-03-2022</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5 col-12 mx-auto">
                                <div className="card cstm-card shadow border-0 rounded-0 mb-5" >
                                    <img src="https://timestint.s3.amazonaws.com/media/blog/thumbnail/thumbnail_CRGchHW.png" className="card-img-top" alt="..." />
                                    <div className="card-body cstm-card-body cstm-card-first text-center">
                                        <h5 className="card-title">How to schedule your week like a boss</h5>
                                        <p className="card-text">10-03-2022</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5 col-12 mx-auto">
                                <div className="card cstm-card shadow border-0 rounded-0 mb-5" >
                                    <img src="https://timestint.s3.amazonaws.com/media/blog/thumbnail/Thumbnail_4NRM9ux.png" className="card-img-top" alt="..." />
                                    <div className="card-body cstm-card-body cstm-card-first text-center">
                                        <h5 className="card-title">How to schedule your week like a boss</h5>
                                        <p className="card-text">10-03-2022</p>
                                    </div>

                                </div>
                            </div>

                            {/* </>
                                )

                                
                            })
                        } */}
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link">&laquo;</a>
                                    </li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item">
                                        <a className="page-link" to="#">&raquo;</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>

                </div>
            </div>


        </>

    );

};
// };
// };


export default Common;

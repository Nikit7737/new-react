import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import RingLoader from "react-spinners/RingLoader";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}))




const About = () => {
    const classes = useStyles()
    const { users, isAuthenticated, isLoading } = useAuth0();
    const token = JSON.parse(sessionStorage.getItem('usersData'));

    const headers = { "Authorization": `Bearer ${token}` }
    const [Data, setData] = useState("")
    const [usersData, setUsersData] = useState([{}]);

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false)



    const onInputChange = e => {
        console.log(e.target.value);
        setUser({ ...users, [e.target.name]: e.target.value });

    };

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)


        }, 2000)
        loadUser();
    }, []);

















    const loadUser = async () => {
        await axios({
            method: 'GET',
            url: 'https://testing.timestint.com/tsapi/v1/blog/post/',


            headers: {
                "Content-type": "application/json",
                "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))}`
                //   Authorization: token ? `Bearer ${token}` : "",
            }



            // data: usersData,
        })
            .then(result => {
                setUser(result.data.results)
                console.log(result.data.results)

            })

            .catch(error => console.log(error))
        // history.push("/Home")
    };
    // console.log(`isLoggedIn: ${token}`);






    return (


        <>
            {
                loading ?
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open

                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                    :
                    <div className="container mt-5 ">
                       
                        <div className="row flex-row-reverse">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 border-start">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 col-sm-5 col-md-5 ms-lg-5 col-6">
                                        <div className="nav-list-top mb-5">
                                            <h5 className="text-secondary">Category</h5>
                                            <ul className="list-inline sidebar">






                                                <li className="pb-2"  ><Link to="/Product" >Time Management</Link></li>
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

                                    {
                                        user.map((elem) => {
                                            return (
                                                <Link to={"/Blog/" + elem.slug} id={elem.slug}>
                                                    <div className="col-md-5 col-12 mx-auto">
                                                        <div className="card cstm-card shadow border-0 rounded-0 mb-5" >
                                                            <img src={elem.featured} className="card-img-top" alt="server issue" />
                                                            <div className="card-body cstm-card-body cstm-card-first text-center">
                                                                <h5 className="card-title" >{elem.title}</h5>
                                                                <p className="card-text" >{elem.timestamp}</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </Link>

                                            )
                                        })
                                    }












                                </div>
                            </div>

                        </div>
                    </div>

            }
        </>

    );


};


export default About;


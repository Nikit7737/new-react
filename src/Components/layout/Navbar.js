import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';





const Navbar = () => {

  const [data, setData] = useState([{}]);
  const [users, setUsers] = useState({
    username: "",
    first_name: "",
    email: "",
    cpassword: "",
    password: "",
    last_name: "",
    state: "",
    country: "",

    mobile: "",
    website: "",
  });


  const onInputChange = e => {
    console.log(e.target.value);
    setUsers({ ...users, [e.target.name]: e.target.value });

  };




  useState(() => {
    axios({
      method: 'GET',
      url: 'https://testing.timestint.com/tsapi/v1/users/',

      headers: {
        "Content-type": "application/json",
        "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))}`
        //   Authorization: token ? `Bearer ${token}` : "",
      }

    })
      .then(result => {
        setData(result.data)
        console.log(data)
        // console.log(JSON.parse(usersData));
      })
      .catch(error => console.log(error))
    // const data1 = data['results']
  });

  return (
    <>
      <div className="bgimg ">
        <nav className="navbar navbar-expand-lg bg-light navtop ">
          <div className="container-fluid ">
            <a className="brand  " to="/#"><img className="brand-logo-dark log" src="https://timestint.s3.amazonaws.com/static/images/logo.png" alt="" width="109" height="39" srcSet="https://timestint.s3.amazonaws.com/static/images/logo.png" /></a>
            <Link className="navbar-toggler " to="/#" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </Link>
            <div className="collapse navbar-collapse bg-light togg " id="navbarSupportedContent">
              <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item px-2">
                  <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link active " to="/About">About</Link>
                </li>

                <li className="nav-item px-2">
                  <Link className="nav-link active" to="/Apps">Apps</Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link active" to="/#">Feature</Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link active" to="/#">Pricing</Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link active" to="#">Blog</Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link active" to="/Setting">Setting</Link>
                </li>
              </ul>
              <option type="radio" className="btn-check" name="btnradio"></option>
              <Link className="btn btn-outline-dark mx-4" to={`/users/${users.id}`}><i className="fa fa-eye" aria-hidden="true"></i>View</Link>
              <Link className="w-20 btn btn-lg btn-outline-dark mx-4" type="submit" to={`/users/Edit/${users.id}`}>Update</Link>

            </div>
          </div>


        </nav>
      </div>









    </>


  );
}


export default Navbar;











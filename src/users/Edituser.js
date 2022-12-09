// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useHistory, useParams } from 'react-router-dom';



const EditUser = () => {
  let history = useHistory();
  const [Data, setData] = useState("")
  const [newdata, setNewdata] = useState("")

  const { id } = useParams();
  const [user, setUser] = useState({
    // display: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    mobile: "",
    // phone: "",
    // website: "",
  });

  const { username, email, first_name, last_name, mobile } = user;
  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });

  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    let user = { username, email, first_name, last_name, mobile }
    const usersData = JSON.stringify(user);
    console.log(usersData, 'ok')
    await axios({
      method: 'PATCH',
      url: 'https://testing.timestint.com/tsapi/v1/users/' + JSON.parse(localStorage.getItem('id')) + '/',
      data: usersData,
      headers: {
        "Content-type": "application/json",
        "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
      .then(response => {
        let a = response.data
        setNewdata(a)
        console.log(response.data)

        // console.log(JSON.parse(result.data));


        localStorage.setItem('usersData', JSON.stringify(response));
        // JSON.parse(localStorage.getItem(result))
        // console.log(result.first_name)
      })
      .catch(error => console.log(error))
    // const data2 = newdata['results']
    history.push("/Home");

  };


  const loadUser = async () => {
    await axios({
      method: 'GET',
      url: 'https://testing.timestint.com/tsapi/v1/users/' + JSON.parse(localStorage.getItem('id')), user,


      headers: {
        "Content-type": "application/json",
        "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))}`
      }



    })
      .then(result => {
        setUser(result.data)
        console.log(result.data)


        // localStorage.setItem('usersData', JSON.stringify(result));
        //         // localStorage.setItem('token', JSON.stringify(result.data.token));
        //         localStorage.setItem('id', JSON.stringify(result.data.id));



      })

      .catch(error => console.log(error))
    // history.push("/Home")
  };









  return (
    <div className="container mt-4">
      <div className="w-50 mx-auto shadow p-">
        <h1 className="text-center mb-4">Edit users</h1>
        <form onSubmit={e => onSubmit(e)}>
          {/* <div className="mb-3 mx-4">
          <input
              type="name"
              className="form-control"
              name="name"
              value={user.display}
              placeholder="enter"
              onChange={(e) => onInputChange(e)}
            />
          </div> */}

          <div className="mb-3 mx-4">
            <input
              type="username"
              className="form-control"
              name="username"
              value={user.username}
              placeholder="enter"
              onChange={(e) => onInputChange(e)}
            />


          </div>
          <div className="m-3 ">
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              placeholder="email"
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="mb-3 mx-4">
            <input
              type="first_name"
              className="form-control"
              name="first_name"
              value={user.first_name}
              placeholder="enter"
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="mb-3 mx-4">
            <input
              type="last_name"
              className="form-control"
              name="last_name"
              value={user.last_name}
              placeholder="enter"
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="mb-3 mx-4">
            <input
              type="mobile"
              className="form-control"
              name="mobile"
              value={user.mobile}
              placeholder="enter"
              onChange={(e) => onInputChange(e)}
            />

          </div>



          <div className="checkbox mb-3 ms-4 mx-4 text-center ">
            <label className="text-center">
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <div className="text-center ">
            <Link className="w-10 ms-4 btn btn-lg btn-outline-dark" onClick={e => onSubmit(e)} to="/Home">Update</Link>
            <p className=" mb-4 mt-4 text-muted text-center">© 2017–2022</p>
          </div>
        </form>
      </div>
    </div>


  );
}

export default EditUser;
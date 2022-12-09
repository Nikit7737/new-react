// import React from "react";
import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

 
// import  'babel-polyfill';
import { useHistory } from 'react-router-dom'
// import { useEffect } from "react";



const AddUser = () => {
  const history = useHistory();
  const [data, setData] = useState([{}]);
  const [newdata, setNewdata] = useState([{}]);
  const [users, setUser] = useState({
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
  // const header = {"Access-Control-Allow-Origin": "*"}

  const { country, state, password, cpassword, email, mobile, first_name, last_name, username } = users;
  // console.log(users)
  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...users, [e.target.name]: e.target.value });

  };

  const onSubmit = (e) => {
    e.preventDefault();


    const usersData = JSON.stringify(users);

    axios({
      method: 'POST',
      url: 'https://testing.timestint.com/tsapi/v1/signup/', usersData,
      headers: {
        'Content-Type': 'application/json',
      },
      data: usersData,
    })
      .then(result => {
        console.log(usersData)
        // console.log(JSON.parse(usersData));
      })
      .catch(error => console.log(error))
      history.push("/Home")
  };




  

    
  useState(() => {
    axios({
      method: 'GET',
      url: 'https://testing.timestint.com/tsapi/v1/country/',
    })
      .then(result => {
        setData(result.data['results'])
        // console.log(JSON.parse(usersData));
      })
      .catch(error => console.log(error))
      // const data1 = data['results']
      axios({
        method: 'GET',
        url: 'https://testing.timestint.com/tsapi/v1/state/',
      })
        .then(result => {
          let a=result.data
          setNewdata(a['results'])
          console.log (a)
          // console.log(JSON.parse(usersData));
        })
        .catch(error => console.log(error))
        // const data2 = newdata['results']
    });





   


   




  return (
    <div className="NotFound ">
    <div className="container  w-25 mt-5 text-center bg-light  text-dark">
      <div className="shadow bg-dark mt-3 mb-3">
        <h1 className="pt-4 text-white"><i className="fa fa-user">Sign up</i></h1>
        <form className="mt-5" onSubmit={e => onSubmit(e)}>
        
             
        <div className="m-3  ">
            <select className="h-50  " >
              
              <option >---country---</option>
              <option  value={country} onChange={(e) => onInputChange(e)}>{data[0].name}</option>
              
            </select>
           
        </div>

          <div className="m-3 ">
            
             <select  >
              <option >---state---</option>
              <option value={newdata[0].id} onChange={(e) => onInputChange(e)}>{newdata[0].name}</option>
            </select>
           
          </div>

          <div className="m-3 ">
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={first_name}
              placeholder="first_name"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="m-3 ">
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={last_name}
              placeholder="last_name"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="m-3 ">
            <input
              type="text"
              className="form-control"
              name="mobile"
              value={mobile}
              placeholder="mobile"
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="m-3">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              placeholder="username"
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="m-3">
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="m-3">
            <input
              type="password"
              className="form-control"
              name="cpassword"
              value={cpassword}
              placeholder="cpassword"
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="m-3 ">
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              placeholder="email"
              onChange={(e) => onInputChange(e)}
            />

          </div>



          <div className="checkbox mb-3">
            <label  className="text-white">
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Link  className="w-20 btn btn-lg btn-outline-light" onClick={e => onSubmit(e)} to="/Home">Submit</Link>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
        <p className="text-white">if you have already account</p>
      {/* <form className="d-flex text-center " role="search"> */}
                <Link to="/Login"  className="btn btn-outline-light but mx-4 px-4 mb-4  ">Login</Link>
                {/* <button><a href="" className="btn-get-started">get started</a></button> */}
              {/* </form> */}
      </div>
    </div>
    </div>


  );
}

export default AddUser;







//   axios.get('https://testing.timestint.com/tsapi/v1/country/')
  //     .then(res => setData(res.data['results']))
  //     .catch(err => console.log(err))
  // const country = [...new set(data.map((item) => item.country))]
  // country.sort();

  

    

  // }


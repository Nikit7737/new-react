import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



const Login = () => {
  const history = useHistory();

  const [users, setUser] = useState({

    username: "",

    password: "",

  });
  // const header = {"Access-Control-Allow-Origin": "*"}

  const { password, username, } = users;
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
      url: 'https://testing.timestint.com/tsapi/v1/login/', usersData,
      headers: {
        'Content-Type': 'application/json',
      },
      data: usersData,
    })
      .then(result => {
        console.log(result.data.token)
        history.push("/Home")

        // localStorage.setItem( 'result');
        localStorage.setItem('usersData', JSON.stringify(result));
        localStorage.setItem('token', JSON.stringify(result.data.token));
        localStorage.setItem('id', JSON.stringify(result.data.id));

      })
      .catch(error => alert("please check id and password"))
      // history.push("/ForgetPassword")
  };









  return (
    <div className="NotFound">
      <div className="container w-25 mt-5 text-center bg-light text-light">
        <div className="shadow bg-dark mt-3">
          <h1 className="pt-4"><i className="fa fa-user">Login</i></h1>
          <form className="mt-5" >
            {/* // onSubmit={e => onSubmit(e)}                            */}







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




            <div className="checkbox mb-3">
              <label>
                {/* <input type="checkbox" value="remember-me" /> Remember me */}
              </label>
            </div>
            <Link to="/Home" className="w-20 btn btn-lg btn-outline-light mb-4" onClick={e => onSubmit(e)} type="submit">Login</Link>
          </form>
             <Link className="mt-5 mb-0  text-aqua" to="/ForgetPassword">forget password?</Link>
            <p className="mt-2 mb-3 text-muted">© 2017–2022</p>
        </div>
      </div>
    </div>


  );
}

export default Login

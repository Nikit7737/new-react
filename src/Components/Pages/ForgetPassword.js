import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



const ForgetPassword = () => {
  const history = useHistory();

  const [user, setUser] = useState({

    email: "",

    

  });
  // const header = {"Access-Control-Allow-Origin": "*"}

  const { email } = user;
  // console.log(users)
  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });

  };

  const onSubmit = (e) => {
    e.preventDefault();


    const usersData = JSON.stringify(user);

    axios({
      data: usersData,
      method: 'POST',
      url: "https://testing.timestint.com/tsapi/v1/forgot-password/", usersData,
      headers: {
        "Content-type": "application/json",
        "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))}`
        //   Authorization: token ? `Bearer ${token}` : "",
    }

  })
      .then(result => {
        alert("sent!")
        // history.push("/")

        // localStorage.setItem( 'result');
        // localStorage.setItem('usersData', JSON.stringify(result));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        // localStorage.setItem('id', JSON.stringify(result.data.id));

      })
      .catch(error => alert("please check id"))
      // history.push("/")
  };









  return (
    <div className="NotFound">
      <div className="container w-25 mt-5 text-center bg-light text-light">
        <div className="shadow bg-dark mt-3">
          <h1 className="pt-4"><i className="fa fa-user">Forget Password</i></h1>
          <form className="mt-5" onSubmit={e => onSubmit(e)} >
            {/* // onSubmit={e => onSubmit(e)}                            */}







            <div className="m-3">
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
              <label>
                {/* <input type="checkbox" value="remember-me" /> Remember me */}
              </label>
            </div>
            <Link  className="w-20 btn btn-lg btn-outline-light" onClick={e => onSubmit(e)} type="submit">Next</Link>

            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
          </form>
        </div>
      </div>
    </div>


  );
}

export default ForgetPassword

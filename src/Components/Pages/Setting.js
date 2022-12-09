import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";



const Setting = () => {
  const history = useHistory();
  const params = useParams();

  const [user, setUser] = useState({

    new_password: "",
    old_password: "",
    



  });

  const { new_password, old_password } = user;
  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });

  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const usersData = user;
    const usersData = (user);
    const newData = params;
    // const id= JSON.parse(localStorage.getItem('id'))
    // usersData.token = newData.token
    // usersData.uid = newData.id
    // console.log(newData.id)
    // console.log(newData.token)
    // console.log(uid) 

    axios({


      data: usersData,
      method: 'POST',
      url: "https://testing.timestint.com/tsapi/v1/change-password/", usersData,
      headers: {
        "Content-type": "application/json",
        "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))}`
      },

    })
      .then(result => {
        alert("Password changed successfully.")
        history.push("/login")

        

      })
      .catch(error => alert("please check id"))
    //   history.push("/")
  };








  return (
    <div className="NotFound">
      <div className="container w-25 mt-5 text-center bg-light text-light">
        <div className="shadow bg-dark mt-3">
          <h1 className="pt-4"><i className="fa fa-user">pass</i></h1>
          <form className="mt-5" onSubmit={e => onSubmit(e)} >
            {/* // onSubmit={e => onSubmit(e)}                            */}






            <div className="m-3">
              <input

                type="old_password"
                className="form-control"
                name="old_password"
                value={old_password}
                placeholder="old_password"
                onChange={(e) => onInputChange(e)}

              />

            </div>

            <div className="m-3">
              <input

                type="pasnew_passwordsword"
                className="form-control"
                name="new_password"
                value={new_password}
                placeholder="new_password"
                onChange={(e) => onInputChange(e)}

              />

            </div>






            <div className="checkbox mb-3">
              <label>
                {/* <input type="checkbox" value="remember-me" /> Remember me */}
              </label>
            </div>
            <Link to="/Home" className="w-20 btn btn-lg btn-outline-light" onClick={e => onSubmit(e)} type="submit">Next</Link>

            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
          </form>
        </div>
      </div>
    </div>


  );
}

export default Setting


















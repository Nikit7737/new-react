import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { sanitize } from 'dompurify';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import PacmanLoader from "react-spinners/PacmanLoader";
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




const Blog = () => {
  const classes = useStyles()

  const token = JSON.parse(sessionStorage.getItem('usersData'));

  const headers = { "Authorization": `Bearer ${token}` }
  // const [Data, setData] = useState("")
  const [Data, setData] = useState([{}])
  const [usersData, setUsersData] = useState([{}]);
  const history = useHistory();
  const [user, setUsers] = useState("")
  const [users, setUse] = useState("")
  const [reply, setReply] = useState("")
  const [text, setText] = useState("");
  const [state, setSate] = useState(true);
  const [message, setMessage] = useState("");


  // htmlFor send button

  const { pageId } = useParams()
  const [loading, setLoading] = useState(false)

  const [comment, setUser] = useState({

    content: "",
    name: "",
    email: "",
    mobile: "",
    parent: "",


  });

  const { content, name, email, post, mobile, id, parent } = comment;



  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...comment, [e.target.name]: e.target.value });







    // if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))
    // {
    //   console.log("You are writing valid value!")

    //   return (true)
    // }
    // console.log("You are writing invalid value!")
    //   return (false)


  };

  const handleClick = e => {
    console.log(e);
    comment['parent'] = e
  };







  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)


    }, 2000)
    loadUser();
    loadUser();
  }, []);

  //1. blog post slug
  const loadUser = async () => {
    await axios({
      method: 'GET',
      url: 'https://testing.timestint.com/tsapi/v1/blog/post/' + pageId + "/",


      headers: {
        "Content-type": "application/json",
        "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))}`
      }



      // data: usersData,
    })
      .then(result => {
        setUsers(result.data)
        console.log(result.data)

      })

      .catch(error => console.log(error))
  };

  //  2.comment
  useState(() => {

    axios({
      method: 'GET',
      url: 'https://testing.timestint.com/tsapi/v1/blog/comment/',
    })
      .then(result => {
        setData(result.data.results)
        console.log(result.data.results)


      })
      .catch(error => console.log(error))
  });





  const handleSubmit = (e) => {
    e.preventDefault();
    const usersData = comment;
    usersData.post = user.id;

    usersData.status = 'Active';



    axios({
      method: 'POST',
      url: 'https://testing.timestint.com/tsapi/v1/blog/comment/', comment,
      headers: {
        'Content-Type': 'application/json',
      },
      data: usersData,
    })
      .then(result => {
        usersData.parent = result.data.id;
        setUsersData(result.data)
        console.log(result.data)

      })
      .catch(error => alert(comment.response))
    history.push("/About")


    axios({
      method: 'POST',
      url: 'https://testing.timestint.com/tsapi/v1/blog/comment/', comment,
      headers: {
        'Content-Type': 'application/json',
      },
      data: usersData,
    })
      .then(result => {
        setReply(result.data)
        console.log(result.data)
      })
      .catch(error => console.log(error))
    history.push("/About")
  };


  // const validateEmail = (mail) => {
  //   if (/^[a-zA-Z0-9]+@[A-Za-z]+\.[A-Za-z]+$/.test(mail))
  //    {
  //      return (true)
  //    }
  //      console.log("You are writing invalid email address!")
  //      return (false)
  //  }






  return (
    <>
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 mx-5  ">
        {
          loading ?
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open

            >
              <CircularProgress color="inherit" />
            </Backdrop>
            :
            <div className="row mx-5">
              <h1 className="mt-4">{user.title}</h1>
              <div className="card cstm-card shadow border-0 rounded-0 mb-5 mx-5 ">
                <img src={user.featured} className="card-img-top" alt="server issue" />
                <div className="card-body cstm-card-body  text-center">

                  <div dangerouslySetInnerHTML={{ __html: sanitize(user.content) }} />
                </div>
              </div>
              <div className="shadow h-50 mx-5 my-5">
                <h1 className="text-center">Comments</h1>
                <div className="m-3 ">
                  <input
                    type="name"
                    className="form-control"
                    name="name"
                    value={comment.name}
                    placeholder="name"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="m-3 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={comment.email}
                    placeholder="email"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="m-3 ">
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    value={comment.mobile}
                    placeholder="mobile"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="m-3 ">
                  <input
                    type="text"
                    className="form-control"
                    value={comment.content}
                    name="content"
                    placeholder="content"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>

                <div id="passwordHelpBlock" className="form-text">
                  <Link className="w-20 btn btn-lg btn-outline-primary mx-2 mt-4 mb-2" onClick={e => handleSubmit(e)} type="submit"  >Submit</Link>
                </div>



                {
                  Data.map((elem) => {
                    return (
                      <div className="shadow bg-light w-25">

                        <p className="text-primary mx-2 mt-4">{elem.name}</p>
                        <h2 className="mx-2 mb-4">{elem.content}</h2>

                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => handleClick(elem.id)} data-bs-whatever="@mdo">Reply</button>


                      </div>
                    )
                  })
                }
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>




                      <div className="container mt-3">


                        <form action="/action_page.php" className="was-validated" onSubmit={(e) => handleSubmit(e)}>
                          <div className="mb-3 mt-3">
                            <label htmlFor="uname" className="form-label">Username:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="uname"
                              value={reply.name}
                              placeholder="Enter username"
                              name="name"
                              onChange={(e) => onInputChange(e)}

                              required />
                            {/* <div className="valid-feedback">Valid.</div> */}
                            <div className="invalid-feedback">Username field cannot be blank!.</div>
                          </div>


                          {/* //content// */}

                          <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">content:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="pwd"
                              value={reply.content}

                              placeholder="Enter content"
                              name="content"
                              onChange={(e) => onInputChange(e)}

                              required />
                            {/* <div className="valid-feedback">Valid.</div> */}
                            <div className="invalid-feedback">content field cannot be blank!.</div>
                          </div>

                          {/* //email// */}

                          <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">email:</label>
                            <input
                              type="email"
                              className="form-control"
                              id="pwd"
                              placeholder="Enter email"
                              name="email"
                              value={reply.email}
                              onChange={(e) => onInputChange(e)}
                              required
                            />
                            {/* <div className="valid-feedback">Valid.</div> */}
                            <div className="invalid-feedback">email field cannot be blank!.</div>

                          </div>


                          {/* //mobile// */}
                          <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">mobile:</label>
                            <input type="number"
                              className="form-control"
                              id="pwd"
                              placeholder="Enter number"
                              name="mobile"
                              onChange={(e) => onInputChange(e)}

                              value={reply.mobile}

                              required />
                            {/* <div className="valid-feedback">Valid.</div> */}
                            <div className="invalid-feedback">number field cannot be blank!.</div>
                          </div>
                          <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                            <label className="form-check-label" htmlFor="myCheck">I agree on blabla.</label>
                            {/* <div className="valid-feedback">Valid.</div> */}
                            <div className="invalid-feedback">Check this checkbox to continue.</div>
                          </div>
                          <button type="submit" className="btn btn-primary" onChange={() => handleSubmit(state)} >Submit</button>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
        }
      </div>
    </>

  )
}

export default Blog




// useEffect(() => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       setData(res.data);
//       console.log("Result:", data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);





import React, { useState, useEffect } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Navbar from './Components/layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Setting from './Components/Pages/Setting';
import Apps from "./Components/Pages/Apps";
import Footer from './Components/Pages/Footer';
import Reset from './Components/Pages/Reset';
import ForgetPassword from './Components/Pages/ForgetPassword';
import Contact from './Components/Pages/Contact';
import Profile from './Components/Pages/Profile';
import Blog from './Components/Pages/Blog'
import Adduser from "./users/Adduser"
import Edituser from "./users/Edituser";
import Login from "./users/Login";

// import Auth from './Components/Service/Auth';
import Listing from "./Components/Listing ";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
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


function App() {
  const [loading, setLoading] = useState(false)
  const classes = useStyles()


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)


    }, 2000)
  }, [])


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
          <Router>
            <div className="App">

              <Navbar />
              {/* <Profile/> */}
              {/* <Listing/> */}

              <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/" component={Adduser} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/ForgetPassword" component={ForgetPassword} />
                <Route exact path="/forgot-password/:id/:token" component={Reset} />
                <Route exact path="/Apps" component={Apps} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Setting" component={Setting} />

                <Route exact path="/users/edit/:id" component={Edituser} />
                <Route exact path="/users/:id" component={Profile} />
                <Route path="/Blog/:pageId" component={Blog} />
                {/* <Route component={NotFound} /> */}



                {/* <Route exact path="/" component={Listing} /> */}




              </Switch>
              <Footer />


            </div>
          </Router>
      }
    </>
  );
}

export default App;

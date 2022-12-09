import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



const Profile = () => {

    // const { id } = useParams();
    const { users, isAuthenticated, isLoading } = useAuth0();
    // const token=localStorage.usertoken
    const token = JSON.parse(sessionStorage.getItem('usersData'));
    // const decoded = jwt_decode(token);

    const headers = { "Authorization": `Bearer ${token}` }
    const [Data, setData] = useState("")
    const [usersData, setUsersData] = useState([{}]);

    const [user, setUser] = useState({
        username: "",
        display: "",
        email: "",
        // phone: "",
        // website: "",
    });


    const onInputChange = e => {
        console.log(e.target.value);
        setUser({ ...users, [e.target.name]: e.target.value });

    };

    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {




        await axios({
            method: 'GET',
            url: 'https://testing.timestint.com/tsapi/v1/users/' + JSON.parse(localStorage.getItem('id')),


            headers: {
                "Content-type": "application/json",
                "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))}`
                //   Authorization: token ? `Bearer ${token}` : "",
            }



            // data: usersData,
        })
            .then(result => {
                setData(result.data)
                console.log(Data)



                // localStorage.setItem('usersData', JSON.stringify(result));

                // console.log(JSON.parse(usersData));

            })

            .catch(error => console.log(error))
        // history.push("/Home")
    };
    // console.log(`isLoggedIn: ${token}`);






    return (
        <div className="container py-4">
            <h1 className="display-5 ms-4">USER ID : {Data.id}</h1>
            <hr />
            <ul className="list-roup w-50">
                <li className="list-group-item mb-4">  Display  : {Data.display}</li>
                <li className="list-group-item mb-4">User Name : {Data.username}</li>
                <li className="list-group-item mb-4">Email : {Data.email}</li>
                <li className="list-group-item mb-4">First_Name : {Data.first_name}</li>
                <li className="list-group-item mb-4">Last_Name : {Data.last_name}</li>
                <li className="list-group-item mb-4">Mobile : {Data.mobile}</li>


            </ul>
            <Link className="btn btn-outline-dark ms-4" to="/Home">back to home </Link>

        </div>
    );

};

export default Profile
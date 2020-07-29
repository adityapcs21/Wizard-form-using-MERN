import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    college: "",
    year: "", 
    percentage:"" ,
    companyName: "",
    from: "",
    to: "", 
    designation:"",
    LinkedIn: "",
    GitHub: "",
    Facebook: "", 
    hobbies:""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">firstname: {user.firstname}</li>
        <li className="list-group-item">lastname: {user.lastname}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">address: {user.address}</li>
        <li className="list-group-item">address: {user.address}</li>
        <li className="list-group-item">course: {user.course}</li>
        <li className="list-group-item">college: {user.college}</li>
        <li className="list-group-item">year: {user.year}</li>
        <li className="list-group-item">percentage: {user.percentage}</li>
        <li className="list-group-item">companyName: {user.companyName}</li>
        <li className="list-group-item">from: {user.from}</li>
        <li className="list-group-item">to: {user.to}</li>
        <li className="list-group-item">designation: {user.designation}</li>
        <li className="list-group-item">LinkedIn: {user.LinkedIn}</li>
        <li className="list-group-item">GitHub: {user.GitHub}</li>
        <li className="list-group-item">Facebook: {user.Facebook}</li>
        <li className="list-group-item">hobbies: {user.hobbies}</li>
      </ul>
    </div>
  );
};

export default User;
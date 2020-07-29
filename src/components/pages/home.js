import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TablePagination from '@material-ui/core/TablePagination';



const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };


    
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }



    return (
        <div className="container">
            <div className="py-4">
                <h1>Click on adduser in NavBar(ICON) to add new user </h1>
                
                
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Serial No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.firstname}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                <Button>
                                     <Link class="btn btn-primary" to={`/users/${user.id}`}>{<VisibilityIcon/>}</Link>
                                     
                                    </Button>
                                     
                                    <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>{<DeleteForeverIcon/>}</Link>
                                    
                                </td>
                            </tr>
                            
                        ))
                    }
                    </tbody>
                </table>

                

                <TablePagination rowsPerPageOptions={[5, 50, { value: -1, label: 'All' }]} />

            </div>
        </div>
    );
};



export default Home;


import React, {useEffect, useState} from 'react';
import EditModal from './EditModal';
import {User} from "../model/User";
import {Button, Form, Modal} from "react-bootstrap";

const LOCAL_STORAGE_KEY = 'USER_KEY';

function UserList(props: any) {

    const [show, setShow] = useState(false);
    const [users, setUsers] = useState(props.users);
    const [editUser, setEditUser] = useState([]);


    useEffect(() => {
        const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
    }, [users]);


    const handleClose = () => {
        setShow(false);
    }

    const handleShow = (editUser: any) => {
        setEditUser(editUser)
        setShow(true);
    }

    const deleteUser = (id: number) => {
        setUsers(users.filter((user: any) => user.id !== id))
    }

    return (
        users.map((user: any) => {
            return (
                <>
                    <EditModal show={show} onClose={handleClose} editUser={editUser}/>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.discription}</td>
                        <td>{user.date}</td>
                        <td>
                            <button className="btn btn-info" onClick={() => handleShow(user)}>Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                </>
            )
        })
    );

}

export default UserList;
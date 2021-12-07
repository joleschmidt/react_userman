import React, {useEffect, useState} from 'react';
import EditModal from './EditModal';
import {User} from "../model/User";

const LOCAL_STORAGE_KEY = 'USER_KEY';

function UserList(props: any) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [users, setUsers] = useState(props.users);

    useEffect(() => {
        const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
    }, [users]);


    /*   const removeUser = (e:any, user: any) => {
           setUsers((prevState: any) => ({
               users: prevState.users.filter((d: any) => d !== user)
           }));
           localStorage.removeItem(user);
       };*/

/*    const removePeople = (e: any) => {
        const array = [...users]; // make a separate copy of the array
        const index = array.indexOf(e.target.value)
        if (index !== -1) {
            array.splice(index, 1);
            setUsers({array});
            alert(e.target.value);
        }
    }*/

/*   const removeItem = (index: any) => {
        const list = users;
        list.splice(index, 1);
        setUsers({ list });
    }*/



    const deleteUser = (name: string): void => {
        users = users.filter((item: any) => item !== name);
        setUsers(users);
    }

    return (
        users.map((user: any) => {
            return (
                <>
                    <EditModal show={show} onClose={handleClose}/>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.discription}</td>
                        <td>Datum</td>
                        <td>
                            <button className="btn btn-info" onClick={handleShow}>Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={(e) => deleteUser(user.name)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                </>
            )
        })
    );
}

export default UserList;
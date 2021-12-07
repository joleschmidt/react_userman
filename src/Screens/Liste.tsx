import React, {useEffect, useState} from 'react';
import {Container, Table} from 'react-bootstrap';

// Importing the component
import UserList from '../Components/UserList';
import {User} from '../model/User';
import Hinzufuegen from "./Hinzufuegen";
const LOCAL_STORAGE_KEY = 'USER_KEY';


function Liste(props:{users: User[]}) {

    const [users, setUsers] = useState(props.users);

    useEffect(() => {
        const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    return (
        <div>
            <Container>
                <h3>Liste</h3>
                <div className="m-3">
                </div>
                <Table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Vorname</th>
                        <th>Nachname</th>
                        <th>Beschreibung</th>
                        <th>Erstellungsdatum</th>
                    </tr>
                    </thead>
                    <tbody>
                    <UserList users={users} />
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Liste;
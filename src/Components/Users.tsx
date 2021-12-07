import React, {useState} from 'react';
import EditModal from "./EditModal";

function Users({users}: any) {


    return (
        users.map((user: any) => {
            return (
                <>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>Nachname</td>
                        <td>Beschreibung</td>
                        <td>Datum</td>
                    </tr>
                </>
            )
        })
    );
}

export default Users;
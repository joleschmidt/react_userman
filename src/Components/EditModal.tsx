import React, {useEffect, useState} from 'react';
import {Modal, Table, Button, Form} from 'react-bootstrap';
import UserList from "./UserList";

const LOCAL_STORAGE_KEY = 'USER_KEY';

function EditModal(props: any) {
    const {show, onClose} = props;
    const [users, setUsers] = useState(props.users);

    useEffect(() => {
        const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    return (
        <div>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <h3>Edit</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="fName-input">
                            <label>Vorname</label>
                            <Form.Control
                                name="fName"
                                type="text "
                                placeholder="{users.fName}"
                                style={{margin: '8px 0'}}/>
                        </div>
                        <div className="lName-input">
                            <label>Nachname</label>
                            <Form.Control
                                name="lName"
                                type="text "
                                placeholder="{user.lname}"
                                style={{margin: '8px 0'}}/>
                        </div>
                        <div className="discription-input">
                            <label>Beschreibung</label>
                            <Form.Control
                                name="discription"
                                type="text"
                                placeholder="{user.discription}"
                                style={{margin: '8px 0'}}/>
                        </div>
                    </Form>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                    <Button className="m-3" variant="primary">Save changes</Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditModal;
import React, {useEffect, useRef, useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const LOCAL_STORAGE_KEY = 'USER_KEY';

function EditModal(props: any) {
    const {show, onClose} = props;
    const [users, setUsers] = useState([]);
    const {editUser} = props;

    const fNameRef = useRef<HTMLInputElement>(null);
    const lNameRef = useRef<HTMLInputElement>(null);
    const discRef = useRef<HTMLInputElement>(null);

/*    useEffect(() => {
        const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);
*/
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
    }, [users]);

/*    const handleEditUser = () => {
        const fName = fNameRef.current!.value;
        const lName = lNameRef.current!.value;
        const disc = discRef.current!.value;
        const id = editUser.id;


        if (fName === '' || lName === '' || disc === '') {
            alert('...!');

        } else {
            alert(fName + ' wurde geändert!');
            console.log(fName, lName, disc);
            setUsers(
                users.map((editUser: any) =>
                    editUser.id === users.id
                        ? {...editUser, someProp : "changed"}
                        : editUser
                ))
            onClose()
        }
    }*/

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
                                ref={fNameRef}
                                type="text "
                                placeholder={editUser.fname}
                                onChange={(e) => {
                                    editUser.fname = e.target.value
                                    setUsers([...users])
                                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
                                }}
                                style={{margin: '8px 0'}}/>
                        </div>
                        <div className="lName-input">
                            <label>Nachname</label>
                            <Form.Control
                                name="lName"
                                ref={lNameRef}
                                type="text "
                                placeholder={editUser.lname}
                                onChange={(e) => {
                                    editUser.lname = e.target.value
                                    setUsers([...users])
                                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
                                }}
                                style={{margin: '8px 0'}}/>
                        </div>
                        <div className="discription-input">
                            <label>Beschreibung</label>
                            <Form.Control
                                name="discription"
                                ref={discRef}
                                type="text"
                                placeholder={editUser.discription}
                                onChange={(e) => {
                                    editUser.discription = e.target.value
                                    setUsers([...users])
                                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
                                }}
                                style={{margin: '8px 0'}}/>
                        </div>
                    </Form>
{/*
                    <Button variant="secondary" onClick={onClose}>Close</Button>
*/}
                    <Button variant="primary" onClick={onClose}>Save changes</Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditModal;
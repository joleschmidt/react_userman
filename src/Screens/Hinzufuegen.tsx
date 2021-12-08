import React, {useState, useRef, useEffect} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {User} from "../model/User";

const LOCAL_STORAGE_KEY = 'USER_KEY';

function Hinzufuegen(props: {users: User[]}) {
    const fNameRef = useRef<HTMLInputElement>(null);
    const lNameRef = useRef<HTMLInputElement>(null);
    const discRef = useRef<HTMLInputElement>(null);

    const [users, setUsers] = useState(props.users);

    useEffect(() => {
        const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
    }, [users]);

    const handleAddUser = () => {
        const fName = fNameRef.current!.value;
        const lName = lNameRef.current!.value;
        const disc = discRef.current!.value;
        const id = users.length + 1;

        if (fName === '' || lName === '' || disc === '') {
            alert('Bitte alle Felder ausfüllen!');

        } else {
            setUsers([...users, new User( id, fName, lName, disc)]);
            alert(fName + ' wurde hinzugefügt!');
            console.log(fName, lName, disc);
            fNameRef.current!.value = '';
            lNameRef.current!.value = '';
            discRef.current!.value = '';
        }
    }


    return (
        <div>
            <Container>
                <h3>Hinzufügen</h3>
                <Form>
                    <div className="fName-input">
                        <label>Vorname</label>
                        <Form.Control
                            name="fName"
                            ref={fNameRef}
                            type="text "
                            placeholder="Vorname"
                            onSubmit={handleAddUser}
                            style={{margin: '8px 0'}}/>
                    </div>
                    <div className="lName-input">
                        <label>Nachname</label>
                        <Form.Control
                            name="lName"
                            ref={lNameRef}
                            type="text "
                            placeholder="Nachname"
                            onSubmit={handleAddUser}
                            style={{margin: '8px 0'}}/>
                    </div>
                    <div className="discription-input">
                        <label>Beschreibung</label>
                        <Form.Control
                            name="discription"
                            ref={discRef}
                            type="text"
                            placeholder="Beschreibung"
                            style={{margin: '8px 0'}}/>
                    </div>
                    <Button onClick={handleAddUser} >
                        Erstellen
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Hinzufuegen;
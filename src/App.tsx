import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';

import Liste from './Screens/Liste'
import Hinzufuegen from "./Screens/Hinzufuegen";
import NavBar from "./Components/NavBar";

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Liste users={[]}/>}/>
                <Route path="/liste" element={<Liste users={[]}/>}/>
                <Route path="/hinzufuegen" element={<Hinzufuegen users={[]}/>}/>
            </Routes>
        </Router>
    );
}

export default App;

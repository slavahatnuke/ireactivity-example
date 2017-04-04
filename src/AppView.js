import React from 'react';
import './App.css';

let uid = () => Math.random().toString(35).slice(2, 30);

export default ({user, onClickSync, onClickAsync}) =>
    <div className="App">
        <div className="header">
            <h2>{user.name} {user.id}</h2>
        </div>
        <p className="actions">
            <button onClick={onClickSync}>Sync</button>
            <button onClick={() => onClickAsync(uid()) }>Async</button>
        </p>
    </div>


import React from 'react';
import './App.css';
import Tasks from './components/Tasks';

// TODO: Please implement this component.
function App() {
    return (
        <div className='App' id="app">
            <h2 data-testid="task-list-heading">Task List</h2>
            
            <div className="container" data-testid="container-app">
                <Tasks />
            </div>
        </div>
    );
}

export default App;

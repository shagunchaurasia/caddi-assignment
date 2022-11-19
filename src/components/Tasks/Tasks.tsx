import React from 'react';
import Task from './../Task';
import './Tasks.css';
import {TaskInterface} from './../../types/Task';


export const Tasks = () => {

    const [tasks, setTasks] = React.useState<TaskInterface[]>([]);
    const [toDoInput, setToDoInput] = React.useState("");
    

    const submitHandler = (e: React.SyntheticEvent ) => {
        e.preventDefault();
        
        if (toDoInput) {
            setTasks([...tasks, { id: new Date().getTime().toString(), taskDetail: toDoInput, status: false, index:  tasks.length,removeTask:removeTask }])
            setToDoInput("");
        }
        else{
            alert("Please enter a value")
        }
    }

    const removeTask = (id: string) => {
        console.log("Id to Delete", id);
        let newTasks = tasks.filter((task)=> task.id!== id );
        setTasks(newTasks);
     }


    return (
    <React.Fragment>
    {tasks.length===0 ? <h4 data-testid='add-items-heading'>Add Item(s) to the List</h4>: <ol className="ol" data-test-id="task-list">
            {tasks.map((task,index) => {
                return <Task {...task} key={task.id} removeTask={removeTask} index={index} />
            })}
        </ol>}
        
        <form onSubmit={submitHandler} className="formWrapper">
            <input id='todo-input' data-testid="todo-input" name='todo-input' value={toDoInput} className="formInput" onChange={(e) => { setToDoInput(e.target.value) }}></input>
            <button id='add-button' data-testid="add-button" type="submit" className="formInput">Add</button>
        </form>
    </React.Fragment>
)

}


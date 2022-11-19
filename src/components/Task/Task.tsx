import React from 'react';
import './Task.css';
import {TaskInterface} from './../../types/Task';


export const Task = (props: TaskInterface) => {
      return (
        <div className="task" data-testid="to-do-item">
            <li id={`todo-item-${props.index+1}`} className="taskDetail" data-testid={`todo-item-${props.index+1}`}>{props.taskDetail}</li>
            <button id={`complete-button-${props.index+1}`} data-testid={`complete-button-${props.index+1}`} className="done" onClick={() => props.removeTask(props.id)}>DONE</button>
        </div>
    )
}


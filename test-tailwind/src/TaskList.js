import React, { component, useState } from 'react';
import { EXEMPLE_TASK } from './data';

export function TaskList(props) {

    const [task, setTask] = useState([])

    // const taskCompoents = () => {
    //     <Task
    //         id={props.task.id}
    //         title={props.task.title}
    //         date={props.task.date}
    //         description={props.task.description}

    //     />

    // }

    // const createTask = () => {

    //     setTask
    // }

    return ( <
        div className = 'taskList' >
        <
        p > Liste des taches < /p>


        { /* {taskComponents} */ }



        <
        /div>


    );
}
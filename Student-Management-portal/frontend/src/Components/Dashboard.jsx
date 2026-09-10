import { Navbar } from './Navbar.jsx'
import { Tasklist } from './Tasklist.jsx'
import { Welcome } from './Welcome.jsx'
import { Statcard } from './Statcard.jsx'
import { Addtask } from './Addtask.jsx'
import { useState } from 'react'


export function Dashboard() {


    const [tasks, setTasks] = useState([
        { tasktitle: 'HTML & CSS', taskdesc: 'Building Responsive Layouts', taskstatus: 'Completed' },
        { tasktitle: 'LearnReact', taskdesc: 'Understanding Components', taskstatus: 'In-Progress' },
        { tasktitle: 'Node & Express', taskdesc: 'Building REST APIs Efficiently', taskstatus: 'Pending' }
    ]);

    function ToggleTask(index) {
        setTasks(tasks.map((task, i) => {
            if (i == index) {
                return {
                    ...task,
                    taskstatus: task.taskstatus === "Completed" ? "Pending" : "Completed"
                };
            }
            return task;
        }));
    }

    function handleAddtask(newtask) {
        setTasks([...tasks, newtask])
    }

    let tasksmap = tasks.map((task, index) => {
        return <Tasklist key={index} tasktitle={task.tasktitle} taskdesc={task.taskdesc} taskstatus={task.taskstatus} onToggle={() => ToggleTask(index)} />
    })

    return (
        <>
            <Navbar />
            <Welcome />

            <div className="stat-container">
                <Statcard title={'Total Tasks'} value={20} />
                <Statcard title={'Pending Tasks'} value={15} />
                <Statcard title={'Completed Tasks'} value={5} />
            </div>
            <div className="task-container">
                {tasksmap}
            </div>
            <div className="add-task-container">
                <Addtask onAddtask={handleAddtask} />
            </div>
        </>
    )
}


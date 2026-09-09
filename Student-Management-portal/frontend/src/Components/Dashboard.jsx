import { Navbar } from './Navbar.jsx'
import { Tasklist } from './Tasklist.jsx'
import { Welcome } from './Welcome.jsx'
import { Statcard } from './Statcard.jsx'


export function Dashboard() {

    const tasks = [
        { tasktitle: 'HTML & CSS', taskdesc: 'Building Responsive Layouts', taskstatus: 'Completed' },
        { tasktitle: 'LearnReact', taskdesc: 'Understanding Components', taskstatus: 'In-Progress' },
        { tasktitle: 'Node & Express', taskdesc: 'Building REST APIs', taskstatus: 'Pending' }
    ];

    let tasksmap = tasks.map((task, index) => {
        return <Tasklist key={index} tasktitle={task.tasktitle} taskdesc={task.taskdesc} taskstatus={task.taskstatus} />
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
        </>
    )
}


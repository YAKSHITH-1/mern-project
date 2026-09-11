export function Tasklist(props) {
    return (
        <div className="task-card">
            <h2>Task list</h2>
            <h3>{props.tasktitle}</h3>
            <p>{props.taskdesc}</p>
            <p>Status: {props.taskstatus}</p>
            <button onClick={props.onToggle}>Change Status</button>
            <button onClick={props.onDelete}>Delete Task</button>
        </div>
    );
}


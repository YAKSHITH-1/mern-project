export function Tasklist({ tasktitle, taskdesc, taskstatus }) {
    return (
        <div className="task-card">
            <h2>Task list</h2>
            <h3>{tasktitle}</h3>
            <p>{taskdesc}</p>
            <p>Status: {taskstatus}</p>
        </div>
    );
}


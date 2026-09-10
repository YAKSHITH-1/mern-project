import { useState } from "react"
import { Tasklist } from "./Tasklist";

export function Addtask(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    function handlesubmit(e) {
        e.preventDefault();
        const newtask = {
            id: Date.now(),
            tasktitle: title,
            taskdesc: desc,
            taskstatus: "Pending"
        }
        props.onAddtask(newtask);
        settitle("");
        setdesc("");
    }

    return (
        <>
            <h2>Add Task</h2>
            <div>
                <br /><br />
                <input type="text" placeholder="Task Title" value={title} onChange={(e) => settitle(e.target.value)} />
                <br /><br />
                <input type="text" placeholder="Task Description" value={desc} onChange={(e) => setdesc(e.target.value)} />
                <br /><br />
                <button onClick={handlesubmit}>Add Task</button>
            </div>
        </>
    )
}
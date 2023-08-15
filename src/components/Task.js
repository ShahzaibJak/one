export function Task(props) {
    const task = props.task;
    return (
        <li style={{color:"black"}} key={props.key} className={task.isCompleted ? 'completed' : 'pending'}>
            <h1>{task.title}</h1>
            <button id={props.key} onClick={() => props.completeTask(task.id)}>Complete</button>
            <button id={props.key} onClick={() => props.deleteTask(task.id)}>X</button>
        </li>
    );
}
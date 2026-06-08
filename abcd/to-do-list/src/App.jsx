import { useState } from "react";

function App() {
    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);

    function handleInputChange() {
        setTaskName(event.target.value);
    }

    function addTask() {
        if (taskName.trim() !== ""){
            setTasks(t => [...t, taskName]);
            setTaskName("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);

        setTasks(updatedTasks);
    }

    function moveUpTask(index){
        const updatedTasks = [...tasks];
        if (index !== 0){
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
        }
        setTasks(updatedTasks);
    }

    function moveDownTask(index){
        const updatedTasks = [...tasks];
        if (index !== updatedTasks.length-1){
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
        }
        setTasks(updatedTasks);
    }

    return(
        <div className="container">
            <h2>To Do List</h2>
            <div className="add-task">
                <input
                    type="text"
                    value={taskName}
                    placeholder="Enter the Task"
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>ADD</button>
            </div>
            <div className="tasks-list">
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="move-button" onClick={() => moveUpTask(index)}>⬆️</button>
                            <button className="move-button" onClick={() => moveDownTask(index)}>⬇️</button>
                        </li>)}
                </ol>
            </div>
        </div>
    );
}

export default App

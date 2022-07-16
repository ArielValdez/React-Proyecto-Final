import React, {useState} from "react";
import uuid from "uuid";

function TodoFrom({addTodo}){
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if (todo.task.trime()) {
            addTodo({...todo, id: uuid.v4()}); //required "uuid" package, on terminal, type yarn add uuid or npm install uuid
            // reset task input
            setTodo({...todo, task: ""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type="submit">
                submit
            </button>
        </form>
    );
}

export default TodoForm;
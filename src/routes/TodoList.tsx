import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import CreateTodo from "../components/CreateToDo";
import {Categories, categoryState, toDoSelector} from "../atoms";
import ToDo from "../components/Todo";


function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState)

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateTodo/>
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
        </div>
    );
}

export default ToDoList;
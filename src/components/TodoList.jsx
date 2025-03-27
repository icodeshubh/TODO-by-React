import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todoSlice";

export default function TodoList() {
  const { todos, filter, status } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos)

  if (status === "loading") return <p>Loading...</p>;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  console.log(filteredTodos)

  return (
    <ul className="w-72">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center p-3 my-2 border rounded shadow ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className="cursor-pointer"
          >
            {todo.title}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-500">
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

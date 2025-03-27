import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./features/todoSlice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">📝 To-Do App</h1>
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

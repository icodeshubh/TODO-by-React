import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="w- full flex gap-3 mb-5">
      <input
        type="text"
        className="border  p-2 w-full rounded shadow-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button
        onClick={handleAddTodo}
        className="bg-amber-300 text-white px-4 py-2 rounded shadow"
      >
        Add
      </button>
    </div>
  );
}

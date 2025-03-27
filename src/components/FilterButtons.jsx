import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todoSlice";

export default function FilterButtons() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  return (
    <div className="flex gap-2 mb-5">
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          className={`px-4 py-2 rounded shadow ${
            filter === f ? "bg-amber-300 text-white" : "bg-gray-200"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

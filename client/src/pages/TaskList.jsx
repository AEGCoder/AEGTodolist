import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";
import { getAll } from "../services/todos/todo";

const TaskList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      setTodos(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);



  return (
    <div className="w-full min-h-screen bg-gray-800">
      <Header />
      <div className="flex items-start px-2 justify-center mt-5">
        <ul className="w-[95%] text-white py-5">
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;

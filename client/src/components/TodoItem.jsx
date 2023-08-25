import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../services/todos/todo";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    const updatedData = {};
    if (updatedTitle !== todo.title) {
      updatedData.title = updatedTitle;
    }
    if (updatedDescription !== todo.description) {
      updatedData.description = updatedDescription;
    }

    if (Object.keys(updatedData).length === 0) {
      setIsEditing(false);
      return;
    }

    updateTodo(todo._id, updatedData)
      .then((updatedTodo) => {
        setTodos((prevTodos) =>
          prevTodos.map((item) =>
            item._id === updatedTodo._id ? updatedTodo : item
          )
        );
        setIsEditing(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (id) => {
    deleteTodo(id)
      .then(() => {
        setTodos(todos.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="rounded-lg w-full flex sm:flex-row flex-col sm:gap-y-0 gap-y-3   justify-between items-center gap-x-5 mt-10  shadow-md shadow-gray-700 p-3">
      <div className="sm:max-w-[20%] w-full flex flex-col items-center  px-1 py-2 uppercase ">
       <div className=" flex flex-col gap-y-5">
       <span
          className={`text-sm font-bold  uppercase ${
            isEditing ? "text-black" : "text-orange-400"
          }`}
        >
          {isEditing ? (
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="bg-transparent border-b border-gray-500 focus:border-black focus:ring-0 text-white capitalize"
            />
          ) : (
            <span onClick={() => isEditing && handleEditClick()}>{todo.title}</span>
          )}
        </span>
        <div>
          {
            <span className="text-sm">
              {todo.createdAt.slice(0, 10)} {todo.createdAt.slice(11, 16)}
            </span>
          }
        </div>
       </div>
      </div>
      
      <div className="flex flex-col sm:max-w-[60%] break-words w-full"> {/* Flex container */}
    <input
      type="text"
      value={updatedDescription}
      onChange={(e) => setUpdatedDescription(e.target.value)}
      className={`bg-transparent border-b border-gray-500 focus:border-black focus:ring-0 text-white capitalize ${
        isEditing ? "" : "hidden"
      }`}
      style={{
        width: isEditing ? "100%" : "auto",
        minWidth: "100px",
      }}
      readOnly={!isEditing}
      onClick={(e) => isEditing && e.stopPropagation()}
    />
    {!isEditing && (
      <span
        className={`capitalize tracking-wider ${
          isEditing ? "text-black" : "text-white"
        } cursor-pointer`}
      >
        {todo.description}
      </span>
    )}
  </div>

      <div className="flex items-center max-w-[20%] justify-end gap-x-3">
        {isEditing ? (
          <button
            onClick={handleUpdateClick}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            Update
          </button>
        ) : (
          <>
            <button
              onClick={() => handleClick(todo._id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              <AiFillDelete className="text-white text-2xl cursor-pointer" />
            </button>
            <button
              onClick={handleEditClick}
              className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
            >
              <AiFillEdit className="text-white text-2xl cursor-pointer" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;

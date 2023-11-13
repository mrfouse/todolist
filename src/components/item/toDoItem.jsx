import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi"
import { BsArrowRepeat } from "react-icons/bs"
import cn from "classnames";
import Check from "./Check"

// создаем таск элемент
const ToDoItem = ({ todo, changeTodo, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

//   создаем кнопку для редактирования таска
  const handleEditClick = () => {
    setIsEditing(true);
  };

//   создаем кнопку для сохранения таска
  const handleSaveClick = () => {
    editTodo(todo._id, newTitle);
    setIsEditing(false);
  };

//   выводим все красиво
  return (
    <div className="flex items-center justify-between mb-3 rounded-3xl bg-gray-800 p-5 w-full cursor-pointer">
        
        {/* изменение состояния по клику кнопка */}
      <button onClick={() => changeTodo(todo._id)} className="flex items-center">
      <Check isCompleted={todo.isCompleted} />
        <span className={cn({ 'line-through': todo.isCompleted })}>
          {isEditing ? (
            <input
              type="text"
              size={138}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="bg-gray-700"
              autoFocus
            />
          ) : (
            todo.title    /* сам текст таска */
          )}
        </span>
      </button>
      
      {/* кнопка сохранения изменений в таске */}
      <div>
        {isEditing ? (
          <button onClick={handleSaveClick}>
            <BsArrowRepeat 
            size={24}
            className="text-slate-900 hover:text-pink-400 transition-colors ease-in-out duration-200 mr-3"
            />
          </button>
        ) : (
          <>
            <button onClick={handleEditClick}>  {/* кнопка изменения текста таска */}
              <BiSolidPencil
              size={24}
              className="text-slate-900 hover:text-pink-400 transition-colors ease-in-out duration-200 mr-3"
              />
            </button>
            
            {/* кнопка удаления таска */}
            <button onClick={() => removeTodo(todo._id)}>
              <BsFillTrashFill
                size={24}
                className="text-slate-900 hover:text-rose-700 transition-colors ease-in-out duration-200"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;

import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./components/item/toDoItem";
import CreateTodoField from "./taskForm/CreateTodoField";

// массив с тасками
const data = [
  {
    _id: Date.now(),
    title: "kms",
    isCompleted: false,
  },
];

// константа которая все выводит на сайт
const Home = () => {
  const [todos, setTodos] = useState(data);

  // изменение состояния таска для чекера
  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  // удаление таска
  const removeTodo = (id) => setTodos([...todos].filter((t) => t._id !== id));

  // редактирование таска
  const editTodo = (id, newTitle) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.title = newTitle;
    setTodos(copy);
  };

  // вывод всего
  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">
        Todo list for today :3
      </h1>
      {todos.map((todo) => (
        // вывод элемента смешнявок
        <ToDoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
      {/* таск инпут момент */}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;

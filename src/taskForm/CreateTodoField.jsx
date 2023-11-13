import React, { useState } from 'react'

// создаем таск инпут момент
const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    // создаем таск
    const addTodo = (title) => {
        setTodos(prev => [
          {
            _id: Date.now(),
            title,
            isCompleted: false
          },
          ...prev,
      ])
      setTitle('')
      }

      // выводим его красивым
  return (
    <div className='flex items-center justify-between mb-3 rounded-3xl border-gray-800 border-2 px-5 py-3 w-full mt-20 cursor-pointer'>
        <input 
        type="text" 
        onChange={e => setTitle(e.target.value)} 
        value={title}
        onKeyDown={e => e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder='Add your task :333' />
    </div>
  )
}

export default CreateTodoField
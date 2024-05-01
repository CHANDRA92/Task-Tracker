import React, { useState } from 'react';

const Test = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (taskData.task_title.trim() !== '' && taskData.task_description.trim() !== '' && taskData.dateTime.trim() !== '') {
      setTasks([...tasks, taskData]);
      setTaskData({
        task_title: "",
        task_description: "",
        dateTime: ""
      });
    }
  };
  
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add Task..."
          className="flex-grow border rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="border-t py-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;

import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, IconButton, Menu, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Calendar from '../pages/Calendar';

function Main(props) {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({
    task_title: "",
    task_description: "",
    dateTime: "",
    completed: false
  });
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleAddTaskClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setTaskData({
      task_title: "",
      task_description: "",
      dateTime: "",
      completed: false
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, taskData]);
    handleFormClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleFilterOpen = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    handleFilterClose();
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <div className="bg-card text-card-foreground">
        <div className="flex items-center justify-between mx-10 my-5">
          <h2 className="text-2xl font-semibold">Project Tasks</h2>
          <div className="flex items-center gap-4">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
              data-id="42"
              type="button"
              id="radix-:R36lafnnja:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              onClick={handleFilterOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
                data-id="43"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              Filter
            </button>
            <Menu
              id="filter-menu"
              anchorEl={filterAnchorEl}
              open={Boolean(filterAnchorEl)}
              onClose={handleFilterClose}
            >
              <MenuItem onClick={() => handleFilterChange('all')}>All Tasks</MenuItem>
              <MenuItem onClick={() => handleFilterChange('completed')}>Completed</MenuItem>
              <MenuItem onClick={() => handleFilterChange('incomplete')}>Incomplete</MenuItem>
            </Menu>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
              onClick={handleAddTaskClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add Task
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
        {filteredTasks.length === 0 ? (
            <div>
                <h1 className="mx-10 my-5 text-center text-red-500 font-bold text-xl">No task found!</h1>
                <h1 className="mx-10 my-5 text-center font-bold text-xl">Please add task</h1>
            </div>
        ) : (
          filteredTasks.map((task, index) => (
            <div key={index} className="p-6 flex items-center justify-between rounded-2xl shadow-xl bg-gray-100 mx-5 gap-3">
              <FormGroup>
                <div className="flex items-center gap-4">
                  <FormControlLabel
                    control={<Checkbox checked={task.completed} onChange={() => handleCheckboxChange(index)} />}
                    label={
                      <div>
                        <h3 className="text-lg font-semibold">{task.task_title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {task.task_description}
                        </p>
                      </div>
                    }
                  />
                </div>
              </FormGroup>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {task.dateTime}
                </span>
                <IconButton onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <form className="min-w-52 md:min-w-96" onSubmit={handleFormSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="task_title"
                  value={taskData.task_title}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="task_title"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Task Title
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  id="task_description"
                  name="task_description"
                  value={taskData.task_description}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  rows="4"
                ></textarea>
                <label
                  htmlFor="task_description"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Task Description
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="datetime-local"
                  id="dateTime"
                  name="dateTime"
                  value={taskData.dateTime}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                  htmlFor="dateTime"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Date & Time
                </label>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={handleFormClose}>
                  Cancel
                </button>
                <button type="submit" className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-800 border border-transparent rounded-md shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
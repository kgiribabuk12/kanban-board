import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';

const NewTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addTask({ id: Date.now().toString(), title, description, stage: 'To Do' }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="new-task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default NewTaskForm;

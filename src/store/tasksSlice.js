import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  searchQuery: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStage: (state, action) => {
      const { taskId, newStage } = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.stage = newStage;
      }
    },
    updateTask: (state, action) => {
      const { taskId, newTitle, newDescription } = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.title = newTitle;
        task.description = newDescription;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, updateTaskStage, updateTask, setSearchQuery } = tasksSlice.actions;
export default tasksSlice.reducer;

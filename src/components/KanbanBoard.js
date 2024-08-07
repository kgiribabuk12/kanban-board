import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import SearchBar from './SearchBar';
import NewTaskForm from './NewTaskForm';
import { updateTaskStage } from '../store/tasksSlice';

const KanbanBoard = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const searchQuery = useSelector(state => state.tasks.searchQuery);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (destination.droppableId !== source.droppableId) {
      dispatch(updateTaskStage({
        taskId: draggableId,
        newStage: destination.droppableId
      }));
    }
  };

  const filterTasks = (tasks, query) => {
    return tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredTasks = filterTasks(tasks, searchQuery);

  return (
    <div>
      <SearchBar />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {['To Do', 'In Progress', 'Peer Review', 'Done'].map(stage => (
            <Column key={stage} stage={stage} tasks={filteredTasks.filter(task => task.stage === stage)} />
          ))}
        </div>
      </DragDropContext>
      <NewTaskForm />
    </div>
  );
};

export default KanbanBoard;

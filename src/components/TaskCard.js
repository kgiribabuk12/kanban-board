import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-card"
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

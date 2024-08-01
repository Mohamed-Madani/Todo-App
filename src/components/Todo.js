import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      {/* Affiche la tâche et applique la classe 'completed' si la tâche est marquée comme terminée */}
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>
        {task.task}
      </p>
      <div className="todo-checkbox">
        {/* Icône pour éditer la tâche */}
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        {/* Icône pour supprimer la tâche */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

// Cette ligne ne fait rien ici, tu peux la supprimer.
// uuidv4(); 

export const TodoWrapper = () => {
  // État pour stocker la liste des tâches
  const [todos, setTodos] = useState([]);

  // Fonction pour ajouter une nouvelle tâche à la liste
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  };

  // Fonction pour marquer une tâche comme complétée ou non
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Fonction pour basculer l'état d'édition d'une tâche
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Fonction pour modifier une tâche existante
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      {/* Formulaire pour ajouter une nouvelle tâche */}
      <TodoForm addTodo={addTodo} />
      
      {/* Affichage de la liste des tâches */}
      {todos.map((todo, index) =>
        todo.isEditing ? (
          // Formulaire pour éditer une tâche existante
          <EditTodoForm key={index} editTodo={editTask} task={todo} />
        ) : (
          // Affichage d'une tâche individuelle
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo} // Remarque : ici la clé doit être "editTodo" et non "EditTodo"
          />
        )
      )}
    </div>
  );
};

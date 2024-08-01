import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    // Initialisation de l'état avec la tâche actuelle
    const [value, setValue] = useState(task.task);

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Appel de la fonction pour modifier la tâche avec la nouvelle valeur
        editTodo(value, task.id);

        // Réinitialisation du champ de texte après soumission
        setValue('');
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            {/* Champ de texte pour modifier la tâche */}
            <input
                type="text"
                value={value}
                className="todo-input"
                placeholder="Update a todo"
                onChange={(e) => setValue(e.target.value)} // Déplace onChange ici pour capturer la saisie de l'utilisateur
            />
            {/* Bouton pour soumettre la modification */}
            <button type="submit" className="todo-btn">
                Update Task
            </button>
        </form>
    );
};

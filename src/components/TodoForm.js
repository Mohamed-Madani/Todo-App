import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    // État pour gérer la valeur de la nouvelle tâche
    const [value, setValue] = useState('');

    // Gestionnaire de soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Appel de la fonction addTodo avec la nouvelle tâche
        addTodo(value);

        // Réinitialisation du champ de texte après soumission
        setValue('');
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            {/* Champ de texte pour saisir une nouvelle tâche */}
            <input
                type="text"
                value={value}
                className="todo-input"
                placeholder="Add a todo"
                onChange={(e) => setValue(e.target.value)} // Déplace onChange ici pour capturer la saisie de l'utilisateur
            />
            {/* Bouton pour soumettre la nouvelle tâche */}
            <button type="submit" className="todo-btn">
                Add Task
            </button>
        </form>
    );
};

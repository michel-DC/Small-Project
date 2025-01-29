document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const overlay = document.getElementById('overlay');
    const taskDetail = document.querySelector('.task-detail');
    const closeButton = document.querySelector('.close-btn');
    const clearAllButton = document.getElementById('clear-all');

    // S'assurer que l'overlay est bien caché au démarrage
    overlay.style.display = 'none';

    addButton.addEventListener('click', function () {
        const taskText = todoInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `<span>${taskText}</span> <button class="delete-btn">✖</button>`;
            
            todoList.appendChild(li);
            todoInput.value = '';

            li.querySelector('span').addEventListener('click', function () {
                taskDetail.textContent = taskText; // Mettre à jour les détails de la tâche
                overlay.style.display = 'flex'; // Afficher l'overlay
            });

            li.querySelector('.delete-btn').addEventListener('click', function () {
                todoList.removeChild(li);
            });
        }
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none'; // Cacher l'overlay
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.style.display = 'none'; // Cacher l'overlay en cliquant en dehors
        }
    });

    clearAllButton.addEventListener('click', function () {
        todoList.innerHTML = ''; // Supprimer toutes les tâches
    });
});

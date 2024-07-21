document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const statusInput = document.getElementById('status-input');
    const categoryInput = document.getElementById('category-input');
    const addTaskButton = document.getElementById('add-task-button');
    const tasksList = document.getElementById('tasks-list');
    const todoContainer = document.getElementById('todo-container');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTaskToDOM(task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'todo-item';
        taskElement.innerHTML = `
            <span>${task.name}</span>
            <span class="status">${task.status}</span>
            <span class="category">${task.category}</span>
        `;
        tasksList.appendChild(taskElement);
    }

    addTaskButton.addEventListener('click', function () {
        const taskName = taskInput.value.trim();
        const taskStatus = statusInput.value;
        const taskCategory = categoryInput.value.trim();
        
        if (taskName === '' || taskCategory === '') {
            alert('Please enter both task name and category');
            return;
        }

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const existingCategory = tasks.find(task => task.category === taskCategory);
        if (existingCategory) {
            alert('Category already exists. Please choose a different category.');
            return;
        }

        const task = {
            name: taskName,
            status: taskStatus,
            category: taskCategory
        };

        tasks.push(task);
        saveTasks(tasks);
        addTaskToDOM(task);

        taskInput.value = '';
        categoryInput.value = '';
    });

    loadTasks();
});

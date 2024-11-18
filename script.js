document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const taskText = input.value.trim();
      if (taskText) {
        const task = document.createElement('li');
        task.innerHTML = `
          <span>${taskText}</span>
          <button class="delete">X</button>
        `;
  
        task.querySelector('.delete').addEventListener('click', () => {
          task.remove();
        });
  
        task.addEventListener('click', () => {
          task.classList.toggle('completed');
        });
  
        list.appendChild(task);
        input.value = '';
      }
    });
  });
  
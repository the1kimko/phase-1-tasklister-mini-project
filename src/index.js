document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;
    if (taskDescription) {
      const newTask = document.createElement('li');
      newTask.innerHTML = taskDescription;
      taskList.appendChild(newTask);

      // Clear the input field after adding the task
      document.getElementById('new-task-description').value = '';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const pendingTasksList = document.getElementById("pendingTasks");
  const completedTasksList = document.getElementById("completedTasks");

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.classList.add("completeButton");
      completeButton.addEventListener("click", function () {
        taskItem.remove();
        completedTasksList.appendChild(taskItem);
        completeButton.remove();
        deleteButton.remove();
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", function () {
        taskItem.remove();
        completeButton.remove();
        deleteButton.remove();
      });

      taskItem.appendChild(completeButton);
      taskItem.appendChild(deleteButton);
      pendingTasksList.appendChild(taskItem);

      taskInput.value = "";
    }
  });
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dueDateInput = document.getElementById("dueDate");
  const statusSelect = document.getElementById("statusSelect");

  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;
  const status = statusSelect.value;

  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");

  // Create task description with due date
  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";
  
  const text = document.createElement("span");
  text.textContent = taskText;
  text.className = "task-text";

  const date = document.createElement("span");
  date.textContent = `Due: ${dueDate || "N/A"}`;
  date.className = "task-date";

  const statusDot = document.createElement("span");
  statusDot.className = `status-dot ${status}`;
  
  taskInfo.appendChild(statusDot);
  taskInfo.appendChild(text);
  taskInfo.appendChild(date);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(taskInfo);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  // Clear inputs
  taskInput.value = "";
  dueDateInput.value = "";
  statusSelect.value = "green";
}

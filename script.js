function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    if (task !== "") {
      var listItem = document.createElement("li");
      listItem.textContent = task;
      listItem.innerHTML += ' <button onclick="completeTask(this)">Complete</button>';
      listItem.innerHTML += ' <button onclick="deleteTask(this)">Delete</button>';
      document.getElementById("pendingTasks").appendChild(listItem);
      input.value = "";
    }
  }
  
  function completeTask(button) {
    var listItem = button.parentNode;
    listItem.classList.add("complete");
    button.parentNode.removeChild(button.previousSibling); // Remove "Complete" button
    listItem.innerHTML += ' <button onclick="deleteTask(this)">Delete</button>';
    document.getElementById("completedTasks").appendChild(listItem);
  }
  
  function deleteTask(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
  
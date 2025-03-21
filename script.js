function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `${taskText} 
        <button class="delete-btn" onclick="deleteTask(this)">❌</button>`;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
}

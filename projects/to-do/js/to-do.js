function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please, Enter a New Task.");
        return;
    }

    var taskList = document.getElementById("task-list");
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight="5px";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            addDeleteButton(li);
            saveTasksToLocalStorage();
        } else {
            li.style.textDecoration = "none";
            removeDeleteButton(li);
        }
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    taskList.appendChild(li);

    taskInput.value = "";
    saveTasksToLocalStorage();
}
function saveTasksToLocalStorage() {
    var taskList = document.getElementById("task-list");
    var tasks = [];

    for (var i = 0; i < taskList.children.length; i++) {
        var taskText = taskList.children[i].innerText;
        tasks.push(taskText);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = function() {
    var storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        var tasks = JSON.parse(storedTasks);
        var taskList = document.getElementById("task-list");

        
        tasks.forEach(function(taskText) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(taskText));
            taskList.appendChild(li);
            addDeleteButton(li);
        });
    }
};
function addDeleteButton(li) {
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Eliminar";
    deleteButton.style.marginLeft = "20px";
    deleteButton.style.marginTop = "10px";
    deleteButton.style.borderRadius = "5px";
    deleteButton.style.fontWeight = "bold";
    deleteButton.addEventListener("click", function() {
        li.remove();
        saveTasksToLocalStorage();
    });
    li.appendChild(deleteButton);
}

function removeDeleteButton(li) {
    var buttons = li.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].remove();
    }
}




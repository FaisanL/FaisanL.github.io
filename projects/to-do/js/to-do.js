function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    var taskList = document.getElementById("task-list");
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            addDeleteButton(li);
        } else {
            li.style.textDecoration = "none";
            removeDeleteButton(li);
        }
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    taskList.appendChild(li);

    taskInput.value = "";
}

function addDeleteButton(li) {
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Eliminar";
    deleteButton.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(deleteButton);
}

function removeDeleteButton(li) {
    var buttons = li.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].remove();
    }
}


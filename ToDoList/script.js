function addTask(task){
    const toDoItem = document.createElement("li")
    const checkbox = document.createElement("input");
    const taskName = document.createElement("p");
    const delBtn = document.createElement("span");

    toDoItem.className = "listItem";
    checkbox.type = "checkbox";
    toDoItem.append(checkbox);
    taskName.textContent = task;
    toDoItem.append(taskName);
    delBtn.id = 'deleteBtn';
    delBtn.textContent = 'Delete';
    toDoItem.append(delBtn);

    document.querySelector("ul").append(toDoItem);
    console.log(toDoItem);
}

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click",()=>{
    let inputField = document.querySelector("input");
    addTask(inputField.value);  
    inputField.value = ""  
});

const toDoList = document.querySelector("ul");
console.log(toDoList);
toDoList.addEventListener("click",(e)=>{
    if (e.target.id == "deleteBtn"){
        e.target.parentElement.remove();
    }
});




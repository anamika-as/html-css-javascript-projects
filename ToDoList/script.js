
function addTask(task){
    const toDoItem = document.createElement("li")
    const checkbox = document.createElement("input");
    const taskName = document.createElement("p");
    const delBtn = document.createElement("span");
    const editBtn = document.createElement("span");

    toDoItem.className = "listItem";
    checkbox.type = "checkbox";
    toDoItem.append(checkbox);
    taskName.textContent = task;
    toDoItem.append(taskName);
    delBtn.id = 'deleteBtn';
    delBtn.textContent = 'Delete';
    toDoItem.append(delBtn);
    editBtn.id = 'editBtn';
    editBtn.textContent = 'Edit';
    toDoItem.append(editBtn);

    document.querySelector("ul").append(toDoItem);
    console.log(toDoItem);
}

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click",()=>{
    const inputField = document.querySelector("input");
    if(!isEditingItem && inputField.value != ""){
        addTask(inputField.value);  
        inputField.value = ""; 
    }
    else{
        const p = document.createElement("p");
        p.textContent = inputField.value;
        editItem.children[1].replaceWith(p);
        inputField.value = "";
        isEditingItem = false;
    }
    
});

let isEditingItem = false;
let editItem = null;
const toDoList = document.querySelector("ul");
console.log(toDoList);
toDoList.addEventListener("click",(e)=>{
    if (e.target.id == "deleteBtn"){
        e.target.parentElement.remove();
    }
});

toDoList.addEventListener("click",(e)=>{    
   if (e.target.id == "editBtn"){
        const inputField = document.querySelector("input");
        inputField.value = e.target.parentElement.children[1].textContent;
        editItem = e.target.parentElement;
        isEditingItem = true;
        
    }
})






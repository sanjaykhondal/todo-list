const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("You must write something in your to do");
        return false;
    }

    //creating p tag 
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);


    //creating edit button
    const editBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.classList.add("btn","editBtn");
    li.appendChild(editBtn);

    //creating delete button
    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="Remove";
    deleteBtn.classList.add("btn","deleteBtn");
    li.appendChild(deleteBtn);

    //Adding li to ul tag.
    todoList.appendChild(li);

    //Empty inputBox after click on add button.
    inputBox.value = "";
}

const updateTodo=(e)=>{
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentElement);
    }
}

addBtn.addEventListener('click', addTodo);

todoList.addEventListener('click',updateTodo);
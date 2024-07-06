document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  
  form.addEventListener('submit',(e) => {
    e.preventDefault(); 
    //use string ID instead   
    createTaskList(e.target["new-task-description"].value); 
    form.reset();       
  })
});

function createTaskList(task){
    let list = document.createElement('li');
    let myButton = document.createElement('button');
    myButton.addEventListener('click',deleteBtn);
    myButton.textContent = "delete"
    list.textContent = `${task} `
    list.appendChild(myButton);
    document.getElementById('tasks').appendChild(list);
}

function deleteBtn(e){
  e.target.parentNode.remove();
}
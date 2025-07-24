'use strict';

// PROBELM:
/*
 Create a logic that allows users to use todo app. 
 this app should allow users to add, delete, and mark tasks as completed.
 The app should also allow users to filter tasks based on their status (all, completed, pending)



SOLUTION:
 1. Using DOM manipulation, create a todo app that allows users to add, delete, and mark tasks as completed.
 2. Use event listeners to handle user interactions such as adding, deleting, and marking tasks as completed.
   a. make functional the add task button to add new tasks to the list.
   b. make functional the delete task button to remove tasks from the list.
   c. make functional the complete task button to mark tasks as completed.
*/

document.addEventListener('DOMContentLoaded', () => {
    let taskHolder=document.querySelector('.container')
    let addbtn=document.getElementById('add-task');
    addbtn.addEventListener('click', () => 
        {
            let input=document.getElementById('task').value;
            addTodo(input,taskHolder);
            document.getElementById('task').value='';

        })
    
})

// Function to create a div
function createDiv(){
    let div=document.createElement('div');
    return div;
}



// Function to add new task
const addTodo=(input,taskHolder)=>{
   let li=document.createElement('li');
   li.textContent=input;
   let taskDiv=createDiv()
   taskDiv.appendChild(li)
   taskHolder.appendChild(taskDiv);
}
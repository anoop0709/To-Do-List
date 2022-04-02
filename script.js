window.addEventListener('load',() => {
    const addButton = document.querySelector('#plus');

addButton.addEventListener('click',(e) => {
    e.preventDefault();

    const inputVal = document.querySelector('#input-section');
    const task = inputVal.value;  
    if(!task){
        alert("please enter your to do list");
        return;
    } else{
    const tasklist = document.createElement('li');
    tasklist.classList.add("list-content"); 
    document.getElementById("content").append(tasklist);
    tasklist.innerText = task;
    inputVal.value = ' ';
   
    const del = document.createElement('button');
    del.classList.add("delete");
    del.innerText = 'Delete';
    tasklist.appendChild(del);
    del.addEventListener('click',() => {
        document.getElementById("content").removeChild(tasklist);
    });

    const delAll = document.getElementById("clearAll");
    delAll.addEventListener('click',() => {
        document.getElementById("content").removeChild(tasklist);
    });
   }

   
});
});

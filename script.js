
    let addButton = document.querySelector('#plus');
    let ulContent = document.querySelector('#content');
    let allClearBtn = document.querySelector('#clearAll');
    let inputVal;
    let task;
    let todoListArray = [];
    addButton.addEventListener('click',(e) => {
        e.preventDefault();
        inputVal= document.querySelector('#input-section');
        task = inputVal.value; 
        if(!task){
            alert("please add a content to list");
        }else{
            
        todoListArray.push(task);
        setTodoList();
        getTodoList();
        }
        inputVal.value = "";
       inputVal.setAttribute("placeholder","please add more");
        
    });
   
    function setTodoList(){
        if(!todoListArray){
            alert("please add a to do");
        }else{
       localStorage.setItem("Todolist",JSON.stringify(todoListArray));
    }
}
    function getTodoList(){
     if(localStorage.getItem("Todolist")) {
     todoListArray =JSON.parse(localStorage.getItem("Todolist"));
      buildLi();
     }
     }
    
        

    

    function buildLi(){
        let tasklist;
        ulContent.textContent = " ";
        todoListArray.forEach((item,index) => {
       
        tasklist = document.createElement('li');
        tasklist.classList.add("list-content"); 
        document.getElementById("content").append(tasklist);
        tasklist.innerText = item;
        
        const del = document.createElement('button');
        del.classList.add("delete");
        del.innerText = 'Delete';
        tasklist.appendChild(del);
        del.addEventListener('click',() => {

            todoListArray =JSON.parse(localStorage.getItem("Todolist"));
            todoListArray.splice(index,1);
            localStorage.setItem("Todolist",JSON.stringify(todoListArray));
            getTodoList();

                 
        
            
        });
       
    });
    
    }
    getTodoList();
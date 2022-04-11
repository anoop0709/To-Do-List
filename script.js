
    let addButton = document.querySelector('#plus');
    let ulContent = document.querySelector('#content');
    let allClearBtn = document.querySelector('#clearAll');
    let inputVal;
    let task;
    let tasklist;
    let todoListArray = [];
    let counter = 0;
    let count = document.getElementById("todoCounter");
    let counterLog;
    let del;

    addButton.addEventListener('click',(e) => {
        e.preventDefault();
        inputVal= document.querySelector('#input-section');
        task = inputVal.value; 
        if(!task){
            alert("please add a content to list");
        }else{
            
        todoListArray.push(task);
        counter++;
        setTodoList();
        getTodoList();
        }
        
    inputVal.value = "";
    inputVal.setAttribute("placeholder","please type your to do list");
   
        
    });
   
    function setTodoList(){
        if(!todoListArray){
            alert("please add a to do");
        }else{
       localStorage.setItem("Todolist",JSON.stringify(todoListArray));
       localStorage.setItem("counterlog",JSON.stringify(counter));
    }
}
    function getTodoList(){
     if(localStorage.getItem("Todolist")) {
     todoListArray = JSON.parse(localStorage.getItem("Todolist"));
     counter = JSON.parse(localStorage.getItem("counterlog"));
     count.innerText = counter;
    
      buildLi();
      
     }
     }
    
        

    

    function buildLi(){
        
        ulContent.textContent = " ";
        todoListArray.forEach((item,index) => {
       
        tasklist = document.createElement('li');
        tasklist.classList.add("list-content"); 
        tasklist.setAttribute("contenteditable","false");
        document.getElementById("content").append(tasklist);
        tasklist.innerText = item;
        
        del = document.createElement('button');
        del.classList.add("delete");
        del.innerText = 'Delete';
        tasklist.appendChild(del);
    
    
    

       

        del.addEventListener('click',() => {

            todoListArray =JSON.parse(localStorage.getItem("Todolist"));
            todoListArray.splice(index,1);
            counter = JSON.parse(localStorage.getItem("counterlog"));
            counter--;
            localStorage.setItem("counterlog",JSON.stringify(counter));
            localStorage.setItem("Todolist",JSON.stringify(todoListArray));
            getTodoList();
            
        });
    });
    }
       
       
   
    getTodoList();
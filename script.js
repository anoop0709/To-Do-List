
    let addButton = document.querySelector('#plus');
    let ulContent = document.querySelector('#content');
    let allClearBtn = document.querySelector('#clearAll');
    let inputVal;
    let task;
    let tasklist;
    let todoListArray = [];
    let counter = 0;
    let count = document.getElementById("todoCounter");

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
    inputVal.setAttribute("placeholder","please type your to do list");
    counter++;
    count.innerText = counter;
        
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
     todoListArray = JSON.parse(localStorage.getItem("Todolist"));
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
        
        const del = document.createElement('button');
        del.classList.add("delete");
        del.innerText = 'Delete';
        tasklist.appendChild(del);

       

        del.addEventListener('click',() => {

            todoListArray =JSON.parse(localStorage.getItem("Todolist"));
            todoListArray.splice(index,1);
            localStorage.setItem("Todolist",JSON.stringify(todoListArray));
            getTodoList();
            counter--;
            count.innerText = counter;
        });
       
       
    });
    
    
    }
    getTodoList();
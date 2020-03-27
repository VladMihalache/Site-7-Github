let theList=document.getElementById("theList");
let theInput=document.getElementById("theInput");
let listings=document.querySelectorAll("li");
let todos=[{todo : 'Nothing Special' , status : 22222, cod : 1}, {todo : 'Nothing so Special', status : 1, cod : 2}];

function getCode(){
    let code = Math.floor(Math.random() *10000);
    let i=0;
    while(i<todos.length){
        if(todos[i].cod===code)
            getCode()
        else
            i++;
    }
    return code;
}

todos.forEach(obiect => {
        let listItem = document.createElement("li");
        listItem.classList.add(obiect.cod)
        listItem.innerHTML="<div class='circle'><input type='checkbox'></div>" + obiect.todo + "<span class='redX'>X</span> ";
        theList.appendChild(listItem)
    })

function takeValue(){
    let value=theInput.value
    let code=getCode()
        addTodo(value, 1, code)
}

function resetValue(){
    theInput.value=null;
}

function addTodo(todoX, statusX, codeX){
    todos.push({todo : todoX, status : statusX, cod:codeX})
}

document.addEventListener('keydown' , (event) => {
    let enter=event.which;
    if(enter==13){
        takeValue();
        let newListItem = document.createElement("li");
        newListItem.classList.add(todos[todos.length-1].cod)
        newListItem.innerHTML="<div class='circle' ><input type='checkbox'></div>" + todos[todos.length-1].todo + todos[todos.length-1].cod +"<span class='redX'>X</span> ";
        theList.appendChild(newListItem);
        resetValue();
        purifyTodos()
    }
})

document.addEventListener('click' , (event) =>{
    let x=event.target;
    if(x.classList.contains("redX")){
        let sp=x;
        let elim=sp.parentElement;
       todos.forEach(obiect => {
           let indexo=todos.indexOf(obiect);
           if(obiect.cod==elim.classList)
                todos.splice(indexo,1)
       })
        elim.remove()
        
    }
})


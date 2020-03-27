let theList=document.getElementById("theList");
let theInput=document.getElementById("theInput")
let todos=[{todo : 'Nothing Special' , status : 1}, {todo : 'Nothing so Special', status : 1}];

todos.forEach(obiect => initializeList(obiect))

function initializeList(x){
    let newListItem = document.createElement("li");
    newListItem.innerHTML="<div class='circle' ><input type='checkbox'></div>" + x.todo +"<span class='redX'>X</span> "
    theList.appendChild(newListItem);
}
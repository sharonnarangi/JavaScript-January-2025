const notesContainer = document.querySelector(".notescontainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem ("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true")
    notesContainer.appendChild(inputBox)
})
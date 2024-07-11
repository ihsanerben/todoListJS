let addButton = document.getElementById("addToDo");
let toDos = document.getElementById("toDos")
let inputText1 = document.getElementById("inputText1");
let deleteButton = document.getElementById("deleteToDo")

addButton.addEventListener("click", function () {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    toDos.appendChild(paragraph);
    paragraph.innerHTML = inputText1.value;
    inputText1.value = "";

    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function () {
        toDos.removeChild(paragraph);
    });

    deleteButton.addEventListener("click", function () {
        paragraph.remove();
    });
})
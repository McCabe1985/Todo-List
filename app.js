const addTodoButton = document.getElementById('addTodo');
const todoContainer = document.getElementById('todoContainer');
const inputField = document.getElementById('inputField');

addTodoButton.addEventListener('click', function(){
    //generate a new <p> element with the value of the inputField within the container <div> and reset inputField value.
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";

    //check off and delete todo entry
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph);
    });
})
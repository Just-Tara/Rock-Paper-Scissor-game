
const todoList = [];
renderToDoList();

function renderToDoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}

function addTodo(params) {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    inputElement.value ='';
    renderToDoList();
}
function enterKey(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
    
}
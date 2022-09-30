let lista = document.querySelector('#list')

function dropDown() {
lista.classList.toggle('list') 
}
let blog = document.querySelector('#blogarea');
let colors = document.getElementById('input-color').value;

function color() {
    blog.style.color=`${colors}`
}

function font(stile) {
    blog.classList.toggle(stile)
}

let todolist = document.getElementById(todo)

function input(eventObject) {
    if (eventObject.key !== 'Enter') {
        return;
    }
    let input = document.getElementById('inputTodo')
    if (input.value !=='') {
        todolist.innerHTML += `<div class="note">${input.value}</div>`
    }
    input.value =''
}


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


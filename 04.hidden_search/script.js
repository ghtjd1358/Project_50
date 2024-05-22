const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.input')

btn.addEventListener('click', (e) => {
    e.currentTarget.parentNode.classList.toggle('active')
    input.focus();
})
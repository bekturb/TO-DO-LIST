
const input = document.querySelector('.input'),
    addBtn = document.querySelector('.add-btn'),
    list = document.querySelector('.list')


addBtn.addEventListener('click', () => {
    if (input.value.trim()) {
        const li = `<li class="list-group-item d-flex justify-content-between align-items-center" style="margin: 5px 0; border:1px solid">
                  <span class="text">${input.value}</span>
                  <button class="del-btn btn btn-danger">Удалить</button>
                 </li>`
        list.innerHTML += li
        input.value = ''
    }
})
list.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'del-btn') {
        e.target.parentNode.remove()
    } else if (e.target.classList[0] === 'text') {
        e.target.classList.toggle('text-decoration-line-through')
    }
})
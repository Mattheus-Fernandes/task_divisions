const buttonAdd = document.querySelector('.button')

buttonAdd.addEventListener('click', (evento) => {
    evento.preventDefault()

    const ul = document.querySelector('.listTask')
    const input = document.querySelector('.fieldInput')
    const inputValue = input.value
    const template = `<p>${inputValue}</p>`
    const span = document.querySelector('.messageErro')

    if(inputValue === '') {
        span.textContent = 'Por favor, preencha este campo!'
        return;
    }else {
        span.textContent = ''
    }

    
    const li = document.createElement('li')
    li.classList.add('task')
    li.innerHTML = template
    
    
    const btnRemove = document.createElement('button')
    btnRemove.classList.add('buttonRemover')
    
    btnRemove.addEventListener('click', () => {
        li.remove()
    })
    

    ul.appendChild(li)
    li.appendChild(botaoConcluir())
    li.appendChild(btnRemove)
    
    const btnRemoveAll = document.querySelector('.removeAll')
    btnRemoveAll.addEventListener('click', ()=> {
        const tarefas = document.querySelectorAll('.task')

        for(let index = 0; index < tarefas.length; index ++){
            
            const removerAll = tarefas[index]
            removerAll.remove()
        }
    })
    

    input.value = ''
})


const botaoConcluir = () => {
    const botaoGreen = document.createElement('button')
    botaoGreen.classList.add('buttonDone')
    botaoGreen.addEventListener('click', tarefaConcluida)

    return botaoGreen
}

const tarefaConcluida = (evento) => {
    const target = evento.target
    
    const tarefaCompleta = target.parentElement
    tarefaCompleta.classList.toggle('done')
}


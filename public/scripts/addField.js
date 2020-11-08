// Procurar o botao
document.querySelector('#add-time')
.addEventListener('click', cloneField)
// Quando clicar no botao

// Executar uma acao
function cloneField(){
    // Duplicar os campos / Quais campos ? 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos ? Quais campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar

    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na pagina / Onde ?
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}

// procurar botao
var btnremove = document.querySelector('#remove')
// ao clicar no botao
btnremove.addEventListener('click', removeField)

// Funcao remover horario
function removeField(){
    // pegar o campo a ser removido
    var allDiv = document.getElementsByClassName('schedule-item'),
                                div = allDiv[allDiv.length - 1];
    div.remove(false)

    if(allDiv.length === 1){
        document.getElementById('remove').disabled=true;
    }
}
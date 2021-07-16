const nombre = document.getElementById('name')
const email = document.getElementById('email')
const mjeConsulta = document.getElementById('mensajeDeConsulta')
const form = document.getElementById('form')
const errores = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages =[]
    if(nombre.value===""||nombre.value==null){
        messages.push('Por favor ingrese un nombre.')
    }
    if(email.value===""||email.value==null){
        messages.push('Por favor ingrese un email.')
    }
    if(mjeConsulta.value===""||mjeConsulta.value==null){
        messages.push('Por favor ingrese su consulta.')
    }
    if(messages.length > 0) { 
        e.preventDefault()
        errores.innerText = messages.join(', ')
    }
    
})
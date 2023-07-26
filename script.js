function validarFormulario(e) {
    e.preventDefault()

    let numeroA = parseInt(document.getElementById('numeroA').value);
    let numeroB = parseInt(document.getElementById('numeroB').value);


    if (numeroB > numeroA) {
        document.getElementById('sucess').style.display = 'block'

    } else {

        document.getElementById('error').style.display = 'block'

    }


    return false;
}
var btnRegister = document.getElementById('btnRegister')
btnRegister.addEventListener('click', function (e) {
    e.preventDefault()
    btnRegister.disabled = true
    registerUser()
})


function registerUser() {
    var form = document.getElementById('registerForm')
    var formData = new FormData(form)
    var data = {}
    
    for(var key of formData.keys()) {
        if(formData.get(key) == '') {
            swal({
                title: "Existen campos vacíos",
                text: "Por favor rellena todos los campos",
                icon: "error"
            });
            btnRegister.disabled = false
            return
        }

        if(key == 'txtUser') {
            if(!checkMatricula(formData.get(key).trim())){
                swal({
                    title: "Matrícula inválida",
                    text: "Por favor ingresa una matrícula válida",
                    icon: "error"
                });
                btnRegister.disabled = false
                return
            }
        } else if(key == 'txtName') {
            if(!checkName(formData.get(key).trim())){
                swal({
                    title: "Nombre inválido",
                    text: "Por favor ingresa un nombre válido",
                    icon: "error"
                });
                btnRegister.disabled = false
                return
            }
        } else if(key == 'txtLastName_F') {
            if(!checkName(formData.get(key).trim())){
                swal({
                    title: "Apellido inválido",
                    text: "Por favor ingresa un apellido válido",
                    icon: "error"
                });
                btnRegister.disabled = false
                return
            }
        } else if(key == 'txtLastName_M') {
            if(!checkName(formData.get(key).trim())){
                swal({
                    title: "Apellido inválido",
                    text: "Por favor ingresa un apellido válido",
                    icon: "error"
                });
                btnRegister.disabled = false
                return
            }
        } else if(key == 'txtPassword') {
            if(!checkPassword(formData.get(key).trim())){
                swal({
                    title: "Contraseña inválida",
                    text: "Por favor ingresa una contraseña válida",
                    icon: "error"
                });
                btnRegister.disabled = false
                return
            }
        } else {
            swal({
                title: "Ocurrió un error",
                text: "Ha ocurrido un error interno, por favor intente nuevamente en unos minutos",
                icon: "error"
            });
            btnRegister.disabled = false
            return
        }
        data[key] = formData.get(key)
    }
    
    fetch('/api/user/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if(data.status) {
            swal({
                title: "Registro exitoso",
                text: "Se ha registrado correctamente",
                icon: "success"
            })
            .then(() => {
                window.location.href = '/'
            })
        } else {
            swal({
                title: "Ocurrió un error",
                text: "Ha ocurrido un error interno, por favor intente nuevamente en unos minutos",
                icon: "error"
            });
            btnRegister.disabled = false
        }
    })
    .catch(error => {
        swal({
            title: "Ocurrió un error",
            text: "Ha ocurrido un error interno, por favor intente nuevamente en unos minutos",
            icon: "error"
        });
        btnRegister.disabled = false
    })
}
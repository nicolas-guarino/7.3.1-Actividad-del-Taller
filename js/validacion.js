function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const contraseña1 = document.querySelector("#password1");
const contraseña2 = document.querySelector("#password2");
const checkbox = document.querySelector("#terminos")


function validarCampos() {
    if ( nombre.value === '' || apellido.value === '' || email.value === '' || contraseña1.value === '' || contraseña2.value === '' || checkbox.checked === false || contraseña1.value.length <= 6 || contraseña2.value.length <= 6 || contraseña1.value !== contraseña2.value
    ) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
}
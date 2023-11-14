function validaremail() {
    correo = document.getElementById('usuario').value;
    var emailField = document.getElementById('usuario');
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (validEmail.test(emailField.value)) {
        if (correo === 'SiriusLS@gmail.com.cl') {
            var formulario = document.getElementById('loginform');
            formulario.setAttribute('action', 'perfil_administrador.html');
            formulario.submit();
        } else {
            var formulario = document.getElementById('loginform');
            formulario.setAttribute('action', 'GBGLogin.html');
            formulario.submit();
        }
        return true;
    } else {
        alert('Email inválido');
        return false;
    }
}
function obtenerUsuarioDeURL() {
    var url = window.location.href;
    var usuarioIndex = url.indexOf("usuario=");
    if (usuarioIndex !== -1) {
      var usuarioEndIndex = url.indexOf("&", usuarioIndex);
      var usuarioValue = url.substring(usuarioIndex + 8, usuarioEndIndex !== -1 ? usuarioEndIndex : undefined);
      usuario = decodeURIComponent(usuarioValue);
      localStorage.setItem("usuario", usuario);
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    usuario = localStorage.getItem("usuario") || "";
    if (usuario !== "") {
      document.getElementById('AccountButton').innerText = usuario;
      document.getElementById('AccountButton').className = "btn btn-warning pt-2 text-uppercase";
    }
    obtenerUsuarioDeURL();
  });


  
// script.js

function agregarFavorito(event) {
  event.preventDefault();

  var texto = event.target.textContent;
  var url = event.target.href;

  var nuevoFavorito = document.createElement("li");
  nuevoFavorito.innerHTML = `<a href="${url}" class="favorito-link">${texto}</a>`;

  document.getElementById("listaFavoritos").appendChild(nuevoFavorito);
}



function validar() {
  var nombre, apellidos, correo, usuario, clave, telefono, expresion;

  nombre = document.getElementById('nombre').value;
  apellidos = document.getElementById('apellidps').value;
  correo = document.getElementById('correo').value;
  usuario = document.getElementById('usuario').value;
  clave = document.getElementById('clave').value;
  telefono = document.getElementById('telefono').value;

  if(nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }
}

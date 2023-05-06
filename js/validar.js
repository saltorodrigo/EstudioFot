function validar() {
	var nombre = document.getElementById("nombre").value;
	var correo = document.getElementById("correo").value;
	var mensaje = document.getElementById("mensaje").value;

	if (nombre == "") {
		alert("Por favor, ingrese su nombre");
		return false;
	}

	if (correo == "") {
		alert("Por favor, ingrese su correo electrónico");
		return false;
	}

	if (mensaje == "") {
		alert("Por favor, ingrese un mensaje");
		return false;
	}

	return true;
}

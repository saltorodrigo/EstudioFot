function validateForm() {
	var name = document.forms["myForm"]["name"].value;
	var email = document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value;
	var errors = "";

	if (name == "") {
		errors += "Por favor ingrese su nombre.\n";
		document.getElementById("name").classList.add("invalid");
		document.getElementById("name-error").innerHTML = "Por favor ingrese su nombre.";
	} else {
		document.getElementById("name").classList.remove("invalid");
		document.getElementById("name-error").innerHTML = "";
	}

	if (email == "") {
		errors += "Por favor ingrese su correo electrónico.\n";
		document.getElementById("email").classList.add("invalid");
		document.getElementById("email-error").innerHTML = "Por favor ingrese su correo electrónico.";
	} else {
		document.getElementById("email").classList.remove("invalid");
		document.getElementById("email-error").innerHTML = "";
	}

	if (phone == "") {
		errors += "Por favor ingrese su número de teléfono.\n";
		document.getElementById("phone").classList.add("invalid");
		document.getElementById("phone-error").innerHTML = "Por favor ingrese su número de teléfono.";
	} else {
		document.getElementById("phone").classList.remove("invalid");
		document.getElementById("phone-error").innerHTML = "";
	}

	if (errors != "") {
		return false;
	}

	return true;
}

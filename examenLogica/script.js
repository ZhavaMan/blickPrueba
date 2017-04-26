var input = document.querySelector('#cadena');
var boton = document.querySelector('#boton');




function logText () {
	var cadena = input.value;

	var cadenaArr = Array.from(cadena);	 

	cadenaArr.sort();

	console.log(cadenaArr);

	for (var i = 0; i <= cadenaArr.length; i++) {
		var caracter = cadenaArr[i];
		console.log(caracter);

		if (caracter === cadenaArr[i+1]) {
			console.log('La letra: "' + caracter + '" se repite');
			return false
		}
	}
}

boton.addEventListener('click', logText);
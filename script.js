function calcular() {
	const valor1 = parseFloat(document.getElementById('valor1').value);
	const valor2 = parseFloat(document.getElementById('valor2').value);
	const valor3 = parseFloat(document.getElementById('valor3').value);

	const resultado = valor2 * valor3 / valor1;

	document.getElementById('resultado').value = resultado;
}

function Calcular() {
 let Número1 = Number(document.getElementById('Número1').value);
 let Número2 = Number(document.getElementById('Número2').value);
 let Numero3 = Number(document.getElementById('Número3').value);
 let Resultado = (Número1 + Número2) * Numero3;
 document.getElementById("Resultado").innerHTML = "O resultado é " + Resultado;
}

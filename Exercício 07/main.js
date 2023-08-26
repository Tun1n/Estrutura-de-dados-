function preçofinal() {
    let Valorfábrica = Number(document.getElementById('Número1').value);
    let Preçototal = Valorfábrica + ((45/100) * Valorfábrica) + ((25/100) * Valorfábrica);

    document.getElementById("Preçototal").innerHTML = "O preço total do veículo é : " + Preçototal;
}


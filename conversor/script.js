function converter() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (isNaN(celsius)) {
    alert("Digite um número válido");
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("resultado").textContent = `${celsius}°C = ${fahrenheit.toFixed(1)}°F`;
}

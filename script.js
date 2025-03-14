const dateEl = document.getElementById('anioNacimiento');
const buttonEl = document.getElementById('calcular');
const resultEl = document.getElementById('result');

buttonEl.addEventListener('click', () => {
    const currentYear = 2025;
    const birthYear = dateEl.value;
    const age = currentYear - birthYear;
    resultEl.textContent = `Tienes ${age} años`;
    if (age >= 18) {
        resultEl.style.color = 'green';
    } else if (age <= 0 || age > 100) {
        resultEl.style.color = 'red';
        resultEl.textContent = 'Por favor ingresa un año de nacimiento válido';

    }else {
        resultEl.style.color = 'red';
    }
});



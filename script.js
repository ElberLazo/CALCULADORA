function calculateCalories() {
    // Obtener valores de los campos del formulario
    const sex = document.getElementById('sex').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = document.getElementById('activity').value;
    // Validar los datos ingresados
    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Por favor, ingresa todos los datos correctamente.');
        return;
    }

    // Calcular el BMR
    let bmr;
    if (sex === 'hombre') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (sex === 'mujer') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Ajustar el BMR según el nivel de actividad
    let caloriasDiarias;
    switch (activity) {
        case 'sedentario':
            caloriasDiarias = bmr * 1.2;
            break;
        case 'ligero':
            caloriasDiarias = bmr * 1.375;
            break;
        case 'moderado':
            caloriasDiarias = bmr * 1.55;
            break;
        case 'activo':
            caloriasDiarias = bmr * 1.725;
            break;
        case 'muy activo':
            caloriasDiarias = bmr * 1.9;
            break;
        default:
            alert('Nivel de actividad no válido.');
            return;
    }

    // Calcular las calorías en déficit
    const deficit500 = caloriasDiarias - 500;
    const deficit1000 = caloriasDiarias - 1000;

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Tu BMR es: ${bmr.toFixed(2)} calorías/día<br>
                           Para tu nivel de actividad '${activity}', necesitas consumir aproximadamente ${caloriasDiarias.toFixed(2)} calorías al día para mantener tu peso actual.<br>
                           <strong>Déficit Calórico:</strong><br>
                           - Para perder aproximadamente 0.5 kg por semana (déficit de 500 calorías/día): ${deficit500.toFixed(2)} calorías/día<br>
                           - Para perder aproximadamente 1 kg por semana (déficit de 1000 calorías/día): ${deficit1000.toFixed(2)} calorías/día`;
}




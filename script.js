function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bmiGoal = document.getElementById('bmiGoal').value;

    if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const result = document.getElementById('result');
        result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

        if (bmiGoal > 0) {
            const targetWeight = bmiGoal * (heightInMeters * heightInMeters);
            const weightDifference = targetWeight - weight;
            const weightDistance = document.getElementById('weightDistance');
            weightDistance.textContent = `Still have ${Math.abs(weightDifference).toFixed(2)} kg to ${weightDifference > 0 ? 'gain' : 'lose'}. `;
        } else {
            const weightDistance = document.getElementById('weightDistance');
            weightDistance.textContent = '';
        }
    } else {
        alert('Please enter valid height and weight');
    }
}

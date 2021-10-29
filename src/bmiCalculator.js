class BMICalculator {
    calculateMetric(options) {
        const weight = options.weight;
        const height = options.height;
        const bmiValue = (weight / (height * height)).toFixed(2);
        const bmiResults = {
            value: parseFloat(bmiValue),
            clasification: this.getBMIClasification(parseFloat(bmiValue))
        }
        return bmiResults;
    }
    getBMIClasification(value) {
        if (value < 18.5) {
            return "Underweight";
        } else if (value < 24.9) {
            return "Normal";
        } else if (value < 29.9) {
            return "Overweight";
        }else if (value < 34.9) {
            return "Obesity Class 1";
        } else if (value < 39.9) {
            return "Obesity Class 2";
        } else {
            return "Extreme Obesity Class 3"
        }
    }
}

function onCalculateClick() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const resultDiv = document.getElementById("results");
    const calculator = new BMICalculator();
    const result = calculator.calculateMetric({weight: weight, height: height});
    resultDiv.innerHTML = `<h2>Your BMI value is <strong>${result.value}</strong> and you are in ${result.clasification} category! </h2>`;
}

const button = document.getElementById("calculateBtn");
button.addEventListener("click", onCalculateClick);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator
}

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
        //return "Normal";
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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator
  }

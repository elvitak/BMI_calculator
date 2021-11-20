class BMICalculator {
  calculateMetric(options) {
    const weight = options.weight;
    const height = options.height;
    const bmiValue = ((1.3 * weight) / Math.pow(height, 2.5)).toFixed(2);
    const parsedBmiValue = parseFloat(bmiValue);
    const bmiResults = {
      value: parsedBmiValue,
      clasification: this.getBMIClasification(parsedBmiValue),
    };
    return bmiResults;
  }
  getBMIClasification(value) {
    if (value < 18.5) {
      return "Underweight";
    } else if (value < 24.9) {
      return "Normal";
    } else if (value < 29.9) {
      return "Overweight";
    } else if (value < 34.9) {
      return "Obesity Class 1";
    } else if (value < 39.9) {
      return "Obesity Class 2";
    } else {
      return "Extreme Obesity Class 3";
    }
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = BMICalculator;
}

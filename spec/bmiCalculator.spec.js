const BMICalculator = require("../src/bmiCalculator");

const subject = new BMICalculator();

describe("BMICalculator", () => {
  describe("#calculateMetric()", () => {
    describe("Elvita", () => {
      let results;
      beforeEach(() => {
        results = subject.calculateMetric({ height: 1.61, weight: 56 });
      });
      it("is expected to return numeric value if given proper arguments", () => {
        expect(results.value).toEqual(22.13);
      });

      it('is expected to see category "normal" ', () => {
        expect(results.clasification).toEqual("Normal");
      });
    });
    describe("Thomas", () => {
      let results;
      beforeEach(() => {
        results = subject.calculateMetric({ height: 1.86, weight: 105 });
      });
      it("is expected to return numeric value if given proper arguments", () => {
        expect(results.value).toEqual(28.93);
      });

      it('is expected to see category "Overweight" ', () => {
        expect(results.clasification).toEqual("Overweight");
      });
    });
    describe("Imaginary person with obesity", () => {
      let results;
      beforeEach(() => {
        results = subject.calculateMetric({ height: 1.65, weight: 130 });
      });
      it("is expected to return numeric value if given proper arguments", () => {
        expect(results.value).toEqual(48.33);
      });

      it('is expected to see category "Extreme Obesity Class 3" ', () => {
        expect(results.clasification).toEqual("Extreme Obesity Class 3");
      });
    });
  });
});

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
        expect(results.value).toEqual(21.6);
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
        expect(results.value).toEqual(30.35);
      });

      it('is expected to see category "Obesity Class 1" ', () => {
        expect(results.clasification).toEqual("Obesity Class 1");
      });
    });
    describe("Imaginary person with obesity", () => {
      let results;
      beforeEach(() => {
        results = subject.calculateMetric({ height: 1.65, weight: 130 });
      });
      it("is expected to return numeric value if given proper arguments", () => {
        expect(results.value).toEqual(47.75);
      });

      it('is expected to see category "Extreme Obesity Class 3" ', () => {
        expect(results.clasification).toEqual("Extreme Obesity Class 3");
      });
    });
  });
});

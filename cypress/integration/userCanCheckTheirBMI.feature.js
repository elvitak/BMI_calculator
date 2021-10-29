describe('User can check their Bmi', () => {
	it('is possible to enter weight and height', () => {
		cy.visit('http://localhost:3474')
		cy.contains('BMI Calculator')
        cy.get("input[id=weight]").type("56")
        cy.get("#height").type("1.61")
        cy.get("#Calculate").click()
	})
    it('shows correct BMI value', () => {
        cy.get("#results").should("contain", "21.60")
    });
})

describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('http://localhost:3474')
		cy.contains('BMI Calculator')
        cy.get("input[id=weight]").type("56")
        cy.get("#height").type("1.61")
        cy.get("#Calculate").click()
	})
})

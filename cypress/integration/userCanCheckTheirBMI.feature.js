describe('User fills out registration form ', () => {
    describe('with correct information', () => {
        before(() => {
            cy.visit('http://localhost:3474');
            cy.contains('BMI Calculator');
            cy.get("input[id=weight]").type("56");
            cy.get("#height").type("1.61");
            cy.get("#calculateBtn").click(); 
        });
        it('is expected to see information about BMI value and category', () => {
            cy.get("#results").should("contain", "Your BMI value is 21.6 and you are in Normal category!");
	    });
    });
});

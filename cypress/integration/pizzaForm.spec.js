/// <reference types="Cypress" />

describe('Pizza Form', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/pizza');
	});

	const selectDropdown = () => cy.get('.dropdown');

	it('sanity check to make sure our tests work', () => {
		expect(1 + 1).to.equal(2);
	});

	describe('Test Form', () => {
		it('Can manipulate form', () => {
			cy.get('[type="radio"]').check();
			cy.get('[type="checkbox"]').check();
			cy.get('[type="text"][name="instructions"]').type('Instructions');
			cy.get('[type="text"][name="name"]').type('Name');
			cy.get('button[type="submit"]').click();
		});
	});
});

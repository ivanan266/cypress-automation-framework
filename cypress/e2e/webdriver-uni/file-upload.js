/// <reference types="cypress" />

describe('Test File Upload via webdriveruni', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });
    });
    it('Upload a file....', () => {
        cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
        cy.get("#submit-button").click();
    });

    it('Upload No file...', () => {
        cy.get("#submit-button").click();
    });
});
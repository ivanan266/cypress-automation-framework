///<reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('testng').should('have.value' , 'testng');
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery');


        cy.get('#dropdowm-menu-2').select('maven').should('have.value' , 'maven');
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
    });
});
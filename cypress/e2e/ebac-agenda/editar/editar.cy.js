/// <reference types="cypress" />

describe("Testes para a função de edição de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve editar o primeiro contato", () => {
        cy.get('.contato').first().find('.edit').click()
        cy.get('[type="text"]').clear().type("matheus fré")
        cy.get('[type="email"]').clear().type("matheusfre@teste.com")
        cy.get('[type="tel"]').clear().type("11 123456789")
        cy.get('.alterar').click()
        cy.contains("matheus fré").should("exist")
    })
})
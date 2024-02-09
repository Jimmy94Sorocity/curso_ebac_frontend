/// <reference types="cypress" />

describe("Testes para a função de edição de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve editar o primeiro contato", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type("matheus fré")
        cy.get('[type="email"]').clear().type("matheusfre@teste.com")
        cy.get('[type="tel"]').clear().type("11 123456789")
        cy.get('.alterar').click()
    })

    it("Deve editar o segundo contato", () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type("teste teste")
        cy.get('[type="email"]').clear().type("testetstes@teste.com")
        cy.get('[type="tel"]').clear().type("15 988959895")
        cy.get('.alterar').click()
    })

    it("Deve editar o terceiro contato", () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type("outro teste")
        cy.get('[type="email"]').clear().type("outroteste@teste.com")
        cy.get('[type="tel"]').clear().type("11 991482516")
        cy.get('.alterar').click()
    })
})
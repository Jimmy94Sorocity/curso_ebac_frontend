/// <reference types="cypress" />

describe("Testes para a função de adicionar contato", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve preencher o formulário de contato", () => {
        cy.get('[type="text"]').type("matheus fré")
        cy.get('[type="email"]').type("matheusfre@teste.com")
        cy.get('[type="tel"]').type("11 123456789")
        cy.get('.adicionar').click()

        cy.get('.sc-iAEyYk > :nth-child(5)').should("have.length", 1)
    })
})
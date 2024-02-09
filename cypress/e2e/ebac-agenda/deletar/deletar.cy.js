/// <reference types="cypress" />

describe("Testes para a função de deletar", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve excluir o contato", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()

        cy.get(".sc-iAEyYk > :nth-child(2)").should("have.length", 0)
        cy.get('.sc-iAEyYk > :nth-child(3)').should("have.length", 0)
        cy.get('.sc-iAEyYk > :nth-child(4)').should("have.length", 0)
    })
})
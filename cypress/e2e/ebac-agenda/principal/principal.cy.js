/// <reference types="cypress" />

describe("Testes para a tela inicial", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve renderizar 3 contatos", () => {
        cy.get(".sc-iAEyYk > :nth-child(2)").should("have.length", 1)
        cy.get('.sc-iAEyYk > :nth-child(3)').should("have.length", 1)
        cy.get('.sc-iAEyYk > :nth-child(4)').should("have.length", 1)
    })
})

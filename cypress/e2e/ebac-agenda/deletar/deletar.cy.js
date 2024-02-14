/// <reference types="cypress" />

describe("Testes para a função de deletar", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve excluir o contato", () => {
        cy.get('.contato').then((contatos) => {
            const size = contatos.length
            cy.get('.contato').first().find('.delete').click()

            cy.get('.contato').should("have.length", size - 1)
        })
    })
})
/// <reference types="cypress" />

describe("Testes para a função de adicionar contato", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve preencher o formulário de contato", () => {
        cy.get('.contato').then((contatos) => {
            const size = contatos.length

            cy.get('[type="text"]').type("matheus fré")
            cy.get('[type="email"]').type("matheusfre@teste.com")
            cy.get('[type="tel"]').type("11 123456789")
            cy.get('.adicionar').click()
    
            cy.get('.contato').should("have.length", size + 1)
        
        })
    })
})
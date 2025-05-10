
export class DataPage {
    
    static openPage() {
        cy.visit('https://www.demoblaze.com/')
    }

    static click(selector) {
        cy.get(selector).should('be.visible').click() 
    }

    static type(selector, text) {
        cy.get(selector).should('be.visible').type(text)
    }

    static hasText(selector, text) {
        cy.get(selector)
        .should('be.visible')   
    }
    
    static checkExist(selector, wait = 0) {
        cy.get(selector).should('exist')
        if (wait > 0) cy.wait(wait)
    }
   

    static isVisible(selector) {
        cy.get(selector).should('be.visible')
    }

    static checkContainsText(text) {
        cy.contains(text).should('exist')
    }

    static isVisibleWithText(selector, expectedText) {
        cy.get(selector).should('be.visible').and('contain.text', expectedText)
    }

}

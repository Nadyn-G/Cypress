


 Cypress.Commands.add('setLoginCookies', (userUser) => {
    cy.setCookie('tokenp_', userUser)
 })
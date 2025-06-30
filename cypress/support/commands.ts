Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/login')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('form').submit()
})
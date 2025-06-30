import LoginPage from '../../pages/LoginPage'

describe('Login UI Test', () => {
  const loginPage = new LoginPage()

  it('should login successfully with valid credentials', () => {
    cy.visit('/login')
    loginPage.enterUsername('admin')
    loginPage.enterPassword('password')
    loginPage.submit()
    cy.url().should('include', '/dashboard')
  })
})
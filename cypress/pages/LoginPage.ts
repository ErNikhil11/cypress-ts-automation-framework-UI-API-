class LoginPage {
  enterUsername(username: string) {
    cy.get('#username').type(username)
  }

  enterPassword(password: string) {
    cy.get('#password').type(password)
  }

  submit() {
    cy.get('form').submit()
  }
}

export default LoginPage
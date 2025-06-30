class DashboardPage {
  getWidgets() {
    return cy.get('.widget')
  }

  logout() {
    cy.get('#logout').click()
  }
}

export default DashboardPage
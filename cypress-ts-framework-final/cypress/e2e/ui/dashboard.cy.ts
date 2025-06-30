import DashboardPage from '../../pages/DashboardPage'

describe('Dashboard Page Tests', () => {
  const dashboard = new DashboardPage()

  beforeEach(() => {
    cy.login('admin', 'admin123')
    cy.visit('/dashboard')
  })

  it('should display widgets on dashboard', () => {
    dashboard.getWidgets().should('have.length.at.least', 3)
  })

  it('should logout successfully', () => {
    dashboard.logout()
    cy.url().should('include', '/login')
  })
})
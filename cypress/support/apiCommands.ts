Cypress.Commands.add('getUserById', (id) => {
  cy.request(`/api/users/${id}`).then((response) => {
    expect(response.status).to.eq(200)
  })
})
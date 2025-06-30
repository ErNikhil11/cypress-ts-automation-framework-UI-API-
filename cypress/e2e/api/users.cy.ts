describe('Users API Test', () => {
  it('should fetch users', () => {
    cy.request('/api/users').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
    })
  })
})
describe('Reqres API Tests', () => {
  it('should fetch user list successfully', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.data).to.be.an('array').and.have.length.greaterThan(0)
    })
  })

  it('should fetch single user details', () => {
    cy.request('GET', 'https://reqres.in/api/users/2').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.data.id).to.eq(2)
    })
  })

  it('should create a new user', () => {
    cy.request('POST', 'https://reqres.in/api/users', {
      name: 'morpheus',
      job: 'leader'
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('id')
    })
  })

  it('should update user info', () => {
    cy.request('PUT', 'https://reqres.in/api/users/2', {
      name: 'neo',
      job: 'zion leader'
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.job).to.eq('zion leader')
    })
  })

  it('should delete a user', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2').then((res) => {
      expect(res.status).to.eq(204)
    })
  })
})
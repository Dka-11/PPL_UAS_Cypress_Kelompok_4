describe('Menguji fungsionalitas fitur login', () => {
  const email = "adika123@gmail.com";
  const unregisEmail = "adikaahmad15@gmail.com";
  const password = "123456";
  
  context('TC-LOGIN-001 - Form inputan terisi sempurna', () =>{
      it('Membuka Web Layanan Donoh Darah', () => {
          cy.visit('http://localhost:8000/')
      })
  
      it('Login', () => {
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.wait(2000)
      })
  })

  context('TC-LOGIN-002 - Form inputan kosong', () =>{
      it('Membuka Web Layanan Donoh Darah', () => {
          cy.visit('http://localhost:8000/')
      })
  
      it('Login', () => {
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control')
        cy.get(':nth-child(3) > .col-md-6 > .form-control')
        cy.get('.btn-primary').click()
        cy.wait(2000)
      })
  })

  context('TC-LOGIN-003 - Form pada bagian email berisi email yang belum terdaftar', () =>{
      it('Membuka Web Layanan Donoh Darah', () => {
          cy.visit('http://localhost:8000/')
      })
  
      it('Login', () => {
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(unregisEmail)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.wait(2000)
      })
  })

  context('TC-LOGIN-004 - Form pada bagian email tidak terisi ', () =>{
      it('Membuka Web Layanan Donoh Darah', () => {
          cy.visit('http://localhost:8000/')
      })
  
      it('Login', () => {
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control')
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.wait(2000)
      })
  })

  context('TC-LOGIN-005 - Form pada bagian password tidak terisi ', () =>{
      it('Membuka Web Layanan Donoh Darah', () => {
          cy.visit('http://localhost:8000/')
      })
  
      it('Login', () => {
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control')
        cy.get('.btn-primary').click()
        cy.wait(2000)
      })
  })
})
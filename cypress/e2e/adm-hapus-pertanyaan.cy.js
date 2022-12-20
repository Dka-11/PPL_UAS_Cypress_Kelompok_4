describe('Menguji Fitur hapus pertanyaan', () => {
    const email = "admin@gmail.com";
    const password = "123456";
    context('TC_HP_001 - Klik button "Hapus" untuk menghapus pertanyaan', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Hapus Pertanyaan', () => {
            cy.get(':nth-child(8) > a').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(4) > a').click()
            cy.get('[href="http://localhost:8000/admin/delete/support/1"]').click()
            cy.wait(2000)
        })
    })
})
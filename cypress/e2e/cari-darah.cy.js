describe('Menguji fitur search pada halaman Daftar Pendonor', () => {
    context('TC_SEARCH_001 - Mencari Gol Darah AB +', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Cari Golongan Darah', () => {
            cy.get(':nth-child(2) > a').click()
            cy.get('.form-control').select('AB +').should('have.value', 'AB +')
            cy.wait(1000)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_SEARCH_002 - Mencari Gol Darah AB -', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Cari Golongan Darah', () => {
            cy.get(':nth-child(2) > a').click()
            cy.get('.form-control').select('AB -').should('have.value', 'AB -')
            cy.wait(1000)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_SEARCH_003 - Mencari Gol Darah A +', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Cari Golongan Darah', () => {
            cy.get(':nth-child(2) > a').click()
            cy.get('.form-control').select('A +').should('have.value', 'A +')
            cy.wait(2000)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_SEARCH_004 - Mencari Gol Darah A -', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Cari Golongan Darah', () => {
            cy.get(':nth-child(2) > a').click()
            cy.get('.form-control').select('A -').should('have.value', 'A -')
            cy.wait(2000)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_SEARCH_005 - Mencari Gol Darah B +', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Cari Golongan Darah', () => {
            cy.get(':nth-child(2) > a').click()
            cy.get('.form-control').select('B +').should('have.value', 'B +')
            cy.wait(2000)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_SEARCH_006 - Mencari Gol Darah B -', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Cari Golongan Darah', () => {
            cy.get(':nth-child(2) > a').click()
            cy.get('.form-control').select('B -').should('have.value', 'B -')
            cy.wait(2000)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_SEARCH_007 - Mencari Gol Darah O +', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Cari Golongan Darah', () => {
            cy.get(':nth-child(2) > a').click()
            cy.get('.form-control').select('O +').should('have.value', 'O +')
            cy.wait(2000)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_SEARCH_08 - Mencari Gol Darah O -', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Cari Golongan Darah', () => {
            cy.get(':nth-child(2) > a').click()
            cy.get('.form-control').select('O -').should('have.value', 'O -')
            cy.wait(2000)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })
})
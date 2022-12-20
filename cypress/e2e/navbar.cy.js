describe('Menguji fungsionalitas button pada navigation bar', () => {
    context('TC_NAVBAR_001 - klik button "Daftar Pendonor" pada navbar', () =>{
        beforeEach(()=>{
            cy.viewport(1280, 720)
        })

        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Menuju halaman Daftar Pendonor', () => {
            cy.get(':nth-child(2) > a').click()
            cy.wait(2000)
        })
    })

    context('TC_NAVBAR_002 - klik button "Jadwal" pada navbar', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Menuju halaman Jadwal', () => {
            cy.get(':nth-child(3) > a').click()
            cy.wait(2000)
        })
    })

    context('TC_NAVBAR_003 - klik button "Bank Darah" pada navbar', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Menuju halaman Bank Darah', () => {
            cy.get(':nth-child(4) > a').click()
            cy.wait(2000)
        })
    })

    context('TC_NAVBAR_004 - klik button "Formulir" pada navbar', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Menuju halaman Formulir', () => {
            cy.get(':nth-child(5) > a').click()
            cy.wait(2000)
        })
    })

    context('TC_NAVBAR_005 - klik button "Kontak" pada navbar', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Menuju halaman Kontak', () => {
            cy.get(':nth-child(6) > a').click()
            cy.wait(2000)
        })
    })

    context('TC_NAVBAR_006 - klik button "Tentang" pada navbar', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Menuju halaman Tentang', () => {
            cy.get(':nth-child(7) > a').click()
            cy.wait(2000)
        })
    })

    context('TC_NAVBAR_007 - klik button "Login" pada navbar', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Menuju halaman Login', () => {
            cy.get(':nth-child(8) > a').click()
            cy.wait(2000)
        })
    })

    context('TC_NAVBAR_008 - klik button "Register" pada navbar', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Menuju halaman Register', () => {
            cy.get(':nth-child(9) > a').click()
            cy.wait(2000)
        })
    })
})
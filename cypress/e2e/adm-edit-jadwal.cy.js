describe('Menguji fitur admin edit jadwal', () => {
    const email = "admin@gmail.com";
    const password = "123456";
    const namaBaru = "Karsa Husada"
    const alamatBaru = "Jalan Kartini"
    const kecBaru = "Batu"
    const kotaBaru = "Malang"
    const mulaiBaru = "2022-12-25 13:10:00"
    const selesaiBaru = "2022-12-25 16:00:00"

    context('TC_EJ_001 - Tidak mengedit form inputan', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Edit Form', () => {
            cy.get(':nth-child(8) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(3) > a').click()
            cy.get('[href="http://localhost:8000/admin/camp/edit/1"]').click()
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_EJ_002 - Mengubah Form Inputan pada bagian Nama Rumah Sakit', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Edit Form', () => {
            cy.get(':nth-child(8) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(3) > a').click()
            cy.get('[href="http://localhost:8000/admin/camp/edit/1"]').click()
            cy.get(':nth-child(2) > .form-control').clear()
            cy.get(':nth-child(2) > .form-control').type(namaBaru)
            cy.get(':nth-child(3) > .form-control')
            cy.get(':nth-child(4) > .form-control')
            cy.get(':nth-child(5) > .form-control')
            cy.get(':nth-child(6) > .form-control')
            cy.get(':nth-child(7) > .form-control')
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_EJ_003 - Mengubah form inputan pada bagian alamat', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Edit Form', () => {
            cy.get(':nth-child(8) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(3) > a').click()
            cy.get('[href="http://localhost:8000/admin/camp/edit/1"]').click()
            cy.get(':nth-child(2) > .form-control')
            cy.get(':nth-child(3) > .form-control').clear()
            cy.get(':nth-child(3) > .form-control').type(alamatBaru)
            cy.get(':nth-child(4) > .form-control')
            cy.get(':nth-child(5) > .form-control')
            cy.get(':nth-child(6) > .form-control')
            cy.get(':nth-child(7) > .form-control')
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })
    
    context('TC_EJ_004 - Mengubah form inputan pada bagian kecamatan', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Edit Form', () => {
            cy.get(':nth-child(8) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(3) > a').click()
            cy.get('[href="http://localhost:8000/admin/camp/edit/1"]').click()
            cy.get(':nth-child(2) > .form-control')
            cy.get(':nth-child(3) > .form-control')
            cy.get(':nth-child(4) > .form-control').clear()
            cy.get(':nth-child(4) > .form-control').type(kecBaru)
            cy.get(':nth-child(5) > .form-control')
            cy.get(':nth-child(6) > .form-control')
            cy.get(':nth-child(7) > .form-control')
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_EJ_005 - Mengubah form inputan pada kota', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Edit Form', () => {
            cy.get(':nth-child(8) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(3) > a').click()
            cy.get('[href="http://localhost:8000/admin/camp/edit/1"]').click()
            cy.get(':nth-child(2) > .form-control')
            cy.get(':nth-child(3) > .form-control')
            cy.get(':nth-child(4) > .form-control')
            cy.get(':nth-child(5) > .form-control').clear()
            cy.get(':nth-child(5) > .form-control').type(kotaBaru)
            cy.get(':nth-child(6) > .form-control')
            cy.get(':nth-child(7) > .form-control')
            cy.get('.btn').click()
            cy.wait(2000)
    
        })
    })

    context('TC_EJ_006 - Mengubah form inputan pada mulai donor', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Edit Form', () => {
            cy.get(':nth-child(8) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(3) > a').click()
            cy.get('[href="http://localhost:8000/admin/camp/edit/1"]').click()
            cy.get(':nth-child(2) > .form-control')
            cy.get(':nth-child(3) > .form-control')
            cy.get(':nth-child(4) > .form-control')
            cy.get(':nth-child(5) > .form-control')
            cy.get(':nth-child(6) > .form-control').clear()
            cy.get(':nth-child(6) > .form-control').type(mulaiBaru)
            cy.get(':nth-child(7) > .form-control')
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_EJ_007 - Mengubah form inputan pada selesai donor', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Edit Form', () => {
            cy.get(':nth-child(8) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(3) > a').click()
            cy.get('[href="http://localhost:8000/admin/camp/edit/1"]').click()
            cy.get(':nth-child(2) > .form-control')
            cy.get(':nth-child(3) > .form-control')
            cy.get(':nth-child(4) > .form-control')
            cy.get(':nth-child(5) > .form-control')
            cy.get(':nth-child(6) > .form-control')
            cy.get(':nth-child(7) > .form-control').clear()
            cy.get(':nth-child(7) > .form-control').type(selesaiBaru)
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_EJ_008 - Menghapus semua form inputan', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Edit Form', () => {
            cy.get(':nth-child(8) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
            cy.get('.btn-primary').click()
            cy.get('.dropdown-toggle').click()
            cy.get('.dropdown-menu > :nth-child(4) > a').click()
            cy.get('.navbar-right > :nth-child(3) > a').click()
            cy.get('[href="http://localhost:8000/admin/camp/edit/1"]').click()
            cy.get(':nth-child(2) > .form-control').clear()
            cy.get(':nth-child(3) > .form-control').clear()
            cy.get(':nth-child(4) > .form-control').clear()
            cy.get(':nth-child(5) > .form-control').clear()
            cy.get(':nth-child(6) > .form-control').clear()
            cy.get(':nth-child(7) > .form-control').clear()
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })
})
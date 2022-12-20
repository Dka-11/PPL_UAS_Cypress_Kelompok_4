describe('Menguji fungsionalitas fitur register', () => {
    const nama = "Adika";
    const umur = "20";
    const bb = "61";
    const telp = "0813573706"
    const alamat = "Jalan Munif No 61"
    const kota = "Kota Batu"
    const kecamatan = "Batu"
    const kelurahan = "Sisir"
    const email = "adika123@gmail.com"
    const email2 = "adikaahmad15@gmail.com"
    const password = "123456"
    const password2 = "1234"
    const donor = "2022-06-11 13:00"

    context('TC_REG_001 - Form inputan terisi semua dengan baik dan benar', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })
    
    context('TC_REG_002 - Semua form inputan kosong', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get('.btn').click()
            cy.wait(2000)
        })
    })

    context('TC_REG_003 - Form inputan pada bagian umur tidak terisi', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_004 - Form inputan pada bagian berat badan tidak terisi', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_005 - Form inputan pada bagian nomor handphone tidak terisi', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })
    
    context('TC_REG_006 - Form inputan pada bagian alamat tidak terisi', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
        
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email2)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_007 - Form inputan pada bagian kota tidak terisi', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_008 - Form inputan pada bagian kecamatan tidak terisi', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_009 - Form inputan pada bagian kelurahan tidak terisi', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_010 - Form inputan pada bagian email tidak boleh sama', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_011 - Form inputan pada bagian password terisi kurang dari 6 karakter', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email2)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password2)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password2)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_012 - Form inputan pada bagian ulangi password tidak sama', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email2)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password2)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('#datetimepicker').type(donor)
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })

    context('TC_REG_013 - Form inputan pada bagian terakhir donor tidak terisi', () =>{
        it('Membuka Web Layanan Donoh Darah', () => {
            cy.visit('http://localhost:8000/')
        })
    
        it('Mengisi semua form inputan', () => {
            cy.get(':nth-child(9) > a').click()
            cy.get(':nth-child(2) > .col-md-6 > .form-control').type(nama)
            cy.get('#age').type(umur)
            cy.get(':nth-child(4) > .col-md-6 > .form-control').select('Laki Laki').should('have.value', 'M')
            cy.get('#weight').type(bb)
            cy.get(':nth-child(6) > .col-md-6 > .form-control').select('B +').should('have.value', 'B +')
            cy.get('#phone').type(telp)
            cy.get(':nth-child(8) > .col-md-6 > .form-control').select('No').should('have.value', '0')
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type(alamat)
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type(kota)
            cy.get(':nth-child(11) > .col-md-6 > .form-control').type(kecamatan)
            cy.get(':nth-child(12) > .col-md-6 > .form-control').type(kelurahan)
            cy.get(':nth-child(13) > .col-md-6 > .form-control').type(email2)
            cy.get(':nth-child(14) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(15) > .col-md-6 > .form-control').type(password)
            cy.get(':nth-child(16) > .col-md-6 > .form-control').select('Ya').should('have.value', '1')
            cy.get('.btn').click({ force: true})
            cy.clearCookies()
            cy.wait(2000)
        })
    })
})
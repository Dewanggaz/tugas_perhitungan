let Gaji = 5000000
let Bonus1 = 200000
let Bonus2 =  500000
let Telat =  200000

alert("HALO SELAMAT DATANG")
let kehadiran = prompt("Kamu masuk berapa hari dalam sebulan ?")
let izin = prompt("Kamu izin berapa kali sebulan ?")
let masuk = (kehadiran*Bonus1)
let massuk2 = (kehadiran*Bonus1+Bonus2)
let masuk3  = (kehadiran*Bonus1+Bonus1+Bonus2)
let sakit = (izin*Telat)


if(kehadiran <= 20){
    let Hasil1 =  Gaji + masuk;
    alert(`Gaji kamu bulan ini sebesar Rp${Hasil1}`)

    if (izin >= 1) {

    alert(`Gajimu dipotong Rp ${Hasil1 - sakit}`)
}
}else if(kehadiran == 21){

let Hasil2 = Gaji + massuk2

    alert(`Gaji kamu bulan ini mendapatkan bonus Rp${Hasil2}`);
    if (izin >= 1) {

    alert(`Gajimu dipotong Rp ${Hasil2 - sakit}`)
    }
}else if (kehadiran >= 22) {
    let Hasil3 = Gaji + masuk3
    alert(`Gajimu adalah Rp ${Hasil3} `)
    if (izin >= 1) {

        alert(`Gajimu dipotong Rp ${Hasil3 - sakit}`)
    }
}
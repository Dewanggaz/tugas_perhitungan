let penghasilan = 5000000
let i = 1;
let kehadirann;

do{
    let bonus = 0
    if(i > 20){
        bonus = 500000 
    }
    let hasil=penghasilan + 200000*i + bonus
    console.log(`ini gajimu ke ${i}berjumlah ${hasil}`);

    kehadirann = confirm('apa kamu terlambat hari ini')
    if(kehadirann){
        hasil -= 2000000
        console.log(`anda terkena denda sebesar Rp.2JT ${hasil} `);
        break
    }
    
    i++
}while (i <= 31) 
    

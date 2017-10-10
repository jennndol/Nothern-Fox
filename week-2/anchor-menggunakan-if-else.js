var nama, peran;

nama = 'C2';

console.log("Selamat datang di dunia Proxytia, " + nama);

if (nama){
    if (nama == 'C1'){
        peran = 'Ksatria';
        console.log("Halo Ksatria, " + nama + ', kamu dapat menyerang dengan senjatamu!');
    } else if(nama == 'C2'){
        peran = 'Tabib';
        console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
    } else if(nama == 'C3'){
        peran = 'Penyihir';
        console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
    }
}
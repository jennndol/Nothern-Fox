var nama = '', peran = '';
var tahunlahir = 2000;
var umur = 2017 - tahunlahir;
var playerHealth = tahunlahir * Math.random()
var monsterHealth = tahunlahir * Math.random()
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

// nama = 'C1';

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
    };
}
else {
    peran = 'Kacung';
};

for(i=1; i<=tahunlahir;i++){
    if (i%umur==0){
        console.log(peran + ' ' + nama + ' menyerang monster!');
        monsterHealth = monsterHealth - umur;
    } else if(i%kodeMonster==0){
        console.log('monster menyerang ' + peran + ' ' + nama + '!');
        playerHealth = playerHealth - kodeMonster;
    } else if((i%umur==0) && (i%kodeMonster==0)){
        console.log('Health keduanya bertambah');
        playerHealth = playerHealth + kodeMonster;
        monsterHealth = monsterHealth + umur;
    }
};

if (playerHealth>monsterHealth){
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
} else{
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
};
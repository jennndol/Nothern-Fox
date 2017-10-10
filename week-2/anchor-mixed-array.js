function dataHandling2(input){
    input.splice(1,2);
    input.splice(1,0, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4,1);
    input.splice(4,0, "Pria", "SMA Internasional Metro");
};

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
console.log(input);

var tanggal = input[3];
tanggal = tanggal.split("/");
var angka = tanggal[1];

var bulan = '';

if (angka==01){
    bulan = 'Januari';
} else if(angka==02){
    bulan = 'Februari';
} else if(angka==03){
    bulan = 'Maret';
} else if(angka==04){
    bulan = 'April';
} else if(angka==05){
    bulan = 'Mei';
} else if(angka==06){
    bulan = 'Juni';
} else if(angka==07){
    bulan = 'Juli';
} else if(angka==08){
    bulan = 'Agustus';
} else if(angka==09){
    bulan = 'September';
} else if(angka==10){
    bulan = 'Oktober';
} else if(angka==11){
    bulan = 'November';
} else if(angka==12){
    bulan = 'Desember';
}

console.log(bulan);

tanggal.sort(function(value1, value2) { return Number(value1) < Number(value2) });
console.log(tanggal);

console.log(tanggal.join("-")); 

nama = input[1];
console.log(nama.slice(0,14));
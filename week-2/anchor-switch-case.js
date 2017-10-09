/**
 * CONTOH
 * TTL : 21 MEI 1998
 * var tanggal = 28;
 * var bulan   = 'Oktober';
 * var tahun   = 1928;
 */
var tanggal = 8; // assign nilai variabel tanggal disini!
var bulan = 'Februari'; // assign nilai variabel bulan disini! (dengan huruf awal kapital)
var tahun = 1992; // assign nilai variabel tahun disini!

var kodeBulan = 0;

switch (bulan) {
  case 'Januari':
  case 'Oktober':
    kodeBulan = 0;
    break;
  case 'Mei':
    kodeBulan = 1;
    break;
  case 'Agustus':
    kodeBulan = 2;
    break;
  case 'Februari':
  case 'Maret':
  case 'November':
    kodeBulan = 3;
    break;
  case 'Juni':
    kodeBulan = 4;
    break;
  case 'September':
  case 'Desember':
    kodeBulan = 5;
    break;
  default:
    kodeBulan = 6;
}

//Lanjutkan kode dari sini
var tahunLahir = tahun % 100;
console.log(tahunLahir);
var tahunLahirBagi4 = Math.floor(tahun/4);
console.log(tahunLahirBagi4);
var jawaban = (tahunLahir + tahunLahirBagi4 + tanggal + kodeBulan) % 7;
console.log(jawaban);
var tebakan;
switch(jawaban) {
    case 0:   { 
        tebakan = "Minggu"; break;
    }
    case 1:   { 
        tebakan = "Senin"; break; }
    case 2:   { 
        tebakan = "Selasa"; break; 
    }
    case 3:   { 
        tebakan = "Rabu"; break; 
    }
    case 4:   { 
        tebakan = "Kamis"; break; 
    }
    case 5:   { 
        tebakan = "Jumat"; break; 
    }
    case 6:   { 
        tebakan = "Sabtu"; break; 
    }
  }
console.log(tebakan);
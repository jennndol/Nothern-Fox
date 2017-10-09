/**
 * CONTOH
 * TTL : 21 MEI 1998
 * var tanggal = 28;
 * var bulan   = 'Oktober';
 * var tahun   = 1928;
 */
var tanggal; // assign nilai variabel tanggal disini!
var bulan; // assign nilai variabel bulan disini! (dengan huruf awal kapital)
var tahun; // assign nilai variabel tahun disini!

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

console.log(tebakan);
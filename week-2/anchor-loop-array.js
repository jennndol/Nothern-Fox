var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(persons){
    var messages = [];
    for(var i=0; i<persons.length; i++){
        var person = persons [i];
        messages += "\n\nNomor ID : " + input[i][0] + "\nNama Lengkap:  " + input[i][1] + "\nTTL:  " + input[i][2] + " " + input[i][3] + "\nHobi : " + input[i][4];
    }
    return messages;
}

var hasil = dataHandling(input);

console.log(hasil);
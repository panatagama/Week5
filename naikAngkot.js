function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var tamp = []

  for (var i = 0; i < arrPenumpang.length; i++) {
    var trayek = {
      penumpang: '',
      naikDari: '',
      tujuan: '',
      bayar: 0,
    }
    for (var j = 0; j < arrPenumpang.length; j++) {
      trayek.penumpang = arrPenumpang[i][0]
      trayek.naikDari = arrPenumpang[i][1]
      trayek.tujuan = arrPenumpang[i][2]
    }
    var indexAwal = i
    var indexAkhir = j
    var awal = arrPenumpang[i][1]
    var akhir = arrPenumpang[i][2]
    var jarak = 0
    for (var k = 0; k < rute.length; k++) {
      var jarak = 0       
      if (awal === rute[k]) {
        indexAwal = k
      }
      if (akhir === rute[k]) {
        indexAkhir = k
      }
      jarak = indexAkhir - indexAwal
    } 
    trayek.bayar = Math.abs(jarak * 2000)
    tamp.push(trayek)
  }
  return tamp
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
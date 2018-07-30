function highestScore (students) {

  if (students[0] === undefined) {
    return {}
  }
  // Code disini
  var kelas = {}
  for (var i = 0; i < students.length; i++) {
    if (kelas[students[i].class] === undefined) {
      kelas[students[i].class] = {}

      var kelasKeys = Object.keys(kelas)
      for (var j = 0; j < kelasKeys.length; j++) {
        if (students[i].class === kelasKeys[j]) {
          kelas[kelasKeys[j]].name = students[i].name
          kelas[kelasKeys[j]].score = students[i].score
        }   
      }

    } else {
    var kelasKeys = Object.keys(kelas)
      for (var j = 0; j < kelasKeys.length; j++) {
        if (students[i].class === kelasKeys[j]) {
          if (students[i].score > kelas[kelasKeys[j]].score || kelas[kelasKeys[j]].score === undefined) {
            kelas[kelasKeys[j]].name = students[i].name
            kelas[kelasKeys[j]].score = students[i].score

          } 
        }   
      }

  }
  }  
  return kelas
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

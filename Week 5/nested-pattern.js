//0 1 0 1
//1 0 1 0
//0 1 0 1
//1 0 1 0

for (var i = 0; i < 4; i++) {
  var row = "";
  for (var j = 0; j < 4; j++) {
    if (i % 2 === 0) {
      // par
      //0 1 0 1
      row = row + (j % 2 === 0 ? "0" : "1") + " ";
    } else {
      // impar
      //1 0 1 0
      row = row + (j % 2 === 0 ? "1" : "0") + " ";
    }
  }

  console.log(row);
}

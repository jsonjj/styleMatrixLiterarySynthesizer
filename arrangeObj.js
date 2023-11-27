function objToAry(obj) {
  var arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

function arrangeObj(obj) {
  var arr = objToAry(obj);
  var fin = [];
  for (let i = 0; i < arr[0].length; i++) {
    var tempAry = [];
    for (let j = 0; j < arr.length; j++) {
      tempAry.push(arr[j][i]);
    }
    fin.push(tempAry);
  }
  return fin;
}

module.exports = { arrangeObj };

function printObject(obj, tab) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(tab + key + ': ' + JSON.stringify(obj[key]) + '\n');
    }
  }
}

function printObjectArray(arr, tab) {
  for (let i = 0; i < arr.length; i++) {
    console.log('  ' + (i + 1) + ': \n');
    printObject(arr[i], tab);
  }
}

function printArray(arr) {
  if (typeof arr[0] === 'string') {
    printStringArray(arr);
  } else {
    printObjectArray(arr, '    ');
  }
}

function printStringArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('  ' + (i + 1) + ': ' + arr[i].substring(0, 45) + '\n');
  }
}

function printTopFive(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ': \n  ');
      printArray(obj[key]);
    }
  }
}

module.exports = { printTopFive };
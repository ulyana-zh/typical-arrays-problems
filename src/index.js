
exports.min = function min (array) {
    if (array == undefined || array.length === 0) {
       return 0;
    }
    function compareNumber (a,b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
        }
       array = array.sort(compareNumber);
       return array[0];
}

exports.max = function max (array) {
    if (array == undefined || array.length === 0) {
        return 0;
    }
    function compareNumber (a,b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
        }
       array = array.sort(compareNumber);
       return array[array.length - 1]; 
}

exports.avg = function avg (array) {
    if (array == undefined || array.length === 0) {
        return 0;
    }
  let total = 0;
  for(let i=0; i < array.length; i++) {
    total += array[i];
  }
  return avgNumber = total/array.length;
}

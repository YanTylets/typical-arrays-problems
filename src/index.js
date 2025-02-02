
  exports.min = function min(array) {
  if (array === undefined || array.length === 0) {
      return 0;
  };
  let minNum = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < minNum) {
        minNum = array[i];
    };
  };
  return minNum;
};
exports.max = function max (array) {
   if (array === undefined || array.length === 0) {
       return 0;
   };
   let maxNum = array[0];
   for (i = 1; i < array.length; i++) {
       if (array[i] > maxNum) {
           maxNum = array[i];
       };
   };
   return maxNum;
};

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
      return 0;
  };
  let sum = 0;
  for (i = 0; i < array.length; i++) {
      sum += array[i];
  }
  return sum/array.length;
};

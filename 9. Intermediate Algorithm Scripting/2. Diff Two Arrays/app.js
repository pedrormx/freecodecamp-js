function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }
console.log([1,2,3], [4,5,5,7, 1])
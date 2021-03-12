function findElement(arr, func) {
    return arr.length && !func(arr[0]) 
      ? findElement(arr.slice(1), func)
      : arr[0];
  }
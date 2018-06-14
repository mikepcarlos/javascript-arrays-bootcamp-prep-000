var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(arr, elmt) {
    return [elmt, ...arr];
  }
  
  function destructivelyAddElementToBeginningOfArray(arr, elmt) {
    arr.unshift(elmt);
    return arr;
  }
  
  function addElementToEndOfArray(arr, elmt) {
    return [...arr, elmt];
  }
  
  function destructivelyAddElementToEndOfArray(arr, elmt) {
    arr.push(elmt);
    return arr;
  }
  
  function accessElementInArray(arr, index) {
    return arr[index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(arr) {
    arr.shift();
    return arr;
  }
  
  function removeElementFromBeginningOfArray(arr) {
    return arr.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(arr) {
    arr.pop();
    return arr;
  }
  
  function removeElementFromEndOfArray(arr) {
    return arr.slice(0, arr.length - 1);
    }
  
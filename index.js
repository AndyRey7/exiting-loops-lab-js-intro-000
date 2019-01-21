function breakOut(array, changeValue, stopValue) {
  
}

const keepGoing = (array, changeValue, skipValue) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = changeValue
    if (array[i] >= skipValue) {
    continue;
  }
 }
 return array
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }

  return null
}
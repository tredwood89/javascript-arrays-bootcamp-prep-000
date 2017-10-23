var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
   array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element) {
    array.unshift (element)
  return array
}

function addElementToEndOfArray(array, element) {
    array = [...array, element ]
  return array
}

function destructivelyAddElementToEndOfArray (array, element) {
    array.push (element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
   array.shift()
  return array
}

function removeElementFromBeginningOfArray (array){
   array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
   array = array.slice (0, array.length - 1)
  return array
=======
  var x = array
      x = [element, ...x]
  return x
}

function destructivelyAddElementToBeginningOfArray (array, element){
  var x = array
      x = x.unshift (element)
  return x
>>>>>>> c17a72a3a67ad01285a7b2d8ed392deea88fac8e
}

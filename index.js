//Code your solution here

function getFirstSelector(selector) {
  const element = document.querySelector(selector)
  return element 
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

/// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()

function increaseRankBy(n) {
  
  const array = document.querySelectorAll('.ranked-list') // find the elements with a class of ranked-list
  
  for (let key = 0, size = array.length; key < size; key++) { // start with the key being 0, define the size of the array, do smth when the key is less than the size, add to key each time
    
    let children = array[key].children // defines variable called children that holds each of the children within our array
    
    for (let index = 0, length = children.length; index < length; index++) {
      children[index].innerHTML = parseInt(children[index].innerHTML) + n
    }
  }
}

function deepestChild() {
  let element = document.getElementById('grand-node') // find the element with an id of #grand-node
  let child = element.querySelectorAll('div') // find the items within grand node

  return child[3] // return the final div in the array
}







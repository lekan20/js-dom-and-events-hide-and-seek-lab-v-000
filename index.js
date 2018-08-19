// I'll make the function getFirstSelector()
// I need to google the method to grab the first selector
// return first element that matches the selector
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(selector) {
  // Pulls a .target out of #nested
  // How do I pull .target? Is there a method the DOM has that does it or should I use querySelector?
  // # means ID
  // . is for a class
  return document.querySelector('#nested .target');
}

function deepestChild() {
  // I tested the return based off of the test
  // returns the most deeply nested child in #grand-node
  // grand-node is the class and the amount of divs added are the amount of divs down the tree
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  // increases ranks in .ranked-list by n
  // I should use parseInt()
  // parseInt(string, radix
  // .querySelectorAll returns all returns a node list - what's a node list? I'm guessing a list of node - lol you can't define a word with the word
  // the nodes list is the values between and including their tags
  // I need to iterate over the .ranked-list to return the specific value
  const rankedList = document.querySelectorAll('.ranked-list li')
  // I save the returned array from querying the .ranked-list class
  for (let i = 0; i < rankedList.length; i++) {
    // I iterate through the array
    let rankedListValue = parseInt(rankedList[i].innerHTML);
    // I parse the returned string to turn it into an integer and save that value
    rankedList[i].innerHTML = rankedListValue + n;
    // I add three to the nodes value
  }
}

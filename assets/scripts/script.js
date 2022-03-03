// list of all specific characters
let characters = "1234567890!@#$%^&*()_+{}|<>,.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

// shuffle characters in array as extra level of security
const shuffle = (array, rate) => {
  // if the rate is zero, return
  if (rate === 0) {
    return array;
  }

  // get a random index of the array passed through
  let randIndex = Math.floor(Math.random() * characters.length);

  // split the array at the random index
  let [first, last] = [array.slice(0, randIndex), array.slice(randIndex + 1)];

  // add character back to the front of the array and concat the first and last arrays
  // recall shuffle
  return shuffle(array[randIndex].concat(first.concat(last)), rate - 1)
}

const array = shuffle(characters, 500);

console.log(array);
// list of all specific characters
// adding twice as many special characters and numbers so there is a fair ratio of special characters, numbers, and letters 
let characters = "1234567890!@#$%^&*()_+{}|<>,.1234567890!@#$%^&*()_+{}|<>,.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

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

// const array = shuffle(characters, 500);

// generate password function
const generatePassword = array => {

  // empty password string
  let password = "";

  for (let i = 0; i < 18; i++) {
    // append to the string until we reach 18 characters
    password += array[Math.floor(Math.random() * array.length)];
  }

  // return the password
  return password;
}

console.log(generatePassword(shuffle(characters, 10000)));
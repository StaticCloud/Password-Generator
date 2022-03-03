const generate = document.querySelector('#generate');

// list of all specific characters
let characters = "1234567890!@#$%^&*()_+{}|<>,.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

// shuffle array given a rate (higher rate = more shuffle() calls)
const shuffle = (array, rate) => {
  // if the rate is zero, return
  if (rate === 0) {
    return array;
  }

  // get a random index of the array passed through
  let randIndex = Math.floor(Math.random() * array.length);

  // split the array at the random index...
  let [first, last] = [array.slice(0, randIndex), array.slice(randIndex + 1)];

  // ...then append the first and last half of the array to the random character
  let newArray = array[randIndex].concat(first.concat(last))

  // recall shuffle with new array and reduced rate
  return shuffle(newArray, rate - 1)
}

const array = shuffle(characters, 500);
console.log(array);

// generate password function
const generatePassword = array => {

  // empty password string
  let password = "";

  for (let i = 0; i < 20; i++) {
    // append to the string until we reach 18 characters
    password += array[Math.floor(Math.random() * array.length)];
  }

  // return the password
  return password;
}

generate.addEventListener('click', () => {
  // get the shuffle rate from the user
  const rate = document.querySelector('input[id="rate"]').value.trim();
  // if rate has a value less than 10000 and more than 0
  if (rate) {
    if ((rate <= 10000) && (rate > 0)) {
      // create the password
      const password = generatePassword(shuffle(characters, rate))
      // display it to the user
      document.querySelector('input[id="password"]').value = password;
    }
  }
})
// easy

/**
 * Gets an array and return the smallest number.
 * @param {Array} array every element of it.
 * @returns {Number} whether arr includes only element from this type.
 * @author Hristiyan Fachikov
 */
const min = (array) => {
  let minNumber = Number. MAX_VALUE;
  for (const el of array) {
    if (el < minNumber) {
      minNumber = el;
    }
  }
  return minNumber;
};

const sum = (array) => {
  // TODO;
};

// medium

const average = (array) => {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    average = sum / array.length;
  }
  return average;
  // DONE
};

const pow = (number, power) => {
  // TODO
};

// hard

const isPrime = (number) => {
  // TODO
};

const swapWholeAndRemainder = (number) => {
  // TODO
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };

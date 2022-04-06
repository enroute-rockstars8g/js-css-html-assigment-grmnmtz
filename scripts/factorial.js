const factorialInput = document.querySelector('#factorial-input')
const factorialButton = document.querySelector('#factorial-button')
const factorialResult = document.querySelector('#factorial-result')
factorialButton.addEventListener('click', handleFactorialSubmit)

/**
 *
 * Given a positive integer, returns the factorial of the given number, returns error
 * if the given number is not a valid positive number.
 *
 * @param {*} number
 * @returns The factorial of the given number
 */
function calculateFactorial(number) {
  if (number < 0) return 'Error'
  if (number === 0) return 1

  let result = 1

  for (let i = 1; i < number; i++) {
    let temporal = result * (i + 1)
    result = temporal
  }

  return result
}

/**
 *
 * When the submit button is clicked:
 * Prevents the default submit behaviour,
 * then assigns the result of the calculateFactorial function to a result constant.
 *
 * Finally, it modifies the factorialResult DOM Node by appending the result constant as text content.
 *
 * @param {*} event
 */
function handleFactorialSubmit(event) {
  event.preventDefault()
  if (factorialInput.value) {
    const result = calculateFactorial(Number(factorialInput.value))
    factorialResult.textContent = `${result} \u{1F32E} taquitos.`
    return
  } else {
    factorialResult.textContent = 'You need to enter a value! Try again.'
    return
  }
}

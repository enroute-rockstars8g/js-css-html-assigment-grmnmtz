const fibonacciInput = document.querySelector('#fibonacci-input')
const fibonacciButton = document.querySelector('#fibonacci-button')
const fibonacciResult = document.querySelector('#fibonacci-result')
fibonacciButton.addEventListener('click', handleFibonacciSubmit)

/**
 *
 * Given a positive valid integer position return the number that corresponds to the given position
 * in the fibonacci sequence.
 *
 * @param {*} position
 * @returns The number that corresponds to the position in the Fibonacci Sequence.
 */
function calculateFibonacci(position) {
  if (position < 0) return 'Error'
  if (position === 0) return 0

  let prev = 0
  let current = 1

  for (let i = 1; i < position; i++) {
    let temporal = current + prev
    prev = current
    current = temporal
  }

  return current
}

/**
 *
 * When the submit button is clicked:
 * Prevents the default submit behaviour,
 * then assigns the result of the calculateFibonacci function to a result constant.
 *
 * Finally, it modifies the fibonacciResult DOM Node by appending the result constant as text content.
 *
 * @param {*} event
 */
function handleFibonacciSubmit(event) {
  event.preventDefault()
  const result = calculateFibonacci(Number(fibonacciInput.value))
  fibonacciResult.textContent = result
}

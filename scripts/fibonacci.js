const fibonacciInput = document.querySelector('#fibonacci-input')
const fibonacciButton = document.querySelector('#fibonacci-button')

function handleSubmit(event) {
  event.preventDefault()
  console.log(event.target)
  console.log(typeof Number(fibonacciButton.value))
}

fibonacciButton.addEventListener('click', handleSubmit)

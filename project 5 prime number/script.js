document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input value
    let number = parseInt(document.getElementById('numberInput').value);

    // Check if the number is prime
    let isPrime = true;
    if (number === 1) {
        isPrime = false;
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }

    // Display the result
    let resultElement = document.getElementById('result');
    if (isPrime) {
        resultElement.textContent = `${number} is a prime number.`;
    } else {
        resultElement.textContent = `${number} is not a prime number.`;
    }
});

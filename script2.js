function calculateFee() {
    const age = parseInt(document.getElementById('age').value);
    const feeField = document.getElementById('fee');

    // Ensure the age is a valid number and not negative
    if (!isNaN(age) && age >= 0) {
        let fee = 0;

        if (age <= 14) { // This condition now includes age 14
            fee = 300;
        } else if (age >= 15) {
            fee = 600;
        }

        feeField.value = `Rs. ${fee}`;
    } else {
        feeField.value = ''; // Clear the fee if the age is invalid or not entered
        if (age < 0) {
            alert('Please enter a valid age that is not negative.');
        }
    }
}

// Attach the calculateFee function to the 'input' event on the age field
document.getElementById('age').addEventListener('input', calculateFee);

// Handle the form submission to display the confirmation message
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const workshop = document.getElementById('workshop').value;
    const fee = document.getElementById('fee').value;

    // Check if the fee has been calculated and is not empty
    if (fee) {
        const confirmationMessage = `
            Thank you, ${name}, for registering for ${workshop}. 
            The fee for this workshop is ${fee}. 
            Please follow the payment instructions sent to your email.
        `;

        document.getElementById('confirmationMessage').innerText = confirmationMessage;
    } else {
        alert('Please enter a valid age to calculate the fee.');
    }
});

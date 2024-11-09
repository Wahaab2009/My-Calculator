// Function to insert value into the display
function insert(value) {
    const output = document.getElementById('output');
    output.value += value;
}

// Function to clear the entire display
function clearDisplay() {
    document.getElementById('output').value = '';
}

// Function to delete the last character
function deleteLast() {
    const output = document.getElementById('output');
    output.value = output.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    const output = document.getElementById('output');
    try {
        let expression = output.value
            .replace(/sin
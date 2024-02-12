// Helper functions start


const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
};


// Helper functions end



// Function that calculates based on selected operator 

const calculate = () => {
    try {
        const input1 = parseFloat(document.getElementById("input1").value);
        const input2 = parseFloat(document.getElementById("input2").value);
        const operator = document.getElementById("operator").value;

        let result;
        
        switch (operator) {
            case "+":
                result = add(input1, input2);
                break;
            case "-":
                result = subtract(input1, input2);
                break;
            case "*":
                result = multiply(input1, input2);
                break;
            case "/":
                result = divide(input1, input2);
                break;
            default:
                throw new Error("Invalid operator");
        }

        document.getElementById("result").textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById("result").textContent = `Error: ${error.message}`;
    }
};

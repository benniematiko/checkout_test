// const headphones = 59.99;
// const case6 = 12.50;
// const cable = 8.99;
// const shipping = 5.99;
// const tax = 0.08;

// // 1. Calculate the actual subtotal first
// const subtotal = headphones + case6 + cable;

// // 2. Use a ternary operator to assign the value directly to total
// const total = subtotal > 70 
//   ? (subtotal * tax) + subtotal + shipping 
//   : (subtotal * tax) + subtotal;

// // 3. Log the final total
// console.log(total.toFixed(2)); // Outputs: 93.99


function validatePassword(password) {
    const errors = [];

    // Rule 1: At least 8 characters
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    // Rule 2: Contains at least 1 number
    if (!/\d/.test(password)) {
        errors.push("Password must contain at least 1 number.");
    }

    // Rule 3: Contains at least 1 uppercase letter
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least 1 uppercase letter.");
    }

    // Rule 4: Cannot contain spaces
    if (/\s/.test(password)) {
        errors.push("Password cannot contain spaces.");
    }

    return {
        valid: errors.length === 0 ? true : false,
        errors: errors
    };
}

// 1. You MUST declare the variable and give it a string value first:
let password = "Password1"; 

// 2. Now you can safely pass it into the function:
console.log(validatePassword(password));

alert("see below")
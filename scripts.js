const headphones = 59.99;
const case6 = 12.50;
const cable = 8.99;
const shipping = 5.99;
const tax = 0.08;

// 1. Calculate the actual subtotal first
const subtotal = headphones + case6 + cable;

// 2. Use a ternary operator to assign the value directly to total
const total = subtotal > 70 
  ? (subtotal * tax) + subtotal + shipping 
  : (subtotal * tax) + subtotal;

// 3. Log the final total
console.log(total.toFixed(2)); // Outputs: 93.99
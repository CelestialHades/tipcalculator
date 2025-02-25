// 1. Get DOM elements
const billInput = document.getElementById('billInput');
const tipPercent = document.getElementById('tipPercent');
const peopleInput = document.getElementById('peopleInput');
const result = document.getElementById('result');

// 2. Function to calculate tip and total
function calculateTip() {
  // 3. Get input values
  const bill = Number(billInput.value);
  const tipRate = Number(tipPercent.value);
  const people = Number(peopleInput.value) || 1; // Default to 1 if empty
  
  // 4. Validate inputs
  if (isNaN(bill) || bill <= 0) {
    result.textContent = 'Please enter a valid bill amount!';
    return;
  }
  if (!Number.isInteger(people) || people < 1) {
    result.textContent = 'Please enter a valid number of people (1 or more)!';
    return;
  }
  
  // 5. Calculate tip and total
  const tipAmount = bill * (tipRate / 100);
  const totalAmount = bill + tipAmount;
  
  const tipPerPerson = tipAmount / people;
  const totalPerPerson = totalAmount / people;
  
  // 6. Display results
  if (people === 1) {
    result.textContent = `Tip: $${tipAmount.toFixed(2)} | Total: $${totalAmount.toFixed(2)}`;
  } else {
    result.textContent = `Tip per person: $${tipPerPerson.toFixed(2)} | Total per person: $${totalPerPerson.toFixed(2)} (Total: $${totalAmount.toFixed(2)})`;
  }
  
  // 7. Clear inputs
  billInput.value = '';
  peopleInput.value = '';
}

// 8. Allow Enter key to trigger calculation
billInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    calculateTip();
  }
});
peopleInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    calculateTip();
  }
});
function calculateTax(income, expense) {
  if (income >= 0 && expense >= 0 && income > expense) {
    let remainingMoney = income - expense;
    let tax = (remainingMoney * 20) / 100;
    return tax;
  } else {
    return "Invalid Input";
  }
}
console.log(calculateTax(10000, 3000));

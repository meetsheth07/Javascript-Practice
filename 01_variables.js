const AccountID = 1234567890;
let accountBalance = 1000.50;
const accountHolderName = "John Doe";
var accountType = "Savings";
//never use var because it has function scope and can lead to unexpected behavior. Always use let or const for variable declarations.

console.table({
    AccountID,
    accountBalance,
    accountHolderName,
    accountType
});
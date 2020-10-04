// Declare an empty array;
const emptyArray = [];
// Declare an array with more than 5 number of elements
const fivePlusArray = ['one', 1, '1', 'I', 'uno', 'ek'];
// Find the length of your array
const length = fivePlusArray.length;
// Get the first item, the middle item and the last item of the array
const firstItem = fivePlusArray[0];
const middleItem = fivePlusArray[Math.floor(length / 2)];
const lastItem = fivePlusArray[length - 1];
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = fivePlusArray;
const lengthMixedDataTypes = mixedDataTypes.length;
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
const itCompaniesLength = itCompanies.length
console.log(itCompaniesLength);
// Print the first company, middle and last company
console.log({fist: itCompanies[0], middle: itCompanies[Math.floor(itCompaniesLength / 2)], last: itCompanies[itCompaniesLength - 1]})
// Print out each company
console.log(itCompanies.join());
// Change each company name to uppercase one by one and print them out
const toUpper = (x) => x.toUpperCase();
itCompanies.map(toUpper);
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.slice(0, itCompaniesLength - 1).join(', ')} and ${itCompanies[itCompaniesLength - 1]} are big IT companies.`);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const uppercaseCompanies = itCompanies.map(toUpper);
const checkIfCompanyExists = (company) => uppercaseCompanies.includes(company.toUpperCase()) ? company : `${company} is not found`

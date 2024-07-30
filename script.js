// Part 1: Math Problems
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
const n5 = 10;

// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;
const isSum2 = (n1 - n1 + n3 + n4) == 50;

// Check two: at least two odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const evenCount = (n1 % 2 === 0 ? 1 : 0) + 
                   (n2 % 2 === 0 ? 1 : 0) + 
                   (n3 % 2 === 0 ? 1 : 0) + 
                   (n4 % 2 === 0 ? 1 : 0) >= 2;

// Check three: no number larger than 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
const isNotunique = n5 != n1;
// log the results
console.log(isNotunique);

// Here, we put the results into a single variable 
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
const isValid2 = isSum50 && isSum2 && isTwoOdd && evenCount && isOver25 && isUnder25 && isUnique && isNotunique;


// Log the results.
console.log(isValid);
console.log(isSum50);
console.log(isSum2);
console.log(isTwoOdd);
// console.log(isSum2);
console.log(isTwoOdd, evenCount)
console.log(isOver25,isUnder25,isUnique,isNotunique);
console.log(isValid2);



// Display the results in the HTML

const appDiv = document.getElementById('app');
appDiv.innerHTML = `
    <p>const n1 = 10;</p>
    <p>const n2 = 15;</p>
    <p>const n3 = 20;</p>
    <p>const n4 = 5;</p>
    <p>const n5 = 10;</p>
    <p>Sum of (n1 + n2 + n3 + n4) is 50: ${isSum50}</p>
    <p>Calculation (n1 - n1 + n3 + n4) = 50: ${isSum2}</p>
    <p>At least two odd numbers: ${isTwoOdd}</p>
    <p>At least two even numbers: ${evenCount}</p>
    <p>No number larger than 25: ${!isOver25}</p>
    <p>No number less than 25: ${isUnder25}</p>
    <p>All numbers are unique: ${isUnique}</p>
    <p>n1 and n5 are unique: ${isNotunique}</p>
    <p>Overall validation: ${isValid}</p>
    <p>Overall validation (ammended): ${isValid2}</p>
`;

let number =0;
number=parseInt(prompt('Enter the number of terms: '));

console.log("Enter the number of terms:" +number);
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number;i++) {
    console.log(n1 +"-->"+"Term number : "+i);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
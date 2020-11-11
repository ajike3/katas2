//console.log ('hello')//
//add//
function add(j,k) {
  let i = j + k;
  result = i
  return result;
}
console.log( add(8, 9));

// multiply a=6, b=4//
function multiply(a, b) {
  let count = 0;
  let answer = 0;
  while(count <b){
    answer = add(a, answer);
    count++;
    }
  return answer;
  }

console.log(multiply(6, 4));

//power//
function power(x, n) {
  let count = 0;
  let answer = 1
  while (count < n) {
  answer = multiply(x, answer);
  count++;
  }
  return answer;
}
console.log(power(2, 8));

//factorial//

function factorial(c) {
  let count = 0;
  let answer = 1;
  let decrementingNumber = c;
  while (count < c) {
answer = multiply(decrementingNumber, answer);
decrementingNumber--;
  count++;
  }
  return answer;
}
console.log(factorial(5));

//"Fibonacci" function works and does not use built-in operators
function Fibonacci(n) {
  let count = 0
  let fib = [0, 1]
  while(count < n- 2){
    console.log(fib)
    fib.push(add(fib[count], fib[count + 1]))
    count++;
  }
return fib;
}

letbonus = Fibonacci(8);
console.log("Fibonacci - Bonus",)
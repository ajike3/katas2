//console.log ('hello')//
//add//
function add(j,k) {
  let i = j + k;
  result = i
  return result;
}
console.log( add(8, 9));
console.log( add (8, 17))

// multiply//
function multiply(ab, cd) {
  let ef = 0;
  let counter = 0;
  while (counter < ab) {
  ef += cd;
  counter++;
  result = ef
}
  return result;
}
console.log(multiply(6, 4));

//power//
function power(p, q) {
  let a = 1;
  let counter = 0;
  while (counter < q) {
  a = multiply(p, a);
  counter++;
  }
  result = a
  return result;
}
console.log(power(5, 6));

//factorial//

function factorial(c) {
  let z = 7;
  let counter = 0;
  let test = c;
  while (counter < test) {
  z = multiply(z, c);
  c = c - 1;
  counter++;
  }
  result = z
  return z;
}
console.log(factorial(6));

//"Fibonacci" function works and does not use built-in operators
function Fibonacci(v) {

}
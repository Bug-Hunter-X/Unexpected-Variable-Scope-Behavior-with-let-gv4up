function myFunction() {
  let x = 10;
  if (true) {
    x = 20; // Modify the existing x
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}

myFunction();
/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

/*
  Factorial - the product of an integer and all the integers below it
  ex. factorial(3) = 3 * 2 * 1 = 6 
*/

// Fungsi untuk menghitung factorial dengan rekursif
// Contoh: factorial(4) = 4 * 3 * 2 * 1 = 24
function factorial(num) {
  // Base case (kasus dasar):
  // - Jika num kurang dari 2 (yaitu 0 atau 1), kembalikan 1
  // - Karena factorial dari 0 dan 1 adalah 1
  // - Ini juga menjadi titik berhenti rekursif
  if (num < 2) return 1;

  // Recursive case (kasus rekursif):
  // - num: angka yang sedang dihitung
  // - factorial(num - 1): memanggil fungsi factorial lagi dengan num - 1
  // - Contoh: factorial(4)
  //   = 4 * factorial(3)
  //   = 4 * (3 * factorial(2))
  //   = 4 * (3 * (2 * factorial(1)))
  //   = 4 * (3 * (2 * 1))
  //   = 4 * (3 * 2)
  //   = 4 * 6
  //   = 24
  return num * factorial(num - 1);
}

// unit tests
// do not modify the below code
test.skip("factorials", () => {
  expect(factorial(1)).toEqual(1);
  expect(factorial(2)).toEqual(2);
  expect(factorial(3)).toEqual(6);
  expect(factorial(10)).toEqual(3628800);
});

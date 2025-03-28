/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array) {
  // write code here
  
  // Inisialisasi variabel sum dengan nilai 0
  // - Variabel ini akan menyimpan total penjumlahan semua angka
  // - Dimulai dari 0 karena:
  //   1. Dalam penjumlahan, kita selalu mulai dari 0
  //   2. Jika tidak diinisialisasi dengan 0, nilainya akan undefined
  //   3. undefined + angka akan menghasilkan NaN (Not a Number)
  let sum = 0

  // Loop untuk mengiterasi setiap elemen dalam array
  // - i = 0: mulai dari elemen pertama array
  // - i < array.length: lanjutkan selama i kurang dari panjang array
  // - i++: tambah i dengan 1 setiap kali loop
  for (let i = 0; i < array.length; i++) {
    // Simpan nilai elemen array ke variabel current
    // - array[i]: mengambil elemen array pada posisi ke-i
    // - const: karena nilai tidak akan diubah dalam iterasi ini
    // - current: akan berisi angka atau array (untuk nested array)
    const current = array[i];

    // Jika elemen saat ini adalah array, rekursif ke dalamnya
    // - Jika tidak, maka elemen saat ini adalah angka, sehingga kita tambahinya ke sum
    // - Jika elemen saat ini adalah array, maka sum akan diupdate dengan nilai yang dikembalikan dari rekursif
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}

test.skip("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});

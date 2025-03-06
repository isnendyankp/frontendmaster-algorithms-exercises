/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  // Mulai dari indeks 1 (elemen kedua) karena elemen pertama dianggap sudah terurut
  for (let i = 1; i < nums.length; i++) {
    // Simpan nilai yang akan kita sisipkan ke dalam variabel sementara
    let insertNumber = nums[i]; // the insertNumber number we're looking to insert
    
    // Variabel j untuk mengecek dan menggeser elemen-elemen di bagian yang sudah terurut
    let j; // the inner counter

    // Loop untuk mencari posisi yang tepat di bagian yang sudah terurut
    // nums[j] > insertNumber: jika elemen yang dicek lebih besar dari yang akan disisipkan
    // j >= 0: pastikan tidak melewati batas kiri array
    for (j = i - 1; nums[j] > insertNumber && j >= 0; j--) {
      // Geser elemen yang lebih besar ke kanan satu posisi
      // move numbers to the right until we find where to insert
      nums[j + 1] = nums[j];
    }

    // Sisipkan nilai ke posisi yang tepat
    // j + 1 karena j sudah dikurangi satu kali terakhir di loop sebelumnya
    // do the insertion
    nums[j + 1] = insertNumber;
  }
  return nums;
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

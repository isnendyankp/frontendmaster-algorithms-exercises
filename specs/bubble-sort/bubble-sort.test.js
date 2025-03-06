/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // Inisialisasi variabel untuk menandai apakah terjadi pertukaran
  let exchange = false;

  // Mulai do-while loop yang akan terus berjalan selama masih ada pertukaran
  do {
    // Reset flag pertukaran di awal setiap putaran
    exchange = false;

    // Loop through array sampai elemen kedua terakhir
    // nums.length - 1 karena kita membandingkan dengan elemen berikutnya
    for (let i = 0; i < nums.length - 1; i++) {
      // Bandingkan elemen saat ini dengan elemen berikutnya
      // Jika elemen saat ini lebih besar, tukar posisinya
      if (nums[i] > nums[i + 1]) {
        // Simpan elemen saat ini ke variabel sementara
        const temp = nums[i];
        
        // Pindahkan elemen berikutnya ke posisi saat ini
        nums[i] = nums[i + 1];
        
        // Pindahkan elemen yang disimpan di temp ke posisi berikutnya
        nums[i + 1] = temp;
        
        // Tandai bahwa terjadi pertukaran di putaran ini
        exchange = true;
      }
    }
  // Lanjutkan loop jika terjadi pertukaran di putaran terakhir
  } while (exchange);
  
  // Kembalikan array yang sudah terurut
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

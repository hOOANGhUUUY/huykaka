var array = [1, 2, 3, 2 ,5]
var count = 0;
var tong1 = 0;
var tong2 = 0;
var result = 0;
for (let i = 0; i < array.length; i++){
    tong1 += array[i];
}
console.log("Tổng của mảng trên là: " + tong1);

for (let i = 0; i < array.length; i++){
    tong2 += array[i];
    count++;
}
result = tong2 / count;
console.log("Trung bình cộng của mảng là: " + result);
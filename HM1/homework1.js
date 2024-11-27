let nums = [23, 4, 0,-8, -123,-23, 8, 62, 4, 0, 8, 5, -1, 345, 5];
// let nums = [2,2,2,2,2,2,2,2,2,2,2,2];
let min = nums[0];
let min2 = nums[0];
let min3 = nums[0];
let min4 = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
        min4 = min3;
        min3 = min2;
        min2 = min;
        min = nums[i];
    } else if (nums[i] < min2 && nums[i] !== min) {
        min4 = min3;
        min3 = min2;
        min2 = nums[i];
    } else if (nums[i] < min3 && nums[i] !== min2 && nums[i] !== min) {
        min4 = min3;
        min3 = nums[i];
    } else if (nums[i] < min4 && nums[i] !== min3 && nums[i] !== min2 && nums[i] !== min) {
        min4 = nums[i];
    }
}

console.log("1-й минимальный (num):", min);
console.log("2-й минимальный (num2):", min2);
console.log("3-й минимальный (num3):", min3);
console.log("4-й минимальный (num4):", min4);

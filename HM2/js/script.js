// TASK 1 
// Напишите метод, который удаляет все дубликаты из отсортированного массива. Метод должен вернуть длину нового массива без дубликатов и изменить исходный массив таким образом, чтобы все уникальные элементы были перемещены в начало.
// Пример:
// Ввод: nums = { 2, 2, 3, 3, 3, 4, 5, 5}
// Вывод: Длина нового массива: 4, измененный массив: { 2, 3, 4, 5, _, _, _, _ }

function removeDuplicates(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0;
    }
    let uniqueIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
}

const nums = [2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8];
const newLength = removeDuplicates(nums);
console.log(`Длина нового массива: ${newLength}`);
console.log(`Измененный массив: ${nums.slice(0, newLength).join(',')}`);


// TASK 2
//Напишите метод, который принимает два отсортированных массива и объединяет их в один отсортированный массив. 
// Пример:
// Ввод: arr1 = {1, 3, 5}, arr2 = {2, 4, 6}
// Вывод: Объединенный массив: {1, 2, 3, 4, 5, 6}

function removeDuplicates(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0;
    }
}
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
console.log(`Объединенный массив: ${mergeSortedArrays(arr1, arr2).join(',')}`);
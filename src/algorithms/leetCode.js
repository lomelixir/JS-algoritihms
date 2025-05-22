console.log("HELLO WORLD leetCode");

//1.- Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
    const map1 = new Map();
    for (i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map1.has(comp)) {
             console.log([i, map1.get(comp)]);
        } else {
            map1.set(nums[i],i)
        }
    }
}
// twoSum([3, 2, 4], 6); //CORRECTO. 



//2.- Given an integer x, return true if x is a palindrome, and false otherwise.
function palindrome(x) {
    let iterable = x.toString();
    let arr = [...iterable];
    let start = arr[0];
    let final = arr[arr.length - 1];

    while (start <= final) {
        if (start == final) {
            start++;
            final--;
        }
        console.log(true);
    }
    console.log(false);
}
palindrome(121);
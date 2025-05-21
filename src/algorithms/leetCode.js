console.log("HELLO WORLD leetCode");

//1.- Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
    const map1 = new Map();
    for (i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        console.log(comp);
        if (map1.has(comp)) {
            console.log(`${comp}`)
        }
    } 
}
twoSum([2, 7, 11, 15], 9);

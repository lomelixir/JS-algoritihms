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
// palindrome(121); //PRENDIENTE



//3.- Roman to integer. 
function romanToInt(s) {
    let string = s;
    let arr = [...string];
    let toInt = [];
    for (let value of arr) {
         switch (value) {
            case "I":
                toInt.push(1);
                break;
            case "V":
                toInt.push(5);
                break;
            case "X":
                toInt.push(10);
                break;
            case "L":
                toInt.push(50);
                break;
            case "C":
                toInt.push(100);
                break;
            case "D":
                toInt.push(500);
                break;
            case "M":
                toInt.push(1000);
                break;
            default: 
                console.log("Exist an error.");
        }
    }
    
    console.log(toInt);

    let indiceI = toInt.indexOf(1);
    let indiceV = toInt.indexOf(5);
    let indiceX = toInt.indexOf(10);
    let indiceL = toInt.indexOf(50);
    let indiceC = toInt.indexOf(100);
    let indiceD = toInt.indexOf(500);
    let indiceM = toInt.indexOf(1000);

    if (indiceI + 1 == indiceV) {
        toInt.splice(indiceI, 2);
        toInt.push(4);
    } else if (indiceI + 1 == indiceX) {
        toInt.splice(indiceI, 2);
        toInt.push(9);
    } else if (indiceX + 1 == indiceL) {
        toInt.splice(indiceX, 2);
        toInt.push(40);
    } else if (indiceX + 1 == indiceC) {
        toInt.splice(indiceX, 2);
        toInt.push(90);
    } else if (indiceC + 1 == indiceD) {
        toInt.splice(indiceC, 2);
        toInt.push(400);
    } else if (indiceC + 1 == indiceM) {
        toInt.splice(indiceC, 2);
        toInt.push(900);
    }

    let suma = toInt.reduce((acc, el) => {
        return acc + el;
    }, 0);

    console.log(toInt);
    console.log(suma);
}
romanToInt("MCMXCIV"); //PENDIENTE.

console.log("HELLO WORLD BORRADOR2");


// function romanToInt(s) {
//     let string = s;
//     let arr = [...string];
//     for (i = 0; i < arr.length; i++) {
//         if (arr['I'] < arr['V']) {
//             console.log("está antes");
//         } else {
//             console.log(arr[i]);
//             console.log("está después");
//         }
//     }
//     console.log(arr);
// }
// romanToInt("VI");

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
        }
    }
    let indiceI = toInt.indexOf(1);
    let indiceV = toInt.indexOf(5);
    if (indiceI + 1 == indiceV) {
        console.log(4);
    }
    let indiceX = toInt.indexOf(10);
    if (indiceI + 1 == indiceX) {
        console.log(9);
    }

    let indiceL = toInt.indexOf(50);
    if (indiceX + 1 == indiceL) {
        console.log(40);
    }
    let indiceC = toInt.indexOf(100);
    if (indiceX + 1 == indiceC) {
        console.log(90);
    }

    let indiceD = toInt.indexOf(500);
    if (indiceC + 1 == indiceD) {
        console.log(400);
    }
    let indiceM = toInt.indexOf(1000);
    if (indiceC + 1 == indiceM) {
        console.log(900);
    }

}
romanToInt("IX");
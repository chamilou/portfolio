let res1color = document.getElementById("head1")
let res2color = document.getElementById("color1")
let res3color = document.getElementById("color2")
let res4color = document.getElementById("color3")

let colorReading = document.getElementById("reading1").addEventListener("change", addColor);
let colorReading2 = document.getElementById("reading2").addEventListener("change", addColor);
let colorReading3 = document.getElementById("reading3").addEventListener("change", addColor);
let colorReading4 = document.getElementById("reading4").addEventListener("change", addColor);

document.getElementById("reading1").addEventListener("focus", () => {
    reading1.value = '';
});

document.getElementById("formcalc").addEventListener("submit", (event) => {
    event.preventDefault();
    choseColor();
});


let resValue = [
    ["black", 0],
    ["brown", 1],
    ["red", 2],
    ["orange", 3],
    ["yellow", 4],
    ["green", 5],
    ["blue", 6],
    ["violet", 7],
    ["grey", 8],
    ["white", 9],
    ["gold", 0.1],
    ["silver", 0.01],
];

let output = document.getElementById("resistorData")

function choseColor() {
    // let firstValue = 0;
    let output1 = 0
    for (let i = 0; i < resValue.length; i++) {
        console.log(res1color.style.backgroundColor)
        if (res1color.style.backgroundColor == resValue[i][0]) {
            console.log(resValue[i][0])
            output1 += resValue[i][1]

        }
        if (res2color.style.backgroundColor == resValue[i][0]) {
            console.log(resValue[i][0])
            output1 += resValue[i][1]
        }
        if (res3color.style.backgroundColor == resValue[i][0]) {
            output1 += resValue[i][1]

        }
        if (res4color.style.backgroundColor == resValue[i][0]) {
            output1 *= resValue[i][1]

        }
        console.log(output1[0] + output1[1])
        output.value = output1 + " OM"
    }

}

function addColor() {
    res1color.style.backgroundColor = reading1.value
    res2color.style.backgroundColor = reading2.value
    res3color.style.backgroundColor = reading3.value
    res4color.style.backgroundColor = reading4.value
}
// if (colorPick1.value == colorValue.key) {
//     res1color.textContent = colorValue.value;

// }

// res2color.style.backgroundColor = colorPick2.value;
// res3color.style.backgroundColor = colorPick3.value;
// res4color.style.backgroundColor = colorPick4.value;
let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let option_from, option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


function myResult() {

    option_from = inputType.value;
    option_to = resultType.value;

    // Kilometer
    if (option_from === "km" && option_to==="m") {
        result.value = Number(input.value) * 1000;
    }
    else if (option_from === "km" && option_to=== "cm") {
        result.value = Number(input.value) * 100000;
    }
    else if (option_from === "km" && option_to=== "mm") {
        result.value = Number(input.value) * 1e+6;
    }
    else if (option_from === "km" && option_to=== "micron") {
        result.value = Number(input.value) * 1e+9;
    }
    else if (option_from === "km" && option_to=== "nano") {
        result.value = Number(input.value) * 1e+12;
    }
    else if (option_from === "km" && option_to=== "mile") {
        result.value = Number(input.value) * 1.609;
    }
    else if (option_from === "km" && option_to=== "yard") {
        result.value = Number(input.value) * 1094;
    }
    else if (option_from === "km" && option_to=== "ft") {
        result.value = Number(input.value) * 3281;
    }
    else if (option_from === "km" && option_to=== "in") {
        result.value = Number(input.value) * 39370;
    }
    else if (option_from === "km" && option_to==="km") {
        result.value = input.value
    }
    
    // Meter
    if (option_from === "m" && option_to==="km"){
        result.value = Number(input.value) / 1000;
    }
    else if (option_from === "m" && option_to==="cm"){
        result.value = Number(input.value) * 100;
    }
    else if (option_from === "m" && option_to==="mm"){
        result.value = Number(input.value) * 1000;
    }
    else if (option_from === "m" && option_to==="micron"){
        result.value = Number(input.value) * 1e+6;
    }
    else if (option_from === "m" && option_to==="nano"){
        result.value = Number(input.value) * 1e+9;
    }
    else if (option_from === "m" && option_to==="mile"){
        result.value = Number(input.value) / 1609;
    }
    else if (option_from === "m" && option_to==="yard"){
        result.value = Number(input.value) * 1.094;
    }
    else if (option_from === "m" && option_to==="ft"){
        result.value = Number(input.value) * 3.281;
    }
    else if (option_from === "m" && option_to==="in"){
        result.value = Number(input.value) * 39.37;
    }
    else if (option_from === "m" && option_to==="m"){
        result.value = input.value
    }
    
    // Centimeter
    if (option_from === "cm" && option_to==="km"){
        result.value = Number(input.value) / 100000;
    }
    else if (option_from === "cm" && option_to==="m"){
        result.value = Number(input.value) / 100;
    }
    else if (option_from === "cm" && option_to==="mm"){
        result.value = Number(input.value) * 10;
    }
    else if (option_from === "cm" && option_to==="micron"){
        result.value = Number(input.value) * 10000;
    }
    else if (option_from === "cm" && option_to==="nano"){
        result.value = Number(input.value) * 1e+7;
    }
    else if (option_from === "cm" && option_to==="mile"){
        result.value = Number(input.value) / 160900;
    }
    else if (option_from === "cm" && option_to==="yard"){
        result.value = Number(input.value) / 91.44;
    }
    else if (option_from === "cm" && option_to==="ft"){
        result.value = Number(input.value) / 30.48;
    }
    else if (option_from === "cm" && option_to==="in"){
        result.value = Number(input.value) / 2.54;
    }
    else if (option_from === "cm" && option_to==="cm"){
        result.value = input.value
    }
        
    // Millimeter
    if (option_from === "mm" && option_to==="km"){
        result.value = Number(input.value) / 1e+6;
    }
    else if (option_from === "mm" && option_to==="m"){
        result.value = Number(input.value) / 1000;
    }
    else if (option_from === "mm" && option_to==="cm"){
        result.value = Number(input.value) / 10;
    }
    else if (option_from === "mm" && option_to==="micron"){
        result.value = Number(input.value) * 1000;
    }
    else if (option_from === "mm" && option_to==="nano"){
        result.value = Number(input.value) * 1e+6;
    }
    else if (option_from === "mm" && option_to==="mile"){
        result.value = Number(input.value) / 1.609e+6;
    }
    else if (option_from === "mm" && option_to==="yard"){
        result.value = Number(input.value) / 914.4;
    }
    else if (option_from === "mm" && option_to==="ft"){
        result.value = Number(input.value) / 304.8;
    }
    else if (option_from === "mm" && option_to==="in"){
        result.value = Number(input.value) / 25.4;
    }
    else if (option_from === "mm" && option_to==="mm"){
        result.value = input.value
    }
    
    // Micrometer
    if (option_from === "micron" && option_to==="km"){
        result.value = Number(input.value) / 1e+9;
    }
    else if (option_from === "micron" && option_to==="m"){
        result.value = Number(input.value) / 1e+6;
    }
    else if (option_from === "micron" && option_to==="cm"){
        result.value = Number(input.value) / 10000;
    }
    else if (option_from === "micron" && option_to==="mm"){
        result.value = Number(input.value) / 1000;
    }
    else if (option_from === "micron" && option_to==="nano"){
        result.value = Number(input.value) * 1000;
    }
    else if (option_from === "micron" && option_to==="mile"){
        result.value = Number(input.value) / 1.609e+9;
    }
    else if (option_from === "micron" && option_to==="yard"){
        result.value = Number(input.value) / 914400;
    }
    else if (option_from === "micron" && option_to==="ft"){
        result.value = Number(input.value) / 304800;
    }
    else if (option_from === "micron" && option_to==="in"){
        result.value = Number(input.value) / 25400;
    }
    else if (option_from === "micron" && option_to==="micron"){
        result.value = input.value
    }
    

    // Nanometer
    if (option_from === "nano" && option_to==="km"){
        result.value = Number(input.value) / 1e+12;
    }
    else if (option_from === "nano" && option_to==="m"){
        result.value = Number(input.value) / 1e+9;
    }
    else if (option_from === "nano" && option_to==="cm"){
        result.value = Number(input.value) / 1e+7;
    }
    else if (option_from === "nano" && option_to==="mm"){
        result.value = Number(input.value) / 1e+6;
    }
    else if (option_from === "nano" && option_to==="micron"){
        result.value = Number(input.value) / 1000;
    }
    else if (option_from === "nano" && option_to==="mile"){
        result.value = Number(input.value) / 1.609e+12;
    }
    else if (option_from === "nano" && option_to==="yard"){
        result.value = Number(input.value) / 9.144e+8;
    }
    else if (option_from === "nano" && option_to==="ft"){
        result.value = Number(input.value) / 3.048e+8;
    }
    else if (option_from === "nano" && option_to==="in"){
        result.value = Number(input.value) / 2.54e+7;
    }
    else if (option_from === "nano" && option_to==="nano"){
        result.value = input.value
    }


    // Mile 
    if (option_from === "mile" && option_to==="km"){
        result.value = Number(input.value) * 1.609;
    }
    else if (option_from === "mile" && option_to==="m"){
        result.value = Number(input.value) * 1609;
    }
    else if (option_from === "mile" && option_to==="cm"){
        result.value = Number(input.value) * 160900;
    }
    else if (option_from === "mile" && option_to==="mm"){
        result.value = Number(input.value) * 1.609e+6;
    }
    else if (option_from === "mile" && option_to==="micron"){
        result.value = Number(input.value) * 1.609e+9;
    }
    else if (option_from === "mile" && option_to==="nano"){
        result.value = Number(input.value) * 1.609e+12;
    }
    else if (option_from === "mile" && option_to==="yard"){
        result.value = Number(input.value) * 1760;
    }
    else if (option_from === "mile" && option_to==="ft"){
        result.value = Number(input.value) * 5280;
    }
    else if (option_from === "mile" && option_to==="in"){
        result.value = Number(input.value) * 63360;
    }
    else if (option_from === "mile" && option_to==="mile"){
        result.value = input.value
    }


    // Yard 
    if (option_from === "yard" && option_to==="km"){
        result.value = Number(input.value) / 1094;
    }
    else if (option_from === "yard" && option_to==="m") {
        result.value = Number(input.value) / 1.094;
    }
    else if (option_from === "yard" && option_to==="cm") {
        result.value = Number(input.value) * 91.44;
    }
    else if (option_from === "yard" && option_to==="mm") {
        result.value = Number(input.value) * 914.4;
    }
    else if (option_from === "yard" && option_to==="micron") {
        result.value = Number(input.value) * 914400;
    }
    else if (option_from === "yard" && option_to==="nano") {
        result.value = Number(input.value) * 9.144e+8;
    }
    else if (option_from === "yard" && option_to==="mile") {
        result.value = Number(input.value) / 1760;
    }
    else if (option_from === "yard" && option_to==="ft") {
        result.value = Number(input.value) * 3;
    }
    else if (option_from === "yard" && option_to==="in") {
        result.value = Number(input.value) * 36;
    }
    else if (option_from === "yard" && option_to==="yard") {
        result.value = input.value
    }


    // Feet/Foot
    if (option_from === "ft" && option_to==="km"){
        result.value = Number(input.value) / 3281;
    }
    else if (option_from === "ft" && option_to==="m") {
        result.value = Number(input.value) / 3.281;
    }
    else if (option_from === "ft" && option_to==="cm") {
        result.value = Number(input.value) * 30.48;
    }
    else if (option_from === "ft" && option_to==="mm") {
        result.value = Number(input.value) * 304.8;
    }
    else if (option_from === "ft" && option_to==="micron") {
        result.value = Number(input.value) * 304800;
    }
    else if (option_from === "ft" && option_to==="nano") {
        result.value = Number(input.value) * 3.048e+8;
    }
    else if (option_from === "ft" && option_to==="mile") {
        result.value = Number(input.value) / 5280;
    }
    else if (option_from === "ft" && option_to==="yard") {
        result.value = Number(input.value) / 3;
    }
    else if (option_from === "ft" && option_to==="in") {
        result.value = Number(input.value) * 12;
    }
    else if (option_from === "ft" && option_to==="ft") {
        result.value = input.value
    }


     // Inches
     if (option_from === "in" && option_to==="km"){
        result.value = Number(input.value) / 39370;
    }
    else if (option_from === "in" && option_to==="m") {
        result.value = Number(input.value) / 39.37;
    }
    else if (option_from === "in" && option_to==="cm") {
        result.value = Number(input.value) * 2.54;
    }
    else if (option_from === "in" && option_to==="mm") {
        result.value = Number(input.value) * 25.4;
    }
    else if (option_from === "in" && option_to==="micron") {
        result.value = Number(input.value) * 25400;
    }
    else if (option_from === "in" && option_to==="nano") {
        result.value = Number(input.value) * 2.54e+7;
    }
    else if (option_from === "in" && option_to==="mile") {
        result.value = Number(input.value) / 63360;
    }
    else if (option_from === "in" && option_to==="yard") {
        result.value = Number(input.value) / 36;
    }
    else if (option_from === "in" && option_to==="ft") {
        result.value = Number(input.value) / 12;
    }
    else if (option_from === "in" && option_to==="in") {
        result.value = input.value
    }

}
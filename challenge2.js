let weight = Number(prompt("enter your weight in kg"));
let heaight = Number(prompt("enter your height in metres"));
let bmi = weight / (heaight ** 2);

console.log("welcome to bmi calculator");

if (bmi <= 18.5){
    console.log('your bmi is ',bmi,' => "underweight"');
}else if(bmi <= 25.0){
    console.log('your bmi is ',bmi,' => "normal"');
}else if(bmi <= 30.0){
    console.log('your bmi is ',bmi,' => "overweight"');
}else if(bmi > 30){
    console.log('your bmi is ',bmi,' => "obese"');
}else{
    console.log('invalid weight or height');
}
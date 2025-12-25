// console.log("Shahnawaz Bhutto");

// let a = "shanu"
// console.log(a)

// var b = 34
// console.log(b)

// var c = 4
// var d =8
// var sum = c+d
// var sub = c-d
// var prod = c*d
// var divide = c/d
// console.log(sum)
// console.log(sub)
// console.log(prod)
// console.log(divide)



let math=50
let comp=70
let eng=90
let urdu=86
let stats=40
let isl=92
let totalmarks=600

let obtainedmarks=math+comp+eng+urdu+stats+isl

let per=(obtainedmarks/totalmarks)*100

console.log(obtainedmarks);
console.log(per);

if(per>=90 && per<=100){
    console.log("Your grade is A+");
    
}
else if(per>=80){
    console.log("Your grade is A");
}
else if(per>=70){
    console.log("Your grade is B");
    
}
else if(per>=60){
    console.log("Your grade is C");
}
else if(per>=50){
    console.log("Your grade is D");
}
else if(per>=40){
    console.log("Your grade is E");
}
else(per<40 && per>=0)
    console.log("Try Again");





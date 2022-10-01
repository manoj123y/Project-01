// use of if and else statment 
// var year = 2020;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0)
//             console.log("year  " + year + "is leap  year");
//         else
//             console.log("year  " + year + " is leap not year");
//     }
//     else
//         console.log("year  " + year + " is leap  year");
// }
// else
//     console.log("year  " + year + " is leap not year");


// conditional operator 
// var age = 17;
// console.log((age >= 18) ? "you can vote" : "you can not vote");

// switch statment  and break keyword

// var area = "circle";
// var area = "triangle";
// var area = "reactangle";
// var Pi = 3.14, l = 4, b = 5, r = 2;
// if (area == "circle")
//     console.log("area of the circle is " + Pi * r * r);
// else
//     if (area == "triangle") 
//         console.log("area of the tringle is " + (l * b) / 2);
//     else if (area == "reactangle")
//         console.log("area of the is reactangle " + l * b);


// var area = "tringl";
// var Pi = 3.14, l = 4, b = 5, r = 2;
// switch (area) {
//     case 'circle':
//         console.log("area of the circle is " + Pi * r * r);
//         break
//     case 'reactangle':
//         console.log("area of the is reactangle " + l * b);
//         break
//     case 'tringle':
//         console.log("area of the tringle is " + (l * b) / 2);
//         break
//     default:
//         console.log("enter the valis data");


// while loop 
// var x = 1;
// // block scope 
// while (x <=100) {
//     console.log(x);
//     x++;
// }

//  do while loop 
// var x = 1;
// // block scope 
// do {
//     console.log(x);
//     x++;
// }while (x >=10);

//for loop
// write down table of 8
var i, j;
for (i = 1; i <= 10; i++) {
    j = i * 8;
    console.log("8*" + i + "=" + j);

}
// modern js 
// 1---different between var let and const; 

//  var varible ko change kr skte yani baad me value assingn kroege vo vala ho jayega 
// var myname="manoj pal"
// console.log(myname);
// myname="mahan";
// console.log(myname);



//  let varible ko change kr skte yani baad me value assingn kroege vo vala ho jayega 
// let myname="manoj pal"
// console.log(myname);
// myname="mahan";
// console.log(myname);

//  const varible ko changw nhi kr skte yani baad me value assingn kroege vo vala nhi hoga
// const myname="manoj pal"
// console.log(myname);
// myname="mahan";
// console.log(myname);



// 2---different between var let and const; 

// var==function scope
// var==block scope



// function data() {
//     var myfirstname = "manoj";
//     console.log(myfirstname);
//     if (true) {
//          var mylastname = "pal";
//         console.log("inner "+mylastname);
//         console.log( "inner "+myfirstname);
//     }
//     console.log("inner outer "+mylastname);//var se bne variable ko function ke ander khi bhi use kr skte hai
// }

// data()




// function data() {
//    let myfirstname = "manoj";
//     console.log(myfirstname);
//     if (true) {
//          let mylastname = "pal";
//         console.log("inner "+mylastname);
//         console.log( "inner "+myfirstname);
//     }
//     console.log("inner outer "+mylastname);//let se bne variable ko block ke bahr use nhi kr skte because ye block scope hota hai
// }

// data()





// function data() {
//     const myfirstname = "manoj";
//      console.log(myfirstname);
//      if (true) {
//           const mylastname = "pal";
//          console.log("inner "+mylastname);
//          console.log( "inner "+myfirstname);
//      }
//      console.log("inner outer "+mylastname);//const se bne variable ko block ke bahr use nhi kr skte because ye block scope hota hai
//  }

//  data()


// template String
// var i, j;
// for (i = 1; i <= 10; i++) {
//     j = i * 8;
//     console.log("8*" + i + "=" + j);
// }



// for (let i = 1; i <= 10; i++) {
//     let tableof = 12;
//     console.log(tableof+"* "+i + " == "+tableof*i);

// }

// console.log(`manoj pal`);
// for (let i = 1; i <= 10; i++) {
//     let tableof = 12;
//     console.log(` ${tableof} * ${i} = ${tableof*i} `);

//}





// default parametre
// function multi(a,b=5)
// {
//     return a*b;
// }
// console.log(multi(4));






//  noraml way of the writing of function
// console.log(sum());
// function sum()
// {
//     let a=4,b=3;
//     let sum=a+b;
//     return `the sum of the two number is ${sum}`; //using template string
// }




//   using fat arror function 

// const sum = () => {
//     let a = 4, b = 3;
//     let sum = a + b;
//     return `the sum of the two number is ${sum}`;
// }
// console.log(sum());





// const sum = () => {
//     let a = 4, b = 3;
//     return `the sum of the two number is ${a+b}`;
// }
// console.log(sum());





// const sum = () => {

//     return `the sum of the two number is ${(a = 8) + (b = 9)}`;
//       }
// console.log(sum());




const sum = () => `the sum of the two number is ${(a = 8) + (b = 9)}`;
console.log(sum());




// var myfriend=['manish','saurabh','touseeb','kausal']
// console.log(myfriend.length);
// console.log(myfriend[2]);
// // for last Element of the Array
// console.log(myfriend[myfriend.length-1]);
// // access of the all data of the Array




// using of for loop in the Array
//  var myfriend=['manish','saurabh','touseeb','kausal']
// for(var i=0;i<=myfriend.length;i++)
// {
// console.log(myfriend[i]);

// }





// using of for..in loop in the Array
// var myfriend=['manish','saurabh','touseeb','kausal']
// for(let elements in myfriend)
// {
//     console.log(elements);
// }





// using of for..of loop in the Array
// var myfriend=['manish','saurabh','touseeb','kausal']
// for(let elements of myfriend)
// {
//     console.log(elements);
// }




// using of forEach..of loop in the Array
// var myfriend = ['manish', 'saurabh', 'touseeb', 'kausal']
// myfriend.forEach(function (elements, index, Array) 
// {
//     console.log(elements + "  index: " + index + " from this array :  " + Array);
// })





// using fat arror function forEach loop
// var myfriend = ['manish', 'saurabh', 'touseeb', 'kausal']

// myfriend.forEach((elements, index, Array)=>
// {
//     console.log(elements + "  index: " + index + " from this array :  " + Array);
// })




// // indexOf method  in searching of the array
// var myfriend = ['manish', 'saurabh', 'touseeb', 'kausal','touseeb'];
//     console.log(myfriend.indexOf('touseeb'));
//     console.log(myfriend.indexOf('touseeb',3));





// lastindexOf method 
// var myfriend = ['manish', 'saurabh', 'touseeb', 'kausal','touseeb'];
//     console.log(myfriend.lastIndexOf('touseeb')); 
//     console.log(myfriend.lastIndexOf('touseeb',3));





// includes method 
// var myfriend = ['manish', 'saurabh', 'touseeb', 'kausal','rohit'];
// console.log(myfriend.includes('touseeb')); 
// console.log(myfriend.includes('touseeb',3));//searching of this is farward




// // find method  in filtering  of the array it print the smallest data of the array
// const price = [200, 300, 490, 500, 600];
// const findelement = price.find((currentvalue) => { return currentvalue < 400;});
// console.log(findelement)




// const price = [200, 300, 490, 500, 600]
// const findelement = price.find((currentvalue) =>currentvalue < 400);
// console.log(findelement)




// const price = [200, 300, 490, 500, 600]
// console.log(price.find((currentvalue) => currentvalue < 400));





// findIndex method for filter it is return the index of the lowest number in the array
// const price = [200, 300, 490, 500, 600];
// const findelement = price.findIndex(currentvalue => {
//     return currentvalue < 400;
// });
// console.log(findelement);





// const price = [200, 300, 490, 500, 600];
// const findelement = price.findIndex(currentvalue => currentvalue < 400);
// console.log(findelement);





// const price = [200, 300, 490, 500, 600];
// console.log(price.findIndex(currentvalue => currentvalue < 400));





// using of the filter method in the Array 
// const price = [122, 321, 444, 543, 653, 646, 700];
// const findelement = price.filter((currentelement) => {return currentelement < 600;});
// console.log(findelement);






// const price = [122, 321, 444, 543, 653, 646, 700];
// const findelement = price.filter((currelem) => currelem < 600)
// console.log(findelement);




// const price = [122, 321, 444, 543, 653, 646, 700];
// console.log(price.filter(currentelem => currentelem < 600));





// sort method 
// const month =['march','jan','feb','sep','apri'];
//here sorting  perform according to first letter of the string
// console.log(month.sort());




// const array=[3,4,100,2,0,10];
// console.log(array.sort());





// performance crud 
// push();  method 
// const random=['manoj','manish','rohit'];
// console.log(random);
// var count=random.push('kausal');
// random.push('kausal');
// console.log(random);
// console.log(count);




// unshift method 
// const random=['manoj','manish','rohit'];
// random.unshift('kausal'); data array me jayega
// console.log(random);
// console.log(random.unshift('kausal'))//number of the element batayega
// // console.log(random);
// const count=random.unshift('kausal'); //array me data jayega 
// console.log(count); //array ka data batayega
// console.log(random);
// random.unshift('kausal','anuj');
// console.log(random);

// const array = [3, 4, 100, 2, 0, 10];
// console.log(array.unshift(11, 33));
// console.log(array)



// pop method 
//  const random=['manoj','manish','rohit','mohit'];
// console.log(random);
// console.log(random.pop());
// console.log(random);



// shift  method 
// const random=['manoj','manish','rohit','mohit'];
// console.log(random);
// console.log(random.shift());
// console.log(random);


// Question 
//1 add pawan at the end of the array
// const name=['manoj','manish','rohit','mohit'];
// name.splice(name.length,0,'pawan');
// console.log(name);
// // return value of the splice method 
// const newname =name.splice(name.length,0,'pawan');
// console.log(newname);


//3 manish to MANISH 
// update the manish to MANISH 
// const name=['manoj','manish','rohit','mohit'];
// const newname =name.splice(1,1,'MANISH');
// console.log(name);

// if length of the array is more large than how you can update 



//3 update manish to MANISH in noramal case
//  const name=['manoj','kanish','rohit','mohit','manish','bhupendra'];
//  const indexofname =name.indexOf('manish');
// console.log("index of the manish is "+ indexofname);
// if(indexofname==-1)
// {
//  console.log('no data this type');
// }
// else
// {
//     const  newname=name.splice(indexofname,1,'MANISH');
//  console.log(name);
//  console.log(newname); /// solution of 2.-- splice method ki return value vhi hoti hai jise vah return krta hai

// }




//4 delete the mohit from this array that is prsent in the middle of the array
// const name = ['manoj', 'kanish', 'rohit', 'mohit', 'manish', 'bhupendra'];
// const indexname = name.indexOf('manish');
// console.log(indexname);
// if (indexname == -1) {
//     console.log("data is not present in the array");

// }
// else {
//     const newname = name.splice(indexname, 1);//here deleting of the data in the middle of the array
//     console.log(name);
//     console.log(newname);
// }






// map method
// printing of the array with the help of the map method. 
// let array=[25,36,49,64,81];
// let sqrt=array.map((currelem)=>{return currelem;  }   );
// console.log(sqrt); 
//map method return the new array.
// let array = [4, 3, 8, 9, 22, 44];
// let newarray = array.map((currelem, index,array) => { return currelem > 9; });
// console.log(array);
// console.log(newarray);


// display all element of the array using map method;
// let array = [4, 3, 8, 9, 22, 44];
// let newarray = array.map((currelem, index, array) => {
//     return ` ${currelem} is present at index:
//      ${index}  in the array ${array}`

// });
// console.log(newarray);





// question 
// find the square root of the some element ,
// let array=[25,36,49,64,81];
// let sqrt=array.map((currelem)=>{return Math.sqrt(currelem);});//using math.sqrt method
// console.log(sqrt); 




// multiply each element by 2 and return that element which is greter than 10.
// let array = [2, 3, 4, 5, 6, 7];//here use chaining too.
// let arr1 = array.map((currelem) => { return currelem * 2; }).filter((currelem) => { return currelem > 10; })
// console.log(arr1);



// let array = [2, 3, 4, 5, 6, 7,8,9];//here use chaining too.
// let arr1 = array.map((currelem) =>currelem * 2).filter((currelem) => currelem > 10);
// console.log(arr1);






// Reduce method 
// find sum of the all element of the array using reduce method 
// let arr1 = [2, 4, 6];
// let arr2 = arr1.reduce((accumulator, currelem) => { return accumulator += currelem })
// console.log(arr2);





// find sum of the all element of the array using reduce method  if first element is 7 that is not present in the array.
// let arr1 = [2, 4, 6];
// let arr2 = arr1.reduce((accumulator, currelem) => { return accumulator += currelem },7)
// console.log(arr2);




// find mulitplication of the all element of the array using reduce method 
// let arr1 = [2, 4, 6];
// let arr2 = arr1.reduce((accumulator, currelem) => { 
//     debugger;
//     return accumulator *= currelem })
// console.log(arr2);





// find sum of element of the array which is greter than 10 after multipy by 2 in every element 
// let array = [2, 3, 4, 6, 7];
// let arr1 = array.map((currelem) => { return currelem * 2 }).filter((currelem) => { return currelem > 10 })
//     .reduce((accumulator, currelem) => { return accumulator += currelem; });
// console.log(arr1);




// find sum of element of the array which is greter than 10 after multipy by 2 in every element 
// let array = [2, 3, 4, 6, 7];
// let arr1 = array.map((currelem) => currelem * 2).filter((currelem) => currelem > 10)
//     .reduce((accumulator, currelem) => accumulator += currelem);
// console.log(arr1);





// converstion of the  2d array into single array using reduce method 
const array = [['zone_1', 'zone_2'],
               ['zone_3', 'zone_4']
              ,
              ['zone_3', 'zone_4'],
              ['zone_3', 'zone_4']
             ];
const arr1 = array.reduce((accumulator, currelem) => { return accumulator.concat(currelem) })

console.log(arr1);










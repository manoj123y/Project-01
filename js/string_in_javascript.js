
//string
// let name='manoj';
// let newname="manoj pal";
// let ytname=new String('mp classes');
// console.log(name);
// console.log(newname);
// console.log(ytname);
// console.log(ytname.length);



// escape character 
// let string='Rajkiya engineering college  in the sonbhadra';
// let string='Rajkiya engineering college \"present\" in the sonbhadra';
// let string='Rajkiya engineering college \'present\' in the sonbhadra';
// let string='Rajkiya engineering college \\present\\ in the sonbhadra';
// console.log(string);




// indexOf method in the string
// const sentenc=" i am manoj pal from mankanagar";
// console.log(sentenc.indexOf("ma"));//index batata hai
// console.log(sentenc.indexOf("ma",7));//index batata hai but yha 7 se search krna start krega




// lastIndexOf method in the string
// const sentenc=" i am manoj pal from mankanagar";
// console.log(sentenc.lastIndexOf("ma"));//index batata hai but serach krte huye backword me jata hai
// console.log(sentenc.lastIndexOf("ma",7));//index batata hai but yha 7 se search krna start krega




//search() method is return the position of the match value
// const sentenc=" i am manoj pal from mankanagar";
// const data =sentenc.search("manoj");
// console.log(data);



//slice method in the string
// var fruits="mango, apple,orange,banana";
// let res=fruits.slice(0,4);
// console.log(res);
// let res=fruits.slice(0);
// console.log(res);





// question 
// let data=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aspernatur fugit tenetur recusandae doloribus aliquam reiciendis quas, et quasi voluptates laborum eius eum suscipit modi! Dolorum delectus optio officia error! "
// console.log(data.length);
// let res=data.slice(0,80);
// console.log(res);



// substring method  it is not accept the negative value
// let fruits="mango,apple ,orange,banana";
// let data=fruits.substring(6);
// console.log(data);





// substr method in the string 
// let fruits="mango,apple ,orange,banana";
// //  let data=fruits.substr(6);// it is also just like as substring slice and search
//  let data=fruits.substr(-12);//it is in the last of the element of the array
//  console.log(data);



// Replacing method  use for replace the data  of the string
// let name ="my name is manoj pal from praygraj manoj";
// let newdata=name.replace("manoj","MANOJ")
// console.log(newdata);

// point to remember 
// 1: replace method not change the string . it is called on. it retun new string; by default replace method replace only first match; 
//it work from start if one time match not go next word;



//chartAt method
// it return the chareter of the specified index(position) in a string
// let str ='hello word';
// console.log(str.charAt(3));



// charcodeAt method--- it return the unicode of the charecter
// unicode (0 to  65535)
// let str ='hello word';
// console.log(str.charCodeAt(3));



// question 
// return the unicode of the last charecter of the String 
// let str ='hello word';
// let last =str.length-1;
// console.log(str.charCodeAt(last));



//property access 
// allow propert access [] on stings 
// let str ='hello word';
// console.log(str[4]);







// some  useful other method
//  let name="manoj pal";
//  console.log(name.toUpperCase());
//  console.log(name.toLowerCase());



// concate method
// let fname = "manoj"
// let lname = "pal";
// console.log(fname + lname);
// console.log(`${fname}  ${lname}`);
// console.log(fname.concat(lname));
// console.log(fname.concat(" ", lname));



// String.trim method .....it remove the all space of
// var str="     manoj    pal      ";
// console.log(str.trim());



// split method  
// string can be converted in the array with the help of the split method 
// var stings="s,f,e,t,v,a";
// console.log(stings);
// console.log(stings.split(" "));
// console.log(stings.split(","));
// console.log(stings.split("|"));



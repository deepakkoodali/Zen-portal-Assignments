
 
  // Day 05 - JavaScript Functions
 
  // Activity 02  
 
 //Zen Code-Sprints :- JavaScript functions - Warmup Problems
 
 
 // Problem - 1

// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

// Input:

// addFive(5);
// addFive(0);
// addFive(-5);

// Output:

// 10
// 5
// 0

var num = 10;

function addFive(num) { 
    
 return num + 5;
}

var result = addFive(num);
console.log(result);
// Output - 15
 

 
 
 // Problem - 2

// Write a function called “getOpposite”.
// Given a number, return its opposite

// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a”);
// getOpposite(5.5);

// Output:
// -5
// 0
// 5
// -1
// -1

var num = 5;

function getOpposite(num) {
    if(num !== parseInt(num)|| typeof(num)==="string"){
        return -1;
    }else if(num<0){
        return num*-1;
    }else if(num>0){
        return -num;
    }else{
        return 0;
    }
}
var result = getOpposite(num);
 
console.log(result);
// Output - -5




// Problem - 3

// Fill in your code that takes an number minutes and converts it to seconds

// Examples
// toSeconds(5) ➞ 300

// toSeconds(3) ➞ 180

// toSeconds(2) ➞ 120

var min = 5;

function toSeconds(min) {

    return min*60;
    
}

var secs = toSeconds(min);

console.log(secs);
// Output - 300




// Problem - 4

// Create a function that takes a string and returns it as an integer.

// Examples
// toInteger(“6”) ➞ 6

// toInteger(“1000”) ➞ 1000

// toInteger(“12”) ➞ 12

var mystr = "5";

function toInteger(mystr) {
    
    return parseFloat(mystr);
}

var myint = toInteger(mystr);

console.log(myint);
// Output - 5





// Problem - 5

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// nextNumber(0) ➞ 1

// nextNumber(9) ➞ 10

// nextNumber(-3) ➞ -2

var myint = 0;

function nextNumber(myint) {
    
    if(typeof(myint)==="number"){
        return myint+1;
    }
    else{
        return myint;
    }
}

var myNextint = nextNumber(myint);

console.log(myNextint);
// - Output - 1



// Problem - 6

// Create a function that takes an array and returns the first element.

// Examples
// getFirstElement([1, 2, 3]) ➞ 1

// getFirstElement([80, 5, 100]) ➞ 80

// getFirstElement([-500, 0, 50]) ➞ -500

var arr = [1,2,3];

function getFirstElement(arr) {
    
    return arr[0];
}

var data1 = getFirstElement(arr);

console.log(data1);
// Output - 1




// Problem - 7

// Convert Hours into Seconds

// Write a function that converts hours into seconds.

// Examples
// hourToSeconds(2) ➞ 7200

// hourToSeconds(10) ➞ 36000

// hourToSeconds(24) ➞ 86400

var arr = [1, 2, 3];

function hourToSeconds(arr) {
 
 let seconds = [];  
   for(let i in arr){
       seconds.push(arr[i]*3600);
   } 
 return seconds;  
}

var data2 = hourToSeconds(arr);

console.log(data2);
// Output - [ 3600, 7200, 10800 ]





// Problem - 8

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22

function findPerimeter(num1,num2) {
 
 let perimeter = 2*(num1+num2);
   
   return perimeter; 
}

var peri = findPerimeter(6,7);

console.log(peri);
// Output - 26





// Problem - 9

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

function lessThan100(num1,num2) {

 let sum = num1+num2;
 
 if(sum<100){
     return true;
 }else{
     return false;
 }
    
}

var res = lessThan100(22,15);

console.log(res);
//Output - true




// Problem - 10

//  There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

function remainder(num1,num2) {
    
    let reminder = num1%num2;
    
    return reminder;
}

var res = remainder(1,3);

console.log(res);
// Output - 1





// Problem - 11

// Old macdonald had a farm:

// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// CountAnimals(2, 3, 5) ➞ 36

// CountAnimals(1, 2, 3) ➞ 22

// CountAnimals(5, 2, 8) ➞ 50

function CountAnimals(tur,horse,pigs) {
  
  let totallegs = (tur*2)+(horse*4)+(pigs*4);
  
  return totallegs;
    
}

var legs = CountAnimals(2,3,5);

console.log(legs);
// Output - 36




// Problem - 12

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000

function frames(num1,num2) {
  
  let fps1 = (num1*60)*num2;  

return fps1;
}

var fps = frames(1,2);

console.log(fps);
// Output - 120





// Problem - 13

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// Examples
// divisibleByFive(5) ➞ true

// divisibleByFive(-55) ➞ true

// divisibleByFive(37) ➞ false

function divisibleByFive(num1) {
    
    if(num1%5===0){
        return true;
    }else{
        return false;
    }
    
    
}

var divisible = divisibleByFive(5);

console.log(divisible);
// Output - true




// Problem -  14

// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h”);

// Output:

// true
// true
// false
// -1


function isEven(num){

 if (typeof(num)==="number"){
     if(num%2===0){
         return true;
     }else{
         return false;
     }
 }else{
     return -1;
 }
 
}

var even = isEven(5);

console.log(even);
// Output - false





// Problem - 15

// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);

// Output:

// true
// flase
// flase
// flase


function areBothOdd(num1, num2){
 
  if (typeof(num1&&num2)==="number"){
     if(num1%2===1 && num2%2===1){
         return true;
     }else{
         return false;
     }
 }else{
     return -1;
 }
 
 
}

console.log(areBothOdd(1,3));
// Output - true
console.log(areBothOdd(1,4));
// Output - false
console.log(areBothOdd(2,3));
// Output - false
console.log(areBothOdd(0,0));
// Output - false






// Problem - 16
// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

// Input:

// getFullName(“GUVI”, “GEEK”);
// getFullName(“GUVI”, );
// getFullName(, “GEEK”);
// getFullName(“”, “”);

// Output:

// “GUVI GEEK”
// “GUVI”
// “GEEK”
// “”

function getFullName(firstName, lastName){
   
   let fullname = "";
   
   if(firstName===null){
       return lastName;
   }else if (lastName===null){
       return firstName;
   }else if(firstName === "" && lastName === ""){
       return "";
   }else if (lastName===undefined){
       return firstName;
   }
   else{
       return firstName+ " "+ lastName;
   }
}

console.log(getFullName("",""));
// Output - 
console.log(getFullName("GUVI","GEEK"));
// Output - GUVI GEEK
console.log(getFullName(null,"GEEK"));
// Output - GEEK
console.log(getFullName("GUVI",null));
// Output - GUVI





// Problem - 17
// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:

// getLengthOfWord(“GUVI”);
// getLengthOfWord(“”);
// getLengthOfWord();
// getLengthOfWord(9);

// Output:

// 4
// 0
// -1
// -1

function getLengthOfWord(word1){
 if(typeof(word1)==="string"){
     return word1.length;
 }else if(typeof(word1)==="number" || word1===undefined){
     return -1;
 }
}

console.log(getLengthOfWord());
// Output - -1
console.log(getLengthOfWord(""));
// Output - 0
console.log(getLengthOfWord("GUVI"));
// Output - 4
console.log(getLengthOfWord(9));
// Output - -1





// Problem - 18
// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);
// Output:
// true


function isSameLength(word1, word2){
 
 if(word1.length===word2.length){
     return true;
 }else{
     return false;
 }
 
}

console.log(isSameLength("GUVI","GEEK"));
// Output - true




// Problem - 19

// Create a function to calculate the distance between two points defined by their x, y coordinates

console.log(getDistance(100,100,400,300));

function getDistance(x1, y1, x2, y2)
{
 let distance = Math.sqrt(((x2-x1)**2)+((y2-y1)**2));
 
 return distance.toFixed(2);
}

// Output - 360.56




// Problem - 20

// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
// Input:
// getNthElement([1, 3, 5], 1);
// Output:
// 3

function getNthElement(array,n){

    if(array.length===0){
        return undefined;
    }else{
        return array[n];
    }

}

console.log(getNthElement([1,3,5], 1));
// Output - 3





// Problem - 21

// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
// Input:
// getLastElement([1, 2, 3, 4]);
// Output:
// 4


function getLastElement(array){
 if(array.length===0){
     return -1;
 }else{
     return array[array.length-1];
 }
}

console.log(getLastElement([1, 2, 3, 4]));
// Output - 4;




// Problem - 22

// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

// var obj = {
// mykey: “value”
// };

// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);
// Output:
// value
// NA

var obj = {
 mykey:"value"
};

function getProperty(obj, key) {
 if(key in obj){
     return obj[key];
 }else{
     return "NA";
 }
 
}

console.log(getProperty(obj,"mykey"));
// Output - value
console.log(getProperty(obj,"dummykey"))
// Outut - NA




// Problem - 23

// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

// var obj = {
// }
// Input:
// addProperty(obj, “mykey”);

// Output:

// {
// mykey: true
// }

var obj = {
 mykey: "value"
};

function addProperty(obj, key){

  return obj[key] = "true" ;
    
}

addProperty(obj,"newkey");
console.log(obj);
// Output - { mykey: 'value', newkey: 'true' }





// Problem - 24

// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
// Input:
// removeProperty(obj, “name”);
// Output:
// undefined

var obj = { mykey: 'value', newkey: 'true' }

function removeProperty(obj, key){

    return delete obj[key];

}

removeProperty(obj,"newkey");

console.log(obj.newkey);
// Output - undefined





// Problem - 25

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var ar2 = function countPositivesSumNegatives(arr) {
 
 let newArr = [];
 let count = 0;
 let sum = 0;
 for(let i in arr){
     if(arr[i]>0){
         count +=1;
     }else{
         sum += arr[i];
     }
 }
    newArr.push(count);
    newArr.push(sum);
    
 return newArr;
};

console.log(ar2(arr));
// Output - [ 5, -17 ]






// Problem - 26

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
 let arrnew = [];
    for(let i in ar){
        if(ar[i]>0){
            arrnew.push(ar[i]);
        }
    }
    return arrnew;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var ar2 = getPositives(ar);

console.log(ar2);
// Output - [ 10, 12, 5, 90, 1 ]





// Problem - 27

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

// n = 0 -> 2⁰ -> [1]

// n = 1 -> 2⁰, 2¹ -> [1,2]

// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]

// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)
// Output:
// 1
// 1,2
// 1,2,4

function powersOfTwo(n){
    let res = [];
    for(let i=0;i<=n;i++){
        res.push(2**i);
    }
    return res;
}

console.log(powersOfTwo(2));
// Output - [ 1, 2, 4 ]





// Problem - 28

// Find the maximum number in an array of numbers

function findMax(ar)
{
 let max = 0;
 for(let i in ar){
     if(ar[i]>max){
         max = ar[i];
     }
 }
 return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var max = findMax(ar);

console.log("Max:",max);
// Output - Max: 90





// Problem - 29

// Print the first 100 prime numbers

printPrimes(100);

// Function prints the first nPrimes numbers

function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, "→", i);
 n++;
 }
 
 i++;
 }
}

// Returns true if a number is prime
function isPrime(n)
{
 for(let i = 2;i<n;i++){
     if(n%i===0){
         return false;
     }
    
 }return true;
 
}
// Output:

// 0 '→' 2
// 1 '→' 3
// 2 '→' 5
// 3 '→' 7
// 4 '→' 11
// 5 '→' 13
// 6 '→' 17
// 7 '→' 19
// 8 '→' 23
// 9 '→' 29
// 10 '→' 31
// 11 '→' 37
// 12 '→' 41
// 13 '→' 43
// 14 '→' 47
// 15 '→' 53
// 16 '→' 59
// 17 '→' 61
// 18 '→' 67
// 19 '→' 71
// 20 '→' 73
// 21 '→' 79
// 22 '→' 83
// 23 '→' 89
// 24 '→' 97
// 25 '→' 101
// 26 '→' 103
// 27 '→' 107
// 28 '→' 109
// 29 '→' 113
// 30 '→' 127
// 31 '→' 131
// 32 '→' 137
// 33 '→' 139
// 34 '→' 149
// 35 '→' 151
// 36 '→' 157
// 37 '→' 163
// 38 '→' 167
// 39 '→' 173
// 40 '→' 179
// 41 '→' 181
// 42 '→' 191
// 43 '→' 193
// 44 '→' 197
// 45 '→' 199
// 46 '→' 211
// 47 '→' 223
// 48 '→' 227
// 49 '→' 229
// 50 '→' 233
// 51 '→' 239
// 52 '→' 241
// 53 '→' 251
// 54 '→' 257
// 55 '→' 263
// 56 '→' 269
// 57 '→' 271
// 58 '→' 277
// 59 '→' 281
// 60 '→' 283
// 61 '→' 293
// 62 '→' 307
// 63 '→' 311
// 64 '→' 313
// 65 '→' 317
// 66 '→' 331
// 67 '→' 337
// 68 '→' 347
// 69 '→' 349
// 70 '→' 353
// 71 '→' 359
// 72 '→' 367
// 73 '→' 373
// 74 '→' 379
// 75 '→' 383
// 76 '→' 389
// 77 '→' 397
// 78 '→' 401
// 79 '→' 409
// 80 '→' 419
// 81 '→' 421
// 82 '→' 431
// 83 '→' 433
// 84 '→' 439
// 85 '→' 443
// 86 '→' 449
// 87 '→' 457
// 88 '→' 461
// 89 '→' 463
// 90 '→' 467
// 91 '→' 479
// 92 '→' 487
// 93 '→' 491
// 94 '→' 499
// 95 '→' 503
// 96 '→' 509
// 97 '→' 521
// 98 '→' 523
// 99 '→' 541





// Problem - 30

// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

console.log(getPrimes(10, 100));

function getPrimes(nPrimes, startAt)
{
 let n = 0;
 let i = startAt;
 let arr = [];
 while(n < nPrimes){
    if (isPrime(i)){
        arr.push(i);
        n++;
    }
    i++;
 }
 return arr;
}

// Returns true if a number is prime
function isPrime(n)
{
  for(let i = 2;i<n;i++){
     if(n%i===0){
         return false;
     }
    
 }return true;

}
// Output - [ 101, 103, 107, 109, 113, 127, 131, 137, 139, 149 ]




// Problem - 31

// Reverse a string

var s = reverseString("JavaScript");
console.log(s);

function reverseString(s)
{
 let str = ""
 for(let i=s.length-1;i>=0;i--){
     str += s[i];
 }
  return str;
}
// Output - tpircSavaJ




// Problem - 32

// Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);
console.log(ar);

function mergeArrays(ar1, ar2)
{
 var result = [];
 
 //this will add the first array to the result array
 for(let el of ar1){
   result.push(el);
 }
 
  for(let el of ar2){
   result.push(el);
 }

 return result;
}
// Output - [ 1, 2, 3, 4, 5, 6 ]






// Problem - 33

//Calculate the sum of numbers received in a comma delimited string

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s){
   let sum = 0;
   
   let newarr = s.split(", ").map(Number);
   
   for(let i in newarr){
       sum += newarr[i];
   }
   
   return sum;
}
// Output - 57.3



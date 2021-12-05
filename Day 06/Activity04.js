

// Activity Day06

// activity 04 - https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d

// Debugging JavaScript

// 1. Fix the code to get the largest of three.

//     aa = (f,s,t) => {
//  let f,s,t;
//  console.log(f,s,t);
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }

// aa(1,2,3);


let aa = (f,s,t) => {
   
    if(f>s && f>t){
        console.log(f);
    }else if(s>f && s>t){
        console.log(s);
    }else{
        console.log(t);
    }
}

aa(2,1,3)

//Output - 3





// 2. Fix the code to sum of the digits present in the number
    
// let n = 123;
// console.log(add(n));

// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }


let n = 123;
console.log(add(n));

function add(n){
    let sum = 0;
    
    for(var i=0;i<n;i){
        let a = n%10;
        sum += a;
        n = parseInt(n/10);
    }
    return sum;
}

// Output - 6





// 3. Fix the code to sum of all numbers using IIFE function

// const arr = [9,8,5,6,4,3,2,1];
//(function() {
//  let sum = 0;
//  for (var i = 0; i <= arr.length; i++);{
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();

const arr = [9,8,5,6,4,3,2,1];

(function(){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
    return sum;
})();

// Output - 38





// 4. Fix the code to gen Title caps.

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//  for (var i = 0; i <= arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano();

var arr = ["guvi","geek","zen","fullstack"];
var ano = function(arro) {
    for(var i=0;i<=arr.length;i++){
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}

ano(arr);

// Output - 
Guvi
Geek
Zen
Fullstack





// 5. Fix the code to return the Prime numbers

// const newArray = [1,3,2,5,10];
// const myPrime = newArray.filter(num => {
//     for(let i=2;i<=num;i++){
//         if(num%i===0){
//             return true;
//         }
//     }return num===1;
// });
// console.log(myPrime);

   
const newArray = [1,3,2,5,10];
const myPrime = newArray.filter(num => {
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }return num!==1;
});
console.log(myPrime);

// Output - [ 3, 2, 5 ]





// 6. Fix the code to sum the number in that array

// const num = [10,20,30,40,50,60,70,80,90,100]
// const sum = (a,b) =>
// a + b
// const sum = num.reduce(sum)
// console.log(sum);
 

const num = [10,20,30,40,50,60,70,80,90,100];

const sum = num.reduce((a,b) => a+b);

console.log(sum);

// Output - 550





// 7. Fix the code to rotate an array by k times and return rotated array using IIFE function

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  arr = {};
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();


var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];

var k = 3;

(function() {
 var out = arr.slice(k , arr.length);
 
 var count = out.length;
 for (var i = 0; i < k ; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);
})();

// Output - [ 6, 8, 6, 1, 9, 10, 12, 13, 1, 2, 3 ]





// 8. Fix the code to gen Title caps

// var arr = ["guvi","geek","zen","fullstack"];
//(function() {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
//  }
// })();
 
 
var arr = ["guvi","geek","zen","fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();

// Output - 
// Guvi
// Geek
// Zen
// Fullstack





// 9. Print all odd numbers in ann array using IIFE function

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//  console.log(arr[i]);
//  }}
// })();


var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];

(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 1) {
 console.log(arr[i]);
 }}
})();

// Output - 
// 1
// 3
// 5
// 7
// 79
// 7
// 9





// 10. Fix the code to reverse

// (function(str){
//  str1 = str.split(" ").reverse().join("");
//  console.log(str1); 
// })("abcd")


(function(str){
    let str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")

// Output - dcba





// 11. Fix the code to remove duplicate

// var res = function(arr){
//  for(var i=0; i < arr.length; i++){
//  newArr = [];
//  if(newArr.indexOf(arr[i]) == -1) {
//  newArr.push(arr[i]);
//  } }
//  console.log(newArr)
// }res(["guvi","geek","guvi","duplicates","geeK"])


var res = function(arr){
    var newArr = [];
    for(var i=0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
   };
   
res(["guvi","geek","guvi","duplicates","geeK"]);

// Output - [ 'guvi', 'geek', 'duplicates', 'geeK' ]





// 12. Fix the code to give the below output

// Expected output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

// var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
// var final=[]
// while(array.length!=0)
// {
//  var outer_remove = array.shift();
 
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)}

  
var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role","Coder"]]];

var final=[];

while(array.length!==0){

 var new_object = {};
 
 var outer_remove = array.shift();
 
 while(outer_remove.length!==0){
   
    var inner_remove = outer_remove.shift();
   
    var key = inner_remove[0];
    
    var value =inner_remove[1];
    
    new_object[key] = value;
    }
 final.push(new_object);
    
}
console.log(final);
   
// Output - 
// [ { firstname: 'vasanth', lastname: 'Raje', age: 24, role: 'JSWizard' },
//   { firstname: 'Sri', lastname: 'Devi', age: 28, role: 'Coder' } ] 





// 13. Fix the code to give the below output:

// sum of odd numbers in an array

// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(s);


var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce((a,c)=>{
 if(c%2===1){
 return a+c;
 }
 return a;
},0);
console.log(s);

// Output - 6





// 14. Fix the code to give the below output:

// Swap the odd and even digits

// aa = data=>{
//     var a=data;
//    for(i=0;i<a.length-1;i++){
//     var l=’’;
//     var s=a[i+1]
//     var b=a[i]
//     l+=s
//     l+=b
//     i=i+1
//    }
//    if((a.length%2)!=0){
//     l+=a[a.length-1]
//    }
//    console.log(l);
//    }aa(“1234”);


var aa = data=>{
    var a=data.toString();
    var l="";
    
    for(i=0;i<a.length-1;i++){
        var s=a[i+1];
       
        var b=a[i];
        
        l+=s;
        
        l+=b;
        
        i=i+1;
    }
    
    if((a.length%2)!==0){
        l+=a[a.length-1];
    }
    
    console.log(l);
};
    aa("1234");  

// Output -2143



















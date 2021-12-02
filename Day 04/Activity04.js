
// Day 04 - XMLHTTPRequest & scope

//Activity 04 - https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373


// Task 1: Sample programs to do for variables

// 1.Declare four variable without assigning values and print them in console

let var1;
let var2;
let var3;
let var4;

console.log(var1,var2,var3,var4);
// Output: - undefined undefined undefined undefined



// 2.How to get value of the variable myvar as output

var myvar=1;
console.log(myvar);
//Output: - 1



// 3.Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Deepak";
let lastName = "Ramesh";
let maritalStatus = "Not Married";
let country = "India";
let age = 25;


// 4.Declare variables to store your first name, last name, marital status, country and age in single lines

let firstName4 = "Deepak", lastName4 = "Ramesh", maritalStatus4 = "Not Married", country4 = "India", age4 = 25;


// 5.Declare variables and assign string,boolean,undefined and null data types

let varStr = "";
let varBln = true;
let var15 = undefined;
let var25 = null;


// 6.Convert the string to integer

// Using parseInt()
let num1 = parseInt("50");

// Using Number()
let num2 = Number("100");

// Using Plus sign(+)
let num3 = +"500";


// 7.Write 6 statement which provide truthy & falsey values.

console.log("10"==10);
// Output: - true

console.log("10"===10);
// Output: - false

let a=1;
if(a){
    console.log(true);
}
// Output: - true

let b=0;
if(!b){
    console.log(false);
}
// Output: - false

let c="";
if(!c){
    console.log(false);
}
// Output: - false

if(!false){
    console.log(true);
}
// Output: - true




// Task 2: Simple programs to do for Operators

// 1. Square of a Number

let a = 4;
let square = a**2;
console.log(square);
// Output - 16



// 2.Swapping 2 numbers

let num1 = 24;
let num2 = 35;

let temp;

temp = num1;
num1 = +num2;
num2 = +temp;

console.log("num1 = "+num1,"num2 = "+num2);
// Output - num1 = 35 num2 = 24



// 3.addition of there Number

let num1 = 10;
let num2 = 20;
let num3 = 30;

let sum = num1+num2+num3;
console.log(sum);
// Output - 60



// 4.Celsius to Fahrenheit conversion

let celsius = 35;

let fahrenheit = (celsius*9/5) +32;

console.log(fahrenheit)
// Output - 95



// 5.Meter to miles

let meterDist = 2000;

let milesDist = meterDist*0.000621;

console.log(milesDist);
// Output - 1.242



// 6.Pounds to kg

let winpounds = 10;

let winkg = winpounds/2.2046;

console.log(winkg.toFixed(2));
// Output - 4.54



// 7. Calculate Batting Average

let runScored = 559;
let timesOut = 27;

let battingAverage = runScored/timesOut;

console.log(battingAverage.toFixed(2));
// Output - 20.70


// 8.Calculate 5 test score and print their Average

let score1 = 50, score2 = 60, score3 = 70, score4 = 80, score5 = 90;

let averageScore = (score1+score2+score3+score4+score5)/5;

console.log(averageScore);
// Output - 70



// 9.Power of any number x**y

let x = 2;
let y = 3;

let power = x**y;

console.log(power);
// Output - 8



// 10.Calculate Simple Interest

let principal = 20000;
let interestRate = 10;
let timePeriod = 5;

let simpleInterest = (principal*interestRate*timePeriod)/100;

console.log(simpleInterest);
// Output - 10000



// 11. Calculate the area of an equilateral triangle

let triangleSideLength = 5;

let areaOfEquilateralTriangle = Math.sqrt(3)/4 *(triangleSideLength**2)

console.log(areaOfEquilateralTriangle.toFixed(2));
// Output - 10.83



// 12. Area of Isosceles Triangle

let baseLength = 10

let heightLength = 17

let areaOfIsoscelesTriangle = 1/2*baseLength*heightLength

console.log(areaOfIsoscelesTriangle)
// Output - 85



// 13. Volume of Sphere

let radius = 5

let pi = 3.14159

let volumeOfSphere = (4/3)*(pi)*radius**3
    
console.log(volumeOfSphere.toFixed(2))
// Output - 523.60



// 14. Volume of Prism

let baseArea = 36

let height = 9

let volumeOfPrism = baseArea*height

console.log(volumeOfPrism);
// Output - 324



// 15. Find area of a triangle

let triangleBase = 10;

let triangleHeight = 5;

let areaOfTriangle = 1/2*triangleBase*triangleHeight;

console.log(areaOfTriangle);
// Output - 25



// 16. Give the Actual cost and sold cost, Calculate Discount of product

let actualCost = 10000

let soldCost = 9000

let discountPercentage = (actualCost-soldCost)/100

console.log(discountPercentage);
// Output - 10



// 17. Given their radius of a circle and find its diameter, circumference and area.

let radiusOfCircle = 5;
let pi = 3.1415

let diameterOfCircle = 2*radiusOfCircle;

let circumferenceOfCircle = 2*pi*radiusOfCircle;

let areaOfCircle = pi*(radiusOfCircle**2);
console.log(diameterOfCircle);
// Output - 10

console.log(circumferenceOfCircle.toFixed(2));
// Output - 31.42

console.log(areaOfCircle.toFixed(2));
// Output - 78.54



// 18. Given two numbers and perform all arthemetic operations.

let firstNum = 20;

let secondNum = 10;

console.log(firstNum+secondNum);
// Output - 30

console.log(firstNum-secondNum);
// Output - 10

console.log(firstNum*secondNum);
// Output - 200

console.log(firstNum/secondNum);
// Output - 2



// 19.Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****

let displayPattern = `*****
*****
*****
*****
*****`

console.log(displayPattern);
/* Output - 
*****
*****
*****
*****
***** 
*/



// 20. Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. 
//Calculate the total energy bill of that consumer if per unit rate is 10?

let WattsPerHour = 100;
let averageHourlyUsagePerDay = 24;
let totaldays = 30;
let unitPrice = 10;

let totalElectricityBill = dailyWattsPerHour*averageHourlyUsagePerDay *totaldays/1000 *unitPrice;

console.log(totalElectricityBill);
// Output - 720



// 21. Program to Calculate CGPA

let totalMark = 600;

let totalMarkAquired = 300;

let totalPercentage = totalMarkAquired/totalMark*100;

let CGPA = totalPercentage/9.5;

console.log(CGPA.toFixed(2));
// Output = 5.26




// Task:3 - Sample programs todo for condition, Looping and Arrays


// 1. Write a loop that makes seven calls to console.log to ouotput the following triangle
// #
// ##
// ###
// ####
// #####
// ######
// #######

let triangleSize = 7
let patternStr = ""

for(let i=1;i<=triangleSize;i++){
    for(let j=0;j<i;j++){
        patternStr += "#";
        console.log(patternStr);
        break;
    }
}

// Output - 
// #
// ##
// ###
// ####
// #####
// ######
// #######



// 2. Iterate through the string array and print it contents

var strArray= ["<option>Jazz</option>",
      "<option>Blues</option>",
      "<option>New Age</option>",
      "<option>Classical</option>",
      "<option>Opera</option>"];
      
      
for(i=0;i<strArray.length;i++){
    console.log(strArray[i]);
}

// Output - 
/*
Jazz
Blues
New Age
Classical 
Opera
*/



// 3. Write a code to count the elements in the array. Don't use length property

var myarray = [11,22,33,44,55];

let countArr=0;

for(let i in myarray){
    countArr = countArr+1;
}
console.log(countArr);
// Output - 5



// 4. Declare an empty array;

let emptyArray = [];



// 5. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods = ["Biriyani","Ghee Roast","Butter chicken","Hot wings","Pizza","Aloo Paratha","Chole Bature","Idli","Appam","Cookies","Chips","Cheesecake","Peanut Butter","Fried chicken","Grilled cheeze","Fish Curry","Naan","Hummus","Nachos","Barbecue"];



// 6. Foods variable holds the names of uour 20 favorite foods, starting with the best food.
// How can you find your fifth favourite food?

let foods = ["Biriyani","Ghee Roast","Butter chicken","Hot wings","Pizza","Aloo Paratha","Chole Bature","Idli","Appam","Cookies","Chips","Cheesecake","Peanut Butter","Fried chicken","Grilled cheeze","Fish Curry","Naan","Hummus","Nachos","Barbecue"];

let favFoodPosition = 5;

console.log(foods[favFoodPosition-1]);
// Output - Pizza

// Find the length of your foods array

let arrayLength = 0;
for(let i in foods){
    arrayLength = arrayLength+1;
}
console.log(arrayLength);
// Output - 20



// 7. Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".

let friends = [
    "Mari",
    "MarryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK Chandran"
    ];
    
    function dataHandling(input){
        for (var i = 0; i < input.length; i++) {
            if(input[i]==="Mari"){
                input[i]="Munnabai";
            }
        }
    }
    
dataHandling(friends);
    
console.log(friends);
// Output - 
/* ["Munnabai",
"MarryJane",
"CaptainAmerica",
"Munnabai",
"Jeff",
"AAK Chandran"]*/



// 8. Starting from the friends variable below, Loop and print the names till you meet CaptainAmerica.

const friends = [
    "Mari",
    "MarryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK Chandran"
    ];
    
    
    function dataHandling(input){
        for (var i = 0; i < input.length; i++) {
            console.log(input[i])
            if(input[i]==="CaptainAmerica"){
                break;
            }
        }
    }

dataHandling(friends);
/* Output - 
Mari
MarryJane
CaptainAmerica
*/



// 9. Find the person is your friend or not.

const friends = [
    "Mari",
    "MarryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK Chandran"
    ];

function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
         if(input[i]===name){
            return name+" is a friend";
         }else{
            return name+" is not a friend";
         }
    }
}
    
let found = dataHandling(friends,"Jeff");
    
console.log(found);
// Output - Jeff is a friend



// 10. We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 = [
    "Mari",
    "MarryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK Chandran"
    ];
    
    
var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
    
let friends = [];
    
function dataHandling(input){
    
    for(let i=0,j=0;i<friends1.length,j<friends2.length;i++,j++){
        input.push(friends1[i],friends2[j])
    }
    
    input.sort()
}
    
dataHandling(friends);
    
// Output - 
/*[ 'AAK Chandran',
  'CaptainAmerica',
  'ET',
  'Gabbar',
  'Jeff',
  'Jeff',
  'Mari',
  'MarryJane',
  'Mass',
  'Munnabai',
  'Rajinikanth',
  'Spiderman' ]
*/



let friends = [ 'AAK Chandran',
  'CaptainAmerica',
  'ET',
  'Gabbar',
  'Jeff',
  'Jeff',
  'Mari',
  'MarryJane',
  'Mass',
  'Munnabai',
  'Rajinikanth',
  'Spiderman' ];

// 10-1: Get the first item, the middle item and the last item of the array

let firstElement = friends[0];
console.log(firstElement);
// Output - AAK Chandran

let middleElement = friends[(friends.length/2)-1];
console.log(middleElement);
// Output - Jeff

let lastElement = friends[friends.length-1];
console.log(lastElement);
// Output - Spiderman



// 10.2 Add your name to the end of the friends array, and add another name to beginning.

friends.push("Deepak");

friends.unshift("Gokul");

console.log(friends);
// Output - 
/*[ 'Gokul',
  'AAK Chandran',
  'CaptainAmerica',
  'ET',
  'Gabbar',
  'Jeff',
  'Jeff',
  'Mari',
  'MarryJane',
  'Mass',
  'Munnabai',
  'Rajinikanth',
  'Spiderman',
  'Deepak' ]
*/



// 10.3 Add Mr. or Ms to the name in the friends array.

for(let i=0;i<friends.length;i++){
    friends[i] = "Mr."+friends[i]
}
console.log(friends);
// Output
/*
[ 'Mr.Gokul',
  'Mr.AAK Chandran',
  'Mr.CaptainAmerica',
  'Mr.ET',
  'Mr.Gabbar',
  'Mr.Jeff',
  'Mr.Jeff',
  'Mr.Mari',
  'Mr.MarryJane',
  'Mr.Mass',
  'Mr.Munnabai',
  'Mr.Rajinikanth',
  'Mr.Spiderman',
  'Mr.Deepak' ]
  */


 
  let friends = [ 'AAK Chandran',
  'CaptainAmerica',
  'ET',
  'Gabbar',
  'Jeff',
  'Jeff',
  'Mari',
  'MarryJane',
  'Mass',
  'Munnabai',
  'Rajinikanth',
  'Spiderman' ];

// 10.4 concat all the names the friends array and return as comma "," seperated string.

  function commaNames(input){
  
      let name1 = input.join(",");
      
      return name1;
  }
  
  console.log(commaNames(friends));
// Output - AAK Chandran,CaptainAmerica,ET,Gabbar,Jeff,Jeff,Mari,MarryJane,Mass,Munnabai,Rajinikanth,Spiderman

  
  
// 10.5 - Find the friends who has letter "a" and return the list;
  
  function namesWithA(input){
      
      let nameArray = [];

      for(let i in input){
       
        let flag = false;
      
        let newName = input[i].split("");
      
        for(let j in newName){
           if(newName[j]==="a"){
               flag = true;
           }
        }
        if(flag){
           nameArray.push(newName.join(""));
        }
       
      }
   return nameArray;
   
  }
  
console.log(namesWithA(friends));
/* Output - [ 'AAK Chandran',
  'CaptainAmerica',
  'Gabbar',
  'Mari',
  'MarryJane',
  'Mass',
  'Munnabai',
  'Rajinikanth',
  'Spiderman' ]*/
  
  
  
// 10.6 - Find the avg length of all the friens names. Get the individual length of the names and do the avg.
  
  function averageLengthOfNames(input){
      
      let avgName = 0;
  
     let individualLength = [];
  
     for(let i in input){
       let tempStr = input[i].split("");
     
       for(let j in tempStr){
          if(tempStr[j]===" "){
            continue;
          }else{
            avgName += 1;
          }
       }
     individualLength.push(avgName);
     avgName = 0;
     
    }
  
     let totalLength = 0;
    let totalCount = individualLength.length;
  
    for(let i in individualLength){
      totalLength += individualLength[i];
     }
 
    let averageLength = Math.round(totalLength/totalCount);
 
    return averageLength;
      
  }
  
console.log(averageLengthOfNames(friends));
// Output - 7
 

 
 // 10.7 - Find the names and return the list starting with letter M.
    
function nameStartwithM(input){
        
    let nameArray = [];

    for(let i in input){
       
      let flag = false;
      
      let newName = input[i].split("");
      
      for(let j in newName){
          if(newName[0]==="M"){
              flag = true;
          }
      }
      if(flag){
          nameArray.push(newName.join(""));
      }
      
    }
    return nameArray;
}
 
console.log(nameStartwithM(friends));
// Output - [ 'Mari', 'MarryJane', 'Mass', 'Munnabai' ]
   


// 10.8 - Find the name with max characters and return the name.

function nameWithMaxChar(input){
    
     let maxCharName = "";
 let max = 0;
 for(let i in friends){
     
     if(input[i].length>max){
         max = input[i].length;
         maxCharName = input[i];
     }
 }
 return maxCharName;
}

console.log(nameWithMaxChar(friends));
// Output - CaptainAmerica
 
 
 
// 10.9 Find the name with min characters and return the name.

function nameWithMinChar(input){
     
     let minCharName = "";
  let min = input.join(" ").length;
 for(let i in input){
     
     if(input[i].length<min){
         min = input[i].length;
         minCharName = input[i];
     }
 }
 return minCharName;
}

console.log(nameWithMinChar(friends));
// Output - ET
 


// 11. find the average in the array below.
// Make sure you add only the numbers and do the avg.

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];

let add = 0;
let count = 0;
for (let i in friendsInfo){
    if(typeof(friendsInfo[i])==="number"){
        add += friendsInfo[i];
        count += 1;
    }
}
let average = add/count;

console.log(average);
// Output - 7.4



// 12. Print the contents of the input variable

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    
    function dataHandling(input){
        for (var i = 0; i < input.length; i++) {
            for(var j=0;j<input[i].length;j++){
                console.log(input[i][j])
            }
    
        }
    }
    
    dataHandling(input);
/* Output - 
0001
Roman Alamsyah
Bandar Lampung
21/05/1989
Membaca
0002
Dika Sembiring
Medan
10/10/1992
Bermain Gitar
0003
Winona
Ambon
25/12/1965
Memasak
0004
Bintang Senjaya
Martapura
6/4/1970
Berkebun
*/



// Objects:
// 13. What the output

//myobject = {1:one,”11":1,”name”:”arun”}
//console.log(myobject.11); 
//console.log(myobject.name);

//console.log(myobject.11); 
// Output - ReferenceError: one is not defined

//console.log(myobject.name);
// Output - SyntaxError: missing ) after argument list



// 14. Add a new key value pair to myobject
// key:ten
// value:ten

myobject = {1:"one","11":1,"name":"arun"};

myobject.ten = "ten"
 
console.log(myobject);



// 15. Write out an object literal to represent the data below.

// Guvi, Geek, 6, IIT-M RP, Chennai.

let addressObj = {};

addressObj.name1 = "Guvi";

addressObj.name2 = "Geek";

addressObj.block = 6;

addressObj.area = "IIT-M RP";

addressObj.city = "Chennai";

console.log(addressObj);
/* Output - 
{ name1: 'Guvi',
  name2: 'Geek',
  block: 6,
  area: 'IIT-M RP',
  city: 'Chennai' }*/



  // 16. How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
/*
Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose.
*/

// The above data is consits of 4 comapnies and its address.
// So one thing we can do to represent this data is to create an object variable which consist of array of objects,
// As everything is an address the key could be same, so we can create a an array of objects which consist of one address,
// like that for every different comapany different array which contains the object key and values.


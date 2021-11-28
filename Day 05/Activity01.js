// Day05 - JavaScript Functions

//Activity 01

// NOTE - Kept whole program on comment as the variable names are used multiple time,
// Remove the comment for IIFE functions and anonymous function seperatly as both contains same variables and functions

//Do the below programs in anonymous function & IIFE

//IIFE functions
// a. Print odd numbers in an array
/*
let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
(function(){
    for(let i in array1){
        if(array1[i]%2===1){
            console.log(array1[i]);
        }
    }
})();


// b. convert all the strings to title caps in a string array

let array2 = ["ram","shyam","mohan","geetha","sridevi"];

(function(){

    for(let i in array2){
       array2[i] = array2[i].toUpperCase();
    }
    console.log(array2)
})();


// c. Sum of all numbers in an array

let array3 = [10,20,30,40,50,60,70,80,90];

(function(){
    let sum = 0;
    for(let i in array3){
        sum = sum+array3[i];
    }
    console.log(sum)
})();


// d. Return all the prime numbers in an array

let array4 = [1,2,3,5,8,10,11,17,25,31,35,89,95,99];

let primeArray = (function(){
    let arr3 = [];
    for(let i=0;i<array4.length;i++){
        if(array4[i] <= 1){
            continue;
        }else{
            flag = true;
            for(let j=2;j<array4[i];j++){
                if(array4[i]%j===0){
                    flag = false
                    break;
                }
            }if(flag){
                arr3.push(array4[i]);
            }
           
        }

    }
    
    return arr3;
})();


// e. Return all the palindromes in an array

let array5 = ["malayalam","tamil","civic","racecar","accord","level"];

let palindromeArray = (function(){
    arrPal = [];
    for(let i=0;i<array5.length;i++){
        flag=true
        for(let j=0,k=array5[i].length-1;j<k;j++,k--){
            if(array5[i][j]!==array5[i][k]){
                flag=false;
                break;
            }
        }
        if(flag){
            arrPal.push(array5[i]);
        }
    }
    return arrPal;
})();


// f. Return median of two sorted arrays of same size

let arr1 = [1,11,15,26];
let arr2 = [2,13,17,30];

let median = (function(){

    let newArr = arr1.concat(arr2);
    newArr.sort((a,b) => a-b);

    let m1 = (newArr.length/2)-1;
    let m2 = (newArr.length/2);

    return (newArr[m1]+newArr[m2])/2;


})();


// g. Remove duplicates from an array

let array6 = ["holi","christmas","eid","diwali","christmas","eid","christmas",3,4,5,5,5,4,3,9,9,4,2];

(function(){
    let uniq = [];
    for(let i in array6){
        if(uniq.indexOf(array6[i]) === -1){
            uniq.push(array6[i])
        }
        
    }
  console.log(uniq)
})();


// k. Rotate an array by k times

let array7 = [1,2,3,4,5,6,7,8];

let k = 3;

(function(){
    
    let n = array7.length;

    for(let i=0;i<k;i++){

        let temp = array7[0];

        for(let j=0;j<n-1;j++){
            array7[j] = array7[j+1];
         }array7[n-1] = temp;
    }
    console.log(array7)
})();
*/

// Anonymous function

/*

// a. Print odd numbers in an array

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let oddArray = function(){
    for(let i in array1){
        if(array1[i]%2===1){
            console.log(array1[i]);
        }
    }
};
oddArray();


// b. convert all the strings to title caps in a string array

let array2 = ["ram","shyam","mohan","geetha","sridevi"];

let arrayCaps = function(){

    for(let i in array2){
       array2[i] = array2[i].toUpperCase();
    }
    console.log(array2)
};

arrayCaps();


// c. Sum of all numbers in an array

let array3 = [10,20,30,40,50,60,70,80,90];

let sumArray = function(arr){
    let sum = 0;
    for(let i in arr){
        sum = sum+arr[i];
    }
    return sum;
};

console.log(sumArray(array3));



// d. Return all the prime numbers in an array

let array4 = [1,2,3,5,8,10,11,17,25,31,35,89,95,99];

let primeArray = function(arr){
    let arr3 = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] <= 1){
            continue;
        }else{
            flag = true;
            for(let j=2;j<arr[i];j++){
                if(arr[i]%j===0){
                    flag = false
                    break;
                }
            }if(flag){
                arr3.push(arr[i]);
            }
           
        }

    }
    
    return arr3;
};

console.log(primeArray(array4))


// e. Return all the palindromes in an array

let array5 = ["malayalam","tamil","civic","racecar","accord","level"];

let palindromeArray = function(){
    arrPal = [];
    for(let i=0;i<array5.length;i++){
        flag=true
        for(let j=0,k=array5[i].length-1;j<k;j++,k--){
            if(array5[i][j]!==array5[i][k]){
                flag=false;
                break;
            }
        }
        if(flag){
            arrPal.push(array5[i]);
        }
    }
    return arrPal;
};

console.log(palindromeArray(array5))


// f. Return median of two sorted arrays of same size

let arr1 = [1,11,15,26];
let arr2 = [2,13,17,30];

let median = function(arr1,arr2){

    let newArr = arr1.concat(arr2);
    newArr.sort((a,b) => a-b);

    let m1 = (newArr.length/2)-1;
    let m2 = (newArr.length/2);

    return (newArr[m1]+newArr[m2])/2;


};

median(arr1,arr2);
console.log(median(arr1,arr2));


// g. Remove duplicates from an array

let array6 = ["holi","christmas","eid","diwali","christmas","eid","christmas",3,4,5,5,5,4,3,9,9,4,2];

let uniqueArray = function(arr){
    let uniq = [];
    for(let i in arr){
        if(uniq.indexOf(arr[i]) === -1){
            uniq.push(arr[i])
        }
        
    }
  return uniq
};

console.log(uniqueArray(array6))


// k. Rotate an array by k times

let array7 = [1,2,3,4,5,6,7,8];

let kTimes = 3;

let rotateFunction = function(arr,k){
    
    let n = arr.length;

    for(let i=0;i<k;i++){

        let temp = arr[0];

        for(let j=0;j<n-1;j++){
            arr[j] = arr[j+1];
         }arr[n-1] = temp;
    }
    return arr;
};

console.log(rotateFunction(array7,kTimes));
*/

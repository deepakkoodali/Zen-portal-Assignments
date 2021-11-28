// Day05 - JavaScript Functions

// Activity 03 

// Do the below programs in arrow functions

// a. Print odd numbers in an array

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let oddArray = () => {
    for(let i in array1){
        if(array1[i]%2===1){
            console.log(array1[i]);
        }
    }
};
oddArray();


// b. convert all the strings to title caps in a string array

let array2 = ["ram","shyam","mohan","geetha","sridevi"];

let arrayCaps = () => {

    for(let i in array2){
       array2[i] = array2[i].toUpperCase();
    }
    console.log(array2)
};

arrayCaps();


// c. Sum of all numbers in an array

let array3 = [10,20,30,40,50,60,70,80,90];

let sumArray = (arr) => {
    let sum = 0;
    for(let i in arr){
        sum = sum+arr[i];
    }
    return sum;
};

console.log(sumArray(array3));



// d. Return all the prime numbers in an array

let array4 = [1,2,3,5,8,10,11,17,25,31,35,89,95,99];

let primeArray = (arr) => {
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

let palindromeArray = () => {
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


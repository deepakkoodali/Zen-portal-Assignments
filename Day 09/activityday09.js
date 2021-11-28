// Day09 - MRF array method

//Activity 01 - Solve problems using array functions on rest countries data.

//rest countries data - https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json



// a. Get all the countries from Asia continent/ region using Filter function

let countriesAsia = new XMLHttpRequest();

countriesAsia.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

countriesAsia.onload = function (){
    if(countriesAsia.status >= 200 && countriesAsia.status < 300){
        let countriesData = JSON.parse(this.responseText);
    
        let result = countriesData.filter((country) => {
            return country.region === "Asia";
        });

        console.log(result)

       
    }else{
        console.log("Request Failed");
    }
};

countriesAsia.send();





// b. Get all the countries with a population of less than 2 lacks using filter function

let lowPopulation = new XMLHttpRequest();

lowPopulation.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

lowPopulation.onload = function (){
    if(lowPopulation.status >= 200 && lowPopulation.status < 300){
        let countriesData = JSON.parse(this.responseText);
             
        let limit = 200000
        let result = countriesData.filter((country) => {
            return country.population < limit
        } );

        console.log(result)

       
    }else{
        console.log("Request Failed");
    }
};

lowPopulation.send();





// c. Print the following details name, capital, flag using forEach function

let printForEach = new XMLHttpRequest();

printForEach.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

printForEach.onload = function (){
    if(printForEach.status >= 200 && printForEach.status < 300){
        let countriesData = JSON.parse(this.responseText);
        
        countriesData.forEach((country) =>{
            console.log(`
            Name : ${country.name}
            Capital : ${country.capital}
            Flag : ${country.flag}
            `)
        })

       
    }else{
        console.log("Request Failed");
    }
};

printForEach.send();





// d. Print the total population of coutries using reduce function

let populationTotal = new XMLHttpRequest();

populationTotal.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

populationTotal.onload = function (){
    if(populationTotal.status >= 200 && populationTotal.status < 300){
        let countriesData = JSON.parse(this.responseText);
   
        let result = countriesData.reduce((cur,pre) => {
            return cur + pre.population
        },0);

        console.log(result)

       
    }else{
        console.log("Request Failed");
    }
};

populationTotal.send();





// e. Print the countries which uses US Dollars as currency

let currencyUSD = new XMLHttpRequest();

currencyUSD.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

currencyUSD.onload = function (){
    if(currencyUSD.status >= 200 && currencyUSD.status < 300){
        let countriesData = JSON.parse(this.responseText);
        
        let curriency = countriesData.filter((cur) => {
            return cur.currencies.some(cur2 => cur2.code==="USD")
        }).map(country => country.name);

        console.log(curriency)
       
    }else{
        console.log("Request Failed");
    }
};

currencyUSD.send();

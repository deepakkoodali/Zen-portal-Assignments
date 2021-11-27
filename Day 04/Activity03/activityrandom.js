//Activity 03 -Day 04 assignment

//Use the same rest countries and print all countries name, region, sub region and population
//API => https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json

//set up an http request object

let requestObj = new XMLHttpRequest();

//create and send get request

requestObj.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json" )

//setup a listner
requestObj.onload = function(){
    //process the data
    if(requestObj.status >=200 && requestObj.status <300){
        // get the data from the server
        let newData = JSON.parse(this.responseText);
        for(i in newData){
            console.log(`
            Country: ${newData[i].name}
            Region: ${newData[i].region}
            Sub Region: ${newData[i].subregion}
            Population: ${newData[i].population}`)
        }
    }else{
        console.log("Request Failed");
    }
};


// Fetch-api
requestObj.send();

//Activity 02 -Day 04 assignment

//Use the rest countries API url -> https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json and display all the country flags in console

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
		console.log(newData[0])
        for(i in newData){
            console.log(newData[i].flag)
        }
    }else{
        console.log("Request Failed");
    }
};


// Fetch-api
requestObj.send();

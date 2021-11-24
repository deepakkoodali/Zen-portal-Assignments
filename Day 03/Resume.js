
//Day 03 - JS array & objects 

// Activity no. 02
//Create your own resume data in JSON format

//Sample Resume 

let resume = {
    "personalDetails":{
        "name": {
            "firstName" : "Deepak",
            "lastName" : "Koodali"
        },
        "email": "deepakramesh.koodali@gmail.com",
        "address":{
             "city" : "Trivandrum",
             "state" : "Kerala",
             "country" : "India"
        },
    },
    "education":[{
        "highschool":{
            "schoolName":"MEMS",
            "passoutYear":2012,
            "location":{"city":"Kannur","state":"Kerala"}
        },
        "higherSecondary":{
            "schoolName":"JIRS",
            "passoutYear":2014,
            "location":{"city":"Bangalore","state":"Karnataka"}
        }
    }],
    "workExperiance":[{
        "companyName":"V.R.Constructions",
        "designation":"Site Supervisor",
        "field":"OFC Networking",
        "year":"2015 - 2017",     
    },
    {
        "companyName":"V.R.Constructions",
        "designation":"Site Manager",
        "field":"OFC Networking",
        "year":"2017-2019",
    },
    {
        "companyName":"S.Creation",
        "designation":"Site Manager",
        "field":"Interior Construction",
        "year":"2019-2020"
    }],
    "skills":["Work Delegation","Strategic Planning","Communication","Conflict Resolution","Budget Management","Workforce Management","Decision Making","Attention to Details"],
    "languages":["English","Malayalam","Tamil","Hindi"]
}

console.log(resume.education[0].higherSecondary.location.city);

// Output - Bangalore






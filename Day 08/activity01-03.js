
// Day 08 - OOP JavaScript

//Activity01 - https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie{
    constructor(title,studio,rating = "PG"){
       
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies){
        let ratingmovies = [];
        for(let i in movies){
            if(movies[i].rating==="PG"){
              ratingmovies.push(movies[i])  

            }
        }
        return ratingmovies
    }
        
}

let thisMovie = [new Movie("Casino Royale","eon Production","PG13")]

console.log(thisMovie[0].getPG(thisMovie))

// Output - []





// Activity 02 - https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    constructor(radius,color){

        this.radius = radius;
        this.color = color;

    }
    get Radius(){
        return this.radius;
    }

    set Radius(newradius){
        this.radius = newradius;

    }
    get Color(){
        return this.color;
    }
    set Color(newcolor){
        this.color = newcolor;

    }
    toString(){
        return `Circle[radius = ${this.radius},color = ${this.color}`;
    }
    getArea(){
        let pi = 3.14159;
        let area = pi*(this.radius**2);
        return area;
    }
    getCircumference(){
        let pi = 3.14159;
        let circ = 2*pi*this.radius;
        return circ;
    }

}

let thisCircle = new Circle(1.0,"red");

console.log(thisCircle.getCircumference());

// Output - 6.28318





// Activity 03 - Write a "person" class to hold all the deatials.

class Person{
    constructor(firstname,lastname,age,gender,place,profile){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.place = place;
        this.profile = profile;
    }
    getName(){
        return(`${this.firstname} ${this.lastname}`)

    }
    getDetails(){
        return(`
        Name: ${this.firstname} ${this.lastname}
        Age: ${this.age}
        Gender: ${this.gender}
        Place: ${this.place}
        Profile: ${this.profile}`)
    }
}


let person1 = new Person("Deepak","Ramesh","23","Male","Trivandrum","Student");

console.log(person1.getDetails());

// Output -
// Name: Deepak Ramesh
// Age: 23
// Gender: Male
// Place: Trivandrum
// Profile: Student


// Day 08 - OOP JavaScript

//Activity04 - Write a class to calculate uber price.


let priceDecidingFactors = {
  "distnace":"In KM",
  "vehicle":{
      "uber_pool":{
          "base_price":23,
          "peek_time_price":28
      },
      "uber_hatch":{
          "base_price":30,
          "peek_time_price":36
      },
      "uber_sedan":{
          "base_price":35,
          "peek_time_price":42
      },
      "uber_suv":{
          "base_price":43,
          "peek_time_price":50
      }
  },
  "peekhours":["07:30 - 09:30","16:30 - 19:30"],
  "time":"In min",
  "currency_code":"INR",
  "customer_id":"29kl07dr255313krd05",
  "discount":"In Percentage"
}



class Uber{
  constructor(objKey){
    this.custom = {...objKey};
  }
  
  
getTime(){
  let ispeek = false;
  
  if(this.custom.time>=450 && this.custom.time<=570 || this.custom.time>=990 && this.custom.time<=1170 ){
          return true
      }

  return false
}    
  

getPrice(){

  let price = 0;
  
  let time = this.getTime();
  
  
  let vehicleType = priceDecidingFactors.vehicle[this.custom.vehicle]
  if(vehicleType){
      if(time){
          price = vehicleType.peek_time_price;
      }
      else{
          price = vehicleType.base_price;
      }
  }

  let totalprice = (this.custom.distnace*price)
  
  let discountPrice = totalprice*(this.custom.discount/100)
  
  let actualPrice = totalprice-discountPrice;

  return `INR ${actualPrice}/-`;
}

}


let newObj = new Uber({"distnace":8,"vehicle":"uber_pool","time":960,"customer_id":"29kl07dr255313krd05","discount":25});

console.log(newObj.getPrice());

// Output - INR 138/-

"use strict"

function civilAircraft(country, year){
  plane.call(this);
   this.country = country;
   this.year = year;
}
civilAircraft.prototype = Object.create(plane.prototype);

civilAircraft.prototype.jsonToObject = function(json){
    var obj = json;
    this.numberPlaces = obj["numberPlaces"];
    this.company = obj["company"];
    this.type = obj["type"];
    this.numberFlights = obj["numberFlights"];
    this.manufacturer = obj["manufacturer"];
    this.country = obj["country"];
    this.year = obj["year"];
}
civilAircraft.prototype.setCountry = function(newcountry){
  this.country = newcountry;
}
civilAircraft.prototype.getCountry = function(){
  return this.country;
}
civilAircraft.prototype.getYear = function(){
  return this.year;
}
civilAircraft.prototype.setYear = function(newyear){
  this.year = newyear;
}

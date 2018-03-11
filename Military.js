"use strict"

function militaryAircraft(militaryClass, numberWeapons){
  plane.call(this);
  this.militaryClass = militaryClass;
  this.numberWeapons = numberWeapons;
}
militaryAircraft.prototype = Object.create(plane.prototype);

militaryAircraft.prototype.jsonToObject = function(json){
       var obj = json;
       this.numberPlaces = obj["numberPlaces"];
       this.company = obj["company"];
       this.type = obj["type"];
       this.numberFlights = obj["numberFlights"];
       this.manufacturer = obj["manufacturer"];
       this.militaryClass = obj["militaryClass"];
       this.numberWeapons = obj["numberWeapons"];

}
militaryAircraft.prototype.setMilitaryClass = function(newmilitaryClass){
  this.militaryClass = newmilitaryClass;
}
militaryAircraft.prototype.getMilitaryClass = function(){
  return this.militaryClass;
}
militaryAircraft.prototype.getNumberWeapons = function(){
  return this.numberWeapons;
}
militaryAircraft.prototype.setNumberWeapons = function(newnumberWeapons){
  this.numberWeapons = newnumberWeapons;
}

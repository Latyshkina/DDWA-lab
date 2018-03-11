"use strict"

function plane(numberPlaces,company,type,numberFlights,manufacturer,discoverer){
  this.planeid;
  this.numberPlaces = numberPlaces;
  this.company = company;
  this.type = type;
  this.numberFlights = numberFlights;
  this.manufacturer = manufacturer;
  this.discoverer = discoverer;
}
plane.prototype.setId = function(id){
  this.planeid = id;
}
plane.prototype.getId = function(){
  return this.planeid;
}

plane.prototype.getNumberPlaces = function()
{
  return this.numberPlaces;
}
plane.prototype.setNumberPlaces = function(numberPlaces)
{
  this.numberPlaces = numberPlaces;
}

plane.prototype.getCompany = function()
{
  return this.company;
}
plane.prototype.setCompany = function(company)
{
  this.company = company;
}

plane.prototype.getType = function()
{
  return this.type;
}
plane.prototype.setType = function(type)
{
  this.type = type;
}

plane.prototype.getNumberFlights = function()
{
  return this.numberFlights;
}
plane.prototype.setNumberFlights = function(numberFlights)
{
  this.numberFlights = numberFlights;
}

plane.prototype.getManufacturer = function()
{
  return this.manufacturer;
}
plane.prototype.setManufacturer = function(manufacturer)
{
  this.manufacturer = manufacturer;
}



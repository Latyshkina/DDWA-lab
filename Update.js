"use strict"
  var numberPlaces = document.getElementById("numberPlaces");
  var company = document.getElementById("company");
  var type = document.getElementById("type");
  var numberFlights = document.getElementById("numberFlights");
  var manufacturer = document.getElementById("manufacturer");
  var discoverer = document.getElementById("discoverer");
  var militaryClass = document.getElementById("militaryClass");
  var numberWeapons = document.getElementById("numberWeapons");
  var country = document.getElementById("country");
  var year = document.getElementById("year");
  var id = getParam("id");
  var selectedValue = document.getElementById("selectBox");

function Save(type){
  debugger;
  var plane = PlaneF(type);
  if(id!=null) Put(id,plane);
  else Post(plane);
}

function PlaneF(type){
  debugger;
  if(type == '1'){
      var plane = new militaryAircraft(militaryClass.value, numberWeapons.value);
      plane.setMilitaryClass(document.getElementById("militaryClass").value);
      plane.setNumberWeapons(document.getElementById("numberWeapons").value);
  }
  else{
      var plane = new civilAircraft(country.value, year.value);
      plane.setYear(document.getElementById("year").value);
      plane.setCountry(document.getElementById("country").value);
  }
  plane.setNumberPlaces(document.getElementById("numberPlaces").value);
  plane.setCompany(document.getElementById("company").value);
  plane.setType(document.getElementById("type").value);
  plane.setNumberFlights(document.getElementById("numberFlights").value);
  plane.setManufacturer(document.getElementById("manufacturer").value);
  return plane;
}

function FPlane(plane, type){
  debugger;
  if(type == '1'){
    document.getElementById("country").value = plane.getCountry();
    document.getElementById("year").value = plane.getYear();
  }
  else{
    document.getElementById("militaryClass").value = plane.getMilitaryClass();
    document.getElementById("numberWeapons").value = plane.getNumberWeapons();
  }
  selectedValue.selectedIndex = type;
 //selectedValue.selectedValue = type;
  document.getElementById("numberPlaces").value = plane.getNumberPlaces();
  document.getElementById("company").value = plane.getCompany();
  document.getElementById("type").value = plane.getType();
  document.getElementById("numberFlights").value  = plane.getNumberFlights();
  document.getElementById("manufacturer").value = plane.getManufacturer();
}

function getParam(numberPlaces) {
  debugger;
  var param = location.search.split(numberPlaces + '=')[1];
  return param !== undefined ? param.split('&')[0] : null;
}

function changeType() {
 // var id = selectedValue.options[selectBox.selectedIndex].value;
 var id = document.getElementById("selectBox").value;// selectedValue.options[selectedValue.selectedIndex].value;
  if(id == "2"){
    document.getElementById("country").disabled = false;
    document.getElementById("year").disabled = false;
    document.getElementById("numberWeapons").disabled = true;
    document.getElementById("militaryClass").disabled = true;
  }
    else{
      document.getElementById("country").disabled = true;
      document.getElementById("year").disabled = true;
    document.getElementById("militaryClass").disabled = false;
    document.getElementById("numberWeapons").disabled = false;
    }
}

function GetPlane(){
  debugger;
  if(id!=null){
    var func = function() {
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(this.responseText);
          if(obj["militaryClass"]!=undefined){
               var plane = new militaryAircraft();
               plane.jsonToObject(obj);
               FPlane(plane,0);
                changeType();
          }
          else{
              var plane = new civilAircraft();
              plane.jsonToObject(obj);
              FPlane(plane,1);
                changeType();
          }
         }};
    Get(id, func);
}}

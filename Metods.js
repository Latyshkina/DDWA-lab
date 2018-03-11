"use strict"

var url = "http://localhost:3000/Planes/";
function Get(id, func){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = func;
    xhr.open("GET", url + id, true);
    xhr.send();
}

function GetAll(func){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = func;
    xhr.open("GET", url, true);
    xhr.send();
}

function Delete(id, func){
  if(confirm("Точно удалять?")){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = func;
    xhr.open("Delete", url + id, true);
    xhr.send();
}
}

function Put(id, plane){
  var xhr = new XMLHttpRequest();
  xhr.open("Put", url + id, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(plane));
  alert("Сохранить");
}

function Post(plane){
  var xhr = new XMLHttpRequest();
  xhr.open("Post", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(plane));
  alert("Сохранить");
}


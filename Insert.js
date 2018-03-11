"use strict"

function getPlanes(){
    var func = function() {
            if (this.readyState == 4 && this.status == 200) {
               var obj = JSON.parse(this.responseText);//превратит строку с данными в формате json в javascript объетк. массив. значение
               addTable(obj);
            };};
    GetAll(func);
}

function DeletePlane(id){
    var func = function() {
            if (this.readyState == 4 && this.status == 200) {
            var myTableDiv = document.getElementById("list");
                myTableDiv.innerHTML = "";
                getPlanes();
            }};
    Delete(id, func);
}

function createTD(value){
    var td = document.createElement('TD')
            td.width = "200";
            td.appendChild(document.createTextNode(value));
        return td;
        
}


 function addTable(stock) {
     debugger;
    var myTableDiv = document.getElementById("list")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')
    table.border = '1px'
    table.appendChild(tableBody);

    var heading = new Array();
    heading[0] = "Количество мест";
    heading[1] = "Компания";
    heading[2] = "Количество полетов";
    heading[3] = "Производитель";
    heading[4] = "Возможности";


    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (var i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    for (var i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        tr.appendChild(createTD(stock[i]["numberPlaces"]));
        tr.appendChild(createTD(stock[i]["company"]));
        tr.appendChild(createTD(stock[i]["numberFlights"]));
        tr.appendChild(createTD(stock[i]["manufacturer"]));
   
        
        var div = document.createElement('div');
        var link = document.createElement("a");
        var linkText = document.createTextNode("Редактировать ");
        var link2 = document.createElement("a");
        var linkText2 = document.createTextNode("Удалить");
        var link3 = document.createElement("a");
        var linkText3 = document.createTextNode("Просмотреть");
        
  
    
        link.title = "Редактировать";
        link.href = "Create.html?id=" + stock[i]['id'] ;
        link2.href = "javascript:DeletePlane("+ stock[i]['id'] + ");";
        link2.title = "Удалить";
        link3.title = "Просмотреть";
        link3.href = "Show.html?id=" + stock[i]['id'] ;
        

        link.appendChild(linkText);
        link2.appendChild(linkText2);
        link3.appendChild(linkText3);
      
        div.appendChild(link);
        div.appendChild(link2);
        div.appendChild(link3);
       
        tr.appendChild(div);
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}

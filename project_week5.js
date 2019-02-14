var idForTest="";
var domLibrary = {
    getElement : function(element,elementName){
        if(element === "id"){
            return  document.getElementById(elementName);
        }
        else if(element === "class"){
            return document.getElementByClassName(elementName);
        }
        else {
            console.log("You should get an attribute class or id");
            return;
        }
    },
    addNewElement : function(element,text,addToElement,typeOfElement ,attribute,atrebuteValue){
        if(arguments.length == 1){
           var newElement = document.createElement(element);
        }
       else {
           var  newElement = document.createElement(element);
            newElement.textContent = text;
            if(typeof attribute==='string'&&typeof atrebuteValue==="string"){
                newElement.setAttribute(attribute,atrebuteValue);
            }
             this.getElement(typeOfElement,addToElement).appendChild(newElement);
        }
        return newElement;
    },

    deleteElement : function(element){
        element.remove();
    },
    changeAttribute : function(attributeName,newValue,element){
         this.getElement(attributeName,element).setAttribute(attributeName,newValue);
         return this;
    },
    changeText : function(typeOfElement,element,newText){
       return this.getElement(typeOfElement,element).textContent = newText;
    },
    changeHTMLContent : function(typeOfElement,element,newText){
       return this.getElement(typeOfElement,element).innerHTML= newText;
    },
    changeStyleOfElement : function(typeOfElement,element,propObject,value){    
        if(typeof propObject === "Object"){
             var getElement = document.getElementById(element);
            for (var property in propObject)
                getElement.style[property] = propObject[property];
        }
        else{
            this.getElement(typeOfElement,element).style[propObject] = value;
        }
        return this;
    } ,
    accessToParentElement : function(typeOfElement,element){
       return this.getElement(typeOfElement,element).parentElement;
    },
    accessToPreviousElement : function(typeOfElement,element){
       return this.getElement(typeOfElement,element).previousElementSibling;
    },
    accessToNextElement : function(typeOfElement,element){
       return this.getElement(typeOfElement,element).nextElementSibling;
    },
    accessToAllChildElements : function(typeOfElement,element){
        return Array.from(this.getElement(typeOfElement,element).children);
    },
    addEvent: function(typeOfElement,element, event, eventFunction){
        var temp = this.getElement(typeOfElement,element)
        temp.addEventListener(event, eventFunction);
        return this;
    }
};


var divElement = document.getElementById("first-element");
var headerElement = document.createElement("h1");
headerElement.textContent = "Hello World";
divElement.appendChild(headerElement);

var paragraphElement = document.createElement("p");
paragraphElement.textContent = "Here we work with DOM and will make JS calendar";
divElement.appendChild(paragraphElement);

var header2El = document.createElement("h2");
header2El.textContent = "Create element with document.createElement!";
header2El.setAttribute("id","h2");
divElement.appendChild(header2El);


// calendar 
console.log(domLibrary.getElement("id","first-element"));
console.log(domLibrary.addNewElement("h3","smth different","first-element","id"));
//s.deleteElement(paragraphElement);
domLibrary.changeAttribute("id","cveti","first-element");
domLibrary.changeAttribute("id","smth","cveti");
//s.changeText("smth","This is the changed text");
//s.changeHTMLContent("smth","dhwfuwigurkugwgj");
console.log(domLibrary.accessToParentElement("id","smth"));
//s.getElement("smth").changeText("smth","Method chaining");
//console.log(s.accessToNextElement("smth").element.nextSibling);
//console.log(s.accessToAllChildElements("smth","h2"));

console.log(domLibrary.accessToNextElement("id","h2"));
console.log(domLibrary.accessToPreviousElement("id","h2"));
console.log(domLibrary.accessToParentElement("id","h2"));
domLibrary.changeStyleOfElement("id","h2","color","red");

//Calendar
var today = new Date();
var currentMonth =  today.getMonth();
var currentYear = today.getFullYear();
var eventCollection = [];

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function howManyDaysPerMonth(year,month) {
    if(month === 1){
        return 28 + (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 1 : 0);
    }
    else if(month === 3 || month === 5 || month === 8 || month === 10){
        return 30;
    }
    else{
        return 31;
    }
}

function displayNextMonth(){ //display next month
    if(currentMonth === 11) {
        currentMonth = 0;
        currentYear += 1;
    }else{
        currentMonth +=1;
    }
    displayCalendar(currentYear,currentMonth);
}

function displayPreviousMonth(){ //display previous month
    if(currentMonth === 0){
        currentMonth = 11;
        currentYear -= 1;
    }
    else{
        currentMonth -=1;
    }
    displayCalendar(currentYear,currentMonth);
}

var inputMonth = domLibrary.addNewElement("input","","smth","id");
    var getInputMonth = domLibrary.accessToAllChildElements("id","smth");
    console.log(getInputMonth = getInputMonth[getInputMonth.length-1]);
    getInputMonth.setAttribute("id","month");
    getInputMonth.setAttribute("placeholder","month from 0-11 here");

    var inputYear = domLibrary.addNewElement("input","","smth","id");
    var getInputYear = domLibrary.accessToAllChildElements("id","smth");
    getInputYear = getInputYear[getInputYear.length-1];
    getInputYear.setAttribute("id","year");
    getInputYear.setAttribute("placeholder","Type year here");

    /*var inputDatePicker = domLibrary.addNewElement("input","","smth","id");
    var getDatePicker = domLibrary.accessToAllChildElements("id","smth");
    getDatePicker = getDatePicker[getDatePicker.length-1];
    getDatePicker.setAttribute("id","datepicker");
    domLibrary.addEvent("id","datepicker","click",displayDatePicker);*/

function goTo(){
    currentMonth = getInputMonth.value;
    currentYear = getInputYear.value;
    displayCalendar(currentYear,currentMonth);
}

if((getInputMonth.value) && (getInputYear.value)){
    goTo();
}



var headerOfCalendar = domLibrary.addNewElement("h3","123","smth","id");
    var getHeader  = domLibrary.accessToAllChildElements("id","smth");
    getHeader = getHeader[getHeader.length-1];
    getHeader.setAttribute("id","header-calendar");

    var tableCalendar = domLibrary.addNewElement("table","","smth","id");
    var getTable = domLibrary.accessToAllChildElements("id","smth");
    getTable = getTable[getTable.length-1];
    getTable.setAttribute("id","table-calendar");

    /*function setJsonToDay(){
        var divEvent = domLibrary.addNewElement("div","",idForTest,"id","id","eventDiv");
        divEvent.style.color="black";
        var addEventButton = domLibrary.addNewElement("button","add Event","eventDiv","id");
        addEventButton.setAttribute("type","button");
        domLibrary.addEvent("id","eventDiv","click",addEventsToCollection);
    }

    function addEventsToCollection(){
        eventCollection.push("smth");
    }*/
   
function displayCalendar(year,month){
    
    getTable.innerHTML = "";

    getHeader.innerHTML = months[month] + " " + year;

    var tableHead = domLibrary.addNewElement("thead","","table-calendar","id");
     var getTableHead = domLibrary.accessToAllChildElements("id","table-calendar");
     getTableHead = getTableHead[getTableHead.length-1];
     getTableHead.setAttribute("id","head-calendar");

     var daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    for (let thead = 0; thead < 7; thead++) {
        var th = domLibrary.addNewElement("th","","head-calendar","id");
        var getTh = domLibrary.accessToAllChildElements("id","head-calendar");
        getTh = getTh[getTh.length-1];

        getTh.textContent = daysOfWeek[thead];
    }

     var tableBody = domLibrary.addNewElement("tbody","","table-calendar","id");
     var getTableBody = domLibrary.accessToAllChildElements("id","table-calendar");
     getTableBody = getTableBody[getTableBody.length - 1];
     getTableBody.setAttribute("id","body-calendar"); 
     



    var countdaysInMonth = howManyDaysPerMonth(year,month);
    console.log(countdaysInMonth);

    var firstDay = (new Date(year, month)).getDay() - 1;
    console.log(firstDay);
    var dateValue = 1;
    for (var irow = 0; irow < 6; irow++) {
        var row = domLibrary.addNewElement("tr","","body-calendar","id","id",irow.toString());
        for (var icol = 0; icol < 7; icol++) {
            if(irow === 0 && icol < firstDay){
                var col = domLibrary.addNewElement("td","",irow.toString(),"id");
            }
            else if(countdaysInMonth < dateValue){
                break;
            }
            else {
                var col = domLibrary.addNewElement("td",dateValue,irow.toString(),"id","id","col-"+irow+"-"+icol);
                //col.style.display="block";
                idForTest="col-"+irow+"-"+icol;
                //domLibrary.addEvent("id","col-"+irow+"-"+icol,"click",setJsonToDay);
                dateValue++;
               if(dateValue === today.getDate() + 1 && month === today.getMonth() && year === today.getFullYear()){ 
                    var getBody = domLibrary.accessToAllChildElements("id",irow.toString());
                    getBody= getBody[getBody.length-1];
                    getBody.setAttribute("id","current-day");
                    domLibrary.changeStyleOfElement("id","current-day","color","blue");
                }
            }
            
        }
    }

}

    var buttonPrevious = domLibrary.addNewElement("button"," < " ,"smth","id");
    var getPrevious = domLibrary.accessToAllChildElements("id","smth");
    getPrevious = getPrevious[getPrevious.length-1];
    getPrevious.setAttribute("id","previous");
    getPrevious.setAttribute("type","button");
    domLibrary.addEvent("id","previous","click",displayPreviousMonth);

    var buttonNext = domLibrary.addNewElement("button"," > ","smth","id");
    var getNext = domLibrary.accessToAllChildElements("id","smth");
    getNext = getNext[getNext.length-1];
    getNext.setAttribute("id","next");
    getNext.setAttribute("type","button");
    domLibrary.addEvent("id","next","click",displayNextMonth);



displayCalendar(currentYear,currentMonth);


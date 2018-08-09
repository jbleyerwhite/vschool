//document.
//How to create HTML Elements
// var h1 = document.createElement('div')
// var display = document.getElementById('list')

//how to append HTML Elements
// h1.innerHTML = "<span>Hey I'm an h1</span>"
// display.appendChild(h1)

//C-R-U-D: 
//C (is Post) for Create
//R is Get for READ
//U is Put for UPDATE
//D is Delete for DELETE
//AJAX - asynchronous Jacascript and XML

// Get: 
// Post:
// Put:
// Delete:

var xhr = new XMLHttpRequest() // this is the CONSTRUCTOR.  
//you need properties:  1)  readystate, 2)  onreadystate

xhr.onreadystatechange = function(){
    //code to do the requested stuff//
    //has it gotten the data & 
    //200 is always same.  ready state changes
    if(xhr.readyState == 4 && xhr.status == 200){
        //PARSING:  turns raw JSON data (string) into JS Object
        var data = JSON.parse(xhr.responseText)
        displayData(data)
    }
}
//1st, you have to open.  Must be n caps, the arguments in ()
    // 1)  request type 2) URL 3) Is asynchronous
xhr.open("GET", "https://swapi.co/api/people/1/", true)
//now we need to sent it:  xhr.send
xhr.send()

function displayData(data){
    var display = document.getElementById('list')
    display.textContent = data.name
    //dispaly.innerHTML = to pull by tag, display.classList - to pull by class
}
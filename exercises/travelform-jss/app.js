
document.travel.addEventListener('submit', function(e){
    e.preventDefault()

    var dietArr = []
    var checkedBoxes = document.travel.querySelectorAll('input[name=diet]:checked')
    for( var i = 0; i < checkedBoxes.length; i++){
        dietArr.join(checkedBoxes[i].value)
    }
    alert(document.travel.firstName.value + " " + document.travel.lastName.value + "\n" + document.travel.age.value + "\n" + document.travel.gender.value + "\n" + document.travel.location.value + "\n" + document.travel.dietArr.join(", ")

)

// declare empty array w var = [], then var checkboxes, with for loop to follow, & for loop push(to the new array)
//name of array.join(", ")

//*** Michael's answer:  document.querySelector(‘button’).addEvent
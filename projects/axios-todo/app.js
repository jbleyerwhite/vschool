// Grabbing all the info from my API

axios.get('https://api.vschool.io/julee/todo').then(function (res) {
    var apiToDo = res.data;
    displayToDo(apiToDo)
    console.dir(res.data)
})

//Make toDo visible for user
function displayToDo(data) {
    data.forEach(function (toDo) {
        var container = document.getElementById("toDoContainer");

        //var checkbox = document.createElement('toDoContainer');
        //input true/false type="checkbox"
    
        //checkbox.addEventListener('click', function(){
            //it(checkbox.checked){
                //var updtedTodo = { completed: true }
            }
        })
        //toDoData.appendChild(checkbox);

        var toDoData = document.createElement("div");
        // toDoData.id = toDo._id;
        container.appendChild(toDoData);
        toDoData.classList.add("decorate-me")
        //appendedChild to var toDoData//
        toDoData.innerHTML = `
                            <div id=${toDo._id} >
                                <h3> ${toDo.title} </h3>
                                <p> ${toDo.description} </p>
                                <p> ${toDo.price} </p>
                            </div>
                          `
//DELETE button//    
        var button = document.createElement("button");
        button.className = 'delete-button';
        button.innerHTML = 'delete';
        button.addEventListener('click', function () {
            deleteItem(toDo._id)
        })
        // set the click function for change
        // editButton.addEventListener('click', function(){
        // // toggle code goes here
        //     putFunction()
        // })

// SAVE button
        var saveButton = document.createElement("button");
        saveButton.className = 'save-button';
        saveButton.innerHTML = 'save';
        saveButton.addEventListener('click', function(){
            saveItem(toDo._id)
            displayEl(toDo._id)
        })


//EDIT button//
        var editButton = document.createElement("button");
        editButton.className = 'edit-button';
        editButton.innerHTML = 'edit';
        editButton.addEventListener('click', function(){
            editItem(toDo._id)
        })
        // editButton.addEventListener('click', function(){
        //     putFunction()
        // })

        //create edit form:  
        var editForm = document.createElement('form')
        editForm.setAttribute('id', `e${toDo._id}`)
        editForm.setAttribute('class', 'editForms')
        
        editForm.innerHTML = `
            <input type="text" name="title" placeholder="todo" value='e${toDo.title}' />
            <br>
            <input type="text" name="description" placeholder="notes" value='e${toDo.description}'/>
            <br>
            <input type="number" name="price" placeholder="$" value='e${toDo.price}' />
            <br>
            <input type="text" name="imgUrl" placeholder="img url https://" value='e${toDo.imgUrl}'/>
            
            `;  
        toDoData.appendChild(editForm)
        toDoData.appendChild(button)
        toDoData.appendChild(saveButton)
        toDoData.appendChild(editButton)
        //apend checkbox
    })
        //<img src="${toDo.imgUrl}" heitht="40px" width="40px">

}
//SAVE function:


//EDIT:  
// var toDoData = document.createElement("div");
//         toDoData.id = toDo._id;
//         container.appendChild(toDoData);
//         toDoData.classList.add("decorate-me")
//         //appendedChild to var toDoData//
//         toDoData.innerHTML = `
//                             <h3> ${toDo.title} </h3>
//                             <p> ${toDo.description} </p>
//                             <p> ${toDo.price} </p>
//                             `
//         var button = document.createElement("button");
//         button.className = 'delete-button';
//         button.innerHTML = 'delete';
//         button.addEventListener('click', function () {
//             deleteItem(toDo._id)
//         })
//         toDoData.appendChild(button)


//DELETE function
//on click, delete function, removes toDoContainer
function deleteItem(id) {
    axios.delete("https://api.vschool.io/julee/todo/" + id).then(function (res) {
        console.log(res)
        //access the container element
        var container = document.getElementById("toDoContainer");
        var child = document.getElementById(id);
        container.removeChild(child.parentElement)

        // document.getElementById("toDo_id").removeChild("container");
        //find the child with the current id:  FIND toDo._id - remove it from the container:  REMOVE from CONTAINER
    })
}

//EditITEM PUT Function:
// var editForm = document.getElementById("editTodo")
// editForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     var editListItem = {}
// })
function editItem(id) {
    document.getElementById(id).style.display = 'none';
    var editing = document.getElementById(`e${id}`);
    editing.style.display = 'block';
}

function saveItem(id) {
    document.getElementById(id).style.display = 'none';
    var editing = document.getElementById(`e${id}`);
    editing.style.display = 'block';

    // editing.addEventListener('click', function(){
        //gather data from forms 
        //put data into new updated object
        var updatedTodo = {}
        updatedTodo.title = editing.title.value;
        updatedTodo.description = editing.description.value;
        updatedTodo.price = editing.price.value;
        
        axios.put("https://api.vschool.io/julee/todo/" + id, updatedTodo).then(function (res) {
        
        //displayToDo(res.data)?????
        //access the container element
        })

    // })
}

function displayEl(id){
    document.getElementById(id).style.display = 'block';
    var form = document.getElementById(`e${id}`);
    console.log(form)
    form.style.display = 'none';
    console.log('here')
    //gather data from forms 
    //put data into new updated object
    var updatedTodo = {}
    updatedTodo.title = form.title.value;
    updatedTodo.description = form.description.value;
    updatedTodo.price = form.price.value;
    console.log(updatedTodo)

    var elements = document.getElementById(id).children
    elements[0].textContent = updatedTodo.title;
    elements[1].textContent = updatedTodo.description;
    elements[2].textContent = updatedTodo.price;
}

// document.querySelectorAll('.save-button').addEventListener('click', function(){
//     document.newTodo.style.display = "inline-block";
//     document.editTodo.style.display = "none"
// })

/////////////////////////////////////
//POST a new TODO - use a FORM//:  
//  1)  HTML outline w button & Form, 
//  2)  JS ToDO Buttons:  (toDo, Notes, $)  - pulls inputs from API array items
//  3)  addEventListener - submit w function
/////////////////////////////////////
document.newTodo.addEventListener("submit", function (e) {
    e.preventDefault();
    var newPost = {}
    newPost.title = newTodo.title.value;
    // = got to the name of the form(html) and add the title & value
    newPost.description = newTodo.description.value;
    newPost.price = newTodo.price.value;
    newPost.price.value = newTodo.price.value;
    // newPost.imgUrl = newTodo.imgUrl.value
    axios.post("https://api.vschool.io/julee/todo", newPost).then(function (res) {
        displayToDo([res.data])
    })
})
//EDIT button:
// document.newTodo.addEventListener('submit', function(e) {
//     e.preventDefault();
// //    document.newTodo.style.display = 'none';
// //    document.editTodo.style.display = 'inline-block';
// }
// )



// SAVE button:
// document.editTodo.addEventListener('submit', function(e){
//     e.preventDefault()
//     var editTodo = {}
//     newPost.title = editTodo.title.value;
//     newPost.description = editTodo.description.value;
//     newPost.price = editTodo.price.value;

//     axios.put("https://api.vschool.io/julee/todo", editTodo).then(function(res){
//         displayToDo(res.data)
//     })
// })



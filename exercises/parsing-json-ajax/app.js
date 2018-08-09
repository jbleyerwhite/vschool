var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
       
        var data = JSON.parse(xhr.responseText)
        console.log(data)
        parsePokemon(data.objects[0].pokemon)
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()

function parsePokemon(data){
    for (var i=0; i < data.length; i++ ){
        var div = document.getElementById('list');
        var pokemon = document.createElement('div')

        div.appendChild(pokemon)

        pokemon.innerHTML = `
                <h3> ${data[i].name[0].toUpperCase() + data[i].name.slice(1)} </h3>
            `
            div.style.fontFamily="arial";
            div.style.color="white";

    }


   
}

    
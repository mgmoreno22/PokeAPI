// start with getting the pokemon by ID
// add a drop down menu with the first 151 pokemon
$(document).ready(function() {

    $("#searchBtn").on("click", function(event) {
        event.preventDefault()
        if ($("#pokemonID").val() != "") {
            var pokeName = $("#pokemonID").val().trim().toLowerCase()
            var url = "https://pokeapi.co/api/v2/pokemon/" + pokeName
            var url2 = "https://pokeapi.co/api/v2/pokemon-species/" + pokeName

            // Display Pokemon NAME and IMAGE
            $.ajax({
                url: url,
                method: "GET"
            }).then(function(data){
                //Show All Data in Console
                console.log(data)

                // Change Image
                var imgEl = $(".card-img-top")
                imgEl.attr("src", data.sprites.front_default)

                // Change Name
                var nameEl = $(".card-title").text(data.name.toUpperCase())
            }) //end of first THEN

            // Display Pokemon INFO
            $.ajax({
                url: url2,
                method: "GET"
            }).then(function(response) {
                console.log(response)
                var flavorArr = response.flavor_text_entries
                var randEntry = Math.floor(Math.random() * flavorArr.length)
                var flavorText = flavorArr[randEntry].flavor_text
                var flavorLang = flavorArr[randEntry].language.name
                
                console.log(flavorText)
                console.log(flavorLang)
                while(flavorLang != "en") {
                if (flavorLang != "en") {
                    randEntry = Math.floor(Math.random() * flavorArr.length)
                    flavorText = flavorArr[randEntry].flavor_text
                    flavorLang = flavorArr[randEntry].language.name
                    console.log(flavorLang)
                }
                $("#flavorText").text(flavorText)
            } 
            }) //end of second THEN
        } //closes if statement
    })
})
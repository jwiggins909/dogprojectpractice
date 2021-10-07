function handleOnLoad(){
    const dogApiUrl = "https://api.thedogapi.com/v1/images/search";

    fetch(dogApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        var img= json[0].url;
        var html = "<img src=\""+ img +"\"style =\"width:100%\"></img>";
        const breedData = json[0].breeds[0];
        var breed; var weight; var lifeSpan;
        try{
            breed = breedData.name;
        }
        catch{
            breed = 'Unknown';
        }
        try{
            weight = breedData.weight.imperial;
        }
        catch{
            weight = 'Unknown';
        }
        try{
            lifeSpan = breedData.life_span;
        }
        catch{
            lifeSpan = 'Unknown';
        }

        html+= "<div class = \"conatainer\">";
        html+= "<div><p><b>Breed:</b>" + breed + "<p>";
        html+= "<div><p><b>Normal Weight:</b>" + weight + "<p>";
        html+= "<div><p><b>Normal Lifespan:</b>" + lifeSpan + "<p>";
        html+= "</div>"

        document.getElementById("dog").innerHTML = html;
    })
}
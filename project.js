function getApi() {
    console.log('getApi est lancée');
    $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=rGXWGlOm6oQKxNkyXw2p4on398eNjYc2zbhenhLK",
        method: "GET",
        dataType: "json",
    })
    
    .done(function(response){
        let data = response.photos.img_src;
        for (i=0; i<3; i++) {
            let img = $('<img>');
            img.attr('src', data[i]);
            $("#test").append(img);
        }
        console.log('donnéeApi',data);
    })
    
    .fail(function(error){
        console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    .always(function(){
        console.log("Requête effectuée");
    })
}
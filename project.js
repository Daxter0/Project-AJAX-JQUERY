function getApi() {
    console.log('getApi est lancée');
    $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=rGXWGlOm6oQKxNkyXw2p4on398eNjYc2zbhenhLK",
        method: "GET",
        dataType: "json",
    })
    
    .done(function(response){
        let data = response.photos[0].img_src;
        console.log('donnéeApi',data);

        for (i=0; i<3; i++) {
            var img = $('<img>');
            img.attr('src', response.photos[i].img_src);
            $("#photo").append(img);
        }
        
    })
    
    .fail(function(error){
        console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    .always(function(){
        console.log("Requête effectuée");
    })
}
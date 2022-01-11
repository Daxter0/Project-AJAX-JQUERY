function getApi() {
    console.log('getApi est lancée');
    $.ajax({
        url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
        method: "GET",
        dataType: "json",
    })
    
    .done(function(response){
        let data = response.results[0].summary_short;
        let para = $('<p>');
        para.attr('id', 'par0');
        $("#photo").append(para);
        $("#par0").append(data);
        console.log(data);
    })
    
    .fail(function(error){
        console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    .always(function(){
        console.log("Requête effectuée");
    })



    $.ajax({
        url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
        method: "GET",
        dataType: "json",
    })
    
    .done(function(response){
        let data = response.results[4].summary_short;
        let para = $('<p>');
        para.attr('id', 'par1');
        $("#photo").append(para);
        $("#par1").append(data);
        console.log(data);
    })
    
    .fail(function(error){
        console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    .always(function(){
        console.log("Requête effectuée");
    })



    $.ajax({
        url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
        method: "GET",
        dataType: "json",
    })
    
    .done(function(response){
        let data = response.results[8].summary_short;
        let para = $('<p>');
        para.attr('id', 'par2');
        $("#photo").append(para);
        $("#par2").append(data);
        console.log(data);
    })
    
    .fail(function(error){
        console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    .always(function(){
        console.log("Requête effectuée");
    })
}
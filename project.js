function getApiSpiderManNoWayHome() {
        
    if ( $('#spiderManNoWayHome').is(':empty') ) {

        console.log('getApi est lancée');

        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[0].display_title;
            let data2 = response.results[0].summary_short;
            let data3 = response.results[0].opening_date;
            let para = $('<p>');
            para.attr('id', 'par0');
            $("#spiderManNoWayHome").append(para);
            $("#par0").append("<strong>Title :</strong><br/>" + data + "<br/><br/><strong>Summary :</strong><br/>" + data2 + "<br/><br/><strong>Opening date :</strong><br/>" + data3).hide(1).fadeToggle("slow", "linear");
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })

    } else {
        $('#par0').fadeToggle("slow", "linear");
    }
    
}

function getApiSpiderManAmazing() {
    if ( $('#spiderManAmazing').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[4].display_title;
            let data2 = response.results[4].summary_short;
            let data3 = response.results[4].opening_date;
            let para = $('<p>');
            para.attr('id', 'par1');
            $("#spiderManAmazing").append(para);
            $("#par1").append("<strong>Title :</strong><br/>" + data + "<br/><br/><strong>Summary :</strong><br/>" + data2 + "<br/><br/><strong>Opening date :</strong><br/>" + data3).hide(1).fadeToggle("slow", "linear");
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })
    } else {
        $('#par1').fadeToggle("slow", "linear"); 
    }
}

function getApiSpiderMan() {
    if ( $('#spiderMan').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[8].display_title;
            let data2 = response.results[8].summary_short;
            let data3 = response.results[8].opening_date;
            let para = $('<p>');
            para.attr('id', 'par2');
            $("#spiderMan").append(para);
            $("#par2").append("<strong>Title :</strong><br/>" + data + "<br/><br/><strong>Summary :</strong><br/>" + data2 + "<br/><br/><strong>Opening date :</strong><br/>" + data3).hide(1).fadeToggle("slow", "linear");
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })
    } else {
        $('#par2').fadeToggle("slow", "linear");
    }
}

$(function(){
    setInterval(function(){
       $("#caroussel ul").animate({marginLeft:-350},800,function(){
          $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
       })
    }, 3500);
});


//  function getApi() {
//     if ( $('#allApi').is(':empty') ) {
//         $.ajax({
//             url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
//             method: "GET",
//             dataType: "json",
//         })
        
//         .done(function(response){
//             let data = response.results[5].display_title;
//             let data2 = response.results[5].summary_short;
//             let data3 = response.results[5].opening_date;
//             let para = $('<p>');
//             para.attr('id', 'all');
//             $("#allApi").append(para);
//             $("#all").append(data);
//             $("#all").append(data2);
//             $("#all").append(data3);
//             console.log(data);
//         })
        
//         .fail(function(error){
//             console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
//         })

//         .always(function(){
//             console.log("Requête effectuée");
//         })
//     } else {
//         $('#all').fadeToggle("slow", "linear");
//     }
// }

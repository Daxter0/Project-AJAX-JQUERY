function getApiSpiderManNoWayHome() {
    if ( $('#spiderManNoWayHome').is(':empty') ) {

        console.log('getApi est lancée');

        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let dataNoWayHomeTitle = response.results[0].display_title;
            let dataNoWayHomeSummary = response.results[0].summary_short;
            let dataNoWayHomeDate = response.results[0].opening_date;
            let dataAmazingTitle = response.results[4].display_title;
            let dataAmazingSummary = response.results[4].summary_short;
            let dataAmazingDate = response.results[4].opening_date;
            let dataTitle = response.results[8].display_title;
            let dataSummary = response.results[8].summary_short;
            let dataDate = response.results[8].opening_date;
            let paraNoWayHome = $('<p>');
            paraNoWayHome.attr('id', 'paraNoWayHome');
            $("#spiderManNoWayHome").append(paraNoWayHome);
            $("#paraNoWayHome").append("<strong>Title :</strong><br/>" + dataNoWayHomeTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataNoWayHomeSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataNoWayHomeDate).hide(1).fadeToggle("slow", "linear");
            let paraAmazing = $('<p>');
            paraAmazing.attr('id', 'paraAmazing');
            $("#spiderManAmazing").append(paraAmazing);
            $("#paraAmazing").append("<strong>Title :</strong><br/>" + dataAmazingTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataAmazingSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataAmazingDate).hide(1);
            let para = $('<p>');
            para.attr('id', 'para');
            $("#spiderMan").append(para);
            $("#para").append("<strong>Title :</strong><br/>" + dataTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataDate).hide(1);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })

    } else {
        $('#paraNoWayHome').fadeToggle("slow", "linear");
    }
}

function getApiSpiderManAmazing() {

    if ( $('#spiderManAmazing').is(':empty') ) {

        console.log('getApi est lancée');

        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let dataNoWayHomeTitle = response.results[0].display_title;
            let dataNoWayHomeSummary = response.results[0].summary_short;
            let dataNoWayHomeDate = response.results[0].opening_date;
            let dataAmazingTitle = response.results[4].display_title;
            let dataAmazingSummary = response.results[4].summary_short;
            let dataAmazingDate = response.results[4].opening_date;
            let dataTitle = response.results[8].display_title;
            let dataSummary = response.results[8].summary_short;
            let dataDate = response.results[8].opening_date;
            let paraNoWayHome = $('<p>');
            paraNoWayHome.attr('id', 'paraNoWayHome');
            $("#spiderManNoWayHome").append(paraNoWayHome);
            $("#paraNoWayHome").append("<strong>Title :</strong><br/>" + dataNoWayHomeTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataNoWayHomeSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataNoWayHomeDate).hide(1);
            let paraAmazing = $('<p>');
            paraAmazing.attr('id', 'paraAmazing');
            $("#spiderManAmazing").append(paraAmazing);
            $("#paraAmazing").append("<strong>Title :</strong><br/>" + dataAmazingTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataAmazingSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataAmazingDate).hide(1).fadeToggle("slow", "linear");
            let para = $('<p>');
            para.attr('id', 'para');
            $("#spiderMan").append(para);
            $("#para").append("<strong>Title :</strong><br/>" + dataTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataDate).hide(1);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })

    } else {
        $('#paraAmazing').fadeToggle("slow", "linear");
    }
}

function getApiSpiderMan() {

    if ( $('#spiderMan').is(':empty') ) {

        console.log('getApi est lancée');

        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let dataNoWayHomeTitle = response.results[0].display_title;
            let dataNoWayHomeSummary = response.results[0].summary_short;
            let dataNoWayHomeDate = response.results[0].opening_date;
            let dataAmazingTitle = response.results[4].display_title;
            let dataAmazingSummary = response.results[4].summary_short;
            let dataAmazingDate = response.results[4].opening_date;
            let dataTitle = response.results[8].display_title;
            let dataSummary = response.results[8].summary_short;
            let dataDate = response.results[8].opening_date;
            let paraNoWayHome = $('<p>');
            paraNoWayHome.attr('id', 'paraNoWayHome');
            $("#spiderManNoWayHome").append(paraNoWayHome);
            $("#paraNoWayHome").append("<strong>Title :</strong><br/>" + dataNoWayHomeTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataNoWayHomeSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataNoWayHomeDate).hide(1);
            let paraAmazing = $('<p>');
            paraAmazing.attr('id', 'paraAmazing');
            $("#spiderManAmazing").append(paraAmazing);
            $("#paraAmazing").append("<strong>Title :</strong><br/>" + dataAmazingTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataAmazingSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataAmazingDate).hide(1);
            let para = $('<p>');
            para.attr('id', 'para');
            $("#spiderMan").append(para);
            $("#para").append("<strong>Title :</strong><br/>" + dataTitle + "<br/><br/><strong>Summary :</strong><br/>" + dataSummary + "<br/><br/><strong>Opening date :</strong><br/>" + dataDate).hide(1).fadeToggle("slow", "linear");
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })

    } else {
        $('#para').fadeToggle("slow", "linear");
    }
}

$(function(){
    setInterval(function(){
       $("#caroussel ul").animate({marginLeft:-350},800,function(){
          $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
       })
    }, 3500);
});
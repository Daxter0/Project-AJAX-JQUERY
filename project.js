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

window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item');
    addActive = function(slide) {slide.classList.add('active')};
    removeActive = function(slide) {slide.classList.remove('active')};

    addActive(slides[0]);
    
    setInterval(function () {
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive, 350, slides[i]);
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 350, slides[i]); 
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 4000);
}
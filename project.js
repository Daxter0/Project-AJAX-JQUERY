function getApiSpiderMan() {
        
    if ( $('#spiderMan').is(':empty') ) {

        console.log('getApi est lancée');

        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[0].display_title;
            let para = $('<p>');
            para.attr('id', 'par0');
            $("#spiderMan").append(para);
            $("#par0").append("Title :<br/>");
            $("#par0").append(data);
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
    getApiSpiderManNo();
}

function getApiSpiderManNo() {
    if ( $('#spiderMan').is(':empty') ) {

        console.log('getApi est lancée');

        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[0].summary_short;
            let para = $('<p>');
            para.attr('id', 'parNo');
            $("#spiderMan").append(para);
            $("#parNo").append("Summary :<br/>");
            $("#parNo").append(data);
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })

    } else {
        $('#parNo').fadeToggle("slow", "linear");
    }
}

function getApiSpiderMan1() {
    if ( $('#spiderMan1').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[4].display_title;
            let para = $('<p>');
            para.attr('id', 'par1');
            $("#spiderMan1").append(para);
            $("#par1").append("Title :<br/>");
            $("#par1").append(data);
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

    getApiSpiderManAmazing();
}

function getApiSpiderManAmazing() {
    if ( $('#spiderMan1').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[4].summary_short;
            let para = $('<p>');
            para.attr('id', 'parAmazing');
            $("#spiderMan1").append(para);
            $("#parAmazing").append("Summary :<br/>");
            $("#parAmazing").append(data);
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })
    } else {
        $('#parAmazing').fadeToggle("slow", "linear"); 
    }
}

function getApiSpiderMan2() {
    if ( $('#spiderMan2').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[8].display_title;
            let para = $('<p>');
            para.attr('id', 'par2');
            $("#spiderMan2").append(para);
            $("#par2").append("Title :<br/>");
            $("#par2").append(data);
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

    getApiSpiderManYo() 
}

function getApiSpiderManYo() {
    if ( $('#spiderMan2').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[8].summary_short;
            let para = $('<p>');
            para.attr('id', 'parYo');
            $("#spiderMan2").append(para);
            $("#parYo").append("Summary :<br/>");
            $("#parYo").append(data);
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })
    } else {
        $('#parYo').fadeToggle("slow", "linear");
    }
}

$(function(){
    setInterval(function(){
       $("#caroussel ul").animate({marginLeft:-350},800,function(){
          $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
       })
    }, 3500);
 });


 function getApi() {
    if ( $('#allApi').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response;
            let para = $('<p>');
            para.attr('id', 'all');
            $("#allApi").append(para);
            $("#all").append(data);
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })
    } else {
        $('#all').fadeToggle("slow", "linear");
    }
}
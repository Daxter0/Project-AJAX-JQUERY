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
            $("#par0").append("<strong>Title :</strong><br/>");
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
    getApiSpiderManNoDate();
    
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
            $("#parNo").append("<strong>Summary :</strong><br/>");
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

function getApiSpiderManNoDate() {
    if ( $('#spiderMan').is(':empty') ) {

        console.log('getApi est lancée');

        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[0].opening_date;
            let para = $('<p>');
            para.attr('id', 'parNoDate');
            $("#spiderMan").append(para);
            $("#parNoDate").append("<strong>Opening date :</strong><br/>");
            $("#parNoDate").append(data);
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })

    } else {
        $('#parNoDate').fadeToggle("slow", "linear");
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
            $("#par1").append("<strong>Title :</strong><br/>");
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
    getApiSpiderManAmazingDate();
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
            $("#parAmazing").append("<strong>Summary :</strong><br/>");
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

function getApiSpiderManAmazingDate() {
    if ( $('#spiderMan1').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[4].opening_date;
            let para = $('<p>');
            para.attr('id', 'parAmazingDate');
            $("#spiderMan1").append(para);
            $("#parAmazingDate").append("<strong>Opening date :</strong><br/>");
            $("#parAmazingDate").append(data);
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
            $("#par2").append("<strong>Title :</strong><br/>");
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

    getApiSpiderManYo();
    getApiSpiderManYoDate();
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
            $("#parYo").append("<strong>Summary :</strong><br/>");
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

function getApiSpiderManYoDate() {
    if ( $('#spiderMan2').is(':empty') ) {
        $.ajax({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
            method: "GET",
            dataType: "json",
        })
        
        .done(function(response){
            let data = response.results[8].opening_date;
            let para = $('<p>');
            para.attr('id', 'parYoDate');
            $("#spiderMan2").append(para);
            $("#parYoDate").append("<strong>Opening date :</strong><br/>");
            $("#parYoDate").append(data);
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })
    } else {
        $('#parYoDate').fadeToggle("slow", "linear");
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
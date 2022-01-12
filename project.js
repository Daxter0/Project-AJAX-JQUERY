function getApiSpiderManNoWayHome() {
        
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
            // $("#par0").hide(1);
            // $("#par0").show($('#par0').fadeToggle("slow", "linear"));
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
            // $("#parNo").hide(1);
            // $("#parNo").show($('#parNo').fadeToggle("slow", "linear"));
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
            // $("#parNoDate").hide(1);
            // $("#parNoDate").show($('#parNoDate').fadeToggle("slow", "linear"));
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

function getApiSpiderManAmazing() {
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
            // $("#par1").hide(1);
            // $("#par1").show($('#par1').fadeIn("slow", "linear"));
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

    getApiSpiderManAmazingSummary();
    getApiSpiderManAmazingDate();
}

function getApiSpiderManAmazingSummary() {
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
            // $("#parAmazing").hide(1);
            // $("#parAmazing").show($('#parAmazing').fadeIn("slow", "linear"));
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
            // $("#parAmazingDate").hide(1);
            // $("#parAmazingDate").show($('#parAmazingDate').fadeIn("slow", "linear"));
            console.log(data);
        })
        
        .fail(function(error){
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function(){
            console.log("Requête effectuée");
        })
    } else {
        $('#parAmazingDate').fadeToggle("slow", "linear"); 
    }
}

function getApiSpiderMan() {
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
            // $("#par2").hide(1);
            // $("#par2").show($('#par2').fadeIn("slow", "linear"));
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

    getApiSpiderManSummary();
    getApiSpiderManDate();
}

function getApiSpiderManSummary() {
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
            // $("#parYo").hide(1);
            // $("#parYo").show($('#parYo').fadeIn("slow", "linear"));
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

function getApiSpiderManDate() {
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
            // $("#parYoDate").hide(1);
            // $("#parYoDate").show($('#parYoDate').fadeIn("slow", "linear"));
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

// $('.caroussel').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
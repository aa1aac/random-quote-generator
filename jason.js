function api(){$.getJASON('https://talaikis.com/api/quotes/random/')
.done(function(data){
    $(".text").text(data.quote);
})}
api();

$("#newQuote").click(alert("hello"));
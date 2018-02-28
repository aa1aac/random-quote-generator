var i;
colors=["red","yellow","green","blue"]
function getQuote(){
    $.get("https://talaikis.com/api/quotes/random/")
    .done(function(data){
        $("#quote").text(data.quote);
        $("#author").text(`- ${data.author}`);
    })
    .fail(function(){
        console.log("Opps some error occured")
      $("body").css("backgroundColor",colors[i]);
    })
  i+=1;
  if (i<=3){i=0;}
}
getQuote();
$(".btn").click(getQuote);
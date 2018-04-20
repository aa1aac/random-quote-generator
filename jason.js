var i=0;
colors=["rgb(0, 0, 0)",
"rgb(241, 62, 62)",
"rgb(211, 255, 14)",
"rgb(255, 0, 128)",
"rgb(0, 26, 255)",
]
function changeColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var a = Math.random();
  color = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  $("body").css("backgroundColor", color);

}
function getQuote(){
    $.get("https://talaikis.com/api/quotes/random/")
    .done(function(data){
        $("#quote").text(data.quote);
        $("#author").text(`- ${data.author}`);
        changeColor();
    })
    .fail(function(){
        console.log("Opps some error occured");
    })
  i+=1;
  if (i<=3){i=0;}
}
getQuote();
$(".new").click(getQuote);
var i=0;
colors=["rgb(0, 0, 0)",
"rgb(241, 62, 62)",
"rgb(211, 255, 14)",
"rgb(255, 0, 128)",
"rgb(0, 26, 255)",
]
var body=document.querySelector("body");
function changeColor(){
 body.style.backgroundColor=colors[i];
 if (i==4){
   i=0;
 }
 i=i+1;
}
function getQuote(){
    $.get("https://talaikis.com/api/quotes/random/")
    .done(function(data){
        $("#quote").text(data.quote);
        $("#author").text(`- ${data.author}`);
        changeColor();
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

$(".btn").css({marginTop : "10px",width:"100%"});
$('#take').css({backgroundColor : "#cf3832", border: "1px solid #cf3832" })

var $curr = $( "#start" ); 
var counter=0;

$( "#add" ).click(function() {
  if (counter <8){
    if( $("input").val() !== ""){
      $('.underFlow').addClass("visibility")
      counter++;
      $curr.html( $("input").val() );
      $curr.addClass("slacked");
      $curr = $curr.prev();
    }
  }
  else {
    $('.overFlow').removeClass("visibility")  
  }
});

$( "#take" ).click(function() {
  if (counter > 0){
    $('.overFlow').addClass("visibility") 
    counter --;
    $curr.next().removeClass("slacked");
    $curr.next().html("");
    $curr = $curr.next(); 
  }
  else {
    $('.underFlow').removeClass("visibility") ;
  }
}
);
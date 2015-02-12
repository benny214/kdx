$(document).ready(function(){

    $(".bottom").click(function(){
        $(".hidden__item--bottom").toggle(1000);
    });
        $(".top").click(function(){
        $(".hidden__item--top").toggle(1000);
    });
     $(".dropdown").click(function(){
        $(".nav__dropdown").toggle();
    });
  //    $( ".dropdown" ).click(function() {
  // $( this ).toggleClass( "active" );
// });
});
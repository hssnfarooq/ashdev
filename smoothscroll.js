$(document).ready(function(){

var headerHeight = $('.navbar').outerHeight();

$('.slidesection').click(function(e){
console.log(headerHeight);

var linkhref = $(this).attr('href');
$('html,body').animate({
scrollTop: $(linkhref).offset().top-headerHeight
},500);
e.preventDefault();
})







});
$(document).ready(function() {
    var menu = $('.menu');
    var mission = $('.mission');
    // SCROLL TARGETS
$('#scrollMenu').click(zenscroll.center(menu, 1200),
$('#scrollMission').click(zenscroll.to(mission, 1200)
// $('#scrollLocation').click(zenscroll.center(location, 1200).addClass('animated bounceIn');
});
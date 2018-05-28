$(document).ready(function() {
    var menu = document.getElementById("menu");
    var mission = document.getElementById("mission");
    var location = document.getElementById("location");
    var top = document.getElementById("top");

    zenscroll.to(menu);
    zenscroll.to(mission);
    zenscroll.to(location);
    zenscroll.to(top);
    
    // SCROLL TARGETS
//$('#scrollMenu').click(zenscroll.to(menu, 1000));
//$('#scrollMission').click(zenscroll.to(mission, 1000));
//$('#scrollMission').click(zenscroll.to(mission, 1000));
//$('#scrollMission').click(zenscroll.to(top, 1000));
});
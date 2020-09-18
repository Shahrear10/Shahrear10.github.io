function time() {
    var t = new Date();
    seconds = t.getSeconds();
    minutes = t.getMinutes();
    hours = t.getHours();
    about = "AM";
    // 1st logic for railway to normal time
    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        about = "PM";
    }
    // 1st logic ends.
    //2nd logic for having 0 before the numbers from 1-9
    disseconds = seconds;
    disminutes = minutes;
    dishours = hours;
    if (seconds<=9) {
        disseconds = "0"+seconds.toString();}
    else{disseconds = seconds}
    if (minutes<=9) {
        disminutes = "0"+minutes.toString();}
    else{disminutes = minutes}
    if (hours<=9) {
        dishours = "0"+hours.toString();}
    else{dishours = hours}
    //2nd logic ends

    $("#hours").html(dishours+" : ");
    $("#minutes").html(disminutes+" : ");
    $("#seconds").html(disseconds+" ");
    $("#about").html(about);

};
 setInterval(time, 1000);



setInterval(function(){
    var d = new Date();
    //hours
    var hours=d.getHours();
    if(hours<10){
        hours = "0"+ hours;
    }
    document.getElementById("hours").innerHTML=hours;
    
    //minutes
    var minutes = d.getMinutes();
    if(minutes < 10){
        minutes = "0"+ minutes;
    }
    document.getElementById("minutes").innerHTML=minutes;
    
    //seconds
    var seconds=d.getSeconds();
    if(seconds<10){
        seconds = "0"+ seconds;
    }
    document.getElementById("seconds").innerHTML=seconds;
});

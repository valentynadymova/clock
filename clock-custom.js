var startTime = new Date();

function clock() {

    let mytime = new Date();
    let hours=mytime.setHours(5);
    let minutes=mytime.setMinutes(25);
    let seconds=mytime.setSeconds(33);
    
    let diff = new Date() - startTime;
    
  
    mytime.setMilliseconds(mytime.getMilliseconds() + diff);

    seconds = mytime.getSeconds();
    minutes = mytime.getMinutes();
    hours = mytime.getHours();

    let currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("Timer").innerHTML = currentTime;  

    localStorage.setItem('my-time', currentTime);
    const lastVisit=localStorage.getItem("my-time");
    console.log(lastVisit)
    

};

setInterval(clock, 1000);










